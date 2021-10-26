import Repository from '../../../infra/repository/repository'
import { client } from '../../../infra/prisma/client'
import { OrderRequisition } from '../interfaces'

export default async (orderId: object, order: OrderRequisition): Promise<void | any> => await new Repository(client.orderRequisition).update(orderId, order)
