// Img
import backBtnImgSrc from "../Img/blackPlus.png";
import { servicevilkaarPopUp } from "./popUps";

const createFooter = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("footerPageCon");

    const footerCon = document.createElement("div");
    footerCon.classList.add("footerCon");

    const infoFooterEl = document.createElement("div");
    infoFooterEl.classList.add("footerElCon");

    const infoFooterHeader = document.createElement("span");
    infoFooterHeader.classList.add("footerElHeader");
    infoFooterHeader.textContent = "Information";

    const infoFooterElText1 = document.createElement("span");
    infoFooterElText1.classList.add("footerElText");
    infoFooterElText1.textContent = "Risskov Vinduespudsning";

    const infoFooterElText2 = document.createElement("span");
    infoFooterElText2.classList.add("footerElText");
    infoFooterElText2.textContent = "8240 Risskov";

    const infoFooterElText3 = document.createElement("span");
    infoFooterElText3.classList.add("footerElText");
    infoFooterElText3.textContent = "Tlf: (+45) 71 78 41 41";

    infoFooterEl.appendChild(infoFooterHeader);
    infoFooterEl.appendChild(infoFooterElText1);
    infoFooterEl.appendChild(infoFooterElText2);
    infoFooterEl.appendChild(infoFooterElText3);

    const linksFooterEl = document.createElement("div");
    linksFooterEl.classList.add("footerElCon");

    const linksFooterHeader = document.createElement("span");
    linksFooterHeader.classList.add("footerElHeader");
    linksFooterHeader.textContent = "Øvrige links";

    const linksFooterElText1 = document.createElement("span");
    linksFooterElText1.classList.add("footerElTextLink");
    linksFooterElText1.textContent = "Servicevilkår";

    linksFooterElText1.addEventListener("click", () => {
      document.body.appendChild(servicevilkaarPopUp("noBestil"));
    });

    const linksFooterElText2 = document.createElement("span");
    linksFooterElText2.classList.add("footerElTextLink");
    linksFooterElText2.textContent = "Privatlivspolitik";

    linksFooterElText2.addEventListener("click", () => {
      const bg = document.createElement("div");
      bg.classList.add("bgBluredCover");

      const con = document.createElement("div");
      con.classList.add("privPCon");

      const text = document.createElement("span");
      text.classList.add("privPText");
      text.textContent =
        "Vi bruger ikke cookies og gemmer derfor ingen data om vores brugere via hjemmesiden. Vi gemmer kun kontaktoplysninger på registrede kunder, dvs. information du selv har sendt til os, f.eks. via mail. Så ingen grund til bekymring : )";

      const backBtn = new Image();
      backBtn.src = backBtnImgSrc;
      backBtn.classList.add("privPBackBtn");

      backBtn.addEventListener("click", () => {
        document.body.removeChild(bg);
      });

      con.appendChild(text);
      con.appendChild(backBtn);

      bg.appendChild(con);

      document.body.appendChild(bg);
    });

    const linksFooterElText3 = document.createElement("span");
    linksFooterElText3.classList.add("footerElTextLink");
    linksFooterElText3.textContent = "Om os";

    linksFooterElText3.addEventListener("click", () => {
      const omOs = document.getElementById("AboutUsPage");
      omOs.scrollIntoView({ behavior: "smooth" });
    });

    linksFooterEl.appendChild(linksFooterHeader);
    linksFooterEl.appendChild(linksFooterElText1);
    linksFooterEl.appendChild(linksFooterElText2);
    linksFooterEl.appendChild(linksFooterElText3);

    footerCon.appendChild(infoFooterEl);
    footerCon.appendChild(linksFooterEl);

    const copyrightsCon = document.createElement("div");
    copyrightsCon.classList.add("footerCopyrightsCon");

    const copyrightsTextCon = document.createElement("div");
    copyrightsTextCon.classList.add("footerCopyrightsTextCon");

    const copyrightText1 = document.createElement("span");
    copyrightText1.classList.add("footerCopyrightsText1");
    copyrightText1.textContent = "Copyright © 2023 ";

    const copyrightText2 = document.createElement("span");
    copyrightText2.classList.add("footerCopyrightsText2");
    copyrightText2.textContent = " Risskov Vinduespudsning";

    copyrightsTextCon.appendChild(copyrightText1);
    copyrightsTextCon.appendChild(copyrightText2);

    copyrightsCon.append(copyrightsTextCon);

    content.appendChild(footerCon);
    content.appendChild(copyrightsCon);

    resolve(content);
  });
};

export default createFooter;
