import { type InferInsertModel, type InferSelectModel, eq } from 'drizzle-orm';
import { BaseRepository } from './base';
import { assets } from '@/server/database/schema';

type Assets = typeof assets;
export type Asset = InferSelectModel<Assets>;
type Create = InferInsertModel<Assets>;

export class AssetRepository extends BaseRepository<Assets> {
  constructor() {
    super(assets);
  }

  async create(values: Create) {
    const result = await this.drizzle.insert(this.table).values(values);

    return this.createResponse(result);
  }

  async createMany(values: Create[]) {
    const result = await this.drizzle.insert(this.table).values(values);

    return this.createManyResponse(result);
  }

  async update(values: Create, id: number) {
    const result = await this.drizzle
      .update(this.table)
      .set(values)
      .where(eq(this.table.id, id));

    return this.updateResponse(result, id);
  }
}
