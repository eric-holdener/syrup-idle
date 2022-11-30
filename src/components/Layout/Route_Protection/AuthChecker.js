import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthChecker(props) {
  const character = useSelector((state) => state.character);

  if (!character) {
    return (
      <Navigate to="/character-select"/>
    );
  } else {
    return props.children;
  }

}