import React, { useState } from 'react'
import FormTemplate from './common/FormTemplate'

const UpdateCoursePage = (props) => {

  const [slug, setSlug] = useState('')

  slug !== props.match.params.slug && setSlug(props.match.params.slug)

  return (
    <>
      <FormTemplate slug={slug} />
    </>
  )
}

export default UpdateCoursePage
