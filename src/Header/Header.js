import React, { Component } from 'react';
import styles from './Header.scss';

class Header extends Component {
	render (){
		return (
			<div className={styles.header}>
				<span className={styles.logo}>Clue</span>
			</div>)
	}
}

export default Header;