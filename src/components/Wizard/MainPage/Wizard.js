import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import './Wizard.css';


export default class Wizard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wizard">
                <NavBar />
                <div className="register">
                    <div className="centerDivRegister">
                        <div className="headerDiv">
                            <h3 className="addNewListingTitle">Add new listing</h3>
                            <button className="cancelListing">Cancel</button>
                        </div>

                            {this.props.children}

                    </div>
                </div>
            </div>
        )
    }
}


