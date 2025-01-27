import { describe, test, expect } from "vitest";
import sva from "./index.js";

describe("sva", () => {
  test("empty", () => {
    const empty = sva();

    const result = empty();

    expect(result).toBe(undefined);
  });

  test("with base only", () => {
    const buttonWithBaseOnly = sva({
      base: {
        backgroundColor: "white",
      },
    });

    const result = buttonWithBaseOnly();

    expect(result).toMatchObject({
      backgroundColor: "white",
    });
  });

  test("with variants only", () => {
    const buttonWithVariantsOnly = sva({
      variants: {
        variant: {
          solid: {
            backgroundColor: "white",
          },
        },
      },
    });

    const result = buttonWithVariantsOnly({
      variant: "solid",
    });

    expect(result).toMatchObject([
      {
        backgroundColor: "white",
      },
    ]);
  });

  test("with base and variants", () => {
    const buttonWithBaseVariants = sva({
      base: {
        height: 40,
      },
      variants: {
        variant: {
          solid: {
            backgroundColor: "white",
          },
        },
      },
    });

    const result = buttonWithBaseVariants({
      variant: "solid",
    });

    expect(result).toMatchObject([
      {
        height: 40,
      },
      {
        backgroundColor: "white",
      },
    ]);
  });

  test("with base, variants and default variants", () => {
    const buttonWithBaseAndVariantsAndDefaultVariants = sva({
      base: {
        height: 40,
      },
      variants: {
        variant: {
          solid: {
            backgroundColor: "white",
          },
          outline: {
            borderWidth: 1,
          },
        },
      },
      defaultVariants: {
        variant: "solid",
      },
    });

    const result1 = buttonWithBaseAndVariantsAndDefaultVariants();
    const result2 = buttonWithBaseAndVariantsAndDefaultVariants({
      variant: "outline",
    });

    expect(result1).toMatchObject([
      {
        height: 40,
      },
      {
        backgroundColor: "white",
      },
    ]);

    expect(result2).toMatchObject([
      {
        height: 40,
      },
      {
        borderWidth: 1,
      },
    ]);
  });

  test("with undefined variants", () => {
    const buttonWithUndefinedVariants = sva({
      variants: {
        variant: {
          solid: {
            backgroundColor: "white",
          },
          empty: undefined,
        },
      },
    });

    const result = buttonWithUndefinedVariants({
      variant: "empty",
    });

    expect(result).toMatchObject([undefined]);
  });

  test("with null variants", () => {
    const buttonWithNullVariants = sva({
      variants: {
        variant: {
          solid: {
            backgroundColor: "white",
          },
          empty: null,
        },
      },
    });

    const result = buttonWithNullVariants({
      variant: "empty",
    });

    expect(result).toMatchObject([null]);
  });

  test("with boolean variants", () => {
    const buttonWithBooleanVariants = sva({
      variants: {
        disabled: {
          false: null,
          true: {
            opacity: 0.7,
          },
        },
      },
      defaultVariants: {
        disabled: false,
      },
    });

    const result1 = buttonWithBooleanVariants();

    const result2 = buttonWithBooleanVariants({
      disabled: true,
    });

    expect(result1).toMatchObject([null]);
    expect(result2).toMatchObject([
      {
        opacity: 0.7,
      },
    ]);
  });

  test("with array of styles", () => {
    const buttonWithArrayOfSyles = sva({
      variants: {
        variant: {
          solid: [
            { backgroundColor: "white" },
            {
              height: 40,
            },
          ],
        },
      },
      defaultVariants: {
        variant: "solid",
      },
    });

    const result = buttonWithArrayOfSyles();

    expect(result).toMatchObject([
      [
        {
          backgroundColor: "white",
        },
        {
          height: 40,
        },
      ],
    ]);
  });
});
