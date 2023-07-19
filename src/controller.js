import createHeader from "./DOM/header";

const displayPage = () => {
  createHeader().then((el) => {
    document.body.appendChild(el);
  });
};

displayPage();
