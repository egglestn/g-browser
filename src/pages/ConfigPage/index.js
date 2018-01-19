import React from 'react'
import ApiForm from '../../components/ApiForm'

const ConfigPage = ({
  configs = []
}) => {
  return (
    <div>
      <h2>Config Page!</h2>
      <ApiForm/>
    </div>
  )
}

export default ConfigPage
