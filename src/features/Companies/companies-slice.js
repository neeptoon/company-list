import {createSlice} from '@reduxjs/toolkit';

export const companiesSlice = createSlice({
    name: '@@companies',
    initialState: {
        companies: [
            {id: 21, title: 'Sephora', qty: 23, address: 'Beketova str., 23', selected: false},
            {id: 22, title: 'HOTE', qty: 30, address: 'Sobinova str., 45', selected: false},
            {id: 23, title: 'UMBRELLA', qty: 15, address: 'Lyadova pl., 11', selected: false},
        ],
        selectAll: false,
        selectedCompany: null
    },
    reducers: {
        selectCompany: (state, action) => {
            const id = action.payload;
            state.companies
                .filter(company => company.id !== id)
                .forEach(company => company.selected = false);
            const company = state.companies.find(company => company.id === id);
            company.selected = !company.selected;
            state.selectAll = false;
            state.selectedCompany = state.companies.find(company => company.id === id);
        },
        selectAllCompanies: (state, action) => {
            state.companies.forEach(company => company.selected = !action.payload);
            state.selectAll = !state.selectAll;
            state.selectedCompany = null;
        }
    }
});

export const {selectAllCompanies, selectCompany} = companiesSlice.actions;
export const companies = companiesSlice.reducer;

export const selectCompanies = (state) => state.companies.companies;
export const selectAll = (state) => state.companies.selectAll;
export const selectedCompany = state => state.companies.selectedCompany?.title;