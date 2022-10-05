import  React, { FC } from "react"
import style from "./SearchBar.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface SearchBarProps {
  categoriesOptions?: Array<String>,
  choosenCategories?: String,
  writtenString?: String,
}

export const SearchBar: FC<SearchBarProps> = ({
  categoriesOptions = [],
  choosenCategories = "All Categories",
  writtenString = ""
}) => {
    return (
        <FormControl variant="standard" sx={{
          border: "1px #9d9d9d solid",
          borderRadius: "100px",
          padding:" 2px  0 2px 8px",
          width: "100%",
          boxSizing: "border-box"
        }}>
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
              <InputAdornment sx={{height: "100%",}} position="end">
                <Button sx={{
                  height: "100%",
                  borderRadius: "0 100px 100px 0",
                  width: "100%",
                  padding: "auto",
                  background: "#F6F9FC",
                  color: "#4B566B",
                  textTransform: "capitalize"
                  }}><span>{choosenCategories}</span><KeyboardArrowDownIcon/></Button>

              </InputAdornment>
            }
            disableUnderline
          />
        </FormControl>
    )
}