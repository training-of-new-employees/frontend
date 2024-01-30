import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCourses, setCourses, editCourses, getCoursById } from './CoursesApi';
import {fetchUserCourses, fetchUserLessons} from "./UserCoursesApi";

export const getCoursesAction = createAsyncThunk(
  'courses/getCoursesAction',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchCourses();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCoursByIdAction = createAsyncThunk(
  'courses/getCoursByIdAction',
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await getCoursById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createCoursesAction = createAsyncThunk(
  'courses/createCoursesAction',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await setCourses(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editCoursesAction = createAsyncThunk(
  'courses/editCoursesAction',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await editCourses(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserCoursesAction = createAsyncThunk(
  'courses/fetchUserCoursesAction',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchUserCourses();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserLessonsAction = createAsyncThunk(
  'courses/fetchUserCoursesAction',
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchUserLessons(id);
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
  reducers: {
    getCoursesByIdReducer: (state, action) => ({
      ...state,
      coursesEdit: action.payload,
    }),
  },
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
      })
      .addCase(editCoursesAction.fulfilled, (state, action) => {
        state.status = 'success';
        state.coursesEdit = action.payload;
      })
      .addCase(editCoursesAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editCoursesAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      })
      .addCase(getCoursByIdAction.fulfilled, (state, action) => {
        state.status = 'success';
        state.coursesEdit = action.payload;
      })
      .addCase(getCoursByIdAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCoursByIdAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      })
    .addCase(getUserCoursesAction.fulfilled, (state, action) => {
      state.status = 'success';

      state.courses = action.payload;
    })
      .addCase(getUserCoursesAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserCoursesAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      })
      .addCase(getUserLessonsAction.fulfilled, (state, action) => {
        state.status = 'success';

        state.courses = action.payload;
      })
      .addCase(getUserLessonsAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserLessonsAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      });
  },
});

export default coursesSlice.reducer;

export const { getCoursesByIdReducer } =
coursesSlice.actions;
