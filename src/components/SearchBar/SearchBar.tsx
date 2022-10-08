import React, { FC, useRef } from "react";
import style from "./SearchBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SearchBarProps {
  categoriesOptions?: Array<string>;
  choosenCategories?: string;
  writtenString?: string;
}

export const SearchBar: FC<SearchBarProps> = ({
  categoriesOptions = [],
  choosenCategories = "All Categories",
  writtenString = "sdad",
}) => {
  const [archon, setArchon] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setArchon(event.currentTarget);
  };
  const handleClose = () => {
    setArchon(null);
  };
  return (
    <FormControl
      variant="standard"
      sx={{
        border: "1px #9d9d9d solid",
        borderRadius: "100px",
        padding: " 2px  0 2px 8px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Input
        fullWidth
        id="input-with-icon-adornment"
        placeholder="Searching for..."
        value={writtenString}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment sx={{ height: "100%" }} position="end">
            <Button
              onClick={handleClick}
              sx={{
                height: "100%",
                borderRadius: "0 100px 100px 0",
                width: "100%",
                padding: "auto",
                background: "#F6F9FC",
                color: "#4B566B",
                textTransform: "capitalize",
              }}
            >
              <span>{choosenCategories}</span>
              <KeyboardArrowDownIcon />
            </Button>
            <Menu open={!!archon} onClose={handleClose} anchorEl={archon}>
              {categoriesOptions.map((ctg) => (
                <MenuItem onClick={handleClose}>ctg</MenuItem>
              ))}
            </Menu>
          </InputAdornment>
        }
        disableUnderline
      />
    </FormControl>
  );
};
