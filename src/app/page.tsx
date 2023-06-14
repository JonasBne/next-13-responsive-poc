'use client';

import { useMediaQuery } from "usehooks-ts";
import { DesktopLayout } from "./components/desktop/DesktopLayout";
import { MobileLayout } from "./components/mobile/MobileLayout";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
    <h3>This is a responsive layout</h3>
    {
      isDesktop ? <DesktopLayout /> : <MobileLayout />
    }
    </>
  )
}
