import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Avatar, Button} from '@fluentui/react-northstar';
import axios from 'axios' ;

import './assets/css/font-awesome.min.css'
import './assets/css/main.css'
import avatar from "./images/avatar.jpg" 
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
    total: 10,
    num_of_cars: [1, 1, 1, 1, 1, 1]
  }

  render() {
    return (
      <div id="wrapper">

					<header id="header">
						{/* <span class="avatar"><img src={avatar} alt="" /></span> */}
						<h1>This is <strong>SBU Parking</strong></h1>
						{/* <ul class="icons">
							<li><a href="#" class="icon style2 fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="#" class="icon style2 fa-facebook"><span class="label">Facebook</span></a></li>
							<li><a href="#" class="icon style2 fa-instagram"><span class="label">Instagram</span></a></li>
							<li><a href="#" class="icon style2 fa-500px"><span class="label">500px</span></a></li>
							<li><a href="#" class="icon style2 fa-envelope-o"><span class="label">Email</span></a></li>
						</ul> */}
					</header>

					<section id="main">

							<section class="thumbnails">
								<div>
									<a>
										<img src="images/thumbs/01.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
									<a>
										<img src="images/thumbs/02.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
								</div>
								<div>
									<a>
										<img src="images/thumbs/03.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
									<a>
										<img src="images/thumbs/04.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
									<a>
										<img src="images/thumbs/05.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
								</div>
								<div>
									<a>
										<img src="images/thumbs/06.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
									<a>
										<img src="images/thumbs/07.jpg" alt="" />
										<h3>Lorem ipsum dolor sit amet</h3>
									</a>
								</div>
							</section>

					</section>

					<footer id="footer">
						<p>&copy; SBU Parking</p>
					</footer>

			</div>
    )
  }
}



export default App;
