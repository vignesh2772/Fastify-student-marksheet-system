const { v4: uuidv4 } = require('uuid')
let items = require('../Items')

const getItems = (req, reply) => {
  reply.send(items)
}

const getItem = (req, reply) => {
  const { id } = req.params

  const item = items.find((item) => item.id === id)

  reply.send(item)
}

const addItem = (req, reply) => {
  const { name,  subject_1, subject_2, subject_3, subject_4, subject_5, } = req.body
  const item = {
    id: uuidv4(),
    name,
    subject_1,
    subject_2,
    subject_3,
    subject_4,
    subject_5,
  }

  items = [...items, item]

  reply.code(201).send(item)
}

const deleteItem = (req, reply) => {
  const { id } = req.params

  items = items.filter((item) => item.id !== id)

  reply.send({ message: `Student ${id} has been removed` })
}

const updateItem = (req, reply) => {
  const { id } = req.params
  const { name, subject_1, subject_2, subject_3, subject_4, subject_5 } = req.body
 

  items = items.map((item) => (item.id === id ? { id, name, subject_1, subject_2, subject_3, subject_4, subject_5, } : item))

  item = items.find((item) => item.id === id)

  reply.send(item)
}

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
}
