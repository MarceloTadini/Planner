import * as S from "./styles";
import {useForm} from "react-hook-form"
import {z} from "zod"
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from 'axios'; // Import do Axios
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
import { zodResolver } from "@hookform/resolvers/zod";

const tasksFiltersSchema = z.object({
    title: z.string().min(1, { message: "O título é obrigatório!" }),
    description: z.string().min(1, { message: "A descrição é obrigatória!" }),
    location: z.string().min(1, { message: "O local é obrigatório!" }),
    date: z.string().min(1, { message: "A data é obrigatória!" }).transform(str => new Date(str)),
    participants: z.string().optional()
})

type TasksFiltersSchema = z.infer<typeof tasksFiltersSchema>

function PlannerForm() {
  const {register, reset,handleSubmit, formState: {errors}} = useForm<TasksFiltersSchema>({
    resolver: zodResolver(tasksFiltersSchema)
  })

  async function handleFilterTasks(data: TasksFiltersSchema) {
    try {
        const response = await axios.post('http://localhost:8080/api/planner', data);
        console.log('Resposta da API:', response);
        toast.success('Atividade cadastrada com sucesso!');
        reset()
      } catch (error) {
        console.error('Erro ao enviar dados:', error);
        toast.error('Falha ao cadastrar, tente novamente mais tarde!');
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
          {...register('title')}
        />
        {errors.title && <S.ErrorMessage>{errors.title.message}</S.ErrorMessage>}

        <S.TaskLabel htmlFor="description">Descrição:</S.TaskLabel>
        <S.Input
          type="text"
          id="description"
          placeholder="Adicione uma descrição "
          {...register('description')}
        />
        {errors.description && <S.ErrorMessage>{errors.description.message}</S.ErrorMessage>}

        <S.TaskLabel htmlFor="location">Local</S.TaskLabel>
        <S.Input
          type="text"
          id="location"
          placeholder="Adicione um local "
          {...register('location')} 
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
          {...register('participants')} 

        />

        <S.AddTask >Criar <IoIosAddCircleOutline /></S.AddTask>
      </S.TaskGeneratorForm>
    </S.Container>
  );
}

export default PlannerForm;
