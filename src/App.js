import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import Header from "./components/header";
import ImagesGallery from "./components/imagesGallery";
import { getRandomImages } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();
  const imagesStoreImages = useSelector((state) => state.imagesStore.images);
  const searchText = useSelector((state) => state.searchStore.searchText);

  useEffect(() => {
    if (imagesStoreImages.length === 0 && searchText === "") {
      dispatch(getRandomImages());
    }
  }, [imagesStoreImages, searchText, dispatch]);

  return (
    <>
      <Header />
      <ImagesGallery />
    </>
  );
};

export default App;
