import {useTranslation} from '../../i18n';
import {HeaderBase} from './HeaderBase';

 export const Header = async ({ locale, path }: Readonly<{
    locale: string;
    path?: string;
}>) => {
    const {t, i18n} = await useTranslation(locale, 'common');

    return <HeaderBase i18n={i18n} locale={locale} path={path}/>
}
