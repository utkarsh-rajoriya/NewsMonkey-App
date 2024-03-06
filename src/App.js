import React, { Component } from "react";
import NewsComponent from "./Components/News-Component";
import Navbar from "./Components/Navbar";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
    // constants
    pageSize = 8;

  constructor() {
    super();
    this.state = ({
      mode: "light",
      style:{color : "black" , backgroundColor:"white"},
      progress : 0,
    });
  }

  changeMode = () => {
    if (this.state.style.color === "black") {
      this.setState({
        mode: "dark",
        style:{color : "white" , backgroundColor:"black"},
      });
      document.body.style.backgroundColor="black";
    } else {
      this.setState({
        mode: "light",
        style:{color : "black" , backgroundColor:"white"},
      });
      document.body.style.backgroundColor="white";
    }
  };
 
  setProgress=(current)=>{
   this.setState({progress : current})
  } 

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <Navbar Mode={this.state.mode} toogleMode = {this.changeMode} ></Navbar>
        
        <Routes>
        <Route exact path="/" element={<NewsComponent setProgress={this.setProgress} key="general" theme={this.state.style} pageSize ={this.pageSize} catogery={"general"} />}></Route>
        <Route exact path="/general" element={<NewsComponent setProgress={this.setProgress} key="general" theme={this.state.style} pageSize ={this.pageSize} catogery={"general"} />}></Route>
        <Route exact path="/business" element={<NewsComponent setProgress={this.setProgress} key="business"  theme={this.state.style} pageSize ={this.pageSize} catogery={"business"} />} ></Route>
        <Route exact path="/sport" element={<NewsComponent setProgress={this.setProgress} key="sport" theme={this.state.style} pageSize ={this.pageSize} catogery={"sport"} />}></Route>
        <Route exact path="/entertainment" element={<NewsComponent setProgress={this.setProgress} key="entertainment" theme={this.state.style} pageSize ={this.pageSize} catogery={"entertainment"} />}></Route>
        <Route exact path="/health" element={<NewsComponent setProgress={this.setProgress} key="health" theme={this.state.style} pageSize ={this.pageSize} catogery={"health"} />}></Route>
        <Route exact path="/science" element={<NewsComponent setProgress={this.setProgress} key="science" theme={this.state.style} pageSize ={this.pageSize} catogery={"science"} />}></Route>
        <Route exact path="/technology" element={<NewsComponent setProgress={this.setProgress}  key="technology" theme={this.state.style} pageSize ={this.pageSize} catogery={"technology"} />}></Route>
        </Routes>

        </Router>
      </div>
      
    );
  }
}
