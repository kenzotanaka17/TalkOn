import { Button } from '../button'
import styles from './sideBar.module.css'
import profileImg from '../../assets/profileImg.png'
import { useState } from 'react';

export function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <>
            <button className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </button>
            <aside className={`${styles.leftBar} ${isOpen ? styles.open : ''}`}>
                <button className={styles.closeButton} onClick={closeMenu}>×</button>
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
        </>
    )
}