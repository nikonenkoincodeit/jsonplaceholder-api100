import { getData } from "../api";
import { markupByUserId, createListAlbum } from "../markup";
import { userInfoTableEl, userInfoAlbumEl } from "../refs";
import { addMarkup } from "../helpers";

const search = location.search;
const searchParams = new URLSearchParams(search);
const paramsId = searchParams.get("userid");

getData(`users/${paramsId}`)
  .then((data) => {
    const markup = markupByUserId(data);
    addMarkup(userInfoTableEl, markup);
  })
  .catch((error) => {
    console.log(error);
  });

getData(`albums?userId=${paramsId}`)
  .then((res) => {
    const markup = createListAlbum(res);
    addMarkup(userInfoAlbumEl, markup);
  })
  .catch((error) => console.log(error));
