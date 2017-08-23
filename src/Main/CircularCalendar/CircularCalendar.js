import React, { Component } from 'react';
import styles from './CircularCalendar.scss';
import { CircularSlider } from 'circular-slider';
import processDate from './processDate';

class CircularCalendar extends React.Component {
	constructor (props){

		super(props);

		var dateObject = processDate(props.initialDate);
		this.day = dateObject.day 
		this.totalDays = dateObject.numberOfDays; 
		this.month = dateObject.month;
		this.dayPortion = 360/(this.totalDays);
		
		this.state={
			angle: 270 + this.getAngle()
		}
		console.log(this.month)
	}

	handleAngleChange(angle) {
		this.setState({ angle });
		var a = (angle%360 +90)%360;
		console.log(processDate(this.props.initialDate).day)
	}

	getDay(angle) {

		return Math.floor(((angle%360 +90)%360) / this.dayPortion)+1;
	}

	getAngle() {
		
		return this.day * this.dayPortion;
	}

  
  	render() {
  		var selectedDays =  this.props.selectedValues.map((value) => {
  			return Number(value.split(" ")[1]); 
  		});
  		console.log(selectedDays);
	    return (
	    	<div className={styles.container}>
		    	<div className={styles.innerCircle + ' '+ (selectedDays.indexOf(this.getDay(this.state.angle)) > -1 ? styles.selected : "") }>
		    		<div>{this.month}</div>
		    		<div>{this.getDay(this.state.angle)}</div>
		    		
		    	</div>
			    <CircularSlider
			        angle={this.state.angle}
			        onMove={angle => this.handleAngleChange(angle)}
			        showArc = {true}
			        showNeedle = {false}
			        arcStart={0}
			        arcEnd={359.9}
			        r={150}
			        color="#808080"
		      />
		    </div>
	    );
 	}
}

export default CircularCalendar; 