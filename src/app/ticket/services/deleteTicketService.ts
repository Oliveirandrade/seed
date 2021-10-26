import Repository from '../../../infra/repository/repository'
import { client } from '../../../infra/prisma/client'

export default async (ticketId: object): Promise<void | any> => await new Repository(client.ticket).delete({ where: ticketId })