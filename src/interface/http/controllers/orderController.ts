import {
  Body,
  Path,
  Controller,
  Get,
  Put,
  Post,
  Route,
  SuccessResponse,
  Tags,
  Delete
} from 'tsoa';
import orderOperator from '../../../app/order/orderOperator';
import { OrderRequisition, Products } from '../../../app/order/interfaces';

@Route('order')
@Tags("Order")
export class OrderController extends Controller {
  @Post('create')
  @SuccessResponse('201', 'Created with success!')
  public async createOrder(@Body() requestBody: OrderRequisition): Promise<object> {
    return await orderOperator.createOrder(requestBody)
  }

  @Post('message/create')
  @SuccessResponse('201', 'Created with success!')
  public async createProduct(@Body() requestBody: Products): Promise<object> {
    return await orderOperator.createProduct(requestBody)
  }

  @Get('')
  @SuccessResponse('200', '[]')
  public async getOrder(): Promise<object | any> {
    return await orderOperator.oderList()
  }

  @Put('{orderId}')
  @SuccessResponse('200', '[]')
  public async updateOrder(@Path() orderId: string, @Body() requestBody: OrderRequisition): Promise<object | any> {

    return await orderOperator.updateOrder({ id: Number(orderId) }, requestBody)
  }

  @Delete('delete/{orderId}')
  @SuccessResponse('200', 'Deleted with success!')
  public async deleteOrder(@Path() orderId: string): Promise<object> {
    await orderOperator.deleteOrder({ id: Number(orderId) })
    this.setStatus(200)
    return {
      msg: 'rule deleted'
    }
  }
}