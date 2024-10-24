import { useAuth0 } from "@auth0/auth0-react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <button
      className="m-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-violet-600 rounded-lg hover:bg-violet-900 focus:ring-4 focus:ring-violet-300"
      onClick={handleSignUp}
    >
      Sign Up
    </button>
  );
};
