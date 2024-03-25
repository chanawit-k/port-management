import React from 'react'
import { HoldingCard } from '../components'
import { dummyData } from '../utils/dummyData'
const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-3">
      {dummyData.map((data) => {
        return <HoldingCard key={data.id} {...data} />
      })}
    </div>
  )
}

export default Dashboard
