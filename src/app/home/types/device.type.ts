
export interface Device {
  _id: string;
  name: string;
  refrigerantType: { _id: string; name: string };
  capacity: number;
}

export interface Devices{
  status: string;
  results: string,
  data: Device[]
}

