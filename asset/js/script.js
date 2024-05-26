let _menu = document.querySelectorAll("#menu");
let _persian = document.getElementById("persian");
let _english = document.getElementById("english");

function openItem() {
  _menu[0].style = " display: block;";
  _menu[1].style = " display: block;";
}
function closeItem() {
  _menu[0].style = "  display: none;";
  _menu[1].style = "  display: none;";
}

function changeLanguage() {
  if (_english.style.display == "block") {
    _english.style = "display : none";
    _persian.style = "display : block";
  } else {
    _english.style = "display : block";
    _persian.style = "display : none";
  }
}
