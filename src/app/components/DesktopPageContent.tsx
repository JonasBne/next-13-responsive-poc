'use client';

import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface Props {
    children: React.ReactNode;
    isDesktop: boolean;
}

const DesktopPageContent = ({ children, isDesktop }: Props) => {
    const matches = useMediaQuery("(min-width: 768px)");
    const [shouldRenderDesktopContent, setShouldRenderDesktopContent] = useState(isDesktop);
    
    useEffect(() => {
        if (matches) {
            setShouldRenderDesktopContent(true);
        } else {
            setShouldRenderDesktopContent(false);
        }
    }, [matches])

    useEffect(() => {
        console.log('matches dekstop size', matches)
        console.log('should render desktop', shouldRenderDesktopContent)
    }, [matches, shouldRenderDesktopContent])

    return (
        <>
        { shouldRenderDesktopContent && children }
        </>
    )
}

export default DesktopPageContent;