let container = document.getElementById('map');
let options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3
};

let map = new kakao.maps.Map(container, options);

let markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

let marker = new kakao.maps.Marker({
  position: markerPosition
});

marker.setMap(map);
