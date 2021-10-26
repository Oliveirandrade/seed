import Repository from '../../../infra/repository/repository'
import { client } from '../../../infra/prisma/client'

export default async (where: any): Promise<void | any> => await new Repository(client.ticket).findAll({
    where,
    include: {
        messages: {
            include: {
                attachments: {}
            }
        }
    }
})
