import * as S from "./styles"
import logo from "../../assets/Logo.png"
import { IoIosAddCircleOutline } from "react-icons/io";


function Header(){
    return(
        <S.Container>
            <img src={logo} alt="To Do Logo" />
            <S.TaskGenerator>
                <S.Input placeholder="Adicione uma nova tarefa"></S.Input>
                <S.AddTask>Criar <IoIosAddCircleOutline /></S.AddTask>
            </S.TaskGenerator>
        </S.Container>
    )
}

export default Header