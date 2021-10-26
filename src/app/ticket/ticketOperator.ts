import { Ticket } from "./interfaces"

import createTicketService from './services/createTicketService'
import createMessageService from './services/createMessageService'
import listTicketService from './services/listTicketService'
import updateTicketService from './services/updateTicketService'
import deleteTicketService from './services/deleteTicketService'

export default {
    createTicket: async (ticket: Ticket): Promise<object> => await createTicketService(ticket),
    createMessage: async (where: any): Promise<object> => await createMessageService(where),
    updateTicket: async (userId: object, ticket: Ticket): Promise<object> => await updateTicketService(userId, ticket),
    ticketList: async (where: any): Promise<object> => await listTicketService(where),
    deleteTicket: async (userId: object): Promise<object> => await deleteTicketService(userId),
}