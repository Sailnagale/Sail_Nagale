// src/app/projects/page.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ProjectsComponent from "../../projects/ProjectsComponent";

export default function ProjectsPageWrapper() {
  const pathname = usePathname();
  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    // We set a timer to trigger a re-render.
    // This is crucial for fixing the animation issue on navigation.
    const timer = setTimeout(() => {
      setForceRender(true);
    }, 100);

    // This is a cleanup function. It runs when the component is unmounted or
    // before the effect re-runs. This prevents memory leaks and
    // avoids conflicts if the user navigates away quickly.
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{forceRender ? <ProjectsComponent key={pathname} /> : null}</>;
}
