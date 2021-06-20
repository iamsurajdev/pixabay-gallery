import { useDispatch, useSelector } from "react-redux";
import {
  getRandomImages,
  resetPage,
  searchImages,
  updateSearchText,
} from "../store/actions";
import HeaderSearchBar from "./headerSearchBar";

const Header = () => {
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.searchStore.searchText);

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
    </div>
  );
};

export default Header;
