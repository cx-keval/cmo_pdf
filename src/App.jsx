import PageWrapper from "./components/PageWrapper";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageFive from "./components/PageFive";
import PageSix from "./components/PageSix";
import PageSeven from "./components/PageSeven";
import PageEight from "./components/PageEight";
import PageNine from "./components/PageNine";
import PageTen from "./components/PageTen";
import PageEleven from "./components/PageEleven";
import PageTwelve from "./components/PageTwelve";
import PageThirteen from "./components/PageThirteen";
import PageFourteen from "./components/PageFourteen";
import PageFifteen from "./components/PageFifteen";
import PageSixteen from "./components/PageSixteen";
import ThankYou from "./components/ThankYou";

const App = () => {
    return (
        <div aria-label="main" className="w-full">
            <PageOne />

            <PageTwo />

            <PageWrapper>
                <PageThree />
            </PageWrapper>

            <PageWrapper>
                <PageFour />
            </PageWrapper>

            <PageFive />

            <PageWrapper>
                <PageSix />
            </PageWrapper>

            <PageWrapper>
                <PageSeven />
            </PageWrapper>

            <PageWrapper>
                <PageEight />
            </PageWrapper>

            <PageWrapper>
                <PageNine />
            </PageWrapper>

            <PageTen />

            <PageWrapper>
                <PageEleven />
            </PageWrapper>

            <PageWrapper>
                <PageTwelve />
            </PageWrapper>

            <PageThirteen />

            <PageWrapper>
                <PageFourteen />
            </PageWrapper>

            <PageWrapper>
                <PageFifteen />
            </PageWrapper>

            <PageWrapper>
                <PageSixteen />
            </PageWrapper>

            <ThankYou />
        </div>
    );
};

export default App;
