import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../fetchData";

export const fetchGetOompaLoompas = createAsyncThunk(
  "fetchData",
  async () => {
    return await fetchData();
  }
);
const initialState = {
  oompaLoompas: [],
  status: "",
};

export const oompaLoompasSlice = createSlice({
  name: "oompa loompa",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetOompaLoompas.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetOompaLoompas.fulfilled, (state, action) => {
        state.status = "success";
        state.oompaLoompas = action.payload;
      })
      .addCase(fetchGetOompaLoompas.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// export const {} = imagesSlice.actions;

export default oompaLoompasSlice.reducer;
