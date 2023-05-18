import "./App.css";

import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Profile from "./routes/profilePage"
import SignUp from "./routes/signUpPage"
import LogIn from "./routes/logInPage"
import Home from "./routes/homePage"
import About from "./routes/aboutPage";
import Error from "./routes/errorPage";


import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

/*
let getData = () => {
  // TODO: Add useState and useEffect blocks to this body

}
*/

let App = () => {

  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  // Very basic way of getting data from the backend
  // More detailed and specific methods will be dev"d later
  /*
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  */

  return (
    <div>

      <div>
        <nav>
          <li>
            {user ? (
              <button onClick={logout} style={{ cursor: "pointer" }}> Logout {user.name} </button>
            ) : (
              <Link to={"login"}> Login </Link>
            )}
          </li>
        </nav>
      </div>

      <Header></Header>

        <Switch>
          <Route exact path={["/", "/OpenDoors"]} component={Home} />
          <Route exact path="/restaurants" component={RestaurantsList} />
          <Route path="/restaurants/:id/review" render={(props) => (<AddReview {...props} user={user} /> )} />
          <Route path="/restaurants/:id" render={(props) => ( <Restaurant {...props} user={user} /> )} />
          <Route path="/OpenDoors/login" render={(props) => ( <Login {...props} login={login} /> )} />
          <Route path="/profilePage" component={Profile} />
          <Route path="/signUpPage" component={SignUp} />
          <Route path="/logInPage" component={LogIn} />
          <Route path="/aboutUsPage" component={About} />
          <Route path="/errorPage" component={Error} />
        </Switch>


      {/*

      {console.log(typeof backendData)}
      {
        (typeof backendData == "undefined") ? (
        <p>Loading...</p>
      ) : (
        backendData.map((business, i) => (
          <>
            <h1 key={i}>{business.name}</h1>
            <p key={i}>Located at:</p>
            <p key={i}>{business.address} </p>
            <p key={i}>{business.city}, {business.state} {business.zipcode}</p>
          </>
        ))
        )}
      */}

      <Footer></Footer>

    </div>
  );
}

export default App;
