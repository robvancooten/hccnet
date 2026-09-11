// Returns  Datum eerste paasdag.  
function eerstePaasDag(jaar) {
  const a = jaar % 19;
  const b = Math.floor(jaar / 100);
  const c = jaar % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);        // 3 = March, 4 = April
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  // JS Date months are 0-based, so subtract 1
  return new Date(jaar, month - 1, day);
}

// Example:
//  console.log(eerstePaasDag(2025)); // Sun Apr 20 2025 (local time)


export {  eerstePaasDag };   // 