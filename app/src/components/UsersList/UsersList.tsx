import "./UsersList.scss";
import { UserData } from "./types";
import { formatDate } from "./utils";
import UserRepresentation from "../UserRepresentation/UserRepresentation";
import Chip from "../Chip/Chip";

type Props = {
  users: UserData[];
};

const HEADERS = ["User", "Teams", "Access", "Last Login"];

const UsersList = ({ users }: Props) => {
  return (
    <div className="users-list">
      <table className="users-list-table">
        <thead>
          <tr>
            {HEADERS.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <UserRepresentation name={user.name} email={user.email} />
              </td>
              <td>
                <Chip label={user.groups.toString()} icon={"users-2.svg"} />
              </td>
              <td>
                <span className="users-list-access">
                  On {user.access.length} products
                </span>
              </td>
              <td>
                <span className="users-list-date">
                  {formatDate(user.last_login)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
