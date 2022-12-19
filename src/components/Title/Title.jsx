import styles from './Title.module.scss';

export const Title = ({ text }) => {
   return <div className={styles.container}>
      <h1 className={styles.title}>{text}
         <span>{text}</span>
      </h1>
      
   </div>
};
