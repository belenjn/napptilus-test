import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, getOompa } from "../fetchData";

export const getOompaLoompas = createAsyncThunk(
  "Get all Oompa Loompas",
  async (page) => {
    return await fetchData(page);
  }
);

export const getOompaLoompa = createAsyncThunk(
  "Get one Oompa",
  async(id) => {
    return await getOompa(id);
  }
)

const initialState = {
  oompaLoompas: [],
  oompaLoompa: [],
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
      })
      .addCase(getOompaLoompa.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOompaLoompa.fulfilled, (state, action) => {
        state.status = "success";
        state.oompaLoompa = action.payload;
      })
      .addCase(getOompaLoompa.rejected, (state) => {
        state.status = "failed";
      })
  },
});

export default oompaLoompasSlice.reducer;
