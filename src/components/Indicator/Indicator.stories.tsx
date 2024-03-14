import Indicator from "."
import { Meta, StoryObj } from "@storybook/react"
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

export default{
    title: "Components/Indicator",
    component: Indicator,
    args: {
        pathMap: 'Home',
    },
    decorators:[withRouter],
    parameters: {
        reactRouter: reactRouterParameters({
          routing: { path: '/' },
        }),
      },
} as Meta

export const Home: StoryObj = {
    args: {
        pathMap: 'Home',
    }
}

export const Planner: StoryObj = {
    args: {
        pathMap: 'Home / Cadastrar'
    }
}

export const EditPlanner: StoryObj  = {
    args: {
        pathMap: 'Home / Editar'
    }
}