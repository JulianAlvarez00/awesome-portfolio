// /types/github.ts
export interface GithubProfileData {
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
      weeks?: Array<{
        contributionDays: Array<{
          contributionCount: number;
          date: string;
        }>;
      }>;
    };
  };
  repositories: Array<{
    id: string;  // Cambiado de string a string porque GraphQL devuelve IDs como strings
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    topics?: string[];
  }>;
}

export interface GitHubApiResponse {
  data: {
    user: {
      repositories: {
        nodes: Array<{
          id: string;
          name: string;
          description: string | null;
          url: string;
          stargazerCount: number;
          forkCount: number;
          primaryLanguage: {
            name: string;
          } | null;
          repositoryTopics: {
            nodes: Array<{
              topic: {
                name: string;
              };
            }>;
          };
          createdAt: string;
          updatedAt: string;
        }>;
      };
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              contributionCount: number;
              date: string;
            }>;
          }>;
        };
      };
    };
  };
  errors?: Array<{
    message: string;
  }>;
}