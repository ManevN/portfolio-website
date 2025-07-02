export async function fetchRepo(owner: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

  if (!res.ok) {
    throw new Error('Failed to fetch repo data');
  }

  const data = await res.json();

  return {
    name: data.name,
    description: data.description,
    url: data.html_url,
    stars: data.stargazers_count,
    forks: data.forks_count,
    language: data.language,
    updatedAt: data.updated_at,
  };
}
