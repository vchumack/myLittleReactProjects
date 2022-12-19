import { useEffect, useState } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import { nanoid } from 'nanoid';
import { getPhotos } from 'api/photoCollection';
import { Title } from 'components/Title';
import { Collection } from './Collection';
import styles from './Photos.module.scss';
import { cats } from 'data/cats';

export const Photos = () => {
	const [collection, setCollection] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [categoryId, setCategoryId] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);

	const color = 'rgb(61, 117, 119)';

	const elements = collection
		.filter(data => {
			return data.name.toLowerCase().includes(searchValue.toLowerCase());
		})
		.map(data => (
			<Collection key={nanoid()} name={data.name} images={data.photos} />
		));

	const items = cats.map((item, index) => (
		<li
			onClick={() => setCategoryId(index)}
			className={categoryId === index ? `${styles.active}` : ''}
			key={nanoid()}
		>
			{item.name}
		</li>
	));

	const pages = [...Array(3)].map((_, index) => <li onClick={() => setPage(index + 1)} className={page === (index + 1) ? `${styles.active}` : ''}>{index + 1}</li>);

	useEffect(() => {
		setIsLoading(true);

		getPhotos(categoryId, page)
			.then(({ data }) => {
				console.log(data);
				setCollection(data);
			})
			.catch(err => {
				console.log(err);
				alert('error');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [categoryId, page]);

	return (
		<>
			<Title text="Immerse yourself in beauty" />
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<ul className={styles.tags}>{items}</ul>
					<input
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						className={styles.searchInput}
						placeholder="Search by name"
					/>
				</div>
				<div className={styles.content}>
					{isLoading ? (
						<CircleLoader
							color={color}
							loading={isLoading}
							size={150}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					) : (
						elements
					)}
				</div>
				<ul className={styles.pagination}>{pages}</ul>
			</div>
		</>
	);
};
