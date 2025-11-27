import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
export default defineConfig({
    server: {
        host: true,
        port: 5173,
        https: {
            key: fs.readFileSync(path.resolve(__dirname, '192.168.1.101+1-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, '192.168.1.101+1.pem'))
        }
    }
})