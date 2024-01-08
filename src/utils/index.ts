//PX TO REM
export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const persianChars = "۰۱۲۳۴۵۶۷۸۹.";
const englishChars = "0123456789.";

export function persianNumbersToEnglish(
  text: string | number
): string | number | null | undefined {
  if (text) {
    text = text.toString();
    let engText = "";
    for (let i = 0; i < text.length; i++) {
      let ch = text[i];
      if (persianChars.includes(ch)) {
        engText += englishChars[persianChars.indexOf(ch)];
      } else {
        engText += ch;
      }
    }
    return engText;
  }
  return text;
}