(function (){

  window.navigator.geolocation.getCurrentPosition(
    function successfunc( position ) {
      // 地図を作成する
      var mymap = L.map('map');
      // タイルレイヤーを作成し、地図にセットする
      L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
      }).addTo(mymap);
      // 地図の中心座標とズームレベルを設定する
      mymap.setView([position.coords.latitude, position.coords.longitude], 16);
      // マーカーを作成する
      var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
      // クリックした際にポップアップメッセージを表示する
      marker.bindPopup("現在地");
    }
  );

  // 地図を作成する
  var dmymap = L.map('dmap');
  // タイルレイヤーを作成し、地図にセットする
  L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
  }).addTo(dmymap);

  setInterval(function (){
    window.navigator.geolocation.getCurrentPosition(
      function successfunc( position ) {
        // 地図の中心座標とズームレベルを設定する
        dmymap.setView([position.coords.latitude, position.coords.longitude], 16);
        // マーカーを作成する
        var dmarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(dmymap);
        // クリックした際にポップアップメッセージを表示する
        dmarker.bindPopup("現在地");

        // 緯度
        $('#latitude').val(position.coords.latitude);
        // 経度
        $('#longitude').val(position.coords.longitude);
      }
    );
  }, 1000);

  window.navigator.geolocation.getCurrentPosition(
    function successfunc( position ) {
      var gmap = new google.maps.Map(document.getElementById('gmap'), {
        center: { // 地図の中心を指定
          lat: position.coords.latitude, // 緯度
          lng: position.coords.longitude // 経度
        },
        zoom: 16
      });
    }
  );

  window.ondevicemotion = function(event){
    // 加速度 + 重力
    var x1 = event.accelerationIncludingGravity.x;
    var y1 = event.accelerationIncludingGravity.y;
    var z1 = event.accelerationIncludingGravity.z;

    // 加速度
    var x2 = event.acceleration.x;
    var y2 = event.acceleration.y;
    var z2 = event.acceleration.z;

    $('#x1').val(x1);
    $('#y1').val(y1);
    $('#z1').val(z1);
    $('#x2').val(x2);
    $('#y2').val(y2);
    $('#z2').val(z2);

  };

  window.ondeviceorientation = function(event){
    // コンパス
    var compassHeading = event.webkitCompassHeading;
    var compassAccuracy = event.webkitCompassAccuracy;
    $('#compassH').val(compassHeading);
    $('#compassA').val(compassAccuracy);

    if(compassHeading>348.75 || compassHeading<11.25){
      var compassWord = '北';
    } else {
    if(compassHeading<33.75) {
      var compassWord = '北北東';
    } else {
    if(compassHeading<56.25) {
      var compassWord = '北東';
    } else {
    if(compassHeading<78.75) {
      var compassWord = '東北東';
    } else {
    if(compassHeading<101.25) {
      var compassWord = '東';
    } else {
    if(compassHeading<123.75) {
      var compassWord = '東南東';
    } else {
    if(compassHeading<146.25) {
      var compassWord = '南東';
    } else {
    if(compassHeading<168.75) {
      var compassWord = '南南東';
    } else {
    if(compassHeading<191.25) {
      var compassWord = '南';
    } else {
    if(compassHeading<213.75) {
      var compassWord = '南南西';
    } else {
    if(compassHeading<236.25) {
      var compassWord = '南西';
    } else {
    if(compassHeading<258.75) {
      var compassWord = '西南西';
    } else {
    if(compassHeading<281.25) {
      var compassWord = '西';
    } else {
    if(compassHeading<303.75) {
      var compassWord = '西北西';
    } else {
    if(compassHeading<326.25) {
      var compassWord = '北西';
    } else {
    if(compassHeading<348.75) {
      var compassWord = '北北西';
    } } } } } } } } } } } } } } } }
    $('#compassW').val(compassWord);

  };

}) ();
