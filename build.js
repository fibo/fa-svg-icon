const write = require('write-file-utf8')

const brands = require('./fa-brands')
const regular = require('./fa-regular')
const solid = require('./fa-solid')

/**
 * Converts `this-string` into `thisString`.
 *
 * @param {String} name
 * @return {String} camelized name
 */

function camelize (name) {
  return name.split('-')
             .map(               // Uppercase only first letter.
               (x, i) => i > 0 ? x.charAt(0).toUpperCase() + x.slice(1) : x
             ).join('')
}

/**
 * Generate source files.
 *
 * @param {String} bundle can be brands, regular, solid
 * @param {Object} faIcons contains original Font Awesome code.
 * @return {void}
 */

function generate (bundle, faIcons) {
  const iconsData = []

  for (name in faIcons) {
    const faIcon = faIcons[name]

    const viewBox = `0 0 ${faIcon[0]} ${faIcon[1]}`
    const path = faIcon[4]

    const iconData = `{viewBox:'${viewBox}',path:'${path}'}`

    // Write single icon source file.
    write(`${bundle}/${name}.js`, `module.exports=${iconData}`)

    // Add icon to bundle.
    iconsData.push(`${camelize(name)}:${iconData}`)
  }

  // Write icons bundle source file.
  write(`${bundle}.js`, `module.exports={${iconsData.join(',')}}`)
}

generate('brands', brands)
generate('regular', regular)
generate('solid', solid)