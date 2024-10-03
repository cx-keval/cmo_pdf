import PageWrapper from "./components/PageWrapper";
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

const App = () => {
    return (
        <div aria-label="main" className="w-full">
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
        </div>
    );
};

export default App;
