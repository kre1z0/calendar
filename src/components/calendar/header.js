import React from 'react';

import styles from './header.scss';

const CalendarHeader = ({ scrollLeft, items }) => {
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
                        className={styles.item}
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
