import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss'

export function SignInButton(){

    const isUserLoggedIn = true;

    return isUserLoggedIn? (        
            <button 
                type="button"
                className={styles.SignInbutton}>
                <FaGithub color='#04d361'/>
                Fabiano Silva
                <FiX color='#737380' className={styles.closeIcons}/>
            </button>
        ) : (
            <button 
            type="button"
            className={styles.SignInbutton}>
            <FaGithub color='#eba417'/>
            SignIn with Github
        </button>
        );
}