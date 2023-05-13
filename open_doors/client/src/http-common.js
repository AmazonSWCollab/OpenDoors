import axios from "axios";

export default axios.create({

  // this one works with nodemon server, keep it
  baseURL: "http://localhost:5000/api/v1/restaurants",
  
  // this one didnt work but worth keeping note of it
  //baseURL: "http://localhost:5000/api/v1",
  
  // this one actually works and is helping host on MongoDB
  //baseURL: "https://us-west-2.aws.data.mongodb-api.com/app/restaurant-roulette-ghuzh/endpoint/",

  headers: {
    "Content-type": "application/json"
  }
});