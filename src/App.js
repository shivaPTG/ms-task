import React, { Component } from 'react';
import '../src/styles/styles.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Gifts from './Components/gifts';
import Header  from './Components/Header';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
       categoryType:"All",
      selectType : "All",
      range: 1000.00
    }
  }
  filter=(e)=>{
    this.setState({categoryType:e})
  }
  range=(e)=>{
    this.setState({range:e})
  }
  type=(e)=>{
    this.setState({selectType:e})
  }
 
  render() {
    return (
			<React.Fragment>      
				<Header searchQuerry={this.filter} rangeSearch={this.range} typeSearch={this.type}/>
				<main className="container-fluid wrapper">
      
        <BrowserRouter>        
					<Switch>
						<Route path="/gifts" component={()=><Gifts filterBy={this.state.categoryType} typeFilter={this.state.selectType} rangeFilter={this.state.range}/>} />
						<Redirect from="/" exact to="/gifts" activeClassName='active' />
					</Switch>          
          </BrowserRouter>
      
				</main>
			</React.Fragment>
		);
  }
}

export default App;
