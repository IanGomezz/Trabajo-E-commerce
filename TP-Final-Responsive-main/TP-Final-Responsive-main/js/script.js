function iniciarMap(){
    var coord = {lat:-34.6037135 ,lng: -58.42026};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}