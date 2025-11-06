export function extractMethods(obj: Record<string, any>): [string, number][] {
  const result: [string, number][] = [];
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      result.push([key, obj[key].length]);
    }
  }
  return result;
}
