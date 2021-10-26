import { writeFile, mkdir, access } from 'fs/promises';
import { constants } from 'fs';
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
  Delete,
  UploadedFiles
} from 'tsoa';
import ticketOperator from '../../../app/ticket/ticketOperator';
import { Ticket, Toolbar } from '../../../app/ticket/interfaces';

@Route('ticket')
@Tags('ticket')
export class TicketController extends Controller {
  @Post('create')
  @SuccessResponse('201', 'Created with success!')
  public async createTicket(@Body() requestBody: Ticket): Promise<object> {
    return await ticketOperator.createTicket(requestBody)
  }

  @Post('message/create')
  @SuccessResponse('201', 'Created with success!')
  public async createMessage(@Body() requestBody: Toolbar): Promise<object> {
    return await ticketOperator.createMessage(requestBody)
  }

  @Get('{user}/{id}')
  @SuccessResponse('200', '[]')
  public async getTicket(@Path() user: 'operator' | 'supplier', id: string): Promise<object | any> {
    let userId: any = {}

    if (user === 'operator') userId.authorId = id
    if (user === 'supplier') userId.supplierName = id

    return await ticketOperator.ticketList(userId)
  }

  @Put('{ticketId}')
  @SuccessResponse('200', '[]')
  public async updateTicket(@Path() ticketId: string, @Body() requestBody: Ticket): Promise<object | any> {

    return await ticketOperator.updateTicket({ id: Number(ticketId) }, requestBody)
  }

  @Delete('delete/{ticketId}')
  @SuccessResponse('200', 'Deleted with success!')
  public async deleteTicket(@Path() ticketId: string): Promise<object> {
    await ticketOperator.deleteTicket({ id: Number(ticketId) })
    this.setStatus(200)
    return {
      msg: 'rule deleted'
    }
  }

  // UPLOAD
  @Post("{ticketId}/upload-files")
  public async uploadFile(
    @Path() ticketId: string,
    @UploadedFiles() files: Express.Multer.File[]
  ): Promise<void> {
    for await (const file of files) {
      try {
        const path = './public/uploads/ticket/' + ticketId
        const date = new Date()

        try {
          await access(path, constants.R_OK | constants.W_OK)
        } catch (err) {
          mkdir(path)
        }

        writeFile(`${path}/${date.toLocaleString('pt')
          .replace(/\//ig, '-')
          .replace(' ', '-')}-${file.originalname}`, file.buffer).then(() => {
            this.setStatus(200)
            return 'Upload with success!'
          }).catch((err) => {
            console.log(err)
            this.setStatus(500)
            return 'Upload with error'
          })
      } catch (err) {
        console.log(err)
      }
    }

  }
}