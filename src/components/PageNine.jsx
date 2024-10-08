import { IconInfoCircle } from "@tabler/icons-react";
import SectionHeader from "./SectionHeader";
import Chart from "react-apexcharts";

const PageNine = () => {
    const sentimentAnalysisSeries = [20, 20, 60];

    const sentimentAnalysisOptions = {
        chart: {
            type: "donut",
            height: 220,
        },
        labels: ["Positive", "Negative", "Neutral"],
        colors: ["#22c55e", "#ef4444", "#F59E0B"],
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "79%",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: ["Sentiment", "Analysis"],
                            fontSize: "14px",
                            color: "#475569",
                            fontFamily: "inherit",
                            fontWeight: 500,
                            formatter: () => "",
                        },
                    },
                },
            },
        },
        legend: {
            show: false,
        },
    };

    return (
        <div className="grid flex-1 grid-cols-3 gap-4 p-6">
            <div className="col-span-1 border-r pr-4">
                <SectionHeader
                    title="Sentiment Analysis"
                    description="This section provides a breakdown of the sentiment of the audience calculated by the recent post comments."
                />

                <div className="mt-2 rounded-lg border p-4">
                    <div className="flex items-center justify-center">
                        <Chart
                            height={220}
                            type="donut"
                            series={sentimentAnalysisSeries}
                            options={sentimentAnalysisOptions}
                        />
                    </div>

                    <p className="mb-2 text-sm font-semibold text-slate-400">
                        Detail Breakdown
                    </p>

                    <div className="space-y-4 rounded-md bg-slate-50 p-5 text-sm font-medium text-slate-600">
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                <span>Positive</span>
                            </span>

                            <span className="font-semibold">20%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-amber-500" />
                                <span>Neutral</span>
                            </span>

                            <span className="font-semibold">60%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-red-500" />
                                <span>Negative</span>
                            </span>

                            <span className="font-semibold">20%</span>
                        </div>
                    </div>

                    <hr className="mb-4 mt-4" />

                    <div className="flex gap-1 text-sm text-slate-600">
                        <IconInfoCircle className="mt-1 h-4 w-4 shrink-0" />
                        <span>
                            These insights have been derived from the top 20
                            comments on the last 10 posts.
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
                <SectionHeader
                    title="Negative Comment Analysis"
                    description="Analyze negative comments to identify patterns, address concerns, and improve audience sentiment and engagement."
                />

                <div className="flex items-center gap-1 rounded-md bg-orange-50 px-2 py-1 text-sm text-orange-500">
                    <IconInfoCircle className="h-4 w-4" />
                    AI is in its early stages and doesn't yet understand sarcasm
                    or unusual language.
                </div>

                <div className="grid flex-1 grid-cols-2 gap-4">
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </div>
            </div>
        </div>
    );
};

const CommentCard = () => {
    return (
        <div className="flex flex-col gap-2 overflow-hidden rounded-md border p-4">
            <div className="flex-1">
                <p className="line-clamp-5 text-sm text-slate-600">
                    Excited about the new AI software release! It's incredible
                    how technology keeps advancing Excited about the new AI
                    software release!
                </p>
            </div>

            <div className="flex items-end justify-between">
                <div className="flex items-center gap-1 overflow-hidden">
                    <img
                        src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDZlWmgYQw8mX1KSF3S3nA7nZR2MFejHW3fH%2Fn1VxrVt9x0Lb%2F7mNToLIgoTaAUvLzIgawhSVXBtHRP3LmYuyHRogNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                        alt="profile"
                        className="h-[25px w-[25px] shrink-0 rounded-full"
                    />
                    <div className="flex-1">
                        <p className="truncate text-xs font-medium text-slate-600">
                            Zomato
                        </p>
                        <p className="truncate text-xs text-slate-400">
                            @zomato
                        </p>
                    </div>
                </div>

                <div className="flex gap-1 text-xs text-slate-400">
                    <span>50 Likes</span> ·<span>45 min ago</span> ·
                    <span className="text-red-500">Negative</span>
                </div>
            </div>
        </div>
    );
};

export default PageNine;
