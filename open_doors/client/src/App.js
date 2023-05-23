import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Profile from "./routes/profilePage"
import SignUp from "./routes/signUpPage"
import Home from "./routes/homePage"
import About from "./routes/aboutPage";
import Error from "./routes/errorPage";
import ReviewPage from "./routes/reviewPage";

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import LogIn from "./components/login";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

/*
let getData = () => {
  // TODO: Add useState and useEffect blocks to this body

}
*/

let App = () => {

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

  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div style={{ backgroundColor: '#F7F4BB' }}>

      <div style={{
        display: "flex",
        alignItems: "center",
        listStyle: "none",
        fontFamily: "Quicksand",
        position: "absolute",
        fontSize: "21px",
        top: "20px",
        right: "300px"
      }}>
          <li>
            {user ? (
            <button onClick={logout} style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              listStyle: "none",
              fontFamily: "Quicksand",
              fontSize: "21px",
              backgroundColor: "#507A22",
              color: "#fff",
              border: "none"
            }}> Logout {user.name} </button>
            ) : (
              <Link to={"/logIn"} style={{textDecoration:"none", color:"#fff"}}> Log In </Link>
            )}
          </li>
      </div>

      <Header></Header>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/OpenDoors"]} component={Home} />
          <Route exact path="/restaurants" component={RestaurantsList} />
          <Route path="/restaurants/:id/review" render={(props) => (<AddReview {...props} user={user} /> )} />
          <Route path="/restaurants/:id" render={(props) => ( <Restaurant {...props} user={user} /> )} />
          <Route path="/logIn" render={(props) => ( <LogIn {...props} login={login} /> )} />
          <Route path="/profilePage" render={(props) => (<Profile {...props} user={user} />)} />
          <Route path="/signUpPage" render={(props) => (<SignUp {...props} user={user} />)} />
          <Route path="/aboutUsPage" render={(props) => (<About {...props} user={user} />)} />
          <Route path="/errorPage" render={(props) => (<Error {...props} user={user} />)} />
          <Route path="/reviewPage" render={(props) => (<ReviewPage {...props} user={user} />)} />
        </Switch>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default App;

    /*

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
    */
