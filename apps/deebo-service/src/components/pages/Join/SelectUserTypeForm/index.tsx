import React, { Dispatch, SetStateAction } from "react";
import { PiGuitarBold } from "react-icons/pi";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";

interface Props {
  userType: string;
  setUserType: Dispatch<SetStateAction<string>>;
}

const SelectUserTypeForm = ({ userType, setUserType }: Props) => {
  const hoverStyle =
    "transition-all 300ms ease-in-out hover:bg-blue-300 text-white";
  const basicStyle =
    "relative flex justify-between items-center border border-slate-300 rounded-lg p-4 text-blue-950 cursor-pointer transition-all 300ms ease-in-out";
  const disabledStyle =
    "cursor-not-allowed after:content-['출시예정'] after:bg-black after:bg-opacity-50 after:absolute after:inset-0 after:rounded-lg after:flex after:items-center after:justify-center after:text-white after:text-lg after:font-semibold";
  const selectStyle = "bg-blue-400 ";

  const cardStyle = (user: UserType) => {
    if (user.available) {
      if (userType === user.value) {
        return selectStyle + " " + basicStyle + " " + hoverStyle;
      } else {
        return basicStyle + " " + hoverStyle;
      }
    } else {
      return disabledStyle + " " + basicStyle;
    }
  };

  const onUserTypeClick = (user: UserType) => {
    if (user.available) {
      if (user.value === userType) {
        setUserType("");
      } else {
        setUserType(user.value);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {userTypes.map((user) => (
        <div
          key={user.value}
          className={`${cardStyle(user)}`}
          onClick={() => onUserTypeClick(user)}
        >
          <div
            className={`flex flex-col text-blue-950  ${user.value === userType && "text-white"}`}
          >
            <p className="text-2xl mb-4">{user.title}</p>
            <p>{user.description}</p>
          </div>

          <div
            className={` text-2xl w-[50px] h-[50px] flex justify-center items-center  rounded-[100%] ${user.value === userType ? "bg-white" : "bg-blue-200 "} ${user.value === userType ? "text-blue-400" : "text-white"}`}
          >
            {user.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectUserTypeForm;

type UserType = {
  title: string;
  description: string;
  value: string;
  available: boolean;
  icon: JSX.Element;
};

const userTypes: UserType[] = [
  {
    title: "예술인",
    description: "예술인 회원으로 가입합니다.",
    value: "artist",
    available: true,
    icon: <PiGuitarBold />,
  },
  {
    title: "팬",
    description: "팬 회원으로 가입합니다.",
    value: "fan",
    available: false,
    icon: <FaRegFaceKissWinkHeart />,
  },
];
