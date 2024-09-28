import SegmentStarterPage from "./SegmentStarterPage";

const PageTwo = () => {
    return (
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
    );
};

export default PageTwo;
