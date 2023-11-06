import 'reflect-metadata'
import http from './lib/http'
import routes from './api/routes'

export default async function start() {
  await http(routes)
}