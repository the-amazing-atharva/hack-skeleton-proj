// function geoFindMe() {
//   const status = document.querySelector("#status");
//   const mapLink = document.querySelector("#map-link");

//   mapLink.href = "";
//   mapLink.textContent = "";

//   function success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     status.textContent = "";
//     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//   }

//   function error() {
//     status.textContent = "Unable to retrieve your location";
//   }

//   if (!navigator.geolocation) {
//     status.textContent = "Geolocation is not supported by your browser";
//   } else {
//     status.textContent = "Locating…";
//     navigator.geolocation.getCurrentPosition(success, error);
//   }
// }

// document.querySelector("#find-me").addEventListener("click", geoFindMe);

// new
//
//
//

function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Use the OpenStreetMap Nominatim API for reverse geocoding
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.display_name) {
          status.textContent = `Location: ${data.display_name}`;
          mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
          mapLink.textContent = `View on Map`;
        } else {
          status.textContent = "Unable to retrieve location details";
        }
      })
      .catch(() => {
        status.textContent = "Error fetching location details";
      });
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
