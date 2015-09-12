function initMap() {

    var LatLngList = new Array (new google.maps.LatLng (38.6502574,-121.0627888),
                                new google.maps.LatLng (38.729082,-120.796454));

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
