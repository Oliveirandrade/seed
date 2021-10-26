import { client } from '../../../infra/prisma/client'
import Repository from '../../../infra/repository/repository'
import { Products } from '../interfaces'

export default async (product: Products): Promise<any | string> => await new Repository(client.products).create(product)