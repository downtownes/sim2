import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FifthView.css';


export default class FifthView extends Component {
    constructor() {
        super();
        this.state = {
            showStep: true
        }
    }
    render() {
        let styles = { display: this.state.showStep === true ? 'none' : 'flex' }
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
                        <h5>Recommend Rent</h5>
                    </div>
                    <div>
                        <h4 className="imageURL">Desired Rent</h4>
                        <input className="imageInput" />
                    </div>
                    <div className="backAndForthButtons">
                        <Link to="/wizard/4"><button className="stepButtons">Previous Step</button></Link>
                        <Link to="/dashboard"><button className="completeButton">Complete</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}