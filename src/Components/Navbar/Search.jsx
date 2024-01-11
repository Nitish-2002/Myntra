import { useState } from "react";
import Username from "../../images/user.png";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../Context/Context";
import SearchIcon from '@mui/icons-material/Search';
import { WidthFull } from "@mui/icons-material";

function Search() {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useSearchContext();

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    console.log(searchTerm);
  }

  return (
    <div className="navbar--search">
      <SearchIcon sx={{ padding:"10px"}}/>
      <input type="text" name="Search here" id="Search" value={searchTerm} onChange={handleSearch} onClick={() => navigate("/Category/men")} />
    </div>
  );
}

export default Search;