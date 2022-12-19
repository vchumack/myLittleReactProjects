import { NavLink, Outlet } from 'react-router-dom';
import styles from "./Layout.module.scss";

export const Layout = () => {
   return (
      <>
         <header className={styles.header}>
				<nav>
					<ul className={styles.menuList}>
						<li>
                     <NavLink className={styles.menuLink} end to="/">Photo Collection</NavLink>
						</li>
						<li>
							<NavLink className={styles.menuLink} to="/currencyConverter">Currency Converter</NavLink>
                  </li>
                  <li>
							<NavLink className={styles.menuLink} to="/usersList">UsersList</NavLink>
						</li>
						<li>
							<NavLink className={styles.menuLink} to="/quiz">Quiz</NavLink>
                  </li>
                  <li>
							<NavLink className={styles.menuLink} to="/modal">Modal</NavLink>
                  </li>
                  <li>
							<NavLink className={styles.menuLink} to="/counter">Counter</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			
				<Outlet />

		</>
   )
};

