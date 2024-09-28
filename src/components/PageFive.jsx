import SegmentStarterPage from "./SegmentStarterPage";

const PageFive = () => {
    return (
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
    );
};

export default PageFive;
