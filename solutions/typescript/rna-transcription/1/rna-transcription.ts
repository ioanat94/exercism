export function toRna(dna: string): string {
  const dnaChars = dna.split("");

  const rnaChars = dnaChars.map((c) => {
    if(c !== "G" && c !== "C" && c !== "T" && c !== "A") {
      throw new Error("Invalid input DNA.");
    }
    
    if(c === "G") return "C";
    if(c === "C") return "G";
    if(c === "T") return "A";
    if(c === "A") return "U";
  })

  return rnaChars.join("");
}
