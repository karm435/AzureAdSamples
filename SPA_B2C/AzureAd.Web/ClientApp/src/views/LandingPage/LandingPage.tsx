// @flow
import * as React from "react";
import styles from "./LandingPage.module.scss";

type Props = {

};
export const LandingPage = (props: Props) => {
    return (
        <div>
            <header>
                <nav className={styles.navbar}>
                    <ul>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};