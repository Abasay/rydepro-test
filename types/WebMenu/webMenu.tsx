/** @format */

export interface WebMenuTypes {
  MenuSubOptions: {
    account: boolean;
    shareAccount: boolean;
    bookingHistory: boolean;
    settings: boolean;
    rewardProgram: boolean;
    referralProgram: boolean;
  };
  emergency: {
    emergencyContact: string;
    emergencyNumber: number | string | any;
  };
  ServiceOptions: {
    miles: boolean;
  };
  bar: {
    isBarClicked: boolean;
  };
}
