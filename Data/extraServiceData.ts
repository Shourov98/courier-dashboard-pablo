export type ExtraServiceKey =
  | "packing"
  | "movingLift"
  | "nutsBolts"
  | "boxSmall"
  | "boxMedium"
  | "boxLarge"
  | "boxWardrobe";

export interface ExtraServices {
  packing:{ checked: boolean; quantity: number };
  movingLift:{ checked: boolean; quantity: number };
  nutsBolts: { checked: boolean; quantity: number };
  boxSmall: { checked: boolean; quantity: number };
  boxMedium: { checked: boolean; quantity: number };
  boxLarge: { checked: boolean; quantity: number };
  boxWardrobe: { checked: boolean; quantity: number };
}

// ✅ Example JSON data (you can edit freely)
export const extraServicesData: ExtraServices = {
  packing:{ checked: true, quantity: 5 },
  movingLift: { checked: true, quantity: 5 },
  nutsBolts: { checked: true, quantity: 5 },
  boxSmall: { checked: true, quantity: 2 },
  boxMedium: { checked: true, quantity: 3 },
  boxLarge: { checked: false, quantity: 1 },
  boxWardrobe: { checked: false, quantity: 0 },
};
