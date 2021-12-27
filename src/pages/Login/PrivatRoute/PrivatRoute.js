import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';


const PrivatRoute = ({ children, ...rest }) => {
    const { user } = useFirebase();
    // if (isLoading) {
    //     return <div className="spinner-border text-primary"></div>
    // }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivatRoute;