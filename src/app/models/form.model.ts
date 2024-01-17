import { Category } from './category.model';
import { Page } from './page.model';

export interface Form {
  id?: number;
  name?: string;
  category?: Category;
  page?: Page;
}
