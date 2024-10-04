import SectionHeader from "./SectionHeader";

const ITEMS = [
    {
        title: "Avg. Likes",
        description:
            "The number of likes is calculated based on last 24 content.",
    },
    {
        title: "Avg. Comments",
        description: "The average number of comments based on last 24 content.",
    },
    {
        title: "Sponsored Post Performance",
        description:
            "This percentage reflects how successful branded content performed relative to general content.",
    },
    {
        title: "Avg. Reel Plays",
        description:
            "The average number of reel plays based on last 24 content.",
    },
    {
        title: "Engagement Rate",
        description:
            "The engagement rate is calculated from total likes + total comments based on last 24 content.",
    },
    {
        title: "Audience Lookalikes ",
        description:
            "Lookalikes refer to influencers with similar audience demographics.",
    },
    {
        title: "Credibility",
        description:
            "Represents the percentage of genuine followers out of the total follower count.",
    },
];

const PageSixteen = () => {
    return (
        <div className="flex-1 p-6">
            <SectionHeader
                title="Methodology & Glossary"
                description="This section explains the methodology used in the campaign analysis and defines key terms."
            />

            <div className="mt-2 grid grid-cols-3 gap-16 rounded-lg bg-slate-50 p-6">
                {ITEMS.map(({ title, description }) => (
                    <div className="space-y-1">
                        <p className="font-medium text-slate-600">{title}</p>
                        <p className="text-sm text-slate-400">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageSixteen;
