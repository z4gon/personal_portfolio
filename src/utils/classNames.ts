export type ClassNamesValue =
  string | boolean | null | undefined | Record<string, boolean | undefined>;

/**
 * classNames("item", "item--tall") // "item item--tall"
 * classNames("item", { "item--active": isActive }) // "item item--active" if active, otherwise "item"
 */
export const classNames = (...values: ClassNamesValue[]): string => {
  let result = "";

  for (const value of values) {
    let part = "";

    if (typeof value === "string") {
      part = value;
    } else if (typeof value === "object" && value !== null) {
      for (const className in value) {
        if (value[className]) {
          part += (part ? " " : "") + className;
        }
      }
    }

    if (part) {
      result += (result ? " " : "") + part;
    }
  }

  return result;
};
