import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import CalendarHeader from './header';
import Item from './item';
import createDateObjects from './createDateObjects';

import styles from './calendar.scss';

class Calendar extends Component {
    static propTypes = {
        weekOffset: PropTypes.number,
        time: PropTypes.string,
        date: PropTypes.object,
        onPickDate: PropTypes.func,
    };

    static defaultProps = {
        weekOffset: 0,
        time: 'month',
        date: moment(),
    };

    state = {
        scrollLeft: 0,
    };

    onBodyScroll = ({ target }) => {
        const scrollLeft = target.scrollLeft;
        if (scrollLeft !== this.state.scrollLeft) {
            this.setState(state => ({
                scrollLeft,
            }));
        }
    };

    onPickDate = date => {
        const { onPickDate } = this.props;
        onPickDate && onPickDate(date);
    };

    initCalendarHeader = time => {
        switch (time) {
            case 'month':
                return moment.weekdaysShort(true);
            case 'year':
                return moment.monthsShort(true);
            default:
                return moment.weekdaysShort(true);
        }
    };

    render() {
        const { scrollLeft } = this.state;
        const { weekOffset, time, date } = this.props;

        return (
            <div className={styles.calendar}>
                <CalendarHeader
                    time={time}
                    scrollLeft={scrollLeft}
                    items={this.initCalendarHeader(time)}
                />
                <div onScroll={this.onBodyScroll} className={styles.grid}>
                    <div className={styles.items}>
                        {createDateObjects(date, time, weekOffset).map(
                            (item, i) => {
                                return (
                                    <Item
                                        time={time}
                                        headerItemsLength={
                                            this.initCalendarHeader(time).length
                                        }
                                        onPickDate={this.onPickDate}
                                        {...item}
                                        key={`${item.date.format()}-${i}`}
                                    />
                                );
                            },
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;
