export function normalizeString(str) {
  let normalizedString = str;

  normalizedString = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  normalizedString = str.replace(/ñ/g, 'n');

  normalizedString = str.toLowerCase().replace(/\s+/g, '-');

  return normalizedString;
}
