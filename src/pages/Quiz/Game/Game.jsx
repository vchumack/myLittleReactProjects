import { nanoid } from 'nanoid';
import { questions } from '../../../data/questions';
import styles from './Game.module.scss';

export const Game = ({ question, onClickQuizVariant, step }) => {
	const elements = question.variants.map((text, index) => (
		<li onClick={() => onClickQuizVariant(index)} key={nanoid()}>
			{text}
		</li>
	));

	const persentage = Math.round((step / questions.length) * 100);

	return (
		<>
			<div className={styles.progress}>
				<div
					style={{ width: `${persentage}%` }}
					className={styles.progress__inner}
				></div>
			</div>
			<h1>{question.title}</h1>
			<ul>{elements}</ul>
		</>
	);
};
