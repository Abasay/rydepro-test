import GeneralDesign from '@/components/General/GeneralDesign';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from '@/components/General/Button';
import { useSignUpContext } from '@/contexts/signupContext';
import styles from '@/styles/stylish.module.css';
import RydeproLogo from '@/public/assets/RydeproLogo.png';
import ellipses from '@/components/General/Auth/SignUp/svgs/ellipses.svg';
import { useFormik } from 'formik';
import CustomInput from '@/components/General/CustomDesigns/Input';
import CustomSelect from '@/components/General/CustomDesigns/Select';

const OnboardUser = () => {
  const { signUp, setSignUp } = useSignUpContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectGenderOpen, setSelectGenderOpen] = useState<boolean>(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState<boolean>(false);
  const [accountTypeOpen, setAccountTypeOpen] = useState<boolean>(false);

  const [initialValues, setInitialValues] = useState({
    accountType: '',
    accessibility: '',
    firstName: '',
    lastName: '',
    middleName: '',
    displayName: '',
    otherLanguage: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    referralCode: '',
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <GeneralDesign>
      <header className={`container h-[70px] flex justify-between px-0 md:px-10 ${styles['fade-in']}`}>
        <div className='inline md:hidden'></div>
        <Image src={RydeproLogo} alt='' className='w-[77px] h-[77px]' width={75} height={52} />
        <Button
          className='md:inline hidden'
          onClick={() => {
            setSignUp({
              ...signUp,
              isOTPVerificationPageActive: false,
              isSignUpButtonClicked: true,
            });
          }}
          value='Back'
        />
        <Image
          src={ellipses}
          width={20}
          height={5}
          alt=''
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className='md:hidden invisible'
        />
      </header>
      <main className={`w-full flex justify-center items-center ${styles['slide-from-bottom']}`}>
        <form
          onSubmit={formik.handleSubmit}
          className='container md:w-[614px]  md:mt-0 min-h-[896px] rounded-[24px] md:p-[48px] flex flex-col gap-[24px]  md:shadow-sm'
        >
          <h1 className=' text-lg font-medium text-[#000000]'>Profile</h1>

          {/** Inputs fields */}
          <div className='flex flex-col md:w-[518px] gap-[24px]'>
            <CustomSelect
              label='Account Type'
              name='accountType'
              type='text'
              value={formik.values.accountType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.accountType && formik.errors.accountType ? formik.errors.accountType : ''}
              touched={formik.touched.accountType}
              selectOpen={accountTypeOpen}
              selections={['Individual', 'Organization']}
              setSelectOpen={setAccountTypeOpen}
            />

            <CustomSelect
              label='Accessibility'
              name='accessibility'
              type='text'
              value={formik.values.accessibility}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.accessibility && formik.errors.accessibility ? formik.errors.accessibility : ''}
              touched={formik.touched.accessibility}
              selectOpen={accessibilityOpen}
              selections={['Wheel Chair', 'Service Dog', 'Sign Language (ASL)', 'Deaf', 'Assistive Devices', 'None']}
              setSelectOpen={setAccessibilityOpen}
            />

            <CustomInput
              label='First Name'
              name='firstName'
              type='text'
              placeholder='First Name'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}
              touched={formik.touched.firstName}
            />

            <CustomInput
              label='Last Name'
              name='lastName'
              type='text'
              placeholder='Last Name'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ''}
              touched={formik.touched.lastName}
            />

            <CustomInput
              label='Middle Name'
              name='middleName'
              type='text'
              placeholder='Middle Name'
              value={formik.values.middleName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.middleName && formik.errors.middleName ? formik.errors.middleName : ''}
              touched={formik.touched.middleName}
            />

            <CustomInput
              label='Display Name'
              name='displayName'
              type='text'
              placeholder='Display Name'
              value={formik.values.displayName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.displayName && formik.errors.displayName ? formik.errors.displayName : ''}
              touched={formik.touched.displayName}
            />

            <CustomInput
              label='Other Language'
              name='otherLanguage'
              type='text'
              placeholder='Select Language'
              value={formik.values.otherLanguage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otherLanguage && formik.errors.otherLanguage ? formik.errors.otherLanguage : ''}
              touched={formik.touched.otherLanguage}
            />

            <CustomInput
              label='Date of Birth'
              name='dateOfBirth'
              type='date'
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.dateOfBirth && formik.errors.dateOfBirth ? formik.errors.dateOfBirth : ''}
              touched={formik.touched.dateOfBirth}
            />

            <CustomSelect
              label='Gender'
              name='gender'
              type='gender'
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.gender && formik.errors.gender ? formik.errors.gender : ''}
              touched={formik.touched.gender}
              selectOpen={selectGenderOpen}
              selections={['Male', 'Female', 'Other']}
              setSelectOpen={setSelectGenderOpen}
            />

            <label htmlFor='email' className='flex flex-col gap-[8px] w-[inherit]'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Email Address</span>
              <input
                name='email'
                id='email'
                type='text'
                required
                className='h-[56px] bg-transparent rounded-[8px] border-b-[1px] py-[12px] px-[16px] md:p-[16px] border-[#DADADA] focus:border-[#111111] placeholder:text-[#8A8A8A] font-normal text-base leading-[24px] outline-none text-[#0E0E0E]'
                disabled
              />
            </label>

            <CustomInput
              label='Phone Number'
              name='phoneNumber'
              type='tel'
              placeholder='Phone Number'
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phoneNumber && formik.errors.phoneNumber ? formik.errors.phoneNumber : ''}
              touched={formik.touched.phoneNumber}
            />

            <label htmlFor='country' className='flex flex-col gap-[8px] w-[inherit]'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Country</span>
              <input
                name='country'
                id='country'
                type='text'
                required
                className='h-[56px] bg-transparent rounded-[8px] border-b-[1px] py-[12px] px-[16px] md:p-[16px] border-[#DADADA] focus:border-[#111111] placeholder:text-[#8A8A8A] font-normal text-base leading-[24px] outline-none text-[#0E0E0E]'
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.country && formik.errors.country ? (
                <p className='text-red-600 text-sm'>{formik.errors.country}</p>
              ) : null}
            </label>

            <label htmlFor='state' className='flex flex-col gap-[8px] w-[inherit]'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>State</span>
              <input
                name='state'
                id='state'
                type='text'
                required
                className='h-[56px] bg-transparent rounded-[8px] border-b-[1px] py-[12px] px-[16px] md:p-[16px] border-[#DADADA] focus:border-[#111111] placeholder:text-[#8A8A8A] font-normal text-base leading-[24px] outline-none text-[#0E0E0E]'
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.state && formik.errors.state ? (
                <p className='text-red-600 text-sm'>{formik.errors.state}</p>
              ) : null}
            </label>

            <label htmlFor='city' className='flex flex-col gap-[8px] w-[inherit]'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>City</span>
              <input
                name='city'
                id='city'
                type='text'
                required
                className='h-[56px] bg-transparent rounded-[8px] border-b-[1px] py-[12px] px-[16px] md:p-[16px] border-[#DADADA] focus:border-[#111111] placeholder:text-[#8A8A8A] font-normal text-base leading-[24px] outline-none text-[#0E0E0E]'
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city ? (
                <p className='text-red-600 text-sm'>{formik.errors.city}</p>
              ) : null}
            </label>

            <label htmlFor='referralCode' className='flex flex-col gap-[8px] w-[inherit]'>
              <span className='text-[14px] leading-[20px] font-medium text-[#0E0E0E]'>Referral Code</span>
              <input
                name='referralCode'
                id='referralCode'
                type='text'
                required
                className='h-[56px] bg-transparent rounded-[8px] border-b-[1px] py-[12px] px-[16px] md:p-[16px] border-[#DADADA] focus:border-[#111111] placeholder:text-[#8A8A8A] font-normal text-base leading-[24px] outline-none text-[#0E0E0E]'
                value={formik.values.referralCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.referralCode && formik.errors.referralCode ? (
                <p className='text-red-600 text-sm'>{formik.errors.referralCode}</p>
              ) : null}
            </label>
          </div>
        </form>
      </main>
    </GeneralDesign>
  );
};

export default OnboardUser;
