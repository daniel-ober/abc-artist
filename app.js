// 1) DECLARE VARIABLES FOR API URL INFO
// Note: No API Key needed
const domain = 'https://www.theaudiodb.com'
const api = `/api/v1/json/1/search.php?s=`
const url = `${domain}${api}`


// 2) ACCESS API DATA USING ASYNC FUNCTION
async function getData(uniqueArtist) { 
    try {
    let response = await axios.get(`${url}${uniqueArtist}`) 
    let data = response.data.artists[0] 
        removeWallpaper()
        removeDetails()
        removeBio()
        artistWallpaper(data)
        artistDetails(data)
        artistBio(data)
    } catch (error) {
        console.log('Oh, no! There seems to be an issue. Please try  again later.')
    }
}

// 3) SETUP FUNCTIONALITY FOR ARTIST SEARCH
let searchButton = document.querySelector('.submit')
searchButton.addEventListener('click', (e) => {
    e.preventDefault()

const artistValue = document.querySelector('.blank').value
    getData(artistValue)
})


// COMPONENT 4: APPEND DATA TO DOM
function artistWallpaper(data) {
    let wallpaper =
    `
    <img class='artist-fanart' src='${data.strArtistFanart}' alt='fanart'></img>
    `

    const wallpaperContainer = document.querySelector('.artist-section')
    wallpaperContainer.insertAdjacentHTML('beforeend', wallpaper)
    return artistWallpaper 
}

function artistDetails(data) {
    let details =
    `
    <a href='https://${data.strWebsite}' target='_blank'><img class='artist-logo' src='${data.strArtistLogo}' alt='logo'></img></a><br>
    <a href='https://${data.strFacebook}' target='_blank'><img class='social-tag' src='./facebook-icon.png'id='facebook-icon'></img src></a>
    <a href='https://${data.strTwitter}' target='_blank'><img class='social-tag' src='./twitter-icon.png' id='twitter-icon'></img src></a>
    `
    const detailsContainer = document.querySelector('.artist-details')
    detailsContainer.insertAdjacentHTML('beforeend', details)
    return artistDetails 
}

function artistBio(data) {
    let bio =
    `
    <h1 class='artist-name'>Artist: ${data.strArtist}</h1>
    <h2 class='artist-genre'>Genre: ${data.strGenre}</h2><br>
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