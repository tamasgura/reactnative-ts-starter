import { NavigationActions } from 'react-navigation';

interface INavigators {
  rootNavigator: any;
}

const navigators: INavigators = {
  rootNavigator: null,
};

export const setNavigator = (navigator: keyof INavigators, navigatorRef: any) => {
  navigators[navigator] = navigatorRef;
};

export const navigate = (routeName: string, params?: {}, navigator: keyof INavigators = 'rootNavigator') => {
  // tslint:disable:no-console
  console.log(`Navigating to ${routeName} using ${navigator}`);
  navigators[navigator].dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
