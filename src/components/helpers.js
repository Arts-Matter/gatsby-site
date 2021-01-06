export function convertTitleToSlug(title) {
  if (title) {
    // Remove anything that is not alpha numeric, "/", or " "
    const slugNoSpecialChars = title.replace(/[^0-9a-zA-Z/\s]/g, "")
    // Replace "/", or " ", with "-"
    // If consecutive "-"s replace with "-"
    return slugNoSpecialChars
      .replace(/[/\s]/g, "-")
      .replace(/--+/g, "-")
      .toLowerCase()
  }

  return null
}
