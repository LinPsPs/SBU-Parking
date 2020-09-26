import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Avatar, Button} from '@fluentui/react-northstar';
import axios from 'axios' ;
import map from './images/map.png'

import './assets/css/font-awesome.min.css'
import './assets/css/main.css'


class App extends Component {

  state = {
    cars:{0:10, 1:10, 2:10, 3:10, 4:10, 5:10, 6:10, 7:10},
    time:1,
    disabled: false,
  }

  
  handleProcess=(parkingLot)=>{
    this.setState({disabled: true})
    // alert("hahaha");
    let  url="http://127.0.0.1:5000/"+parkingLot
    axios.get(url).then((response) => {
      let data =response.data
      console.log(data)
      this.setState({
        cars: data,
        time: this.state.time >= 6 ? 1 : this.state.time + 1,
        disabled: false
      });
    }).catch(function (error) {
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
						<a style={{width:"345%", backgroundColor:'#ffff0036'}} >
							<img src="images/thumbs/01.jpg" alt=""/>
							<h3>{this.state.cars[1] == -1 ? 'No more data at this timestamp' : 'Parking lots left: ' + this.state.cars[1]}</h3>
						</a>
						<a style={{width:"345%", backgroundColor:'#0000ff33'}} >
							<img src="images/thumbs/02.jpg" alt=""/>
							<h3>{this.state.cars[2] == -1 ? 'No more data at this timestamp' : 'Parking lots left: ' + this.state.cars[2]}</h3>
						</a>
            <a style={{width:"345%", backgroundColor:'#ff000040'}} >
							<img src="images/thumbs/03.jpg" alt=""/>
							<h3>{this.state.cars[3] == -1 ? 'No more data at this timestamp' : 'Parking lots left: ' + this.state.cars[3]}</h3>
						</a>
            <a style={{width:"345%", backgroundColor:'#00800033'}} >
							<img src="images/thumbs/06.jpg" alt=""/>
							<h3>{this.state.cars[4] == -1 ? 'No more data at this timestamp' : 'Parking lots left: ' + this.state.cars[4]}</h3>
						</a>
					</div>
					<div>
						<a style={{opacity:"0%"}}>
							<img src="images/thumbs/03.jpg" alt=""/>
							<h3>2</h3>
						</a>
						<a style={{opacity:"0%"}}>
							<img src="images/thumbs/04.jpg" alt=""/>
							<h3>2</h3>
						</a>
						<a style={{opacity:"0%"}}>
							<img src="images/thumbs/05.jpg" alt=""/>
							<h3>2</h3>
						</a>
            <a style={{opacity:"0%"}}>
							<img src="images/thumbs/05.jpg" alt=""/>
							<h3>2</h3>
						</a>
            <a >
              <button 
                onClick={()=>this.handleProcess(this.state.time)}
                disabled={this.state.disabled}
                style={{width: 'inherit'}}>
                click here
              </button>
              <img src="images/thumbs/07.jpg" alt=""/>
							{/* <h3>Click here</h3> */}
						</a>
					</div>
					<div>
						
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
