/** @format */

import React from 'react';
import SignIn from '@/components/General/Auth/SignIn/signin';
import EmailLogin from '@/components/General/Auth/SignIn/EmailLogin';
import { useGeneralLogInContext } from '@/contexts/loginContext';
import PinLogin from '@/components/General/Auth/SignIn/PinLogin';
import PassphraseLogin from '@/components/General/Auth/SignIn/PassphraseLogin';

const SignInComponent = () => {
  const { signIn } = useGeneralLogInContext();
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

export default SignInComponent;
