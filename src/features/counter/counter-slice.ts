//  DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    incremented(state) {
      // It's okay to mutate because of "Immer".
      state.value++;
    },
    ammountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    }
    // decrement

    // reset

  }
});

export const { incremented, ammountAdded } = counterSlice.actions;

export default counterSlice.reducer;