import * as React from "react";
// import * as ReactDOM from "react-dom";
import "@progress/kendo-theme-material/dist/all.css";
// import "../style2.css";

import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";


import { SignupServiceProvider } from "./xxSignupServiceProvider";
import { SignupServiceP2 } from "./xxSignupServiceP2";
import { SignupServiceP3 } from "./xxSignupServiceP3";
import { SignupServiceP4 } from "./xxSignupServiceP4";
import { SignupServiceP5 } from "./xxSignupServiceP5";
import Banner from "../Banner";

const stepPages = [
  SignupServiceProvider,
  SignupServiceP2,
  SignupServiceP3,
  SignupServiceP4,
  SignupServiceP5,
];

export const SignupServiceP = () => {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([
    { label: "Personal Details", isValid: undefined },
    { label: "Eligibility", isValid: undefined },
    { label: "Evidence of Expertise", isValid: undefined },
    { label: "References", isValid: undefined },
    { label: "Pricing & Availability", isValid: undefined },
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const isPreviousStepsValid =
    steps
      .slice(0, step)
      .findIndex((currentStep) => currentStep.isValid === false) === -1;

  const onStepSubmit = React.useCallback(
    (event) => {
      const { isValid, values } = event;

      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));

      setSteps(currentSteps);
      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isLastStep && isPreviousStepsValid && isValid) {
        alert(JSON.stringify(values));
      }
    },
    [
      step,
      steps,
      setSteps,
      setStep,
      setFormState,
      isLastStep,
      isPreviousStepsValid,
    ]
  );

  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );

  return (
    <>
      <Banner />
      <div className="signup-word">
        <p>
          Sign Up by following the process to join <b>Dasuns </b> community of
          service providers
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stepper value={step} items={steps} />

        <Form
          initialValues={formState}
          onSubmitClick={onStepSubmit}
          render={(formRenderProps) => (
            <div style={{ alignSelf: "center" }}>
              <FormElement style={{ width: 1000 }}>
                {stepPages[step]}
                {/* <span
                style={{ marginTop: "40px" }}
                className={"k-form-separator"}
              /> */}
                <div
                  style={{
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
                  // className={"k-form-buttons k-buttons-end"}
                  className={"form-buttons"}
                >
                  {/* <span style={{ alignSelf: "center" }}>
                  Step {step + 1} of 5
                </span> */}
                  <div className="step-buttons" >
                    {step !== 0 ? (
                      
                      <Button
                        style={{ marginRight: "16px", background: "gray" }}
                        onClick={onPrevClick}
                      >
                        Back to Previous
                      </Button>
                    ) : undefined}
                    <Button
                      success={true}
                      disabled={isLastStep ? !isPreviousStepsValid : false}
                      onClick={formRenderProps.onSubmit}
                      style={{ color: "#fff", background: "#35d187", width: '20%'}}
                      // height: 40, 
                      // justifyContent: 'center', 
                      // alignItems: 'center',
                      // position: 'absolute',
                      // bottom: 10}}
                    >
                      {isLastStep ? "Submit" : "Save & Continue"}
                    </Button>
                  </div>
                </div>
              </FormElement>
            </div>
          )}
        />
      </div>
    </>
  );
};
// ReactDOM.render(<App />, document.querySelector("my-app"));
