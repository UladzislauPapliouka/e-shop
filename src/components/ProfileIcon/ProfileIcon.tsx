import React, { FC } from "react";
import style from "./Profile.module.scss"
import { Avatar } from "@mui/material"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { getAvatarShortName } from "../../methods/methods";
interface ProfileIconProps {
    isAuthorized: boolean,
    avatarSRC?: string,
    username?: string,
    size:number
}

export const ProfileIcon: FC<ProfileIconProps> = ({
    isAuthorized,
    avatarSRC,
    username,
    size
}) => {
    const avatarStyles = {
        height: `${size}px`,
        width: `${size}px`,
        fontSize: `${size/2}px`,
        "&:hover" : { 
            cursor: "pointer",
            filter: "grayscale(60%)"
        }
    }
    if(isAuthorized){
        return <Avatar src={avatarSRC} alt={username} sx={avatarStyles} >{getAvatarShortName(username)}</Avatar>
    }
    return <Avatar sx={avatarStyles}><PermIdentityIcon sx={{fontSize: `${size/2}px`}}/></Avatar>
}