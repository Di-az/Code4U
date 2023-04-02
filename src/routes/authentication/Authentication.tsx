import React, { useState } from 'react';
// import Button from '../../components/Button/Button';
// import InputField from '../../components/InputField/InputField';
// import style from './Authentication.module.css';

import { AuthenticationSideBarHero } from 'components/AuthenticationSidebarHero/AuthenticationSidebarHero';

export enum ScreenTypes {
  signIn = 'signIn',
  signUp = 'signUp',
}

function Authentication() {
  // const [windowState, onWindowChange] = React.useState('left');
  // const isLoginActive = windowState === 'left';
  // const isSignUpActive = windowState === 'right';

  const [screen, setScreen] = useState(ScreenTypes.signIn);

  // function onClick() {
  //   if (windowState === 'left') {
  //     onWindowChange('movingRight');
  //     setTimeout(onWindowChange, 1800, 'right');
  //   } else {
  //     onWindowChange('movingLeft');
  //     setTimeout(onWindowChange, 1800, 'left');
  //   }
  // }

  // return (
  //   <div className={style.app}>
  //     <div id={style.window} className={style[windowState]} />
  //     {isLoginActive && (
  //       <>
  //         <div className={style.login}>
  //           <Button
  //             location="sidebar"
  //             text="Inicia Sesión"
  //             onClickHandler={() => onClick()}
  //           />
  //         </div>
  //         <InputField label="Email" type="email" id="email" />
  //         <Button
  //           location="authentication"
  //           text="Registrate"
  //           onClickHandler={() => onClick()}
  //         />
  //       </>
  //     )}
  //     {isSignUpActive && (
  //       <>
  //         <InputField label="Email" type="email" id="email" />
  //         <Button
  //           location="authentication"
  //           text="Iniciar Sesión"
  //           onClickHandler={() => onClick()}
  //         />
  //         <div className={style.signUp}>
  //           <Button
  //             location="sidebar"
  //             text="Regístrate"
  //             onClickHandler={() => onClick()}
  //           />
  //         </div>
  //       </>
  //     )}
  //   </div>
  // );

  const updateScreen = () => {
    if (screen === ScreenTypes.signIn) setScreen(ScreenTypes.signUp);
    else setScreen(ScreenTypes.signIn);
  };

  return (
    <AuthenticationSideBarHero screen={screen} screenHandler={updateScreen} />
  );
}

export default Authentication;
