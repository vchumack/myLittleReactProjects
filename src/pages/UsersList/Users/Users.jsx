import { Button } from 'components/Button';
import { Skeleton } from './Skeleton';
import { User } from './User';
import styles from './Users.module.scss';

export const Users = ({
	items,
	isLoading,
	searchValue,
	onChangeSearchValue,
	invites,
	onClickInvites,
	onClickSendInvites
}) => {

	const elements = items
		.filter(item => {
			const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
			
			return (
				fullName.includes(searchValue.toLowerCase()) ||
				item.email.toLowerCase().includes(searchValue.toLowerCase())
			);
		})
		.map(item => <User onClickInvites={onClickInvites} isInvited={invites.includes(item.id)} key={item.id} {...item} />);

	return (
		<>
			<div className={styles.search}>
				<svg viewBox="0 0 20 20" xmlns="httpsearchValue://www.w3.org/2000/svg">
					<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
				</svg>
				<input
					value={searchValue}
					onChange={onChangeSearchValue}
					type="text"
					placeholder="Find user..."
				/>
			</div>
			{isLoading ? (
				<div className={styles.skeletonList}>
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</div>
			) : (
				<ul className={styles.usersList}>{elements}</ul>
			)}

			{
				invites.length > 0 && <Button onClick={onClickSendInvites} className={styles.sendInviteBtn} text="send invitation" />
			}
			
		</>
	);
};
