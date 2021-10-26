import Repository from '../../../infra/repository/repository'
import { client } from '../../../infra/prisma/client'
import { Ticket } from '../interfaces'

export default async (userId: object, ticket: Ticket): Promise<void | any> => await new Repository(client.ticket).update(userId, ticket)
