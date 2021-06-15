import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getRandomImages,
  resetPage,
  searchImages,
  sortImagesBySize,
  sortImagesByViews,
  updateSearchText,
} from "../store/actions";
import HeaderSearchBar from "./headerSearchBar";
import HeaderSortingDropdown from "./headerSortingDropdown";

const options = [
  { id: 1, text: "By number of Views" },
  { id: 2, text: "By image Size" },
];

const ITEM_HEIGHT = 48;

const Header = () => {
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.searchStore.searchText);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    setAnchorEl(null);
    // views
    if (id === 1) {
      console.log("Selected Id : ", id);
      dispatch(sortImagesByViews());
    }
    // size
    if (id === 2) {
      console.log("Selected Id : ", id);
      dispatch(sortImagesBySize());
    }
  };

  const setSearchText = (value) => {
    dispatch(updateSearchText(value));
  };

  const onSearchHelper = () => {
    dispatch(resetPage());
    const searchTerm = searchText.replace(/\s+/g, "+");
    dispatch(searchImages(searchTerm));
  };

  const cancelButtonHelper = () => {
    dispatch(resetPage());
    setSearchText("");
    dispatch(getRandomImages());
  };

  return (
    <div className="headerContainer">
      {
        // * Title
      }
      <h1 className="headerTitle">Suraj’s Gallery</h1>

      {
        // * Search Bar
      }

      <HeaderSearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSearchHelper={onSearchHelper}
        cancelButtonHelper={cancelButtonHelper}
      />

      {
        // * shorting dropdown
      }
      <HeaderSortingDropdown
        open={open}
        options={options}
        handleClick={handleClick}
        handleClose={handleClose}
        ITEM_HEIGHT={ITEM_HEIGHT}
        anchorEl={anchorEl}
      />
    </div>
  );
};

export default Header;
