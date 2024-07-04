declare module 'gif-encoder-2' {
    export default class GIFEncoder {
      constructor(width: number, height: number);
      setDelay(ms: number): void;
      start(): void;
      addFrame(imageData: Uint8Array): void;
      finish(): void;
      out: {
        getData(): Buffer;
      };
    }
  }