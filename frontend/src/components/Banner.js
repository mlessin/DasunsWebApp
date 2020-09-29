import React, { Component } from 'react'
import Logo from '../images/Logo.png'
// import styles from './styles.module.css';


export class Header extends Component {
    render() {
        return (
            <div>
                <div >
                <img src={Logo} alt={"logo"} />
                </div>
            </div>
        )
    }
}

export default Header