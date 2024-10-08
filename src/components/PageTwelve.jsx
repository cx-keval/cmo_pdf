import { beautify } from "../utils";
import SectionHeader from "./SectionHeader";
import Chart from "react-apexcharts";

const comparison = {
    audience_credibility: [
        {
            value: 88,
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: 85,
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: 53,
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: 86,
            precision: 1,
            postFix: "",
            highlight: false,
        },
    ],
    top_age_group: [
        {
            value: "13-17",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "18-24",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "13-17",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "44+",
            precision: 1,
            postFix: "",
            highlight: false,
        },
    ],
    top_country: [
        {
            value: "India",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "England",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "United States",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "UAE",
            precision: 1,
            postFix: "",
            highlight: false,
        },
    ],
    top_city: [
        {
            value: "Mumbai",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "London",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "New York",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "Dubai",
            precision: 1,
            postFix: "",
            highlight: false,
        },
    ],
    top_gender: [
        {
            value: "Male",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "Female",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "Female",
            precision: 1,
            postFix: "",
            highlight: false,
        },
        {
            value: "Male",
            precision: 1,
            postFix: "",
            highlight: false,
        },
    ],
};

const PageTwelve = () => {
    const genderSplitSeries = [75.21, Number((100 - 75.21).toFixed(2))];

    const genderSplitOptions = {
        series: genderSplitSeries,
        colors: ["#60a5fa", "#bfdbfe"],
        chart: {
            type: "donut",
            height: 200,
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: "76%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "12px",
                            fontFamily: "inherit",
                            fontWeight: 600,
                            color: "#475569",
                            offsetY: -10,
                        },
                        value: {
                            show: true,
                            fontSize: "16px",
                            fontFamily: "inherit",
                            fontWeight: 800,
                            color: "#475569",
                            offsetY: 0,
                            formatter: (val) => val + "%",
                        },
                    },
                },
            },
        },
        labels: ["Male", "Female"],
        legend: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    };

    // -------------------------------------------

    const gendersPerAge = [
        {
            code: "13-17",
            male: 0.099419,
            female: 0.02801,
        },
        {
            code: "18-24",
            male: 0.392917,
            female: 0.099436,
        },
        {
            code: "25-34",
            male: 0.231122,
            female: 0.064183,
        },
        {
            code: "35-44",
            male: 0.053665,
            female: 0.008803,
        },
        {
            code: "45-64",
            male: 0.020311,
            female: 0.001921,
        },
    ];

    const ageGenderBarSeries = [
        {
            name: "Male",
            data: gendersPerAge?.map((item) => (item.male * 100).toFixed(1)),
        },
        {
            name: "Female",
            data: gendersPerAge?.map((item) => (item.female * 100).toFixed(1)),
        },
    ];

    const ageGenderBarOptions = {
        series: ageGenderBarSeries,
        chart: {
            type: "bar",
            height: 200,
            width: "100%",
            toolbar: {
                show: false,
            },
        },
        colors: ["#60a5fa", "#bfdbfe"],
        yaxis: {
            labels: {
                formatter: (val) => val + "%",
            },
        },
        xaxis: {
            categories: gendersPerAge?.map((e) => e.code),
            labels: {
                style: {
                    fontSize: 12,
                    fontFamily: "inherit",
                },
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 2,
                columnWidth: "55%",
                endingShape: "rounded",
                dataLabels: {
                    position: "top",
                },
            },
        },
        stroke: {
            colors: ["transparent"],
            width: 4,
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => val + "%",
            offsetY: -20,
            offsetX: 2,
            style: {
                fontSize: "10px",
                fontFamily: "inherit",
                fontWeight: 500,
                colors: ["#475569"],
            },
            background: {
                enabled: true,
                foreColor: "#000",
                padding: 5,
                borderRadius: 4,
                borderWidth: 0,
                borderColor: "#000",
                opacity: 0.15,
            },
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: 12,
                fontFamily: "inherit",
            },
        },
        legend: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
    };

    return (
        <div className="flex-1 p-6">
            <SectionHeader
                title="Audience Demography"
                description="This section provides a breakdown of the influencer's audience by age and gender."
            />

            <div className="mt-2 grid grid-cols-3 gap-4">
                <div className="col-span-1 space-y-2 rounded-lg border p-4">
                    <p className="text-sm font-medium text-slate-600">
                        Gender Split
                    </p>

                    <div className="grid grid-cols-2 rounded-md bg-slate-50 py-4">
                        <div className="border-r px-4">
                            <p className="text-xs font-medium text-slate-400">
                                Male Audience
                            </p>
                            <p className="text-sm font-semibold text-slate-600">
                                69.36%
                            </p>
                        </div>
                        <div className="px-4">
                            <p className="text-xs font-medium text-slate-400">
                                Female Audience
                            </p>
                            <p className="text-sm font-semibold text-slate-600">
                                69.36%
                            </p>
                        </div>
                    </div>

                    <Chart
                        type="donut"
                        options={genderSplitOptions}
                        series={genderSplitSeries}
                        height={200}
                    />

                    <p className="text-center text-sm">
                        Total Followers <strong>10M</strong>
                    </p>

                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center justify-center gap-1 rounded-full border px-2 py-0.5 text-sm font-medium text-slate-600">
                            <span className="h-2 w-2 rounded-full bg-blue-400" />
                            Male
                        </div>
                        <div className="flex items-center justify-center gap-1 rounded-full border px-2 py-0.5 text-sm font-medium text-slate-600">
                            <span className="h-2 w-2 rounded-full bg-blue-200" />
                            Female
                        </div>
                    </div>
                </div>

                <div className="col-span-2 flex flex-col space-y-2 rounded-lg border p-4">
                    <p className="text-sm font-medium text-slate-600">
                        Age Split
                    </p>

                    <div className="flex-1">
                        <Chart
                            type="bar"
                            series={ageGenderBarSeries}
                            options={ageGenderBarOptions}
                            height={"100%"}
                            width="100%"
                        />
                    </div>

                    <p className="rounded bg-slate-50 px-2 py-0.5 text-sm font-medium text-slate-600">
                        Day number indicates the count of posts made by the
                        influencer on that specific day.
                    </p>
                </div>
            </div>

            <SectionHeader
                title="Your Audience vs Competitors"
                description="This section compare your audience demographics and engagement with those of your competitors to uncover valuable insights and growth opportunities."
                blueTitle
                className="mt-4"
            />

            <div className="mt-2 grid grid-cols-5">
                <div className="col-span-1">
                    <div className="flex h-11 items-center"> </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Audience Credibility</p>
                    </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Top Age group</p>
                    </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Top Country</p>
                    </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Top City</p>
                    </div>
                    <div className="flex h-11 items-center">
                        <p className="text-slate-400">Top Gender</p>
                    </div>
                </div>

                <div className="col-span-4 overflow-hidden rounded-lg border border-blue-500 text-base font-medium text-slate-600">
                    <div className="flex h-11 items-center gap-3 border-b border-slate-200">
                        <div className="flex h-full flex-1 items-center gap-1 overflow-hidden bg-blue-50 pl-5">
                            <img
                                src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRpjYDM%2FopG6LEn5yybjPwMC7q%2BDaxyT%2F%2FL0IAHSjFLGXYyTdtc97YFhND8dFFRvhmgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                                alt="profile"
                                className="h-7 w-7 shrink-0 rounded-full"
                            />
                            <span className="flex-1 overflow-hidden truncate">
                                TATA Group
                            </span>
                        </div>
                        <div className="flex flex-1 items-center gap-1 overflow-hidden">
                            <img
                                src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDZV%2BMI1sY1L8JvHJB4dXZLAFe7JaRNchWmK9Xp1W2zb%2F98rjxGcsp93Sv%2FYQdDZTIp8Va3tDVmaiUbg5OHS8Kf2Wwq5%2BhsabX0Nc9aXCBbcsw%3D%3D"
                                alt="profile"
                                className="h-7 w-7 shrink-0 rounded-full"
                            />
                            <span className="flex-1 overflow-hidden truncate">
                                Nike
                            </span>
                        </div>
                        <div className="flex flex-1 items-center gap-1 overflow-hidden">
                            <img
                                src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDYvy61sBcp4g%2BGwAUOgcFcWWIL%2FdABgUC9Md6MKlHvB4RWOVcDyDsy1dpt2%2F3JUiOz7cDvaANaSus%2BTa%2B5MpxtqgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                                alt="profile"
                                className="h-7 w-7 shrink-0 rounded-full"
                            />
                            <span className="flex-1 overflow-hidden truncate">
                                Axe
                            </span>
                        </div>
                        <div className="flex flex-1 items-center gap-1 overflow-hidden">
                            <img
                                src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRu5BTUdEqqJAOu%2B3ptfaWy%2BUGnQLWF36aVVwLjITxgmah04bCKYD%2FspeqqSQmguMRWwq5%2BhsabX0Nc9aXCBbcsw%3D%3D"
                                alt="profile"
                                className="h-7 w-7 shrink-0 rounded-full"
                            />
                            <span className="flex-1 overflow-hidden truncate">
                                Spotify
                            </span>
                        </div>
                    </div>

                    {Object.entries(comparison).map(([_, values]) => (
                        <Row>
                            {values.map(
                                (
                                    { highlight, postFix, precision, value },
                                    idx
                                ) => (
                                    <Item
                                        isFirst={idx === 0}
                                        textBlue={highlight}
                                    >
                                        {typeof value === "number"
                                            ? beautify(value, precision)
                                            : value}
                                        {postFix}
                                    </Item>
                                )
                            )}
                        </Row>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Row = ({ children }) => (
    <div className="last:bottom-b-0 flex h-11 items-center gap-3 border-b border-slate-200">
        {children}
    </div>
);

const Item = ({ children, isFirst = false, textBlue = false }) => (
    <div
        className={`flex h-full flex-1 items-center ${isFirst ? "bg-blue-50 pl-5" : ""} ${textBlue ? "text-blue-500" : ""}`}
    >
        {children}
    </div>
);

export default PageTwelve;
