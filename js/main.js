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
        window.location.href = `/details.html?id=${place.id}`;
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

//get id from the url
const urlParams = new URLSearchParams(window.location.search);
const placeId = urlParams.get('id');
//new coment to re-upload file
const place = places.find(p => p.id === placeId);

const wrapper = document.getElementById('wrapper');

if(place) {
  const title = document.createElement('div');
  title.classList.add('title');

  title.innerHTML = `<img src = "${place.image ? place.image: '../images/placeholder2.jpg'}" alt = "${place.title}">`

  const titleDetails = document.createElement('div');
  titleDetails.classList.add('title__details');

  const heading = document.createElement('h3');
  heading.classList.add('aclonica');
  heading.classList.add('purple');
  heading.innerHTML = `<h3>${place.title}</h3>`;

  const flex = document.createElement('div');
  flex.classList.add('d-flex');
  flex.classList.add('title-flex');

  const price = document.createElement('p');
  price.innerHTML = place.price;
  flex.appendChild(price);

  const seperator = document.createElement('div');
  seperator.classList.add('seperator');
  flex.appendChild(seperator);

  const location = document.createElement('p');
  location.innerHTML = place.location;
  flex.appendChild(location);
  
  //title details
  titleDetails.append(heading, flex);

  //description
  const description = document.createElement('div');
  description.classList.add('pt-30');
  description.innerHTML = `<p>${place.description}</p>`;

  //map
  const map = document.createElement('div');
  map.classList.add('map');
  map.classList.add('pt-30');

  const googleMap = document.createElement('h3');
  googleMap.classList.add('aclonica');
  googleMap.classList.add('purple');
  googleMap.innerHTML = `How to get there?`;
  map.appendChild(googleMap);
  const address = document.createElement('div');
  address.innerHTML = place.address;
  map.appendChild(address);

  const container = document.createElement('div');
  container.classList.add('details-container');

  container.appendChild(description);
  container.appendChild(map);

  const tips = document.createElement('div');
  tips.classList.add('tips');
  tips.innerHTML = `<h2 class = "aclonica" >Travel Tips: </h2>`;

  const tip1Title = document.createElement('h3');
  tip1Title.classList.add('purple');
  tip1Title.innerHTML = place.tips.tip1title;

  const tip1 = document.createElement('p');
  tip1.innerHTML = place.tips.tip1;

  const tip2Title = document.createElement('h3');
  tip2Title.classList.add('purple');
  tip2Title.innerHTML = place.tips.tip2title;

  const tip2 = document.createElement('p');
  tip2.innerHTML = place.tips.tip2;

  const tip3Title = document.createElement('h3');
  tip3Title.classList.add('purple');
  tip3Title.innerHTML = place.tips.tip3title;

  const tip3 = document.createElement('p');
  tip3.innerHTML = place.tips.tip3;

  const details = document.createElement('p');
  details.classList.add('details')
  details.innerHTML = place.details

  tips.appendChild(tip1Title)
  tips.appendChild(tip1);
  tips.appendChild(tip2Title);
  tips.appendChild(tip2);
  tips.appendChild(tip3Title);
  tips.appendChild(tip3);
  tips.appendChild(details);

  const contact = document.createElement('div');
  contact.classList.add('contact-details')
  contact.innerHTML = `<h2 class = "aclonica" >Contact Details: </h2>`

  // const tel = document.createElement('a');
  // tel.href = `tel:${place.phone}`;
  // tel.textContent = place.phone;

  // const email = document.createElement('a');
  // email.href = `mailto:${place.email}`;
  // email.textContent = place.email;

  const tel = document.createElement('p');
  tel.innerHTML = `Phone: <a href = "tel:${place.phone}">${place.phone}</a>`;

  const email = document.createElement('p');
  email.innerHTML = `Email: <a href = "mailto:${place.email}">${place.email}</a>`;

  contact.appendChild(tel);
  contact.appendChild(email);

  title.append(titleDetails);
  wrapper.append(title, container, tips, contact)

} else {
    const found = document.createElement('div')
    found.innerHTML = `<p>Page Not Found</p>`

    wrapper.append(found)
}
