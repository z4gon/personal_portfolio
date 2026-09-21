import { expect, test } from "vitest";
import { classNames } from "./classNames";

test.each([
  // joins plain strings with a single space
  [["foo", "bar"], "foo bar"],
  // skips falsy values scattered between strings
  [["foo", "", undefined, null, false, "bar"], "foo bar"],
  // picks object keys with truthy values in insertion order
  [[{ foo: true, skipMe: false, bar: true }], "foo bar"],
  // mixes strings and conditional objects, the typical CSS-modules use case
  [
    ["item", { "item--tall": true, "item--disabled": false }],
    "item item--tall",
  ],
  // returns an empty string when there is nothing to join
  [[{}, undefined, false], ""],
  // returns an empty string when called with no arguments
  [[], ""],
])("classNames %#", (input, expected) => {
  expect(classNames(...input)).toBe(expected);
});
