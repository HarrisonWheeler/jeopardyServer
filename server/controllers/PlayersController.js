import { playersService } from "../services/PlayersService";
import BaseController from "../utils/BaseController";

export class PlayersController extends BaseController {
  constructor() {
    super('api/players')
    this.router
      .get('', this.getAll)
      .get('/:id')
      .put('/:id')
      .post('')
      .delete('/:id')
  }

  async getAll(req, res, next) {
    try {
      return res.send(await playersService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
}