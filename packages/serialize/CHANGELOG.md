# @emotion/serialize

## 0.11.15-next.2

### Patch Changes

- Updated dependencies [[`9e998e37`](https://github.com/emotion-js/emotion/commit/9e998e3755c217027ad1be0af4c64644fe14c6bf)]:
  - @emotion/utils@1.0.0-next.0

## 1.0.0-next.1

### Patch Changes

- [`e3d7db87`](https://github.com/emotion-js/emotion/commit/e3d7db87deaac95817404760112417ac1fa1b56d) [#1732](https://github.com/emotion-js/emotion/pull/1732) Thanks [@Andarist](https://github.com/Andarist)! - An additional semicolon is now inserted after interpolated arrays to cover cases when it doesn't have a trailing semi itself and thus breaking composition with styles coming after it.

## 0.11.15-next.4

### Patch Changes

- [`f08ef5a3`](https://github.com/emotion-js/emotion/commit/f08ef5a316c1d05bff8e7f3690781e1089a263c6) [#1600](https://github.com/emotion-js/emotion/pull/1600) Thanks [@Andarist](https://github.com/Andarist)! - Removed leftover `@emotion/react` import from type definition file.

## 0.12.0-next.3

### Minor Changes

- [`c643107`](https://github.com/emotion-js/emotion/commit/c6431074cf52a4bb64587c86ce5d42fe2d49230b) [#1600](https://github.com/emotion-js/emotion/pull/1600) Thanks [@joltmode](https://github.com/joltmode)! - Reworked Interpolation-related types. Correct types should now be provided to all flavours of emotion.

## 0.11.15-next.2

### Patch Changes

- [`5c55fd17`](https://github.com/emotion-js/emotion/commit/5c55fd17dcaec84d1f5d5d13ae90dd336d7e4403) [#1600](https://github.com/emotion-js/emotion/pull/1600) Thanks [@Andarist](https://github.com/Andarist)! - Fix to what location generated source maps are pointing in case of composed styles.

* [`729ef9d8`](https://github.com/emotion-js/emotion/commit/729ef9d8408af82c7a63effc1b8728f79c66bed1) [#1600](https://github.com/emotion-js/emotion/pull/1600) Thanks [@Andarist](https://github.com/Andarist)! - Update `csstype` dependency.

## 0.11.15-next.1

### Patch Changes

- [`8a896a31`](https://github.com/emotion-js/emotion/commit/8a896a31434a1d2f69e1f1467c446c884c929387) [#1600](https://github.com/emotion-js/emotion/pull/1600) Thanks [@Andarist](https://github.com/Andarist)! - Throw error about invalid content property values instead of just logging error to the console.

* [`a085003d`](https://github.com/emotion-js/emotion/commit/a085003d4c8ca284c116668d7217fb747802ed85) [#1600](https://github.com/emotion-js/emotion/pull/1600) Thanks [@Andarist](https://github.com/Andarist)! - Add missing `#__PURE__` annotations

## 1.0.0-next.0

### Major Changes

- [`1eaa3a38`](https://github.com/emotion-js/emotion/commit/1eaa3a389876d4a623ce66735dc6db093cb2a8e6) [#1600](https://github.com/emotion-js/emotion/pull/1600) Thanks [@mitchellhamilton](https://github.com/mitchellhamilton)! - TypeScript types have been restructured. These changes:

  - Reduce build times when using emotion
  - In many cases remove the need for manually specifying generic parameters for your emotion components.

  If you encounter build issues after upgrade, try removing any manually specified generic types and let them be inferred. Otherwise refer to the breaking changes list below.

  ## Improvements

  - useTheme added to EmotionTheming interface and can now create your own closed variation of withTheme. More information in the docs under the theming section.
  - Union types as props are better supported and should be inferred properly
  - Build times should be reduced significantly in larger projects.

  ## Breaking changes

  - withTheme can now have the Theme type specified when calling it. For example `withTheme<MyTheme>(MyComponent)`

    **Breaking change:** Generic argument changed, if you were specifying the ComponentType you will need to remove the generic parameter. Recommend following example setup in the TypeScript docs under theming section

  - `css` function has been restricted to prevent passing of invalid types
  - `CreateStyled` functions no longer take a second `ExtraProps` argument. Instead move it to after the create styled call. For example

    `styled<typeof MyComponent, ExtraProps>(MyComponent)({})`
    to
    `styled(MyComponent)<ExtraProps>({})`

  - `StyledComponent` type no longer supports the third generic `Theme` parameter. Instead add the `theme` prop to the first `Props` argument. For example:

    `StyledComponent<Props, {}, MyTheme>`
    to
    `StyledComponent<Props & { theme?: MyTheme }>`

## 0.11.16

### Patch Changes

- Updated dependencies [[`446e756`](https://github.com/emotion-js/emotion/commit/446e75661c4aa01e51d1466472a212940c19cd82)]:
  - @emotion/hash@0.8.0

## 0.11.15

### Patch Changes

- [`4c62ae9`](https://github.com/emotion-js/emotion/commit/4c62ae9447959d438928e1a26f76f1487983c968) [#1698](https://github.com/emotion-js/emotion/pull/1698) Thanks [@Andarist](https://github.com/Andarist)! - Add LICENSE file
- Updated dependencies [[`4c62ae9`](https://github.com/emotion-js/emotion/commit/4c62ae9447959d438928e1a26f76f1487983c968)]:
  - @emotion/hash@0.7.4
  - @emotion/memoize@0.7.4
  - @emotion/unitless@0.7.5
  - @emotion/utils@0.11.3

## 0.11.14

### Patch Changes

- [`a55f3d49`](https://github.com/emotion-js/emotion/commit/a55f3d49c2febdf7eb1bede3f12da13c3efa1399) [#1581](https://github.com/emotion-js/emotion/pull/1581) Thanks [@Andarist](https://github.com/Andarist)! - Don't cause invalid rule to be serialized when using object style with falsy value

* [`ca95f385`](https://github.com/emotion-js/emotion/commit/ca95f385f7ce3da6d53de1a652b3b219f11434c4) [#1580](https://github.com/emotion-js/emotion/pull/1580) Thanks [@Andarist](https://github.com/Andarist)! - Warn about `undefined` being used as object style's key

## 0.11.13

### Patch Changes

- [`3b7e2f2e`](https://github.com/emotion-js/emotion/commit/3b7e2f2e27499b7263341bb83cfc20c8fc51d237) Thanks [@mitchellhamilton](https://github.com/mitchellhamilton)! - Fix flow errors

## 0.11.12

### Patch Changes

- [`4fc5657a`](https://github.com/emotion-js/emotion/commit/4fc5657ac8d0002322321cfbfc254b7196d27387) [#1219](https://github.com/emotion-js/emotion/pull/1219) Thanks [@Andarist](https://github.com/Andarist)! - Add dev hint about css object being stringified by accident

* [`10211951`](https://github.com/emotion-js/emotion/commit/10211951051729b149930a8646de14bae9ae1bbc) [#1553](https://github.com/emotion-js/emotion/pull/1553) Thanks [@Andarist](https://github.com/Andarist)! - Add dev warning about keyframes being interpolated into plain strings.

- [`57a767ea`](https://github.com/emotion-js/emotion/commit/57a767ea3dd18eefbbdc7269cc13128caad65286) [#1560](https://github.com/emotion-js/emotion/pull/1560) Thanks [@Andarist](https://github.com/Andarist)! - Fix composition of styles without a final semicolon in a declaration block

## 0.11.11

- Updated dependencies [c81c0033]:
  - @emotion/hash@0.7.3
  - @emotion/memoize@0.7.3

## 0.11.10

### Patch Changes

- [66cda641](https://github.com/emotion-js/emotion/commit/66cda64128631790b81e3c9df273a972358ea593) [#1478](https://github.com/emotion-js/emotion/pull/1478) Thanks [@Andarist](https://github.com/Andarist)! - Add warnings about using illegal escape sequences

## 0.11.9

### Patch Changes

- [c257d2a3](https://github.com/emotion-js/emotion/commit/c257d2a3) [#1420](https://github.com/emotion-js/emotion/pull/1420) Thanks [@Andarist](https://github.com/Andarist)! - Fix for opaque keyframes object being used as value for animation & animationName in object styles

## 0.11.8

### Patch Changes

- [c0eb604d](https://github.com/emotion-js/emotion/commit/c0eb604d) [#1419](https://github.com/emotion-js/emotion/pull/1419) Thanks [@mitchellhamilton](https://github.com/mitchellhamilton)! - Update build tool

## 0.11.7

### Patch Changes

- [757bd86d](https://github.com/emotion-js/emotion/commit/757bd86d) [#1378](https://github.com/emotion-js/emotion/pull/1378) Thanks [@Andarist](https://github.com/Andarist)! - Fixed issue with camelCased custom properties not being handled correctly in object styles
