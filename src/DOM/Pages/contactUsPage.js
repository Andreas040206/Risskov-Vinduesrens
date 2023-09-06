// Img
import telImgSrc from "../../Img/telefoneIconSrc.svg";
import mailImgSrc from "../../Img/mailIconSrc.svg";
import pinPointIconSrc from "../../Img/pinPointIconSrc.svg";
import clockImgSrc from "../../Img/clockImgSrc.svg";

const createContactUsPage = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("contactUsPageCon");
    content.setAttribute("id", "ContactUsPage");

    const contentCon = document.createElement("div");
    contentCon.classList.add("contactUsCon");

    const infoCon = document.createElement("div");
    infoCon.classList.add("contactUsInfoCon");

    const infoInnerCon = document.createElement("div");
    infoInnerCon.classList.add("contactUsInfoInnerCon");

    const header = document.createElement("span");
    header.classList.add("contactUsHeader");
    header.textContent = "Kontakt os!";

    const telCon = document.createElement("a");
    telCon.classList.add("contactUsInfoBoxCon");
    telCon.setAttribute("href", "tel:+4571784141");

    const telImg = new Image();
    telImg.src = telImgSrc;
    telImg.classList.add("contactUsTelImg");

    const telTextCon = document.createElement("div");
    telTextCon.classList.add("contactUsTextCon");

    const telText = document.createElement("span");
    telText.classList.add("contactUsTelText");
    telText.textContent = "+45 71 78 41 41";

    const telTextComment = document.createElement("span");
    telTextComment.classList.add("contactUsTextComment");
    telTextComment.textContent = "Ring til os!";

    telTextCon.appendChild(telText);
    telTextCon.appendChild(telTextComment);

    telCon.appendChild(telImg);
    telCon.appendChild(telTextCon);

    const mailCon = document.createElement("div");
    mailCon.classList.add("contactUsInfoBoxCon");

    mailCon.addEventListener("click", () => {
      function sendEmail() {
        const recipient = "kontakt@risskovvinduespudsning.com";
        const subject = "";
        const body = "";

        // Encode the email components for use in the mailto link
        const encodedRecipient = encodeURIComponent(recipient);
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);

        // Create the mailto link
        const mailtoLink = `mailto:${encodedRecipient}?subject=${encodedSubject}&body=${encodedBody}`;

        // Create an anchor element and simulate a click to open the email client
        const mail = document.createElement("a");
        mail.setAttribute("href", mailtoLink);
        mail.click();
      }

      sendEmail();
    });

    const mailImg = new Image();
    mailImg.src = mailImgSrc;
    mailImg.classList.add("contactUsMailImg");

    const mailTextCon = document.createElement("div");
    mailTextCon.classList.add("contactUsTextCon");

    const mailText = document.createElement("span");
    mailText.classList.add("contactUsMailText");
    mailText.textContent = "kontakt@risskovvinduespudsning.com";

    const mailTextComment = document.createElement("span");
    mailTextComment.classList.add("contactUsTextComment");
    mailTextComment.textContent = "Skriv til os!";

    mailTextCon.appendChild(mailText);
    mailTextCon.appendChild(mailTextComment);

    mailCon.appendChild(mailImg);
    mailCon.appendChild(mailTextCon);

    const locationCon = document.createElement("div");
    locationCon.classList.add("contactUsInfoBoxCon");

    const locationImg = new Image();
    locationImg.src = pinPointIconSrc;
    locationImg.classList.add("contactUsLocationImg");

    const locationTextCon = document.createElement("div");
    locationTextCon.classList.add("contactUsTextCon");

    const locationText = document.createElement("span");
    locationText.classList.add("contactUsText");
    locationText.textContent = "Serviceområder";

    const locationTextComment = document.createElement("span");
    locationTextComment.classList.add("contactUsTextComment");
    locationTextComment.textContent = "Vejlby Risskov";
    locationTextComment.style.marginTop = "5px";

    const locationTextComment2 = document.createElement("span");
    locationTextComment2.classList.add("contactUsTextComment");
    locationTextComment2.textContent = "Egå";

    const locationTextComment3 = document.createElement("span");
    locationTextComment3.classList.add("contactUsTextComment");
    locationTextComment3.textContent = "Se kort for mere info";
    locationTextComment3.style.marginTop = "20px";

    locationTextCon.appendChild(locationText);
    locationTextCon.appendChild(locationTextComment);
    locationTextCon.appendChild(locationTextComment2);
    locationTextCon.appendChild(locationTextComment3);

    locationCon.appendChild(locationImg);
    locationCon.appendChild(locationTextCon);

    const aabningstiderCon = document.createElement("div");
    aabningstiderCon.classList.add("contactUsInfoBoxCon");

    const aabningstiderImg = new Image();
    aabningstiderImg.src = clockImgSrc;
    aabningstiderImg.classList.add("contactUsAabningstiderImg");

    const aabningstiderTextCon = document.createElement("div");
    aabningstiderTextCon.classList.add("contactUsTextCon");
    aabningstiderTextCon.style.gap = "5px";

    const aabningstiderText = document.createElement("span");
    aabningstiderText.classList.add("contactUsText");
    aabningstiderText.textContent = "Kundetelefon åbningstider";

    const aabningstiderTextComment = document.createElement("span");
    aabningstiderTextComment.classList.add("contactUsTextComment");
    aabningstiderTextComment.textContent = "Mandag - torsdag: 16:00 - 21:00";
    aabningstiderTextComment.style.marginTop = "5px";

    const aabningstiderTextComment2 = document.createElement("span");
    aabningstiderTextComment2.classList.add("contactUsTextComment");
    aabningstiderTextComment2.textContent = "Fredag: 16:00 - 18:00";

    const aabningstiderTextComment3 = document.createElement("span");
    aabningstiderTextComment3.classList.add("contactUsTextComment");
    aabningstiderTextComment3.textContent = "Lørdag & søndag: 14:00 - 17:00";

    aabningstiderTextCon.appendChild(aabningstiderText);
    aabningstiderTextCon.appendChild(aabningstiderTextComment);
    aabningstiderTextCon.appendChild(aabningstiderTextComment2);
    aabningstiderTextCon.appendChild(aabningstiderTextComment3);

    aabningstiderCon.appendChild(aabningstiderImg);
    aabningstiderCon.appendChild(aabningstiderTextCon);

    infoInnerCon.appendChild(header);
    infoInnerCon.appendChild(telCon);
    infoInnerCon.appendChild(mailCon);
    infoInnerCon.appendChild(aabningstiderCon);
    infoInnerCon.appendChild(locationCon);

    infoCon.appendChild(infoInnerCon);

    const embededMap = document.createElement("iframe");
    embededMap.setAttribute(
      "src",
      "https://www.google.com/maps/d/embed?mid=1_9RKZsUpaRCyfKOyYgFPvRHxgP3t_s0&ehbc=2E312F"
    );
    embededMap.classList.add("contactUsEmbededMap");

    contentCon.appendChild(infoCon);
    contentCon.appendChild(embededMap);

    content.appendChild(contentCon);

    resolve(content);
  });
};

export default createContactUsPage;
