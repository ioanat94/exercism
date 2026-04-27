type OrdinalSuffix = "st" | "nd" | "rd" | "th";

function getOrdinal(number: number): OrdinalSuffix {
  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;
  
  if(lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return "th";
  } else if(lastDigit === 1) {
    return "st";
  } else if(lastDigit === 2) {
    return "nd";
  } else if(lastDigit === 3) {
    return "rd";
  }

  return "th";
}

export function format(name: string, number: number): string {
  return `${name}, you are the ${number}${getOrdinal(number)} customer we serve today. Thank you!`
}
