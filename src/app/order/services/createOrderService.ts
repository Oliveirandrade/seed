import { client } from '../../../infra/prisma/client'
import Repository from '../../../infra/repository/repository'
import { OrderRequisition } from '../interfaces'

export default async (data: OrderRequisition): Promise<any | string> => {
    const productList = data.productList

    return await new Repository(client.orderRequisition).create({
        ...data,
        productList: {
            create: productList
        }
    })
}