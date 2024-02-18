import Chip from "../Chip/Chip";
import UserRepresentation from "../UserRepresentation/UserRepresentation";
import { UserData } from "./types";
import { formatDate } from "./utils";

const UserRow = (user: UserData) => {
  return (
    <tr>
      <td>
        <UserRepresentation name={user.name} email={user.email} />
      </td>
      <td>
        {user.groups.length > 0 && (
          <Chip label={user.groups.toString()} icon={"users-2.svg"} />
        )}
      </td>
      <td>
        <span className="users-list-access">
          On {user.access.length} products
        </span>
      </td>
      <td>
        <span className="users-list-date">{formatDate(user.last_login)}</span>
      </td>
    </tr>
  );
};

export default UserRow;
