// @flow
import * as React from "react";
import styles from "./LandingPage.module.scss";
import {signInUser} from "../../services/securityService"
type Props = {

};
export const LandingPage = (props: Props) => {
    return (
        <div>
            <header>
                <nav className={styles.navbar}>
                    <ul>
                        <li><button className={styles.linkButton} onClick={()=> signInUser()}>Login</button></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};