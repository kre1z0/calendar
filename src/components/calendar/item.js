import React from 'react';
import cn from 'classnames';
import moment from 'moment';

import styles from './item.scss';

const getFormat = time => {
    switch (time) {
        case 'month':
            return 'D';
        case 'year':
            return 'M';
        default:
            return 'D';
    }
};

const Item = ({
    date,
    classNames,
    onPickDate,
    headerItemsLength,
    item,
    time,
}) => {
    const dayItemPadding = 10;
    return (
        <div
            className={cn(
                styles.item,
                /*styles.dayHasObjects,*/
                date.isSame(moment(), 'day') && styles.currentDay,
                styles[time],
                classNames,
            )}
            onTouchTap={() => onPickDate(date)}
            style={{
                width: `calc(100% / ${headerItemsLength} - ${dayItemPadding}px)`,
                marginBottom: dayItemPadding,
            }}
        >
            <div className={styles.dayMonth}>
                {date.format(getFormat(time))}
            </div>
            <div className={styles.objects}>
                <div className={styles.dash}>-</div>
                {/*<div className={styles.idItem}>Объект 0013</div>*/}
                {/*<div className={styles.idItem}>Объект 0108</div>*/}
                {/*<div className={styles.idItem}>Объект 0132</div>*/}
            </div>
        </div>
    );
};

export default Item;
