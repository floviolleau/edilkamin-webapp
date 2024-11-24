import React from 'react';
import {Card} from 'react-bootstrap';
import {useDeviceInfosContext} from '../context/device-infos';
import {useTranslation} from '../i18n';

const EnvironmentInfos = async ({locale}: { locale: string }): Promise<JSX.Element> => {
    const {t} = await useTranslation(locale, 'common')
    const deviceInfos = useDeviceInfosContext();

    return (
        <Card>
            <Card.Header>
                {t('advanced')}
            </Card.Header>
            <Card.Body>
                <ul>
                    <li>
                        {t('board_temperature')} {deviceInfos?.status.temperatures.board}
                        &deg;
                    </li>
                    <li>{t('environment_temperature')} {deviceInfos?.status.temperatures.enviroment}&deg;</li>
                    <li>
                        {t('environment_1_temperature')} {deviceInfos?.nvm.user_parameters.enviroment_1_temperature}&deg;
                    </li>
                    <li>
                        {t('environment_2_temperature')} {deviceInfos?.nvm.user_parameters.enviroment_2_temperature}&deg;
                    </li>
                    <li>
                        {t('environment_3_temperature')} {deviceInfos?.nvm.user_parameters.enviroment_3_temperature}&deg;
                    </li>
                    <li>{t('is_auto')} {t(String(deviceInfos?.nvm.user_parameters.is_auto))}</li>
                    <li>
                        {t('is_sound_active')} {t(String(deviceInfos?.nvm.user_parameters.is_sound_active))}
                    </li>
                </ul>
            </Card.Body>
        </Card>
    )
};

export default EnvironmentInfos;
