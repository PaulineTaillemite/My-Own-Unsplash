/* const travelbutton = document.querySelector('.travel-button') */
const queryinput = document.querySelector('.query-input')
const querybutton = document.querySelector('.query-button')
const infosElement = document.querySelector('.infos')
const portfolio = document.getElementById('portfolio')
const artistname = document.getElementById('artistname')
const instagram = document.getElementById('instagram')




//LINK DOM DES IMAGES 
const pictureElements = [
  document.getElementById('img1'),
  document.getElementById('img2'),
  document.getElementById('img3'),
  document.getElementById('img4'),
  document.getElementById('img5'),
  document.getElementById('img6'),
  document.getElementById('img7'),
  document.getElementById('img8'),
  document.getElementById('img9'),
  document.getElementById('img10'),
  document.getElementById('img11'),
  document.getElementById('img12'),
]
const artistElements = [
  document.getElementById('artistname1'),
  document.getElementById('artistname2'),
  document.getElementById('artistname3'),
  document.getElementById('artistname4'),
  document.getElementById('artistname5'),
  document.getElementById('artistname6'),
  document.getElementById('artistname7'),
  document.getElementById('artistname8'),
  document.getElementById('artistname9'),
  document.getElementById('artistname10'),
  document.getElementById('artistname11'),
  document.getElementById('artistname12'),
]
const portfolioElements = [
  document.getElementById('portfolio1'),
  document.getElementById('portfolio2'),
  document.getElementById('portfolio3'),
  document.getElementById('portfolio4'),
  document.getElementById('portfolio5'),
  document.getElementById('portfolio6'),
  document.getElementById('portfolio7'),
  document.getElementById('portfolio8'),
  document.getElementById('portfolio9'),
  document.getElementById('portfolio10'),
  document.getElementById('portfolio11'),
  document.getElementById('portfolio12'),
]
const instagramElements = [
  document.getElementById('instagram1'),
  document.getElementById('instagram2'),
  document.getElementById('instagram3'),
  document.getElementById('instagram4'),
  document.getElementById('instagram5'),
  document.getElementById('instagram6'),
  document.getElementById('instagram7'),
  document.getElementById('instagram8'),
  document.getElementById('instagram9'),
  document.getElementById('instagram10'),
  document.getElementById('instagram11'),
  document.getElementById('instagram12'),
]

/* LANCEMENT AU CLICK DU FETCH ET DE L'AFFICHAGE DES ÉLÉMENTS */
querybutton.addEventListener('click', function () {
  const count = 12
  const country = document.querySelector('#query-input').value;
  if (country === '') return;

  let allPictureinfos = [];

  fetch(`https://api.unsplash.com/photos/random?client_id=zWBeayFdfU76AN1AMHg25MD9iyqLoF92ScivRBCBgCw&count=${count}&orientation=squarish&query=${country}`)
    .then((res) => res.json())
    .then((data) => {
      allPictureinfos = data;
      console.log(data)
      console.log(typeof allPictureinfos)


      /* BOUCLE AFFICHAGE DES PHOTOS */
      data.forEach((item, index) => {
        if (index < pictureElements.length) {
          const pictureElement = pictureElements[index];
          pictureElement.src = item.urls.regular;
        }
      });

      /* BOUCLE AFFICHAGE NOM DES ARTISTES */
      data.forEach((item, index) => {
        if (index < artistElements.length) {
          const artistElement = artistElements[index];
          artistElement.innerHTML = `${item.user.name}`
        }
      });

      /* BOUCLE AFFICHAGE LIEN DES PORTFOLIOS AVEC GESTION DES NULL */
      data.forEach((item, index) => {
        if (index < portfolioElements.length) {
          const portfolioElement = portfolioElements[index];
          if (portfolioElement !== null) {
            if (item.user.portfolio_url == null) {
              portfolioElement.innerHTML = '';
            } else {
              portfolioElement.innerHTML = `<a href="${item.user.portfolio_url}" target="_blank">ARTIST WEBSITE</a>`;
            }
          } else {
            console.log(`portfolioElement at index ${index} is null`);
          }
        }
      });

      /* BOUCLE AFFICHAGE DES PROFILS INSTAGRAM AVEC GESTION DES NULL */
      data.forEach((item, index) => {
        if (index < instagramElements.length) {
          const instagramElement = instagramElements[index];
          if (instagramElement !== null) {
            if (item.user.instagram_username == null) {
              instagramElement.innerHTML = '';
            } else {
              instagramElement.innerHTML = `<a href="https://www.instagram.com/${item.user.instagram_username}" target="_blank">@${item.user.instagram_username}</a>`;
            }
          } else {
            console.log(`the usar at index ${index} has no instagram`)
          }

        }
      });


      hidden.classList.remove('hidden')




    })
})