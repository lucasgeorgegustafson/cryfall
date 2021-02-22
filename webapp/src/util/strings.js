export function capitalizeString ([firstLetter, ...restOfWord]) {
  return firstLetter.toUpperCase() + restOfWord.join('')
}
