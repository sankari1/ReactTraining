import React, { Component } from 'react';
class App extends Component{
   render(){
      var age = 12;

      return(
         <div>
            <h1>Hello World</h1>
            <p>Sample program in react</p>
            <div>{1+2}</div>
            <div>{age>=18?"Eligible for Voting":"Not eligible for voting"}</div>
         </div>
      );
   }
}

export default App;  