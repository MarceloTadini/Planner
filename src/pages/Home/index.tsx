import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Plan } from '../../types'
import Card from '../../components/Card'
import { MainWrapper } from '../../components/Wrapper/styles'
import { Loader } from '../../components/Loader/styles'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { usePDF } from "react-to-pdf"
import { PDFButton } from '../../components/Buttons/styles'
import { FaPrint } from "react-icons/fa"
import { useLoading } from '../../contexts/useLoading'
import { NotFound } from '../../components/NotFound/styles'


const Home: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([])
  const { isLoading, setLoading } = useLoading()

  const { targetRef, toPDF } = usePDF({
    method: "open",
    filename: "planner.pdf",
    page: {
      margin: {
        top: 20,
        bottom: 10,
        left: 40,
        right: 5,
      },
    }
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/planner')
        const sortedPlans = response.data.sort((a: Plan, b: Plan) => {
          const dateA = new Date(a.date).getTime()
          const dateB = new Date(b.date).getTime()
          return dateA - dateB
        })

        setPlans(sortedPlans as Plan[])
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error('Erro ao carregar os dados da API')
      }
    }

    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plans])

  return (
    <MainWrapper ref={targetRef}>
      <PDFButton onClick={() => toPDF()}>Gerar PDF <FaPrint/></PDFButton>
      {isLoading ? (
        <Loader />
      ) : plans.length === 0 ? (
        <NotFound>Nenhum plano/atividade foi cadastrado na página!</NotFound>
      ) : (
        plans.map((plan: Plan) => (
          <Card key={plan._id} plan={plan} />
        ))
      )}
    </MainWrapper>
  )
}

export default Home
