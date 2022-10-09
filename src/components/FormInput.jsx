import { FormInputStyle, Group, FormInputLabel } from "../styles/form.styles"

const FormInput = ({ label, ...otherProps }) => {

    return (
        <Group>
            <FormInputStyle {...otherProps} />
            {label && (
                <FormInputLabel 
                shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    )
}
export default FormInput