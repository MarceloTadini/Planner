import { Meta, StoryFn } from "@storybook/react"
import PlannerForm from "./index"
import { withRouter } from 'storybook-addon-remix-react-router'
import { PlannerFormProps } from "../../types"


export default {
  title: "Components/PlannerForm",
  component: PlannerForm,
  decorators: [withRouter],
  argTypes: {
    initialData: {
      control: {
        type: "object",
      },
      description: "Dados iniciais do plano para edição",
      defaultValue: null,
    },
    isEdit: {
      control: {
        type: "boolean",
      },
      description: "Define se o formulário está em modo de edição",
      defaultValue: false,
    },
    onSubmit: { action: "submit" },
  },
} as Meta

const Template: StoryFn<PlannerFormProps> = (args: PlannerFormProps) => {
  return (
    <PlannerForm
      {...args}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const EditMode = Template.bind({})
EditMode.args = {
  initialData: {
    _id: "iddoplano",
    title: "Título do Plano",
    description: "Descrição do Plano",
    location: "Local do Plano",
    date: new Date("2024-03-14"),
    participants: "Participante 1, Participante 2",
  },
  isEdit: true,
}
