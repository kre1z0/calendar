import moment from 'moment';

import styles from './item.scss';

export default function createDateObjects(
    date,
    time = 'month',
    weekOffset = 0,
) {
    if (time === 'month') {
        const startOfMonth = date.startOf(time);

        let diff = startOfMonth.weekday() - weekOffset;
        if (diff < 0) diff += 7;

        const prevMonthDays = [];
        for (let i = 0; i < diff; i++) {
            prevMonthDays.push({
                date: startOfMonth.clone().subtract(diff - i, 'days'),
                classNames: styles.prevMonthDay,
            });
        }

        const currentMonthDays = [];
        for (let i = 1; i < date.daysInMonth() + 1; i++) {
            currentMonthDays.push({
                date: moment([date.year(), date.month(), i]),
            });
        }

        const daysAdded = prevMonthDays.length + currentMonthDays.length - 1;

        const nextMonthDays = [];
        let i = 1;
        while ((daysAdded + i) % 7 !== 0) {
            nextMonthDays.push({
                date: currentMonthDays[currentMonthDays.length - 1].date
                    .clone()
                    .add(i, 'days'),
                classNames: styles.nextMonthDay,
            });

            i += 1;
        }

        return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
    } else if (time === 'year') {
        const startOfYear = date.startOf(time);

        const months = [];
        for (let i = 0; i < moment.monthsShort().length; i++) {
            months.push({
                date: startOfYear.clone().add(i, 'month'),
            });
        }
        return [...months];
    }
}
