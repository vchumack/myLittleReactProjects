import { Title } from 'components/Title';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Block } from './Block';
import styles from './CurrencyConverter.module.scss';


export const CurrencyConverter = () => {
	const [fromCurrency, setFromCurrency] = useState('UAH');
	const [toCurrency, setToCurrency] = useState('USD');
	const [fromPrice, setfromPrice] = useState(0);
	const [toPrice, setToPrice] = useState(1);
	
	useEffect(() => {
		fetch(
			'https://openexchangerates.org/api/latest.json?app_id=5b82f723f04e41e68802e99850008d67'
		)
			.then(res => res.json())
			.then(data => {
				// setRates(data.rates);
				ratesRef.current = data.rates;
				onChangeToPrice(1);
			})
			.catch(err => {
				console.log(err);
				// alert('Error');
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const ratesRef = useRef({});

	const onChangeFromPrice = value => {
		const price = value / ratesRef.current[fromCurrency];
		const result = price * ratesRef.current[toCurrency];
		// const result = value * rates[fromCurrency];

		setToPrice(result.toFixed(2));
		setfromPrice(value);
	};

	const onChangeToPrice = value => {
		const result =
			(ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
		setfromPrice(result.toFixed(2));
		setToPrice(value);
	};

	useEffect(() => {
		onChangeFromPrice(fromPrice);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fromCurrency]);

	useEffect(() => {
		onChangeToPrice(toPrice);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [toCurrency]);

	return (
		<>
			<Title text="Let's count the money?" />
			<div className={styles.wrapper}>
				<Block
					value={fromPrice}
					currency={fromCurrency}
					onChangeCurrency={setFromCurrency}
					onChangeValue={onChangeFromPrice}
				/>
				<Block
					value={toPrice}
					currency={toCurrency}
					onChangeCurrency={setToCurrency}
					onChangeValue={onChangeToPrice}
				/>
			</div>
		</>
	);
};
