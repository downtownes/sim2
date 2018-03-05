import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import { Link } from 'react-router-dom';
import './Wizard.css';


export default function Wizard ({children}) {



        return (
            <div className="wizard">
                <NavBar />
                <div className="register">
                    <div className="centerDivRegister">
                        <div className="headerDiv">
                            <h3 className="addNewListingTitle">Add new listing</h3>
                            <Link to="/dashboard"><button className="cancelListing">Cancel</button></Link>
                        </div>

                            {children}

                    </div>
                </div>
            </div>
        )
    }



