import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button
      className="m-2 inline-flex items-center justify-center px-3 py-2 text-base font-medium text-center text-white bg-violet-600 rounded-lg hover:bg-violet-900 focus:ring-4 focus:ring-violet-300"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};
