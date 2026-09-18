export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface WorkItem {
  id: string;
  index: string;
  title: string;
  category: string;
  imageUrl: string;
  tools: string[];
  client: string;
  duration: string;
  synopsis: string;
}

export interface HonorItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface ContactChannel {
  id: string;
  title: string;
  tag: string;
  description: string;
  handle: string;
  href: string;
  iconType: 'telegram' | 'instagram' | 'phone' | 'email' | 'linkedin';
}
