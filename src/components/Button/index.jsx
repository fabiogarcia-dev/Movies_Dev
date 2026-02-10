import { ButtonRed, ButtonWhite } from "./styles";

function Button({ children, red }) { // Desestruturando o props para pegar apenas o children

    return (
        <>
            {red ? (
                <ButtonRed>{children}</ButtonRed>
            ) : (
                <ButtonWhite>{children}</ButtonWhite>
            )}
        </>
    )
}

export default Button;