import React from 'react';
import cn from 'classnames';

import styles from './header.scss';

const CalendarHeader = ({ scrollLeft, items, time }) => {
    return (
        <div
            style={{
                transform: `translateX(-${scrollLeft}px)`,
            }}
            className={styles.header}
        >
            {items.map((item, i) => {
                return (
                    <div
                        key={`${item}-${i}`}
                        className={cn(styles.item, styles[time])}
                        style={{
                            width: `calc(100% / ${items.length}`,
                        }}
                    >
                        <span>{item}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default CalendarHeader;
