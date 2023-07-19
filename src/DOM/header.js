const createHeader = () => {
  return new Promise((resolve) => {
    const headerCon = document.createElement("div");
    headerCon.classList.add("headerCon");

    headerCon.addEventListener("scroll", () => {
      if (headerCon.getBoundingClientRect().top > 40) {
        headerCon.classList.add("headerScrolled");
      }
    });

    resolve(headerCon);
  });
};

export default createHeader;
