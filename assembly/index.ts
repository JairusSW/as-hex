export function encode(data: string): string {

    const array = Uint8Array.wrap(String.UTF8.encode(data))

    let hex = ''

    for (let i = 0; i < array.length; i++) {
        hex += array[i].toString(16)
    }

    return hex

}

export function decode(data: string): string {

    let array = new Uint8Array(data.length >>> 1)
  
    for (let i = 0; i < data.length >>> 1; ++i) {
      array.fill(i32(parseInt('0x' + data.substr(i * 2, 2), 16)), i, i + 1)
    }

    return String.UTF8.decode(array.buffer)

}