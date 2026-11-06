import start from './src/express.mjs'

try {
  await start()
} catch (error) {
  console.error('Unable to start. Check MongoDB and your .env configuration.')
  process.exit(1)
}
