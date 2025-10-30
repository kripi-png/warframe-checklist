// ---------- Moneys ----------
export type TMoney = number;
export type TDoubleMoney = [number, number];
export type TGeneralMoney = TMoney | TDoubleMoney;

// ---------- Items ----------
export type ItemId = `${number}_${number}`; // blockIndex_itemIndex
type TBaseItem<Money extends TGeneralMoney> = {
  readonly id: ItemId;
  readonly name: string;
  readonly price: Money;
  readonly wikiUrl: string;
  readonly isDrop?: boolean;
  checked: boolean;
};
export type TItem<Money extends TGeneralMoney> = TBaseItem<Money> & {
  readonly forHelminth?: boolean;
};
export type TArcane<Money extends TGeneralMoney> = TBaseItem<Money> & {
  ownedCount: number;
  currentLevel: number;
  readonly maxLevel: number;
};
export type TGeneralItem<Money extends TGeneralMoney = TGeneralMoney> =
  | TItem<Money>
  | TArcane<Money>;

// ---------- Blocks ----------
type TBlockBase<TItemType, TType extends 'item' | 'arcane'> = {
  readonly id: string;
  readonly title: string;
  readonly type: TType;
  items: TItemType[];
};
export type TItemBlock<Money extends TGeneralMoney> = TBlockBase<
  TItem<Money>,
  'item'
>;
export type TArcaneBlock<Money extends TGeneralMoney> = TBlockBase<
  TArcane<Money>,
  'arcane'
>;
export type TGeneralBlock<Money extends TGeneralMoney> =
  | TItemBlock<Money>
  | TArcaneBlock<Money>;

// ---------- Dataset ----------
export type DatasetBase<Money extends TGeneralMoney> = {
  money: Money;
  blocks: (TArcaneBlock<Money> | TItemBlock<Money>)[];
};
