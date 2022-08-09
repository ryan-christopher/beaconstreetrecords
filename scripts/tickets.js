const bands = [
    "The Black Keys", "Run The Jewels", "Vince Staples", 
    "Boston Symphony Orchestra", "Stereo Soul Future", 
	"Isaiah Rashad", "Big Sean",
    "Salvatore Ganacci", "Loud Luxury", "Diplo", "alt-J", 
    "Freddie Gibbs", "The Alchemist", "Action Bronson",
    "A Tribe Called Quest", "RJD2", "Tame Impala", "Thundercat",
    "Jorja Smith", "Masego", "Common", "Amber Mark", "GoldLink", 
    "Kaytranada", "Disclosure", "Flying Lotus", "BJ The Chicago Kid",
    "FKJ", "Smino", "Saba", "Anderson .Paak", "Remi Wolf", "bbno$", 
    "IDK", "Electric Guest", "JID", "Rich Brian", "NIKI", "Arctic Monkeys",
    "Justin Timberlake", "Zack Fox", "JVKE", "Gorillaz", "Kenny Beats",
    "BENEE", "Cautious Clay", "Dua Lipa", "Kota the Friend", "Radiohead",
    "Cordae", "Knxwledge", "Nas", "Tyler, the Creator", "Amine", 
    "Tom Misch", "Madlib", "Glass Animals", "Denzel Curry", "Lamp", 
    "Kali Uchis", "Katori Walker", "The Weeknd", "Jaden", "Kid Cudi",
    "Talking Heads", "H.E.R.", "slowthai", "JPEGMAFIA", "Toro y Moi", 
    "SAINt JHN", "6lack", "HONNE", "Moksi", "ILLENIUM", "ZHU", "Seal", 
    "Jeremih", "Above & Beyond", "Pete Rock", "Big Gigantic", "Bilal", 
    "J. Cole", "Sam Smith", "Charlie Puth", "Jhene Aiko", "Alison Wonderland",
	"Stereo Soul Future"
];

const cities = [];
const venues = [];
const row = "abcdefghijklmnopqrstuvwxyz";

let days = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];

let months = [
    "January","February","March","April","May",
    "June","July","August","September","October",
    "November","December"
];

function randomDate(start, end) {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);
}

$(document).ready(function () {
		var cityData =
		"https://random-data-api.com/api/address/random_address?size=50";
	$.getJSON(cityData, function (data) {
		$.each(data, function (i, item) {
			venues.push(data[i].community + " Theater");
			cities.push(data[i].city + ", " + data[i].state);
            createTicket();
			$("body").addClass("loaded");
		});
	});
});

$(".ticketsection").click(function () {
	createTicket();
});

function createTicket() {
	$("body").removeClass("active");
	setTimeout(() => {
		$(".ticket").each(function () {
			$(this).find(".inner").remove();
			let randBand = Math.floor(Math.random() * bands.length);
			let randCity = Math.floor(Math.random() * cities.length);
			let randVenue = Math.floor(Math.random() * venues.length);
			let randDate = randomDate(new Date(2021, 0, 1), new Date());
			$(this)
				.get(0)
				.style.setProperty(
					"--font1",
					"var(--font" + Math.floor(Math.random() * (7 - 1) + 4) + ")"
				);
			$(this)
				.get(0)
				.style.setProperty(
					"--font2",
					"var(--font" + Math.floor(Math.random() * (7 - 1) + 4) + ")"
				);
			$(this)
				.get(0)
				.style.setProperty(
					"--color1",
					"var(--color" + Math.floor(Math.random() * (7)) + ")"
				);
			$(this)
				.get(0)
				.style.setProperty(
					"--rotate",
					Math.floor(Math.random() * (5 - 1) + 1) * 45 + "deg"
				);
			$(this).append(
				"<div class='inner class" +
					Math.floor(Math.random() * (8 - 1) + 1) +
					" class" +
					Math.floor(Math.random() * (8 - 1) + 7) +
					"'><div><div class='date'><span>" +
					days[randDate.getDay()] +
					"</span><span>" +
					months[randDate.getMonth()] +
					" " +
					randDate.getDate() +
					"</span><span>" +
					Math.floor(Math.random() * (12 - 1) + 1) +
					":00 PM</span></div><div class='band'><strong data-splitting='words'><span>" +
					bands[randBand] +
					"</span></strong></div><div class='location'><strong><span>" +
					venues[randVenue] +
					"</span><span>" +
					cities[randCity] +
					"</span></strong></div><div class='seat'><strong>Section<span>" +
					Math.floor(Math.random() * (40 - 1) + 1) +
					"</span></strong><strong>Row<span>" +
					row[Math.floor(Math.random() * row.length)] +
					"</span></strong><strong>Seat<span>" +
					Math.floor(Math.random() * (40 - 1) + 1) +
					"</span></strong></div><div class='details'><strong><span>$" +
					Math.floor(Math.random() * (20 - 5) + 5) +
					".00</span><span>All Ages</span></strong></div></div></div>"
			);
		});
		Splitting();
		$("span.word").attr("data-splitting", "chars");
		Splitting();
	}, 1000);
	setTimeout(() => {
		$("body").addClass("active");
	}, 1500);
}
