import SegmentStarterPage from "./SegmentStarterPage";

const PageTwo = () => {
    return (
        <SegmentStarterPage
            index={1}
            title="Profile Diagnosis"
            description="Get a detailed analysis of your profile’s performance, highlighting key strengths, identifying areas for improvement, and offering actionable insights to enhance your online presence."
            list={[
                "Profile",
                "Profile Metrics",
                "Profile vs Competitor",
                "Social Overview",
            ]}
        />
    );
};

export default PageTwo;
