import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <button
      className=" m-2 selection: inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-violet-600 rounded-lg hover:bg-violet-900 focus:ring-4 focus:ring-violet-300"
      onClick={handleLogin}
    >
      Log In
    </button>
  );
};
