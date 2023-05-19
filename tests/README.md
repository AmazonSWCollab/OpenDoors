## How to run
The tests will run assuming you have the server and client running per these instructions:

In one terminal, start with `npx json-server --port 3001 --watch db.json` in the `/server` folder directory to start the JSON server. This server is for account creation.

In a second terminal, you'll need to navigate to the `server` folder directory for in the command-line and run `npm run dev`. This will connect MongoDB to the frontend.

Finally in a third terminal, you'll need to navigate to the `client` directory in the client folder. and run `npm start`.  The React front end will run at `http://localhost:3000/OpenDoors/`
