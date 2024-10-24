import { withAuthenticationRequired } from "@auth0/auth0-react";

import PageLoader from "./page-loader";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { setupInterceptors } from "../axios";

export const AuthenticationGuard = ({
  component,
}: {
  component: React.ComponentType;
}) => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently().then((token: string) => {
      setupInterceptors(token);
    });
  }, []);

  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <Component />;
};
