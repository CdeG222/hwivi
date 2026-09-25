function openCookies() {
  const deDialog = document.querySelector("dialog");
  console.log(deDialog);
  deDialog.show();

  if (deDialog.open) {
    // de dialog sluiten
    deDialog.show();
  }
  // anders (de dialog is gesloten)
  else {
    // de dialog openen
    deDialog.show();
  }
}
