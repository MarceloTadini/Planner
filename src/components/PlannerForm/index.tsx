import * as S from "./styles";
import {useForm} from "react-hook-form"
import {z} from "zod"
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from 'axios'; // Import do Axios
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
import { zodResolver } from "@hookform/resolvers/zod";
import { Plan } from "../../types";
import { useNavigate } from "react-router-dom";

const tasksFiltersSchema = z.object({
    title: z.string().min(1, { message: "O título é obrigatório!" }),
    description: z.string().min(1, { message: "A descrição é obrigatória!" }),
    location: z.string().min(1, { message: "O local é obrigatório!" }),
    date: z.string().min(1, { message: "A data é obrigatória!" }).transform(str => new Date(str)),
    participants: z.string().optional()
})

export type TasksFiltersSchema = z.infer<typeof tasksFiltersSchema>

function PlannerForm({initialData, isEdit}: {initialData?: Plan;  isEdit?: boolean}) {
  const {register, reset,handleSubmit, formState: {errors}} = useForm<TasksFiltersSchema>({
    resolver: zodResolver(tasksFiltersSchema),
    defaultValues: initialData || {},
  })
  const navigate = useNavigate();


  async function handleFilterTasks(data: TasksFiltersSchema) {
    try {
      if (isEdit) {
        // Se isEdit for verdadeiro, realiza a atualização (método PUT)
        const response = await axios.put(`http://localhost:8080/api/planner/${initialData?._id}`, data);
        console.log('Resposta da API:', response);
        toast.success('Atividade atualizada com sucesso!');
        navigate("/");
      } else {
        // Caso contrário, realiza a criação (método POST)
        const response = await axios.post('http://localhost:8080/api/planner', data);
        console.log('Resposta da API:', response);
        toast.success('Atividade cadastrada com sucesso!');
      }
      reset();
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      toast.error('Falha ao cadastrar/atualizar, tente novamente mais tarde!');
      }
  }

  return (
    <S.Container>
      <S.TaskGeneratorForm onSubmit={handleSubmit(handleFilterTasks)}>
        <S.TaskLabel htmlFor="title">Título:</S.TaskLabel>
        <S.Input
          type="text"
          id="title"
          placeholder="Adicione um título"
          {...register('title', {value: initialData?.title  || ''})}
        />
        {errors.title && <S.ErrorMessage>{errors.title.message}</S.ErrorMessage>}

        <S.TaskLabel htmlFor="description">Descrição:</S.TaskLabel>
        <S.Input
          type="text"
          id="description"
          placeholder="Adicione uma descrição "
          {...register('description', {value: initialData?.description  || ''})}
        />
        {errors.description && <S.ErrorMessage>{errors.description.message}</S.ErrorMessage>}

        <S.TaskLabel htmlFor="location">Local</S.TaskLabel>
        <S.Input
          type="text"
          id="location"
          placeholder="Adicione um local "
          {...register('location', {value: initialData?.location  || ''})} 
        />
         {errors.location && <S.ErrorMessage>{errors.location.message}</S.ErrorMessage>} {/* Exibir mensagem de erro */}
          
         <S.TaskLabel htmlFor="date">Data:</S.TaskLabel>
        <S.Input
          type="date"
          id="date"
          placeholder="Adicione uma data"
          {...register('date')} 
        />
        {errors.date && <S.ErrorMessage>{errors.date.message}</S.ErrorMessage>}


        <S.TaskLabel htmlFor="participants">Participantes:</S.TaskLabel>
        <S.Input
          type="text"
          id="participants"
          placeholder="Adicione os participantes"
          {...register('participants', {value: initialData?.participants || ''})} 

        />

        <S.AddTask >Criar <IoIosAddCircleOutline /></S.AddTask>
      </S.TaskGeneratorForm>
    </S.Container>
  );
}

export default PlannerForm;
