import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.buttonClcik = this.buttonClcik.bind(this);
   };
   buttonClcik() {
      var item = "setState..."
      var myArray =this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray});
      console.log(this.state)
   };
   render() {
      return (
         <div>
            <button onClick = {this.buttonClcik}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}
export default App;