// COMPONENT 1: DECLARE VARIABLES FOR API URL INFO

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
    removeArtist() /* DOM is reset */
    artistData(data) /* artist data appended to DOM */
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

 function artistData(data) { /*  create a function that grabs artists' main details and appends to main-container. */
     let artistInfo = 
    `
    <h1 class='artist-name'>${data.strArtist}</h1>
    <h2 class='artist-genre'>${data.strGenre}</h2>
    <img id='artist-thumbnail' src='${data.strArtistThumb}' alt='${data.strArtist}'></img>
    <img id='artist-logo' src='${data.strArtistLogo}' alt='logo'></img>
    <a href='https://${data.strWebsite}' target='_blank'>Website</a>
    <a href='https://${data.strFacebook}' target='_blank'>Facebook</a>
    <a href='https://${data.strTwitter}' target='_blank'>Twitter</a>
    <p class='artist-bio'>${data.strBiographyEN}</p>
    `
/* return artistInfo to the body's '.main-container' */
const artistContainer = document.querySelector('.main-container')
    artistContainer.insertAdjacentHTML('beforeend', artistInfo)
    return artistInfo /*  stops execution of function and returns */
}

/* call our artistData function in COMPONENT 2 */ 


// // COMPONENT 5: RESET DOM / REMOVE LAST
function removeArtist() {
    const artistInfo = document.querySelector('.main-container')
    while (artistInfo.lastChild) {
        artistInfo.removeChild(artistInfo.lastChild)
    }
}
/* call our removeArtist function in COMPONENT 2, before artistData(data) */