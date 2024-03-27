import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import InputForm from './InputForm'
const InsertNewPort = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <>
      <div className=" font-medium flex justify-between w-full border-b border-slate-300">
        <p className="flex items-center text-xl">My Port</p>
        <button
          className="btn btn-primary mt-4 rounded-md btn-sm mb-2"
          type="button"
          onClick={toggleModal}
        >
          New Port
        </button>
      </div>

      <dialog
        id="add_new_port"
        className={`modal ${modalOpen ? 'modal-open' : ''}`}
      >
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Insert New Port</h3>
          <Form method="POST">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
              <InputForm
                label={'Port Name'}
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
            <div className="modal-action">
              <div className="modal-actionw-full flex justify-end">
                <div className="flex justify-between">
                  <button
                    className="btn btn-base-200 btn-sm mt-4 rounded-md mr-2"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-primary btn-sm mt-4 rounded-md"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </dialog>
    </>
  )
}

export default InsertNewPort
