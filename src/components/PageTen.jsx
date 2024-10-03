import SegmentStarterPage from "./SegmentStarterPage";

const PageTen = () => {
    return (
        <SegmentStarterPage
            index={3}
            title="Audience Diagnosis"
            description="Gain insights into your audience demographics, behaviors, and preferences, helping you better understand and tailor your content to maximize impact and reach."
            list={[
                "Audience Overview",
                "Audience Credibility",
                "Audience Geo & Demographic",
                "Your Audience vs Competitors",
            ]}
        />
    );
};

export default PageTen;
