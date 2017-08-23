import React, { Component } from 'react';
import styles from './DetailView.scss';
import data from '../../DummyData.js';
import { Link } from 'react-router-dom'; 

class DetailView extends Component {
	constructor(props){
		super(props); 
	}

	render (){
		var listItems = data().map((value, index) =>
			<div key={index}>{value}</div>
		);

		return (
		<div>
			<Link to={'/'} className={styles.backButton}>Back</Link>
			<div className={styles.list}>
				{listItems}
			</div>
		</div>)
	}
}

export default DetailView;