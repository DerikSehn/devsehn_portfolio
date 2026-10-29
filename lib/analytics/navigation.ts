import { ANALYTICS_PAGES } from '@/generated/analytics-pages';

function splitPath(value: string): string[] {
  return value.split('?')[0].split('#')[0].split('/').filter(Boolean);
}

function matchesRoute(route: string, pathname: string): boolean {
  const routeSegments = splitPath(route);
  const pathSegments = splitPath(pathname);

  if (routeSegments.length !== pathSegments.length) return false;

  return routeSegments.every((routeSegment, index) => {
    if (/^:[^/]+$/.test(routeSegment)) return true;
    return routeSegment === pathSegments[index];
  });
}

export function resolveAnalyticsPageId(pathname: string): string {
  const cleanPathname = `/${splitPath(pathname).join('/')}` || '/';
  return ANALYTICS_PAGES.find(({ route }) => matchesRoute(route, cleanPathname))?.pageId ?? '/not-found';
}
