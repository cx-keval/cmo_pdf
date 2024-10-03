import SegmentStarterPage from "./SegmentStarterPage";

const PageFive = () => {
    return (
        <SegmentStarterPage
            index={2}
            title="Engagement Diagnosis"
            description="Analyze engagement levels from your posts, uncover trends, and identify opportunities to enhance interactions and build stronger connections with your audience."
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
