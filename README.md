# Project Overview

## Project Name

- LaLyric


## Project Description

- A tool designed for music lovers to search for lyrics of their favorite artists and songs.


## API and Data Sample
- API: Vagalume (Example: https://www.vagalume.com.br/coldplay/index.js)
- Targeted Data: Artist Image, Artist Name, Song Name, Song Lyrics
- JSON Snippet:

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


## Wireframes





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

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval | Incomplete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28| Initial Clickable Model  | Incomplete
|Jan 29| MVP | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix





## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |
