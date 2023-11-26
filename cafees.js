const cafesContainer = document.getElementById('cafees-container');
const filterForm = document.getElementById('filter');

//Laster inn cafene når siden lastes inn og legger EventListner på filteret
document.addEventListener('DOMContentLoaded', function () {
    displayCafes(cafesData);
	filterForm.addEventListener('change', filterCafes);

});

// Informasjon om de ulike cafeenen
const cafesData = [
	{
		"name": "Cafe A",
		"location": "Bjerke",
		"inneservering": true,
		"uteservering": false,
		"info": "litt info om plass"
	},
	{
		"name": "Cafe B",
		"location": "Frogner",
		"inneservering": true,
		"uteservering": true,
		"info": "litt info om plass"
	},
	{
		"name": "Cafe C",
		"location": "Frogner",
		"inneservering": false,
		"uteservering": true,
		"info": "litt info om plass"
	},
	{
		"name": "Cafe D",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": true,
		"info": "litt info om plass"
	},
	{
		"name": "Cafe E",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": true,
		"info": "litt info om plass"
	},
	{
		"name": "Cafe F",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": true,
		"info": "litt info om plass"
	},
	{
		"name": "Cafe G",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": true,
		"info": "litt info om plass"
	}
];

// Filtreringsfunksjon
function filterCafes () {
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

    // Filtrerer cafeene basert på inneservering, uteservering og bydel
	const filteredCafes = cafesData.filter(cafe =>
		(innserveringChecked ? cafe.inneservering : true) &&
		(uteserveringChecked ? cafe.uteservering : true) &&
		(
			(
				(bydelAlnaChecked && cafe.location === 'Alna') ||
				(bydelBjerkeChecked && cafe.location === 'Bjerke') ||
				(bydelFrognerChecked && cafe.location === 'Frogner') ||
				(bydelGamleOsloChecked && cafe.location === 'Gamle Oslo') ||
				(bydelGrorudChecked && cafe.location === 'Grorud') ||
				(bydelGrünerløkkaChecked && cafe.location === 'Grünerløkka') ||
				(bydelNordreAkerChecked && cafe.location === 'Nordre Aker') ||
				(bydelNordstrandChecked && cafe.location === 'Nordstrand') ||
				(bydelSageneChecked && cafe.location === 'Sagene') ||
				(bydelStHanshaugenChecked && cafe.location === 'St. Hanshaugen') ||
				(bydelStovnerChecked && cafe.location === 'Stovner') ||
				(bydelSondreNordstrandChecked && cafe.location === 'Søndre Nordstrand') ||
				(bydelUllernChecked && cafe.location === 'Ullern') ||
				(bydelVestreAkerChecked && cafe.location === 'Vestre Aker') ||
				(bydelOstensjoChecked && cafe.location === 'Østensjø')
			)
			||
			!anyDistrictChecked
		)
	);
	// Viser frem de filtrerte kafeene			
    displayCafes(filteredCafes);
}

// Funksjon for å vise cafeene
function displayCafes(cafes) {
	cafesContainer.innerHTML = ''; // Fjerner tidligere elementer

	cafes.forEach(cafe => {
		// Lager ny div for hver cafe
		const cafeDiv = document.createElement('div');
		const cafeModal = document.createElement('div');
		cafeDiv.className = 'option-box'; // Legger på classen "option-box"
		cafeModal.className = "info-modal";
		cafeModal.id = `${cafe.name}`;

		// Legger til innholdet i den nye diven
		cafeDiv.innerHTML = `
		<a href="#${cafe.name}">
			<img src="assets/imgs/cafees.jpg" class="option-box-img">
			<div class="option-box-info-container">
				<div class="title-location-container">
					<h2>${cafe.name}</h2>
					<div class="location-with-icon">
						<i class="fa-solid fa-map-location-dot"></i>
						<p class="location">${cafe.location}</p>
					</div>
				</div>
				<div class="cafe-restaurant-serving">
					${cafe.inneservering ? '<p>inneservering</p>' : ''}
					${cafe.uteservering ? '<p>uteservering</p>' : ''}
				</div>
				<p>${cafe.info}</p>
			</div>
		</a>
		`;

		cafeModal.innerHTML = `
		<a class="close-modal" href="#"></a>
			<div>
				<div class="modal-content">
					<h2>${cafe.name}</h2>
					<p>${cafe.info}</p>
				</div>
			</div>
		`;

		// Legger den nye diven i cafesContainer
		cafesContainer.appendChild(cafeDiv);
		cafesContainer.appendChild(cafeModal)
	});
}
