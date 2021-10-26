import Repository from '../../../infra/repository/repository'
import { client } from '../../../infra/prisma/client'

export default async (orderId: object): Promise<void | any> => await new Repository(client.orderRequisition).delete({ where: orderId })