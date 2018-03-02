import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { userId, updateAddress } from '../../ducks/reducer';
import './Dashboard.css';



class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            properties: [],
            desiredRent: 0,
            addresses: []
        }
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount')
        axios.get(`/api/properties?propid=${this.props.id}&desiredRent=0`).then(res => {
            console.log(res.data)
            this.setState({
                properties: res.data
            })
        })
    }

    filterRent(e) {
        this.setState({
            desiredRent: e
        })
    }

    executeFilter() {
        axios.get(`/api/properties?propid=${this.props.id}&desiredRent=${this.state.desiredRent}`).then(res => {
            this.setState({
                properties: res.data
            })
        })
    }

    deleteProperty(address) {
        axios.delete(`/api/properties/${address}`).then(res => {
            axios.get(`/api/properties?propid=${this.props.id}&desiredRent=${this.state.desiredRent}`).then(res => {
                this.setState({
                    properties: res.data
                })
            })
        })
    }

    render() {
        const { userId, updateAddress } = this.props;

        let userProps = this.state.properties.map((val, i) => {
            console.log(this.state.properties);
            // this.state.addresses.push(val.address);
            return <div key={i} className="propertyDiv">
                <div className="dashboardPropertyImage">
                    <img src={val.image} className="dashboardPropertyImageImage" />
                </div>
                <div className="propNameAndDesc">
                    <h4>{val.name}</h4>
                    <p>{val.description}</p>
                </div>
                <hr className="infoDivider" />
                <div className="majorityPropInfo">
                    <p>{`Loan: $${val.loan_amount}`}</p>
                    <p>{`Monthly Mortgage: $${val.mortgage}`}</p>
                    <p>{`Recommended Rent: $`}</p>
                    <p>{`Desired Rent: ${val.desired_rent}`}</p>
                    <p>{`Address: ${val.address}`}</p>
                    <p>{`City: ${val.city}`}</p>
                    <p>{`State: ${val.state}`}</p>
                    <p>{`Zip: ${val.zip_code}`}</p>
                </div>
                <div className="deleteButtonDiv">
                    <button value={val.id} className="deleteButton" onClick={ () => this.deleteProperty(val.id)}>X</button>
                </div>
            </div>
        })
        return (
            <div className="registerComponent">
                <NavBar />
                <div className="register">
                    <div className="centerDivRegister">
                        <div className="addNewPropertyDiv">
                            <Link to="/wizard/1"><button className="addNewPropertyButton">Add New Property</button></Link>
                            <div className="filterDiv">
                                <p>List properties with "desired rent" greater than: $</p>
                                <input className="dashboardPrice" placeholder="0" onChange={e => this.filterRent(e.target.value)} />
                                <button className="dashboardFilterButton" onClick={() => this.executeFilter()}>Filter</button>
                                <button className="dashboardResetButton">Reset</button>
                            </div>
                        </div>

                        <hr className="dividerLine" size="1px" />

                        <div className="listingsDiv">
                            <div className="homeListingTitleDiv">
                                <h3 className="homeListingsTitle">Home Listings</h3>
                            </div>
                            <div className="listOfProperties">
                                {userProps}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { id, address } = state;
    return {
        id,
        address
    }
}
export default connect(mapStateToProps, { userId, updateAddress })(Dashboard)