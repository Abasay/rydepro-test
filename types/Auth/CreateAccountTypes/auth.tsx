/** @format */

export interface AuthTypes {
  isClicked: boolean;
  isPageContrast: boolean;
  isGuestClicked: boolean;
  createAccount: {
    isCreateAccountClicked: boolean;
    emailForCreateAccount: string;
    onContinue: boolean;
    inputtedDigitCodes: number[] | any;
    isDetailsFormActive: boolean;
    isDetailsFormFilled: boolean;
    isSecureAccountActive: boolean;
    isPassPhrasePageActive: boolean;
    passPhraseHeader: string;
    isCreatePassPhraseActive: boolean;
    isFeedBackActive: boolean;
    isSetPassword: boolean;
    isCompleted: boolean;
    userDetails: {
      accountType: string | any;
      firstName: string;
      lastName: string;
      displayName: string;
      accessibility: { value: string; label: string } | any;
      emailAddress: string;
      phoneNumber: string | any;
    };
    isPinCodePageActive;
    secureAccount: {
      passPhrase: string;
      pin: number | string | null | any;
      lockYourAccount: any;
    };
    residencyLocation: {
      country: string | any;
      state: string | any;
      city: string | any;
      zipCode: number | string;
    };
    feedBack: {
      thumbType: {
        thumbUp: boolean;
        thumbDown: boolean;
      };
      comment: string;
    };
  };
  login: {
    isLoginPageActive: boolean;
    email: {
      isEmailPageActive: boolean;
      email: string;
      password: string;
    };
    usePassword: {
      isPasswordPageActive: boolean;
      password: number | string | any;
      confirmPassword: number | string | any;
    };
    pinCode: {
      isPinCodePageActive: boolean;
      pincode: string | number | any;
    };
    loginPassphrase: {
      isLoginPassphraseActive: boolean;
      loginpassphrase: string;
      email: string;
    };
  };
}
