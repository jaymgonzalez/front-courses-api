import React from 'react'
import FormTemplate from './common/FormTemplate'

const UpdateCoursePage = (props) => {

  return (
    <>
      <FormTemplate courses={props.courses} onSubmit={props.onSubmitPut} onChange={props.onChange} course={props.course} errors={props.errors} loading={props.loading} error={props.error} />
    </>
  )
}

export default UpdateCoursePage
