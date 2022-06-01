import BonusTransfersType from 'types/bonusTransfer';

type Edge = {
  cursor: string;
  node: BonusTransfersType;
};

export type BonusTransfersData = {
  bonusTransfers: {
    edges: Edge[];
  };
}
