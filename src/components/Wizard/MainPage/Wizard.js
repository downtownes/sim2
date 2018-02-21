import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import './Wizard.css';


export default function Wizard (props) {

        return (
            <div className="wizard">
                <NavBar />
                <div className="register">
                    <div className="centerDivRegister">
                        <div className="headerDiv">
                            <h3 className="addNewListingTitle">Add new listing</h3>
                            <button className="cancelListing">Cancel</button>
                        </div>

                            {props.children}

                    </div>
                </div>
            </div>
        )
    }



