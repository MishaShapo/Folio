//method to return the text within an image
//uses the Microsoft's OCR
function findImage(URL){
  var request = require('request');
  var url = String(URL);
  var key = require("./keys")
  //Lets configure and request
  request({
      url: 'https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk&detectOrientation =true', //URL to hit
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': key.OCRkey()
        },
        json: {
          'url': url
        }
      }, function(error, response, body){
        if(error) {
          console.log(error);
          return " ";
        } else {
          console.log(response.statusCode, body);
          return JSON.parse(body);
        }
      });
}
