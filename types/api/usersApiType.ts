import User from 'types/user';

type Edge = {
  cursor: string;
  node: User;
};

export type UsersData = {
  users: {
    edges: Edge[];
  };
}
