import Fastify, { FastifyInstance } from 'fastify'

const fastify = Fastify({
  logger: true
})

export default async function (routes: (fastify: FastifyInstance) => void) {
  routes(fastify)
  await fastify.listen({ port: 3000 })
}