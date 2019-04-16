import React from 'react';
import Button from './ButtonComponent.jsx';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
     // this.buttonClcik = this.buttonClcik.bind(this);
   };
  
   render() {
      return (
         <div>
            <Button  />
            <input type="text" placeholder="Enter width for button" />
         </div>
      );
   }
}

export default App;