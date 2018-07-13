/**
 * Converts this-string into thisString.
 */

function camelizeString (name) {
  return name.split('-').map((str, i) => i > 0 ? x.charAt(0).toUpperCase() + x.slice(1) : str).join('')
}

/**
 * Converts `{ 'this-object': [] }` into `{ thisObject: [] }`.
 */

function camelizeObjectKeys (icons) {
  return Object.keys(icons).map(iconName => {
    var icon = {}

    icon[camelizeString(iconName)] = icons[iconName]

    return icon
  })
}

module.exports = camelizeObjectKeys
