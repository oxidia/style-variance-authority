import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

export type StyleValue = StyleProp<ViewStyle & TextStyle & ImageStyle>;

export type ConfigSchema = Record<string, Record<string, StyleValue>>;
type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;

type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};

export interface Config<T extends ConfigSchema> {
  base?: StyleValue;
  variants?: T;
  defaultVariants?: ConfigVariants<T>;
}

export type Props<T extends ConfigSchema> = ConfigVariants<T>;

export type OmitUndefined<T> = T extends undefined ? never : T;

export type VariantProps<Component extends (...args: any) => any> =
  OmitUndefined<Parameters<Component>[0]>;
