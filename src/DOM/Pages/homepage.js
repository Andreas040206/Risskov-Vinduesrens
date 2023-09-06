// MP4
import startVideoSrc from "../../Video/5_-_Risskov_Vinduespudsning_AdobeExpress.mp4";

// Img
import image1Src from "../../Img/hvemErViSrc.jpg";

const creatingHomepage = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("hompageCon");

    const startVideoFrame = document.createElement("div");
    startVideoFrame.classList.add("homepageStartvideoCon");

    const startVideo = document.createElement("video");
    startVideo.classList.add("homepageStartVideo");
    startVideo.loop = true;
    startVideo.playsInline = true;
    startVideo.muted = true;
    startVideo.setAttribute("type", "video/mp4");

    startVideo.src = startVideoSrc;

    // Make sure video starts on load
    document.addEventListener("DOMContentLoaded", () => {
      startVideo.play();
    });

    const startVideoCon = document.createElement("div");
    startVideoCon.classList.add("homepageStartVideoCon");

    const startVideoTextHeader = document.createElement("div");
    startVideoTextHeader.classList.add("homepageStartVideoTextHeader");
    startVideoTextHeader.textContent = "";

    const header1 = document.createElement("span");
    header1.classList.add("homepageStartVideoTextHeader");
    header1.textContent = "RISSKOV ";
    header1.style.color = "#0180d5";

    const header2 = document.createElement("span");
    header2.classList.add("homepageStartVideoTextHeader");
    header2.textContent = "VINDUESPUDSNING";

    startVideoTextHeader.appendChild(header1);
    startVideoTextHeader.appendChild(header2);

    const startVideoText = document.createElement("span");
    startVideoText.classList.add("homepageStartVideoText");
    startVideoText.textContent =
      "Vinduespudsning på traditionel vis i lokalområdet. Giv os et kald på (+45) 71 78 41 41 eller benyt dig af formularen her på siden for lynhurtig bestilling!";

    const btnCon = document.createElement("div");
    btnCon.classList.add("homepageStartVideoBtnCon");

    const bestilBtn = document.createElement("div");
    bestilBtn.classList.add("homePageBtn");
    bestilBtn.textContent = "Bestil";

    bestilBtn.addEventListener("click", () => {
      const bestilForm = document.getElementById("bestilForm");

      bestilForm.scrollIntoView({ behavior: "smooth" });
    });

    btnCon.appendChild(bestilBtn);

    startVideoCon.appendChild(startVideoTextHeader);
    startVideoCon.appendChild(startVideoText);
    startVideoCon.appendChild(btnCon);

    startVideoFrame.appendChild(startVideo);
    startVideoFrame.appendChild(startVideoCon);

    // Create first text box
    const textAndImagePart1 = document.createElement("div");
    textAndImagePart1.classList.add("textAndImagePartCon");

    const textCon1 = document.createElement("div");
    textCon1.classList.add("textCon");

    const textHeader1 = document.createElement("span");
    textHeader1.classList.add("headerText");
    textHeader1.textContent = "Hvem er vi?";

    const textText11 = document.createElement("span");
    textText11.classList.add("text");
    textText11.textContent = `Vi er en gruppe unge drenge fra Risskov, der har skabt vores eget vinduespudsningsfirma med stolthed. Vores grundighed og pålidelighed er kernen i alt, hvad vi gør. Vi lader os ikke slå ud af udfordringer, men tager dem med positiv energi og et smil på læben.`;

    const textText12 = document.createElement("span");
    textText12.classList.add("text");
    textText12.textContent = `Som lokale er vi glade for at kunne pudse vores naboers vinduer og bidrage til lokalområdet. Sammen hjælper vi hinanden, og vores stærke bånd skaber et godt arbejdsmiljø, hvor vi alle trives.`;

    const textText13 = document.createElement("span");
    textText13.classList.add("text");
    textText13.textContent = `Selvom vores baggrund måske ikke er professionel, viser vores styrker sig tydeligt, når vi arbejder sammen som et team. Vores fleksibilitet og engagement gør os klar til enhver udfordring, der kommer vores vej. Med passion og dedikation gør vi vores bedste for at give vores kunder den bedste service.`;

    const textText19 = document.createElement("span");
    textText19.classList.add("text");
    textText19.textContent = `Tak fordi du valgte Risskov Vinduespudsning. Vi ser frem til at servicere dine vinduer!`;

    // Appending text
    textCon1.appendChild(textHeader1);
    textCon1.appendChild(textText11);
    textCon1.appendChild(textText12);
    textCon1.appendChild(textText13);
    textCon1.appendChild(textText19);

    const image1Con = document.createElement("div");
    image1Con.classList.add("hompageImg1Con");

    const image1 = new Image();
    image1.src = image1Src;
    image1.classList.add("hompageImg");

    image1Con.appendChild(image1);

    // Appening parts
    textAndImagePart1.appendChild(textCon1);
    textAndImagePart1.appendChild(image1Con);

    content.appendChild(startVideoFrame);
    content.appendChild(textAndImagePart1);

    resolve(content);
  });
};

export default creatingHomepage;
