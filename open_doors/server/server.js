const express = require("express")
const axios = require("axios")
//import fetch from 'node-fetch';
const app = express()
const PORT = 5000



app.get("/api", (req, res) => 
    axios
      .get("http://localhost:3001/businesses")
      .then(response => res.json(response.data))
)

app.get("/admin", (req, res) => {
  
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})