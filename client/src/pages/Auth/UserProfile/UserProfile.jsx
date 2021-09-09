import React, { useState, useEffect } from "react";
import NavMain from "../../../components/NavMain/NavMain";
import { withUser } from "../withUser";
import apiHandler from "../../../api/apiHandler";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import '../../../components/UserProfilePosts/UserProfile.css';
import FormProfile from "../../../Form/FormProfile";
import axios from "axios";

const { service } = apiHandler;

//async function UserProfile() {
//const UserProfile = () => {
class UserProfile extends React.Component {

  //const [ coolPosts, coolpost ] = useState([]);

//  try {
//  
//
//    let data = await Promise.all([
//    fetch('/api/users/me/coolposts'),
//    fetch('/api/users/me/helpposts')
//
//
//  ])
//
//  let userPosts = await data.json();
// } catch(err) {
//   alert (err);
// }
  


  

state = {
   coolPosts: [],
   helpPosts: [],
 }


//const fetchData = () => {
//  const coolPosts = '/api/users/me/coolposts';
//  const helpPosts = '/api/users/me/helpposts';
//
//  const getCoolPosts = axios.get(coolPosts)
//  const getHelpPosts = axios.get(helpPosts)
//  axios.all([getCoolPosts, getHelpPosts])
//       .then(axios.spread((...allData) => {
//          const allCoolPosts = allData[0].data
//          const allHelpPosts = allData[1].config.url;
//
//          coolPost(allCoolPosts)
//          helpPost(allHelpPosts)
//       }))
//}
//
//useEffect(() => {
//  fetchData()
//}, [])

componentDidMount () {

//try {
//    const coolPosts = apiHandler.getUserCoolPosts()
//    const helpPosts = apiHandler.getUserHelpPosts()
//    this.setState({helpPosts, coolPosts})
//} catch(e) {
//  console.log(e)
//}

 // service 
 // .get("/api/users/me/coolposts")
//
 // .then((apiResponse) => {
 //   this.setState({ coolPosts: apiResponse.data });
 //   console.log(this.state.apiResponse.data);
 // })
//
 // .catch((error) => {
 //   console.log(error);
 // })
 //


  //Promise.all([
  //  fetch('/api/users/me/coolposts'), 
  //  fetch('/api/users/me/helpposts')])
  //  .then(([coolPosts, helpPosts]) => {
  //    
  //    return Promise.all([coolPosts.json(),helpPosts.json()])
  //  })
  //  .then(([coolPosts, helpPosts]) => {
  //    this.setState({ userPosts })
  //    console.log(helpPosts)
  //  });

       Promise.all([
         apiHandler.getUserCoolPosts(),
         apiHandler.getUserHelpPosts() 
      
    ])
      .then(result  => {
        
        const [ coolPosts, helpPosts] = result;

        this.setState({ 
           coolPosts,
           helpPosts
           
          });
          console.log(this.state);
      });
     
}


 

   render() {
    return (
      <>
      <NavMain />
      <div className="userProfile">

              {this.state.coolPosts.map((result)=> {
                
                return (
              <div key={result}> 
               <h4> cool post </h4>
                  <Link to={`/ilookgood/${result._id}/edit`}>
                  <img src={result.image} alt="pic here" />
                  </Link>
                  </div>
                        );
                         
                    })}


            
             
      
                    
         {this.state.helpPosts.map((result)=> {
                return (
            <div key={result}> 
             <h4> help post </h4>
                <Link to={`/plzhelp/${result._id}/edit`}>
                <img src={result.image} alt="pic here" />
              </Link>
              </div>
                );
                })} 
                
              
             

      </div>
      <Footer />
      </>
    );
  //}
}

}
export default withUser(UserProfile);
