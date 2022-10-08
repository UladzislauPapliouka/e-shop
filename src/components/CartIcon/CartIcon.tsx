import React, { FC } from "react";
import style from "./CartIcon.module.scss";
import { Avatar } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

interface CartIconProps {
    size:number,
    color: string,
    bgColor: string
}

export const CartIcon: FC<CartIconProps> = ({
    size,
    color,
    bgColor
}) => {
    const avatarStyles = {
        height: `${size}px`,
        width: `${size}px`,
        fontSize: `${size/2}px`,
        backgroundColor: bgColor,
        "&:hover" : { 
            cursor: "pointer",
            filter: "grayscale(60%)"
        }
    };
    const IconStyles = {
        fontSize: `${size/2}px`,
        color: color
    };

    return <Avatar classes={style.root} sx={avatarStyles}><ShoppingBagOutlinedIcon sx={IconStyles}/></Avatar>;
};