import { database } from './database.js'


/* 
  Responsbility:
  This module should contain a function that converts
  the raw data objects for opening acts into HTML elements 
  with the following structure.
  <article class="acts">
    <header>Opening Acts</header>
    <ol>
      <li class="act">Band name</li>
      <li class="act">Band name</li>
      <li class="act">Band name</li>
    </ol>
  </article>
*/


export const bandsHTMLText = () => {
  let bandHTMLString = `<article class="acts">
  <header>Opening Acts</header><ol>`
  for (const opener of database.openers) {
    bandHTMLString += `<li class="act">${opener.band}</li>`
  }
   bandHTMLString += ` </ol>
   </article>`

   return bandHTMLString

}

