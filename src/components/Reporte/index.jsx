/* eslint-disable react/prop-types */
import {
  Document,
  Text,
  Page,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "../../assets/metro.png";

const styles = StyleSheet.create({
  encabezado: {
    width: "90%",
    height: 45,
    display: "flex",
    marginHorizontal: "auto",
    marginTop: 28,
    marginBottom: 28,
    flexDirection: "row",
    fontSize: 20,
  },
  logo: {
    width: 38,
    height: 34,
    marginVertical: "auto",
  },
  title: {
    marginVertical: "auto",
    marginLeft: 12,
  },
  folio: {
    marginVertical: "auto",
    marginLeft: "55%",
  },
  descripciones: {
    width: "90%",
    display: "flex",
    marginHorizontal: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 16,
  },
  label: {
    marginTop: 15,
    marginBottom: 2,
  },
  ubicacion: {
    width: "50%",
  },
  informacion: {
    width: "90%",
    display: "flex",
    marginHorizontal: "auto",
  },
});

export default function Reporte(props) {
  return (
    <Document>
      <Page>
        <View style={styles.encabezado}>
          <Image src={logo} alt="logo" style={styles.logo} />
          <View>
            <Text style={styles.title}>REPORTE DE AVERÍAS</Text>
          </View>
          <View>
            <Text style={styles.folio}>FOLIO: {props.folio}</Text>
          </View>
        </View>
        <View style={styles.descripciones}>
          <View style={styles.ubicacion}>
            <Text style={styles.label}>LÍNEA</Text>
            <Text>{props.linea}</Text>
            <Text style={styles.label}>ESTACIÓN</Text>
            <Text>{props.estacion}</Text>
            <Text style={styles.label}>EQUIPO</Text>
            <Text>{props.equipo}</Text>
          </View>
          <View style={styles.ubicacion}>
            <Text style={styles.label}>HORA DE FALLA DEL PDC</Text>
            <Text>{props.falla}</Text>
            <Text style={styles.label}>HORA DE LLEGADA</Text>
            <Text>{props.inicio}</Text>
            <Text style={styles.label}>HORA DE TERMINO</Text>
            <Text>{props.fin}</Text>
          </View>
        </View>
        <View style={styles.informacion}>
          <View>
            <Text style={styles.label}>NOMBRE DEL TÉCNICO</Text>
            <Text>{props.tecnico}</Text>
          </View>
          <View>
            <Text style={styles.label}>DESCRIPCIÓN DEL PROBLEMA</Text>
            <Text>{props.descripcion}</Text>
          </View>
          <View>
            <Text style={styles.label}>SOLUCIÓN</Text>
            <Text>{props.solucion}</Text>
          </View>
          <View>
            <Text style={styles.label}>MATERIOAL Y/O REFACCIONES</Text>
            <Text>{props.insumos}</Text>
          </View>
        </View>
        <View style={styles.descripciones}>
            <View style={styles.ubicacion}>
              <Text style={styles.label}>ESTATUS FINAL</Text>
              <Text>{props.estatus}</Text>
            </View>
            <View style={styles.ubicacion}>
              <Text style={styles.label}>ENCARGADO</Text>
              <Text>{props.encargado}</Text>
            </View>
          </View>
      </Page>
    </Document>
  );
}
