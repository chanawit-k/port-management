import React from 'react'
import { TransactionForm } from '../components'
export const action = async ({ request }) => {
  const formData = await request.formData()
  const form = Object.fromEntries(formData)
  console.log(form)
  return null
}

const Transaction = () => {
  return (
    <section className="w-full">
      <div className="card w-full bg-base-100 shadow-lg rounded-md mb-8">
        <div className="card-body">
          <h2 className="card-title border-b border-slate-300">
            Filter Search
          </h2>
          <TransactionForm />
        </div>
      </div>
      <div className="shadow-lg rounded-md">
        <table className="table">
          <thead className="text-primary uppercase bg-base-300">
            <tr>
              <th style={{ width: '5%' }} className="text-center">
                #
              </th>
              <th style={{ width: '20%' }}>ชื่อ</th>
              <th className="lg:table-cell hidden">ราคาซื้อ</th>
              <th className="lg:table-cell hidden">มูลค่าซื้อ</th>
              <th className="lg:table-cell hidden">วันที่ซื้อ</th>
              <th className="lg:table-cell hidden">ราคาขาย</th>
              <th className="lg:table-cell hidden">มูลค่าขาย</th>
              <th className="lg:table-cell hidden">วันที่ขาย</th>
              <th className="lg:text-left text-center">กำไร/ขาดทุน</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-center">1.</td>
              <td>AKR</td>
              <td className="lg:table-cell hidden">10</td>
              <td className="lg:table-cell hidden">20</td>
              <td className="lg:table-cell hidden">11/8/2020</td>
              <td className="lg:table-cell hidden">20</td>
              <td className="lg:table-cell hidden">20</td>
              <td className="lg:table-cell hidden">20/10/2020</td>
              <td className="lg:text-left text-center">50%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Transaction
