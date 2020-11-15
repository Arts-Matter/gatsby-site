export const addOrdinalToGrade = (n) => {
  if ( n === 0 ) {
    return "Kindergarden"
  } else {
    const s                = ["th", "st", "nd", "rd"]
    const v                = n % 100
    const gradeWithOrdinal = n + (s[(v - 20) % 10] || s[v] || s[0])

    return gradeWithOrdinal + " Grade"
  }
}