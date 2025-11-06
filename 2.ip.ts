export function ipToInt(ip: string = "127.0.0.1"): number {
  const parts = ip.split(".").map(Number);
  return parts.reduce((acc, part, index) => acc + (part << ((3 - index) * 8)), 0);
}
