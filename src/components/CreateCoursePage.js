import React from 'react'
import FormTemplate from './common/FormTemplate'

const CreateCoursePage = (props) => {

  return (
    <>
      <FormTemplate courses={props.courses} onSubmit={props.onSubmitPost} onChange={props.onChange} course={props.course} errors={props.errors} loading={props.loading} error={props.error} />
    </>
  )
}

export default CreateCoursePage
