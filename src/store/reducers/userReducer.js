import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userApi } from 'api/auth/auth'
import { getUser, setSession } from 'utilities/localStorage'

const localStorageUser = getUser()
const initialState =
  localStorageUser !== null
    ? {
        username: localStorageUser.username,
        role: localStorageUser.role,
        id: localStorageUser.id,
        isLoggedIn: true,
        isLoading: false,
        error: null,
      }
    : {
        username: null,
        role: null,
        id: null,
        isLoggedIn: false,
        isLoading: false,
        error: null,
      }

const login = createAsyncThunk('auth/login', async (values) => {
  return await userApi.login(values)
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signout: (state) => {
      state.username = null
      state.isLoggedIn = false
      state.role = null
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // svi case ovdje pao prosao req
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        // Add user to the state array
        setSession(payload)
        state.isLoading = false
        state.isLoggedIn = true
        state.username = payload.username
        state.id = payload.id
        state.role = payload.role
        state.error = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.rejected, (state, { error }) => {
        state.isLoading = false
        state.error = error.message
      })
  },
})

export const asyncUserActions = { login }
export const { signout } = userSlice.actions

export default userSlice.reducer
