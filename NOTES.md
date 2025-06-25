# Plan of Action

## Stage 1: Read & Research

Spend the first hour...

- Reading the brief.

- Researching OMDb API and its data capabilities / methods.

  _NB: I obtained & activated an API key for the service, and fetched a range of example data so I knew what data I had to work with._

- Researching designs of existing and concepts on Dribbble etc. for inspiration.

- Putting together plan of action

## Stage 2: Frontend with Fixtures ( ~~3hr~~ 4hr 20min )

Put together a basic frontend using fixtures retrieved from requests to the API and don't persist ratings - have them merely update the state.

1. Homepage with search results\
   _NB: I used the Dragon search results fixture_

2. Individual Movie Page\
   _NB: I used the How to Train Your Dragon fixture_

## Stage 3: Link up the API ( ~~3hr~~ 2hr 50min )

Create NextJS proxies to mirror the desired available endpoints and start populating the pages with live data.

1. Homepage with Search Results

2. Individual Movie Page

_NB: I created two proxies - one for the search endpoint and one for the individual movie endpoint (making sure the API key was stored separately as an untracked environment variable)._

## Stage 4: Persist Ratings ( ~~1hr~~ 40min )

Go back to the ratings and get the values to be stored in local storage so they persist across page refresh & navigation.

_NB: This was easily done as it was already contained within its own component.\
I avoided using cookies as local storage would be more appropriate security wise, and I avoided server-side or database storage as that would require more work to make secure._

## Stage 5: Clean Up, Bug Fix & Launch MVP ( ~~3hr~~ 4hr 20min )

Do some testing and reactive fixing where needed, and then launch on Vercel domain.

_NB: I spent more time than expected on this as I wanted to get it right, (best practices such as priority/lazy loading images etc.) and I also spent some time on creating & updating the README and notes._

## Stage 6: Transfer to Tailwind (2hr)

I've decided to plan this a separate step, as I'm interested to see the difference it'll make and which is more efficient. It also allows me to get the MVP up & running and testable quickly with my quickest CSS stack, which is vanilla/PostCSS modules, and then learn from comparing the two.

## Stage 7: Storybook & Unit Tests (2hr & 2hr)

I might do these earlier, but I appreciate it's not an explicitly essential part of the challenge, so hence doing it after the MVP launch.
