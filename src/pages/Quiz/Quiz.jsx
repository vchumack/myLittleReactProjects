import { useState } from 'react';
import { Title } from 'components/Title';
import { Game } from './Game';
import { Result } from './Result';
import { questions } from '../../data/questions';
import styles from './Quiz.module.scss';

export const Quiz = () => {
   const [step, setStep] = useState(0);
   const [correctAnswers, setCorrectAnswers] = useState(0);

	const question = questions[step];

	const onClickQuizVariant = index => {
      setStep(step + 1);
      
      if (index === question.correct) {
         setCorrectAnswers(correctAnswers + 1);
      }
	};

	return (
		<>
			<Title text="Get tested with React:" />
			<div className={styles.wrapper}>
				{step !== questions.length ? (
					<Game
						step={step}
						question={question}
						onClickQuizVariant={onClickQuizVariant}
					/>
				) : (
                  <Result correctAnswers={ correctAnswers} />
				)}
			</div>
		</>
	);
};
