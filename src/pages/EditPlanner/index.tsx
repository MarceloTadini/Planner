import { useEffect, useState } from "react";
import PlannerForm from "../../components/PlannerForm"
import { useParams } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Plan } from "../../types";
import { useLoading } from "../../contexts/useLoading";
import { Loader } from "../../components/Loader/styles";

const EditPlanner: React.FC = () => {

    const { id } = useParams(); // Extrai o ID da URL
    const [planData, setPlanData] = useState<Plan>();
    const { isLoading, setLoading } = useLoading();


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/api/planner/${id}`);
            const { data } = response;
            setPlanData(data[0]);
            setLoading(false)
          } catch (error) {
            console.error('Erro ao buscar dados do plano:', error);
            setLoading(false)
            toast.error('Erro ao carregar os dados da API');
          }
        };
      
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
      
    return(
        <div>
            {isLoading ? (
              <Loader></Loader>
            ) : (
              planData && <PlannerForm isEdit initialData={planData} />
            )}
        </div>
    )
}

export default EditPlanner