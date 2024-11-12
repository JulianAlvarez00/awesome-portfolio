// app/api/github/route.ts
import { NextResponse } from 'next/server';
import { getGithubUserData } from '@/utils/github';

export async function GET() {
  try {
    const data = await getGithubUserData();
    
    // Validar la estructura de los datos antes de enviarlos
    if (!data || !Array.isArray(data.repositories)) {
      console.error('Invalid data structure:', data);
      return NextResponse.json(
        { message: 'Invalid data structure from GitHub' },
        { status: 500 }
      );
    }

    // Asegurarse de que cada repositorio tenga un ID único
    const validRepositories = data.repositories.filter(repo => repo && repo.id);

    // Estructurar los datos según la interfaz GithubProfileData
    const responseData = {
      contributionsCollection: data.contributionsCollection,
      repositories: validRepositories.map(repo => ({
        id: repo.id,
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count || 0,
        forks_count: repo.forks_count || 0
      }))
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error in GitHub API route:', error);
    return NextResponse.json(
      { 
        message: 'Error fetching GitHub data',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}