export function nl2br(str: string) {
  return str.replace(/\r\n/g, "<br />").replace(/(\n|\r)/g, "<br />");
}

export function getUniqueString(myStrong?: number): string {
  let strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}

export function formatByte(byte: number): string {
  const kb = byte / 1000;

  if (kb < 1) {
    return `${byte}B`;
  }

  const mb = kb / 1000;

  if (mb < 1) {
    return `${kb}KB`;
  }

  return `${mb}MB`;
}
