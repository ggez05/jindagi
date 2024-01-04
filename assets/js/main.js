$(document).ready(function () {
  setTimeout(function () {
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  }, 600);
});

function start() {
  var btnYes = document.querySelector(".btn--yes");
  var btnNo = document.querySelector(".btn--no");
  var popup = document.querySelector(".modal");
  var overlay = document.querySelector(".modal__overlay");
  var btnClose = document.querySelector(".btn-close");
  var headerModar = document.querySelector(".heading-name");
  var desccriptionModar = document.querySelector(".message");

  document.body.addEventListener("mousemove", function () {
    document.querySelector(".music").play();
    document.querySelector(".music").volume = 1;
  });

  document.querySelector(".header").innerHTML = `
        <h1 class="header-name">
            ${CONFIGDATA.titleHeader}
            <i class="ti-heart"></i>
        </h1>
        <p class="header-description">${CONFIGDATA.descriptionHeader}
        </p>`;
  btnYes.innerHTML = `${CONFIGDATA.buttonYes}`;
  btnNo.innerHTML = `${CONFIGDATA.buttonNo}`;
  headerModar.innerHTML = `${CONFIGDATA.titleModar} <i class="ti-heart"></i>`;
  desccriptionModar.innerHTML = `${CONFIGDATA.descriptionModar}`;

  btnYes.onclick = () => {
    popup.classList.add("show");
  };
  btnClose.onclick = () => {
    popup.classList.remove("show");
  };

  overlay.onclick = () => {
    popup.classList.remove("show");
  };

  btnNo.onclick = () => {
    var buttonWidth = btnNo.offsetWidth;
    var buttonHeight = btnNo.offsetHeight;
    var x = Math.floor(Math.random() * (window.innerWidth - buttonWidth) * 0.8);
    var y = Math.floor(
      Math.random() * (window.innerHeight - buttonHeight) * 0.8
    );
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
  };

  // btnNo.onmouseover = (e) => {
  //   try {
  //     var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
  //     var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
  //     btnNo.style.top = x + "px";
  //     btnNo.style.right = y + "px";
  //   } catch (error) {}
  // };
}

start();
