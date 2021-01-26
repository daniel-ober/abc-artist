# Project Overview

## Project Name

- TBD


## Project Description

- A tool designed for music lovers to learn more about their favorite artists.


## API and Data Sample
- API: [TheAudioDB](https://www.theaudiodb.com/api_guide.php)
- Example: https://www.theaudiodb.com/api/v1/json/1/search.php?s=madonna
- Targeted Data: Artist Name, Biography, Genre, Image/Thumbnail
- JSON Snippet:
```javascript
{
    "artists": [
        {
            "idArtist": "111255",
            "strArtist": "Madonna",
            "strArtistStripped": null,
            "strArtistAlternate": "Madonna Louise Veronica Ciccone",
            "strLabel": "Interscope Records",
            "idLabel": "44378",
            "intFormedYear": "1983",
            "intBornYear": "1958",
            "intDiedYear": null,
            "strDisbanded": null,
            "strStyle": "Rock/Pop",
            "strGenre": "Pop",
            "strMood": "Happy",
            "strWebsite": "www.madonna.com",
            "strFacebook": "www.facebook.com/madonna",
            "strTwitter": "twitter.com/MadonnaMDNAday",
            "strBiographyEN": "Madonna (born Madonna Louise Ciccone; August 16, 1958) is an American singer, songwriter, actress, dancer and entrepreneur. She has sold more than 300 million records worldwide and is recognized as the world's top-selling female recording artist of all time by Guinness World Records. Considered to be one of the \"25 Most Powerful Women of the Past Century\" by Time for being an influential figure in contemporary music, she is known for continuously reinventing both her music and image, and for retaining a standard of autonomy within the recording industry. Critics have praised her diverse musical productions which have also served as a lightning rod for controversy.\nBorn in Bay City, Michigan, Madonna moved to New York City in 1977 to pursue a career in modern dance. After performing in the music groups Breakfast Club and Emmy, she released her debut album in 1983. She followed it with a series of albums that attained immense popularity by pushing the boundaries of lyrical content in mainstream popular music and imagery in her music videos, which became a fixture on MTV. Throughout her career, many of her songs have hit number one on the record charts, including \"Like a Virgin\", \"Papa Don't Preach\", \"Like a Prayer\", \"Vogue\", \"Frozen\", \"Music\", \"Hung Up\", and \"4 Minutes\".\nAlthough she received generally positive reviews for her role in Desperately Seeking Susan (1985), her later film appearances received mixed commentary. She received critical acclaim and a Golden Globe Award for Best Actress in Motion Picture Musical or Comedy for Evita (1996), but has received harsh feedback for other performances. Her other ventures include: fashion design, writing children's books, and film directing and producing. She has been acclaimed as a businesswoman. In 1992, she founded entertainment company Maverick as a joint venture with Time Warner. In 2007, she signed an unprecedented US $120 million contract with Live Nation.\nAccording to the Recording Industry Association of America (RIAA), Madonna is the best-selling female rock artist of the 20th century and the second top-selling female artist in the United States, with 64 million certified albums. In 2008, Billboard magazine ranked her at number two, behind only The Beatles, on the Billboard Hot 100 All-Time Top Artists, making her the most successful solo artist in the history of the chart. She was also inducted into the Rock and Roll Hall of Fame in the same year. In 2012, she was crowned the \"Greatest Woman In Music\" by VH1.",
            "strGender": "Female",
            "intMembers": "1",
            "strCountry": "Michigan, USA",
            "strCountryCode": "US",
            "strArtistThumb": "https://www.theaudiodb.com/images/media/artist/thumb/qvypwv1477043806.jpg",
            "strArtistLogo": "https://www.theaudiodb.com/images/media/artist/logo/tvttwq1519741331.png",
            "strArtistClearart": "https://www.theaudiodb.com/images/media/artist/clearart/yrrvpq1512575035.png",
            "strArtistWideThumb": "https://www.theaudiodb.com/images/media/artist/widethumb/xwytru1519740515.jpg",
            "strArtistFanart": "https://www.theaudiodb.com/images/media/artist/fanart/sqqrsy1477043866.jpg",
            "strArtistFanart2": "https://www.theaudiodb.com/images/media/artist/fanart/txrrvy1477043883.jpg",
            "strArtistFanart3": "https://www.theaudiodb.com/images/media/artist/fanart/urtuqq1477043942.jpg",
            "strArtistBanner": "https://www.theaudiodb.com/images/media/artist/banner/ywssux1355142480.jpg",
            "strMusicBrainzID": "79239441-bfd5-4981-a70c-55c3f15c1287",
            "strLastFMChart": null,
            "intCharted": "3",
            "strLocked": "unlocked"
        }
    ]
}
```

## Wireframes
![alt text](https://github.com/daniel-ober/lalalyric/blob/main/wireframe.png)


#### MVP 

- Search by user
- Submit artist name
- Render the following data: Artist id, Artist Name, Genre, Biography, Image/Thumbnail)
- Append API data to the DOM
- Reset DOM if another search is performed
- Utilize flexbox to separate artist name/genre/image (below header, above artist bio) and artist biography (above footer, below artist name/genre/image)
- Add Media responsive design when user switch from desktop to mobile view


#### PostMVP  

- Add artist social media with buttons to the right of artist name/genre/image
- Use local storage to save favorites
- Design custom app logo


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | In Progress
|Jan 26| Project Approval, test API data in Chrome Dev, Pseudocoding | Incomplete
|Jan 27| Pseudocoding, Core HTML Structure, Basic CSS Styling | Incomplete
|Jan 28| MVP  | Incomplete
|Jan 29| Styling | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix
![alt text](https://github.com/daniel-ober/lalalyric/blob/main/Developmental%20Matrix.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Use Axios to access music artist name, genre, photo, and biography from TheAudioDB API, and append to DOM | H | 5 hrs| 0 hrs | 0 hrs |
| Listen for user input to decide what data to render on page | H | 4 hrs| 0 hrs | 0 hrs |
| Reset DOM if another search is performed | H | 3 hrs| 0 hrs | 0 hrs |
| Core Application Structure (HTML, CSS, etc.) | H | 2 hrs| 0 hrs | 0 hrs |
| Style using a flexbox | M | 2 hrs| 0 hrs | 0 hrs |
| Add Media query for responsive design when user switch from desktop to mobile view | M | 1 hrs| 0 hrs | 0 hrs |
| Deploy app to a hosting site | M | 1 hrs| 0 hrs | 0 hrs |
| Testing | H | 2 hrs| 0 hrs | 0 hrs |
| Debugging | H | 2 hrs| 0 hrs | 0 hrs |
| Total | H | 22 hrs| 0 hrs | 0 hrs |
