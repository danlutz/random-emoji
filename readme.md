# `random-emoji` [![Build Status](https://travis-ci.com/lukewhrit/random-emoji.svg?branch=master)](https://travis-ci.com/lukewhrit/random-emoji)

> Simple module to get random emojis strings.

## Install

```
$ npm install @lukewhrit/random-emoji
```

## Usage

```js
const getEmoji = require('@lukewhrit/random-emoji')

getEmoji()
//=> '😀'
```

## API

### getEmoji()

Returns a pseudo-random emoji from the list defined in [`emojis.js`](./emojis.js).
