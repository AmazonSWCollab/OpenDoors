const axios = require("axios")



const query = (id, table="businesses") => (
    axios
      .get(`http://localhost:3001/${table}/${id}`)
      .then(response => { 
          const note = response.data
          console.log(note)
      })
)

query(1)