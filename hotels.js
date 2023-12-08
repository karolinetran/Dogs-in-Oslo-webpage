const hotelsContainer = document.getElementById('hotels-container');
const filterForm = document.getElementById('filter');

//Loads the hotelss on loading the page and add eventListener to the filter
document.addEventListener('DOMContentLoaded', function () {
	displayhotels(hotelsData);
	filterForm.addEventListener('change', filterhotels);

});

// Information about the different hotels
const hotelsData = [
	{
		"name": "ATT KVADRATUREN",
		"location": "Gamle Oslo",
		"infoShort": "Det nylig renoverte leilighetshotellet Att i Kvadraturen ligger i Oslo sentrum.",
		"info": "Det nylig renoverte leilighetshotellet Att i Kvadraturen ligger i Oslo sentrum, og tilbyr 4-stjerners overnatting nær Akershus festning og Oslo sentralstasjon. Dette overnattingsstedet har en restaurant, heis, vakthold hele dagen og gratis WiFi overalt. Leilighetshotellet har familierom.",
		"link": "https://www.attstays.com/kvadraturen"
	},
	{
		"name": "THE HUB",
		"location": "Gamle Oslo",
		"infoShort": "Clarion Hotel® The Hub boasts one of the best locations in Oslo right next to the central station.",
		"info": "Clarion Hotel® The Hub boasts one of the best locations in Oslo right next to the central station. Guests can enjoy stunning views from the Norda restaurant and Calmeyers Hage bar on the 13th floor, and a great urban vibe at the Hub Bar on the 1st floor.",
		"link": "https://www.strawberryhotels.com/hotels/norway/oslo/clarion-hotel-the-hub/"
	},
	{
		"name": "COMFORT HOTEL GRAND CENTRAL",
		"location": "Gamle Oslo",
		"infoShort": "The Comfort Hotel Grand Central is Oslo's most centrally located hotel.",
		"info": "The Comfort Hotel Grand Central is Oslo's most centrally located hotel. It offers great value for money, and it's easily accessible, trendy and located right in the centre of the newly-opened Østbanehallen. With fabulous modern design to boot, you'll get a hotel experience worth remembering.",
		"link": "https://www.strawberryhotels.com/hotels/norway/oslo/comfort-hotel-grand-central/"
	},
	{
		"name": "SCANDIC BYPORTEN",
		"location": "Gamle Oslo",
		"infoShort": "Scandic Byporten ligger i sentrum av Oslo, bare 1 minutts gange fra Karl Johans Gate og Oslo Spectrum arena.",
		"info": "Scandic Byporten ligger i sentrum av Oslo, bare 1 minutts gange fra Karl Johans Gate og Oslo Spectrum arena. Her tilbys rom med innredning i skandinavisk stil og gratis WiFi. Alle rommene på Scandic Hotel Byporten har tregulv, flatskjerm-TV og kaffe- og tekoker. Den luftige og moderne lobbybaren serverer kaffe og forfriskende drikke, mens enkle småretter, snacks og dagligvarer er tilgjengelig i den døgnåpne butikken på hotellet. Oslo Sentralstasjon og Flytoget ligger like ved hotellet. Overnattingsstedet ligger i samme bygning som Byporten kjøpesenter, 6 minutters gange fra Operahuset.",
		"link": "https://www.scandichotels.com/hotels/norway/oslo/scandic-byporten"
	},
	{
		"name": "THON HOTEL STORO",
		"location": "Sagene",
		"infoShort": "Our newest and most innovative hotel in Oslo has large and comfortable rooms.",
		"info": "Our newest and most innovative hotel in Oslo has large and comfortable rooms, amazing conference spaces, a restaurant, bar and gym. With its central location in the Storo neighbourhood, shopping, cinemas, cafés and scenic sights are just outside the hotel door.",
		"link": "https://www.thonhotels.com/our-hotels/norway/oslo/thon-hotel-storo/"
	},
	{
		"name": "RADISSON BLUE ALNA",
		"location": "Alna",
		"infoShort": "Conveniently situated in the Alna part of Oslo, this property puts you close to attractions and interesting dining options.",
		"info": "Dette hotellet tilbyr rom med klimaanlegg, flatskjerm-TV og gratis WiFi. Hotellet ligger 8 minutters gange fra Trosterud T-banestasjon. Oslo sentrum er 12 minutters kjøring unna. Alle rommene på Radisson Blu Hotel Oslo Alna har skrivebord og kaffe- og tekoker. Du får eget bad med dusj og hårføner. Noen av rommene har tøfler og badekåpe.",
		"link": "https://www.radissonhotels.com/en-us/hotels/radisson-blu-conference-oslo-alna"
	},
];

// Filterfunctions
function filterhotels() {
		// Imports all the checkboxes from filtermenu
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

	// Filters the hotels based on loation
	const filteredhotels = hotelsData.filter(hotel =>
	(
		(
			(bydelAlnaChecked && hotel.location === 'Alna') ||
			(bydelBjerkeChecked && hotel.location === 'Bjerke') ||
			(bydelFrognerChecked && hotel.location === 'Frogner') ||
			(bydelGamleOsloChecked && hotel.location === 'Gamle Oslo') ||
			(bydelGrorudChecked && hotel.location === 'Grorud') ||
			(bydelGrünerløkkaChecked && hotel.location === 'Grünerløkka') ||
			(bydelNordreAkerChecked && hotel.location === 'Nordre Aker') ||
			(bydelNordstrandChecked && hotel.location === 'Nordstrand') ||
			(bydelSageneChecked && hotel.location === 'Sagene') ||
			(bydelStHanshaugenChecked && hotel.location === 'St. Hanshaugen') ||
			(bydelStovnerChecked && hotel.location === 'Stovner') ||
			(bydelSondreNordstrandChecked && hotel.location === 'Søndre Nordstrand') ||
			(bydelUllernChecked && hotel.location === 'Ullern') ||
			(bydelVestreAkerChecked && hotel.location === 'Vestre Aker') ||
			(bydelOstensjoChecked && hotel.location === 'Østensjø')
		)
		||
		!anyDistrictChecked
	)
	);
	// Displays the filtered hotels	
	displayhotels(filteredhotels);
}

// Function to show the hotels
function displayhotels(hotels) {
	hotelsContainer.innerHTML = ''; // Removes the previous elements 

	hotels.forEach(hotel => {
		// Makes a new div for each hotel
		const hotelDiv = document.createElement('div');
		const hotelModal = document.createElement('div');
		hotelDiv.className = 'option-box'; // Adds the class "option-box""
		hotelModal.className = "info-modal";
		hotelModal.id = `${hotel.name}`;

		// Adds the content in the new div
		hotelDiv.innerHTML = `
		<a href="#${hotel.name}">
			<img src="assets/imgs/hotels/${hotel.name}/1.jpeg" class="option-box-img">
			<div class="option-box-info-container">
				<div class="title-location-container">
					<h2>${hotel.name}</h2>
					<div class="location-with-icon">
						<i class="fa-solid fa-map-location-dot"></i>
						<p class="location">${hotel.location}</p>
					</div>
				</div>
				<p>${hotel.infoShort}</p>
			</div>
		</a>
		`;
		// Creates the modal for the hotel
		hotelModal.innerHTML = `
		<a class="close-modal" href="#"></a>
			<div>
				<div class="modal-content">
					<img src="assets/imgs/hotels/${hotel.name}/1.jpeg" class="modal-img">
					<h2>${hotel.name}</h2>
					<p>${hotel.info}</p>
					<a class="modal-link" href=${hotel.link}>${hotel.link}</>
				</div>
			</div>
		`;

		// Adds in the new div and modal in the hotelsContainer
		hotelsContainer.appendChild(hotelDiv);
		hotelsContainer.appendChild(hotelModal)
	});
}