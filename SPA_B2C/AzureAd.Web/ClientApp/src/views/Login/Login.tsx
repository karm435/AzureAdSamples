import * as React from 'react';

type Props = {
    
};
export const Login = (props: Props) => {
    return (
        <div>
            <label htmlFor="login">User Name</label>
            <input type="text" name="login"/>

            <label htmlFor="password">Password</label>
            <input type="text" name="password"/>

            <a href="#">Forgot Password</a>
            <a href="#">SignUp</a>
        </div>
    );
};