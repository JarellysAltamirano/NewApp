import image from './imagen/avatarDefaul.jpg'
export const Avatar = ({imagen}, ancho, altura) => {
    return (
        <div>
            <img src={image} alt="" style={{
                borderRadius:imagen,
                borderWidth:ancho,
                height: altura,
                width: ancho,

            }}/>
        </div>
    )
}
