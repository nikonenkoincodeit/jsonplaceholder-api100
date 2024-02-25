import { getData } from "../api";
import { markupByUserId } from "../markup";
import { userInfoTableEl } from "../refs";
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
