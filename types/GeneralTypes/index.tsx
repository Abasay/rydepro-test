/** @format */

export interface SignUpProps {
  email: string;
  password: string;
  confirmPassword: string;
  isSignUpButtonClicked: boolean;
  isOTPVerificationPageActive: boolean;
  isSetAccountRecoveryPageActive: boolean;
  isConfirmAccountRecoveryPageActive: boolean;
  recoveryCode: string;
  showOnboardUser: boolean;
}

export interface LoginProps {
  email: string;
  isSignInPageActive: boolean;
  isLoginUsingEmailPageActive: boolean;
  isLoginUsingPinPageActive: boolean;
  isLoginUsingPassphrasePageActive: boolean;
}

export interface ResetProps {
  email: string;
  isAccountRecoveryPageActive: boolean;
  isRecoverAccountUsingEmailAndRecoveryCodePageActive: boolean;
  isVerificationCodePageActive: boolean;
  isSetNewPasswordPageActive: boolean;
  isConfirmPasswordPageActive: boolean;
}
