import { Meta, StoryFn } from "@storybook/react"
import { withRouter } from 'storybook-addon-remix-react-router'
import Card from "."
import { CardProps } from "../../types"

export default {
  title: "Components/Card",
  component: Card,
  decorators:[withRouter],
  argTypes: {
    plan: {
      control: {
        type: "object",
      },
      description: "Dados do plano",
      defaultValue: {
        _id: "1",
        date: new Date(),
        title: "Título do Plano",
        description: "Descrição do Plano",
        location: "Local do Plano",
        participants: ["Participante 1", "Participante 2"],
      },
    },
    onEdit: { action: "edit" },
    onDelete: { action: "delete" },
  },
} as Meta

const Template: StoryFn<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  plan: {
    _id: "1",
    date: new Date(),
    title: "Título do Plano",
    description: "Descrição do Plano",
    location: "Local do Plano",
    participants: "Participante 1",
  }
}

