import React from 'react';
import { Provider } from 'react-redux';
import Login from '../Features/Login';
import store from '../Store';
import { I18nProvider, LOCALES } from '../i18n';

export default function Routes() {
  return (
    <Provider store={store}>
      <I18nProvider locale={LOCALES.brazil}>
        <Login />
      </I18nProvider>
    </Provider>
  );
}
