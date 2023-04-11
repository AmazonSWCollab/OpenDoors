const express = require("express")
const app = express()
const PORT = 5000

app.get("/api", (req, res) => {
    res.json({"businesses": [
        { 
            "name": "Carl's Jr.",
            "address": "123 Flower St.",
            "zipcode": "12345",
            "city": "Fullerton",
            "state:": "CA"
        },
        {
            "name": "7Leaves",
            "address": "456 Issa Ln",
            "zipcode": "21212",
            "city": "Orange",
            "state": "CA"
        },
        {
            "name": "24 Hour Fitness",
            "address": "789 Drone Ave",
            "zipcode": "98765",
            "city": "Huntington Beach",
            "state": "CA"
        }
    ]})
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})