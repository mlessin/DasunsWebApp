import React, { Component } from 'react';

import SPReg1 from './SPReg1';
import SPReg2 from './SPReg2';
import SPReg3 from './SPReg3';
import SPReg4 from './SPReg4';
import SPReg5 from './SPReg5';

export class ServiceReg extends Component {
    state = {
        step:1,
        fullName:"",
        phone:"", 
        email:"", 
        nin:"", 
        dob:"", 
        gender:"", 
        PhyAdd:"",
    }

    //go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step +1
        });
    }

    //back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step -1
        });
    }

    //Handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const { step } = this.state;
        const { fullname, phone, email, nin, dob, gender, PhyAdd, } = this.state;
        const values = { fullname, phone, email, nin, dob, gender, PhyAdd, }
        
        switch(step) {
            case 1:
                return(
                    <SPReg1 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )

            case 2:
                return(
                    <SPReg2 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3:
                return(
                    <SPReg3 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 4:
                return(
                    <SPReg4 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 5:
                return(
                    <SPReg5 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
        }
    }
}

export default ServiceReg
