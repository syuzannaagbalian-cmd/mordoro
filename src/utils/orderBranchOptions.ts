export function getBranchOptions<T extends string>(
  city: string,
  branchesByCity: Record<T, string[]>,
): string[] {
  const trimmedCity = city.trim();
  if (!trimmedCity) return [];
  return branchesByCity[trimmedCity as T] ?? [];
}
