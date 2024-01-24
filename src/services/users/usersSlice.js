import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers, getUser, getLinkInvite, getEditUserById } from './UsersApi';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUsers();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getUser(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLinkEmail = createAsyncThunk(
  'users/fetchLinkEmail',
  async (email, { rejectWithValue }) => {
    try {
      const response = await getLinkInvite(email);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const patchUserAction = createAsyncThunk(
  'users/patchUserAction',
  async (data, { rejectWithValue }) => {
    try {
      const response = await getEditUserById(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {},
    user: {},
    linkInvite: {},
    status: 'init',
    isLoading: false,
    error: null,
  },
  reducers: {
    getUserByIdReducer: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchLinkEmail.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchLinkEmail.fulfilled, (state, action) => {
        state.linkInvite = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(fetchLinkEmail.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(patchUserAction.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(patchUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'resolved';
        state.error = null;
      })
      .addCase(patchUserAction.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});


export const { getUserByIdReducer } =
usersSlice.actions;


export default usersSlice.reducer;
