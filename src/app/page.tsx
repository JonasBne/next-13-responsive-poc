import { headers } from 'next/headers'

import DesktopPageContent from './components/DesktopPageContent'
import DesktopLayout from './components/desktop/DesktopLayout'
import MobilePageContent from './components/MobilePageContent'
import MobileLayout from './components/mobile/MobileLayout'

export default function Home() {
  // this page is a server-side rendered component
  // so we can use the headers() function to get the user-agent and determine whether or not the user is on a mobile device
  // this information is used to determine which layout to render initially and send back to the client
  // we pass the isMobile boolean to the MobilePageContent and DesktopPageContent components
  // these are client-side rendered components that contain state to keep track of the user's screen size
  // so we combine the information from the server and use this as the initial state for the client-side rendered components
  // so we make sure that what is rendered on the server matches what is rendered on the client so there are no errors
  // but then we keep track of screen resizes and store this information in local state such that we can correctly toggle
  // between the mobile and desktop layouts
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
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
