import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Avatar, Button} from '@fluentui/react-northstar';
import axios from 'axios' ;
import map from './images/map.png'

import './assets/css/font-awesome.min.css'
import './assets/css/main.css'
// "assets/js/jquery.min.js"
// "assets/js/jquery.poptrox.min.js"
// "assets/js/skel.min.js"
// "assets/js/main.js"

// class App extends Component{
  
//   handleClick=()=>{
//     console.log("clicked");
//     let  url="http://127.0.0.1:5000"
//   axios.get(url)
//     .then(function (response) {
//       let data =response.data
//       console.log(data);

//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }

//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <Button content="Click Here" onClick={this.handleClick}/>
//       </div>
//     );
//   }
// }



class App extends Component {

  state = {
	  cars:{0:10, 1:10, 2:10, 3:10, 4:10, 5:10, 6:10, 7:10}
  }

  handleProcess=(parkingLot)=>{
	// alert("hahaha");
	let  url="http://127.0.0.1:5000/"+parkingLot
  	axios.get(url)
    .then(function (response) {
	  let data =response.data
	  this.setState(state=>({
		  ...state,
		  cars:{...this.state.cars, [parkingLot]: data}
		}));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div id="wrapper">

			<header id="header">
				{/* <span class="avatar"><img src={avatar} alt="" /></span> */}
				<h1>This is <strong>SBU Parking</strong></h1>
			</header>
			<aside className="left">
					<img src={map} className="photo"/>
			</aside>
			<section className="right">
				<section class="thumbnails">
					<div>
						<a onClick={()=>this.handleProcess(1)}>
							<img src="images/thumbs/01.jpg" alt=""/>
							<h3>{this.state.cars[1]}</h3>
						</a>
						<a onClick={()=>this.handleProcess(2)}>
							<img src="images/thumbs/02.jpg" alt=""/>
							<h3>{this.state.cars[2]}</h3>
						</a>
					</div>
					<div>
						<a onClick={()=>this.handleProcess(3)}>
							<img src="images/thumbs/03.jpg" alt=""/>
							<h3>{this.state.cars[3]}</h3>
						</a>
						<a onClick={()=>this.handleProcess(4)}>
							<img src="images/thumbs/04.jpg" alt=""/>
							<h3>{this.state.cars[4]}</h3>
						</a>
						<a onClick={()=>this.handleProcess(5)}>
							<img src="images/thumbs/05.jpg" alt=""/>
							<h3>{this.state.cars[5]}</h3>
						</a>
					</div>
					<div>
						<a onClick={()=>this.handleProcess(6)}>
							<img src="images/thumbs/06.jpg" alt=""/>
							<h3>{this.state.cars[6]}</h3>
						</a>
						<a onClick={()=>this.handleProcess(7)}>
							<img src="images/thumbs/07.jpg" alt=""/>
							<h3>{this.state.cars[7]}</h3>
						</a>
					</div>
				</section>
				<footer id="footer">
					<p>&copy; SBU Parking</p>
				</footer>
			</section>

		</div>
    )
  }
}



export default App;
