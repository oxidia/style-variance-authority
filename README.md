# Style Variance Authority (SVA)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

This utility is for managing style-based variant for react-native components  
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
import { sva, type StyleVariantProps } from "@oxidia/style-variance-authority";

const buttonContainer = sva({
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
        borderColor: "black",
      },
    },
    disabled: {
      true: {
        opacity: 0.7,
      },
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
 * [ { height: 40 }, { backgroundColor: 'white' }, { opacity: 0.7 } ]
 */

interface ButtonProps extends VariantProps<typeof buttonContainer> {}
// SVA offers the VariantProps helper to extract variant types
```

## Credits

This package is inspired by the [Class Variance Authority (CVA)](https://github.com/joe-bell/cva)

## License

[Apache-2.0 License](/LICENSE)

[npm-version-src]: https://img.shields.io/npm/v/@oxidia/style-variance-authority/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@oxidia/style-variance-authority
[npm-downloads-src]: https://img.shields.io/npm/dm/@oxidia/style-variance-authority.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@oxidia/style-variance-authority
[license-src]: https://img.shields.io/npm/l/@oxidia/style-variance-authority.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@oxidia/style-variance-authority
