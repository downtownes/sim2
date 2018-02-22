import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ThirdView.css';


export default class ThirdView extends Component {
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
                <h4>Step 3</h4>
                <div className="stepIconDiv">
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={true}>✓</p></div></div>                    
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                </div>
                <div className="thirdViewMainContainer">
                    <div className="imagePreviewContainer">
                        <img className="imagePreview" alt="Preview" />
                    </div>
                    <div className="imageURLDiv">
                        <h4 className="imageURL">Image URL</h4>
                        <input className="imageInput" />
                    </div>
                    <div className="backAndForthButtons">
                        <Link to="/wizard/2"><button className="stepButtons">Previous Step</button></Link>
                        <Link to="/wizard/4"><button className="stepButtons">Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}