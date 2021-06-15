import CloseIcon from "@material-ui/icons/Close";

const HeaderSearchBar = ({
  searchText,
  setSearchText,
  onSearchHelper,
  cancelButtonHelper,
}) => {
  return (
    <div className="searchBar">
      <input
        className="searchBarInput"
        type="text"
        placeholder="Search for an image"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? onSearchHelper() : null)}
      />
      {searchText ? (
        <button className="searchBarClearButton" onClick={cancelButtonHelper}>
          <CloseIcon />
        </button>
      ) : null}
    </div>
  );
};

export default HeaderSearchBar;
