import { FastifyInstance } from 'fastify'
import { Container } from 'typedi'
import { HomeApi } from './home'

const homeApi = Container.get(HomeApi);

export default function (fastify: FastifyInstance) {
  fastify.get('/home', homeApi.homeGet)
}