import User from './User';

const UsersList = ({ users, selectedUser, setSelectedUser }) => (
  <>
    {users.map(user => (
      <User
        key={user.id}
        user={user}
        isActive={selectedUser && selectedUser.id === user.id}
        onClick={() => setSelectedUser(user)}
      />
    ))}
  </>
);

export default UsersList;
