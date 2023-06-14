'use client'

import DesktopPageContent from './components/DesktopPageContent'
import DesktopLayout from './components/desktop/DesktopLayout'
import MobilePageContent from './components/MobilePageContent'
import MobileLayout from './components/mobile/MobileLayout'
import { useMediaQuery } from 'usehooks-ts'

export default function Home() {
  // if this page is a client-side rendered component we cannot access the headers to retrieve the user-agent
  // but we can use the useMediaQuery hook to determine the screen size
  const isMobile = useMediaQuery("(max-width: 768px)");

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
