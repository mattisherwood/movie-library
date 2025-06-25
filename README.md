# <img src="src/app/favicon.ico" alt="Alt text" width="24" height="24" /> Movie Library

This is a technical exercise creating a web app for browsing and rating movies based on the [Open Movie Database (OMDb) API](https://www.omdbapi.com/).

## Viewing the site

Simply visit **[best-movie-library.vercel.app](https://best-movie-library.vercel.app)** to see the site in action.

## Local Development

### Prerequisites

You will need an API key for the OMDb API, which you can easily do by following these steps:

1. Fill in [this form](https://www.omdbapi.com/apikey.aspx). (A free account is fine)

2. Click on the emailed link to activate the key.

### Getting Started

1. Clone the repo.

2. Create a `.env` file in the root of the repository with the key you obtained (& activated) from OMDb.

   ```env
   OMDB_API_KEY=XXXXXXXX
   ```

3. Install the packages.

   ```bash
   npm i
   ```

4. Run the development server.

   ```bash
    npm run dev
   ```

5. Open [localhost:3000](http://localhost:3000) with your browser to see the result.

6. You can start editing the site by modifying files within `src/app` or the components within `src/components`. The site will auto-update in the browser as you edit the files.

## Future Plans

I've got a quick MVP up and running, but would like to flesh it out with the following:

1. Adding a back button.

2. Adding a version that runs on Tailwind.

3. Adding unit tests.

4. Adding Storybook stories.

5. Storing the search and filters in the URL to enable better navigation.

6. Linking up the extra search input in the header. (Dependant on task 4)
