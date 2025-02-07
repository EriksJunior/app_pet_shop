import api from "../../../utils/configs/api"

class ServicePet{
  async save(pet) {
    const { data } = await api.post("/pet", pet)
    return data
  }

  async findById(id) {
    const { data } = await api.get(`/pet/${id}`)
    return data
  }

  async findByCustomerId(id) {
    const { data } = await api.get(`/pet/customerId/${id}`)
    return data
  }

  async deleteById(id) {
    await api.delete(`/pet/${id}`)
  }
}

export default new ServicePet()
