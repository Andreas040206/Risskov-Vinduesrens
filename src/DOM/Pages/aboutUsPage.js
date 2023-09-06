// img
import aboutUsImgSrc from "../../Img/faellesFotoSrc.jpg";
import facebookIconSrc from "../../Img/facebookIconSrc.png";
import telefoneIconSrc from "../../Img/telefoneIconSrc.svg";
import mailIconSrc from "../../Img/mailIconSrc.svg";
import omOsExtraImgSrc from "../../Img/omOsIdeSrc.jpg";

const createAboutUsPage = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("AboutUsPageCon");
    content.setAttribute("id", "AboutUsPage");

    const omOsImgCon = document.createElement("div");
    omOsImgCon.classList.add("aboutUsPageMainImgCon");

    const omOsImg = new Image();
    omOsImg.src = aboutUsImgSrc;
    omOsImg.classList.add("aboutUsPageMainImg");

    omOsImgCon.appendChild(omOsImg);

    const appLinkCon = document.createElement("div");
    appLinkCon.classList.add("aboutUsAppLinkCon");

    const facebookIcon = new Image();
    facebookIcon.src = facebookIconSrc;
    facebookIcon.classList.add("aboutUsAppLinkFacebook", "aboutUsAppLink");

    facebookIcon.addEventListener("click", () => {
      window.open(
        "https://www.facebook.com/profile.php?id=100095206778745",
        "_blank"
      );
    });

    const telefoneLinkCon = document.createElement("a");
    telefoneLinkCon.classList.add("aboutUsTelefoneLinkCon");
    telefoneLinkCon.setAttribute("href", "tel:+4571784141");

    const telefoneLinkIcon = new Image();
    telefoneLinkIcon.src = telefoneIconSrc;
    telefoneLinkIcon.classList.add("aboutUsTelefoneLinkIcon");

    const telefoneNumCon = document.createElement("div");
    telefoneNumCon.classList.add("aboutUsTelefoneNumCon");

    const telefoneNum = document.createElement("span");
    telefoneNum.classList.add("aboutUsTelefoneNum");
    telefoneNum.textContent = "(+45) 71 78 41 41";

    telefoneNumCon.appendChild(telefoneNum);

    telefoneLinkCon.appendChild(telefoneLinkIcon);
    telefoneLinkCon.appendChild(telefoneNumCon);

    telefoneLinkCon.addEventListener("mouseenter", () => {
      telefoneNum.style.left = "0px";
      telefoneNumCon.style.width = "220px";
    });

    telefoneLinkCon.addEventListener("mouseleave", () => {
      telefoneNum.style.left = "-220px";
      telefoneNumCon.style.width = "0px";
    });

    const mailLinkIcon = new Image();
    mailLinkIcon.src = mailIconSrc;
    mailLinkIcon.classList.add("aboutUsMailLinkIcon");

    mailLinkIcon.addEventListener("click", () => {
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

    appLinkCon.appendChild(facebookIcon);
    appLinkCon.appendChild(mailLinkIcon);
    appLinkCon.appendChild(telefoneLinkCon);

    const omOsTextBg = document.createElement("div");
    omOsTextBg.classList.add("aboutUsTextBg");

    const omOsTextCon = document.createElement("div");
    omOsTextCon.classList.add("aboutUsTextCon");

    const omOsTextPart = document.createElement("div");
    omOsTextPart.classList.add("aboutUsTextPart");

    const omOsTextHeaderCon = document.createElement("div");

    const omOsTextHeader1 = document.createElement("span");
    omOsTextHeader1.classList.add("aboutUsTextHeader1");
    omOsTextHeader1.textContent = "Idéen bag ";

    const omOsTextHeader2 = document.createElement("span");
    omOsTextHeader2.classList.add("aboutUsTextHeader2");
    omOsTextHeader2.textContent = "Risskov Vinduespudsning";

    omOsTextHeaderCon.appendChild(omOsTextHeader1);
    omOsTextHeaderCon.appendChild(omOsTextHeader2);

    const omOsText1 = document.createElement("span");
    omOsText1.classList.add("aboutUsTextText");
    omOsText1.textContent =
      "Vi er fire unge studerende som har en fælles iværksætterdrøm om at skabe vores eget. Drømmen er nu blevet en realitet. Vi sætter en enorm ære i at kunne kalde os for ejere af Risskov Vinduespudsning.";

    const omOsText2Con = document.createElement("div");

    const omOsText21 = document.createElement("span");
    omOsText21.classList.add("aboutUsTextText");
    omOsText21.textContent =
      "Vores virksomhed bygger på et stærkt sammenhold. Værdier er klare og ikke til at tage fejl af: ";

    const omOsText22 = document.createElement("span");
    omOsText22.classList.add("aboutUsTextText", "aboutUsTextTextHighlighted");
    omOsText22.textContent = `pålidelig service og et stærkt fællesskab.`;

    const omOsText23 = document.createElement("span");
    omOsText23.classList.add("aboutUsTextText");
    omOsText23.textContent =
      " Målet er at skalere vores forretning - uden at gå på kompromis med hverken vores værdier eller kvalitet.";

    omOsText2Con.appendChild(omOsText21);
    omOsText2Con.appendChild(omOsText22);
    omOsText2Con.appendChild(omOsText23);

    const omOsText3 = document.createElement("span");
    omOsText3.classList.add("aboutUsTextText");
    omOsText3.textContent =
      "Vi anser os selv for værende passionerede iværksættere, og vi brænder  i særdeleshed for vores virksomhed.";

    const omOsText4 = document.createElement("span");
    omOsText4.classList.add("aboutUsTextText");
    omOsText4.textContent = "Vi håber på, at du vil være med på rejsen!";

    omOsTextPart.appendChild(omOsTextHeaderCon);
    omOsTextPart.appendChild(omOsText1);
    omOsTextPart.appendChild(omOsText2Con);
    omOsTextPart.appendChild(omOsText3);
    omOsTextPart.appendChild(omOsText4);

    const omOsExtraImg = new Image();
    omOsExtraImg.src = omOsExtraImgSrc;
    omOsExtraImg.classList.add("aboutUsExtraImg");

    omOsTextCon.appendChild(omOsTextPart);
    omOsTextCon.appendChild(omOsExtraImg);

    omOsTextBg.appendChild(omOsTextCon);

    const header = document.createElement("span");
    header.classList.add("aboutUsHeader");
    header.textContent = "Hils på teamet!";

    const headerCon = document.createElement("div");
    headerCon.classList.add("aboutUsHeaderCon");

    headerCon.appendChild(header);

    // const profilesCon = document.createElement("div");
    // profilesCon.classList.add("aboutUsProfilesCon");

    // const profileCon1 = document.createElement("div");
    // profileCon1.classList.add("aboutUsProfileCon");

    // const profile1ImgCon = document.createElement("div");
    // profile1ImgCon.classList.add("aboutUsProfileImgCon");

    // const profile1Img = new Image();
    // profile1Img.src = profile1ImgSrc;
    // profile1Img.classList.add("aboutUsProfileImg");
    // profile1Img.style.height = "200px";

    // profile1ImgCon.appendChild(profile1Img);

    // const profile1TextCon = document.createElement("div");
    // profile1TextCon.classList.add("aboutUsProfileTextCon");

    // const profile1Header = document.createElement("span");
    // profile1Header.classList.add("aboutUsProfileHeader");
    // profile1Header.textContent = "Andreas";

    // const profile1Text1 = document.createElement("span");
    // profile1Text1.classList.add("aboutUsProfileText");
    // profile1Text1.textContent =
    //   "Udd. Aarhus gymnasium, programmør, kundetelefon";

    // profile1TextCon.appendChild(profile1Header);
    // profile1TextCon.appendChild(profile1Text1);

    // profileCon1.appendChild(profile1ImgCon);
    // profileCon1.appendChild(profile1TextCon);

    // const profileCon2 = document.createElement("div");
    // profileCon2.classList.add("aboutUsProfileCon");

    // const profile2ImgCon = document.createElement("div");
    // profile2ImgCon.classList.add("aboutUsProfileImgCon");

    // const profile2Img = new Image();
    // profile2Img.src = profile2ImgSrc;
    // profile2Img.classList.add("aboutUsProfileImg");
    // profile2Img.style.width = "200px";

    // profile2ImgCon.appendChild(profile2Img);

    // const profile2TextCon = document.createElement("div");
    // profile2TextCon.classList.add("aboutUsProfileTextCon");

    // const profile2Header = document.createElement("span");
    // profile2Header.classList.add("aboutUsProfileHeader");
    // profile2Header.textContent = "Mathias";

    // const profile2Text1 = document.createElement("span");
    // profile2Text1.classList.add("aboutUsProfileText");
    // profile2Text1.textContent =
    //   "Udd. Aarhus gymnasium, medieudvikler, dronecerteficeret";

    // profile2TextCon.appendChild(profile2Header);
    // profile2TextCon.appendChild(profile2Text1);

    // profileCon2.appendChild(profile2ImgCon);
    // profileCon2.appendChild(profile2TextCon);

    // const profileCon3 = document.createElement("div");
    // profileCon3.classList.add("aboutUsProfileCon");

    // const profile3ImgCon = document.createElement("div");
    // profile3ImgCon.classList.add("aboutUsProfileImgCon");

    // const profile3Img = new Image();
    // profile3Img.src = profile3ImgSrc;
    // profile3Img.classList.add("aboutUsProfileImg");
    // profile3Img.style.height = "200px";

    // profile3ImgCon.appendChild(profile3Img);

    // const profile3TextCon = document.createElement("div");
    // profile3TextCon.classList.add("aboutUsProfileTextCon");

    // const profile3Header = document.createElement("span");
    // profile3Header.classList.add("aboutUsProfileHeader");
    // profile3Header.textContent = "Marius";

    // const profile3Text1 = document.createElement("span");
    // profile3Text1.classList.add("aboutUsProfileText");
    // profile3Text1.textContent =
    //   "Udd. Aarhus gymnasium, mekaniker, udstyrsansvarlig";

    // profile3TextCon.appendChild(profile3Header);
    // profile3TextCon.appendChild(profile3Text1);

    // profileCon3.appendChild(profile3ImgCon);
    // profileCon3.appendChild(profile3TextCon);

    // const profileCon4 = document.createElement("div");
    // profileCon4.classList.add("aboutUsProfileCon");

    // const profile4ImgCon = document.createElement("div");
    // profile4ImgCon.classList.add("aboutUsProfileImgCon");

    // const profile4Img = new Image();
    // profile4Img.src = profile4ImgSrc;
    // profile4Img.classList.add("aboutUsProfileImg");
    // profile4Img.style.height = "200px";

    // profile4ImgCon.appendChild(profile4Img);

    // const profile4TextCon = document.createElement("div");
    // profile4TextCon.classList.add("aboutUsProfileTextCon");

    // const profile4Header = document.createElement("span");
    // profile4Header.classList.add("aboutUsProfileHeader");
    // profile4Header.textContent = "Niclas";

    // const profile4Text1 = document.createElement("span");
    // profile4Text1.classList.add("aboutUsProfileText");
    // profile4Text1.textContent =
    //   "Udd. Aarhus Buisness College, medieudvikler, regnskabs ansvarig";

    // profile4TextCon.appendChild(profile4Header);
    // profile4TextCon.appendChild(profile4Text1);

    // profileCon4.appendChild(profile4ImgCon);
    // profileCon4.appendChild(profile4TextCon);

    // profilesCon.appendChild(profileCon1);
    // profilesCon.appendChild(profileCon2);
    // profilesCon.appendChild(profileCon3);
    // profilesCon.appendChild(profileCon4);

    content.appendChild(headerCon);
    content.appendChild(omOsImgCon);
    content.appendChild(appLinkCon);
    content.appendChild(omOsTextBg);
    // content.appendChild(profilesCon);

    resolve(content);
  });
};

export default createAboutUsPage;
