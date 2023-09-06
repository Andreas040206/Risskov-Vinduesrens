// Styles
import "./styles.css";

// DOM
import createHeader from "./DOM/header";
import creatingHomepage from "./DOM/Pages/homepage";
import createContactUsPage from "./DOM/Pages/contactUsPage";
import createFAQPage from "./DOM/Pages/FAQPage";
import createAboutUsPage from "./DOM/Pages/aboutUsPage";
import createFooter from "./DOM/footer";
import createPricePage from "./DOM/Pages/pricePage";

// Img
import icon from "./Img/Risskovpudsninglogo.svg";

const displayPage = () => {
  Promise.all([
    createHeader(),
    creatingHomepage(),
    createPricePage(),
    createFAQPage(),
    createAboutUsPage(),
    createContactUsPage(),
    createFooter(),
  ]).then((elAry) => {
    elAry.forEach((el) => {
      document.body.appendChild(el);
    });
  });

  // createHeader().then((el) => {
  //   document.body.appendChild(el);
  // });
  // creatingHomepage().then((el) => {
  //   document.body.appendChild(el);
  // });
  // createPricePage().then((el) => {
  //   document.body.appendChild(el);
  // });
  // createFAQPage().then((el) => {
  //   document.body.appendChild(el);
  // });
  // createAboutUsPage().then((el) => {
  //   document.body.appendChild(el);
  // });
  // createContactUsPage().then((el) => {
  //   document.body.appendChild(el);
  // });
  // createFooter().then((el) => {
  //   document.body.appendChild(el);
  // });
};

const favicon = document.createElement("link");
favicon.setAttribute("rel", "icon");
favicon.setAttribute("type", "image/x-icon");
favicon.setAttribute("href", icon);

document.head.appendChild(favicon);

displayPage();
