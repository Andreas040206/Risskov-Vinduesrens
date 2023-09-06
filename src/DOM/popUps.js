import backBtnImgSrc from "../Img/blackPlus.png";

const servicevilkaarPopUp = (noBestil) => {
  const bgBlurCon = document.createElement("div");
  bgBlurCon.classList.add("bestilFormBg");

  const vilkaarCon = document.createElement("div");
  vilkaarCon.classList.add("bestilVilkaarCon");

  const vilkaarHeader = document.createElement("span");
  vilkaarHeader.classList.add("vilkaarHeader");
  vilkaarHeader.textContent = "Servicevilkår";

  const vilkaarText = document.createElement("div");
  vilkaarText.classList.add("bestilVilkaarText");
  vilkaarText.textContent =
    "Vi anbefaler, at du læser vores servicevilkår, inden du bestiller, så du får den bedste oplevelse med vores service.";

  const vilkaarList = document.createElement("ul");
  vilkaarList.classList.add("vilkaarList");

  const vilkaarListItem1 = document.createElement("li");
  vilkaarListItem1.classList.add("vilkaarListItem", "bestilVilkaarText");
  vilkaarListItem1.textContent = "Vi vasker ikke skråvinduer.";

  const vilkaarListItem2 = document.createElement("li");
  vilkaarListItem2.classList.add("vilkaarListItem", "bestilVilkaarText");
  vilkaarListItem2.textContent =
    "Hvis et vindue ikke er let tilgængeligt (ca 1 meters plads foran vinduet), vil vi ikke servicere dette vindue.";

  const vilkaarListItem3 = document.createElement("li");
  vilkaarListItem3.classList.add("vilkaarListItem", "bestilVilkaarText");
  vilkaarListItem3.textContent =
    "Vi skal have adgang til vand (Vi tapper maks 15 liter, hvilket koster cirka 1 kr)";

  const vilkaarListItem4 = document.createElement("li");
  vilkaarListItem4.classList.add("vilkaarListItem", "bestilVilkaarText");
  vilkaarListItem4.textContent =
    "Vinduer blokeret af altaner, vil kun blive serviceret, hvis vi vurderer det er muligt at kravle op med stige, eller at der er mulighed for gennemgang igennem huset. ";

  const vilkaarListItem5 = document.createElement("li");
  vilkaarListItem5.classList.add("vilkaarListItem", "bestilVilkaarText");
  vilkaarListItem5.textContent =
    "Vinduespudseren må ikke fjerne/flytte nogle af ​​dine ejendele for at komme til et vindue, medmindre du som kunde på forhånd har givet skriftligt samtykke hertil.";

  const vilkaarListItem6 = document.createElement("li");
  vilkaarListItem6.classList.add("vilkaarListItem", "bestilVilkaarText");
  vilkaarListItem6.textContent =
    "Hvis du ikke længere ønsker at være tilmeldt vores service, kan du afbestille helt op til en halv time inden vi kommer! For at afbestille skal du blot kontakte os via kundetelefon eller mail. ";

  const vilkaarListItem7 = document.createElement("li");
  vilkaarListItem7.classList.add("vilkaarListItem", "bestilVilkaarText");

  const vilkaarListItem71 = document.createElement("span");
  vilkaarListItem71.textContent = "Du kan pt ikke drage nytte af ";

  const vilkaarListItem72 = document.createElement("a");
  vilkaarListItem72.textContent = "servicefradrag.";
  vilkaarListItem72.classList.add("vilkaarLink");

  vilkaarListItem72.addEventListener("click", () => {
    document.body.appendChild(fradragPopUp());
  });

  vilkaarListItem7.appendChild(vilkaarListItem71);
  vilkaarListItem7.appendChild(vilkaarListItem72);

  vilkaarList.appendChild(vilkaarListItem1);
  vilkaarList.appendChild(vilkaarListItem2);
  vilkaarList.appendChild(vilkaarListItem3);
  vilkaarList.appendChild(vilkaarListItem4);
  vilkaarList.appendChild(vilkaarListItem5);
  vilkaarList.appendChild(vilkaarListItem6);
  vilkaarList.appendChild(vilkaarListItem7);

  const vilkaarText2 = document.createElement("div");
  vilkaarText2.classList.add("bestilVilkaarText");
  vilkaarText2.textContent =
    "Du modtager en regning elektronisk efter hver service.";

  const vilkaarLaestBtn = document.createElement("div");
  vilkaarLaestBtn.classList.add("bestilVilkaarBtn");

  if (noBestil == undefined) {
    vilkaarLaestBtn.textContent = "Jeg har læst & forstået";
  } else {
    vilkaarLaestBtn.textContent = "Luk";
  }

  vilkaarLaestBtn.addEventListener("click", () => {
    document.body.removeChild(bgBlurCon);
  });

  vilkaarCon.appendChild(vilkaarHeader);
  vilkaarCon.appendChild(vilkaarText);
  vilkaarCon.appendChild(vilkaarList);
  vilkaarCon.appendChild(vilkaarText2);
  vilkaarCon.appendChild(vilkaarLaestBtn);

  bgBlurCon.appendChild(vilkaarCon);

  return bgBlurCon;
};

const fradragPopUp = () => {
  const bgBlurCon = document.createElement("div");
  bgBlurCon.classList.add("bestilFormBg");

  const con = document.createElement("div");
  con.classList.add("SFCon");

  const text = document.createElement("span");
  text.classList.add("SFText");
  text.textContent =
    "For at kunne drage nytte af sevicefradrag, kræver det, at man indberetter, hvilken virksomhed som har udført servicen. Det kræver derfor et cvr nummer og eftersom ingen fra vores team er over 18 år, er det ikke helt så let at få registret vores virksomhed. Vi venter på svar fra familieretshuset, om at få vores ansøgning godkendt, og indtil da er det ikke muligt at drage nytte af servicefradrag efter vores ydelse.";

  const text2 = document.createElement("span");
  text2.classList.add("SFText");
  text2.textContent = "Vi beklager :(";

  const exitBtn = new Image();
  exitBtn.src = backBtnImgSrc;
  exitBtn.classList.add("SFBackBtn");

  exitBtn.addEventListener("click", () => {
    document.body.removeChild(bgBlurCon);
  });

  con.appendChild(text);
  con.appendChild(text2);
  con.appendChild(exitBtn);

  bgBlurCon.appendChild(con);

  return bgBlurCon;
};

export { servicevilkaarPopUp, fradragPopUp };
