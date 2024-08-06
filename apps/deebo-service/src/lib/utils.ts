// 유효성 검사

export const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  // 최소 8자 이상
  // 최소 하나의 대문자
  // 최소 하나의 소문자
  // 최소 하나의 숫자
  // 최소 하나의 특수문자

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const isValidNickname = (nickname: string) => {
  const nicknameRegex = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,15}$/;
  return nicknameRegex.test(nickname);
};

export const isValidBirthday = (birthday: string) => {
  const today = new Date();
  const birthdayDate = new Date(birthday);

  if (today < birthdayDate) {
    return false;
  } else {
    return true;
  }
};

export const isValidOver14 = (birthday: string) => {
  // 현재 날짜
  const today = new Date();

  // 생년월일을 Date 객체로 변환
  const birth = new Date(birthday);

  // 나이 계산
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  // 생일이 아직 지나지 않았으면 나이에서 1을 뺌
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  // 14세 이상인지 확인
  return age >= 14;
};

//
