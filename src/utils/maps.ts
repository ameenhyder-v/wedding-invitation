/** Opens Google Maps with turn-by-turn directions to the venue. */
export function mapsDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

/** Opens the venue place page in Google Maps. */
export function mapsPlaceUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** @deprecated Prefer mapsDirectionsUrl / mapsPlaceUrl */
export function mapsUrl(query: string): string {
  return mapsPlaceUrl(query);
}
