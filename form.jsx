import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
        newUser: {
          name: '',
          email: '',
          age: '',
          gender: '',
          expertise: '',
          about: ''
  
        },
  
        genderOptions: ['Male', 'Female', 'Others'],
        skillOptions: ['Programming', 'Development', 'Design', 'Testing']
    }  
      this.updateState = this.updateState.bind(this);
      this.handleFullName= this.handleFullName.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   handleFullName(e) {
    let value = e.target.value;
    
   }
   render() {
      return (
         <div>
            <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} />
            <h4>{this.state.data}</h4>

            <form>
                <label>
                Name:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <Input type='text'
               title= 'Full Name'
               name= 'textInput'
               value={this.state.newUser.name} 
               placeholder = 'Enter your name'
               /> 

            <Input type='numer'
               title= 'Age'
               name= 'ageInput'
               value={this.state.newUser.age} 
               placeholder = 'Enter your age'
               /> 
         </div>
      );
   }
}

class Input extends React.Component {
    render(){
        return (
            <div className="form-group">
    <label htmlFor={this.props.name} className="form-label">{this.props.title}</label>
    <input
      className="form-input"
      id={this.props.name}
      name={this.props.name}
      type={this.props.type}
      value={this.props.value}
      onChange={this.props.handleChange}
      placeholder={this.props.placeholder} 
    />
  </div>
        );
    }
}
export default App;
