import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';

import injectTapEventPlugin from 'react-tap-event-plugin';

import moment from 'moment';
import numeral from 'numeral';

import 'numeral/locales/ru';
import 'moment/locale/ru';

injectTapEventPlugin();

moment.locale('ru');
moment.updateLocale('ru', {
    monthsShort: 'Янв.Фев.Мар.Апр.Май.Июн.Июл.Авг.Сен.Окт.Ноя.Дек'.split('.'),
});
numeral.locale('ru');

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./Root', () => render(Root));
}
