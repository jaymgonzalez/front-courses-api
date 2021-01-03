import React, { useState } from 'react'
import FormTemplate from './common/FormTemplateAuthors'

const CreateAuthorPage = (props) => {

  const [mongoId, setMongoId] = useState('')

  mongoId !== props.match.params.id && setMongoId(props.match.params.id)

  return (
    <div>
      <FormTemplate mongoId={mongoId} />
    </div>
  )
}

export default CreateAuthorPage
