import { 
    BaseButton, 
    GoogleButton, 
    InvertedButton,
    ButtonSpinner 
} from "../styles/button.styles"

export const button_types = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = button_types.base) => (
    {
        [button_types.base]: BaseButton,
        [button_types.google]: GoogleButton,
        [button_types.inverted]: InvertedButton
    }[buttonType]
)

const Button = ({ children, buttonType, isLoading= false, ...otherProps }) => {
    const CustomButton = getButton(buttonType)
    return (
        <div>
            <CustomButton disabled={isLoading} {...otherProps}>
                {isLoading ? <ButtonSpinner/> : children}
            </CustomButton>
        </div>
    )

}

export default Button