import { DesktopPageContent } from "./components/DesktopPageContent";
import { MobilePageContent } from "./components/MobilePageContent";
import { DesktopLayout } from "./components/desktop/DesktopLayout";
import { MobileLayout } from "./components/mobile/MobileLayout";

export default function Home() {
  return (
    <main>
      <MobilePageContent>
        <MobileLayout />
      </MobilePageContent>
      <DesktopPageContent>
        <DesktopLayout />
      </DesktopPageContent>
    </main>
  )
}
