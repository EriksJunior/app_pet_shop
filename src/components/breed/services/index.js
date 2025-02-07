import api from "../../../utils/configs/api"

class ServiceBreed{
  async save(breed) {
    const { data } = await api.post("/breed", breed)
    return data
  }

  async findById(id) {
    const { data } = await api.get(`/breed/${id}`)
    return data
  }

  async findByCustomerId(id) {
    const { data } = await api.get(`/breed/customerId/${id}`)
    return data
  }

  async removeById(id) {
    await api.delete(`/breed/${id}`)
  }

  async fillSelectBox() {
    const { data } = await api.get(`/breed`)
    return data
  }
}

export default new ServiceBreed()
