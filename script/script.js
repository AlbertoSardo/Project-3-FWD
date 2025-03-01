function initMap() {
      const location = { lat: 46.0056, lng: 8.9526 }; 
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
        mapTypeId: 'hybrid'
      });

      const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Lugano, Switzerland"
      });

      const infoWindow = new google.maps.InfoWindow({
        content: "<h3>Lugano, Switzerland</h3><p>A beautiful city in the Swiss canton of Ticino.</p>"
      });
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map,
        center: location,
        radius: 3000
      });
    }
