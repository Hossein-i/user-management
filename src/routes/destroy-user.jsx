import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeUser } from "../redux/slices/UsersSlice";

const DestroyUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(removeUser(userId));
    navigate("/", { replace: true });
  }, [dispatch, navigate, userId]);

  return null;
};

export default DestroyUser;
