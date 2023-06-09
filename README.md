
# OpenDoors main repository

OpenDoors is a disabled-led review site for ADA accessibility in local businesses and buildings. Our GitHub repo provides a platform for sharing experiences and knowledge to promote inclusion. Join us in opening doors for everyone.

This is the official GitHub repository for the OpenDoors website, which includes the front end with React, and the back end with Express. 

## How to run

First, ensure you have node / NPM installed.

If you want to start developing with this repository, simply start first by cloning it. 

Start with `npx json-server --port 3001 --watch db.json` in the `/server` folder to start the JSON server

Next you'll need to start the server by navigating to the base directory for the `server` folder in the command-line and run `npm run dev`. The server will be running at `http://localhost:5000`. You can find the JSON "database" (for now) at `http://localhost:5000/api`. 

Finally, you'll need to get to the base directory for the client folder. and run `npm start`.  The React front end will run at `http://localhost:3000`

For front end dev, go to `/client/src/App.js` to get started.

If this is your first time developing with these folders, be sure to run `npm install` in both client and server folders to get the necessary dependencies.
