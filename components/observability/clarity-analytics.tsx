'use client';

import Clarity from '@microsoft/clarity';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { resolveAnalyticsPageId } from '@/lib/analytics/navigation';

let initialized = false;

export function ClarityAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();
    if (process.env.NODE_ENV !== 'production' || !projectId || !pathname) return;

    if (!initialized) {
      Clarity.init(projectId);
      initialized = true;
    }

    const pageId = resolveAnalyticsPageId(pathname);
    Clarity.setTag('page', pageId);
    Clarity.setTag('authenticated', 'false');
    Clarity.setTag('role', 'anonymous');
  }, [pathname]);

  return null;
}
