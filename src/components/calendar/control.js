import React from 'react';

import Select from '../../components/select';
import { PrevIcon, NextIcon } from '../icons';

import styles from './control.scss';

const Control = ({
    date,
    time,
    onPrev,
    onNext,
    onChangePeriod,
    pickedDate,
}) => {
    return (
        <div className={styles.control}>
            <div>
                <h1 className={styles.title}>Календарь</h1>
                <span className={styles.pickedDate}>{pickedDate}</span>
            </div>
            <div className={styles.main}>
                <div className={styles.label}>Период:</div>
                <Select
                    className={styles.select}
                    value={time}
                    onChange={onChangePeriod}
                    items={[
                        { text: 'Месяц', value: 'month' },
                        { text: 'Год', value: 'year' },
                    ]}
                />
                <div className={styles.currentDate}>
                    <span>{date.format('MMMM YYYY')}</span>
                </div>
                <PrevIcon
                    className={styles.icon}
                    onTouchTap={onPrev}
                    style={{ marginRight: '20px' }}
                />
                <NextIcon className={styles.icon} onTouchTap={onNext} />
            </div>
        </div>
    );
};

export default Control;
