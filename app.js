const domain = 'https://www.theaudiodb.com'
const url = `${domain}/api/v1/json/1/search.php?s=`


async function searchArtist() {  /*  create an async function that points to music artist data */  
    try {  /*  setup try for the data retrieval */
    let response = await axios.get(url) /* declare variable that will call on the data from our API url above */
    // console.log(response) 
    let artistData = response.data.artists[0] /* declare variable that points to the specific data set that contains information for music artists */
    console.log(artistData)
    } catch (error) { /*  catch setup as a fallback to in case of an error in our response var */
        console.log(error)
    }
}

const searchButton = document.querySelector('#search') /*  declare a var that pulls our search button via querySelector  */
console.log(searchButton) /* tested via console and got successful response: <button id="search">Search</button> */


/*  set event listener to prevent data from showing until click  */
searchButton.addEventListener('click', (e) => { 
    e.preventDefault()
    // console.log(searchButton) /* not sure if there's a right way to test this. previously tested via console and got successful response: <button id="search">Search</button> */
})

searchArtist()
 


/*  declare a variable that puts user's value input into the 'blank' id of header  */



/*  create a function called artistInfo that pulls artist name, genre, photo from the data from our try...let
 


/*  displays the previous data on the browser. Tip: declare a variable within the fuctions that pulls from each of the data areas needed (ie. `<img src='${artistData.thumbnail}> <h1>${artistName.artist}</h1> and <h2>${artistName.genre}</h2>) */ 
 


/*  return artistInfo to '.artist-section' */    



/*  create a function called artistInfo that pulls artist biography from the data from our try...let



/*  displays the previous data on the browser. Tip: declare a variable within the fuctions that pulls from each of the data areas needed (ie. `<img srcs='${artistData.thumbnail}> <h1>${artistName.artist}</h1> and <h2>${artistName.genre}</h2>) */ /*  return artistInfo to 'bio-section' */



/*  reset DOM  */