import { Button } from 'components/Button';
import { Title } from 'components/Title';
import React, { useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);

	const onClickPlus = () => {
		setCount(count + 1);
	};

	const onClickMinus = () => {
		setCount(count - 1);
	};

	return (
		<>
			<Title text="Stick with the counter:" />
			<div className={styles.counter}>
            <div className={styles.wrapper}>
					<h2>{count}</h2>
					<div>
						<Button onClick={onClickMinus} className={styles.minus} text="-" />
						<Button onClick={onClickPlus} className={styles.plus} text="+" />
					</div>
				</div>
			</div>
		</>
	);
};
