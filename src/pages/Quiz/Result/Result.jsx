
import { Button } from 'components/Button';
import { questions } from '../../../data/questions';
import styles from './Result.module.scss';
export const Result = ({correctAnswers}) => {
   return (
      <div className={styles.result}>
			<img alt="win"  src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>You answered {correctAnswers} questions out of {questions.length} correctly</h2>
         <a href='/quiz'>
            <Button text="try again"/>
         </a>
		</div>
   )
};
