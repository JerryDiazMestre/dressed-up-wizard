import React, {useState, FormEvent} from "react";

import UserInformationForm, {User} from './UserInformationForm';
import YourWizardForm, { Wizard } from './YourWizardForm';
import YourSidekickForm, { Sidekick } from './YourSidekickForm';
import ConfirmationStep from "./ConfirmationStep";
import { Stepper, Step, StepLabel } from '@mui/material';


var user: User;
var wizard: Wizard;
var sidekick: Sidekick;

interface userValues {
    user: User, 
    wizard: Wizard, 
    sidekick: Sidekick
}

const forms = [
    UserInformationForm,
    YourWizardForm,
    YourSidekickForm,
    ConfirmationStep
]

const steps = [
    "User Information",
    "Your Wizard",
    "Your Sidekick",
    "Confirmation"
]

export default function SignupFlow() {
    const [formIndex, setFormIndex] = useState(0);
    const [myUserValues, setMyUserValues] = useState<userValues>({user, wizard, sidekick});
    const [test, setTest] = useState<string>('');
    const setNextForm = () => setFormIndex( formIndex + 1);

    const updateUserUserValues = (user: User): void => {
        myUserValues.user = user;
        console.log(myUserValues);
        setNextForm();
    }

    const updateWizardUserValues = (wizard: Wizard): void => {
        myUserValues.wizard = wizard;
        console.log(myUserValues);
        setNextForm()
    }

    const updateSidekickUserValues = (sidekick: Sidekick): void => {
        myUserValues.sidekick = sidekick;
        console.log(myUserValues);
        setNextForm()
    }

    return (
        <>
        <Stepper activeStep={formIndex} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <div>
            { 
                {
                    0: <UserInformationForm onComplete={updateUserUserValues} />,
                    1: <YourWizardForm onComplete={updateWizardUserValues} />,
                    2: <YourSidekickForm />,
                    3: <ConfirmationStep user={myUserValues.user} wizard={myUserValues.wizard} sidekick={myUserValues.sidekick} />
                }[formIndex]
            }
        </div>
        </>
    )
}