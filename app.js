const domain = 'https://www.theaudiodb.com'
const url = `${domain}/api/v1/json/1/search.php?s=`

const getData = async () => {  /*  declare var to pull API data async */  
    try {  /*  setup try...catch for the data retrieval */
    let response = await axios.get(url) /* declare variable that will call on broad data set */
    // console.log(response) 
    let artistData = response.data.artists[0] /* declare variable that points to our data set which contains data for an artist */
    console.log(artistData)
    } catch (error) { /*  catch setup as a fallback to catch an error in response */
        console.log(error)
    }
}
getData()

/*  pull button via querySelector  */
/*    */
/*    */    
/*  set event listener to prevent data from showing until click  */
/*    */
/*    */    
/*  declare a variable that puts user's value input into the 'blank' id of header  */
/*    */
/*    */
/*  create a function called artistInfo that pulls artist name, genre, photo from the data from our try...let
/*    */
/*    */   
/*  displays the previous data on the browser. Tip: declare a variable within the fuctions that pulls from each of the data areas needed (ie. `<img src='${artistData.thumbnail}> <h1>${artistName.artist}</h1> and <h2>${artistName.genre}</h2>) */ 
/*    */
/*    */   
/*  return artistInfo to '.artist-section' */    
/*    */
/*    */
/*  create a function called artistInfo that pulls artist biography from the data from our try...let
/*    */
/*    */   
/*  displays the previous data on the browser. Tip: declare a variable within the fuctions that pulls from each of the data areas needed (ie. `<img srcs='${artistData.thumbnail}> <h1>${artistName.artist}</h1> and <h2>${artistName.genre}</h2>) */ /*  return artistInfo to 'bio-section' */
/*    */
/*    */
/*  reset DOM  */
/*    */
/*    */    