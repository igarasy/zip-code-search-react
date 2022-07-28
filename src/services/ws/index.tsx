import axios from "axios"
import { DtoZipCode } from "./dtoZipCode"


export class SearchService {
  static async searchUser(zipCodeNumber: string) {
    const url = `https://viacep.com.br/ws/${zipCodeNumber}/json/`
    const response = await axios.get<DtoZipCode>(url)
    return response.data
  }
}