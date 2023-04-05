import { createSlice } from '@reduxjs/toolkit';

const filetrSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filetrSlice.actions;
export const filterReducer = filetrSlice.reducer;
