import React from 'react';
import {Viewport} from 'next';
import {dir} from 'i18next';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fallbackLocale, languages} from '../../i18n/settings'
import {useTranslation} from '../../i18n'

import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fab, far, fas);

export async function generateStaticParams() {
    return languages.map((locale: string) => ({locale}));
}

export async function generateMetadata({params}: {
    params: {
        locale: string;
    };
}) {
    let {locale} = await params;
    if (languages.indexOf(locale) < 0) {
        locale = fallbackLocale;
    }

    const {t} = await useTranslation(locale, 'common');
    return {
        title: t('title'),
        description: t('description')
    }
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
}

export default async function RootLayout({children, params}: Readonly<{
    children: React.ReactNode;
    params: {
        locale: string
    };
}>) {
    const {locale} = await params;

    return (
        <html lang={locale} dir={dir(locale)}>
            <body>
                {children}
            </body>
        </html>
    )
}
