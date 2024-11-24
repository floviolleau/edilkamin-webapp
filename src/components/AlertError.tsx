import {Alert} from 'react-bootstrap';
import {ErrorType} from '../context/error';
import {useTranslation} from '../i18n';

interface ErrorProps extends ErrorType {
    locale: string;
    onClose: () => void;
}

export const AlertError = async ({title, body, locale, onClose}: ErrorProps) => {
    const {t} = await useTranslation(locale, 'common')

    return (
        <Alert variant="danger" onClose={onClose} dismissible>
            <Alert.Heading>{title ?? t('error')}</Alert.Heading>
            <p>{body}</p>
        </Alert>
    );
}
