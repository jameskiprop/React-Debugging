export default UserGreeting;
function UserGreeting({ user }) {
  return <h2>Welcome, {user ? user : "Guest"}!</h2>;
}
