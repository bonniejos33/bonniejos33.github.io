function initMap() {

    var LatLngList = new Array (new google.maps.LatLng (38.6502574,-121.0627888), // Town Center
                                new google.maps.LatLng (38.6758263,-121.1792867), // Sutter St.
                                new google.maps.LatLng (38.5762059,-121.4825094)); // Midtown

    var bounds = new google.maps.LatLngBounds ();

    var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        zoom: 12,
        panControl: false,
        mapTypeControl: false,
        zoomControl: true
    });

    for (var i = 0; i < LatLngList.length; i++) {

        var marker = new google.maps.Marker({
            map: map,
            position: LatLngList[i],
            title: ''
        });

        bounds.extend (LatLngList[i]);
    }

    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds); 
}
