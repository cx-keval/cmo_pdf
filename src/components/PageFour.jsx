import Chart from "react-apexcharts";
import SectionHeader from "./SectionHeader";

const PageFour = () => {
    const socialScoreOptions = {
        series: [77],
        chart: {
            height: 250,
            type: "radialBar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -180,
                endAngle: 180,
                hollow: {
                    margin: 0,
                    size: "80%",
                    background: "#fff",
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: "front",
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.2,
                    },
                },
                track: {
                    background: "#fff",
                    strokeWidth: "70%",
                    margin: 0,
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 1,
                        opacity: 0.35,
                    },
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -16,
                        show: true,
                        color: "#808080",
                        fontSize: "14px",
                        fontFamily: "inherit",
                        fontWeight: "400",
                    },
                    value: {
                        formatter: (val) => `${parseFloat(val).toFixed(0)}`,
                        offsetY: 4,
                        color: "#475569",
                        fontSize: "30px",
                        fontFamily: "inherit",
                        fontWeight: "600",
                        show: true,
                    },
                },
            },
        },
        legend: {
            show: false,
        },
        fill: {
            type: "gradient",
            colors: ["#3b82f6", "#60a5fa"],
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.1,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        stroke: {
            lineCap: "round",
        },
        labels: ["Score"],
    };

    return (
        <div className="flex-1 p-6">
            <SectionHeader
                title="Social Score"
                description={`The "Social Score" section offers a comprehensive analysis of overall impact and reach.`}
            />

            <div className="mt-2 grid grid-cols-4 gap-4">
                <div className="col-span-3 flex rounded-lg border p-4">
                    <div className="flex flex-1 items-center justify-center border-r">
                        <Chart
                            width={250}
                            options={socialScoreOptions}
                            series={[77]}
                            height={280}
                            type="radialBar"
                        />
                    </div>

                    <div className="flex-[2.15] px-4">
                        <div className="flex gap-6 border-b py-3">
                            <div className="flex-1 space-y-2">
                                <p className="text-sm text-slate-400">
                                    Followers
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-semibold">30M</p>
                                    <p className="rounded-full bg-blue-50 px-3 py-1 text-blue-500">
                                        Good
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 space-y-2">
                                <p className="text-sm text-slate-400">
                                    Audience Credibility
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-semibold">85%</p>
                                    <p className="rounded-full bg-green-50 px-3 py-1 text-green-500">
                                        Excellent
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 border-b py-3">
                            <div className="flex-1 space-y-2">
                                <p className="text-sm text-slate-400">
                                    6 Month Growth Rate
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-semibold">
                                        9.02%
                                    </p>
                                    <p className="rounded-full bg-blue-50 px-3 py-1 text-blue-500">
                                        Good
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 space-y-2">
                                <p className="text-sm text-slate-400">
                                    Weekly Post Frequency
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-semibold">
                                        0.92
                                    </p>
                                    <p className="rounded-full bg-red-50 px-3 py-1 text-red-500">
                                        Low
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 py-3">
                            <div className="flex-1 space-y-2">
                                <p className="text-sm text-slate-400">
                                    Engagement Rate
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-semibold">
                                        0.02%
                                    </p>
                                    <p className="rounded-full bg-blue-50 px-3 py-1 text-blue-500">
                                        Good
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 space-y-2">
                                <p className="text-sm text-slate-400">
                                    Views to followers Ratio
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-semibold">
                                        1.41
                                    </p>
                                    <p className="rounded-full bg-green-50 px-3 py-1 text-green-500">
                                        Excellent
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-2 rounded-lg border border-amber-500 bg-amber-50 p-4">
                    <p className="text-xl text-amber-500">
                        What can be improved ?
                    </p>

                    <ul className="list-disc space-y-1 pl-6 text-sm text-slate-600">
                        <li>
                            Posting more frequently will help you increase your
                            reach
                        </li>
                        <li>What can be improved</li>
                        <li>
                            Posting more frequently will help you increase your
                            reach to a wider audience and spread brand awareness
                        </li>
                    </ul>
                </div>
            </div>

            <SectionHeader
                title="Profile Performance vs Competitors"
                description={`The "Social Score" section offers a comprehensive analysis of overall impact and reach.`}
                blueTitle
                className="mt-4"
            />

            <div className="mt-2 grid grid-cols-5">
                <div className="col-span-1">
                    <div className="flex h-11 items-center"> </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Social Score</p>
                    </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Followers</p>
                    </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Engagement Rate</p>
                    </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Posting Frequency</p>
                    </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Audience Credibility</p>
                    </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Growth rate</p>
                    </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">
                            View to Followers Ratio
                        </p>
                    </div>
                </div>
                <div className="col-span-4 rounded-lg border border-blue-500 text-lg font-medium text-slate-600">
                    <div className="flex h-11 items-center gap-3 border-b border-slate-100 px-5">
                        <div className="flex-1">Competitor 1</div>
                        <div className="flex-1">Competitor 2</div>
                        <div className="flex-1">Competitor 3</div>
                        <div className="flex-1">Competitor 4</div>
                    </div>
                    <div className="flex h-11 items-center gap-3 border-b border-slate-100 px-5">
                        <div className="flex-1">1</div>
                        <div className="flex-1">2</div>
                        <div className="flex-1 text-blue-500">3</div>
                        <div className="flex-1">4</div>
                    </div>
                    <div className="flex h-11 items-center gap-3 border-b border-slate-100 px-5">
                        <div className="flex-1">1</div>
                        <div className="flex-1">2</div>
                        <div className="flex-1">3</div>
                        <div className="flex-1 text-blue-500">4</div>
                    </div>
                    <div className="flex h-11 items-center gap-3 border-b border-slate-100 px-5">
                        <div className="flex-1 text-blue-500">1</div>
                        <div className="flex-1">2</div>
                        <div className="flex-1">3</div>
                        <div className="flex-1">4</div>
                    </div>
                    <div className="flex h-11 items-center gap-3 border-b border-slate-100 px-5">
                        <div className="flex-1">1</div>
                        <div className="flex-1">2</div>
                        <div className="flex-1 text-blue-500">3</div>
                        <div className="flex-1">4</div>
                    </div>
                    <div className="flex h-11 items-center gap-3 border-b border-slate-100 px-5">
                        <div className="flex-1">1</div>
                        <div className="flex-1">2</div>
                        <div className="flex-1">3</div>
                        <div className="flex-1">4</div>
                    </div>
                    <div className="flex h-11 items-center gap-3 border-b border-slate-100 px-5">
                        <div className="flex-1">1</div>
                        <div className="flex-1">2</div>
                        <div className="flex-1">3</div>
                        <div className="flex-1">4</div>
                    </div>
                    <div className="flex h-11 items-center gap-3 px-5">
                        <div className="flex-1">1</div>
                        <div className="flex-1">2</div>
                        <div className="flex-1 text-blue-500">3</div>
                        <div className="flex-1">4</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageFour;
