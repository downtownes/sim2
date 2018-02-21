import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FirstView.css';

export default class FirstView extends Component {
    render() {
        return (
            <div className="firstView">
                <h4>Step 1</h4>
                <div className="stepIconDiv">
                    {console.log(this.props)}
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={true}>✓</p></div></div>
                    <div className="lightCircle"><div hidden={true}><p className="checkCircle">✓</p></div></div>
                    <div className="lightCircle"><div hidden={true}><p className="checkCircle">✓</p></div></div>
                    <div className="lightCircle"><div hidden={true}><p className="checkCircle">✓</p></div></div>
                    <div className="lightCircle"><div hidden={true}><p className="checkCircle">✓</p></div></div>
                </div>
                <div className="inputAndTitleDiv">
                    <h4 className="propertyNameTitle">Property Name</h4>
                    <input className="propertyNameInput" />
                    <h4 className="propertyDescTitle">Property Description</h4>
                    <input className="propertyDescInput" />
                </div>
                <Link to="/wizard/2"><button className="nextStepStepOne">Next Step</button></Link>
            </div>
        )
    }
}



// --------✓-----------//