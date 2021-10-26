import { client } from '../../../infra/prisma/client'
import Repository from '../../../infra/repository/repository'
import { Ticket } from '../interfaces'

export default async (ticket: Ticket): Promise<any | string> => await new Repository(client.ticket).create({
    authorId: ticket.authorId,
    supplierName: ticket.supplierName || '',
    title: ticket.title,
    orderNumber: ticket.orderNumber,
    subject: ticket.subject,
    status: ticket.status,
    messages: {
        create: {
            when: ticket?.messages?.when,
            from: ticket?.messages?.from,
            attachments: {
                create: {
                    title: ticket?.messages?.attachments?.title,
                    description: ticket?.messages?.attachments?.description,
                    url: ticket?.messages?.attachments?.url,

                }
            }
        }
    }
})