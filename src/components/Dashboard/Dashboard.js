import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Dashboard.css';



export default class Dashboard extends Component {
    render() {
        return (
            <div className="registerComponent">
                <NavBar />
                <div className="register">
                    <div className="centerDivRegister">
                        <div className="addNewPropertyDiv">
                            <Link to="/wizard/1"><button className="addNewPropertyButton">Add New Property</button></Link>
                            <div className="filterDiv">
                                <p>List properties with "desired rent" greater than: $</p>
                                <input className="dashboardPrice" placeholder="0" />
                                <button className="dashboardFilterButton">Filter</button>
                                <button className="dashboardResetButton">Reset</button>
                            </div>
                        </div>

                        <hr className="dividerLine" size="1px" />
                        <div className="listingsDiv">
                            <h3 className="homeListingsTitle">Home Listings</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}