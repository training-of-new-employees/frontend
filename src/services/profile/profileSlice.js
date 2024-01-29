import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getToken, getProfileMe, renameProfile, createUser } from './ProfileApi';

export const fetchToken = createAsyncThunk(
  'profile/fetchToken',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await getToken(email, password);
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProfileMe();
      localStorage.setItem('role', response.admin === 'true' ? 'ADMIN': 'USER');
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editProfile = createAsyncThunk(
  'profile/editProfile',
  async (data, { rejectWithValue }) => {
    try {
      const response = await renameProfile(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createUserAction = createAsyncThunk(
  'profile/createUserAction',
  async (data, { rejectWithValue }) => {
    try {
      const response = await createUser(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
    token: null,
    status: 'init',
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.token = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.status = 'resolved';
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(editProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
