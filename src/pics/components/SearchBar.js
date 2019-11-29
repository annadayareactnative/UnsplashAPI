

import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = { 
        term: ''
    }

    onFormSubmit = (event) =>  {

        event.preventDefault();

        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <h1 style={{ color: 'red', textAlign: 'center' }}>Pinterest</h1>
                <form onSubmit= {this.onFormSubmit} className="ui form" >
                   <div className="field">
                       <label style={{ textAlign: 'center', fontSize: 31, paddingTop: 40, paddingBottom: 20 }}>Find your daily inspiration</label>
                        <input placeholder="Search here..." 
                            type="text" 
                            value={this.state.term}
                            onChange={ e => this.setState({ term: e.target.value })}
                            
                        /> 
                    </div>
                </form>
            </div>
        )
    }
}
















// import React, { Component } from 'react';

// export default class SearchBar extends Component {

// //we can do this or we can do an arrow function like what we did below.
//     // onInputChange(event) {
//     //     console.log(event.target.value);
//     // }

//     state = { 
//         term: ''
//     }

// /* 
// fixing the cannot read property of undefined by   
//     - we can define our constructor inside our class, since we will not going to extend ( class App extends Component ) then we don't have to call super()

//     - we can do binding, so we can bind:
//     this.drive = this.drive.bind(this);

//     when we bind a function, it is going to produce a new version of that function. 
//     so this newly produce version of our function will now be equal to 'this.' 
    
//     so now, this new version of our function will then overwrite our broken/old this.drive or 'this.'

//     1. define the constructor
//     2. bind them that will then overwrite the existing one to produce new version

// */

// //using arrow function, it will make sure that our this. will always equal to our searchBar, using arrow function it will automatically bind our function to the state. 
//     onFormSubmit = (event) =>  {
//         //this will keep the form/browser from trying to submit the form automatically, and in the process submit automatically.  
//         event.preventDefault();

//         console.log(this.state.term);
//     }

//     render() {
//         return (
//             <div className="ui segment">
//                 <h1 style={{ color: 'red', textAlign: 'center' }}>Pinterest</h1>
//                 {/* we have already added arrow function for our onformsubmit function so there is no need to use arrow function here, we can just do reference. */}
//                 {/* <form onSubmit= {(event) => this.onFormSubmit(event)} className="ui form" > */}
//                 <form onSubmit= {this.onFormSubmit} className="ui form" >
//                    <div className="field">
//                        <label style={{ textAlign: 'center', fontSize: 31, paddingTop: 40, paddingBottom: 20 }}>Find your daily inspiration</label>
//                         <input placeholder="Search here..." 
//                             type="text" 
//                             value={this.state.term}
//                             onChange={ e => this.setState({ term: e.target.value })}
//                             // onChange={(e) => console.log(e.target.value)}
//                         /> 
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

