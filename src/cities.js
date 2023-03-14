import {database} from './database.js'
/* 
  Responsbility:
  This module should contain a function that converts
  the raw data objects for cities into HTML elements 
  with the following structure.
  <article class="cities">
    <header>Locations</header>
    <ol>
      <li class="city">City, Country</li>
      <li class="city">City, Country</li>
      <li class="city">City, Country</li>
    </ol>
  </article>
*/

//define and export the function
export const citiesHTMLText = () => {
  //define HTML string with article elem, header class
  let citiesHTMLString = `<article class="cities">
    <header>Locations</header> <ol>`
  //iterate  the list of cities
  for (const city of database.cities) {
    //create an HTML string for each city
    citiesHTMLString += `<li class="city">${city.city}, ${city.country}</li>`
  }
  //close the <article> and <ol>
  citiesHTMLString += `</ol></article>`
  //return HTML string
  return citiesHTMLString
}