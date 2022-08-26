import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../fetchData";

export const getOompaLoompas = createAsyncThunk(
  "Get all Oompa Loompas",
  async (page) => {
    return await fetchData(page);
  }
);

const initialState = {
  oompaLoompas: [],
  status: "",
};

export const oompaLoompasSlice = createSlice({
  name: "oompa loompa",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOompaLoompas.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOompaLoompas.fulfilled, (state, action) => {
        state.status = "success";
        state.oompaLoompas = action.payload;
      })
      .addCase(getOompaLoompas.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default oompaLoompasSlice.reducer;
