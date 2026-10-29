import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.cwd();
const appDirectory = join(root, 'app');
const outputPath = join(root, 'generated', 'analytics-pages.ts');

function isPageFile(directory) {
  return existsSync(join(directory, 'page.tsx')) || existsSync(join(directory, 'page.ts')) || existsSync(join(directory, 'page.jsx')) || existsSync(join(directory, 'page.js'));
}

function findPageDirectories(directory, pages = []) {
  for (const entry of readdirSync(directory)) {
    const fullPath = join(directory, entry);
    if (!statSync(fullPath).isDirectory()) continue;
    if (isPageFile(fullPath)) pages.push(fullPath);
    findPageDirectories(fullPath, pages);
  }
  return pages;
}

function normalizeSegment(segment) {
  if (/^\[\[\.\.\.[^\]]+\]\]$/.test(segment)) return `:${segment.slice(5, -3)}`;
  if (/^\[\.\.\.[^\]]+\]$/.test(segment)) return `:${segment.slice(4, -1)}`;
  if (/^\[[^\]]+\]$/.test(segment)) return `:${segment.slice(1, -1)}`;
  return segment;
}

function routeFromDirectory(directory) {
  const relativeDirectory = relative(appDirectory, directory).split(sep).join('/');
  if (!relativeDirectory) return '/';
  const segments = relativeDirectory
    .split('/')
    .filter((segment) => !segment.startsWith('(') && !segment.endsWith(')'))
    .map(normalizeSegment);
  return `/${segments.join('/')}`;
}

const routes = (isPageFile(appDirectory) ? [appDirectory] : [])
  .concat(findPageDirectories(appDirectory))
  .map(routeFromDirectory)
  .filter((route, index, values) => values.indexOf(route) === index)
  .sort((a, b) => a.localeCompare(b));

const content = `export const ANALYTICS_PAGES = [\n${routes.map((route) => `  { route: '${route}', pageId: '${route}' },`).join('\n')}\n] as const;\n`;

if (process.argv.includes('--check')) {
  if (!existsSync(outputPath)) {
    console.error('Analytics catalog is missing. Run npm run analytics:catalog:generate.');
    process.exit(1);
  }
  const current = readFileSync(outputPath, 'utf8');
  if (current !== content) {
    console.error('Analytics catalog is outdated. Run npm run analytics:catalog:generate.');
    process.exit(1);
  }
  console.log(`Analytics catalog is current (${routes.length} pages).`);
} else {
  writeFileSync(outputPath, content);
  console.log(`Generated analytics catalog with ${routes.length} pages.`);
}
