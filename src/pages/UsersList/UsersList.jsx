import { Title } from 'components/Title';
import { useEffect, useState } from 'react';
import { Success } from './Success';
import { Users } from './Users';
import styles from './UsersList.module.scss';

export const UsersList = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState('');
	const [invites, setInvites] = useState([]);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then(res => res.json())
			.then(user => {
				setUsers(user.data);
			})
			.catch(err => {
				console.log(err);
				alert('Error');
			})
			.finally(() => setIsLoading(false));
	}, []);

	const onChangeSearchValue = e => {
		setSearchValue(e.target.value);
	};

	const onClickInvites = id => {
		if (invites.includes(id)) {
			setInvites(prev => prev.filter(userId => userId !== id));
		} else {
			setInvites(prev => [...prev, id]);
		}
	};

	const onClickSendInvites = () => {
		setSuccess(true);
	};

	return (
		<>
			<Title text="Friends Invitations:" />
		
		<div className={styles.wrapper}>
			{success ? (
				<Success count={invites.length} />
			) : (
				<Users
					onChangeSearchValue={onChangeSearchValue}
					searchValue={searchValue}
					items={users}
					isLoading={isLoading}
					invites={invites}
					onClickInvites={onClickInvites}
					onClickSendInvites={onClickSendInvites}
				/>
			)}
			</div>
			</>
	);
};
