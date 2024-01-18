import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setPosition, fetchPositions, editPosition, fetchPositionForCourses } from './PositionsApi';

export const getPositions = createAsyncThunk(
  'positions/getPositions',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchPositions();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createPosition = createAsyncThunk(
  'positions/getPositions',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await setPosition(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const archivedPosition = createAsyncThunk(
  'positions/archivedPosition',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await editPosition(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPositionInCourses = createAsyncThunk(
  'positions/getPositionInCourses',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchPositionForCourses(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const positionSlice = createSlice({
  name: 'positions',
  initialState: {
    positions: [],
    positionInCourses: [],
    total: 0,
    page: 1,
    size: 1,
    pages: 0,
    status: 'init',
    error: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPositions.fulfilled, (state, action) => {
        state.status = 'success';

        state.positions = action.payload;
      })
      .addCase(getPositions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPositions.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      })
      .addCase(getPositionInCourses.fulfilled, (state, action) => {
        state.status = 'success';

        state.positionInCourses = action.payload;
      })
      .addCase(getPositionInCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPositionInCourses.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      });
  },
});

export default positionSlice.reducer;
