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

export function determineSlug(slug, title, contentful_id) {
  if (slug) {
    // Optimally we will use provided slug
    return convertTitleToSlug(slug)
  } else if (!slug && title) {
    // Otherwise use title as slug
    return convertTitleToSlug(title)
  } else if (!slug && !title && contentful_id) {
    // Fall back to contentful ID as slug
    return contentful_id
  }
}
