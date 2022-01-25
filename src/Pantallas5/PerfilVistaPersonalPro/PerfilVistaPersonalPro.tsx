import React from "react";
import { View, ScrollView } from "react-native";
import BotonAzul from "../../Componentes/BotonAzul";
import { Icon } from "react-native-elements";
import BarraIconos from "../../Componentes/BarraIconos";
import Explorar from "../../Componentes/Explorar";
import Destacado from "../../Componentes/Destacado";
import Actividad from "../../Componentes/Actividad";
import Publicacion from "../../Componentes/Publicacion";
import {
  ContainerPrincipal,
  ContainerSuperior,
  ContainerInferior,
  Navegacion,
  Titulo,
  TituloText,
  Botones,
  DestacadoView,
  PublicacionView,
  ActividadView,
} from "./Styles";
import Colors from "../../../constants/Colors";
import fotoDestacado from "../../../assets/images/Equipo1.png";
import fotoActividad from "../../../assets/images/Sala3.png";
import fotoPerfilPublicacion from "../../../assets/images/Sala/10.png";
import fotoPubliacacion from "../../../assets/images/Publicacion.png";
import InfoMiPerfil from "../../Componentes/InfoMiPerfil";
import fotoPerfil from "../../../assets/images/fotoPerfil.png"; 

export default function PerfilVistaPersonalPro() {
  return (
    <ScrollView>
      <ContainerPrincipal>
        <ContainerSuperior>
          <BarraIconos
            tituloAB={"Mi perfil profesional"}
            margin={"0px"}
            colorIcons={Colors.mainCOlorPurpleLigth}
            threePoints={true}
            add={true}
          />
          <Navegacion>
            <View></View>
            {/* para ordenar la navegacion */}
            <Titulo>
              <TituloText>Perfil profesional</TituloText>
              <Icon
                name="arrow-right-bold"
                type="material-community"
                color="#4E31EB"
                size={20}
              />
            </Titulo>
          </Navegacion>
          <InfoMiPerfil
            nombre={"Juana Florez"}
            crear={"Educación •  Docente Universitaria - Física"}
            foto={fotoPerfil}
            tags={["#profe", "#pedagogia", "#docente", "#Doityourself",
"#youtube", "y #culturadigital"
            ]}
          />
          <Botones>
            <BotonAzul ancho={49} alto={55.08} texto={"FAVORITOS"} icon={""} />
            <BotonAzul ancho={49} alto={55.08} texto={"MI ESPACIO"} />
          </Botones>
        </ContainerSuperior>
        <ContainerInferior>
          <Explorar titulo={"Contenido destacado"} />
          <DestacadoView>
            <Destacado
              titulo={"Dra Alejandra website profesional"}
              lugar={"Website"}
              descripcion={
                "Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum."
              }
              foto={fotoDestacado}
            />
            <Destacado
              titulo={"Dra Alejandra website profesional"}
              lugar={"Website"}
              descripcion={
                "Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum."
              }
              foto={fotoDestacado}
            />
          </DestacadoView>
          <Explorar titulo={"Actividad"} />
          <ActividadView>
            <Actividad
              descripcion={"Yoga para ti, para mí y para todos! Aeroyogabaq"}
              compartido={"@karendagy ha compartido esto hoy"}
              foto={fotoDestacado}
            />
            <Actividad
              descripcion={
                " @ronalddiaz creó este evento sobre un tema que sigues: Seminario live sobre el fitness en el caribe "
              }
              compartido={""}
              foto={fotoActividad}
            />
          </ActividadView>
          <PublicacionView>
            <Publicacion
              fotoPerfil={fotoPerfilPublicacion}
              nombre={"Armando Lopez • @arlopez21 • 2h"}
              descripcion={"Group name lorem ipsum dolor amet sim athem"}
              imagen={fotoPubliacacion}
            />
          </PublicacionView>
        </ContainerInferior>
      </ContainerPrincipal>
    </ScrollView>
  );
}
