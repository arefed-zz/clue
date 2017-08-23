import React, { Component } from 'react';
import CircularCalendar from '../CircularCalendar/CircularCalendar.js'
import styles from './InputView.scss';
import { Link } from 'react-router-dom'; 
import data from '../../DummyData.js';

class InputView extends Component {

	render (){
		return (
			<div className={styles.content}>
				<div><CircularCalendar initialDate={new Date()} selectedValues={data()}/></div>
				
				<Link className={styles.buttonLink} to={'/detail'}>Calendar</Link>
				
			</div>)
	}
}

export default InputView;