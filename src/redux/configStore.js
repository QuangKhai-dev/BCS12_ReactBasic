import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./slices/pokemonSlice";
import dienThoaiSlice from "./slices/dienThoaiSlice";
import userSlice from "./slices/userSlice";
import xiNgauSlice from "./slices/xiNgauSlice";

export const store = configureStore({
  reducer: {
    hoTen: () => {
      return "Quang Khải";
    },
    pokemonSlice,
    dienThoaiSlice,
    userSlice,
    xiNgauSlice,
  },
});
