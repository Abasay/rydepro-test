/** @format */

import React from 'react';
import Homepage from '@/components/GeneralWEBApp/Home/homepage';
import SignUp from '@/components/GeneralWEBApp/Auth/SignUp/signup';
import OTPVerification from '@/components/GeneralWEBApp/Auth/SignUp/OTPVerification';
import SetAccountRecovery from '@/components/GeneralWEBApp/Auth/SignUp/SetAccountRecovery';
import ConfirmAccountRecovery from '@/components/GeneralWEBApp/Auth/SignUp/ConfirmAccountRecovery';
import SignIn from '@/components/GeneralWEBApp/Auth/SignIn/signin';
import EmailLogin from '@/components/GeneralWEBApp/Auth/SignIn/EmailLogin';
import { useSignUpContext } from '@/contexts/signupContext';
import { useGeneralLogInContext } from '@/contexts/loginContext';
import OnboardUser from './Onboard';

const Index = () => {
  const { signUp, isHomePageActive } = useSignUpContext();

  return (
    <React.Fragment>
      {/* {isHomePageActive && <Homepage />} */}
      {/**Sign Up Logic */}
     
      {signUp.isSignUpButtonClicked && <SignUp />}
      {signUp.isOTPVerificationPageActive && <OTPVerification />}
      {signUp.isSetAccountRecoveryPageActive && <SetAccountRecovery />}
      {signUp.isConfirmAccountRecoveryPageActive && <ConfirmAccountRecovery />}
      {signUp.showOnboardUser && <OnboardUser />}
      {/**Sign In Logic */}
    </React.Fragment>
  );
};

export default Index;
