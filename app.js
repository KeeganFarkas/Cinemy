function homeSearch(event) {
  if (event.path[1][0]) {
    localStorage.setItem("search", event.path[1][0].value);
  } else {
    localStorage.setItem("search", event.path[2][0].value);
  }

  window.location.href = `${origin}/find.html`;
}

function notImplemented() {
  try {
    throw "This feature has not been implemented";
  } catch (e) {
    alert(e);
  }
}

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}
