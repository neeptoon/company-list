import {configureStore} from '@reduxjs/toolkit';

import {companies} from './features/Companies/companies-slice';
import {workers} from './features/Workers/workers-slice';

export const store = configureStore({
    reducer: {
        companies,
        workers
    },
    devTools: true,
});