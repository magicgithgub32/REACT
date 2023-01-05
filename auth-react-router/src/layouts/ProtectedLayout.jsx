import { Navigate, useOutlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import AppBar from "../components/AppBar";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) return <Navigate to="/" />;

  return (
    <>
      <AppBar
        pages={[
          { label: "Settings 🛠", path: "setting" },
          { label: "Profile 👩‍⚕️", path: "profile" },
        ]}
      />
      {outlet}
    </>
  );
};
