import { Button } from 'components/Button';
import styles from './Success.module.scss';
import up from "../../../img/up.png"

export const Success = ({ count }) => {
	return (
		<div className={styles.successBlock}>
			<img
				src={up}
				alt="Success"
			/>
			<h3>Successfully!</h3>
			<p>An invitation has been sent to all {count} users.</p>
			<Button onClick={()=> window.location.reload()} className={styles.sendInviteBtn} text="Back" />
		</div>
	);
};
