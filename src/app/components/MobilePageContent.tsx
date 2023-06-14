'use client';

import { useMediaQuery } from "usehooks-ts";

interface Props {
    children: React.ReactNode;
}

export const MobilePageContent = ({ children }: Props) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <>
        { !isDesktop && children }
        </>
    )
}