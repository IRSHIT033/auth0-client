import { User } from "@auth0/auth0-react";
import { LogoutButton } from "./buttons/logout-button";

const UserAvatar = ({ user }: { user: User }) => {
  return (
    <div className="fixed top-0 left-0">
      <div className="flex items-center gap-4">
        <img className="w-10 h-10 rounded-full" src={user.picture} alt="" />
        <div className="font-medium dark:text-white">
          <div>{user.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {user.email}
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default UserAvatar;
