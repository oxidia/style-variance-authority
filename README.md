# Style Variance Authority (SVA)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

This utility is for managing style-based variant for **ReactNative** components  
Inspired by the [Class Variance Authority (CVA)](https://github.com/joe-bell/cva) package

## Installation

```bash
# npm
npm install @oxidia/style-variance-authority

# yarn
yarn add @oxidia/style-variance-authority

# pnpm
pnpm install @oxidia/style-variance-authority
```

## Usage

```typescript
import { StyleSheet } from "react-native";
import { type StyleVariantProps, sva } from "@oxidia/style-variance-authority";

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: "white",
  },

  h40: {
    height: 40,
  },

  opacity70: {
    opacity: 0.7,
  },
});

const buttonContainer = sva({
  base: styles.h40,

  variants: {
    variant: {
      solid: [styles.bgWhite, styles.h40],
      outline: {
        borderWidth: 1,
        borderColor: "black",
      },
    },
    disabled: {
      true: styles.opacity70,
      false: null,
    },
  },

  defaultVariants: {
    variant: "solid",
    disabled: false,
  },
});

const buttonContainerStyle = buttonContainer({
  variant: "solid",
  disabled: true,
});
/**
 * Result
 * [
 *   { height: 40 },
 *   [ { backgroundColor: 'white' }, { height: 40 } ],
 *   { opacity: 0.7 }
 * ]
 */

interface ButtonProps extends VariantProps<typeof buttonContainer> {}
// SVA offers the VariantProps helper to extract variant types
```

## Credits

This package is inspired by the [Class Variance Authority (CVA)](https://github.com/joe-bell/cva)

## License

[Apache-2.0 License](/LICENSE)

[npm-version-src]: https://img.shields.io/npm/v/@oxidia/style-variance-authority/latest.svg?style=flat&colorA=1D0E0F&colorB=C6E7FF
[npm-version-href]: https://npmjs.com/package/@oxidia/style-variance-authority
[npm-downloads-src]: https://img.shields.io/npm/dm/@oxidia/style-variance-authority.svg?style=flat&colorA=1D0E0F&colorB=C6E7FF
[npm-downloads-href]: https://npmjs.com/package/@oxidia/style-variance-authority
[license-src]: https://img.shields.io/npm/l/@oxidia/style-variance-authority.svg?style=flat&colorA=1D0E0F&colorB=C6E7FF
[license-href]: https://npmjs.com/package/@oxidia/style-variance-authority
