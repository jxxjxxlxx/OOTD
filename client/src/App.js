import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from './pages/Home&Landing/Landing/Landing';
import Home from "./pages/Home&Landing/Home/Home";
import UserProfile from "./pages/Auth/UserProfile/UserProfile";
import DILG from "./pages/MainPages/DILG";
import CreateDILG from "./pages/Create/CreateDILG";
import PlzHelp from "./pages/MainPages/PlzHelp"
import CreatePlzHelp from "./pages/Create/CreatePlzHelp";
import EditDILG from "./pages/Edit/EditDILG";
import EditPlzHelp from "./pages/Edit/EditPlzHelp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/" component={Landing}/>
       <Route exact path="/home" component={Home}/>

        <Route exact path="/ilookgood" component={DILG}/>
        <Route exact path="/plzhelp" component={PlzHelp}/>

        <Route exact path="/ilookgood/post" component={CreateDILG}/>
        <Route exact path="/plzhelp/post" component={CreatePlzHelp}/>

        <Route exact path="/ilookgood/:id/edit" component={EditDILG}/>
        <Route exact path="/plzhelp/:id/edit" component={EditPlzHelp}/>

        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>

        <Route exact path="UserProfile" component={UserProfile}/>
        
      </Switch>
    </div>
  );
}

export default App;
