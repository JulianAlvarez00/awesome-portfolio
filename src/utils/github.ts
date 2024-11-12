import { GithubProfileData, GitHubApiResponse } from '@/types/github';

const GITHUB_API_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

if (!GITHUB_API_TOKEN) {
  throw new Error('GITHUB_TOKEN is not defined in environment variables');
}

if (!GITHUB_USERNAME) {
  throw new Error('GITHUB_USERNAME is not defined in environment variables');
}

export async function getGithubUserData(): Promise<GithubProfileData> {
  const query = `
    query($username: String!) {
      user(login: $username) {
        repositories(first: 6, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
          nodes {
            id
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
            }
            repositoryTopics(first: 5) {
              nodes {
                topic {
                  name
                }
              }
            }
            createdAt
            updatedAt
          }
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username: GITHUB_USERNAME },
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const data = (await response.json()) as GitHubApiResponse;

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    // Transform the data to match our expected format
    const transformedData: GithubProfileData = {
      repositories: data.data.user.repositories.nodes.map((repo) => ({
        id: parseInt(repo.id),
        name: repo.name,
        description: repo.description,
        html_url: repo.url,
        stargazers_count: repo.stargazerCount,
        forks_count: repo.forkCount,
        language: repo.primaryLanguage?.name || null,
        topics: repo.repositoryTopics.nodes.map((topic) => topic.topic.name)
      })),
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
          weeks: data.data.user.contributionsCollection.contributionCalendar.weeks
        }
      }
    };

    return transformedData;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error;
  }
}