import {createSlice} from '@reduxjs/toolkit';

export const companiesSlice = createSlice({
    name: '@@companies',
    initialState: [
        {id: 21, title: 'Sephora', qty: 23, address: 'Beketova str., 23', selected: false},
        {id: 22, title: 'HOTE', qty: 30, address: 'Sobinova str., 45', selected: false},
        {id: 23, title: 'UMBRELLA', qty: 15, address: 'Lyadova pl., 11', selected: false},
    ],
    reducers: {
        selectCompany: (state, action) => {
            const id = action.payload;
            const company = state.find(company => company.id === id);
            company.selected = !company.selected;
        },
        selectAllCompany: (state, action) => {
            state.forEach(company => company.selected = !company.selected);
        }
    }
});

export const {selectAllCompany, selectCompany} = companiesSlice.actions;
export const companies = companiesSlice.reducer;