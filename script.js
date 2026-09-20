// Data for Tourist Destinations
const touristSpots = [
    {
        id: "ratargul",
        name: "Ratargul Swamp Forest",
        category: "nature",
        image: "images/ratargul.jpeg",
        speciality: "Bangladesh's only recognized freshwater swamp forest, which transforms into a breathtaking water-covered landscape during the monsoon season.",
        bestSeason: "July to October (Monsoon)",
        cityDistance: 26,
        cityTime: "1 hour 15 minutes",
        lat: 25.0064,
        lng: 91.9312,
        hotels: [
            { name: "Hotel Grand Sylhet", phone: "+8801711001122" },
            { name: "Ratargul Eco Resort", phone: "+8801811223344" }
        ]
    },
    {
        id: "jaflong",
        name: "Jaflong",
        category: "water",
        image: "images/jaflong.jpeg",
        speciality: "A scenic area near the Khasi and Jaintia hills with crystal-clear river water, natural stone formations, and beautiful valley views.",
        bestSeason: "October to March (Winter and Autumn)",
        cityDistance: 56,
        cityTime: "1 hour 45 minutes",
        lat: 25.1634,
        lng: 92.0179,
        hotels: [
            { name: "Jaflong Green Park Resort", phone: "+8801733445566" },
            { name: "Hotel Jaflong Inn", phone: "+8801911998877" }
        ]
    },
    {
        id: "bisanakandi",
        name: "Bisanakandi",
        category: "water",
        image: "images/bisanakandi.jpeg",
        speciality: "A stunning mix of hills, rivers, waterfalls, and rocky beds where cold water from the Meghalaya hills flows down in beauty.",
        bestSeason: "June to September (Monsoon)",
        cityDistance: 42,
        cityTime: "1 hour 30 minutes",
        lat: 25.1683,
        lng: 91.8845,
        hotels: [
            { name: "Bisanakandi River View Resort", phone: "+8801755667788" }
        ]
    },
    {
        id: "sadapathar",
        name: "Bholaganj Sada Pathor",
        category: "water",
        image: "images/bholaganj.jpeg",
        speciality: "A vast stretch of white stones and crystal-blue water where the Dhalai River creates a striking natural landscape.",
        bestSeason: "June to November",
        cityDistance: 35,
        cityTime: "1 hour 10 minutes",
        lat: 25.1522,
        lng: 91.7589,
        hotels: [
            { name: "Bholaganj Eco Cottage", phone: "+8801822334455" }
        ]
    },
    {
        id: "sreemangal",
        name: "Sreemangal Tea Gardens",
        category: "nature",
        image: "images/sreemangal.jpeg",
        speciality: "The tea capital of Bangladesh, known for endless green tea gardens, fresh tea experiences, and lemon orchards.",
        bestSeason: "September to March",
        cityDistance: 75,
        cityTime: "2 hours 15 minutes",
        lat: 24.3065,
        lng: 91.7296,
        hotels: [
            { name: "Grand Sultan Tea Resort", phone: "+8801730793555" },
            { name: "Lemon Garden Resort", phone: "+8801712345678" }
        ]
    },
    {
        id: "dargah",
        name: "Hazrat Shahjalal (R.) Mazar",
        category: "historical",
        image: "images/hazrat.jpeg",
        speciality: "A historically and spiritually important landmark in Sylhet, dedicated to the revered Sufi saint Hazrat Shahjalal (R.).",
        bestSeason: "All year round",
        cityDistance: 2,
        cityTime: "10 minutes",
        lat: 24.8998,
        lng: 91.8714,
        hotels: [
            { name: "Hotel Star Pacific", phone: "+8801713400400" },
            { name: "Hotel Rose View", phone: "+8801972552200" }
        ]
    },
    {
        id: "lalakhal",
        name: "Lalakhal",
        category: "water",
        image: "images/lalakhal.jpeg",
        speciality: "A beautiful river surrounded by steep hills, white stones, and lush green scenery that looks stunning year-round.",
        bestSeason: "October to March",
        cityDistance: 50,
        cityTime: "1 hour 35 minutes",
        lat: 25.1318,
        lng: 92.1512,
        hotels: [
            { name: "Hotel Daruchini", phone: "+8801799886655" },
            { name: "Sylhet View Resort", phone: "+8801888776655" }
        ]
    },
    {
        id: "lawachhara",
        name: "Lawachhara National Park",
        category: "nature",
        image: "images/lawachhara.jpeg",
        speciality: "Famous for forest trails, wildlife, nature photography, and breathtaking green landscapes.",
        bestSeason: "November to March",
        cityDistance: 32,
        cityTime: "1 hour 05 minutes",
        lat: 24.9785,
        lng: 91.9491,
        hotels: [
            { name: "Green Valley Resort", phone: "+8801712233445" }
        ]
    },
    {
        id: "madhabkunda",
        name: "Madhabkunda Waterfall",
        category: "water",
        image: "images/madhabkunda.jpeg",
        speciality: "One of the tallest waterfalls in Bangladesh, surrounded by lush forest and known for its powerful cascades and cool mountain air.",
        bestSeason: "June to October",
        cityDistance: 80,
        cityTime: "2 hours 30 minutes",
        lat: 25.0129,
        lng: 91.8878,
        hotels: [
            { name: "Madhabkunda Green Retreat", phone: "+8801712239988" },
            { name: "Hill View Stay", phone: "+8801814455667" }
        ]
    },
    {
        id: "tanguarhaor",
        name: "Tanguar Haor",
        category: "nature",
        image: "images/tanguar haor.jpeg",
        speciality: "A globally recognized haor ecosystem with seasonal wetlands, birds, and an extraordinary landscape that changes beautifully with the season.",
        bestSeason: "November to February",
        cityDistance: 120,
        cityTime: "3 hours 45 minutes",
        lat: 25.0586,
        lng: 90.8987,
        hotels: [
            { name: "Haor View Eco Lodge", phone: "+8801716677889" },
            { name: "Tanguar Stay Inn", phone: "+8801810099887" }
        ]
    },
    {
        id: "tamabil",
        name: "Tamabil",
        category: "historical",
        image: "images/tamabil.jpeg",
        speciality: "A popular border-area destination where travelers enjoy scenic hills and the atmosphere near the Bangladesh-India border.",
        bestSeason: "October to February",
        cityDistance: 60,
        cityTime: "2 hours",
        lat: 25.1945,
        lng: 92.1587,
        hotels: [
            { name: "Hotel Meghla View", phone: "+8801812349876" }
        ]
    },
    {
        id: "uttmachhora",
        name: "Uttmachhora",
        category: "nature",
        image: "images/uttmachhora.jpeg",
        speciality: "A scenic and relaxing destination known for green countryside, panoramic mountain views, and tranquil walking places near Sylhet.",
        bestSeason: "November to March",
        cityDistance: 18,
        cityTime: "40 minutes",
        lat: 24.8858,
        lng: 91.8544,
        hotels: [
            { name: "Uttmachhora Hill View Resort", phone: "+8801717788999" },
            { name: "Hotel Green Valley", phone: "+8801819900112" }
        ]
    }
];

// Fill the structured details used by the destination guide from the existing spot data.
touristSpots.forEach(spot => {
    spot.location = spot.location || `${spot.cityDistance} km from Sylhet city center, Sylhet`;
    spot.about = spot.speciality;
    spot.estimatedCost = spot.estimatedCost || `৳${Math.max(500, spot.cityDistance * 25)} - ৳${Math.max(1200, spot.cityDistance * 45)} per person`;
    spot.howToGetThere = spot.howToGetThere || `Travel from Sylhet city by road. The journey takes about ${spot.cityTime}. Local CNGs, cars, and microbuses are commonly available.`;
    spot.visitingTime = spot.visitingTime || "Open during daylight hours; arrive early for the best views.";
    spot.stay = spot.stay || spot.hotels.map(hotel => hotel.name).join(", ");
    spot.gallery = spot.gallery || [spot.image];
});

// App State
let userLocation = null;
let savedItinerary = JSON.parse(localStorage.getItem('sylhet_itinerary') || '[]');
let currentMap = null;

// DOM Elements
const spotsGrid = document.getElementById('spotsGrid');
const searchInput = document.getElementById('searchInput');
const calcDestination = document.getElementById('calcDestination');
const mapSpotSelect = document.getElementById('mapSpotSelect');
const googleMapFrame = document.getElementById('googleMapFrame');
const openMapLink = document.getElementById('openMapLink');
const spotModal = document.getElementById('spotModal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModalBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const itineraryBtn = document.getElementById('itineraryBtn');
const itineraryBadge = document.getElementById('itineraryBadge');
const itineraryModal = document.getElementById('itineraryModal');
const closeItineraryBtn = document.getElementById('closeItineraryBtn');
const itineraryList = document.getElementById('itineraryList');
const tripChoices = document.getElementById('tripChoices');
const tripPlan = document.getElementById('tripPlan');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderSpots(touristSpots);
    populateDestinationSelect();
    populateMapSelect();
    updateItineraryBadge();
    renderTripChoices();
    updateBudget();
    lucide.createIcons();
    initTheme();
});

// Render Spots Cards
function renderSpots(spots) {
    spotsGrid.innerHTML = '';
    if (spots.length === 0) {
        spotsGrid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500">No results found.</div>`;
        return;
    }

    spots.forEach(spot => {
        const isBookmarked = savedItinerary.includes(spot.id);
        const card = document.createElement('div');
        card.className = "bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col";
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden">
                <img src="${spot.image}" alt="${spot.name}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                <button onclick="toggleBookmark(event, '${spot.id}')" class="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full text-slate-700 dark:text-slate-200 hover:text-emerald-600 transition-colors">
                    <i data-lucide="bookmark" class="w-5 h-5 ${isBookmarked ? 'fill-emerald-600 text-emerald-600' : ''}"></i>
                </button>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">${spot.name}</h3>
                    <p class="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 mb-2">
                        <i data-lucide="clock" class="w-3.5 h-3.5"></i> From city center: ${spot.cityTime} (${spot.cityDistance} km)
                    </p>
                    <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">${spot.speciality}</p>
                </div>
                <button onclick="openModal('${spot.id}')" class="w-full py-2.5 bg-emerald-50 dark:bg-slate-700 hover:bg-emerald-600 hover:text-white text-emerald-700 dark:text-emerald-300 font-medium rounded-xl transition-all duration-200 flex items-center justify-center space-x-1">
                    <span>View details</span>
                    <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </button>
            </div>
        `;
        spotsGrid.appendChild(card);
    });
    lucide.createIcons();
}

// Populate Select Options for Calculator
function populateDestinationSelect() {
    touristSpots.forEach(spot => {
        const option = document.createElement('option');
        option.value = spot.id;
        option.textContent = spot.name;
        calcDestination.appendChild(option);
    });
}

function populateMapSelect() {
    touristSpots.forEach(spot => {
        const option = document.createElement('option');
        option.value = spot.id;
        option.textContent = spot.name;
        mapSpotSelect.appendChild(option);
    });

    mapSpotSelect.addEventListener('change', (event) => {
        const selected = touristSpots.find(spot => spot.id === event.target.value);
        if (!selected) {
            googleMapFrame.src = 'https://www.google.com/maps?q=Sylhet%20Bangladesh&z=11&output=embed';
            openMapLink.href = 'https://maps.google.com/?q=Sylhet%20Bangladesh';
            return;
        }

        const mapURL = `https://www.google.com/maps?q=${selected.lat},${selected.lng}&z=13&output=embed`;
        googleMapFrame.src = mapURL;
        openMapLink.href = `https://maps.google.com/?q=${selected.lat},${selected.lng}`;
    });
}

// Open Spot Details Modal
function openModal(spotId) {
    const spot = touristSpots.find(s => s.id === spotId);
    if (!spot) return;

    modalContent.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-2">
                ${spot.gallery.map(image => `<img src="${image}" alt="${spot.name}" class="w-full h-40 object-cover rounded-xl">`).join('')}
            </div>
            <h2 class="text-2xl font-bold">${spot.name}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <span class="font-semibold block text-slate-500 dark:text-slate-400">Location:</span>
                    <span>${spot.location}</span>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <span class="font-semibold block text-slate-500 dark:text-slate-400">Best time to visit:</span>
                    <span>${spot.bestSeason}</span>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <span class="font-semibold block text-slate-500 dark:text-slate-400">Visiting time:</span>
                    <span>${spot.visitingTime}</span>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <span class="font-semibold block text-slate-500 dark:text-slate-400">Estimated cost:</span>
                    <span>${spot.estimatedCost}</span>
                </div>
            </div>
            <div>
                <h4 class="font-bold text-md mb-1">About:</h4>
                <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">${spot.about}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div class="p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <h4 class="font-bold mb-1">How to get there</h4>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${spot.howToGetThere}</p>
                </div>
                <div class="p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <h4 class="font-bold mb-1">Where to stay</h4>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${spot.stay}</p>
                </div>
            </div>
            <div>
                <h4 class="font-bold text-md mb-2">Nearby hotels & contacts:</h4>
                <div class="space-y-2">
                    ${spot.hotels.map(h => `
                        <div class="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                            <span class="font-medium text-sm">${h.name}</span>
                            <a href="tel:${h.phone}" class="px-3 py-1 bg-emerald-600 text-white text-xs rounded-lg flex items-center space-x-1 hover:bg-emerald-700">
                                <i data-lucide="phone" class="w-3 h-3"></i>
                                <span>${h.phone}</span>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div>
                <h4 class="font-bold text-md mb-2">Map location:</h4>
                <div id="modalMap" class="w-full h-48 rounded-xl border border-slate-200 dark:border-slate-700"></div>
            </div>
        </div>
    `;

    spotModal.classList.remove('hidden');
    lucide.createIcons();

    const googleEmbed = `https://www.google.com/maps?q=${spot.lat},${spot.lng}&z=13&output=embed`;
    const modalMapContainer = document.getElementById('modalMap');
    if (modalMapContainer) {
        modalMapContainer.innerHTML = `<iframe class="w-full h-full rounded-xl border-0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="${googleEmbed}"></iframe>`;
    }
}

closeModalBtn.addEventListener('click', () => spotModal.classList.add('hidden'));

// Category & Search Filters
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.getAttribute('data-cat');
        const filtered = cat === 'all' ? touristSpots : touristSpots.filter(s => s.category === cat);
        renderSpots(filtered);
    });
});

searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = touristSpots.filter(s => 
        s.name.toLowerCase().includes(val) || 
        s.speciality.toLowerCase().includes(val)
    );
    renderSpots(filtered);
});

// Haversine Distance Calculation Formula
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Geolocation Handling
document.getElementById('getGeoBtn').addEventListener('click', () => {
    const geoText = document.getElementById('geoBtnText');
    if (navigator.geolocation) {
        geoText.textContent = "Getting your location...";
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
                geoText.textContent = "GPS location added!";
            },
            () => {
                alert("Unable to get GPS location. Sylhet city center has been selected by default.");
                userLocation = { lat: 24.8949, lng: 91.8687 }; // Sylhet City center
                geoText.textContent = "Sylhet city (default)";
            }
        );
    }
});

// Distance Calc Button
document.getElementById('calculateDistanceBtn').addEventListener('click', () => {
    const destId = calcDestination.value;
    if (!destId) {
        alert("Please select a destination first!");
        return;
    }
    const spot = touristSpots.find(s => s.id === destId);
    const startLoc = userLocation || { lat: 24.8949, lng: 91.8687 }; // Fallback Sylhet City
    
    const dist = calculateHaversineDistance(startLoc.lat, startLoc.lng, spot.lat, spot.lng);
    const estimatedHours = (dist / 35).toFixed(1); // avg 35 km/h driving speed

    document.getElementById('resDistance').textContent = `${dist.toFixed(1)} km`;
    document.getElementById('resTime').textContent = `About ${Math.round(estimatedHours * 60)} minutes`;
    document.getElementById('calcResult').classList.remove('hidden');
});

// Bookmark / Itinerary System
function toggleBookmark(e, spotId) {
    e.stopPropagation();
    if (savedItinerary.includes(spotId)) {
        savedItinerary = savedItinerary.filter(id => id !== spotId);
    } else {
        savedItinerary.push(spotId);
    }
    localStorage.setItem('sylhet_itinerary', JSON.stringify(savedItinerary));
    updateItineraryBadge();
    renderTripChoices();
    renderSpots(touristSpots);
}

function updateItineraryBadge() {
    itineraryBadge.textContent = savedItinerary.length;
    if (savedItinerary.length > 0) {
        itineraryBadge.classList.remove('hidden');
    } else {
        itineraryBadge.classList.add('hidden');
    }
}

itineraryBtn.addEventListener('click', () => {
    itineraryList.innerHTML = '';
    if (savedItinerary.length === 0) {
        itineraryList.innerHTML = `<p class="text-center text-slate-500 py-4">No places saved yet.</p>`;
    } else {
        savedItinerary.forEach(id => {
            const spot = touristSpots.find(s => s.id === id);
            const item = document.createElement('div');
            item.className = "flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl";
            item.innerHTML = `
                <span class="font-medium text-sm">${spot.name}</span>
                <button onclick="toggleBookmark(event, '${spot.id}')" class="text-red-500 hover:text-red-700 text-xs font-semibold">
                    Remove
                </button>
            `;
            itineraryList.appendChild(item);
        });
    }
    itineraryModal.classList.remove('hidden');
});

closeItineraryBtn.addEventListener('click', () => itineraryModal.classList.add('hidden'));

function renderTripChoices() {
    tripChoices.innerHTML = touristSpots.map(spot => `
        <label class="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 p-3 text-sm cursor-pointer hover:border-emerald-400 transition-colors">
            <input type="checkbox" value="${spot.id}" ${savedItinerary.includes(spot.id) ? 'checked' : ''} class="trip-choice accent-emerald-600 w-4 h-4">
            <span>${spot.name}</span>
        </label>
    `).join('');
}

document.getElementById('buildTripBtn').addEventListener('click', () => {
    const selectedIds = [...document.querySelectorAll('.trip-choice:checked')].map(input => input.value);
    if (selectedIds.length === 0) {
        tripPlan.innerHTML = `<p class="text-center text-sm text-slate-500 dark:text-slate-400">Choose at least one destination to build your trip.</p>`;
        return;
    }

    tripPlan.innerHTML = selectedIds.reduce((markup, id, index) => {
        const spot = touristSpots.find(item => item.id === id);
        const day = Math.floor(index / 2) + 1;
        const dayItems = selectedIds.slice(Math.floor(index / 2) * 2, Math.floor(index / 2) * 2 + 2);
        if (index % 2 !== 0) return markup;
        return `${markup}<div class="rounded-xl bg-emerald-50 dark:bg-slate-900/70 p-4"><p class="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Day ${day}</p><p class="mt-1 font-semibold">${dayItems.map(itemId => touristSpots.find(item => item.id === itemId).name).join(' → ')}</p></div>`;
    }, '');
});

function updateBudget() {
    const people = Math.max(1, Number(document.getElementById('budgetPeople').value) || 1);
    const fields = ['budgetTransport', 'budgetFood', 'budgetHotel', 'budgetOther'];
    const total = fields.reduce((sum, id) => sum + (Number(document.getElementById(id).value) || 0), 0);
    document.getElementById('budgetTotal').textContent = `৳${total.toLocaleString('en-IN')}`;
    document.getElementById('budgetPerPerson').textContent = `৳${Math.round(total / people).toLocaleString('en-IN')} per person`;
}

document.querySelectorAll('.budget-input').forEach(input => input.addEventListener('input', updateBudget));

// Theme Toggle
themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

function initTheme() {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}