// img
import logoSrc from "../Img/Risskovpudsninglogo.svg";
import moreBtnSrc from "../Img/moreBtnSrc.svg";
import backArrowSrc from "../Img/backArrowSrc.svg";

const createHeader = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("headerOuterCon");

    const headerCon = document.createElement("div");
    headerCon.classList.add("headerCon");

    // On scrool append styles
    window.addEventListener("scroll", () => {
      if (document.body.getBoundingClientRect().top < -40) {
        // Add to header
        headerCon.classList.add("headerScrolled");
        menu.classList.add("headerMenuScrolled");
        logo.classList.add("headerLogoScrolled");
        underbar.classList.add("headerUnderbarScrolled");
      } else {
        headerCon.classList.remove("headerScrolled");
        menu.classList.remove("headerMenuScrolled");
        logo.classList.remove("headerLogoScrolled");
        underbar.classList.remove("headerUnderbarScrolled");
      }
    });

    const logo = new Image();
    logo.src = logoSrc;
    logo.classList.add("headerLogo");

    logo.addEventListener("click", () => {
      window.scrollTo({ top: "0", left: "0", behavior: "smooth" });
    });

    // Create menu with btns
    const menu = document.createElement("div");
    menu.classList.add("headerMenu");

    const appendMenuBtns = () => {
      while (menu.lastChild) {
        menu.removeChild(menu.lastChild);
      }

      const bestilBtn = document.createElement("div");
      bestilBtn.classList.add("homePageBtn", "bestilBtn");
      bestilBtn.textContent = "Bestil";

      bestilBtn.addEventListener("click", () => {
        const bestilForm = document.getElementById("bestilForm");

        bestilForm.scrollIntoView({ behavior: "smooth" });
      });

      const FAQBtn = document.createElement("span");
      FAQBtn.classList.add("headerMenuBtn");
      FAQBtn.textContent = "FAQ";

      FAQBtn.addEventListener("click", () => {
        const FAQPage = document.getElementById("FAQPage");

        FAQPage.scrollIntoView({ behavior: "smooth" });
      });

      const omOs = document.createElement("span");
      omOs.classList.add("headerMenuBtn");
      omOs.textContent = "Om Os";

      omOs.addEventListener("click", () => {
        const omOs = document.getElementById("AboutUsPage");

        omOs.scrollIntoView({ behavior: "smooth" });
      });

      const kontaktOs = document.createElement("span");
      kontaktOs.classList.add("headerMenuBtn");
      kontaktOs.textContent = "Kontakt";

      kontaktOs.addEventListener("click", () => {
        const ContactUsPage = document.getElementById("ContactUsPage");

        ContactUsPage.scrollIntoView({ behavior: "smooth" });
      });

      // Append btns

      menu.appendChild(FAQBtn);
      menu.appendChild(omOs);
      menu.appendChild(kontaktOs);
      menu.appendChild(bestilBtn);
    };

    const appendMoreBtn = () => {
      while (menu.lastChild) {
        menu.removeChild(menu.lastChild);
      }

      const moreBtn = new Image();
      moreBtn.src = moreBtnSrc;
      moreBtn.classList.add("headerMoreBtn");

      moreBtn.addEventListener("click", () => {
        const sidebarCon = document.createElement("div");
        sidebarCon.classList.add("headerSidebarCon");

        const backArrow = document.createElement("div");
        backArrow.classList.add("headerSidebarBackArrow");
        backArrow.textContent = "➔";

        const closeSideBar = () => {
          sidebarCon.style.right = "-300px";
          setTimeout(() => {
            document.body.removeChild(sidebarCon);
          }, 1000);
        };

        let isBackArrowCliked = false;

        backArrow.addEventListener("click", () => {
          if (isBackArrowCliked == false) {
            // To make sure there's no double activation
            isBackArrowCliked = true;

            closeSideBar();
          }
        });

        // Creating btn con
        const sidebarBtnCon = document.createElement("div");
        sidebarBtnCon.classList.add("headerSidebarBtnCon");

        const FAQBtn = document.createElement("span");
        FAQBtn.classList.add("headerMenuBtn");
        FAQBtn.textContent = "FAQ";

        FAQBtn.addEventListener("click", () => {
          closeSideBar();

          const FAQPage = document.getElementById("FAQPage");
          FAQPage.scrollIntoView({ behavior: "smooth" });
        });

        const omOs = document.createElement("span");
        omOs.classList.add("headerMenuBtn");
        omOs.textContent = "Om Os";

        omOs.addEventListener("click", () => {
          closeSideBar();

          const omOs = document.getElementById("AboutUsPage");
          omOs.scrollIntoView({ behavior: "smooth" });
        });

        const kontaktOs = document.createElement("span");
        kontaktOs.classList.add("headerMenuBtn");
        kontaktOs.textContent = "Kontakt";

        kontaktOs.addEventListener("click", () => {
          closeSideBar();

          const ContactUsPage = document.getElementById("ContactUsPage");
          ContactUsPage.scrollIntoView({ behavior: "smooth" });
        });

        // Append btns
        sidebarBtnCon.appendChild(FAQBtn);
        sidebarBtnCon.appendChild(omOs);
        sidebarBtnCon.appendChild(kontaktOs);

        const bestilBtn = document.createElement("div");
        bestilBtn.classList.add("moreConBestilBtn");
        bestilBtn.textContent = "Bestil nu";

        bestilBtn.addEventListener("click", () => {
          closeSideBar();

          const bestilForm = document.getElementById("bestilForm");
          bestilForm.scrollIntoView({ behavior: "smooth" });
        });

        sidebarCon.appendChild(bestilBtn);
        sidebarCon.appendChild(backArrow);
        sidebarCon.appendChild(sidebarBtnCon);

        document.body.appendChild(sidebarCon);
        setTimeout(() => {
          sidebarCon.style.right = "0px";
        }, 0);
      });

      menu.appendChild(moreBtn);
    };

    if (innerWidth > 800) {
      // If its a large screen append all links
      appendMenuBtns();
    } else {
      // Else append a small more btn
      appendMoreBtn();
    }

    window.addEventListener("resize", () => {
      if (innerWidth > 800) {
        // If its a large screen append all links
        appendMenuBtns();
      } else {
        // Else append a small more btn
        appendMoreBtn();
      }
    });

    // Appending last
    headerCon.appendChild(logo);
    headerCon.appendChild(menu);

    const underbar = document.createElement("div");
    underbar.classList.add("headerUnderbar");

    window.addEventListener("scroll", () => {
      underbar.style.width = `${
        ((-1 * document.body.getBoundingClientRect().top + innerHeight) /
          document.body.scrollHeight) *
        100
      }%`;
      console.log();
    });

    content.appendChild(headerCon);
    content.appendChild(underbar);

    resolve(content);
  });
};

export default createHeader;
