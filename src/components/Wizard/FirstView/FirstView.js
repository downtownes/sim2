import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateDescription } from '../../../ducks/reducer';
import './FirstView.css';

class FirstView extends Component {
    constructor(props){
        super(props);
        this.state = {
            showStep: true
        }
    }


    render() {
        console.log(this.props)
        const { updateName, updateDescription } = this.props;
        let styles = {display: this.state.showStep === true ? 'none' : 'flex'}
        return (
            <div className="firstView">
                <h4>Step 1</h4>
                <div className="stepIconDiv">
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={true}>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                </div>
                <div className="inputAndTitleDiv">
                    <h4 className="propertyNameTitle">Property Name</h4>
                    <input className="propertyNameInput" type="text" onChange={ (e) => updateName(e.target.value)} value={this.props.name}/>
                    <h4 className="propertyDescTitle">Property Description</h4>
                    <textarea className="propertyDescInput" onChange={ (e) => updateDescription(e.target.value)} value={this.props.description}/>
                </div>
                <Link to={"/wizard/2"}><button className="nextStepStepOne">Next Step</button></Link>
            </div>
        )
    }
}


function mapStateToProps(state){
    const { name, description } = state;

    return {
        //these are the state that is on initial state in the reducer NOT the functions that we are passing down through props
        name,
        description
    }
}


export default connect(mapStateToProps, { updateName, updateDescription })(FirstView);