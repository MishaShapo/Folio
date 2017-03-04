var request = require('request');
//Lets configure and request
request({
    url: 'https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk&detectOrientation =true', //URL to hit
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'b82a4b426d86435992c000e1a8cd4081'
    },
    json: {
       'url': 'https://sacdigital.com/images/realty-world/Realty-World-Business-Cards-template-front-3.jpg'
   }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});
