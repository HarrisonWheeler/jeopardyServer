import mongoose from 'mongoose'
import { PlayerSchema } from "../models/Player";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Players = mongoose.model('Player', PlayerSchema)
}

export const dbContext = new DbContext()
