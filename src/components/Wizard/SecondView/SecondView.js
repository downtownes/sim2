import React, { Component } from 'react';
import './SecondView';

export default class SecondView extends Component {
    constructor(){
        super();
        this.state = {
            showStep: true
        }
    }
    render(){
        let styles = {display: this.state.showStep === true ? 'none' : 'flex'}
        return(
            <div className="firstView">
            <h4>Step 2</h4>
            <div className="stepIconDiv">
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p hidden={true}>✓</p></div></div>
                </div>
            </div>
        )
    }
}