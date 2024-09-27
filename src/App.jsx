import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageWrapper from "./components/PageWrapper";
import SegmentStarterPage from "./components/SegmentStarterPage";

const App = () => {
    return (
        <div aria-label="main" className="w-full">
            <SegmentStarterPage
                index={1}
                title="Profile Diagnosis"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer"
                list={[
                    "Profile",
                    "Profile Metrics",
                    "Profile vs Competitor",
                    "Social Overview",
                ]}
            />

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
