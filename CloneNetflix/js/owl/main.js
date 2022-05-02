$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: false,
  autowidth: false,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 7,
    },
  },
});

function myFunction1() {
  document.getElementById("Cavaleiro").style.display = "flex";
  document.getElementById("Vikings").style.display = "none";
  document.getElementById("Halo").style.display = "none";
  document.getElementById("TWD").style.display = "none";
  document.getElementById("Peaky").style.display = "none";
}
function myFunction2() {
  document.getElementById("Cavaleiro").style.display = "none";
  document.getElementById("Vikings").style.display = "none";
  document.getElementById("Halo").style.display = "flex";
  document.getElementById("TWD").style.display = "none";
  document.getElementById("Peaky").style.display = "none";
}
function myFunction3() {
  document.getElementById("Cavaleiro").style.display = "none";
  document.getElementById("Vikings").style.display = "none";
  document.getElementById("Halo").style.display = "none";
  document.getElementById("TWD").style.display = "flex";
  document.getElementById("Peaky").style.display = "none";
}
function myFunction4() {
  document.getElementById("Cavaleiro").style.display = "none";
  document.getElementById("Vikings").style.display = "flex";
  document.getElementById("Halo").style.display = "none";
  document.getElementById("TWD").style.display = "none";
  document.getElementById("Peaky").style.display = "none";
}
function myFunction5() {
  document.getElementById("Cavaleiro").style.display = "none";
  document.getElementById("Vikings").style.display = "none";
  document.getElementById("Halo").style.display = "none";
  document.getElementById("TWD").style.display = "none";
  document.getElementById("Peaky").style.display = "flex";
}
function bigImg(x) {
  x.style.height = "270px";
  x.style.width = "170px";
}

function normalImg(x) {
  x.style.height = "250px";
  x.style.width = "156px";
}
