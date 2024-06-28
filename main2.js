var test = document.getElementById("sendButton");
test.addEventListener("click", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  var firstname = document.getElementById("firstname");
  var email = document.getElementById("email");
  var lastname = document.getElementById("lastname");
  var comment = document.getElementById("comment");
  var warnings = document.getElementsByClassName("warning-text");
  var warnings = document.querySelectorAll(".warning-text");
  // Expression régulière pour valider l'email
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  warnings.forEach(function (warning) {
    warning.remove();
  });

  if (firstname.value === "" || firstname.value === null) {
    warningTexts(firstname, "Le champ Prénom est requis.");
    console.log(firstname);
  }
  if (lastname.value === "" || lastname === null) {
    warningTexts(lastname, "Le champ Nom est requis.");
    console.log(lastname);
  }
  if (email.value === "" || email === null) {
    warningTexts(email, "Le champ Email est requis.");
    console.log(email);
  } else {
    if (!emailRegex.test(email.value)) {
      warningTexts(email, "Veuillez saisir une adresse email valide.");
      event.preventDefault(); // Empêche l'envoi du formulaire si l'email n'est pas valide
    }
  }
  if (comment.value === "" || comment === null) {
    warningTexts(comment, "Le champ Commentaire est requis.");
    console.log(comment);
  }
});

['search', 'firstname', 'lastname', 'email'].forEach(id => {
    document.getElementById(id).setAttribute('autocomplete', 'off');
});

function warningTexts(myinput, inputwarningText) {
  var warning = document.createElement("p");
  var mytext = document.createTextNode(inputwarningText);
  warning.appendChild(mytext);
  warning.style.fontSize = "15px";
  warning.style.margin = "1vh";
  warning.style.color = "red";
  warning.style.fontWeight = "bold";
  warning.classList.add("warning-text"); // Ajoute la classe 'warning-text'
  myinput.parentNode.insertBefore(warning, myinput.nextSibling);
}
