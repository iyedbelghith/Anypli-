import type { ReactNode } from "react";
 


export interface KpiCardProps {
    title: string;
    value: string | number;
    trend?: string;
    trendType?: "positive" | "negative";
    icon?: ReactNode;
}