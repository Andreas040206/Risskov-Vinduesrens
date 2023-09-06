import { set, toNumber } from "lodash";
import { servicevilkaarPopUp } from "./popUps";

const createBestilForm = () => {
  return new Promise((resolve) => {
    const content = document.createElement("form");
    content.classList.add("bestilFormCon");
    content.setAttribute("onsubmit", "return false");
    content.setAttribute("id", "bestilForm");

    const bestilContentCon = document.createElement("div");
    bestilContentCon.classList.add("bestilContentCon");

    let currentPrice = 100;

    const iAltPriceCon = document.createElement("div");
    iAltPriceCon.classList.add("bestilIAltPriceCon");

    const iAltPriceText = document.createElement("div");
    iAltPriceText.classList.add("bestilIAltPriceText");

    const iAltPrice = document.createElement("span");
    iAltPrice.classList.add("bestilIAltPrice");
    iAltPrice.textContent = "100";

    const iAltPriceDKK = document.createElement("span");
    iAltPriceDKK.classList.add("bestilIAltPrice");
    iAltPriceDKK.textContent = "DKK";

    iAltPriceText.appendChild(iAltPrice);
    iAltPriceText.appendChild(iAltPriceDKK);

    iAltPriceCon.appendChild(iAltPriceText);

    // Create fn for making count animation
    const countAnimation = (targetNumber, duration) => {
      const startNumber = Number(iAltPrice.textContent);
      const increment = (targetNumber - startNumber) / (duration / 10);
      let currentNumber = startNumber;

      function updateCount() {
        currentNumber += increment;
        if (increment > 0 && currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(interval);
        } else if (increment < 0 && currentNumber <= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(interval);
        }
        iAltPrice.textContent = Math.round(currentNumber);
      }

      const interval = setInterval(updateCount, 10);
    };

    const headerCon = document.createElement("div");
    headerCon.classList.add("bestilFormHeaderCon");

    const header = document.createElement("span");
    header.classList.add("bestilFormHeader");
    header.textContent = "Beregn & Bestil";

    const guideBoxesCon = document.createElement("div");
    guideBoxesCon.classList.add("bestilGuideBoxesCon");

    const guideBoxes1Con = document.createElement("div");
    guideBoxes1Con.classList.add("bestilGuideBoxesElCon");

    const guideBox1 = document.createElement("div");
    guideBox1.classList.add("bestilGuideBox", "bestilGuideBoxComplete");
    guideBox1.textContent = "1";

    const guideBox1Text = document.createElement("span");
    guideBox1Text.classList.add("guideBoxText");
    guideBox1Text.textContent = "Service";

    guideBoxes1Con.appendChild(guideBox1);
    guideBoxes1Con.appendChild(guideBox1Text);

    const line1 = document.createElement("div");
    line1.classList.add("bestilLine");

    const guideBoxes2Con = document.createElement("div");
    guideBoxes2Con.classList.add("bestilGuideBoxesElCon");

    const guideBox2 = document.createElement("div");
    guideBox2.classList.add("bestilGuideBox");
    guideBox2.textContent = "2";

    const guideBox2Text = document.createElement("span");
    guideBox2Text.classList.add("guideBoxText", "bestilGuideBoxTextComplete");
    guideBox2Text.textContent = "Kontakt";

    guideBoxes2Con.appendChild(guideBox2);
    guideBoxes2Con.appendChild(guideBox2Text);

    guideBoxesCon.appendChild(guideBoxes1Con);
    guideBoxesCon.appendChild(line1);
    guideBoxesCon.appendChild(guideBoxes2Con);

    headerCon.appendChild(header);
    headerCon.appendChild(guideBoxesCon);

    let kvadratmeterLast = 100;

    let indvendingLast = 1;

    let etageLast = 0;

    const kvadratmeterCon = document.createElement("div");
    kvadratmeterCon.classList.add("bestilFormInputCon");

    const kvadratmeterHeader = document.createElement("span");
    kvadratmeterHeader.classList.add("bestilFormInputHeader");
    kvadratmeterHeader.textContent = "Hvor mange kvadratmeter er huset?";

    const kvadratmeterInput = document.createElement("select");
    kvadratmeterInput.classList.add("bestilFormSelect");

    const kvadratmeterOption1 = document.createElement("option");
    kvadratmeterOption1.setAttribute("value", "100");
    kvadratmeterOption1.textContent = "0-120 m² (100 dkk)";

    const kvadratmeterOption2 = document.createElement("option");
    kvadratmeterOption2.setAttribute("value", "150");
    kvadratmeterOption2.textContent = "121 - 180 m² (150 dkk)";

    const kvadratmeterOption3 = document.createElement("option");
    kvadratmeterOption3.setAttribute("value", "200");
    kvadratmeterOption3.textContent = "181 - 220 m² (200 dkk)";

    const kvadratmeterOption4 = document.createElement("option");
    kvadratmeterOption4.setAttribute("value", "250");
    kvadratmeterOption4.textContent = "230 - 300 m² (250 dkk)";

    kvadratmeterInput.appendChild(kvadratmeterOption1);
    kvadratmeterInput.appendChild(kvadratmeterOption2);
    kvadratmeterInput.appendChild(kvadratmeterOption3);
    kvadratmeterInput.appendChild(kvadratmeterOption4);

    kvadratmeterInput.addEventListener("change", () => {
      currentPrice =
        currentPrice +
        (kvadratmeterInput.value - kvadratmeterLast) * indvendingLast;

      kvadratmeterLast = kvadratmeterInput.value;

      countAnimation(currentPrice, 1200);
    });

    kvadratmeterCon.appendChild(kvadratmeterHeader);
    kvadratmeterCon.appendChild(kvadratmeterInput);

    const indvendigCon = document.createElement("div");
    indvendigCon.classList.add("bestilFormInputCon");

    const indvendigHeader = document.createElement("span");
    indvendigHeader.classList.add("bestilFormInputHeader");
    indvendigHeader.textContent = "Skal vi også pudse indvendigt?";

    // const indvendigInputCon = document.createElement("div");
    // indvendigInputCon.classList.add("bestilFormCheckboxCon");

    // const indvendigInput = document.createElement("input");
    // indvendigInput.classList.add("bestilFormCheckbox");
    // indvendigInput.setAttribute("type", "checkbox");

    // indvendigInput.addEventListener("click", () => {
    //   if (indvendingLast == 1) {
    //     indvendingLast = 2.5;
    //   } else {
    //     indvendingLast = 1;
    //   }

    //   currentPrice = kvadratmeterLast * indvendingLast + etageLast;

    //   countAnimation(currentPrice, 1200);
    // });

    const indvendigInputText = document.createElement("span");
    indvendigInputText.classList.add("bestilFormInputText");
    indvendigInputText.textContent =
      "Kontakt os via kontakt@risskovvinduespudsning.com, hvis i ønsker indvendig vinduespudsning.";

    // indvendigInputCon.appendChild(indvendigInput);
    // indvendigInputCon.appendChild(indvendigInputText);

    indvendigCon.appendChild(indvendigHeader);
    indvendigCon.appendChild(indvendigInputText);

    const etageCon = document.createElement("div");
    etageCon.classList.add("bestilFormInputCon");

    const etageHeader = document.createElement("span");
    etageHeader.classList.add("bestilFormInputHeader");
    etageHeader.textContent = "Hvor mange etager skal pudses?";

    const etageInput = document.createElement("select");
    etageInput.classList.add("bestilFormSelect");

    etageInput.addEventListener("change", () => {
      currentPrice =
        kvadratmeterLast * indvendingLast + toNumber(etageInput.value);

      countAnimation(currentPrice, 1200);
    });

    const etageOption1 = document.createElement("option");
    etageOption1.setAttribute("value", "0");
    etageOption1.textContent = "Stue (+0 dkk)";

    const etageOption2 = document.createElement("option");
    etageOption2.setAttribute("value", "100");
    etageOption2.textContent = "+1. sal (+100 dkk)";

    etageInput.appendChild(etageOption1);
    etageInput.appendChild(etageOption2);

    etageCon.appendChild(etageHeader);
    etageCon.appendChild(etageInput);

    const intervalCon = document.createElement("div");
    intervalCon.classList.add("bestilFormInputCon");

    const intervalHeader = document.createElement("span");
    intervalHeader.classList.add("bestilFormInputHeader");
    intervalHeader.textContent = "Hvor ofte skal vi pudse?";

    const intervalInput = document.createElement("select");
    intervalInput.classList.add("bestilFormSelect");

    const intervalOption1 = document.createElement("option");
    intervalOption1.setAttribute("value", "en gang");
    intervalOption1.textContent = "En gang";

    const intervalOption2 = document.createElement("option");
    intervalOption2.setAttribute("value", "hver 4 uge");
    intervalOption2.textContent = "Hver 4 uge";

    const intervalOption3 = document.createElement("option");
    intervalOption3.setAttribute("value", "hver 8 uge");
    intervalOption3.textContent = "Hver 8 uge";

    const intervalOption4 = document.createElement("option");
    intervalOption4.setAttribute("value", "hver 12 uge");
    intervalOption4.textContent = "Hver 12 uge";

    intervalInput.appendChild(intervalOption1);
    intervalInput.appendChild(intervalOption2);
    intervalInput.appendChild(intervalOption3);
    intervalInput.appendChild(intervalOption4);

    intervalCon.appendChild(intervalHeader);
    intervalCon.appendChild(intervalInput);

    bestilContentCon.appendChild(headerCon);
    bestilContentCon.appendChild(kvadratmeterCon);
    bestilContentCon.appendChild(etageCon);
    bestilContentCon.appendChild(intervalCon);
    bestilContentCon.appendChild(indvendigCon);

    const inputsCon1 = document.createElement("div");
    inputsCon1.classList.add("bestilFormInputsCon");

    const navnInputCon = document.createElement("div");
    navnInputCon.classList.add("bestilFormInputCon", "bestilInputsConChild");

    const navnInputHeader = document.createElement("span");
    navnInputHeader.classList.add("bestilFormInputHeader");
    navnInputHeader.textContent = "Navn *";

    const navnInput = document.createElement("input");
    navnInput.setAttribute("type", "text");
    navnInput.classList.add("bestilFormTextInput");
    navnInput.setAttribute("placeholder", "Dit navn");

    navnInputCon.appendChild(navnInputHeader);
    navnInputCon.appendChild(navnInput);

    const tlfInputCon = document.createElement("div");
    tlfInputCon.classList.add("bestilFormInputCon", "bestilInputsConChild");

    const tlfInputHeader = document.createElement("span");
    tlfInputHeader.classList.add("bestilFormInputHeader");
    tlfInputHeader.textContent = "Telefon nr. *";

    const tlfInput = document.createElement("input");
    tlfInput.setAttribute("type", "tel");
    tlfInput.classList.add("bestilFormTextInput");
    tlfInput.setAttribute("placeholder", "Dit telefon nr.");

    tlfInputCon.appendChild(tlfInputHeader);
    tlfInputCon.appendChild(tlfInput);

    inputsCon1.appendChild(navnInputCon);
    inputsCon1.appendChild(tlfInputCon);

    const AdresseInputCon = document.createElement("div");
    AdresseInputCon.classList.add("bestilFormInputCon");

    const AdresseInputHeader = document.createElement("span");
    AdresseInputHeader.classList.add("bestilFormInputHeader");
    AdresseInputHeader.textContent = "Adresse *";

    const AdresseInput = document.createElement("input");
    AdresseInput.setAttribute("type", "text");
    AdresseInput.classList.add("bestilFormTextInput");
    AdresseInput.setAttribute("placeholder", "Din adresse");

    AdresseInputCon.appendChild(AdresseInputHeader);
    AdresseInputCon.appendChild(AdresseInput);

    const addOnInputCon = document.createElement("div");
    addOnInputCon.classList.add("bestilFormInputCon");

    const addOnInputHeader = document.createElement("span");
    addOnInputHeader.classList.add("bestilFormInputHeader");
    addOnInputHeader.textContent = "Tilføjelser";

    const addOnInput = document.createElement("textarea");
    addOnInput.classList.add("bestilFormTextarea", "bestilFormTextInput");
    addOnInput.setAttribute(
      "placeholder",
      "Tilføjelser, som f.eks. adgang til matrikel, dørkode, ift. indvendig pudsning osv."
    );

    addOnInputCon.appendChild(addOnInputHeader);
    addOnInputCon.appendChild(addOnInput);

    const godkendelseCon = document.createElement("div");
    godkendelseCon.classList.add("bestilFormInputCon");

    const godkendelseHeader = document.createElement("span");
    godkendelseHeader.classList.add("bestilFormGodkendelseHeader");
    godkendelseHeader.textContent = "Godkendelse *";

    const godkendelseInputCon = document.createElement("div");
    godkendelseInputCon.classList.add(
      "bestilFormCheckboxCon",
      "bestilGodkendelseCon"
    );

    const godkendelseInput = document.createElement("input");
    godkendelseInput.classList.add("bestilFormCheckbox");
    godkendelseInput.setAttribute("type", "checkbox");

    godkendelseInput.addEventListener("click", () => {});

    const godkendelseInputTextCon = document.createElement("div");
    godkendelseInputTextCon.classList.add("bestilGodkendelseInputTextCon");

    const godkendelseInputText1 = document.createElement("span");
    godkendelseInputText1.classList.add("bestilGodkendelseInputText");
    godkendelseInputText1.textContent = "Husk at læse vores ";

    const godkendelseInputLink = document.createElement("a");
    godkendelseInputLink.classList.add("bestilFormInputTextLink");
    godkendelseInputLink.textContent = "Servicevilkår";

    godkendelseInputLink.addEventListener("click", () => {
      document.body.appendChild(servicevilkaarPopUp());
    });

    const godkendelseInputText2 = document.createElement("span");
    godkendelseInputText2.classList.add("bestilGodkendelseInputText");
    godkendelseInputText2.textContent = ", inden du bestiller!";

    godkendelseInputTextCon.appendChild(godkendelseInputText1);
    godkendelseInputTextCon.appendChild(godkendelseInputLink);
    godkendelseInputTextCon.appendChild(godkendelseInputText2);

    godkendelseInputCon.appendChild(godkendelseInput);
    godkendelseInputCon.appendChild(godkendelseInputTextCon);

    godkendelseCon.appendChild(godkendelseHeader);
    godkendelseCon.appendChild(godkendelseInputCon);

    const controlBtnCon = document.createElement("div");
    controlBtnCon.classList.add("bestilFormNextBtnCon");

    const forigeBtn = document.createElement("div");
    forigeBtn.classList.add("bestilFormNextBtn", "bestilForigeBtn");
    forigeBtn.textContent = "Forrige";

    forigeBtn.addEventListener("click", () => {
      goBeregnPart();
    });

    navnInput.addEventListener("input", () => {
      if (navnInput.value !== "") {
        navnInput.setCustomValidity("");
      }
    });
    tlfInput.addEventListener("input", () => {
      bestilContentCon;
      if (tlfInput.value !== "") {
        tlfInput.setCustomValidity("");
      }
    });
    AdresseInput.addEventListener("input", () => {
      if (AdresseInput.value !== "") {
        AdresseInput.setCustomValidity("");
      }
    });

    godkendelseInput.addEventListener("click", () => {
      if (godkendelseInput.checked == true) {
        godkendelseInput.setCustomValidity("");
      } else {
        godkendelseInput.setCustomValidity(
          "Husk at læse vores service vilkår!"
        );
      }
    });

    const bottomBarOverlayCon = document.createElement("div");
    bottomBarOverlayCon.classList.add("bestilBottomBarCon");

    const bottomBar = document.createElement("div");
    bottomBar.classList.add("bestilBottomBar");

    const nextBtnCon = document.createElement("div");
    nextBtnCon.classList.add("bestilFormNextBtnCon");

    const nextBtn = document.createElement("div");
    nextBtn.classList.add("bestilFormNextBtn");
    nextBtn.textContent = "Næste";

    nextBtn.addEventListener("click", () => {
      goToKontaktPart();
    });

    nextBtnCon.appendChild(nextBtn);

    bottomBar.appendChild(iAltPriceCon);
    bottomBar.appendChild(nextBtnCon);

    bottomBarOverlayCon.appendChild(bottomBar);

    const fakeSubmitBtn = document.createElement("input");
    fakeSubmitBtn.classList.add("bestilFormNextBtn", "bestilFakeSendBtn");
    fakeSubmitBtn.setAttribute("type", "submit");
    fakeSubmitBtn.setAttribute("value", "Send");

    fakeSubmitBtn.addEventListener("click", () => {
      if (navnInput.value == "") {
        navnInput.setCustomValidity("Alle felter markeret med * skal udfyldes");
      }
      if (tlfInput.value === "") {
        tlfInput.setCustomValidity("Alle felter markeret med * skal udfyldes");
      }
      if (AdresseInput.value === "") {
        AdresseInput.setCustomValidity(
          "Alle felter markeret med * skal udfyldes"
        );
      }
      if (godkendelseInput.checked == false) {
        godkendelseInput.setCustomValidity(
          "Husk at læse vores service vilkår!"
        );
      }

      if (
        navnInput.value !== "" &&
        tlfInput.value !== "" &&
        AdresseInput.value !== "" &&
        godkendelseInput.checked == true
      ) {
        const bgBlur = document.createElement("div");
        bgBlur.classList.add("bestilFormBg");

        const sendMessageCon = document.createElement("div");
        sendMessageCon.classList.add("bestilSendMessageCon");

        const sendMessageText = document.createElement("span");
        sendMessageText.classList.add("bestilSendMessageText");
        sendMessageText.textContent = `Når du klikker på "send"-knappen åbnes din mail med en allerede udfyldt mail. Tjek mailen igennem for at sikre dig, at alle oplysninger er korrekte og tryk send, hvis der opstår problemer kontakt os venligst på (+45) 71 78 41 41 inde for vores åbningstider.`;

        const sendMessageText2 = document.createElement("span");
        sendMessageText2.classList.add("bestilSendMessageText");
        sendMessageText2.textContent =
          "Tak, fordi du valgte Risskov Vinduespudsning. Vi svarer tilbage hurtigts muligt : )";

        const sendMessageBtnCon = document.createElement("div");
        sendMessageBtnCon.classList.add("bestilSendMessageBtnCon");

        const sendMessageAnullerBtn = document.createElement("div");
        sendMessageAnullerBtn.classList.add(
          "bestilFormNextBtn",
          "bestilSendMessageAnullerBtn"
        );
        sendMessageAnullerBtn.textContent = "Anuller";

        sendMessageAnullerBtn.addEventListener("click", () => {
          document.body.removeChild(bgBlur);
        });

        const submitBtn = document.createElement("input");
        submitBtn.classList.add("bestilFormNextBtn", "bestilSendBtn");
        submitBtn.setAttribute("type", "submit");
        submitBtn.setAttribute("value", "Send");

        let hasSubmited = false;

        submitBtn.addEventListener("click", () => {
          if (
            navnInput.value !== "" &&
            tlfInput.value !== "" &&
            AdresseInput.value !== "" &&
            hasSubmited == false
          ) {
            hasSubmited = true;

            function sendEmail() {
              const recipient = "risskovvinduespudsning@gmail.com";
              const subject = "Bestilling";
              const body = `\n\nKontaktoplysninger:\n\nNavn på kunde: ${navnInput.value}\nAdresse: ${AdresseInput.value}\nTelefon nummer: ${tlfInput.value}\n\nVinduespudsningsoplysninger:\n\nKunde ønsker vinduespudsning ${intervalInput.value}\nDen beregnede pris på hjemmesiden er ${currentPrice} DKK\n\nYderligere tilføjelser:\n${addOnInput.value}\n\n[Hvis du har flere spørgsmål kan du kontakte os på kontakt@risskovvinduespudsning.com\n eller ringe til os på (+45) 71 78 41 41, inde for vores kundetelefons åbningstider.]\n\nMvh. ${navnInput.value}`;

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
          }
        });

        sendMessageBtnCon.appendChild(sendMessageAnullerBtn);
        sendMessageBtnCon.appendChild(submitBtn);

        sendMessageCon.appendChild(sendMessageText);
        sendMessageCon.appendChild(sendMessageText2);
        sendMessageCon.appendChild(sendMessageBtnCon);

        bgBlur.appendChild(sendMessageCon);

        document.body.appendChild(bgBlur);
      }
    });

    controlBtnCon.appendChild(forigeBtn);
    controlBtnCon.appendChild(fakeSubmitBtn);

    const goToKontaktPart = () => {
      while (bestilContentCon.lastChild) {
        bestilContentCon.removeChild(bestilContentCon.lastChild);
      }

      guideBox2.classList.add("bestilGuideBoxComplete");

      bestilContentCon.appendChild(headerCon);
      bestilContentCon.appendChild(inputsCon1);
      bestilContentCon.appendChild(AdresseInputCon);
      bestilContentCon.appendChild(addOnInputCon);
      bestilContentCon.appendChild(godkendelseCon);

      bottomBar.removeChild(nextBtnCon);
      bottomBar.removeChild(iAltPriceCon);
      bottomBar.appendChild(controlBtnCon);
    };

    const goBeregnPart = () => {
      while (bestilContentCon.lastChild) {
        bestilContentCon.removeChild(bestilContentCon.lastChild);
      }

      guideBox2.classList.remove("bestilGuideBoxComplete");

      bestilContentCon.appendChild(headerCon);
      bestilContentCon.appendChild(kvadratmeterCon);
      bestilContentCon.appendChild(etageCon);
      bestilContentCon.appendChild(intervalCon);
      bestilContentCon.appendChild(indvendigCon);

      bottomBar.removeChild(controlBtnCon);
      bottomBar.appendChild(iAltPriceCon);
      bottomBar.appendChild(nextBtnCon);
    };

    content.appendChild(bestilContentCon);
    content.appendChild(bottomBarOverlayCon);

    resolve(content);
  });
};

export default createBestilForm;
