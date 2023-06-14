import { DevicesResponsiveContent } from './DevicesResponsiveContent';
import data from './devices.json';

// this is a wrapper container components that fetches the data on the server and passes it to a client-side rendered component
// which will take care of determining the correct layout, i.e. either mobile or desktop
export const DevicesContainer = () => {
    // in a real scenario this would be an api request
    const devices: Array<{ id: number, name: string, type: string }> = data;

    return (
        <>
        <p>shared element between mobile and desktop</p>
        <DevicesResponsiveContent data={devices} />
        </>
    )
}