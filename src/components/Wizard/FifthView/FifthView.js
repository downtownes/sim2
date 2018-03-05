import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { desiredRent, updateName, updateDescription, updateAddress, updateCity, updateState, updateLoanAmount, updateMortgage, updateUrl, updateZip, userId } from '../../../ducks/reducer';
import './FifthView.css';


class FifthView extends Component {
    constructor() {
        super();
        this.state = {
            showStep: true
        }
    }

    completeProperty(){
        let property = {
            //the propid needs to be eqaual to the id of the user
            propid: this.props.id,
            name: this.props.name,
            description: this.props.description,
            address: this.props.address,
            city: this.props.city,
            state: this.props.states,
            zip: this.props.zip,
            url: this.props.url,
            loan: this.props.loan,
            mortgage: this.props.mortgage,
            rent: this.props.rent
        }
        axios.post('/api/properties', property).then(res => {
        })
    }
    render() {
        const { desiredRent, updateName, updateDescription, updateAddress, updateCity, updateState, updateLoanAmount, updateMortgage, updateUrl, updateZip, userId } = this.props;
        let styles = { display: this.state.showStep === true ? 'none' : 'flex' }
        console.log(this);
        return (
            <div className="firstView">
                <h4>Step 5</h4>
                <div className="stepIconDiv">
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={true}>✓</p></div></div>
                </div>
                <div className="fourthViewMainContainer">
                    {/* The h5 tag needs a calculated price. Refer the Step 5 on the ReadMe */}
                    <div className="recommendRentDiv">
                        <h5>{`Recommend Rent $${Math.floor(this.props.mortgage * 0.25 + this.props.mortgage)}`}</h5>
                    </div>
                    <div>
                        <h4 className="imageURL">Desired Rent</h4>
                        <input className="imageInput" onChange={ (e) => desiredRent(e.target.value)} value={this.props.rent}/>
                    </div>
                    <div className="backAndForthButtons">
                        <Link to="/wizard/4"><button className="stepButtons">Previous Step</button></Link>
                        <Link to="/dashboard" onClick={ () => this.completeProperty()}><button className="completeButton">Complete</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { rent, name, description, address, city, states, zip, url, loan, mortgage, id } = state;
    return {
        rent,
        name,
        description,
        address,
        city,
        states,
        zip,
        url,
        loan,
        mortgage,
        id
    }
}

export default connect(mapStateToProps, { desiredRent })(FifthView);