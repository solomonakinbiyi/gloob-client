import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context";

const AdminRoute = ({ children }) => {
  const [state, setState] = useContext(UserContext);

  const [ok, setOk] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (state && state.token) getCurrentAdmin();
  }, [state && state.token]);

  const getCurrentAdmin = async () => {
    try {
      const { data } = await axios.get(`/current-admin`);
      if (data.ok) setOk(true);
    } catch (error) {
      router.push("/");
    }
  };

  process.browser &&
    state === null &&
    setTimeout(() => {
      getCurrentAdmin();
    }, 1000);

  return !ok ? (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-primary p-5"
    />
  ) : (
    <>{children}</>
  );
};

export default AdminRoute;
