import React, {useEffect} from 'react';
import Route from './src/navigations/Route';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {getData} from './src/util/helperFunction';
import {
  changeAppTheme,
  changeLanguage,
} from './src/redux/actions/appSettingAction';

export default function App() {
  useEffect(() => {
    (async function () {
      const theme = await getData('theme');
      const lang = await getData('lang');
      if (!!theme) {
        console.log(typeof theme);
        changeAppTheme(theme.theme);
      }
      if (!!lang) {
        changeLanguage(lang.lan);
      }
    })();
  }, []);
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
