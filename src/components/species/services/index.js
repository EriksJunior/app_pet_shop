import api from "../../../utils/configs/api"

class ServiceSpecie {
  async save(specie) {
    const { data } = await api.post("/specie", specie)
    return data
  }

  async update(specie, id) {
    await api.put(`/specie/${id}`, specie)
  }

  async fillSelectBox() {
    const { data } = await api.get(`/specie`)
    return data
  }

  async findById(id) {
    const { data } = await api.get(`/specie/${id}`)
    return data
  }

  async deleteById(id) {
    await api.delete(`/specie/${id}`)
  }
}

export default new ServiceSpecie()
