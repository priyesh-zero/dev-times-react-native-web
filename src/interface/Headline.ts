interface source {
  id?: string;
  name: string;
}

export interface article {
  author?: string;
  content: string;
  description: string;
  publishedAt: string;
  source: source;
  title: string;
  url: string;
  urlToImage: string;
}

export interface HeadlineResponse {
  status: string;
  totalResults: number;
  articles: article[];
}
