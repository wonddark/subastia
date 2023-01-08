export type POSTOfferParameters = {
  name: string;
  initialBid: number;
  description: string;
};

export type GETOffersParameters = {
  page?: number;
  itemsPerPage?: number;
  open?: boolean;
  name?: string;
  description?: string;
};
