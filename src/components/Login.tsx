'use client'

import React, {useCallback, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {signIn} from 'edilkamin';
import {useTokenContext} from '../context/token';
import {ErrorType, useErrorContext} from '../context/error';
import {setTokenLocalStorage} from '../utils/helpers';
import {useTranslation} from '../i18n';

export default async function Login({locale}: { locale: string }): Promise<JSX.Element> {
    // const {t} = await useTranslation(locale, 'common');
    // const [username, setUsername] = useState<string>('');
    // const [password, setPassword] = useState<string>('');
    // const {setToken} = useTokenContext();
    // const {addError} = useErrorContext();

    // const addErrorCallback = useCallback(
    //     (error: ErrorType) => addError(error),
    //     []
    // );
    //
    // const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     return setUsername(e.target.value);
    // }
    //
    // const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     return setPassword(e.target.value)
    // };
    //
    // const onLogin = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
    //     try {
    //         const token = await signIn(username, password);
    //         setTokenLocalStorage(token);
    //         setToken(token);
    //     } catch (error: unknown) {
    //         console.error(error);
    //         if (error instanceof Error) {
    //             addErrorCallback({title: t('unable_login_error'), body: error.message});
    //         } else {
    //             addErrorCallback({body: t('unknown_login_error')});
    //         }
    //     }
    // };
    //
    // const onFormSubmit = (e: React.FormEvent): void => {
    //     return e.preventDefault()
    // };

    return (<>pouet</>
        // <Form className="d-flex" onSubmit={onFormSubmit}>
        //     <Form.Control
        //         placeholder={t('email')}
        //         className="me-2"
        //         aria-label={t('email')}
        //         onChange={onUsernameChange}
        //     />
        //     <Form.Control
        //         type="password"
        //         placeholder={t('password')}
        //         className="me-2"
        //         aria-label={t('password')}
        //         onChange={onPasswordChange}
        //     />
        //     <Button type="submit" onClick={onLogin}>
        //         {t('login')}
        //     </Button>
        // </Form>
    );
}
