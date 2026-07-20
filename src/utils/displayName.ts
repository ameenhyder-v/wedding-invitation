/** Title case for script names — e.g. Ajmal, Asna */
export function displayName(name: string) {
  const trimmed = name.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}
