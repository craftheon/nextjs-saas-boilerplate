import { Service } from 'typedi'

@Service()
export class TestService {
  public async test() {
    return "hello test"
  }
}