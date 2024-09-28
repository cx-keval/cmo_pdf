import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageFive from "./components/PageFive";
import PageWrapper from "./components/PageWrapper";

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
        </div>
    );
};

export default App;
