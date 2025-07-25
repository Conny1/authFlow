import { Outlet, useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { persistor, type RootState } from "../redux/store";
import { useEffect } from "react";
import { useGetauthuserQuery } from "../redux/apislice";
import { logout, updateUserData } from "../redux/userSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.value);
  const location = useLocation();
  // Only run the query if user has a token
  const { data } = useGetauthuserQuery(undefined, {
    skip: !user.token,
  });

  useEffect(() => {
    if (data && "data" in data && user.token) {
      dispatch(updateUserData({ ...data.data, token: user.token }));
    }
  }, [data, dispatch, user.token]);

  useEffect(() => {
    if (!user.token) {
      navigate("/auth");
    }
  }, [user.token, location.pathname, navigate]);
  const logOut = () => {
    dispatch(logout());
    persistor.purge();
    setTimeout(() => {
      navigate("/auth");
    }, 1500);
  };
  return (
    <div className="min-h-screen">
      <button onClick={logOut}>Log out</button>

      <Outlet />
    </div>
  );
};

export default Layout;
