import { basicGet } from 'api/common'

const blogsUrl = 'https://jsonplaceholder.typicode.com/posts'

const fetchBlogs = async () => {
  return await basicGet(blogsUrl)
}

export const blogApi = { fetchBlogs }
