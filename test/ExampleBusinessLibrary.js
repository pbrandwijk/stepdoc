/**
 * @fileOverview An example file with code as found in a STEP Business Library.
 * @module Libraries/ExampleBusinessLibrary
 */

/** Standard log prefix */
const log_prefix = "[ExampleBusinessLibrary] ";

/**
 * Example function that returns a boolean.
 * @functiontype Validation check
 * @level Warning
 * @objecttype Product
 * @statusrange 4-25
 */
function exampleLibraryFunction(node, manager, referenceTarget) {
    return true;
}

/**
 * Example function that returns the sum of the two parameters.
 * @section Generic functions
 * @param {Int} a The first parameter
 * @param {Int} b The second parameter
 * @returns {Int} The sum of the two parameters
 */
function exampleGenericFunction(a, b) {
    return a + b;
}
