import {createSlice} from '@reduxjs/toolkit';

export const workersSlice = createSlice({
    name: '@@workers',
    initialState: {
        workers: [
            {id: 31, name: 'Alex', surname: 'Bolt', position: 'QA', company: 'Sephora', selected: false},
            {id: 32, name: 'John', surname: 'Palmer', position: 'back', company: 'HOTE', selected: false},
            {id: 33, name: 'Tim', surname: 'Goose', position: 'coder', company: 'UMBRELLA', selected: false},
            {id: 34, name: 'Jack', surname: 'Duck', position: 'front', company: 'Sephora', selected: false},
            {id: 35, name: 'Robert', surname: 'Polson', position: 'CEO', company: 'UMBRELLA', selected: false},
            {id: 36, name: 'Pol', surname: 'Smith', position: 'coder', company: 'UMBRELLA', selected: false},
            {id: 37, name: 'Tom', surname: 'Preston', position: 'designer', company: 'Sephora', selected: false},
            {id: 38, name: 'Helena', surname: 'Harper', position: 'designer', company: 'Sephora', selected: false},
            {id: 38, name: 'Nataly', surname: 'Grin', position: 'frontend', company: 'HOTE', selected: false},
        ],
        selectAll: false,
    },

    reducers: {
        selectWorker: (state, action) => {
            const id = action.payload;
            const worker = state.workers.find(worker => worker.id === id);
            worker.selected = !worker.selected;
            state.selectAll = false;
        },
        selectAllWorkers: (state, action) => {
            state.workers.forEach(worker => worker.selected = !action.payload);
            state.selectAll = !state.selectAll;
        }
    }
});

export const {selectAllWorkers, selectWorker} = workersSlice.actions;
export const workers = workersSlice.reducer;

export const selectWorkers = (state) => state.workers.workers;
export const selectAll = (state) => state.workers.selectAll;