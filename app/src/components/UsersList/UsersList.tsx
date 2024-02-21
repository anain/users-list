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
  usersPerPage?: number;
};

const HEADERS = ["User", "Teams", "Access", "Last Login"];

const UsersList = ({ users, usersPerPage }: Props) => {
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>(users);
  const [displayedUsers, setDisplayedUsers] = useState<UserData[] | undefined>(
    undefined
  );
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

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

  useEffect(() => {
    if (!usersPerPage) return;
    setPageNumber(Math.ceil(filteredUsers.length / usersPerPage));
  }, [filteredUsers]);

  useEffect(() => {
    if (!usersPerPage) return;
    setDisplayedUsers(
      filteredUsers.slice(
        activePageIndex * usersPerPage,
        activePageIndex * usersPerPage + usersPerPage
      )
    );
  }, [filteredUsers, activePageIndex]);

  useEffect(() => {
    if (!usersPerPage) return;
    if (activePageIndex > pageNumber - 1) setActivePageIndex(pageNumber - 1);
  }, [pageNumber]);

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
          {displayedUsers?.map((user) => (
            <UserRow {...user} key={`${user.id}${user.name}`} />
          ))}
        </tbody>
      </table>
      {usersPerPage && (
        <Pagination
          pageNumber={pageNumber}
          activePage={activePageIndex}
          onPageClick={(page) => setActivePageIndex(page)}
          className="users-list-table__pagination"
        />
      )}
    </div>
  );
};

export default UsersList;
