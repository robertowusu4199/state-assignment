import logo from './logo.svg';
import './App.css';
import {Component, useState} from 'react'

 function App() {
  const [state, setState] = useState({age:46})
  const handleClick = () => {
    // console.log('button clicked')
    let newAge = state.age + 4;
    setState({age:newAge});
  }

   return (
     <div>
       <h1>Age is {state.age}</h1>

       <button onClick={handleClick}>Click me!!!</button>
     </div>
   );
 }


// class App extends Component{
//   constructor(){
//     super();
//     this.state = {age: 45};
//   }
//   handleClick = ()=>{
//     // console.log('button clicked')
//     let newAge = this.state.age + 1;
//     this.setState({age:newAge});
//   }
//   render(){

//     return(
//       <div>
//         <h1>Age is {this.state.age}</h1>
//         <button onClick={this.handleClick}>Click me!!!</button>
//       </div>

//     );

//   }

  
  

// }

export default App;
