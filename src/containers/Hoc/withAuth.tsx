import React, { FC } from "react";

const withAuth = (Component: FC) => {
  const Auth = (props: any) => {
    const user =  localStorage.getItem('user');

    return (
      <>
        {user ? <Component {...props} /> : <></>}
      </>
    );
  }

  return Auth;
};

export default withAuth;