import { NextRequest, NextResponse } from 'next/server';
import { menuItems } from '@/data/menu';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const query = searchParams.get('q')?.toLowerCase();
  const dietary = searchParams.get('dietary');

  let filtered = [...menuItems];

  if (category && category !== 'BARCHASI') {
    filtered = filtered.filter(item => item.category === category);
  }

  if (dietary) {
    filtered = filtered.filter(item => 
      item.dietaryTags.some(tag => tag.toLowerCase() === dietary.toLowerCase())
    );
  }

  if (query) {
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.nameUz.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(query))
    );
  }

  return NextResponse.json({
    success: true,
    total: filtered.length,
    items: filtered
  });
}
