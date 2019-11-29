

import React, { Component } from 'react';

import axios from 'axios';
import './App.css';
import SearchBar from './pics/components/SearchBar';


export default class App extends Component {

  //can be empty string or null
    state = { images: [] }; 


    async onSearchSubmit(term) {
       const response = await axios
        .get('https://api.unsplash.com/search/photos', {

          params: { query: term }, 

          //AUTHORIZATION
          headers: {
            Authorization: 'Client-ID #'
          }
        })
        
        //RETURNS A PROMISE
        .then( response => {
          console.log(response.data.results)

        })

      this.setState({ images: response.data.results });

    }

    render() {
      return (
      
      <div className="ui container" style={{ marginTop: 30 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
      )
    }
  
  }
























// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import axios from 'axios';
// import './App.css';


// import SearchBar from './pics/components/SearchBar';


// export default class App extends Component {
  
//   //so this will make a request over to the unsplash API and unsplash will return a JSON object back to us
//     onSearchSubmit(term) {
//         //use get network request to the endpoint -> /search/photos
//         //this get function is going to take 2 args (address where we make get request, object with bunch of actions that will get customized with this request. )
//         //url specifies where we want to make a get request to. 
//         //to get access to the api, next is we need to identify ourselves in who is trying to access the unsplash api - unsplash developers/documentation/authorization/header
//         axios.get('https://api.unsplash.com/search/photos', {
//           //these are the second argument the options object:
//           //params represents different query string parameters we want to add into this request.
//           //query is a search term from the documentation 
//           params: { query: term }, // => /search/photos/query=whateverissearched ex. cars
//           //authorization
//           headers: {
//             Authorization: 'Client-ID d8a1e116aa87d822113cf1bd303dae9e07ad88f1f0429664c6a26f378f87218e'
//           }
//         }).then( response => {
//           //callback function that will be called some time in the future of whatever is got back from our api request
//           console.log(response.data.results)

//         })
//         //to notify that the request is done, we need to create some notification.
//         //first is to find the axios call, whenever we create a request to axios, it will return an object called promise. A promise is an object that essentially will give us a little notification when some amount of work of network request is completed.
//         //so, we chain on a .then() function, this .then() is going to be called some time in the future, and we pass this with arrow function, and will be called some time in the future. 


//     }

//     render() {
//       return (
      
//       <div className="ui container" style={{ marginTop: 30 }}>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//       </div>
//       )
//     }
  
//   }

//======================================== SEASON APP ===================


// import SeasonDisplay from './SeasonDisplay';
// import Spinner from './Spinner';
// import Clock from './Clock';


// state = {
//   lat: null, errorMessage: ''
// }

//   //if we define a function in our class this function will automatically called one time, when  our component gets first rendered on the screen
//   componentDidMount() {
//     //to setup or do some initial loading or something we want to do one time or a wide variety of conditions
//     console.log('My component was rendered to the screen')

//       window.navigator.geolocation.getCurrentPosition( //we call geolocation here

//            //and we provided this callback function
//           position => this.setState({ lat: position.coords.latitude }),
//           err => this.setState({ errorMessage: err.message })
//       );
//   }



//   //when componentDidUpdate is called, render is also called. so render will always be called many many times on every update
//   componentDidUpdate(){
//     console.log('My component was just updated - it rerendered! ')

//   }

//   componentWillUnmount() {
//     // when we no longer want to use or render this component then we would want to use this lifecycle method 
//   }

//   renderContent() {

//     //no latitude have error message
//     if ( this.state.errorMessage && !this.state.lat) {
//       return <div style={{ padding: 50}}> Error: <h2 style={{ color: 'red', fontSize: 40 }}>{this.state.errorMessage}</h2> </div>
//     }


//     //have latitude no errorMessage
//     if (!this.state.errorMessage && this.state.lat) {
//     return <SeasonDisplay lat={this.state.lat} />

//     }

//     // no latitude no errormessage    
//     return <Spinner  message="Please accept the location request..."/>
//   }



//   //render is also a method and its always required.
//   render () {
//    return (
//      <div style={{borderColor:'red'}}>

//         <div style={{fontSize: 30, padding: 10, paddingBottom: 20 }} >
//           <Clock />
//         </div>

//        {this.renderContent()}
       
//      </div>
//    ) 
//   }
  
// }

// //default or alternate value for our Spinner/Loading component we would need to create this so we can reuse this property over and over when needed - so in this example, if we dont pass a message props, this will be the default value. 
// Spinner.defaultProps = {
//   message: 'Loading...'
// };

// export default App;


//======================================== SEASON APP ===================

// import React from 'react';
// import './App.css';
// //import faker from 'faker';
// import CommentDetail from './CommentDetail';
// import ApprovalCard from './ApprovalCard';

// function App() {
//   return (
//     <>
//         <div className="ui container comments">
//             <ApprovalCard>
//                 <CommentDetail
//                     author="Ann"
//                     timeAgo="Today at 4:45PM"
//                     content="Hello I'm Ann!"
//                     avatar={faker.image.avatar()}
//                 />
//             </ApprovalCard> 
            
//             <ApprovalCard>
//                 <CommentDetail
//                     author="Jennifer"
//                     timeAgo="Today at 4:45PM"
//                     content="Hi! I'm Jennifer!"
//                     avatar={faker.image.avatar()}
//                 />
//             </ApprovalCard>

//             <ApprovalCard>
//                 <CommentDetail
//                     author="Thomas"
//                     timeAgo="Today at 4:45PM"
//                     content="Hi I'm Thomas!"
//                     avatar={faker.image.avatar()}
//                 />
//             </ApprovalCard>
           
//         </div>
//     </>
//   );
// }

// export default App;
