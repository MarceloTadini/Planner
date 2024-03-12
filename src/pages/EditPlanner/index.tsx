import { useEffect, useState } from "react";
import PlannerForm from "../../components/PlannerForm"
import { useParams } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Plan } from "../../types";

const EditPlanner: React.FC = () => {

    const { id } = useParams(); // Extrai o ID da URL
    const [planData, setPlanData] = useState<Plan>();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/api/planner/${id}`);
            const { data } = response;
            setPlanData(data[0]);
          } catch (error) {
            console.error('Erro ao buscar dados do plano:', error);
            toast.error('Erro ao carregar os dados da API');
          }
        };
      
        fetchData();
    }, [id]);
      
      
      // Certifique-se de incluir 'id' como dependência para reexecutar o efeito quando 'id' mudar

    return(
        <div>
            {planData && <PlannerForm isEdit initialData={planData} />}
        </div>
    )
}

export default EditPlanner