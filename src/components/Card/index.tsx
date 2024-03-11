import * as S from "./styles"
import { CardProps } from "../../types"
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEditCalendar } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Card({ plan }: CardProps){

    const formatDate = (date: Date) => {
        // Use toLocaleDateString for "dd/mm/yyyy" format (customizable)
        return new Date(date).toLocaleDateString('pt-BR'); // Adjust locale for 'pt-BR'
      };

      const handleDelete = () => {
        const confirmDelete = window.confirm("Deseja realmente excluir o planejamento?");
        if (confirmDelete) {
          // Envia uma requisição para a API para excluir o plano
          axios.delete(`http://localhost:8080/api/planner/${plan._id}`)
            .then(() => {
              toast.success('Planejamento excluído com sucesso!');
            })
            .catch(error => {
              console.error("Erro ao excluir o planejamento", error);
              toast.error('Erro ao excluir o planejamento');
            });
        }
      };


    return(
        <S.Container>
                <S.CardHeader>
                    {formatDate(plan.date)}
                </S.CardHeader>
                <S.CardBody>
                    <S.CardTitle>
                        {plan.title} 
                    </S.CardTitle>
                    <S.CardDescription>
                        {plan.description}
                    </S.CardDescription>
                    <S.CardLocation>
                        <FaMapLocationDot />
                        <p>{plan.location}</p>
                    </S.CardLocation>
                    <S.CardParticipants>
                       <span>Participantes: </span> {plan.participant}
                    </S.CardParticipants>
                </S.CardBody>
                <S.CardFooter>
                    <button title="Editar">
                        <MdEditCalendar />
                    </button>
                    <button title="Excluir" onClick={handleDelete}>
                        <MdDelete />
                    </button>
                </S.CardFooter>
        </S.Container>
    )
}

export default Card