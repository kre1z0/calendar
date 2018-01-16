import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './select.scss';

class Select extends Component {
    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        onChange: PropTypes.func,
        multi: PropTypes.bool,
        disable: PropTypes.bool,
        items: PropTypes.array,
        big: PropTypes.bool,
        placeholder: PropTypes.string,
        selectItemFormatter: PropTypes.func,
        style: PropTypes.object,
        styleItems: PropTypes.object,
        noCheckbox: PropTypes.bool,
        position: PropTypes.string,
        className: PropTypes.string,
    };

    static defaultProps = {
        placeholder: 'Выберите элемент из списка',
        selectItemFormatter: items => {
            return items.map(item => item.text).join(', ');
        },
        items: [],
        position: 'bottom',
    };

    state = {
        open: false,
    };

    open = () => {
        this.setState({
            open: !this.state.open,
            focus: false,
        });
    };

    selectItem = item => {
        const { value, onChange, multi } = this.props;
        if (multi) {
            const intoValue = value.indexOf(item.value);
            if (intoValue > -1) {
                value.splice(intoValue, 1);
            } else {
                value.push(item.value);
            }
            onChange && onChange(value);
        } else {
            onChange && onChange(item.value);
            this.setState({
                open: false,
            });
        }
    };

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('touchend', this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('touchend', this.handleDocumentClick);
    }

    handleDocumentClick = e => {
        const inside = this.el.contains(e.target);
        let updateState = {
            focus: inside,
        };
        if (!inside) {
            updateState.open = false;
        }
        this.setState(updateState);
    };

    render() {
        const { open, focus } = this.state;
        const {
            value,
            items,
            big,
            multi,
            placeholder,
            selectItemFormatter,
            style,
            noCheckbox,
            disable,
            position,
            styleItems,
            className,
        } = this.props;
        const label = multi
            ? selectItemFormatter(
                  items.filter(item => value.indexOf(item.value) !== -1),
              )
            : items.find(item => item.value === value);

        return (
            <div
                className={cn(styles.select, className, {
                    [styles.disable]: disable,
                })}
                style={style}
                ref={el => (this.el = el)}
            >
                <div
                    onTouchTap={this.open}
                    className={cn(
                        styles.selectField,
                        { [styles.big]: big },
                        { [styles.focus]: focus },
                    )}
                >
                    {(label && (
                        <span>
                            {label.text === undefined ? label : label.text}
                        </span>
                    )) || (
                        <span className={styles.placeholder}>
                            {placeholder}
                        </span>
                    )}
                    <div className={cn(styles.arrow, { [styles.open]: open })}>
                        <svg viewBox="0 0 7 4" height="4" width="7">
                            <polygon points="3.5,4 0,0 7,0 " />
                        </svg>
                    </div>
                </div>
                {open &&
                    ((multi && (
                        <div
                            style={styleItems}
                            className={cn(styles.selectItems, styles[position])}
                        >
                            {items.map((item, index) => {
                                const intoValue =
                                    value.indexOf(item.value) !== -1;
                                return (
                                    <div
                                        key={index}
                                        onTouchTap={() => {
                                            this.selectItem(item);
                                        }}
                                        className={cn(styles.selectItem, {
                                            [styles.big]: big,
                                        })}
                                    >
                                        {noCheckbox && (
                                            <div
                                                className={styles.itemCheckbox}
                                            >
                                                {intoValue && (
                                                    <svg
                                                        width="12"
                                                        height="10"
                                                        viewBox="0 0 10 12"
                                                    >
                                                        <path d="M4.3,9.9c-0.3,0-0.5-0.1-0.7-0.3L0.3,6.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.6,2.6l6-7c0.4-0.4,1-0.5,1.4-0.1  c0.4,0.4,0.5,1,0.1,1.4L5.1,9.5C4.9,9.8,4.6,9.9,4.3,9.9C4.4,9.9,4.3,9.9,4.3,9.9z" />
                                                    </svg>
                                                )}
                                            </div>
                                        )}
                                        <span
                                            className={cn({
                                                [styles.selected]: intoValue,
                                            })}
                                        >
                                            {item.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    )) || (
                        <div
                            style={styleItems}
                            className={cn(styles.selectItems, styles[position])}
                        >
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    onTouchTap={() => {
                                        this.selectItem(item);
                                    }}
                                    className={cn(styles.selectItem, {
                                        [styles.big]: big,
                                    })}
                                >
                                    <span
                                        className={cn({
                                            [styles.selected]:
                                                item.value === value,
                                        })}
                                    >
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        );
    }
}

export default Select;
