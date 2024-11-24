'use client'

import {useErrorContext} from '../context/error';
import {AlertError} from './AlertError';

export const Errors = ({locale}: {locale: string}): JSX.Element => {
    const {errors, setErrors} = useErrorContext();
    const removeIndex = (index: number) =>
        setErrors(errors.filter((error, i) => i !== index));

    return (
        <>
            {errors.map(({title, body}, index) => (
                <AlertError
                    key={body}
                    title={title}
                    body={body}
                    onClose={() => removeIndex(index)}
                    locale={locale}
                />
            ))}
        </>
    );
}
