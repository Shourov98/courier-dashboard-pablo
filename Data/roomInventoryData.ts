export interface Item {
  name: string;
  quantity: number;
  checked: boolean;
}

export interface RoomInventory {
  items: Item[];
}

export const rooms = [
  "Living Room",
  "Dining Room",
  "Kitchen",
  "Office",
  "Bedrooms",
  "Bathrooms & Toilet",
  "Garden & Shed",
  "Boxes & Other",
];

export const roomInventoryData: Record<string, RoomInventory> = {
  "Living Room": {
    items: [
      { name: "Sofa", quantity: 1, checked: true },
      { name: "TV", quantity: 1, checked: false },
      { name: "Coffee Table", quantity: 1, checked: true },
      { name: "Lamp", quantity: 2, checked: false },
      { name: "Curtains", quantity: 4, checked: true },
    ],
  },
  "Dining Room": {
    items: [
      { name: "Dining Table", quantity: 1, checked: true },
      { name: "Chairs", quantity: 6, checked: false },
      { name: "Crockery Set", quantity: 1, checked: true },
    ],
  },
  Kitchen: {
    items: [
      { name: "Refrigerator", quantity: 1, checked: true },
      { name: "Microwave", quantity: 1, checked: false },
      { name: "Utensils", quantity: 20, checked: true },
      { name: "Dishwasher", quantity: 1, checked: false },
    ],
  },
  Office: {
    items: [
      { name: "Desk", quantity: 1, checked: true },
      { name: "Chair", quantity: 1, checked: true },
      { name: "Computer", quantity: 1, checked: false },
      { name: "Printer", quantity: 1, checked: false },
    ],
  },
  Bedrooms: {
    items: [
      { name: "Bed", quantity: 2, checked: true },
      { name: "Wardrobe", quantity: 2, checked: false },
      { name: "Mirror", quantity: 1, checked: true },
    ],
  },
  "Bathrooms & Toilet": {
    items: [
      { name: "Shower", quantity: 1, checked: true },
      { name: "Toilet", quantity: 1, checked: true },
      { name: "Sink", quantity: 1, checked: true },
      { name: "Mirror", quantity: 1, checked: false },
    ],
  },
  "Garden & Shed": {
    items: [
      { name: "Lawn Mower", quantity: 1, checked: false },
      { name: "Garden Hose", quantity: 1, checked: true },
      { name: "Tools", quantity: 10, checked: false },
    ],
  },
  "Boxes & Other": {
    items: [
      { name: "Storage Boxes", quantity: 5, checked: false },
      { name: "Miscellaneous Items", quantity: 3, checked: true },
    ],
  },
};
