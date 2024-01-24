import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCourses, setCourses } from './CoursesApi';

export const getCoursesAction = createAsyncThunk(
  'courses/getCourses',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchCourses();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createCoursesAction = createAsyncThunk(
  'courses/createCourses',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await setCourses(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    coursesEdit: {},
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
      .addCase(getCoursesAction.fulfilled, (state, action) => {
        state.status = 'success';

        state.courses = action.payload;
      })
      .addCase(getCoursesAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCoursesAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      })
      .addCase(createCoursesAction.fulfilled, (state, action) => {
        state.status = 'success';
        state.cours = action.payload;
      })
      .addCase(createCoursesAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCoursesAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      });
  },
});

export default coursesSlice.reducer;
