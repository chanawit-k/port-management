const notFound = (req, res) => {
  res.status(404).json({ msg: 'not found' })
}

export default notFound
