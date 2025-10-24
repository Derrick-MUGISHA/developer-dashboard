// src/hooks/useGitHub.ts
import type { GitHubProfile } from "@/types/github";
import { useEffect, useState } from "react";

export const useGitHub = (username: string) => {
  const [data, setData] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);

      // Check cache first
      const cached = localStorage.getItem(`github-${username}`);
      if (cached) {
        setData(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://api.github.com/users/Derrick-MUGISHA`);
        if (!response.ok) throw new Error("Failed to fetch GitHub data");
        const json = await response.json();

        const profile: GitHubProfile = {
          login: json.login,
          id: json.id,
          node_id: json.node_id,
          avatar_url: json.avatar_url,
          html_url: json.html_url,
          name: json.name,
          company: json.company,
          blog: json.blog,
          location: json.location,
          email: json.email,
          hireable: json.hireable,
          bio: json.bio,
          twitter_username: json.twitter_username,
          public_repos: json.public_repos,
          public_gists: json.public_gists,
          followers: json.followers,
          following: json.following,
          created_at: json.created_at,
          updated_at: json.updated_at,
        };

        setData(profile);
        localStorage.setItem(`github-${username}`, JSON.stringify(profile));
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  return { data, loading, error };
};
