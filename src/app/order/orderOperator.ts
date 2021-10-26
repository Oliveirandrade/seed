import { OrderRequisition, Products } from "./interfaces"

import createOrderService from './services/createOrderService'
import createProductService from './services/createProductService'
import listOrderService from './services/listOrderService'
import updateOrderService from './services/updateOrderService'
import deleteOrderService from './services/deleteOrderService'

export default {
    createOrder: async (order: OrderRequisition): Promise<object> => await createOrderService(order),
    createProduct: async (products: Products): Promise<object> => await createProductService(products),
    updateOrder: async (orderId: object, order: OrderRequisition): Promise<object> => await updateOrderService(orderId, order),
    oderList: async (): Promise<object> => await listOrderService(),
    deleteOrder: async (orderId: object): Promise<object> => await deleteOrderService(orderId),
}