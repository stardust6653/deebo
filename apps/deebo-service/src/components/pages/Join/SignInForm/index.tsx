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
  handleSubmit: (e: React.FormEvent) => void;
}

const SignInForm = ({
  setter,
  states,
  setSignInFormCondition,
  handleSubmit,
}: Props) => {
  const [nickNameDoubleCheck, setNickNameDoubleCheck] = useState<
    boolean | null
  >(null);

  const checkNicknameDuplicate = async () => {
    try {
      const response = await fetch("/api/auth/check-nickname", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname: states.nickName }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return true;
    } catch (error) {}
  };

  const handleCheckNickname = async (e: React.FormEvent) => {
    e.preventDefault();
    if (states.nickName.length <= 1) {
      alert("닉네임은 2글자 이상 입력해주세요.");
    } else {
      const isDuplicate = await checkNicknameDuplicate();
      if (isDuplicate) {
        alert("이미 사용 중인 닉네임입니다.");
        setNickNameDoubleCheck(true);
      } else {
        alert("사용 가능한 닉네임입니다.");
        setNickNameDoubleCheck(false);
      }
    }
  };

  console.log(nickNameDoubleCheck);

  const signInCondition =
    isValidNickname(states.nickName) &&
    isValidEmail(states.email) &&
    isValidPassword(states.password) &&
    states.password === states.passwordCheck &&
    states.birthday !== "" &&
    states.gender !== "" &&
    isValidBirthday(states.birthday) &&
    isValidOver14(states.birthday) &&
    !nickNameDoubleCheck &&
    nickNameDoubleCheck !== null;

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
  }, [signInCondition, nickNameDoubleCheck]);

  useEffect(() => {
    setNickNameDoubleCheck(null);
  }, [states.nickName]);

  const possible = nickNameDoubleCheck !== null && !nickNameDoubleCheck;
  const impossible = nickNameDoubleCheck !== null && nickNameDoubleCheck;

  const buttonStyle = () => {
    if (nickNameDoubleCheck === null) {
      return "border bg-blue-400 ml-2 w-[100px] text-white rounded-md text-sm";
    }
    if (impossible) {
      return "border bg-red-400 ml-2 w-[100px] text-white rounded-md text-sm";
    }
    if (!impossible) {
      return "border ml-2 w-[100px] text-white rounded-md text-sm bg-green-500";
    }
  };

  console.log(signInCondition);

  return (
    <form>
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
            <button onClick={handleCheckNickname} className={buttonStyle()}>
              {nickNameDoubleCheck === null && "중복확인"}
              {possible && "사용가능"}
              {impossible && "사용불가"}
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
                  key={gender}
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
    </form>
  );
};

export default SignInForm;

const genderList = ["남성", "여성", "기타", "선택안함"];
