import * as S from "./styles"
import logo from "../../assets/Logo.png"
import { Link, useLocation } from "react-router-dom"
import { CreateButton } from "../Buttons/styles"

const Header: React.FC = () =>  {
  const location = useLocation()

  return (
    <S.Container>
      <img src={logo} alt="To Do Logo" />
      {location.pathname === "/" && (
        <div>
          <Link to="/planner">
            <CreateButton>Cadastrar Atividade</CreateButton>
          </Link>
        </div>
        
      )}
    </S.Container>
  );
}

export default Header
