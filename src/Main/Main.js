import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import InputView from './InputView/InputView.js';
import DetailView from './DetailView/DetailView.js';


const listValues = ["Aug 4", "Aug 6", "Aug 2"];

class Main extends Component {
	constructor(props) {
		super(props);
	}


	render (){
		return (
			<main>
			    <Switch>
			      <Route exact path='/' component={InputView}/>
			      <Route path='/detail' component={DetailView}/>
			    </Switch>
		  	</main>)
	}
}

export default Main;