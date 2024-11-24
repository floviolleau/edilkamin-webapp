import {useEffect, useState} from 'react';
import i18next, {FlatNamespace, KeyPrefix} from 'i18next';
import {
    FallbackNs,
    initReactI18next,
    useTranslation as useTranslationOrg,
    UseTranslationOptions,
    UseTranslationResponse
} from 'react-i18next';
import {useCookies} from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {cookieName, getOptions, languages} from './settings';

const runsOnServerSide = typeof window === 'undefined';

// on client side the normal singleton is ok
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init({
        ...getOptions(),
        lng: undefined, // let detect the language on client side
        detection: {
            order: ['path', 'htmlTag', 'cookie', 'navigator'],
        },
        preload: runsOnServerSide ? languages : []
    })

export function useTranslation<
    Ns extends FlatNamespace,
    KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(
    locale: string,
    ns?: Ns,
    options?: UseTranslationOptions<KPrefix>,
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
    const [cookies, setCookie] = useCookies([cookieName]);
    const ret = useTranslationOrg(ns, options);
    const {i18n} = ret;

    if (runsOnServerSide && locale && i18n.resolvedLanguage !== locale) {
        i18n.changeLanguage(locale);
    } else {
        const [activelocale, setActivelocale] = useState(i18n.resolvedLanguage);
        useEffect(() => {
            if (activelocale === i18n.resolvedLanguage) {
                return;
            }

            setActivelocale(i18n.resolvedLanguage);
        }, [activelocale, i18n.resolvedLanguage]);

        useEffect(() => {
            if (!locale || i18n.resolvedLanguage === locale) {
                return;
            }

            i18n.changeLanguage(locale);
        }, [locale, i18n]);

        useEffect(() => {
            if (cookies.i18next === locale) {
                return;
            }

            setCookie(cookieName, locale, {path: '/'});
        }, [locale, cookies.i18next]);
    }

    return ret;
}
