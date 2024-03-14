import Indicator, { Props } from "."
import { Meta, StoryFn } from "@storybook/react"
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

export default {
  title: "Components/Indicator",
  component: Indicator,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
} as Meta

const Template: StoryFn<Props> = (args: Props) => <Indicator pathMap={args.pathMap} />

export const Home = Template.bind({})
Home.args = {
  pathMap: {
    "/": "Home",
  }
}

export const Planner = Template.bind({})
Planner.args = {
  pathMap: {
    "/planner": "Home / Cadastrar",
  }
}

export const EditPlanner = Template.bind({})
EditPlanner.args = {
  pathMap: {
    "/editPlanner": "Home / Editar",
  }
}
