export interface Refrigerant {
  _id: string;
  name: string;
  ptFactor: number;
  ptOffset: number;
}

export interface Refrigerants {
  status: string;
  results: string,
  data: Refrigerant[]
}
