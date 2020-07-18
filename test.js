const test = require('ava')
const pickEmoji = require('.')
const emojis = require('./emojis')

test('main', t => {
  t.true(emojis.includes(pickEmoji()))
})
