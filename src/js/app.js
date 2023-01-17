export default class ArrayBufferConverter {
  static load(buffer) {
    this.buffer = buffer;
  }

  static toString() {
    const bufferString = new Uint16Array(this.buffer);
    let resultString = '';
    resultString += bufferString.reduce((acc, item) => acc + String.fromCharCode(item), '');
    return resultString;
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += i) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
