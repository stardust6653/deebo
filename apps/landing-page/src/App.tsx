import { Twitter, Instagram, Facebook } from "lucide-react";
import Header from "./components/common/Header";
import MainSectionContainer from "./components/main/MainSectionContainer";
import BackgroundAsset from "./components/main/BackgroundAsset";
import SectionTitle from "./components/common/SectionTitle";
import WhySectionContainer from "./components/whySection/WhySectionContainer";
import { useScrollBackground } from "./hook/useScrollBackgroud";
import Subtitle from "./components/common/Subtitle";
import FeatureSectionContainer from "./components/featureSection/FeatureSectionContainer";
import IntroductionCardList from "./components/whySection/IntroductionCardList";
import FeatureCardList from "./components/featureSection/FeatureCardList";
import FanFeatureSectionContainer from "./components/FanFeatureSection/FanFeatureSectionContainer";
import FanFeatureCardList from "./components/FanFeatureSection/FanFeatureCardList";
import InterviewSectionContainer from "./components/interviewSection/InterviewSectionContainer";
import InterviewCardList from "./components/interviewSection/InterviewCardList";
import SpecialInterview from "./components/interviewSection/SpecialInterview";
import QnASectionContainer from "./components/QnASection/QnASectionContainer";
import QnAItemList from "./components/QnASection/QnAItemList";
import SubscriptionInfoSectionContainer from "./components/SubscriptionInfoSection/SubscriptionInfoSectionContainer";
import PlanCardList from "./components/SubscriptionInfoSection/PlanCardList";
import { CatchPhrase } from "@repo/ui/catchPhrase";
import { ArrowRight } from "lucide-react";

function App() {
  const type = "MAIN";
  const backgroundColor = useScrollBackground(type);

  return (
    <>
      <div className="App">
        <div
          style={{ backgroundColor }}
          className={`min-h-screen transition-colors duration-100 ease-in-out overflow-hidden`}
        >
          <Header />
          <MainSectionContainer>
            <BackgroundAsset />
            <CatchPhrase>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold flex items-center mx-auto hover:bg-blue-100 transition-colors">
                시작하기 <ArrowRight className="ml-2" />
              </button>
            </CatchPhrase>
          </MainSectionContainer>

          <WhySectionContainer>
            <SectionTitle
              title="Deebo를 사용해야하는 이유"
              badge="Why use to Debbo"
            />
            <Subtitle
              line1="예술인을 위한 편의기능이"
              line2="가득 담겨있는 서비스, 디보"
            />
            <IntroductionCardList />
          </WhySectionContainer>

          <FeatureSectionContainer>
            <SectionTitle
              title="예술인을 위한 강력한 기능"
              badge="Powerful features for artists"
            />
            <Subtitle
              line1="디보를 활용해"
              line2="다양한 기능을 사용해보세요"
              type="FEATURE"
            />
            <FeatureCardList />
          </FeatureSectionContainer>

          <FanFeatureSectionContainer>
            <SectionTitle
              title="예술인 팬들을 위한 기능"
              badge="Features for Fans"
            />
            <Subtitle line1="예술인과의 소통" line2="Deebo를 통하면 쉬워요!" />
            <FanFeatureCardList />
          </FanFeatureSectionContainer>

          <InterviewSectionContainer>
            <SectionTitle title="예술인 대상 인터뷰" badge="Interview" />
            <Subtitle
              line1="Deebo가 취재했어요"
              line2="예술인 대상 인터뷰 기사 제공"
            />
            <div className="w-[900px]">
              <SpecialInterview />
              <InterviewCardList />
            </div>
          </InterviewSectionContainer>

          <SubscriptionInfoSectionContainer>
            <SectionTitle
              title="Deebo 요금제 비교"
              badge="Subscription Plans"
            />
            <Subtitle
              line1="Deebo의 구독 요금제를 비교하고"
              line2="원하는 플랜을 골라보세요"
            />
            <PlanCardList />
          </SubscriptionInfoSectionContainer>

          <QnASectionContainer>
            <SectionTitle title="자주 묻는 질문" badge="Q&A" />
            <Subtitle
              line1="Deebo에 궁금한 게 있나요?"
              line2="자주 하는 질문을 살펴보세요!"
            />
            <QnAItemList />
          </QnASectionContainer>

          <footer className="bg-blue-900 text-white p-8 text-center">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Deebo</h3>
                <p>예술인을 위한 전문적인 프로필 서비스</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">기능</h3>
                <ul>
                  <li>프로필</li>
                  <li>수익화</li>
                  <li>편의기능</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">팬 서비스</h3>
                <ul>
                  <li>뱃지</li>
                  <li>후원</li>
                  <li>탐험 & 어워즈</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">문의</h3>
                <p>support@deebo.com</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <Instagram size={24} />
                  <Facebook size={24} />
                  <Twitter size={24} />
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-700">
              <p>&copy; 2024 Deebo. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
