import {database} from "./database.js"

export const tourDates = () => {
    let tourDatesHTML = `<article class="acts"><h1>TourDates</h1><ol>`
     for (const tourDate of database.tourDates) {
        tourDatesHTML += `<li>${tourDate.date}</li>`

     }
     tourDatesHTML += "</ol></article>"
     return tourDatesHTML
}