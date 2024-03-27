import React from 'react'
import { HoldingCard } from '../components'
import { dummyData } from '../utils/dummyData'
import InsertNewPort from '../components/InsertNewPort'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const res = await customFetch.post('/port', data)
    console.log('success')
    return null
  } catch (error) {
    console.log('success')
    return error
  }
}

export const loader = async () => {
  try {
    const response = await customFetch.get('/port')
    return response.data
  } catch (error) {
    console.log(`Something Wrong ${error}`)
    return redirect('/')
  }
}

const Dashboard = () => {
  const { ports } = useLoaderData()
  console.log(ports)
  return (
    <section className="w-full px-4">
      <InsertNewPort />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-3">
        {ports.map((data) => {
          return <HoldingCard key={data.id} {...data} />
        })}
      </div>
    </section>
  )
}

export default Dashboard
