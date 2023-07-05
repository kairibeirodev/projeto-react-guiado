import Header from "../components/Header";
import sobre from "../assets/sobre.svg";
import profile from "../assets/lucia.jpeg";
import styles from "../styles/pages/sobre.module.css";

const Sobre = () => {
  return (
    <>
      <Header title="Conheça um pouco mais sobre mim!" image={sobre} />
      <div className={styles.sobreContainer}>
      <img className={styles.photoProfile} src={profile} />  
      <div className={styles.textContainer}>
      <h1> Muito prazer em te conhecer!</h1>
       <p>

        Sou Kathleen, tenho 25 anos e sou estudante de Front End
       Me considero ágil e consistente em aprender uma nova tecnologia e alta adaptabilidade às mudanças, pronta para superar qualquer desafio!
Se eu pudesse me definir em 3 palavras, certamente seriam: otimista, perseverante e esforçada! :)

GitHub

        </p>
      </div>
      </div>
    
    </>
  );
};

export default Sobre;