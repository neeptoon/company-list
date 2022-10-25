import {configureStore} from '@reduxjs/toolkit';

import {companies} from './features/Companies/companies-slice';

export const store = configureStore({
    reducer: {
        companies
    },
    devTools: true,
});