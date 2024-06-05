export const translateServerMessage = (msg: string) => {
  switch (msg) {
    case "Invalid email or password.":
      return "بريد إلكتروني أو كلمة مرور غير صالحة.";
    default:
      return "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى لاحقًا.";
  }
};
