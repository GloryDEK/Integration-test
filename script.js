document.addEventListener("DOMContentLoaded", function () {
  // Formulaire de contact
  const formulaire = document.getElementById("formulaire-contact");
  const nomInput = document.getElementById("nom");
  const prenomsInput = document.getElementById("prenoms");
  const emailInput = document.getElementById("email");
  const telephoneInput = document.getElementById("telephone");
  const adresseInput = document.getElementById("adresse");
  const menuInput = document.getElementById("menu");
  const messageInput = document.getElementById("message");
  const confirmation = document.getElementById("confirmation");

  formulaire.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = nomInput.value.trim();
    const prenoms = prenomsInput.value.trim();
    const email = emailInput.value.trim();
    const telephone = telephoneInput.value.trim();
    const adresse = adresseInput.value.trim();
    const menu = menuInput.value;
    const message = messageInput.value.trim();

    if (nom && email && message) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        confirmation.textContent = "Veuillez entrer un email valide.";
        confirmation.style.color = "red";
        return;
      }

      console.log("Formulaire soumis :", { 
        nom, 
        prenoms, 
        email, 
        telephone, 
        adresse, 
        menu, 
        message 
      });

      formulaire.reset();
      confirmation.textContent = "Message envoyé avec succès !";
      confirmation.style.color = "green";
    } else {
      confirmation.textContent = "Veuillez remplir tous les champs obligatoires.";
      confirmation.style.color = "red";
    }
  });

  // Gestion des commandes
  const boutonsCommander = document.querySelectorAll(".btn-commander");
  const commandesContainer = document.getElementById("commandes");

  boutonsCommander.forEach((btn) => {
    btn.addEventListener("click", function () {
      const article = this.closest(".card");
      const nomProduit = article.querySelector(".card-title").textContent;
      const prix = article.querySelector(".card-text").textContent;

      const ligneCommande = document.createElement("div");
      ligneCommande.classList.add("alert", "alert-info", "mt-2");
      ligneCommande.textContent = `Produit : ${nomProduit} | Prix : ${prix}`;

      commandesContainer.appendChild(ligneCommande);
    });
  });

  // Bouton "Savoir +" - Section "Qui sommes-nous"
  const boutonSavoirPlus = document.getElementById("btn-savoir-plus");
  const contenuSupp = document.getElementById("contenu-supplementaire");

  if (boutonSavoirPlus && contenuSupp) {
    boutonSavoirPlus.addEventListener("click", () => {
      contenuSupp.classList.toggle("d-none");

      boutonSavoirPlus.textContent = contenuSupp.classList.contains("d-none")
        ? "En savoir +"
        : "Afficher moins";
    });
  }
});