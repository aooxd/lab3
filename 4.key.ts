export function makeKey(len: number, symbols: string): string {
  let key = "";
  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * symbols.length);
    key += symbols[index];
  }
  return key;
}
