import PageThree from "./components/PageThree";
import PageTwo from "./components/PageTwo";
import PageWrapper from "./components/PageWrapper";

const App = () => {
    return (
        <div aria-label="main" className="w-full">
            <PageTwo />

            <PageWrapper>
                <PageThree />
            </PageWrapper>
        </div>
    );
};

export default App;
