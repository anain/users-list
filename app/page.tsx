import UsersList from "./src/components/UsersList/UsersList";
import usersData from "./src/api/mocked_users_list.json";

import "../app/src/style/style.scss";

export default function Home() {
  return (
    <div className="page">
      <h2>Users ({usersData.length})</h2>
      <UsersList users={usersData} />
    </div>
  );
}
