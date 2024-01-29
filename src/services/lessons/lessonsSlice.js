import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLessons, setLesson, getLessonsById } from './LessonsApi';

export const getLessonsAction = createAsyncThunk(
  'lessons/getLessonsAction',
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchLessons(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createLessonAction = createAsyncThunk(
  'lessons/createLessonAction',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await setLesson(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getLessonAction = createAsyncThunk(
  'lessons/getLessonAction',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await getLessonsById(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: {
    lessons: [],
    currentLesson: {},
    total: 0,
    page: 1,
    size: 1,
    pages: 0,
    status: 'init',
    error: undefined,
  },
  reducers: {
    getCurrentLessonByIdReducer: (state, action) => ({
      ...state,
      currentLesson: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLessonsAction.fulfilled, (state, action) => {
        state.status = 'success';

        state.lessons = action.payload;
      })
      .addCase(getLessonsAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getLessonsAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      })
      .addCase(createLessonAction.fulfilled, (state, action) => {
        state.status = 'success';

        state.currentLesson = action.payload;
      })
      .addCase(createLessonAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createLessonAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      })
      .addCase(getLessonAction.fulfilled, (state, action) => {
        state.status = 'success';

        state.currentLesson = action.payload;
      })
      .addCase(getLessonAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getLessonAction.rejected, (state) => {
        state.status = 'error';
        state.error = 'error';
      });
  },
});

export default lessonsSlice.reducer;

export const { getCurrentLessonByIdReducer } =
lessonsSlice.actions;
