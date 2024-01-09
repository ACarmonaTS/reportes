import { useState } from "react";
// import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Reporte from "../Reporte";
import styles from "./Formulario.module.scss";
import logo from "../../assets/metro.png";
import sinergman from "../../assets/sinergman.svg";


export default function Formulario() {
  const [folio, setFolio] = useState("");
  const [linea, setLinea] = useState("");
  const [estacion, setEstacion] = useState("");
  const [equipo, setEquipo] = useState("");
  const [falla, setFalla] = useState("");
  const [inicio, setInicio] = useState("");
  const [fin, setFin] = useState("");
  const [tecnico, setTecnico] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [solucion, setSolucion] = useState("");
  const [insumos, setInsumos] = useState("");
  const [estatus, setEstatus] = useState("");
  const [encargado, setEncargado] = useState("");
  function handleChangeFolio(event) {
    setFolio(event.target.value);
  }
  function handleChangeLinea(event) {
    setLinea(event.target.value);
  }
  function handleChangeEstacion(event) {
    setEstacion(event.target.value);
  }
  function handleChangeEquipo(event) {
    setEquipo(event.target.value);
  }
  function handleChangeFalla(event) {
    setFalla(event.target.value);
  }
  function handleChangeInicio(event) {
    setInicio(event.target.value);
  }
  function handleChangeFin(event) {
    setFin(event.target.value);
  }
  function handleChangeTecnico(event) {
    setTecnico(event.target.value);
  }
  function handleChangeDescripcion(event) {
    setDescripcion(event.target.value);
  }
  function handleChangeSolucion(event) {
    setSolucion(event.target.value);
  }
  function handleChangeInsumos(event) {
    setInsumos(event.target.value);
  }
  function handleChangeEstatus(event) {
    setEstatus(event.target.value);
  }
  function handleChangeEncargado(event) {
    setEncargado(event.target.value);
  }
  return (
    <>
      <header>
        <div className={styles.titulo}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.title}>REPORTE DE AVERÍAS</div>
          <img src={sinergman} alt="logo" className={styles.sinergman} />
        </div>
      </header>
      <main>
        <section className={styles.informacion}>
          <div className={styles.reporte}>
            <label htmlFor="reporte">FOLIO DEL REPORTE</label>
            <input type="text" id="reporte" onChange={handleChangeFolio} />
          </div>
          <div className={styles.encabezado}>
            <div className={styles.datos}>
              <label htmlFor="linea">LÍNEA</label>
              <input
                type="text"
                id="linea"
                className={styles.input}
                onChange={handleChangeLinea}
              />
              <label htmlFor="estacion">ESTACIÓN</label>
              <input
                type="text"
                id="estacion"
                className={styles.input}
                onChange={handleChangeEstacion}
              />
              <label htmlFor="equipo">EQUIPO</label>
              <input
                type="text"
                id="equipo"
                className={styles.input}
                onChange={handleChangeEquipo}
              />
            </div>
            <div className={styles.datos}>
              <label htmlFor="falla">HORA DE FALLA DEL PDC</label>
              <input
                type="time"
                id="falla"
                className={styles.input}
                onChange={handleChangeFalla}
              />
              <label htmlFor="inicio">HORA DE LLEGADA</label>
              <input
                type="time"
                id="inicio"
                className={styles.input}
                onChange={handleChangeInicio}
              />
              <label htmlFor="fin">HORA DE TÉRMINO</label>
              <input
                type="time"
                id="fin"
                className={styles.input}
                onChange={handleChangeFin}
              />
            </div>
          </div>
          <div className={styles.tecnico}>
            <label htmlFor="tecnico">NOMBRE DEL TÉCNICO</label>
            <input type="text" id="tecnico" onChange={handleChangeTecnico} />
          </div>
          <div className={styles.descripciones}>
            <label htmlFor="descripcion">DESCRIPCIÓN DEL PROBLEMA</label>
            <textarea
              name="descripcion "
              id="descripcion"
              cols="30"
              rows="10"
              onChange={handleChangeDescripcion}
            ></textarea>
            <label htmlFor="solucion">SOLUCIÓN</label>
            <textarea
              name="solucion "
              id="solucion"
              cols="30"
              rows="10"
              onChange={handleChangeSolucion}
            ></textarea>
            <label htmlFor="material">MATERIAL Y/O REFACCIONES</label>
            <textarea
              name="material "
              id="material"
              cols="30"
              rows="10"
              onChange={handleChangeInsumos}
            ></textarea>
          </div>
          <div className={styles.encabezado}>
            <div className={styles.datos}>
              <label htmlFor="estatus">ESTATUS FINAL</label>
              <input
                type="text"
                id="estatus"
                className={styles.input}
                onChange={handleChangeEstatus}
              />
            </div>
            <div className={styles.datos}>
              <label htmlFor="encargado">ENCARGADO</label>
              <input
                type="text"
                id="encargado"
                className={styles.input}
                onChange={handleChangeEncargado}
              />
            </div>
          </div>
          <div className={styles.botones}>
            <PDFDownloadLink
              document={
                <Reporte
                  folio={folio}
                  linea={linea}
                  estacion={estacion}
                  equipo={equipo}
                  falla={falla}
                  inicio={inicio}
                  fin={fin}
                  tecnico={tecnico}
                  descripcion={descripcion}
                  solucion={solucion}
                  insumos={insumos}
                  estatus={estatus}
                  encargado={encargado}
                />
              }
              fileName={folio + ".pdf"}
            >
              {({ loading }) =>
                loading ? (
                  <button type="button" className={styles.descargar}>
                    GENERANDO ...
                  </button>
                ) : (
                  <button type="button" className={styles.descargar}>
                    DESCARGAR
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>
        </section>
        {/* <section className={styles.pdf}>
          <PDFViewer>
            <Reporte 
              folio = {folio}
              linea = {linea}
              estacion = {estacion}
              equipo = {equipo}
              falla = {falla}
              inicio = {inicio}
              fin = {fin}
              tecnico = {tecnico}
              descripcion = {descripcion}
              solucion = {solucion}
              insumos = {insumos}
              estatus = {estatus}
              encargado = {encargado}
            />
          </PDFViewer>
        </section> */}
      </main>
    </>
  );
}
