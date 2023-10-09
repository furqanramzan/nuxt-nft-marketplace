import { number, object, string } from 'zod';

export const upsertAssetSchema = object({
  id: number().positive().optional(),
  name: string().min(1).max(255),
  slug: string().min(1).max(255),
  description: string().min(1).max(255),
  media: string().min(1).max(255),
});
