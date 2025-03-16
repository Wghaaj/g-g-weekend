//get aside links
const restaurantsAside = document.querySelector('.restaurants');
const venuesAside = document.querySelector('.venues');
const hotelsAside = document.querySelector('.hotels');
const parksAside = document.querySelector('.parks');
const museumsAside = document.querySelector('.museums');

//create categories
const restaurants = places.filter(place => place.type.includes("restaurant"));
const venues = places.filter(place => place.type.includes("venue"));
const hotels = places.filter(place => place.type.includes("hotels"));
const parks = places.filter(place => place.type.includes("park"));
const museums = places.filter(place => place.type.includes("museum"));

//create an array with 1 place from each category 
const chosen = [restaurants, venues, hotels, parks, museums].map(place => place.length > 0 ? place[0] : null)

// Function to render places inside container
function renderPlaces(places) {
    container.innerHTML = ''; 

    places.forEach((place) => {
        const box = document.createElement('div');
        box.classList.add('border');
        box.onclick = function() {
    if (place && place.id) {
        window.location.href = `details.html?id=${place.id}`;
    } else {
        console.error("place or placeId is undefined", place);
    }
};
        

        box.innerHTML = `<img src="${place.image ? place.image : '../images/placeholder.jpg'}" alt="${place.title}">`;

        const title = document.createElement('div');
        title.classList.add("aclonica", "purple", "p-15");
        title.innerHTML = `<p>${place.title}</p>`;

        const location = document.createElement('div');
        location.classList.add('p-15');
        location.innerHTML = `<p>${place.location}</p>`;

        const price = document.createElement('div');
        price.classList.add('p-15');
        price.innerHTML = `<p>${place.price}</p>`;

        const line = document.createElement('hr');
        line.classList.add("line");

        const smallDescription = document.createElement('div');
        smallDescription.classList.add('p-15');
        smallDescription.innerHTML = `<p>${place.smallDescription}</p>`;

        box.append(title, location, price, line, smallDescription);
        container.append(box);
    });
}

// Render the initial chosen places
renderPlaces(chosen);

// Handle restaurant filter click
if (restaurantsAside) {
    restaurantsAside.addEventListener('click', function () {
        renderPlaces(restaurants); 
    });
};

// Handle venue filter click
if (venuesAside) {
    venuesAside.addEventListener('click', function () {
        renderPlaces(venues); 
    });
};

// Handle museum filter click
if (museumsAside) {
    museumsAside.addEventListener('click', function () {
        renderPlaces(museums); 
    });
};

// Handle hotel filter click
if (hotelsAside) {
    hotelsAside.addEventListener('click', function () {
        renderPlaces(hotels); 
    });
};

// Handle hotel filter click
if (parksAside) {
    parksAside.addEventListener('click', function () {
        renderPlaces(parks); 
    });
};

