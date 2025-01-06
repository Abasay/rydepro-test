/** @format */
import { useDashboardContext } from '@/contexts/DashboardContext';

export const Reducer = (state: any, action: any) => {
  const { setSettings, settings } = useDashboardContext();
  switch (action.type) {
    case 'SET_ACTIVE_LINK':
      const { text, headType } = action.payload;
      if (headType === 'header') {
        if (text === 'Settings') {
          setSettings({ ...settings, isSettingsClicked: true });
        }
        return { ...state, activeLink: action.payload.text };
      }
      if (headType === 'subItem') {
        setSettings({ ...settings, isSettingsClicked: false });
        return { ...state, activeLink: action.payload.text };
      }
  }
  return state;
};
