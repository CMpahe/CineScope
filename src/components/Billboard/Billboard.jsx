import styles from './Billboard.module.scss'
import { WhatchBtn } from '../buttons/WhatchBtn'
import { AddlistBtn } from '../buttons/AddlistBtn'
export const Billboard = () => {
  return (
    <div className={`${styles.billboard}`}>
      <img src='https://image.tmdb.org/t/p/original/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg' />
      <div className={`${styles.media_info}`}>
        <p className='big-text light'>Duration: 115 min</p>
        <h1 className='big-title'>Movie Title Here</h1>
        <p className='big-text light'>Description of the movie here, is a main summary of the movie, is a main summary of the movie. Description of the movie here</p>
        <div className={`${styles.btn_container}`}>
          <WhatchBtn />
          <AddlistBtn />
        </div>
      </div>
    </div>
  )
}

// "/pAT3Ie1lxxGBJn0USyxcUgBjw76.jpg"
// "/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg"
// "/vSBnSdEllJPMBniDh1eSqNHS5Mk.jpg"
