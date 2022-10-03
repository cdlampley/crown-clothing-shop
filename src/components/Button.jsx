const button_types = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {

    return (
        <div>
            <button className={`button-container ${button_types[buttonType]}`}
                {...otherProps}
            >
                {children}
            </button>
        </div>
    )

}

export default Button