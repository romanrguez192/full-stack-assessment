interface IAttributes {
  question: string;
  answer: string;
}

export interface IFaq {
  id: number;
  attributes: IAttributes;
}

export interface IResponse {
  data: IFaq[];
}
