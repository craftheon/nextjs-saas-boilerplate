import { Service } from 'typedi'
import { TestService } from './test'

@Service()
export class HomeService {
  constructor(
    public testService: TestService
  ) { }

  public async print() {
    const test = await this.testService.test()
    return "hello" + test
  }
}
