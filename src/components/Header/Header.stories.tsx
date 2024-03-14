import Header from "."
import { Meta, StoryObj } from "@storybook/react"
import { withRouter } from 'storybook-addon-remix-react-router';

export default{
    title: "Components/Header",
    component: Header,
    decorators:[withRouter],
} as Meta

export const Deafult: StoryObj ={
    
}