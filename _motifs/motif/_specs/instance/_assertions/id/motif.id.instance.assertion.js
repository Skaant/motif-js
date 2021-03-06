const assert = require('assert')
const assertionTypeEnum = require('../../../../../assertion/_enums/type/assertion.type.enum')

module.exports = {
  label: 'Pattern `id`',
  type: assertionTypeEnum.ERROR,
  test: instance => {
    
    assert.ok(
      instance.id,
      JSON.stringify(instance)
    )

    return `\`${ instance.id }\``
  }
}