/** @format */

import lockIcon from '@/components/General/Auth/SignIn/svgs/lock.svg';
import keyIcon from '@/components/General/Auth/SignIn/svgs/passphrase.svg';
import appleIcon from '@/components/General/Auth/SignIn/svgs/apple.svg';
import googleIcon from '@/components/General/Auth/SignIn/svgs/google.svg';
import emailIcon from '@/components/General/Auth/SignIn/svgs/email.svg';

export const options: readonly { text: string; image: any; as: string }[] = [
  {
    text: 'Pin',
    image: lockIcon,
    as: 'pin',
  },
  {
    text: 'Passphrase',
    image: keyIcon,
    as: 'passphrase',
  },
  {
    text: 'Apple ID',
    image: appleIcon,
    as: 'appleID',
  },
  {
    text: 'Google Account',
    image: googleIcon,
    as: 'googleAccount',
  },
  {
    text: 'Email Account',
    image: emailIcon,
    as: 'email',
  },
];
