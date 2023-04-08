import toast from 'react-hot-toast';

import { editUser, deleteUser } from '../utils/HandleApi';

const UserDetails = ({ users, getUsersData }) => {
  const handleEditUser = async user => {
    const name = prompt('Enter your name');
    const email = prompt('Enter your email');

    const data = await editUser(name, email, user);

    if (data.success) {
      toast.success(data.message);
      getUsersData();
    } else {
      toast.error(data.message);
    }
  };

  const handleDeleteUser = async userId => {
    const data = await deleteUser(userId);
    if (data.success) {
      toast.success(data.message);
      getUsersData();
    } else {
      toast.error(data.message);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
            User List
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Email
                </th>
                <th
                  colSpan="2"
                  className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users && users.length === 0 ? (
                <tr>
                  <td colSpan="4">
                    <h2 className="text-center my-4 text-xl">
                      No users data is available!
                    </h2>
                  </td>
                </tr>
              ) : (
                users &&
                users.map(user => (
                  <tr key={user._id}>
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3 flex justify-around" colSpan="2">
                      <button
                        className="hover:text-green-500"
                        onClick={() => handleEditUser(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="hover:text-red-500"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
