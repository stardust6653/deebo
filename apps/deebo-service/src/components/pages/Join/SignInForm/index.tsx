import Input from "@/components/common/universal/Input";
import LabelGroup from "@/components/common/universal/LabelGroup";
import {
  isValidBirthday,
  isValidEmail,
  isValidNickname,
  isValidOver14,
  isValidPassword,
} from "@/lib/utils";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  setter: {
    setEmail: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    setPasswordCheck: Dispatch<SetStateAction<string>>;
    setGender: Dispatch<SetStateAction<string>>;
    setBirthday: Dispatch<SetStateAction<string>>;
    setNickName: Dispatch<SetStateAction<string>>;
  };
  states: {
    email: string;
    password: string;
    passwordCheck: string;
    gender: string;
    birthday: string;
    nickName: string;
  };
  setSignInFormCondition: Dispatch<SetStateAction<boolean>>;
}

const SignInForm = ({ setter, states, setSignInFormCondition }: Props) => {
  const [nickNameDoubleCheck, setNickNameDoubleCheck] = useState(false);

  const signInCondition =
    isValidNickname(states.nickName) &&
    isValidEmail(states.email) &&
    isValidPassword(states.password) &&
    states.password === states.passwordCheck &&
    states.birthday !== "" &&
    states.gender !== "" &&
    isValidBirthday(states.birthday) &&
    isValidOver14(states.birthday) &&
    !nickNameDoubleCheck;

  const emailErrorMessage = () => {
    if (!isValidEmail(states.email) && states.email.length > 0) {
      return "올바른 이메일 형식이 아닙니다.";
    }
    return "";
  };

  const passwordErrorMessage = () => {
    if (!isValidPassword(states.password) && states.password.length > 0) {
      return "올바른 비밀번호 형식이 아닙니다.";
    }
    return "";
  };

  const nickNameErrorMessage = () => {
    if (!isValidNickname(states.nickName) && states.nickName.length > 0) {
      return "특수문자 제외 2~15자 이내로 입력해주세요.";
    }
    return "";
  };

  const passwordCheckErrorMessage = () => {
    if (
      states.password !== states.passwordCheck &&
      states.passwordCheck.length !== 0
    ) {
      return "비밀번호가 일치하지 않습니다.";
    }
    return "";
  };

  const birthdayErrorMessage = () => {
    if (!isValidBirthday(states.birthday)) {
      return "올바른 생년월일을 입력해주세요.";
    }
    if (!isValidOver14(states.birthday) && states.birthday.length !== 0) {
      return "14세 이상만 가입 가능합니다.";
    }
    return "";
  };

  useEffect(() => {
    setSignInFormCondition(signInCondition);
  }, [signInCondition]);

  console.log(signInCondition);

  return (
    <div>
      <p className="text-2xl font-normal mb-4">회원가입</p>

      <div className="mb-8">
        <div className="mb-4">
          <LabelGroup title="이메일" errorMessage={emailErrorMessage()} />
          <Input id="email" type="email" setState={setter.setEmail} />
        </div>

        <div className="mb-4">
          <LabelGroup title="닉네임" errorMessage={nickNameErrorMessage()} />
          <div className="flex">
            <Input id="nickName" type="text" setState={setter.setNickName} />
            <button className="border bg-blue-400 ml-2 w-[100px] text-white rounded-md text-sm">
              중복확인
            </button>
          </div>
        </div>

        <div className="mb-4">
          <LabelGroup title="비밀번호" errorMessage={passwordErrorMessage()} />
          <Input id="password" type="password" setState={setter.setPassword} />
        </div>

        <div className="mb-4">
          <LabelGroup
            title="비밀번호 확인"
            errorMessage={passwordCheckErrorMessage()}
          />
          <Input
            id="password check"
            type="password"
            setState={setter.setPasswordCheck}
          />
        </div>

        <div className="mb-4">
          <LabelGroup title="성별" errorMessage={""} />
          <div className="grid grid-cols-4 gap-4">
            {genderList.map((gender) => {
              return (
                <div
                  onClick={() => setter.setGender(gender)}
                  className={`text-center border mt-2 py-2 rounded-lg cursor-pointer ${gender === states.gender && "bg-blue-500 text-white"}`}
                >
                  {gender}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-4">
          <LabelGroup title="생년월일" errorMessage={birthdayErrorMessage()} />
          <Input id="birthday" type="date" setState={setter.setBirthday} />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

const genderList = ["남성", "여성", "기타", "선택안함"];
