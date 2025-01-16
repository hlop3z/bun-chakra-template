/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Cleans up CSS code by removing extra spaces and newlines.
 * @param {string} text - The CSS code to clean up.
 * @returns {string} - The cleaned up CSS code.
 */
export function removeSpace(text: string): string {
  return text
    .replace(/\s\s+/g, " ")
    .replace(/\r?\n|\r/g, "")
    .trim();
}

/**
 * Transforms a CSS object to a space-separated class string.
 * @param {any} input - The CSS object to transform.
 * @returns {string} - The space-separated class string.
 */
export const objectToClass = (input: any): string => {
  if (typeof input === "string") {
    return input.trim();
  } else if (typeof input === "object") {
    if (Array.isArray(input)) {
      return input.map(objectToClass).join(" ").trim();
    } else if (input) {
      return Object.keys(input)
        .filter((key) => input[key] === true)
        .join(" ")
        .trim();
    }
  }
  return "";
};

/**
 * Transforms a CSS object to a style string.
 * @param {any} input - The CSS object to transform.
 * @returns {string} - The style string.
 */
export const objectToStyle = (input: any): string => {
  if (typeof input === "string") {
    input = input.trim();
    if (input.endsWith(";;")) {
      input = input.slice(0, -1);
    }
    return input;
  } else if (typeof input === "object") {
    if (Array.isArray(input)) {
      return input.map(objectToStyle).join(" ").trim();
    } else {
      return Object.keys(input)
        .filter((key) => input[key])
        .map((key) => `${key}: ${input[key]};`)
        .join(" ")
        .trim();
    }
  }
  return "";
};
