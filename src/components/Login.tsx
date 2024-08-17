import { useState } from "react";

const expectedPassword = import.meta.env.VITE_PASSWORD as string;

type LoginProps = React.PropsWithoutRef<{
  handlePasswordSubmit: () => void;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}>;

export const Login = ({
  handlePasswordSubmit,
  password,
  setPassword,
}: LoginProps) => (
  <form onSubmit={handlePasswordSubmit}>
    <div className="rounded-md mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-secondary">
      <label
        htmlFor="password"
        className="block text-xs font-medium text-gray-900"
      >
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="mt-6">
      <button
        type="submit"
        className="flex w-full drop-shadow-sm justify-center rounded-md bg-highlight px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-highlight/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight/75 transition"
      >
        Login
      </button>
    </div>
  </form>
);
export default Login;

export const useLogin = () => {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handlePasswordSubmit = () => {
    if (password === expectedPassword) {
      setLoggedIn(true);
    } else {
      alert("Incorrect password");
    }
  };

  return { handlePasswordSubmit, password, setPassword, loggedIn };
};
