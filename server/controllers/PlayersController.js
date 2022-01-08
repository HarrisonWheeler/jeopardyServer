import { playersService } from "../services/PlayersService";
import BaseController from "../utils/BaseController";

export class PlayersController extends BaseController {
  constructor() {
    super('api/players')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .put('/:id', this.edit)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await playersService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      return res.send(await playersService.getById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      return res.send(await playersService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      return res.send(await playersService.edit(req.body))
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      return res.send(await playersService.remove(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}