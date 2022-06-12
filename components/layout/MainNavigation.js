import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Movies</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Movies</Link>
          </li>
          <li>
            <Link href='/new-movie'>Add New Movie</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;