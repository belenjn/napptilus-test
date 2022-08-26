import { configureStore } from "@reduxjs/toolkit";
import oompaLoompasReducer from "../features/oompaLoompasSlice";

export default configureStore(
  {
    reducer: {
      oompaLoompas: oompaLoompasReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
