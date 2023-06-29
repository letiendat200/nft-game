import { createSlice } from "@reduxjs/toolkit";

export const Game = createSlice({
  name: "game",
  initialState: {
    matchStatus: "",
    userCurrScore: 0,
    compCurrScore: 0,
    round: null,
    userCurrMove: null,
    compCurrMove: null,
    status: 1,
  },
  reducers: {
    updateUserMove: (state, action) => {
      state.userCurrMove = action.payload;
    },
    updateCompMove: (state, action) => {
      state.compCurrMove = action.payload;
    },
    updateRound: (state) => {
      if (state.round < 5) state.round += 1;
    },
    updateStatus: (state) => {
      state.status === 1 ? (state.status = 2) : (state.status = 1);
    },
    resetGame: (state) => {
      state.userCurrMove = state.compCurrMove = state.round = null;
      state.userCurrScore = state.compCurrScore = 0;
      state.matchStatus = "";
      state.status = 1;
    },
    decideWinner: (state) => {
      // rules
      //   1 beats 0,0 beats 2,2 beats 1
      // for 0
      if (state.userCurrMove === 0 && state.compCurrMove === 1) {
        state.compCurrScore++;
        state.matchStatus = "You Lost the round";
      } else if (state.userCurrMove === 0 && state.compCurrMove === 2) {
        state.userCurrScore++;
        state.matchStatus = "You Won the round";
      } else if (state.userCurrMove === 0 && state.compCurrMove === 0) {
        state.matchStatus = "Round Draw";
      }
      // for 1
      if (state.userCurrMove === 1 && state.compCurrMove === 2) {
        state.compCurrScore++;
        state.matchStatus = "You Lost the round";
      } else if (state.userCurrMove === 1 && state.compCurrMove === 0) {
        state.userCurrScore++;
        state.matchStatus = "You Won the round";
      } else if (state.userCurrMove === 1 && state.compCurrMove === 1) {
        state.matchStatus = "Round Draw";
      }
      // for 2
      if (state.userCurrMove === 2 && state.compCurrMove === 0) {
        state.compCurrScore++;
        state.matchStatus = "You Lost the round";
      } else if (state.userCurrMove === 2 && state.compCurrMove === 1) {
        state.userCurrScore++;
        state.matchStatus = "You Won the round";
      } else if (state.userCurrMove === 2 && state.compCurrMove === 2) {
        state.matchStatus = "Round Draw";
      }
    },
    setWinner: (state) => {
      if (state.userCurrScore > state.compCurrScore)
        state.matchStatus = `User Won`;
      else if (state.userCurrScore < state.compCurrScore)
        state.matchStatus = `Computer Won`;
      else state.matchStatus = `Match is Drawn`;
    },
  },
});

export const gameActions = Game.actions;
