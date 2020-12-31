import { useFetch } from './useFetch'

export const useCourseAuthorData = () => {

  const { data: courses, loading, error } = useFetch('courses')
  const { data: authors } = useFetch('authors')

  const courseAuthorData = courses && courses.reduce((acc, curr, i, arr) => {
    authors && authors.map(author => {
      if (author.id === curr.authorId) {
        curr.authorName = author.name
        curr.platform = author.platform
      }
      return curr
    })
    return arr
  }, 0)

  return { courseAuthorData, loading, error }

}

