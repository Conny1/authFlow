import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import type { RootState } from "../redux/store";
import { Profile } from "../components";

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.value);

  return (
    <div className="p-6 space-y-8">
      <ToastContainer />
      <p>Welcome to the dashboard {user.first_name} </p>
      <Profile />
    </div>
  );
};

export default Dashboard;
