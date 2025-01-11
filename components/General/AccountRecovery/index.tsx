/** @format */

'use client';
import { useResetContext } from '@/contexts/resetContext';
import React from 'react';
import AccountRecovery from '@/components/General/AccountRecovery/recovery';
import Homepage from '@/components/General/Home/homepage';
import EmailCodeAccountRecovery from '@/components/General/AccountRecovery/emailAccount';
import VerificationCode from '@/components/General/AccountRecovery/verificationCode';
import SetPassword from '@/components/General/AccountRecovery/setPassword';
import ConfirmPassword from '@/components/General/AccountRecovery/confirmPassword';

const Index = () => {
  const { reset, isHomePageActive } = useResetContext();
  return (
    <React.Fragment>
      {/* {isHomePageActive && <Homepage />} */}
      {reset.isAccountRecoveryPageActive && <AccountRecovery />}
      {reset.isRecoverAccountUsingEmailAndRecoveryCodePageActive && <EmailCodeAccountRecovery />}
      {reset.isVerificationCodePageActive && <VerificationCode />}
      {reset.isSetNewPasswordPageActive && <SetPassword />}
      {reset.isConfirmPasswordPageActive && <ConfirmPassword />}
    </React.Fragment>
  );
};

export default Index;
