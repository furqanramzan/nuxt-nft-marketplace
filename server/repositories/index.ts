import { AssetRepository } from './asset';
import { UserRepository } from './user';

const repositories = {
  user: new UserRepository(),
  asset: new AssetRepository(),
};

type Repositories = typeof repositories;
type RepositoryKey = keyof Repositories;

export function getRepository<T extends RepositoryKey>(
  key: T,
): Repositories[T] {
  return repositories[key];
}
