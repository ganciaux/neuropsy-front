import { Item } from './item.model';

export interface Page {
  id?: number;
  name?: string;
  items?: Item[];
}
