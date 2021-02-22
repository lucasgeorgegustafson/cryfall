export function apiCostToIconCost (apiCost) {
  const matches = [...apiCost.matchAll(/{(.*?)}/g)]
  return matches.map((match, idx) => match[1].toLowerCase().replace('/', ''))
}
