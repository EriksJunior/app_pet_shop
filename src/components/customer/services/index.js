import api from "../../../utils/configs/api"

class ServiceCustomer {
  async save(customer) {
    const { data } = await api.post("/customer", customer)
    return data
  }

  async findById(id) {
    const { data } = await api.get(`/customer/${id}`)
    return data
  }

  async deleteById(id) {
    await api.delete(`/customer/${id}`)
  }

  async search(text, type, isActive = true, page = 1) {
    const { data } = await api.get(`/customer/search/pagination?q=${text}&type=${type}&isActive=${isActive}&page=${page}`)
    return data
  }

  async fillCombobox(text, type = "nome", page = 1) {
    const { data } = await api.get(`/customer?q=${text}&type=${type}&page=${page}`)
    return data
  }
}

export default new ServiceCustomer()
