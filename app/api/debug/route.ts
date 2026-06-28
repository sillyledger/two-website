import { createClient } from '../../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, target_site, status')
    .eq('target_site', 'two.so')

  return NextResponse.json({ data, error })
}
