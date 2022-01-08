import { dbContext } from "../db/DbContext"


class PlayersService {
  async getAll(query = {}) {
    return await dbContext.Players.find(query)
  }
}

export const playersService = new PlayersService()