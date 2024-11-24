import {i18n} from 'i18next'
import Link from 'next/link'
import {languages} from '../../i18n/settings'
import {Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Logout from '../Logout';
import Login from '../Login';
import {useIsLoggedIn} from '../../utils/hooks';

export const HeaderBase = ({i18n, locale, path = '/'}: Readonly<{
   i18n: i18n;
   locale: string;
   path?: string;
}>) => {
    const t = i18n.getFixedT(locale, 'common');

    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
                <Link href="/">
                    <NavbarBrand href={path}>
                        <FontAwesomeIcon icon={["fas", "fire-flame-curved"]}/> Edilkamin
                    </NavbarBrand>
                </Link>
                <NavbarToggle/>
                <NavbarCollapse>
                    <Nav className="mr-auto">
                        <NavLink href="https://github.com/AndreMiras/edilkamin">
                            <FontAwesomeIcon icon={["fab", "github-alt"]}/> {t('about')}
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
                {languages.filter((l) => locale !== l).map((l, index) => {
                    return (
                        <span key={l}>
                        {index > 0 && (' or ')}
                            <Link href={`/${l}${path}`}>
                            {l}
                        </Link>
                    </span>
                    )
                })}
                {/*{useIsLoggedIn() === true ? (*/}
                {/*    <div className="ms-auto">*/}
                {/*        <Logout locale={locale}/>*/}
                {/*    </div>*/}
                {/*) : (*/}
                    <Login locale={locale} />
                {/*)}*/}
            </Container>
        </Navbar>
    )
}
