import React from 'react'
import { Input, Title, Submit, Text, Link, Container, Error, Base, TextSmall } from './styles/form'

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>
}

Form.Input = function FormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

Form.Submit = function FormsSubmit({ children, ...restProps }) {
    return <Submit{...restProps}>{children}</Submit>
}

Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}