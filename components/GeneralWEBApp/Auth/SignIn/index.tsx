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
import PinLogin from '@/components/GeneralWEBApp/Auth/SignIn/PinLogin';
import PassphraseLogin from '@/components/GeneralWEBApp/Auth/SignIn/PassphraseLogin';

const Index = () => {
  const { signIn, isHomePageActive } = useGeneralLogInContext();
  return (
    <React.Fragment>
      {/* {isHomePageActive && <Homepage />} */}
      {/**Login Logic */}
      {signIn.isSignInPageActive && <SignIn />}
      {signIn.isLoginUsingEmailPageActive && <EmailLogin />}
      {signIn.isLoginUsingPinPageActive && <PinLogin />}
      {signIn.isLoginUsingPassphrasePageActive && <PassphraseLogin />}
    </React.Fragment>
  );
};

export default Index;
