import * as S from "./styles";
import logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";


function Header() {
  const location = useLocation();

  return (
    <S.Container>
      <img src={logo} alt="To Do Logo" />
      {location.pathname === "/" && (
        <Link to="/planner">
          <S.LinkToPlanner>Cadastrar Atividade</S.LinkToPlanner>
        </Link>
      )}
    </S.Container>
  );
}

export default Header;
