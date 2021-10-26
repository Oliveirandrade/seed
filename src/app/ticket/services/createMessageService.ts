import { client } from '../../../infra/prisma/client'
import Repository from '../../../infra/repository/repository'
import { Message } from '../interfaces'

export default async (data: Message): Promise<any | string> => await new Repository(client.toolbar).create(data)