import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/Api';

export const getCourses = createAsyncThunk(
  'courses/getCourses',
  async (_, { rejectWithValue }) => {
    try {
      // дописать ручку 
      const res = await api
      // потом убрать
      console.log('getCourses() => res', res);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
