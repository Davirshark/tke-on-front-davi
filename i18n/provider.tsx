import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './locales';

import messages from './messages';

type ProviderProps = {
  children: React.ReactNode;
  locale: string;
};

const Provider = ({ children, locale = LOCALES.brazil }: ProviderProps) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider;
