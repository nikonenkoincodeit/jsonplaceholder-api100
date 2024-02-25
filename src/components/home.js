import { getData } from "../api";
import { markupUsers } from "../markup";
import { addMarkup } from "../helpers";
import { tBodyEl } from "../refs";

getData("users")
  .then((data) => {
    const markup = markupUsers(data);
    addMarkup(tBodyEl, markup);
  })
  .catch((error) => console.log(error));

tBodyEl.addEventListener("click", (event) => {
  location.href =
    "/user.html?userid=" + event.target.closest(".js-tr").dataset.userid;
});
