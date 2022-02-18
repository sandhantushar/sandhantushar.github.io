function myFunction() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "navbar") {
      nav.className += " responsive";
    } else {
      nav.className = "navbar";
    }
  }