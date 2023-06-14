import { DevicesContainer } from "./components/devices/DevicesContainer"

export default function Home() {
  return (
    <main>
      <p>shared element between mobile and desktop</p>
      <DevicesContainer />
    </main>
  )
}