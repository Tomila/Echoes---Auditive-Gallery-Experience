
var testData = {
  "type": "FeatureCollection",
  "features": [
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          24.938859,
          60.180100
        ]
      },
      "type": "Feature",
      "properties": {
        "id": "1",
        "name": "Testi1",
        "address": "",
        "zoom": "11.0",
        "icon": "https:testikappale.com/testi.png",
        "popup": "<video width=\"320\" height=\"240\" controls autoplay>\n" +
            "      <source src=\"http://users.metropolia.fi/~otsosaa/echoes/media/Toolonlahdensilta_video.mp4\" type=\"video/mp4\">\n" +
            "    </video>",
        "link": "",
        "lon": 24.938859,
        "lat": 60.180100,
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          24.982952,
          60.216855,
        ]
      },
      "type": "Feature",
      "properties": {
        "id": "2",
        "name": "Testi2",
        "address": "",
        "zoom": "11.0",
        "icon": "https:testikappale.com/testi.png",
        "popup": "<video width=\"320\" height=\"240\" controls autoplay>\n" +
            "      <source src=\"http://users.metropolia.fi/~otsosaa/echoes/media/Vantaankoski_video.mp4\" type=\"video/mp4\">\n" +
            "    </video>",
        "link": "",
        "lon": 24.982952,
        "lat": 60.216855,
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          25.156348228192652,
          60.20163719717638,
        ]
      },
      "type": "Feature",
      "properties": {
        "id": "3",
        "name": "Testi3",
        "address": "",
        "zoom": "11.0",
        "icon": "https:testikappale.com/testi.png",
        "popup": "<video width=\"320\" height=\"240\" controls autoplay>\n" +
            "      <source src=\"http://users.metropolia.fi/~otsosaa/echoes/media/Aurinkolahti_Video.mp4\" type=\"video/mp4\">\n" +
            "    </video>",
        "link": "",
        "lon": 25.156348228192652,
        "lat": 60.20163719717638,
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          24.952277183401747,
          60.21986223471103,
        ]
      },
      "type": "Feature",
      "properties": {
        "id": "4",
        "name": "Testi4",
        "address": "",
        "zoom": "11.0",
        "icon": "https:testikappale.com/testi.png",
        "popup": "<video width=\"320\" height=\"240\" controls autoplay>\n" +
            "      <source src=\"http://users.metropolia.fi/~otsosaa/echoes/media/Taivaskallio_video.mp4\" type=\"video/mp4\">\n" +
            "    </video>",
        "link": "",
        "lon": 24.952277183401747,
        "lat": 60.21986223471103,
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [
          24.68294906511437,
          60.15073347273045,
        ]
      },
      "type": "Feature",
      "properties": {
        "id": "5",
        "name": "Testi5",
        "address": "",
        "zoom": "11.0",
        "icon": "https:testikappale.com/testi.png",
        "popup": "<video width=\"320\" height=\"240\" controls autoplay>\n" +
            "      <source src=\"http://users.metropolia.fi/~otsosaa/echoes/media/Hannusjarvi_Video.mp4\" type=\"video/mp4\">\n" +
            "    </video>",
        "link": "",
        "lon": 24.68294906511437,
        "lat": 60.15073347273045,
      }
    }
  ]
}

var layer = new L.StamenTileLayer("toner");
var map = new L.Map("map", {
  center: new L.LatLng(60.1733244, 24.9410248),
  zoom: 11
});
map.addLayer(layer);
// grab the processed & scrambled GeoJSON through an ajax call
var geojsonFeature = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "/data/points.geojson",
    'dataType': "json",
    'success': function (data) {
      json = data;
    }
  });
  return json;
})();

var geojsonMarkerOptions = {
  radius: 10,
  fillColor: "rgb(255,0,0)",
  color: "#fff",
  weight: 2,
  opacity: 1,
  fillOpacity: 1
};

L.geoJson(testData, {
  pointToLayer: function (feature, latlng) {
    var popupOptions = {maxWidth: 500, maxHeight: 500};
    var popupContent = feature.properties.popup;
    return L.circleMarker(latlng, geojsonMarkerOptions).bindPopup(popupContent,popupOptions);
  }
}).addTo(map);

function onEachFeature(feature, layer) {
  layer.on('click', function (e) {
    alert(e.target.feature.properties.popupContent);
    //or
    alert(e.target.feature.properties.id);
  });
}

