import { UserData } from "../UsersList/types";

import "./UserRepresentation.scss";

type UserRepresentationProps = Pick<UserData, "name" | "email">;

const UserRepresentation = ({ name, email }: UserRepresentationProps) => {
  return (
    <div className="ds-user">
      <div className="ds-user-initial">
        <span>{name.charAt(0).toUpperCase()}</span>
      </div>
      <div className="ds-user-info">
        <span className="ds-user-name">{name}</span>
        <span className="ds-user-mail">{email}</span>
      </div>
    </div>
  );
};

export default UserRepresentation;
