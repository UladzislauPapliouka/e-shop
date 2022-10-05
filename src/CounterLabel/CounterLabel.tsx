import { Badge } from "@mui/material";
import React, { FC, ReactNode } from "react";
import styles from "./CounterLabel.module.scss"

interface CounterLabelProps {
    children: ReactNode,
    counter: number
}

export const CounterLabel: FC<CounterLabelProps> = ({
    children,
    counter
}) => {
    return (
        <Badge badgeContent={counter} max={9} color="secondary" overlap="circular" showZero={false} >
            {children}
        </Badge>
    )
}