const cafesContainer = document.getElementById('cafees-container');
const filterForm = document.getElementById('filter');

//Laster inn cafene når siden lastes inn og legger EventListner på filteret
document.addEventListener('DOMContentLoaded', function () {
    displayCafes(cafesData);
	filterForm.addEventListener('change', filterCafes);

});

// Information about the different cafees
const cafesData = [
	{
		"name": "ESPRESSO HOUSE",
		"location": "Bjerke",
		"inneservering": true,
		"uteservering": false,
		"infoShort": "Espresso House er en kafe-kjede som har kafeer i ulike bydeler i Oslo",
		"info": "Espresso House serverer både varme og kalde drikker, og har i tillegg lett matservering.",
		"link": "www.side.no"
	},
	{
		"name": "GRÅBEIN BAR",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": true,
		"infoShort": "Gråbein bar ligger på Tøyen og er spesielt hundevennlig!",
		"info": "Gråbein Bar er en hundevennlig bar som ligger på Tøyen! Her arrangeres quiz og diverse events, i tillegg til at de har både ute og inneservering for deg og din hund!",
		"link": "www.side.no"
	},
	{
		"name": "STARBUCKS VALKYRIEN",
		"location": "Frogner",
		"inneservering": true,
		"uteservering": false,
		"infoShort": "Starbucks ved Majorstuen serverer kaffe og mat, hunder er velkomne!",
		"info": "Kafeen ligger sentralt ved Majorstua T-bane.",
		"link": "www.side.no"
	},
	{
		"name": "CLOUD CAFE",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": true,
		"infoShort": "Cloud cafe serverer kaffe og smoothiebowls i koselige lokaler",
		"info": "litt info om plass",
		"link": "www.side.no"
	},
	{
		"name": "PUST KAFE",
		"location": "Gamle Oslo",
		"inneservering": true,
		"uteservering": false,
		"infoShort": "Pust kafe er kafe som ligger rett ved T-banen på Majorstua.",
		"info": "litt info om plass",
		"link": "www.side.no"
	},
	{
		"name": "OSLO MEKANISKE VERKSTED",
		"location": "Gamle Oslo",
		"inneservering": false,
		"uteservering": true,
		"infoShort": "Uteplass/bar som tillater hund i uteserveringen",
		"info": "litt info om plass",
		"link": "www.side.no"
	}

];

// Filterfunctions
function filterCafes () {
	// Imports all the checkboxes from filtermenu
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

    // Checks in any of the districts is checked 
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
	// Displays the filtered cafees 			
    displayCafes(filteredCafes);
}

// Function to show the cafees 
function displayCafes(cafes) {
	cafesContainer.innerHTML = ''; // Removes the previous elements 

	cafes.forEach(cafe => {
		// Makes a new div for each cafe 
		const cafeDiv = document.createElement('div');
		const cafeModal = document.createElement('div');
		cafeDiv.className = 'option-box'; // Adds the class "option-box""
		cafeModal.className = "info-modal";
		cafeModal.id = `${cafe.name}`;

		// Adds the content in the new div
		cafeDiv.innerHTML = `
		<a href="#${cafe.name}">
			<img src="assets/imgs/cafees/${cafe.name}/1.jpeg" class="option-box-img">
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
				<p>${cafe.infoShort}</p>
			</div>
		</a>
		`;
		// Creates the modal for the cafe
		cafeModal.innerHTML = `
		<a class="close-modal" href="#"></a>
			<div>
				<div class="modal-content">
					<img src="assets/imgs/cafees/${cafe.name}/1.jpeg" class="modal-img">
					<h2>${cafe.name}</h2>
					<p>${cafe.info}</p>
					<a class="modal-link" href=${cafe.link}>${cafe.link}</>
				</div>
			</div>
		`;

		// Adds in the new div and modal in the Cafe Container
		cafesContainer.appendChild(cafeDiv);
		cafesContainer.appendChild(cafeModal)
	});
}
