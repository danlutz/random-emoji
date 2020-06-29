import test from 'ava'
import pickEmoji from '.'
import emojis from './emojis'

test('main', t => {
  t.true(emojis.includes(pickEmoji()))
})
