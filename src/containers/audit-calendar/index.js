import React, { Component } from 'react';
import moment from 'moment';

import Control from '../../components/calendar/control';
import Calendar from '../../components/calendar';

import styles from './audit-calendar.scss';

class AuditCalendar extends Component {
    state = {
        date: moment(),
        time: 'month',
        pickedDate: '',
    };

    handlePrevTime = () => {
        const { date, time } = this.state;

        this.setState({ date: date.clone().subtract(1, time) });
    };

    handleNextTime = () => {
        const { date, time } = this.state;

        this.setState({ date: date.clone().add(1, time) });
    };

    onPickDate = date => {
        this.setState({
            pickedDate: moment(date).format('MMMM Do YYYY'),
        });
    };

    onChangePeriod = time => {
        this.setState({ time });
    };

    render() {
        const { date, time, pickedDate } = this.state;

        return (
            <div className={styles.auditCalendar}>
                <Control
                    pickedDate={pickedDate}
                    date={date}
                    time={time}
                    onPrev={this.handlePrevTime}
                    onNext={this.handleNextTime}
                    onChangePeriod={this.onChangePeriod}
                />
                <Calendar
                    onPickDate={this.onPickDate}
                    date={date}
                    time={time}
                />
            </div>
        );
    }
}

export default AuditCalendar;
