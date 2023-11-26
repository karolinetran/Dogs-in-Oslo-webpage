const restaurantsContainer = document.getElementById('restaurants-container');
const filterForm = document.getElementById('filter');

//Laster inn restaurantne når siden lastes inn og legger EventListner på filteret
document.addEventListener('DOMContentLoaded', function () {
    displayrestaurants(restaurantsData);
	filterForm.addEventListener('change', filterRestaurants);

});

// Informasjon om de ulike restaurantenen
const restaurantsData = [
	{
		"name": "SF BREAD BOWL",
		"location": "Frogner",
		"inneservering": true,
		"uteservering": true,
		"infoShort": "Fra San Francisco kamskjellsuppe til fireosttrøffelmakaroni.",
		"info": "Håndlaget mat laget med kjærlighet. Velg fra vårt utvalg av håndverksfyll, alt fra vårtradisjonelle San Francisco kamskjellsuppe til vår fireosttrøffelmakaroni."
	},
	{
		"name": "OSLO STREET FOOD",
		"location": "Frogner",
		"inneservering": true,
		"uteservering": true,
		"infoShort": "Med 16 unike matboder serverer vi alle slags deilige retter.",
		"info": "Med 16 unike matboder serverer vi alle slags deilige retter fra Mexico, Colombia, Hellas, Korea, Japan, India, Hawaii, Thailand og Middelhavet. Matbodene er grundig utvalgt ut fra konsept, evner og kvalitet."
	},
	{
		"name": "restaurant C",
		"location": "Frogner",
		"inneservering": false,
		"uteservering": true,
		"infoShort": "",
		"info": "litt info om plass"
	},
	{
		"name": "restaurant D",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": true,
		"infoShort": "",
		"info": "litt info om plass"
	},
	{
		"name": "restaurant E",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": true,
		"infoShort": "",
		"info": "litt info om plass"
	},
	{
		"name": "restaurant F",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": true,
		"infoShort": "",
		"info": "litt info om plass"
	},
	{
		"name": "restaurant G",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": true,
		"infoShort": "",
		"info": "litt info om plass"
	}
];

// Filtreringsfunksjon
function filterRestaurants () {
	// Importerer alle checkboksene
    const innserveringChecked = document.getElementById('innservering').checked;
    const uteserveringChecked = document.getElementById('uteservering').checked;
    const bydelAlnaChecked = document.getElementById('Alna').checked;
    const bydelBjerkeChecked = document.getElementById('Bjerke').checked;
    const bydelFrognerChecked = document.getElementById('Frogner').checked;
    const bydelGamleOsloChecked = document.getElementById('GamleOslo').checked;
    const bydelGrorudChecked = document.getElementById('Grorud').checked;
    const bydelGrünerløkkaChecked = document.getElementById('Grünerløkka').checked;
    const bydelNordreAkerChecked = document.getElementById('NordreAker').checked;
    const bydelNordstrandChecked = document.getElementById('Nordstrand').checked;
    const bydelSageneChecked = document.getElementById('Sagene').checked;
    const bydelStHanshaugenChecked = document.getElementById('StHanshaugen').checked;
    const bydelStovnerChecked = document.getElementById('Stovner').checked;
    const bydelSondreNordstrandChecked = document.getElementById('SondreNordstrand').checked;
    const bydelUllernChecked = document.getElementById('Ullern').checked;
    const bydelVestreAkerChecked = document.getElementById('VestreAker').checked;
    const bydelOstensjoChecked = document.getElementById('Ostensjo').checked;

    // Sjekker om noen av bydelene er haket av
    const anyDistrictChecked =
        bydelAlnaChecked || bydelBjerkeChecked || bydelFrognerChecked || bydelGamleOsloChecked ||
        bydelGrorudChecked || bydelGrünerløkkaChecked || bydelNordreAkerChecked || bydelNordstrandChecked ||
        bydelSageneChecked || bydelStHanshaugenChecked || bydelStovnerChecked || bydelSondreNordstrandChecked ||
        bydelUllernChecked || bydelVestreAkerChecked || bydelOstensjoChecked;

    // Filtrerer restaurantene basert på inneservering, uteservering og bydel
	const filteredrestaurants = restaurantsData.filter(restaurant =>
		(innserveringChecked ? restaurant.inneservering : true) &&
		(uteserveringChecked ? restaurant.uteservering : true) &&
		(
			(
				(bydelAlnaChecked && restaurant.location === 'Alna') ||
				(bydelBjerkeChecked && restaurant.location === 'Bjerke') ||
				(bydelFrognerChecked && restaurant.location === 'Frogner') ||
				(bydelGamleOsloChecked && restaurant.location === 'Gamle Oslo') ||
				(bydelGrorudChecked && restaurant.location === 'Grorud') ||
				(bydelGrünerløkkaChecked && restaurant.location === 'Grünerløkka') ||
				(bydelNordreAkerChecked && restaurant.location === 'Nordre Aker') ||
				(bydelNordstrandChecked && restaurant.location === 'Nordstrand') ||
				(bydelSageneChecked && restaurant.location === 'Sagene') ||
				(bydelStHanshaugenChecked && restaurant.location === 'St. Hanshaugen') ||
				(bydelStovnerChecked && restaurant.location === 'Stovner') ||
				(bydelSondreNordstrandChecked && restaurant.location === 'Søndre Nordstrand') ||
				(bydelUllernChecked && restaurant.location === 'Ullern') ||
				(bydelVestreAkerChecked && restaurant.location === 'Vestre Aker') ||
				(bydelOstensjoChecked && restaurant.location === 'Østensjø')
			)
			||
			!anyDistrictChecked
		)
	);
	// Viser frem de filtrerte kafeene			
    displayrestaurants(filteredrestaurants);
}

// Funksjon for å vise restaurantene
function displayrestaurants(restaurants) {
	restaurantsContainer.innerHTML = ''; // Fjerner tidligere elementer

	restaurants.forEach(restaurant => {
		// Lager ny div for hver restaurant
		const restaurantDiv = document.createElement('div');
		const restaurantModal = document.createElement('div');
		restaurantDiv.className = 'option-box'; // Legger på classen "option-box"
		restaurantModal.className = "info-modal";
		restaurantModal.id = `${restaurant.name}`;

		// Legger til innholdet i den nye diven
		restaurantDiv.innerHTML = `
		<a href="#${restaurant.name}">
			<img src="assets/imgs/restaurants.jpg" class="option-box-img">
			<div class="option-box-info-container">
				<div class="title-location-container">
					<h2>${restaurant.name}</h2>
					<div class="location-with-icon">
						<i class="fa-solid fa-map-location-dot"></i>
						<p class="location">${restaurant.location}</p>
					</div>
				</div>
				<div class="cafe-restaurant-serving">
					${restaurant.inneservering ? '<p>inneservering</p>' : ''}
					${restaurant.uteservering ? '<p>uteservering</p>' : ''}
				</div>
				<p>${restaurant.infoShort}</p>
			</div>
		</a>
		`;

		restaurantModal.innerHTML = `
		<a class="close-modal" href="#"></a>
			<div>
				<div class="modal-content">
					<h2>${restaurant.name}</h2>
					<p>${restaurant.info}</p>
				</div>
			</div>
		`;

		// Legger den nye diven i restaurantsContainer
		restaurantsContainer.appendChild(restaurantDiv);
		restaurantsContainer.appendChild(restaurantModal)
	});
}
