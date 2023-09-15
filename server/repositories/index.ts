import { UserRepository } from './user';

const repositories = {
  user: new UserRepository(),
};

type Repositories = typeof repositories;
type RepositoryKey = keyof Repositories;

export function getRepository<T extends RepositoryKey>(
  key: T,
): Repositories[T] {
  return repositories[key];
}
