import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";

export const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};
