// COMPONENT 1: DECLARE VARIABLES FOR API URL INFO
// https://www.theaudiodb.com/api/v1/json/1/search.php?s=
const domain = 'https://www.theaudiodb.com'
const api = `/api/v1/json/1/search.php?s=`
const url = `${domain}${api}`



// COMPONENT 2: ACCESS API DATA
async function getData(uniqueArtist) {  /*  create an async function that points to music artist data */  /* set my function parameter to 'uniqueArtist' once I got to STEP 3, "declare a variable that puts user's value input into the 'blank' id of header" */
    try {  /*  setup try for the data retrieval */
    let response = await axios.get(`${url}${uniqueArtist}`) /* declare variable that will call on the data from our API url above */ /* added 'uniqueArtist' as the url endpoint once I got to STEP 3, "declare a variable that puts user's value input into the 'blank' id of header" */
        // console.log(response) 
    let data = response.data.artists[0] /* declare variable that points to the specific data set that contains information for music artists */
        // console.log(data)
    removeBio()
    artistDetails(data)
    artistBio(data)
    removeThumbnail()
    removeBgImg()
    removeDetails()
    artistBgImg(data)
    artistThumbnail(data)
    artistDetails(data)
    } catch (error) { /*  catch setup as a fallback to in case of an error in our response var */
        console.log(error)
    }
}


// COMPONENT 3: SETUP FUNCTIONALITY FOR UNIQUE SEARCH FROM THE BROWSER
const searchButton = document.querySelector('#search') /*  declare a var that pulls our search button via querySelector  */
// console.log(searchButton) /* tested via console and got successful response: <button id="search">Search</button> */

searchButton.addEventListener('click', (e) => { /*  set event listener to prevent data from showing until click  */
    e.preventDefault()
    // console.log(searchButton) /* not sure if there's a right way to test this. previously tested via console and got successful response: <button id="search">Search</button> */

const artistValue = document.querySelector('#blank').value /*  declare a variable that puts user's value input into the 'blank' id of header  */
    getData(artistValue) /* sucessfully tested input on browser: entered an artist name, clicked 'search' button, console log displayed  */
})
// getData() /* un-commented getData()  once I was able to get the unique artist data in Chrome dev tool. */


// COMPONENT 4: APPEND ARTIST DATA TO DOM
function artistBgImg(data) { /*  add artist bg image to .main-container */
    let mainArt = 
    `
    <img src='${data.strArtistFanart}'></img>
    `
    const mainContainer = document.querySelector('.main-container') /* return artistInfo to the body's '.main-container' */
    mainContainer.insertAdjacentHTML('beforeend', mainArt)
    return mainArt
}

function artistDetails(data) { /*  add artist details to .details */
    let mainInfo = 
    `
    <img class='artist-logo' src='${data.strArtistLogo}' alt='logo'></img>
    <div class='artist-name'>${data.strArtist}</div>
    <div class='artist-genre'>${data.strGenre}</div>
    <a href='https://${data.strWebsite}' target='_blank'>Website</a>
    <a href='https://${data.strFacebook}' target='_blank'>Facebook</a>
    <a href='https://${data.strTwitter}' target='_blank'>Twitter</a>
    `
    const infoContainer = document.querySelector('.details-container')
    infoContainer.insertAdjacentHTML('beforeend', mainInfo)
    return mainInfo
}

function artistThumbnail(data) { /*  add artist thumbnail to .artist-container */
    let artThumbnail = 
    `
    <img src='${data.strArtistThumb}' alt='${data.strArtist}'></img>
    `
    const thumbnailContainer = document.querySelector('.details-container') 
    thumbnailContainer.insertAdjacentHTML('beforeend', artThumbnail)
    return artThumbnail  
}

function artistBio(data) { /*  add artist bio to .bio-container */
    let bioInfo =
    `
    <p class='artist-bio'>${data.strBiographyEN}</p>
    `
    const bioContainer = document.querySelector('.bio-container')
    bioContainer.insertAdjacentHTML('beforeend', bioInfo)
    return bioInfo 
}


// COMPONENT 5: RESET DOM / REMOVE LAST
function removeBgImg() {  
    const rmArt = document.querySelector('.main-container')
    while (rmArt.lastChild) {
        rmArt.removeChild(rmArt.lastChild)
    }
}
function removeDetails() { 
    const rmDetails = document.querySelector('.details-container')
    while (rmDetails.lastChild) {
        rmDetails.removeChild(rmDetails.lastChild)
    }
}
function removeThumbnail() { 
    const rmThumbnail = document.querySelector('.details-container')
    while (rmThumbnail.lastChild) {
        rmThumbnail.removeChild(rmThumbnail.lastChild)
    }
}
function removeBio() { 
    const rmBio = document.querySelector('.bio-container')
    while (rmBio.lastChild) {
        rmBio.removeChild(rmBio.lastChild)
    }
}