'use client'

import {HeaderBase} from './HeaderBase';
import {useTranslation} from '../../i18n/client';
// import { useParams } from 'next/navigation'

export function Header({locale, path}: Readonly<{
    locale: string;
    path: string;
}>) {
    const {i18n} = useTranslation(locale, 'common');

    return <HeaderBase i18n={i18n} locale={locale} path={path}/>
}

// if you like to avoid prop drilling, you can do so with useParams()
// export function Header({ path }: {
//   path: string;
// }) {
//   const params = useParams<{ locale: string; }>()
//   const { i18n } = useTranslation(params.locale, 'header')
//   return <HeaderBase i18n={i18n} locale={params.locale} path={path} />
// }
