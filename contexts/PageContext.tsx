/** @format */

'use client';
import React, { useState, useContext, createContext, ReactNode, useEffect, useReducer } from 'react';
import { DefaultGlobalTypes } from '@/types/types';
import { AuthTypes } from '@/types/Auth/CreateAccountTypes/auth';
import { WebMenuTypes } from '@/types/WebMenu/webMenu';
import reducer from '@/components/common/About/reducer';
import { sidebarData } from '@/components/common/About/aboutSidebar';

const PageContextAPI = createContext<DefaultGlobalTypes | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  /**About us */
  const [currentPage, setCurrentPage] = useState('Home');
  const [animate, setAnimate] = useState<boolean>(false);
  const [textAnimate, setTextAnimate] = useState<number | null>(null);
  const [options, dispatch] = useReducer(reducer, sidebarData);
  const [displayMission, setDisplayMission] = useState<boolean>(true);
  const [isBarClicked, setIsBarClicked] = useState<boolean>(false);
  // State to track visible sub-items
  const [visibleSubIds, setVisibleSubIds] = useState<number[]>([]);
  /**end of About us */

  const [auth, setAuth] = useState<AuthTypes>({
    isClicked: false,
    isPageContrast: false,
    isGuestClicked: false,
    createAccount: {
      isCreateAccountClicked: false,
      emailForCreateAccount: '',
      onContinue: false,
      inputtedDigitCodes: [],
      isDetailsFormActive: false,
      isDetailsFormFilled: false,
      isSecureAccountActive: false,
      isPassPhrasePageActive: false,
      passPhraseHeader: '',
      isPinCodePageActive: false,
      isCreatePassPhraseActive: false,
      isSetPassword: false,
      isFeedBackActive: false,
      isCompleted: false,
      userDetails: {
        accountType: '',
        firstName: '',
        lastName: '',
        displayName: '',
        accessibility: { value: '', label: '' },
        emailAddress: '',
        phoneNumber: '',
      },
      secureAccount: {
        passPhrase: '',
        pin: null,
        lockYourAccount: '',
      },
      residencyLocation: {
        country: '',
        state: '',
        city: '',
        zipCode: '',
      },
      feedBack: {
        thumbType: {
          thumbUp: false,
          thumbDown: false,
        },
        comment: '',
      },
    },
    login: {
      isLoginPageActive: false,
      email: {
        isEmailPageActive: false,
        email: '',
        password: '',
      },
      usePassword: {
        isPasswordPageActive: false,
        password: '',
        confirmPassword: '',
      },
      pinCode: {
        isPinCodePageActive: false,
        pincode: '',
      },
      loginPassphrase: {
        isLoginPassphraseActive: false,
        loginpassphrase: '',
        email: '',
      },
    },
  });

  const [webMenu, setWebMenu] = useState<WebMenuTypes>({
    MenuSubOptions: {
      account: true,
      shareAccount: false,
      bookingHistory: false,
      settings: false,
      rewardProgram: false,
      referralProgram: false,
    },
    emergency: {
      emergencyContact: '',
      emergencyNumber: '',
    },
    ServiceOptions: {
      miles: false,
    },
    bar: {
      isBarClicked: false,
    },
  });

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  // useEffect(() => {
  //   if ('geolocation' in navigator) {
  //     const watchId = navigator.geolocation.watchPosition(
  //       (position) => {
  //         setLocation({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         });
  //         console.log(position);
  //       },
  //       (error) => {
  //         console.error('Error getting location:', error);
  //       },
  //       {
  //         enableHighAccuracy: true,
  //         timeout: 5000,
  //         maximumAge: 0,
  //       }
  //     );

  //     // Clean up the watcher when the component unmounts
  //     return () => navigator.geolocation.clearWatch(watchId);
  //   } else {
  //     toast.error(
  //       'Geolocation is not available in this browser. Please use another browser'
  //     );
  //     //Sign Out if already logged in.
  //   }
  // }, []);
  return (
    <PageContextAPI.Provider
      value={{
        auth,
        setAuth,
        webMenu,
        setWebMenu,
        location,
        setLocation,
        currentPage,
        setCurrentPage,
        animate,
        setAnimate,
        options,
        dispatch,
        displayMission,
        setDisplayMission,
        isBarClicked,
        setIsBarClicked,
        textAnimate,
        setTextAnimate,
        visibleSubIds,
        setVisibleSubIds,
      }}
    >
      {children}
    </PageContextAPI.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContextAPI);
  if (context === undefined) {
    throw new Error('context must be within the global Types');
  }
  return context;
};
