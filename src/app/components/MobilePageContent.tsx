'use client';

import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface Props {
    children: React.ReactNode;
    isMobile: boolean;
}

const MobilePageContent = ({ children, isMobile }: Props) => {
    const matches = useMediaQuery("(max-width: 768px)");
    const [shouldRenderMobileContent, setShouldRenderMobileContent] = useState(isMobile);
    
    useEffect(() => {
        if (matches) {
            setShouldRenderMobileContent(true);
        } else {
            setShouldRenderMobileContent(false);
        }
    }, [matches])

    return (
        <>
        { shouldRenderMobileContent && children }
        </>
    )
}

export default MobilePageContent;