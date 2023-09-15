import { type InferInsertModel, type InferSelectModel, eq } from 'drizzle-orm';
import { BaseRepository } from './base';
import { users } from '~/server/database/schema';

type Users = typeof users;
export type User = InferSelectModel<Users>;
type Create = InferInsertModel<Users>;

export class UserRepository extends BaseRepository<Users> {
  constructor() {
    super(users);
  }

  async create(values: Create) {
    const result = await this.drizzle.insert(this.table).values(values);

    return this.createResponse(result);
  }

  emailExists(address: string, id?: number) {
    return this.existsWithEqualConstraint(this.table.address, address, id);
  }

  getLoginData(address: string) {
    return this.drizzle.query.users.findFirst({
      columns: { id: true, address: true },
      where: eq(this.table.address, address),
    });
  }
}
