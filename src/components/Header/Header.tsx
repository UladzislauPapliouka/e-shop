import React, { FC, useState } from "react";
import logo from "../../assets/svg/logo.svg";
import { CartIcon } from "../CartIcon/CartIcon";
import { ProfileIcon } from "../ProfileIcon/ProfileIcon";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
export const Header: FC = () => {
  const categories = [ "Phones","Laptops","Teblets" ];
  const [ choosenCategories, setChoosen ] =useState<string>("All categories");
  return(
    <div className={styles.header}>
      <img src={logo} alt="" />
      <SearchBar 
      categoriesOptions={categories} 
      choosenCategories={choosenCategories} 
      setChoosenCategor={(ctg?:string) => ctg ? setChoosen(ctg) : setChoosen("All categories")} />
      <CartIcon size={50} color={"red"} bgColor={"black"}/>
      <ProfileIcon isAuthorized={true} size={50} username="Vlad Pap" />
    </div>
   );
};