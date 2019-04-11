import React, { Component } from 'react';
class App extends Component{

   constructor(){
      super();
      this.state = {
         header: "Header from state...",
         content: "Content from state...",
         age: 12
      }
   }

   render(){

      return(
         <div>
            <h1>Hello World</h1>
            <h1>{this.props.head}</h1>
            <div>{this.state.header}</div>
            <Expression  header="sample header content" content="Sample test content" />
            <Details/>
            <Fields/>
         </div>
      );
   }
}

class Expression extends Component{

   render(){
      var age = 12;

      return(
         <div>
            <p>{this.props.header}</p>
            <div>{1+2}</div>
            <div>{age>=18?"Eligible for Voting":"Not eligible for voting"}</div>
           
         </div>
      );
   }
}
class Details extends Component{
   render(){
      return(
         <div>
            <div>
               <p>
                  <label>Name
                     <input type="text" name="customer_name" required />
                  </label> 
               </p>
            </div>
            <div> 
               <p>
                  <label>Phone 
                     <input type="tel" name="phone_number" />
                  </label>
               </p> 
            </div>

            <div>
               <p>
                  <label>Email
                     <input type="email" name="email_address" />
                  </label>
               </p>  
            </div>
         </div>
      );
   }
}

class Fields extends Component{
   render()
   {
      return(
         <div>


   <div>
<fieldset>
    <legend>Which taxi do you require?</legend>
    <p><label> <input type="radio" name="taxi" required value="car"/> Car </label></p>
    <p><label> <input type="radio" name="taxi" required value="van"/> Van </label></p>
    <p><label> <input type="radio" name="taxi" required value="tuktuk" /> Tuk Tuk </label></p>
  </fieldset>
  </div>

   <div>
  <fieldset>
    <legend>Extras</legend>
    <p><label> <input type="checkbox" name="extras" value="baby" /> Baby Seat </label></p>
    <p><label> <input type="checkbox" name="extras" value="wheelchair" /> Wheelchair Access </label></p>
    <p><label> <input type="checkbox" name="extras" value="tip" /> Stock Tip </label></p>
  </fieldset>
  </div>

  </div>
      );
      }
   }

 
export default App;  