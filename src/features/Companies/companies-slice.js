import {createSlice} from '@reduxjs/toolkit';

export const companiesSlice = createSlice({
    name: '@@companies',
    initialState: [
        {id: 21, title: 'Sephora', qty: 23, address: 'Beketova str., 23', selected: true},
        {id: 22, title: 'HOTE', qty: 30, address: 'Sobinova str., 45', selected: false},
        {id: 23, title: 'UMBRELLA', qty: 15, address: 'Lyadova pl., 11', selected: false},
    ],
    reducers: {
        selectCompany: (state, action) => {
            const id = action.payload;
            state
                .filter(company => company.id !== id)
                .forEach(company => company.selected = false);
            const company = state.find(company => company.id === id);
            company.selected = !company.selected;
        },
        selectAllCompanies: (state, action) => {
            state.forEach(company => company.selected = !action.payload);
        }
    }
});

export const {selectAllCompanies, selectCompany} = companiesSlice.actions;
export const companies = companiesSlice.reducer;

export const selectCompanies = (state) => state.companies.filter(company => company.selected === true);