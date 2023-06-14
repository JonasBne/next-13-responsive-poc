'use client'

import { useMediaQuery } from "usehooks-ts";

interface Props {
    data: { id: number, name: string, type: string }[];
}

// this is a client-side rendered component which receives it's data from a server-side rendered component
// so the heavy lifting is done on the server and the client only needs to render the correct layout based on the viewport size
export const DevicesResponsiveContent = ({ data }: Props) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
        {
            isMobile ? (
                <>
                <p>Mobile layout</p>
                <ul style={{ color: 'red'}}>
                    {
                        data.map(device => (
                            <li key={device.id}>
                                <p>{device.name}</p>
                                <p>{device.type}</p>
                            </li>
                        ))
                    }
                </ul>
                </>
            ) : (
                <>
                <p>Desktop layout</p>
                <ul style={{ color: 'blue'}}>
                    {
                        data.map(device => (
                            <li key={device.id}>
                                <p>{device.name}</p>
                                <p>{device.type}</p>
                            </li>
                        ))
                    }
                </ul>
                </>
            )

        }
        </>
    )
}