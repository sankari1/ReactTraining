import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.buttonClcik = this.buttonClcik.bind(this);
   };
   componentWillMount()
   {
      console.log("componentWillMount()");
   }
   componentDidMount()
   {
      console.log("componentDidMount()");
      var valuearray=["num" ,"num1"];
      this.setState({data: valuearray});
   }
   buttonClcik() {
      var item = "setState..."
      var myArray =this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray});
      console.log(this.state)
   };

   render() {
      console.log("render()");
      return (
         <div>
            <button onClick = {this.buttonClcik}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}

export default App;