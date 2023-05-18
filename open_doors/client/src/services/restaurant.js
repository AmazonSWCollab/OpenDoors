import http from "../http-common";

class RestaurantDataService {
  getAll(page = 0) {

    // this one is for nodemon server
    return http.get(`?page=${page}`);

    // this one is for mongoDB
    //return http.get(`restaurants?page=${page}`);
  }

  get(id) {

    // this one is active with MongoDb
    //return http.get(`/restaurant/id/${id}`);

    // this one works with nodemon server
    return http.get(`/id/${id}`);
  }

  find(query, by = "name", page = 0) {

    // this one is for nodemon server
    return http.get(`?${by}=${query}&page=${page}`);

    // this one is for mongoDB
    //return http.get(`restaurants?${by}=${query}&page=${page}`);
  }

  createReview(data) {

    // nodemon servers
    return http.post("/review", data);

    // mongoDB
    //return http.post("/review-new", data);
  }

  updateReview(data) {

    // nodemon servers
    return http.put("/review", data);

    // mongoDB
    //return http.put("/review-edit", data);
  }

  deleteReview(id, userId) {

    // nodemon servers
    return http.delete(`/review?id=${id}`, { data: { user_id: userId } });

    // mongoDB
    //return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
  }

  getCuisines(id) {
    return http.get(`/cuisines`);
  }

}

export default new RestaurantDataService();
