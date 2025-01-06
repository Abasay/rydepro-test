/** @format */

'use client';
import { useResetContext } from '@/contexts/resetContext';
import React from 'react';
import AccountRecovery from '@/components/GeneralWEBApp/AccountRecovery/recovery';
import Homepage from '@/components/GeneralWEBApp/Home/homepage';
import EmailCodeAccountRecovery from '@/components/GeneralWEBApp/AccountRecovery/emailAccount';
import VerificationCode from '@/components/GeneralWEBApp/AccountRecovery/verificationCode';
import SetPassword from '@/components/GeneralWEBApp/AccountRecovery/setPassword';
import ConfirmPassword from '@/components/GeneralWEBApp/AccountRecovery/confirmPassword';

const Index = () => {
  const { reset, isHomePageActive } = useResetContext();
  return (
    <React.Fragment>
      {/* {isHomePageActive && <Homepage />} */}
      {reset.isAccountRecoveryPageActive && <AccountRecovery />}
      {reset.isRecoverAccountUsingEmailAndRecoveryCodePageActive && (
        <EmailCodeAccountRecovery />
      )}
      {reset.isVerificationCodePageActive && <VerificationCode />}
      {reset.isSetNewPasswordPageActive && <SetPassword />}
      {reset.isConfirmPasswordPageActive && <ConfirmPassword />}
    </React.Fragment>
  );
};

export default Index;
