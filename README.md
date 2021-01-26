# Project Overview

## Project Name

- LaLaLyric


## Project Description

- A tool designed for music lovers to search for lyrics of their favorite artists and songs.


## API and Data Sample
- API: Vagalume (Example: https://www.vagalume.com.br/coldplay/index.js)
- Targeted Data: Artist Image, Artist Name, Song Name, Song Lyrics
- JSON Snippet:
```javascript
  {
    "artist": {
        "id": "3ade68b5gebc6eda3",
        "desc": "Coldplay",
        "url": "/coldplay/",
        "pic_small": "/coldplay/images/profile.jpg",
        "pic_medium": "/coldplay/images/coldplay.jpg",
        "rank": {
            "pos": "7",
            "period": 202101,
            "views": "102912",
            "uniques": "63864",
            "points": "84.7"
        },
    "toplyrics": {
            "item": [
                {
                    "id": "3ade68b8ge8b16fa3",
                    "desc": "Viva La Vida",
                    "url": "/coldplay/viva-la-vida.html"
                },
                {
                    "id": "3ade68b6g6296fda3",
                    "desc": "The Scientist",
                    "url": "/coldplay/the-scientist.html"
                },
                {
                    "id": "3ade68b5g83a8eda3",
                    "desc": "Yellow",
                    "url": "/coldplay/yellow.html"
              }
          }
      }
  }
```

## Wireframes

(image)



#### MVP 

- Use Axios to access song, artist, photo data from Vagalume API
- Append API data to the DOM
- Listen for user input to decide what data to render on page
- Render data on page
- Reset DOM if another search is performed
- Deploy LaLaLyrics to a hosting site
- Style using a flexbox or grid
- Add Media responsive design when user switch from desktop to mobile view


#### PostMVP  

- Use local storage to save favorites
- Implement a second API to direct user to searched song on Apple Music
- Enhance CSS styling
- Design customer LaLaLyric logo

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval | Incomplete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28| Initial Clickable Model  | Incomplete
|Jan 29| MVP | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

https://app.conceptboard.com/board/xbgh-h6k7-nyrh-x7qb-kt01


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Use Axios to access song, artist, photo data from Vagalume API, and append to DOM | H | 5 hrs| 0 hrs | 0 hrs |
| Listen for user input to decide what data to render on page | H | 4 hrs| 0 hrs | 0 hrs |
| Reset DOM if another search is performed | H | 3 hrs| 0 hrs | 0 hrs |
| Core Application Structure (HTML, CSS, etc.) | H | 2 hrs| 0 hrs | 0 hrs |
| Style using a flexbox or grid | M | 1.5 hrs| 0 hrs | 0 hrs |
| Add Media query for responsive design when user switch from desktop to mobile view | M | 1 hrs| 0 hrs | 0 hrs |
| Deploy LaLaLyrics to a hosting site | M | 1 hrs| 0 hrs | 0 hrs |
| Testing | H | 1 hrs| 0 hrs | 0 hrs |
| Total | H | 18.5 hrs| 0 hrs | 0 hrs |
