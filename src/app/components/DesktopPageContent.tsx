'use client';

import { useMediaQuery } from "usehooks-ts";

interface Props {
    children: React.ReactNode;
}

export const DesktopPageContent = ({ children }: Props) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <>
        { isDesktop && children }
        </>
    )
}