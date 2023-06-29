import { configureStore } from "@reduxjs/toolkit";
import { Game } from "./game";
import {Connect} from './connect'

export const Store = configureStore({
  reducer: {
    game: Game.reducer,
    connect: Connect.reducer,
  },
});
