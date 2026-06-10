export interface Course {
  id: number;
  title: string;
  price: number;
  coverUri: string;
  description?: string;
  originalPrice?: number;
  tag?: string;
  studentsCount?: number;
}
