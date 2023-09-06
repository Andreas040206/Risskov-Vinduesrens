import createBestilForm from "../bestilForm";

// Img
import waveSrc from "../../Img/wave.svg";

const createPricePage = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("createPricePageCon");
    content.setAttribute("id", "pricePage");

    const waveCon = document.createElement("div");
    waveCon.classList.add("pricePageWaveCon");

    const wave = new Image();
    wave.src = waveSrc;
    wave.classList.add("pricePageWave");

    waveCon.appendChild(wave);

    // Creating wave
    const blueCon = document.createElement("div");
    blueCon.classList.add("pricePageBlueCon");

    createBestilForm().then((el) => {
      blueCon.appendChild(el);
    });

    content.appendChild(blueCon);

    resolve(content);
  });
};

export default createPricePage;
