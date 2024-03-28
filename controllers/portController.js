import Port from '../models/PortModels.js'
import Stock from '../models/StockModels.js'
import { StatusCodes } from 'http-status-codes'

export const createPort = async (req, res) => {
  const port = await Port.create(req.body)
  res.status(StatusCodes.CREATED).json({ port })
}

export const getAllPort = async (req, res) => {
  try {
    const pipeline = [
      {
        $unwind: '$stocks', // Unwind the 'stocks' array
      },
      {
        $lookup: {
          from: 'stocks', // The collection to perform the lookup on (Stock model)
          localField: 'stocks.stock', // Field in the current collection (Port) to match
          foreignField: '_id', // Field in the target collection (Stock) to match
          as: 'stock', // Replace the 'stocks.stock' array with the matching documents from the 'stocks' collection
        },
      },
      {
        $addFields: {
          'stocks.stock': {
            _id: { $arrayElemAt: ['$stock._id', 0] }, // Add the stock ID
            name: { $arrayElemAt: ['$stock.name', 0] }, // Add the stock name
          },
        },
      },
      {
        $sort: { 'stocks.value': -1 }, // Sort by the 'value' field in descending order
      },
      {
        $group: {
          _id: '$_id',
          name: { $first: '$name' },
          createdBy: { $first: '$createdBy' },
          createdOn: { $first: '$createdOn' },
          updatedBy: { $first: '$updatedBy' },
          updatedOn: { $first: '$updatedOn' },
          transactions: { $first: '$transactions' },
          stocks: { $push: '$stocks' },
        },
      },
    ]

    const ports = await Port.aggregate(pipeline)
    ports.map((port) => {
      if (port.stocks.length > 5) {
        return (port.stocks = port.stocks.slice(0, 5))
      }
    })
    res.status(StatusCodes.OK).json({ ports })
  } catch (error) {
    console.error(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Could not retrieve port data' })
  }
}

export const deletePort = async (req, res) => {
  const { portID } = req.body
  await Port.findByIdAndDelete(portID)
  res.status(StatusCodes.OK).json({ msg: 'Delete Success' })
}
