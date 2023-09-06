import plusImgSrc from "../../Img/plusImgSrc.svg";
import minusImgSrc from "../../Img/minusImgSrc.svg";

import { fradragPopUp } from "../popUps";

const createFAQPage = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("FAQPageCon");
    content.setAttribute("id", "FAQPage");

    const FAQCon = document.createElement("div");
    FAQCon.classList.add("FAQCon");

    const FAQheader = document.createElement("span");
    FAQheader.classList.add("FAQheader");
    FAQheader.textContent = "OFTEST STILLEDE SPØRGSMÅL";

    const FAQQuestionElCon = document.createElement("div");
    FAQQuestionElCon.classList.add("FAQQuestionElCon");

    const createFAQQuestionEl = (qus, ansEl, ansHeight) => {
      const elCon = document.createElement("div");
      elCon.classList.add("FAQQuestionEl");

      const elHeaderCon = document.createElement("div");
      elHeaderCon.classList.add("FAQQuestionElHeaderCon");

      const elHeader = document.createElement("span");
      elHeader.classList.add("FAQQuestionElHeader");
      elHeader.textContent = qus;

      const addBtn = new Image();
      addBtn.src = plusImgSrc;
      addBtn.classList.add("FAQQuestionElAddBtn");

      let addBtnClicked = false;

      elHeaderCon.addEventListener("click", () => {
        if (addBtnClicked == false) {
          addBtnClicked = true;

          elCon.style.height = ansHeight;
          addBtn.src = minusImgSrc;
        } else {
          addBtnClicked = false;

          elCon.style.height = "64px";
          addBtn.src = plusImgSrc;
        }
      });

      elHeaderCon.appendChild(elHeader);
      elHeaderCon.appendChild(addBtn);

      elCon.appendChild(elHeaderCon);
      elCon.appendChild(ansEl);

      return elCon;
    };

    const qus1ansCon = document.createElement("div");
    qus1ansCon.classList.add("FAQQuestionElAnswerCon");

    const qus1ansText1 = document.createElement("span");
    qus1ansText1.classList.add("FAQQuestionElAnswerTextHeader");
    qus1ansText1.textContent =
      "Det nemmeste er at bruge vores hjemmeside til at bestille:";

    const qus1ansListCon = document.createElement("ol");
    qus1ansListCon.classList.add("FAQQuestionElAnswerList");

    const qus1ansListItem1Con = document.createElement("li");

    const qus1ansListItem11 = document.createElement("span");
    qus1ansListItem11.classList.add("FAQQuestionElAnswerListItem");
    qus1ansListItem11.textContent =
      "Klik på bestil knappen i menuen (eller klik ";

    const qus1ansListItem12 = document.createElement("a");
    qus1ansListItem12.classList.add("FAQQuestionElAnswerLink");
    qus1ansListItem12.textContent = "her";

    qus1ansListItem12.addEventListener("click", () => {
      const bestilForm = document.getElementById("bestilForm");
      bestilForm.scrollIntoView({ behavior: "smooth" });
    });

    const qus1ansListItem13 = document.createElement("span");
    qus1ansListItem13.classList.add("FAQQuestionElAnswerListItem");
    qus1ansListItem13.textContent = ").";

    qus1ansListItem1Con.appendChild(qus1ansListItem11);
    qus1ansListItem1Con.appendChild(qus1ansListItem12);
    qus1ansListItem1Con.appendChild(qus1ansListItem13);

    const qus1ansListItem2 = document.createElement("li");
    qus1ansListItem2.classList.add("FAQQuestionElAnswerListItem");
    qus1ansListItem2.textContent = "Udfyld formularen og tryk Næste.";

    const qus1ansListItem3 = document.createElement("li");
    qus1ansListItem3.classList.add("FAQQuestionElAnswerListItem");
    qus1ansListItem3.textContent =
      "Udfyld kontaktoplysninger (husk at læse vores servicevilkår) og tryk Send.";

    const qus1ansListItem4 = document.createElement("li");
    qus1ansListItem4.classList.add("FAQQuestionElAnswerListItem");
    qus1ansListItem4.textContent =
      "Du ville blive informeret om, at hjemmesiden vil åbne din mail client med en allerede udfyldt mail. Tryk på Send.";

    const qus1ansListItem5 = document.createElement("li");
    qus1ansListItem5.classList.add("FAQQuestionElAnswerListItem");
    qus1ansListItem5.textContent =
      "Din mail client vil nu åbnes med en allerede udfyldt mail og destination. Tjek mailen igennem for at sikre dig, at alle oplysninger er korrekte og send mailen afsted.";

    const qus1ansListItem6 = document.createElement("li");
    qus1ansListItem6.classList.add("FAQQuestionElAnswerListItem");
    qus1ansListItem6.textContent =
      "Du vil herefter modtage en bekræftelsesmail. Din bestilling er nu gennemført, og vi svarer tilbage hurtigst muligt : )";

    qus1ansListCon.appendChild(qus1ansListItem1Con);
    qus1ansListCon.appendChild(qus1ansListItem2);
    qus1ansListCon.appendChild(qus1ansListItem3);
    qus1ansListCon.appendChild(qus1ansListItem4);
    qus1ansListCon.appendChild(qus1ansListItem5);
    qus1ansListCon.appendChild(qus1ansListItem6);

    const qus1ansText2 = document.createElement("span");
    qus1ansText2.classList.add("FAQQuestionElAnswerText");
    qus1ansText2.textContent =
      "Hvis du ikke ønsker at bestille via vores hjemmeside, er du meget velkommen til enten at kontakte os via mail: kontakt@risskovvinduespudsning.com eller ringe til vores kundetelefon (+45) 71 78 41 41, inden for vores kundetelefons åbningstider.";

    qus1ansCon.appendChild(qus1ansText1);
    qus1ansCon.appendChild(qus1ansListCon);
    qus1ansCon.appendChild(qus1ansText2);

    FAQQuestionElCon.appendChild(
      createFAQQuestionEl(
        "Hvordan bestiller jeg?",
        qus1ansCon,
        "max(500px, calc(1560px - 140vw))"
      )
    );

    const qus2ansCon = document.createElement("div");
    qus2ansCon.classList.add("FAQQuestionElAnswerCon");

    const qus2ansText1 = document.createElement("span");
    qus2ansText1.classList.add("FAQQuestionElAnswerTextHeader");
    qus2ansText1.textContent =
      "Du kan afbestille helt op til en halv time inden vi kommer!";

    const qus2ansText2 = document.createElement("span");
    qus2ansText2.classList.add("FAQQuestionElAnswerText");
    qus2ansText2.textContent =
      "Alt du skal gøre er enten at sende en besked til (+45) 71 78 41 41 eller skrive en mail til kontakt@risskovvinduespudsning.com, hvor du skriver du gerne vil afmelde vores service.";

    qus2ansCon.appendChild(qus2ansText1);
    qus2ansCon.appendChild(qus2ansText2);

    FAQQuestionElCon.appendChild(
      createFAQQuestionEl(
        "Hvordan afbestiller jeg?",
        qus2ansCon,
        "clamp(190px, calc(600px - 60vw), 300px)"
      )
    );

    const qus3ansCon = document.createElement("div");
    qus3ansCon.classList.add("FAQQuestionElAnswerCon");

    const qus3ansText1 = document.createElement("span");
    qus3ansText1.classList.add("FAQQuestionElAnswerTextHeader");
    qus3ansText1.textContent = "Vi kører med fuld garanti!";

    const qus3ansText2 = document.createElement("span");
    qus3ansText2.classList.add("FAQQuestionElAnswerText");
    qus3ansText2.textContent =
      "Hvis der, efter vi har været og pudset vinduer, er snavs, kalk eller andre urenheder, så skriv til os på (+45) 71 78 41 41 eller send en mail til kontakt@risskovvinduespudsning.com, så kommer vi og pudser dine vinduer igen gratis. Hvis du ikke ønsker vores service længere, kan du få fuld refundering.";

    qus3ansCon.appendChild(qus3ansText1);
    qus3ansCon.appendChild(qus3ansText2);

    FAQQuestionElCon.appendChild(
      createFAQQuestionEl(
        "Hvilken garanti får jeg?",
        qus3ansCon,
        "clamp(200px, calc(550px - 40vw), 400px)"
      )
    );

    const qus4ansCon = document.createElement("div");
    qus4ansCon.classList.add("FAQQuestionElAnswerCon");

    const qus4ansText1 = document.createElement("span");
    qus4ansText1.classList.add("FAQQuestionElAnswerTextHeader");
    qus4ansText1.textContent = "Selvfølgelig!";

    const qus4ansText2 = document.createElement("span");
    qus4ansText2.classList.add("FAQQuestionElAnswerText");
    qus4ansText2.textContent =
      "Vi vender efter bestilling tilbage med dato og tidspunkt, og vi sender en besked en halv time før vi kommer.";

    qus4ansCon.appendChild(qus4ansText1);
    qus4ansCon.appendChild(qus4ansText2);

    FAQQuestionElCon.appendChild(
      createFAQQuestionEl(
        "Får jeg besked inden I kommer?",
        qus4ansCon,
        "clamp(170px, calc(600px - 60vw), 210px)"
      )
    );

    const qus5ansCon = document.createElement("div");
    qus5ansCon.classList.add("FAQQuestionElAnswerCon");

    const qus5ansText1 = document.createElement("span");
    qus5ansText1.classList.add("FAQQuestionElAnswerTextHeader");
    qus5ansText1.textContent = "Det er heldigvis meget simpelt.";

    const qus5ansListItem1 = document.createElement("span");
    qus5ansListItem1.classList.add("FAQQuestionElAnswerText");
    qus5ansListItem1.textContent =
      "Når du har bestilt kommer vi og pudser vinduer i den bestilte ordning (F.eks. hver 4 uge). Vi sender en besked med dato og tidspunkt, og en besked en halv time inden ankomst.";

    const qus5ansListItem2Con = document.createElement("div");

    const qus5ansListItem21 = document.createElement("span");
    qus5ansListItem21.classList.add("FAQQuestionElAnswerText");
    qus5ansListItem21.textContent =
      "Vi sender en regning elektronisk efter aftale. OBS: Du kan pt. ikke drage nytte af ";

    const qus5ansListItem22 = document.createElement("a");
    qus5ansListItem22.classList.add("FAQQuestionElAnswerLink");
    qus5ansListItem22.textContent = "servicefradrag";

    qus5ansListItem22.addEventListener("click", () => {
      document.body.appendChild(fradragPopUp());
    });

    const qus5ansListItem23 = document.createElement("span");
    qus5ansListItem23.classList.add("FAQQuestionElAnswerText");
    qus5ansListItem23.textContent = ".";

    qus5ansListItem2Con.appendChild(qus5ansListItem21);
    qus5ansListItem2Con.appendChild(qus5ansListItem22);
    qus5ansListItem2Con.appendChild(qus5ansListItem23);

    const qus5ansListItem3 = document.createElement("span");
    qus5ansListItem3.classList.add("FAQQuestionElAnswerText");
    qus5ansListItem3.textContent =
      "Det var det! Læn dig tilbage og nyd dine nypudsede vinduer.";

    qus5ansCon.appendChild(qus5ansText1);
    qus5ansCon.appendChild(qus5ansListItem1);
    qus5ansCon.appendChild(qus5ansListItem2Con);
    qus5ansCon.appendChild(qus5ansListItem3);

    FAQQuestionElCon.appendChild(
      createFAQQuestionEl(
        "Hvordan er processen, når jeg har bestilt?",
        qus5ansCon,
        "max(280px, calc(910px - 70vw))"
      )
    );

    FAQCon.appendChild(FAQheader);
    FAQCon.appendChild(FAQQuestionElCon);

    content.appendChild(FAQCon);

    resolve(content);
  });
};

export default createFAQPage;
