var map;
var mapLat = 60.1733244;
var mapLng = 24.9410248;
var mapDefaultZoom = 10;



jQuery(document).ready(function(){
    $("#my-comment").EasyComment();
});


/* Kaynnista kartta */ function initialize_map() {
    map = new ol.Map({
        target: "map",
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([mapLng, mapLat]),
            zoom: mapDefaultZoom
        })
    });
}

/* Lisää karttaan merkkeja */  function add_map_point(lat, lng) {
    var vectorLayer = new ol.layer.Vector({
        source:new ol.source.Vector({
            features: [new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
            })]
        }),

        style: new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.5, 0.5],
                anchorXUnits: "fraction",
                anchorYUnits: "fraction",
                src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"

            })
        })
    });

    map.addLayer(vectorLayer);

    map.on("click", function(evt) {
        var coord = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
        var lon = coord[24.9410248];
        var lat = coord[60.1733244];
        alert(lon);
        alert(lat);

        if (!confirm(msg)){
            displayAlerts = false;
        }
    });



}
