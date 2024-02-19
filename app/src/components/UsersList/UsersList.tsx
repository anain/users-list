"use client";

import { UserData } from "./types";
import Filter from "../Filter/Filter";
import { useEffect, useState } from "react";
import { TEAMS } from "./const";
import UserRow from "./UserRow";
import Pagination from "../Pagination/Pagination";

import "./UsersList.scss";

type Props = {
  users: UserData[];
};

const HEADERS = ["User", "Teams", "Access", "Last Login"];

const UsersList = ({ users }: Props) => {
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>(users);

  const teams = TEAMS;

  const categories = teams.map((key) => ({
    id: key,
    value: key,
  }));

  const applyFilterTeams = (teams: string[]) => {
    setFilteredUsers(
      users.filter(
        (user) =>
          !teams.length ||
          user.groups.find((group) => teams.find((team) => team === group))
      )
    );
  };

  return (
    <div className="users-list">
      <div className="users-lists__buttons">
        <Filter
          categories={categories}
          onFilter={applyFilterTeams}
          icon="users-2.svg"
        />
      </div>
      <table className="users-list-table">
        <thead>
          <tr className="users-list-table__headers">
            {HEADERS.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredUsers?.map((user) => (
            <UserRow {...user} key={`${user.id}${user.name}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
