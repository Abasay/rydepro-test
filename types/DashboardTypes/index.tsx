/** @format */

export interface SettingsProps {
  setHeadingText: string;
  setSubHeadingText: string;
  isSettingsClicked: boolean;
  isSecurityOptionsClicked: boolean;
  isLanguageClicked: boolean;
  securityOptions: {
    isPinManagementClicked: boolean;
    isPassphraseManagement: boolean;
    isChangePasswordClicked: boolean;
    isConfirmPasswordPageActive: boolean;
    isUserVerifiedforChangePassword: boolean;
    isChangeAccountRecoveryCodeClicked: boolean;
    isConfirmAccountRecoveryCodePageActive: boolean;
    isUserVerifiedForRecoveryCode: boolean;
    isDeleteAccountClicked: boolean;
    isDeleteAccountConfirmationPageActive: boolean;
    isDeleteConfirmationPopUpActive: boolean;
    pinManagement: {
      isPinClicked: boolean;
      isConfirmPinClicked: boolean;
      isChangePinClicked: boolean;
      isPinCreatedSuccessfully: boolean;
      isUserVerified: boolean;
    };
    passPhrase: {
      isUserVerifiedForPassphrase: boolean;
      isChangePassphraseClicked: boolean;
      isAutoGeneratePassphraseClicked: boolean;
      isManuallyCreatePassphraseClicked: boolean;
    };
  };
}
