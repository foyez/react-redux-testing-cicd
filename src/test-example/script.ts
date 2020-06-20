const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavoritecats.com',
  'myfavoritecats2.com',
]

export const googleSearch = (
  searchInput: string | undefined | null,
  db: string[],
) => {
  if (searchInput === undefined || searchInput === null) return []

  const matches = db.filter((website) => {
    return website.includes(searchInput)
  })

  return matches.length > 3 ? matches.slice(0, 3) : matches
}

// console.log(googleSearch('cat', googleDatabase))
