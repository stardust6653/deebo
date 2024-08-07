import FeatureCard from "../FeatureCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../style/swiperCustom/custom-pagination.css";

const FeatureCardList = () => {
  SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

  const features = [
    {
      title: "프로필 상점",
      line1: "앨범, 굿즈 판매 시 높은 수수료",
      line2: "많이 부담스러우셨나요?",
      line3: "이제는 낮은 수수료로 이용하세요",
      pointWord: "낮은 수수료",
      noticeWord: "추후 기능 추가 예정",
      icon: "src/assets/3d-icon/pay-3d.png",
    },
    {
      title: "미발표 음원 플레이어",
      line1: "복잡한 음원 유통없이도",
      line2: "음원 등록하고 광고 수익을 내세요",
      line3: "이제는 미발표 음원도 스트리밍 수익을!",
      pointWord: "수익 다각화",
      noticeWord: "추후 기능 추가 예정",
      icon: "src/assets/3d-icon/player-3d.jpg",
    },
    {
      title: "데이터 분석",
      line1: "Deebo 프로필 기반의",
      line2: "데이터 분석 서비스 제공",
      noticeWord: "추후 기능 추가 예정",
      icon: "src/assets/3d-icon/analze-3d.png",
    },
    {
      title: "후원",
      line1: "0% 수수료로",
      line2: "팬들의 마음을 받아보세요",
      pointWord: "Zero 수수료",
      noticeWord: "(단, 카드 등 결제 수수료 제외)",
      icon: "src/assets/3d-icon/support-3d.jpg",
    },
    {
      title: "프로필",
      line1: "무료로 나만의 프로필을 만들어보세요",
      line2: "언제든지 나를 소개할 때는? Deebo",
      type: "PROFILE",
      icon: "src/assets/3d-icon/profile-3d.jpg",
    },

    {
      title: "글로벌 시장 지원",
      line1: "글로벌 시장 진출을 편하게",
      line2: "다국어 자동 변환 프로필 기능 제공",
      noticeWord: "추후 기능 추가 예정",
      icon: "src/assets/3d-icon/global-3d.png",
    },
    {
      title: "프로필 구성 변경",
      line1: "나의 강점을 먼저 볼 수 있도록",
      line2: "프로필 구성 순서 커스텀 기능 제공",
      noticeWord: "추후 기능 추가 예정",
      icon: "src/assets/3d-icon/edit-3d.jpg",
    },
    {
      title: "보도자료 작성 중개",
      line1: "전문적인 기자와 함께",
      line2: "보도자료 작성 중개 서비스",
      noticeWord: "추후 기능 추가 예정",
      icon: "src/assets/3d-icon/press-3d.png",
    },
    {
      title: "예술인 대상 인터뷰",
      line1: "Deebo가 취재했어요",
      line2: "예술인 대상 인터뷰 기사 제공",
      noticeWord: "추후 기능 추가 예정",
      icon: "src/assets/3d-icon/interview-3d.png",
    },
  ];

  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="swiper-container w-full">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
            el: ".custom-pagination",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 5,
            },
          }}
          modules={[]}
          className="w-full custom-swiper flex justify-center flex-col items-center h-[580px]"
        >
          {features.map((item) => (
            <SwiperSlide className="flex justify-center items-center  w-[350px] min-h-[450px]">
              <FeatureCard
                key={item.title}
                title={item.title}
                line1={item.line1}
                line2={item.line2}
                type={item.type}
                pointWord={item.pointWord}
                noticeWord={item.noticeWord}
                icon={item.icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <div className="custom-pagination flex justify-center p-4 bg-black bg-opacity-40 rounded-full" />
      </div>
    </div>
  );
};

export default FeatureCardList;
