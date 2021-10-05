const MostrarAlerta = ({altura, ancho, fontColor, texto}) =>{
    return(
        <div>
          
          <div style={{
            height: altura,
            width: ancho,
            background: fontColor,

          }}>
           {texto}
          </div>
          <br/>
      
        </div>
    )
}
export {
    MostrarAlerta
}