const User = ({ user, isActive, onClick }) => (
  <a
    data-cy="FilterUser"
    href="#/"
    onClick={onClick}
    className={isActive ? 'is-active' : ''}
  >
    {user.name}
  </a>
);

export default User;
