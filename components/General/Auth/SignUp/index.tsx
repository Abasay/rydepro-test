/** @format */

import React from 'react';
import Homepage from '@/components/General/Home/homepage';
import SignUp from '@/components/General/Auth/SignUp/signup';
import OTPVerification from '@/components/General/Auth/SignUp/OTPVerification';
import SetAccountRecovery from '@/components/General/Auth/SignUp/SetAccountRecovery';
import ConfirmAccountRecovery from '@/components/General/Auth/SignUp/ConfirmAccountRecovery';
import SignIn from '@/components/General/Auth/SignIn/signin';
import EmailLogin from '@/components/General/Auth/SignIn/EmailLogin';
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
