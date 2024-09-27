import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
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
        </div>
    );
};

export default App;
