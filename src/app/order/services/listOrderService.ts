import Repository from '../../../infra/repository/repository'
import { client } from '../../../infra/prisma/client'

export default async (): Promise<void | any> => await new Repository(client.orderRequisition).findAll({
    include: {
        productList: {}
    }
})
