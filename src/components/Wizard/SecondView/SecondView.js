import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAddress, updateCity, updateState, updateZip } from '../../../ducks/reducer';
import './SecondView.css';

class SecondView extends Component {
    constructor() {
        super();
        this.state = {
            showStep: true
        }
    }
    render() {
        const { updateAddress, updateCity, updateState, updateZip } = this.props;
        let styles = { display: this.state.showStep === true ? 'none' : 'flex' }
        return (
            <div className="firstView">
            
                <h4>Step 2</h4>
                <div className="stepIconDiv">
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={true}>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                </div>
                <div className="secondViewMidContainer">
                    <div className="addressDiv">
                        <h4 className="address">Address</h4>
                        <input className="locationInputAddress" type="text" onChange={ (e) => updateAddress(e.target.value)} value={this.props.address}/>
                    </div>
                    <div className="cityStateDiv">
                        <div className="cityDiv">
                            <h4 className="city">City</h4>
                            <input className="locationInput" type="text" onChange={ (e) => updateCity(e.target.value)} value={this.props.city}/>
                        </div>
                        <div className="stateDiv">
                            <h4 className="state">State</h4>
                            <input className="locationInput" type="text" onChange={ (e) => updateState(e.target.value)} value={this.props.state}/>
                        </div>
                    </div>
                    <div className="zipDiv">
                        <h4 className="zipCode">Zip Code</h4>
                        <input className="locationInput" type="text" onChange={ (e) => updateZip(e.target.value)} value={this.props.zip}/>
                    </div>
                    <div className="backAndForthButtons">
                        <Link to="/wizard/1"><button className="stepButtons">Previous Step</button></Link>
                        <Link to="/wizard/3"><button className="stepButtons">Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { address, city, states, zip } = state;

    return {
        address,
        city,
        states,
        zip
    }
}
export default connect(mapStateToProps, { updateAddress, updateCity, updateState, updateZip})(SecondView);