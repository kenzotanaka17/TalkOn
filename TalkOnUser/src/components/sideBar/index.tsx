import { Button } from '../button'
import styles from './sideBar.module.css'
import profileImg from '../../assets/profileImg.png'

export function SideBar() {

    return (
        <aside className={styles.leftBar}>
                <div className={styles.figure}>
                    <img className={styles.image} src={profileImg} alt="Foto de perfil" />
                </div>
                <div className={styles.person}>
                    <p className={styles.name}>Giovanna Medeiros</p>
                    <p className={styles.role}>Compliance Officer</p>
                </div>
                <div className={styles.buttons}>
                        <Button value="Chat - dia 21/05/2024"/>
                        <Button value="Chat - dia 23/05/2024"/>
                </div>
        </aside>
    )
}