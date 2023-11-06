import { Service } from "typedi";
import { HomeService } from "../module/home"

@Service()
export class HomeApi {
  constructor(
    public homeService: HomeService
  ) { }

  public async homeGet() {
    console.log(this.homeService)
    const res = await this.homeService.print()
    return { message: res }
  }
}