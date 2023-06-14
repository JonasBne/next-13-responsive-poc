'use client'

import DesktopPageContent from './components/DesktopPageContent'
import DesktopLayout from './components/desktop/DesktopLayout'
import MobilePageContent from './components/MobilePageContent'
import MobileLayout from './components/mobile/MobileLayout'

export default function Home() {
  // if this page is a client-side rendered component we cannot access the headers to retrieve the user-agent
  // but we can use the window object to retrieve the user-agent from the navigator object
  // the client-side components are pre-rendered on the server and the user-agent is not available at that point
  // so we need to add a check
  const userAgent = typeof window !== undefined && window.navigator.userAgent || '';
  const isMobile = Boolean( userAgent!.match( /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i ));

  return (
    <main>
      <MobilePageContent isMobile={isMobile}>
        <MobileLayout />
      </MobilePageContent>

      <DesktopPageContent isDesktop={!isMobile}>
        <DesktopLayout />
      </DesktopPageContent>
    </main>
  )
}
