function openCookies() {
  const deDialog = document.querySelector("dialog");
  console.log(deDialog);

  if (deDialog.open) {
    // de dialog sluiten
    deDialog.close();
  }
  // anders (de dialog is gesloten)
  else {
    // de dialog openen
    deDialog.show();
  }
}

function AccepteerCookies() {
  var img = document.getElementById("Cookie.png");
  img.src = "assets/images/Gegeten-Cookie.png";
  return false;
}
