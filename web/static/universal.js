var map = L.map('map').fitWorld();
map.setView(new L.LatLng(47.751569, 1.675063), 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function changeUrl() {
    category = document.getElementById("category").value;
    year = document.getElementById("year").value;
    window.location.href = "/data?category=" + category + "&year=" + year;
}