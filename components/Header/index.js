import styles from "./styles.module.css"

export default function Header() { //Está fazendo função chamada Header e exportando como default
    return (
        <>
        <h1>Header Teste</h1> {/*Está fazendo o título*/}
        <p className={styles.paragrafo}>Header Teste</p> {/*Está */}
        </>
    )
}