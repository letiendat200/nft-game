import { createSlice } from "@reduxjs/toolkit";

export const Connect = createSlice({
    name: "connect",
    initialState: {
      status: 0,
    },
    reducers: {
        updateStatus: (state) => {
            state.status === 0 ? (state.status = 1) : (state.status = 0);
          },
        updateStatusSignin: (state) => {
            state.status = 1;
          },
        updateStatusSignout: (state) => {
            state.status = 0;
          },
        },
    });

    export const connectActions = Connect.actions;
