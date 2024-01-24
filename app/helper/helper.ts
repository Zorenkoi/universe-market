export function cutString(input: string, maxLength: number): string {
  if (input.length <= maxLength) {
    return input;
  }

  return input.substring(0, maxLength) + "...";
}

export function formatMoney(amount: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // Может быть изменено на другой код валюты, если необходимо
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}
