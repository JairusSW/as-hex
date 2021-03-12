# AS-Hex
**Hex Decoder/Encoder Written For AssemblyScript**

## About
- AssemblyScript Compatible
- Minimal Code
- Works In Browser And Node
- No Dependencies

## Installation
```bash
~ npm install as-hex --save
```

## Usage

**Basic Usage**
```js
import { encode, decode } from 'as-hex'

const encoded = encode('Hello World 🌎')
//=> 48656c6c4f124a2c

const decoded = decode(encoded)
//==> Hello World 🌎
```

## API

### encode(data: string) -->> string
Encode String Into HEX Format

### decode(data: string) -->> string
Decode HEX Back Into String