"use client";

import AuthForm from "@/components/common/auth/AuthForm";
import React, { useState } from "react";
import SelectUserTypeForm from "../SelectUserTypeForm";
import SignInForm from "../SignInForm";

const JoinForm = () => {
  const [userType, setUserType] = useState("");
  const [typeSelected, setTypeSelected] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nickName, setNickName] = useState("");

  const [signInFormCondition, setSignInFormCondition] = useState(false);

  const selectTypeNextStepCondition = userType !== "";

  const setter = {
    setEmail,
    setPassword,
    setPasswordCheck,
    setGender,
    setBirthday,
    setNickName,
  };

  const states = {
    email,
    password,
    passwordCheck,
    gender,
    birthday,
    nickName,
  };

  const onNextClick = () => {
    setTypeSelected(true);
  };

  const joinData = {
    nickName: nickName,
    email: email,
    password: password,
    birthday: birthday,
    gender: gender,
    userType: userType,
  };

  console.log(joinData);

  return (
    <>
      {!typeSelected && (
        <AuthForm
          condition={selectTypeNextStepCondition}
          text="다음"
          onClick={onNextClick}
        >
          <SelectUserTypeForm userType={userType} setUserType={setUserType} />
        </AuthForm>
      )}

      {typeSelected && (
        <AuthForm
          condition={signInFormCondition}
          text="가입"
          onClick={onNextClick}
        >
          <SignInForm
            setter={setter}
            states={states}
            setSignInFormCondition={setSignInFormCondition}
          />
        </AuthForm>
      )}
    </>
  );
};

export default JoinForm;
