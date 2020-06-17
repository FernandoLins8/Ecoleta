import { Request, Response} from 'express'
import knex from '../database/connection'
import ip from 'ip'

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*')
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://${ip.address()}:3333/uploads/${item.image}`
            }
        })
    
        return res.json(serializedItems)
    }
}

export default ItemsController