import server from './server'
import { FastifyError } from 'fastify'
const IS_GOOGLE_CLOUD_RUN = process.env.K_SERVICE !== undefined

// You must listen on the port Cloud Run provides
const port = process.env.PORT || '3000'

// You must listen on all IPV4 addresses in Cloud Run
const host = IS_GOOGLE_CLOUD_RUN ? '0.0.0.0' : 'localhost'

const addr: any = { port, host }

server.listen(addr, function (err: FastifyError) {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    console.log(`Server running on http://localhost:${port}/playground`)
})
