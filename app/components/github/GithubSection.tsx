'use client';

import { useEffect, useState } from 'react';
import { GithubProfileData } from '@/types/github';

export default function GithubSection() {
  const [githubData, setGithubData] = useState<GithubProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) throw new Error('Failed to fetch GitHub data');
        const data = await response.json();
        setGithubData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#64ffda]" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-400 py-4">Error: {error}</div>;
  }

  if (!githubData?.repositories) {
    return null;
  }

  return (
    <div className="space-y-8">
      {githubData.contributionsCollection?.contributionCalendar?.totalContributions && (
        <div className="flex items-center gap-4 text-gray-300">
          <span className="px-4 py-2 bg-[#1a1f2e] rounded-md">
            Total Contributions: {githubData.contributionsCollection.contributionCalendar.totalContributions}
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {githubData.repositories.map((repo) => (
          <div
            key={repo.id}
            className="bg-[#1a1f2e] rounded-lg p-6 hover:bg-[#233554] transition-colors duration-300 border border-[#233554]"
          >
            <h3 className="text-xl font-semibold mb-3">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#64ffda] transition-colors"
              >
                {repo.name}
              </a>
            </h3>
            {repo.description && (
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {repo.description}
              </p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              {repo.language && (
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#64ffda] mr-2" />
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <span>⭐</span>
                {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <span>🍴</span>
                {repo.forks_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}