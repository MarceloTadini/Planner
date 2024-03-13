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
import { useState } from "react";

const isValidDate = (str: string): boolean => {
  const date = new Date(str);
  // Verifique se o ano, mês e dia são válidos
  return (
    date.getFullYear() > 0 &&
    date.getMonth() >= 0 &&
    date.getMonth() < 12 &&
    date.getDate() > 0 &&
    date.getDate() <= new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  );
};

const tasksFiltersSchema = z.object({
    title: z.string().min(1, { message: "O título é obrigatório!" }).max(22, {message: "O título deve ter no máximo 22 caractéres!"}),
    description: z.string().min(1, { message: "A descrição é obrigatória!" }).max(110, {message: "A descrição está muito extensa!"}),
    location: z.string().min(1, { message: "O local é obrigatório!" }).max(22, {message: "O título deve ter no máximo 22 caractéres!"}),
    date: z
    .string()
    .min(1, { message: "A data é obrigatória!" })
    .transform((str) => {
      if (!isValidDate(str)) {
        throw new Error("Data inválida!");
      }
      return new Date(str);
    }),
    participants: z.string().max(40 ,{message: "A quantidade de participantes está muito extensa!"}).optional()
})

export type TasksFiltersSchema = z.infer<typeof tasksFiltersSchema>

function PlannerForm({initialData, isEdit}: {initialData?: Plan;  isEdit?: boolean}) {
  const {register, reset,handleSubmit, formState: {errors}} = useForm<TasksFiltersSchema>({
    resolver: zodResolver(tasksFiltersSchema),
    defaultValues: initialData || {},
  })
  const navigate = useNavigate();
  const [isParticipantsEnabled, setIsParticipantsEnabled] = useState(false);
  const buttonText = isEdit ? "Atualizar" : "Criar";


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

        <S.TaskLabel htmlFor="location">Local:</S.TaskLabel>
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

        <S.TaskLabel htmlFor="enableParticipants">
          Possui participantes?
         
          <input 
              type="checkbox"
              id="enableParticipants" 
              checked={isParticipantsEnabled}
              onChange={() => setIsParticipantsEnabled(!isParticipantsEnabled)}
          />
          <span> Sim</span>
          
        </S.TaskLabel>
        


        <S.TaskLabel htmlFor="participants">Participantes:</S.TaskLabel>
        <S.Input
          type="text"
          id="participants"
          placeholder="Adicione os participantes"
          {...register('participants', {value: initialData?.participants || ''})} 
          disabled={!isParticipantsEnabled}
        />
         {errors.participants && <S.ErrorMessage>{errors.participants.message}</S.ErrorMessage>} {/* Exibir mensagem de erro */}


        <S.AddTask >{buttonText} <IoIosAddCircleOutline /></S.AddTask>
      </S.TaskGeneratorForm>
    </S.Container>
  );
}

export default PlannerForm;
