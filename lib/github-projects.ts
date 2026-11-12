import { selectedProjects, type Project, type SelectedProject } from '../data/portfolio';

const owner = 'Torresamanda';

function safeWebsite(value: unknown): string | undefined {
  if (typeof value !== 'string' || !value.trim()) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : undefined;
  } catch {
    return undefined;
  }
}

type ProjectResult = { project: Project; usedFallback: boolean };

async function getProject(selected: SelectedProject): Promise<ProjectResult> {
  const { repositoryName, ...details } = selected;
  const fallback: Project = {
    ...details,
    repository: `https://github.com/${owner}/${encodeURIComponent(repositoryName)}`,
  };

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${encodeURIComponent(repositoryName)}`,
      {
        headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'amanda-portfolio' },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!response.ok) throw new Error(`GitHub respondeu ${response.status}`);
    const repo: { description?: unknown; language?: unknown; homepage?: unknown } =
      await response.json();
    const description = typeof repo.description === 'string' ? repo.description.trim() : '';
    const language = typeof repo.language === 'string' ? repo.language.trim() : '';
    return {
      project: {
        ...fallback,
        description: description || fallback.description,
        tags: language ? Array.from(new Set([...fallback.tags, language])) : fallback.tags,
        website: safeWebsite(repo.homepage) || fallback.website,
      },
      usedFallback: false,
    };
  } catch (error) {
    console.warn(
      `Não foi possível atualizar ${repositoryName} pelo GitHub; usando dados locais.`,
      error,
    );
    return { project: fallback, usedFallback: true };
  }
}

export async function getSelectedProjects(): Promise<{
  projects: Project[];
  usedFallback: boolean;
}> {
  const results = await Promise.all(selectedProjects.slice(0, 4).map(getProject));
  return {
    projects: results.map(({ project }) => project),
    usedFallback: results.some((result) => result.usedFallback),
  };
}
