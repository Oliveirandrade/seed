export default class Repository {
  model: any
  constructor(model: any) {
    this.model = model
  }

  async findAll(where: object = {}) {
    try {
      const result = await this.model.findMany(where)
      return result
    } catch (error) {
      console.log(error)
    }
  }

  async create(body: object) {
    try {
      const result = await this.model.create({
        data: body
      })
      return result
    } catch (error: any) {
      console.log(error)
    }
  }

  async update(where: object, data: object) {
    try {

      const result = await this.model.update({
        where,
        data
      })
      return result
    } catch (error: any) {
      console.log(error)
    }
  }

  async delete(where: object) {
    try {
      return await this.model.delete(where)
    } catch (error) {
      console.log(error)
    }
  }
}
