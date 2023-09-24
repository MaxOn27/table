import React, {Fragment, useState} from 'react';
import tableData from "../json/table.json"

const Table = () => {
  const [data, setData] = useState(JSON.parse(JSON.stringify(tableData)));
  console.log(data)
  return (
    <div className="w-9/12">
      <h1 className="text-xl">Referrals - 345</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="w-full text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr className="w-full">
            <th scope="col" className="px-6 py-3">
              Referral event
            </th>
            <th scope="col" className="px-6 py-3">
              Advocate
            </th>
            <th scope="col" className="px-6 py-3">
              Friend
            </th>
            <th scope="col" className="px-6 py-3">
              Referral status
            </th>
          </tr>
          </thead>
          <tbody className="bg-white">
          {data && data.users.map(user => {
            return (<tr className="border-b">
              <td className="px-6 py-3">
                <tr>
                  <th>{user.purchase}</th>
                </tr>
                <tr>
                  <td>{user.date} </td>
                </tr>
                <tr>
                  <th>{user.paid}</th>
                </tr>
              </td>
              <td className="px-6 py-3">
                <tr>
                  <th>{user.advocate.email}</th>
                </tr>
                <tr>
                  <td>{user.advocate.role}</td>
                </tr>
              </td>
              <td className="px-6 py-3">
                <tr>
                  <th>{user.friend.email}</th>
                </tr>
                <tr>
                  <td>{user.friend.role}</td>
                </tr>
              </td>
              <td className="px-6 py-3">
                <tr>
                  <th>{user.referralStatus.status}</th>
                </tr>
                <tr>
                  <td className={user.referralStatus.stage === "Marked as fraud" ? "text-red-500" : ""}>{user.referralStatus.stage}</td>
                </tr>
              </td>
            </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;