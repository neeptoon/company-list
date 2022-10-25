import {createSlice} from '@reduxjs/toolkit';

export const workersSlice = createSlice({
    name: '@@workers',
    initialState: [
        {id: 31, name: 'Alex', surname: 'Bolt', position: 'QA', company: 'Sephora', selected: false},
        {id: 32, name: 'John', surname: 'Palmer', position: 'back', company: 'HOTE', selected: false},
        {id: 33, name: 'Tim', surname: 'Goose', position: 'coder', company: 'UMBRELLA', selected: false},
        {id: 34, name: 'Jack', surname: 'Duck', position: 'front', company: 'Sephora', selected: false},
        {id: 35, name: 'Robert', surname: 'Polson', position: 'CEO', company: 'UMBRELLA', selected: false},
    ],
    reducers: {
        selectWorker: (state, action) => {
            const id = action.payload;
            const worker = state.find(worker => worker.id === id);
            worker.selected = !worker.selected;
        },
        selectAllWorkers: (state, action) => {
            state.forEach(worker => worker.selected = !action.payload);
        }
    }
});

export const {selectAllWorkers, selectWorker} = workersSlice.actions;
export const workers = workersSlice.reducer;