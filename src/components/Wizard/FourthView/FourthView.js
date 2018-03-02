import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoanAmount, updateMortgage } from '../../../ducks/reducer';
import './FourthView.css';

class FourthView extends Component {
    constructor() {
        super();
        this.state = {
            showStep: true
        }
    }
    render() {
        let styles = { display: this.state.showStep === true ? 'none' : 'flex' }
        const { updateLoanAmount, updateMortgage } = this.props;
        return (
            <div className="firstView">
                <h4>Step 4</h4>
                <div className="stepIconDiv">
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={false}>✓</p></div></div>
                    <div className="lightCircle"><div className="checkCircle1"><p hidden={true}>✓</p></div></div>
                    <div className="lightCircle"><div style={styles} className="checkCircle"><p>✓</p></div></div>
                </div>
                <div className="fourthViewMainContainer">
                {/* ALL CLASSES INSIDE THIS DIV CAN BE FOUND on ThirdView.css  */}
                    <div>
                        <h4 className="imageURL">Loan Amount</h4>
                        <input className="imageInput" onChange={ (e) => updateLoanAmount(e.target.value)} value={this.props.loan}/>
                    </div>
                    <div>
                        <h4 className="imageURL">Mortgage</h4>
                        <input className="imageInput" onChange={ (e) => updateMortgage(e.target.value)} value={this.props.mortgage}/>
                    </div>
                    <div className="backAndForthButtons">
                        <Link to="/wizard/3"><button className="stepButtons">Previous Step</button></Link>
                        <Link to="/wizard/5"><button className="stepButtons">Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    const { loan, mortgage } = state;

    return {
        loan,
        mortgage
    }
}
export default connect(mapStateToProps, {updateLoanAmount, updateMortgage })(FourthView);