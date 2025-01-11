import headPhoneSvg from './svgs/headphone.svg';
import securitySvg from './svgs/security.svg';
import meetingsSvg from './svgs/meetings.svg';
import guardSvg from './svgs/defend.svg';

export const data1: { heading: string; text: string }[] = [
  // {
  //     heading: 'Competitive Earnings',
  //     text: `Maximize your income with our industry-leading fare structures and bonus incentives.
  //     Earn up to $10,000 in ride bonuses annually (based on the number of rides you accept).`
  // },
  {
    heading: 'Freedom & Flexibility',
    text: `Be your own boss. Set your own schedule. Drive on your terms.`,
  },
  {
    heading: 'Fair Pay & Commission',
    text: `RYDEPRO guarantees that livery companies, chauffeurs, and TNC drivers receive their full ride fare payments. For more details, please refer to our <a href='' style='text-decoration: underline'>Driver Payment Terms</a>.`,
  },
  {
    heading: 'No Unfair Deactivation',
    text: `We believe in fair treatment for all our drivers, with no unjust deactivations.`,
  },
  {
    heading: 'Cutting-Edge Technology',
    text: `Our state-of-the art platform makes it easy to find passengers, navigate routes, and manage your business.`,
  },
];

export const supportData: {
  head: string;
  description: { title: string; text: string; icon: any }[];
}[] = [
  {
    head: 'Support',
    description: [
      {
        title: '24/7 Support',
        text: `Our team is always here to assist you.`,
        icon: headPhoneSvg,
      },
      {
        title: 'Safety & Security',
        text: `We actively fight against passenger scams and fraud.`,
        icon: securitySvg,
      },
    ],
  },
];

export const communityData: {
  head: string;
  description: { title: string; text: string; icon: any }[];
}[] = [
  {
    head: 'Community',
    description: [
      {
        title: 'Operators Meetings',
        text: `Participate in Operator Regional Meetings and have a choice to vote and elect regional operators’ representatives to attend meetings with RYDEPRO.`,
        icon: meetingsSvg,
      },
      {
        title: 'Defending Your Rights',
        text: `Stand with all Operators to defend your rights against government legislative regulations that may impact the sector.`,
        icon: guardSvg,
      },
    ],
  },
];
