import { ipcRenderer } from 'electron';

const initialState = {
    counter: 0
}

const counterReducer = (state=initialState, action) => {

    if(action.type === 'INCREMENT'){
        let newVal = state.counter + 1;
        // example calling the IPC Renderer in electron
        // and sending the counter value back to the main process
        // set in electron-index.js
        ipcRenderer.send('test:added', newVal);
        return {
            ...state,
            counter: newVal
        }
    }
    else if(action.type === 'DECREMENT'){
        let newVal = (state.counter === 0) ? 0 : state.counter - 1;
        // example calling the IPC Renderer in electron
        // and sending the counter value back to the main process
        // set in electron-index.js
        ipcRenderer.send('test:added', newVal);
        return {
            ...state,
            counter: newVal
        }
    }

    return state;
};

export default counterReducer;