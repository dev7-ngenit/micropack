/**
 * Flattens an array of objects, moving objects from the 'accessories' array to the root level.
 *
 * @param {Array<Object>} data The array of objects to flatten.
 * @returns {Array<Object>} A new, flattened array containing all original and accessory objects.
 */
const flattenAccessories = (data) => {
  // Use the reduce method to iterate over the input array and build a new, flattened array.
  return data.reduce((acc, item) => {
    // Create a new object that is a copy of the current item, but without the accessories property.
    // This is done to avoid modifying the original data and to ensure the final output
    // contains the accessories at the root level instead of inside the parent object.
    const { accessories, ...itemWithoutAccessories } = item;

    // Add the parent item to the accumulator array.
    acc.push(itemWithoutAccessories);

    // If the accessories array exists and is not empty, iterate through it and add each accessory
    // object to the accumulator array.
    if (accessories && accessories.length > 0) {
      acc.push(...accessories);
    }

    // Return the updated accumulator for the next iteration.
    return acc;
  }, []); // The initial value for the accumulator is an empty array.
};

export default flattenAccessories;
