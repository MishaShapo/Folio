function findAddress(add){
  var address = String(add);
  var request = require('request');
  var APIkey = require('./keys')
  var finalAdd = " ";
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  for (var i = 0, len = address.length; i < len; i++) {
    if(address[i] == ' '){
      url+='+';
    }
    else{
      url += address[i];
    }
  }
  url+="&key=";
  url += APIkey.mapsAPIKey();
  request = require('request');
  request({
      url: url, //URL to hit
      method: 'GET'
  }, function(error, response, body){
      if(error) {
          console.log(error);
      } else {
          var objJSON = eval(JSON.parse(body));
          var addType = objJSON.results[0].types[0];
          if(addType == "street_address"){
            finalAdd = objJSON.results[0].formatted_address;
            console.log(finalAdd);
          }
      }
  });
  return finalAdd;
}

console.log(findAddress("711 West 38th Street"));
