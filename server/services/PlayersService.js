import { dbContext } from "../db/DbContext"
import { BadRequest } from '../utils/Errors.js'


class PlayersService {
  async getAll(query = {}) {
    return await dbContext.Players.find(query)
  }

  async getById(id) {
    const foundPlayer = await dbContext.Players.findById(id)
    if (!foundPlayer) {
      throw new BadRequest('Unable to find that player')
    }
    return foundPlayer
  }

  async create(newPlayer) {
    return await dbContext.Players.create(newPlayer)
  }

  async edit(editedPlayer) {
    let foundPlayer = await this.getById(editedPlayer.id)
    foundPlayer.name = editedPlayer.name || foundPlayer.name
    foundPlayer.points = editedPlayer.points || foundPlayer.points
    foundPlayer.correct = editedPlayer.correct || foundPlayer.correct
    foundPlayer.incorrect = editedPlayer.incorrect || foundPlayer.incorrect
    foundPlayer.questions = editedPlayer.questions || foundPlayer.questions
    await foundPlayer.save()
    return foundPlayer
  }

  async remove(id) {
    let playerToDelete = await this.getById(id)
    await playerToDelete.remove()
    return playerToDelete
  }
}

export const playersService = new PlayersService()