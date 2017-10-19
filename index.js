var url = "https://api.punkapi.com/v2/beers"

var makeRequest = function() {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.addEventListener( "load", function() {
    beers = JSON.parse( this.responseText );
    render(beers)
    console.log(beers);
  })
  request.send()
}

var render = function(beers){
  for (var beer of beers) {
    var select = document.getElementById('list');
    var option = document.createElement('option');
    option.innerText = beer.name;
    select.appendChild(option);
    var dropDown = document.querySelector("select");
    dropDown.addEventListener("change", handleSelectChange);
  }
}

var handleSelectChange = function(event) {
  var beer = beers[event.target.selectedIndex];
  var dropDown = document.querySelector("select");
  updateBeerDetails(beer);


}

var updateBeerDetails = function(beer) {
  var name = document.getElementById("name");
  var tagline = document.getElementById("tagline");
  var abv = document.getElementById("abv");
  var img = document.getElementById("img")
  var image = document.createElement("img")
  img.innerHTML = "";
  name.innerText = "Name: " + beer.name;
  tagline.innerText = "Tagline: " + beer.tagline;
  abv.innerText = "Capital: " + beer.abv;
  image.src = beer.image_url;
  img.appendChild(image);
}



// var handleSelectChange = function(event) {
//   var country = countries[event.target.selectedIndex];
//   var dropDown = document.querySelector("select");
//
//
//   // setDefinitionText("#name", country.name);
//   // setDefinitionText("#pop", country.population);
//   // setDefinitionText("#capital", country.capital);
//
//   var jsonString = JSON.stringify(country);
//   localStorage.setItem("country", jsonString);
//   updateCountryDetails(country);
// }
//
// var dropDown = document.querySelector("select");
// dropDown.addEventListener("change", handleSelectChange);

// var displayBeer = function (beer) {
//   var div = document.querySelector('#beer');
//   div.innerHTML = "";
//   var nameHeading = document.createElement("h1");
//   nameHeading.innerText = beer.name;
//   var abvP = document.createElement("p");
//   abvP.innerText = "The abv is " + beer.abv
//   var img = document.createElement("img")
//   img.src = beer.image_url;
//   div.appendChild(nameHeading);
//   div.appendChild(abvP);
//   div.appendChild(img);
// }

// var handleSelectChange = function(event) {
//   var country = countries[event.target.selectedIndex];
//   var dropDown = document.querySelector("select");
//
//
//   // setDefinitionText("#name", country.name);
//   // setDefinitionText("#pop", country.population);
//   // setDefinitionText("#capital", country.capital);
//
//   var jsonString = JSON.stringify(country);
//   localStorage.setItem("country", jsonString);
//   updateCountryDetails(country);
// }
//
// var dropDown = document.querySelector("select");
// dropDown.addEventListener("change", handleSelectChange);
//
// var app = function(){
//
// }
//
// var updateCountryDetails = function(country) {
//   var name = document.getElementById("name");
//   var pop = document.getElementById("pop");
//   var capital = document.getElementById("capital");
//   name.innerText = "Name: " + country.name;
//   pop.innerText = "Population: " + country.population;
//   capital.innerText = "Capital: " + country.capital;
// }



// request.addEventListener("load", function() {
//   countries = JSON.parse(this.responseText);
//   for (var country of countries) {
//     var select = document.getElementById("list");
//     var option = document.createElement('option');
//     option.innerText = country.name;
//     select.appendChild(option);
//   }

window.addEventListener('load', makeRequest);
