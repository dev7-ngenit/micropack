/**
 * Removes any nullish values from an object.
 * @param {Object} obj
 * @returns {Object} A new object with all nullish values removed.
 */
export default function rmNullishValues(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    if (value !== undefined && value !== null) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
