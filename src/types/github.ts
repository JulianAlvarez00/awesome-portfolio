// src/types/github.ts

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