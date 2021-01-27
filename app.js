// COMPONENT 1: DECLARE VARIABLES FOR API URL INFO

const domain = 'https://www.theaudiodb.com'
const api = `/api/v1/json/1/search.php?s=`
const url = `${domain}${api}`



// COMPONENT 2: ACCESS API DATA

async function getData(uniqueArtist) {  /*  create an async function that points to music artist data */  /* set my function parameter to 'uniqueArtist' once I got to STEP 3, "declare a variable that puts user's value input into the 'blank' id of header" */
    try {  /*  setup try for the data retrieval */
    let response = await axios.get(`${url}${uniqueArtist}`) /* declare variable that will call on the data from our API url above */ /* added 'uniqueArtist' as the url endpoint once I got to STEP 3, "declare a variable that puts user's value input into the 'blank' id of header" */
    // console.log(response) 
    let artistDataSet = response.data.artists[0] /* declare variable that points to the specific data set that contains information for music artists */
    console.log(artistDataSet)
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



// COMPONENT 4: DISPLAY OUR SEARCH IN THE BROWSER FOR THE USER

/*  create a function called that pulls data from our artistDataSet variable and then displays that data onto the browser. Target the following endpoints: strArtist (artist name), strGenre (genre), strArtistThumb (thumbnail photo), strArtistLogo (logo), strBiographyEN (bio), strWebsite (website), strFacebook (facebook), strTwitter (twitter) */
 function artistDetails(artistDataSet) {
     let artistInfo = 
    `
    <h1>${artistInfo.strArtist}</h1>
    <h2>${artistInfo.strGenre}</h2>
    <img src='${artistInfo.strArtistThumb}'></img src>
    <img src='${artistInfo.strArtistLogo}'></img src>
    <h1>${artistInfo.strBiographyEN}</h1>
    <a href='${artistInfo.strWebsite}'></a href>
    <a href='${artistInfo.strFacebook}'></a href>
    <a href='${artistInfo.strTwitter}'></a href>
    `
}


/*  displays the previous data on the browser. Tip: declare a variable within the fuctions that pulls from each of the data areas needed (ie. `<img src='${artistDataSet.thumbnail}> <h1>${artistName.artist}</h1> and <h2>${artistName.genre}</h2>) */ 
 


/*  return artistInfo to '.artist-section' */    



/*  create a function called artistInfo that pulls artist biography from the data from our try...let



/*  displays the previous data on the browser. Tip: declare a variable within the fuctions that pulls from each of the data areas needed (ie. `<img srcs='${artistDataSet.thumbnail}> <h1>${artistName.artist}</h1> and <h2>${artistName.genre}</h2>) */ /*  return artistInfo to 'bio-section' */



/*  reset DOM  */