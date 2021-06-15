import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import {
  getRandomImagesPagination,
  searchImagesPagination,
} from "../store/actions";
import ImageDetailsDrawer from "./imageDetailsDrawer";

const ImagesGallery = () => {
  const imagesStoreImages = useSelector((state) => state.imagesStore.images);
  const searchText = useSelector((state) => state.searchStore.searchText);
  const imagesStorePageNumber = useSelector(
    (state) => state.imagesStore.pageNumber
  );
  const imagesStoreTotalPages = useSelector(
    (state) => state.imagesStore.totalPages
  );

  const dispatch = useDispatch();

  const [imageDrawer, setImageDrawer] = useState(null);

  const openDrawer = (data) => {
    setImageDrawer(data);
  };
  const closeDrawer = () => {
    setImageDrawer(null);
  };

  const loadMoreHelper = () => {
    if (searchText) {
      dispatch(searchImagesPagination(searchText, imagesStorePageNumber));
    } else {
      dispatch(getRandomImagesPagination(imagesStorePageNumber));
    }
  };

  return (
    <div className="container">
      {
        // * images list
      }
      {/* <div> */}
      {imagesStoreImages ? (
        <InfiniteScroll
          className="imageGalleryContainer"
          style={imageDrawer === null ? { width: "98%" } : { width: "58%" }}
          pageStart={0}
          loadMore={loadMoreHelper}
          hasMore={imagesStorePageNumber < imagesStoreTotalPages ? true : false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {imagesStoreImages.map((item) => (
            <div className="cardContainer" key={item.id}>
              <div className="imageContainer" onClick={() => openDrawer(item)}>
                <img
                  className="singleImage"
                  src={item.webformatURL}
                  alt="preview"
                />
              </div>
              <p className="cardTitle">{item.tags}</p>
            </div>
          ))}
        </InfiniteScroll>
      ) : (
        <h1>No data available</h1>
      )}
      {/* </div> */}

      {imageDrawer ? (
        <ImageDetailsDrawer
          closeDrawer={closeDrawer}
          imageDrawer={imageDrawer}
        />
      ) : null}
    </div>
  );
};

export default ImagesGallery;
