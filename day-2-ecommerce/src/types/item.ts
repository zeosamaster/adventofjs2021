export interface Item {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface CartItem {
  item: Item;
  quantity: number;
}
