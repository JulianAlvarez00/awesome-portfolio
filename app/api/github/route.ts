// app/api/github/route.ts
import { NextResponse } from 'next/server';
import { getGithubUserData } from '@/utils/github';

export async function GET() {
  try {
    const data = await getGithubUserData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GitHub API route:', error);
    return NextResponse.json(
      { message: 'Error fetching GitHub data' },
      { status: 500 }
    );
  }
}