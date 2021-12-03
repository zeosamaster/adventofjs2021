import { Item } from "../types/item";

export enum ActionType {
  "ADD_ITEM" = "ADD_ITEM",
  "REMOVE_ITEM" = "REMOVE_ITEM",
}

interface ActionWithPayload<A, P> {
  type: A;
  payload: P;
}

export type AddAction = ActionWithPayload<ActionType.ADD_ITEM, { item: Item }>;
export type RemoveAction = ActionWithPayload<
  ActionType.REMOVE_ITEM,
  { item: Item }
>;

export type CartAction = AddAction | RemoveAction;

export function addItemAction(item: Item): CartAction {
  return { type: ActionType.ADD_ITEM, payload: { item } };
}

export function removeItemAction(item: Item): CartAction {
  return { type: ActionType.REMOVE_ITEM, payload: { item } };
}
