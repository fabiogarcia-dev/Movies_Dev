import { ButtonRed, ButtonWhite } from "./styles";

function Button({ children, red, ...rest }) { // Desestruturando o props para pegar apenas o children

    return (
        <>
            {red ? (
                <ButtonRed {...rest}>{children}</ButtonRed>
            ) : (
                <ButtonWhite {...rest}>{children}</ButtonWhite>
            )}
        </>
    )
}

export default Button;