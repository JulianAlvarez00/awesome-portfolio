// src/types/github.ts
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

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

export interface ContributionDay {
  contributionCount: number;
  date: string;
}

export interface GithubProfileData {
  repositories: Repository[];
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
      weeks: {
        contributionDays: ContributionDay[];
      }[];
    };
  };
}