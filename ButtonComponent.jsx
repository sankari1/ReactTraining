import React from 'react';

class Button extends React.Component{
    /*constructor() {
        super();
          
        this.state = {
           data: []
        }
    } */
    
    render(){
        var myStyle={
            
            color: "#fff",
            background: "red",
            width: "30px"
        }
       return(
          <div>
             <button  style = {myStyle}> TCX </button>
          </div>
       );
    }
 }
export default Button;