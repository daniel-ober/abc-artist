// COMPONENT 1: DECLARE VARIABLES FOR API URL INFO

const domain = 'https://www.theaudiodb.com'
const api = `/api/v1/json/1/search.php?s=`
const url = `${domain}${api}`



// COMPONENT 2: ACCESS API DATA

async function getData(uniqueArtist) {  /*  create an async function that points to music artist data */  /* set my function parameter to 'uniqueArtist' once I got to STEP 3, "declare a variable that puts user's value input into the 'blank' id of header" */
    try {  /*  setup try for the data retrieval */
    let response = await axios.get(`${url}${uniqueArtist}`) /* declare variable that will call on the data from our API url above */ /* added 'uniqueArtist' as the url endpoint once I got to STEP 3, "declare a variable that puts user's value input into the 'blank' id of header" */
    // console.log(response) 
    let artistElements = response.data.artists[0] /* declare variable that points to the specific data set that contains information for music artists */
    // console.log(artistElements)
    artistData(artistElements)
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



// COMPONENT 4: TARGET DATA FROM OUR 'artistElements' TO DISPLAY IN THE BROWSER FOR USER

 function artistData(artistElements) { /*  create a function that targets specific items in the artist data. Target the following endpoints: strArtist (artist name), strGenre (genre), strArtistThumb (thumbnail photo), strArtistLogo (logo), strBiographyEN (bio), strWebsite (website), strFacebook (facebook), strTwitter (twitter) */
     let artistInfo = 
    `
    <h1>${artistElements.strArtist}</h1>
    <h2>${artistElements.strGenre}</h2>
    <img src='${artistElements.strArtistThumb}'></img src>
    <img src='${artistElements.strArtistLogo}'></img src>
    <h1>${artistElements.strBiographyEN}</h1>
    <a href='${artistElements.strWebsite}'></a href>
    <a href='${artistElements.strFacebook}'></a href>
    <a href='${artistElements.strTwitter}'></a href>
    `
/* return artistInfo to '.artist-section' class of the body */
const artistContainer = document.querySelector('.artist-section')
    artistContainer.insertAdjacentHTML('beforeend', artistInfo)
    return artistInfo /*  stops execution of function and returns */
}
/* call our artistData function somewhere in COMPONENT 2 */ 


// COMPONENT 5: RESET THE DOM WITH EACH NEW SEARCH