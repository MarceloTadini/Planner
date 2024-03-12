import * as S from "./styles";
import logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaPrint } from "react-icons/fa";

function Header() {
  const location = useLocation();

  return (
    <S.Container>
      <img src={logo} alt="To Do Logo" />
      {location.pathname === "/" && (
        <div>
          <Link to="/planner">
            <S.CreateButton>Cadastrar Atividade</S.CreateButton>
          </Link>
          <Link to="/">
            <S.PDFButton>Imprimir <FaPrint /></S.PDFButton>
          </Link>
        </div>
        
      )}
    </S.Container>
  );
}

export default Header;
