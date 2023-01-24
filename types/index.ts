export type TopicType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export interface IApiResponse {
  success: boolean;
  message: string;
  data?: Record<string, any>;
}

export type TopicsResType = IApiResponse & {
  data?: { topics: TopicType[] };
};
