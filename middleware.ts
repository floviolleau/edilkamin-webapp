import {NextRequest, NextResponse} from 'next/server';
import acceptLanguage from 'accept-language';
import {cookieName, fallbackLocale, languages} from '@/i18n/settings';

acceptLanguage.languages(languages)

export const config = {
    // matcher: '/:locale*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|manifest.json).*)']
}

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) {
        return NextResponse.next();
    }

    let locale: string | undefined | null;
    if (req.cookies.has(cookieName)) {
        locale = acceptLanguage.get(req.cookies.get(cookieName)?.value);
    }

    if (!locale) {
        locale = acceptLanguage.get(req.headers.get('Accept-Language'));
    }

    if (!locale) {
        locale = fallbackLocale;
    }

    // Redirect if locale in path is not supported
    if (
        !languages.some((loc: string) => req.nextUrl.pathname.startsWith(`/${loc}`))
        && !req.nextUrl.pathname.startsWith('/_next')
    ) {
        return NextResponse.redirect(new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url));
    }

    if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer') || '');
        const localeInReferer = languages.find((l: string) => refererUrl.pathname.startsWith(`/${l}`));
        const response = NextResponse.next()

        if (localeInReferer) {
            response.cookies.set(cookieName, localeInReferer);
        }

        return response;
    }

    return NextResponse.next();
}
