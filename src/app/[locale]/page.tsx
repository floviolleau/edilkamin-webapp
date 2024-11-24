import React from 'react';
import {Container} from 'react-bootstrap';
import {fallbackLocale, languages} from '../../i18n/settings'
import {ErrorContextProvider} from '../../context/error';
import {TokenContextProvider} from '../../context/token';
import {DeviceInfosContextProvider} from '../../context/device-infos';
import {Header} from '../../components/Header';
import {Errors} from '../../components/Errors';
import {Footer} from '../../components/Footer';
// import Home from '../../components/Home';

export default async function Page({params}: Readonly<{
    params: {
        locale: string
    };
}>) {
    let {locale} = await params;
    if (languages.indexOf(locale) < 0) {
        locale = fallbackLocale;
    }

    return (
        <div className="App d-flex flex-column min-vh-100">
            <ErrorContextProvider>
                <TokenContextProvider>
                    <DeviceInfosContextProvider>
                        <Header locale={locale} />
                        <Container className="mt-3">
                            <Errors locale={locale} />
                            {/*<Home locale={locale} />*/}
                        </Container>
                        <Footer />
                    </DeviceInfosContextProvider>
                </TokenContextProvider>
            </ErrorContextProvider>
        </div>
    )
}
