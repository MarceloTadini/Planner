import PlannerForm from "."
import { Meta, StoryObj } from "@storybook/react"
import { withRouter } from 'storybook-addon-remix-react-router';

export default{
    title: "Components/PlannerForm",
    component: PlannerForm,
    decorators:[withRouter],
} as Meta

export const Deafult: StoryObj ={
    
}