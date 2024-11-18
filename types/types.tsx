/** @format */

import { AuthTypes } from '@/types/Auth/CreateAccountTypes/auth';
import { WebMenuTypes } from '@/types/WebMenu/webMenu';
import {
  LoginProps,
  ResetProps,
  SignUpProps,
} from '@/types/GeneralTypes/index';
import { SettingsProps } from './DashboardTypes';

export interface DefaultGlobalTypes {
  location: {
    latitude: number;
    longitude: number;
  };
  setLocation: ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => void;
  auth: AuthTypes;
  setAuth: ({
    isClicked,
    isPageContrast,
    isGuestClicked,
    createAccount: {
      isCreateAccountClicked,
      emailForCreateAccount,
      onContinue,
      inputtedDigitCodes,
      isDetailsFormActive,
      isDetailsFormFilled,
      isSecureAccountActive,
      isPassPhrasePageActive,
      passPhraseHeader,
      isCreatePassPhraseActive,
      isSetPassword,
      isFeedBackActive,
      isCompleted,
      userDetails: {
        accountType,
        firstName,
        lastName,
        displayName,
        accessibility: { value, label },
        emailAddress,
        phoneNumber,
      },
      secureAccount: { passPhrase, pin, lockYourAccount },
      residencyLocation: { country, state, city, zipCode },
      feedBack: {
        thumbType: { thumbUp, thumbDown },
        comment,
      },
    },
    login: {
      isLoginPageActive,
      email: { isEmailPageActive, email },
      usePassword: { isPasswordPageActive, password, confirmPassword },
      pinCode: { isPinCodePageActive, pincode },
      loginPassphrase: { isLoginPassphraseActive, loginpassphrase },
    },
  }: AuthTypes) => void;
  webMenu: WebMenuTypes;
  setWebMenu: ({
    MenuSubOptions: {
      account,
      shareAccount,
      bookingHistory,
      settings,
      rewardProgram,
      referralProgram,
    },
    emergency: { emergencyContact, emergencyNumber },
    ServiceOptions: { miles },
  }: WebMenuTypes) => void;
  currentPage: string;
  setCurrentPage: (type: string) => void;
  animate: boolean;
  setAnimate: (type: boolean) => void;
  options: any;
  dispatch: (type: any) => void;
  displayMission: boolean;
  setDisplayMission: (type: boolean) => void;
  isBarClicked: boolean;
  setIsBarClicked: (type: boolean) => void;
  textAnimate: number | null;
  setTextAnimate: (type: number | null) => void;
  visibleSubIds: number[];
  setVisibleSubIds: (type: number[]) => void;
}

export interface GeneralWebPageState {
  isSignUpButtonClicked: boolean;
  setIsSignUpButtonClicked: (type: boolean) => void;
  isHomePageActive: boolean;
  setIsHomePageActive: (type: boolean) => void;
  signUp: SignUpProps;
  setSignUp: ({}: SignUpProps) => void;
  signIn: LoginProps;
  setSignIn: ({}: LoginProps) => void;
}

export interface GeneralLoginContext {
  isSignUpButtonClicked: boolean;
  setIsSignUpButtonClicked: (type: boolean) => void;
  isHomePageActive: boolean;
  setIsHomePageActive: (type: boolean) => void;
  signIn: LoginProps;
  setSignIn: ({}: LoginProps) => void;
}

export interface GeneralSignUpContext {
  isSignUpButtonClicked: boolean;
  setIsSignUpButtonClicked: (type: boolean) => void;
  isHomePageActive: boolean;
  setIsHomePageActive: (type: boolean) => void;
  signUp: SignUpProps;
  setSignUp: ({}: SignUpProps) => void;
}

export interface GlobalResetContext {
  isHomePageActive: boolean;
  setIsHomePageActive: (type: boolean) => void;
  reset: ResetProps;
  setReset: ({}: ResetProps) => void;
}

export interface GeneralWebState {
  accountType: string;
  setAccountType: (type: string) => void;
}

export interface GeneralDashboardContext {
  settings: SettingsProps;
  setSettings: ({}: SettingsProps) => void;
  navMap: string[];
  setNavMap: ({}: string[]) => void;
}
