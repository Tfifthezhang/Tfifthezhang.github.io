/** A simple estimate that handles both Chinese text and space-separated words. */
export function getReadingTime(body: string = ""): number {
  const text = body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "");
  const chinese = text.match(/\p{Script=Han}/gu)?.length ?? 0;
  const words =
    text.replace(/\p{Script=Han}/gu, " ").match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
  return Math.max(1, Math.ceil(chinese / 350 + words / 220));
}
