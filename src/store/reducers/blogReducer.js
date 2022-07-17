import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { blogApi } from 'api/blog/blog'

const initialState = {
  orginalBlogs: [],
  blogs: [],
  isLoading: false,
  isFetched: false,
}

const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  return await blogApi.fetchBlogs()
})

// random value, it determines usually by backend
let id = 101

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    deleteBlog: (state, { payload }) => {
      // instead of this we need to call api to delete blog with id
      const newBlogs = state.orginalBlogs.filter((blog) => blog.id !== payload)
      state.orginalBlogs = newBlogs
      state.blogs = newBlogs
    },
    addBlog: (state, { payload }) => {
      // instead of this we need to call api to add blog
      const newItem = {
        userId: payload.userId,
        id: ++id,
        title: payload.title,
        body: payload.body,
      }
      state.orginalBlogs = [...state.orginalBlogs, newItem]
      state.blogs = state.orginalBlogs
    },
    editBlog: (state, { payload }) => {
      // instead of this we need to call api to update specific blog
      const newArray = state.orginalBlogs.map((item) => {
        if (item.id !== payload.id) {
          return item
        }
        return {
          ...item,
          ...payload,
        }
      })

      state.orginalBlogs = newArray
      state.blogs = newArray
    },
    search: (state, { payload }) => {
      // orginal blogs is used only for search, instead of that we need to send request get blogs for searched value
      if (payload !== '') {
        state.blogs = state.orginalBlogs.filter(
          (data) =>
            JSON.stringify(data)
              .toLowerCase()
              .indexOf(payload.toLowerCase()) !== -1
        )
      } else {
        state.blogs = state.orginalBlogs
      }
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload
      state.orginalBlogs = action.payload
      state.isLoading = false
      state.isFetched = true
    })
  },
})

export const asyncBlogActions = { fetchBlogs }
export const { deleteBlog, addBlog, editBlog, search } = blogSlice.actions

export default blogSlice.reducer
