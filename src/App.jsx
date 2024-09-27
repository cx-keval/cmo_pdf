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

            <SegmentStarterPage
                index={2}
                title="Engagement Diagnosis"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer"
                list={[
                    <>
                        <strong>Feed Engagement</strong> (Overview, Posting
                        Frequency, Recent Feed)
                    </>,
                    <>
                        <strong>Reels Engagement</strong> (Overview, Posting
                        Frequency, Recent Reels)
                    </>,
                    <strong>Growth Rate</strong>,
                    <strong>Sentiment Analysis</strong>,
                ]}
            />
        </div>
    );
};

export default App;
