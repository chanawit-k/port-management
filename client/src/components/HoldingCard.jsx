import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { setUpCartData } from '../utils/setUpCartData'

ChartJS.register(ArcElement, Tooltip)

const HoldingCard = ({ name, stocks }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-9/12 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-2 underline">
            {name}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-30 justify-center flex">
              <div className="w-full lg:w-8/12">
                <Pie data={setUpCartData(stocks)} />
              </div>
            </div>
            <div className="lg:block hidden">
              <h1 className="text-2xl font-medium mb-2">Top 5 Hoding</h1>
              <ol className="list-none">
                {stocks.map((holding, index) => {
                  const { name } = holding.stock
                  return (
                    <li className="flex justify-between">
                      {index + 1}. {name} <span>{holding.value}</span>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HoldingCard
