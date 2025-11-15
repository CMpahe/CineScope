// ---- ---- ---- ---- STYLES ---- ---- ---- ----
import styles from './Billboard.module.scss'
// ---- ---- ---- ---- COMPONENTS ---- ---- ---- ----
import { RegularBtn } from '../Buttons/RegularBtn/RegularBtn'
// ---- ---- ---- ---- ICONS ---- ---- ---- ----
import { addIcon, playIcon } from '../../assets/icons/icons'
//
//
//

export const Billboard = () => {
  return (
    <div className={`${styles.billboard}`}>
      <img src='https://image.tmdb.org/t/p/w500/bWF5ImUscXXYia8owpm8coadR4m.jpg' />
      <div className={`${styles.media_info}`}>
        <h1 className='big-title1 bolder'>Movie Title Here</h1>
        <p className='body opaque'>Duration: 115 min</p>
        {/* <p className='big-text light'>Description of the movie here, is a main summary of the movie, is a main summary of the movie. Description of the movie here</p> */}
        <div className={`${styles.btn_container}`}>
          <RegularBtn variant='red' icon={playIcon}> Whatch </RegularBtn>
          <RegularBtn icon={addIcon} opaque> Add list </RegularBtn>
        </div>
      </div>
    </div>
  )
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This component is temporarily not reusable, is a static component. Although it is intended to be reactive and interactive.

// In the mean time it doesn't receive any prop, but is intented to received a list of medias so the component can display it one by one, just like a billboard.

// "/pAT3Ie1lxxGBJn0USyxcUgBjw76.jpg"
// "/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg"
// "/vSBnSdEllJPMBniDh1eSqNHS5Mk.jpg"
