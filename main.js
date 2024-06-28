/*
var tab = [1,2,3,4];
var total = 0;

for (var i=3; i < tab.length; i++){        /*si i-- le PC crash
    total += tab[i];
    console.log("valeur de i: "+i);
    console.log("total= "+total);
}
console.log(total);


function melange(tab) {
    var temp = 0;
    var random = 0;
    for(var i = 0; i < tab.length; i++) {
        random = Math.floor(Math.random() * tab.length);
        temp = tab[i];
        tab[i] = tab[random];
        tab[random] = temp;
    }
    return tab
}
console.log(melange([1,2,3,4,5,6]));
*/

// Données à envoyer au serveur
/* var formData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        comment: comment
    };
    
    // Envoi des données au serveur
    fetch('https://example.com/submit', { // Remplacez par votre URL de serveur
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Traitement de la réponse du serveur
        document.getElementById('message').innerHTML = `<p style="color: green;">Succès: ${data.message}</p>`;
    })
    .catch(error => {
        // Gestion des erreurs
        document.getElementById('message').innerHTML = `<p style="color: red;">Erreur: ${error.message}</p>`;
    });
*/


function ajouterGif(src, left, top) {
    var gif = document.createElement('img');
    gif.src = src;
    gif.className = 'gif';
    gif.style.left = left + 'px';
    gif.style.top = top + 'px';
    document.body.appendChild(gif);

    // Supprimer le GIF après 10 secondes
    setTimeout(function() {
        gif.remove();
    }, 10000);
}


document.addEventListener("mouseleave", function () {
  var gif = document.getElementById("myGif");               // Trad : Qu’est-ce que tu vas faire ?
  gif.style.display = "block"; // Affiche le GIF
  gif.style.borderRadius = "50px";
  gif.style.width = "800px";
  gif.style.height = "850px";

  setTimeout(function () {
    gif.style.display = "none"; // Cache le GIF après 4,8 secondes
  }, 4800);
});


// Obtenez le bouton
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Lorsque l'utilisateur scroll vers le bas de 20px, affichez le bouton
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const height =  document.body.scrollHeight / 5;
    console.log (height);
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Lorsque l'utilisateur clique sur le bouton, scrollez en haut de la page
scrollTopBtn.onclick = function() {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
}



const leInput = document.querySelector("input");

leInput.addEventListener("focus", function () {
    leInput.style.backgroundColor = "lightBlue";
});

leInput.addEventListener("blur", function () {
    leInput.style.backgroundColor = "white";
});