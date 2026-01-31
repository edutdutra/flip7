export enum ECardType {
  PLUS = "PLUS",
  NUMBER = "NUMBER",
  MULTIPLY = "MULTIPLY",
}

export interface ICard {
  value: number;
  type: ECardType;
}

export type TCardColorKey =
  | "card_0"
  | "card_1"
  | "card_2"
  | "card_3"
  | "card_4"
  | "card_5"
  | "card_6"
  | "card_7"
  | "card_8"
  | "card_9"
  | "card_10"
  | "card_11"
  | "card_12"
  | "card_special";
