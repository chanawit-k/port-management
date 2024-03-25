import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip)

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}
const HoldingCard = ({ portName, topHoding }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-9/12 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-2 underline">
            {portName}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-30 justify-center flex">
              <div className="w-full lg:w-8/12">
                <Pie data={data} />
              </div>
            </div>
            <div className="lg:block hidden">
              <h1 className="text-2xl font-medium mb-2">Top 5 Hoding</h1>
              <ol className="list-none">
                {topHoding.map((holding, index) => {
                  const { name, percent } = holding
                  return (
                    <li className="flex justify-between">
                      {index + 1}. {name} <span>{percent}</span>
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
