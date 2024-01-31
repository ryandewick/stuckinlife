export function capLength(info, maxLength) {
  if (info && info.length > maxLength) {
    return info.slice(0, maxLength) + "...";
  }
  return info;
}
