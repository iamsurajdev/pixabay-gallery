import axios from "axios";

const URL = "https://pixabay.com/api/?key=14882523-63879aa1252a9835ccb42efba";

const ApiCalls = {
  searchForImages: (searchTerm) =>
    axios.get(`${URL}&q=${searchTerm}&image_type=photo`),

  searchForImagesPagination: (searchTerm, page) =>
    axios.get(`${URL}&q=${searchTerm}&image_type=photo&page=${page}`),

  fetchRandomImages: () => axios.get(`${URL}&image_type=photo`),

  fetchRandomImagesPagination: (page) =>
    axios.get(`${URL}&image_type=photo&page=${page}`),
};

export default ApiCalls;
