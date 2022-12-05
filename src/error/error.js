export default class FSError extends Error {
  constructor() {
    super("FS operation failed");
  }
}
