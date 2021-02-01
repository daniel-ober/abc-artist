// 1) DECLARE VARIABLES FOR API URL INFO
// https://www.theaudiodb.com/api/v1/json/1/search.php?s=
// no api key needed
const domain = 'https://www.theaudiodb.com'
const api = `/api/v1/json/1/search.php?s=`
const url = `${domain}${api}`


// 2) ACCESS API DATA USING ASYNC FUNCTION
async function getData(uniqueArtist) {  /*  create an async function that points to music artist data */  /* set my function parameter to 'uniqueArtist' once I got to STEP 3, "declare a variable that puts user's value input into the 'blank' id of header" */
    try {  /*  setup try/catch for the data retrieval */
    let response = await axios.get(`${url}${uniqueArtist}`) /* declare variable that will call on the data from our API url above */ /* added 'uniqueArtist' as the url endpoint once I got to STEP 3, "declare a variable that puts user's value input into the 'blank' id of header" */
        // console.log(response) 
    let data = response.data.artists[0] /* declare a variable to grab artist data*/
        // console.log(data)
        removeWallpaper()
        removeDetails()
        removeBio()
        artistWallpaper(data)
        artistDetails(data)
        artistBio(data)
    } catch (error) { /*  catch setup as a fallback */
        console.log('Oh, no! There seems to be an issue. Please try  again later.')
    }
}

// 3) SETUP FUNCTIONALITY FOR UNIQUE SEARCH FROM THE BROWSER
let searchButton = document.querySelector('.submit') /*  declare a var that pulls search button via querySelector  */
// console.log(searchButton)

searchButton.addEventListener('click', (e) => { /*  set event listener to wait until click  */
    e.preventDefault()
    // console.log(searchButton)

const artistValue = document.querySelector('.blank').value /*  declare a variable that puts user's value input into the 'blank' id of header  */
    getData(artistValue)
})
// getData()


// COMPONENT 4: APPEND DATA TO DOM
// A) set artist artist image (wallpaper) to main artist-section container
function artistWallpaper(data) {
    let wallpaper =
    `
    <img class='artist-fanart' src='${data.strArtistFanart}' alt='fanart'></img>
    `

    const wallpaperContainer = document.querySelector('.artist-section')
    wallpaperContainer.insertAdjacentHTML('beforeend', wallpaper)
    return artistWallpaper 
}

// B) set artist details to artist-details section of main artist-section
function artistDetails(data) {
    let details =
    `
    <a href='https://${data.strWebsite}' class='social-media' target='_blank'><img class='artist-logo' src='${data.strArtistLogo}' alt='logo'></img></a><br>
    <a href='https://${data.strFacebook}' class='social-media' target='_blank'><img class='social-tag' src='./facebook-icon.png'id='facebook-icon'></img src></a>
    <a href='https://${data.strTwitter}' class='social-media' target='_blank'><img class='social-tag' src='./twitter-icon.png' id='twitter-icon'></img src></a>
    <h1 class='artist-name'>Artist: ${data.strArtist}</h1>
    <h2 class='artist-genre'>Genre: ${data.strGenre}</h2><br>
    `
    const detailsContainer = document.querySelector('.artist-details')
    detailsContainer.insertAdjacentHTML('beforeend', details)
    return artistDetails 
}

// C) set artist bio to to artist-bio section of main artist-section
function artistBio(data) {
    let bio =
    `
    <p class='bio-details'>${data.strBiographyEN}</p>
    `
    const bioContainer = document.querySelector('.artist-bio')
    bioContainer.insertAdjacentHTML('beforeend', bio)
    return artistBio 
}


// COMPONENT 5: RESET DOM / REMOVE LAST
function removeWallpaper() { 
    const removeLast = document.querySelector('.artist-section')
    while (removeLast.lastChild) {
        removeLast.removeChild(removeLast.lastChild)
    }
}

function removeDetails() { 
    const removeLast = document.querySelector('.artist-details')
    while (removeLast.lastChild) {
        removeLast.removeChild(removeLast.lastChild)
    }
}
function removeBio() { 
    const removeLast = document.querySelector('.artist-bio')
    while (removeLast.lastChild) {
        removeLast.removeChild(removeLast.lastChild)
    }
}