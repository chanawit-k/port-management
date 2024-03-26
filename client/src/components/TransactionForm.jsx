import React from 'react'
import { Form } from 'react-router-dom'
import InputForm from './InputForm'
const TransactionForm = () => {
  return (
    <Form method="POST">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
        <InputForm
          label={'Name'}
          type={'text'}
          name={'name'}
          placeholder={'Insert Name'}
        />
        <InputForm
          label={'Date'}
          type={'text'}
          name={'date'}
          placeholder={'Insert Date'}
        />
      </div>
      <div className="w-full flex justify-end">
        <button className="btn btn-primary mt-4 rounded-md" type="submit">
          Search
        </button>
      </div>
    </Form>
  )
}

export default TransactionForm
