//PX TO REM
export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const gs1StatusTranslator: (
  role: string,
  gs1Status:
    | {
        EnStatusName: string;
        ExDesc: string;
        FaStatusName: string;
        ID: number;
      }[]
    | undefined,
  gs1StatusNumber: number | undefined
) => string = (role, gs1Status, gs1StatusNumber) => {
  let text = "";
  if(role === 'evaluator'){
    text = "ارسال شده برای مرکز شماره گذاری"
  }else if (gs1Status && gs1StatusNumber) {
    const textObject = gs1Status.filter(
      (status) => status.ID === gs1StatusNumber
    );

    text = textObject[0]?.ExDesc;
  }

  return text;
};

export const translateCarpetRequestsStatus = (
  status: string,
  evaluator_id: number | null,
  role: string,
  gs1Status?: {
    EnStatusName: string;
    ExDesc: string;
    FaStatusName: string;
    ID: number;
  }[],
  gs1StatusNumber?: number | undefined
) => {
  switch (status) {
    case "draft":
      return "ثبت اولیه ";
    case "submitted":
      return "ارسال شده برای کارگزاری";
    case "agent_edit":
      return evaluator_id ? "ارسال شده برای ارزیاب " : "ثبت اولیه ";
    case "evaluated":
      return "تکمیل شده توسط ارزیاب";
    case "agent_acc":
      return "تکمیل شده توسط ارزیاب";
    case "completed":
      return " پایان یافته";
    case "sent_to_center":
      return gs1StatusTranslator(role, gs1Status, gs1StatusNumber);
    default:
      return "ثبت اولیه ";
  }
};

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