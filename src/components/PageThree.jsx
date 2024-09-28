import SectionHeader from "./SectionHeader";

const METRICS = [
    {
        label: "Followers",
        value: 1000,
        precision: 1,
        showCurrency: false,
        postFix: "",
    },
    {
        label: "Total Post",
        value: 21,
        precision: 1,
        showCurrency: false,
        postFix: "",
    },
    {
        label: "Following",
        value: 231,
        precision: 1,
        showCurrency: false,
        postFix: "",
    },
    {
        label: "Engagement Rate",
        value: 5.511,
        precision: 3,
        showCurrency: false,
        postFix: "%",
    },
    {
        label: "Average Views",
        value: 890,
        precision: 1,
        showCurrency: false,
        postFix: "",
    },
    {
        label: "Average Comments",
        value: 345,
        precision: 1,
        showCurrency: false,
        postFix: "",
    },
    {
        label: "Social Score",
        value: 70,
        precision: 0,
        showCurrency: false,
        postFix: "",
    },
];

const PageThree = () => {
    return (
        <div className="flex-1 p-6">
            <SectionHeader
                title="Profile Overview"
                description="Provides a summary of an influencer's profile engagement metrics."
            />

            <div className="mt-2 grid grid-cols-2 rounded-lg border p-4">
                <div className="flex gap-4 border-r pr-4">
                    <img
                        src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRpjYDM%2FopG6LEn5yybjPwMC7q%2BDaxyT%2F%2FL0IAHSjFLGXYyTdtc97YFhND8dFFRvhmgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                        alt="profile"
                        className="aspect-square h-[150px] w-auto overflow-hidden rounded-lg"
                    />
                    <div className="flex flex-1 flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-semibold text-slate-600">
                                    Ashish Chanchlani
                                </p>
                                <p className="text-slate-400">
                                    @ashishchanchlani
                                </p>
                            </div>

                            <p className="flex items-center gap-2 rounded-full border px-4 py-2 font-medium text-slate-600">
                                Instagram
                            </p>
                        </div>

                        <div className="flex flex-1 flex-col justify-evenly rounded-md bg-blue-50 px-4 py-1">
                            <div className="flex gap-4">
                                <span className="flex-1 text-slate-400">
                                    Website:
                                </span>
                                <p className="flex-[2]">
                                    <a
                                        href={"https://google.com/"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        www.google.com
                                    </a>
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex-1 text-slate-400">
                                    Email:
                                </span>
                                <p className="flex-[2]">mail@tata.com</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex-1 text-slate-400">
                                    Phone Number:
                                </span>
                                <p className="flex-[2]">99999777777</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center pl-4">
                    <p className="text-lg font-medium text-slate-600">
                        Profile Caption:
                    </p>
                    <p className="line-clamp-5 text-slate-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem, sunt accusantium excepturi perferendis
                        assumenda in corrupti labore, laudantium atque ut
                        beatae, dolor ipsum officia quos! Nobis aliquam veniam
                        culpa necessitatibus nam quaerat, corrupti blanditiis
                        placeat delectus, autem velit minima nulla quas. Quo
                        voluptatibus rem quibusdam nam quod adipisci eius atque
                        eaque repellat ex asperiores at sunt numquam,
                        consequuntur dignissimos aliquam voluptatum minima, nisi
                        blanditiis aliquid deserunt.
                    </p>
                </div>
            </div>

            <SectionHeader
                title="Metrics Overview"
                description="Provides a summary of an influencer's profile engagement metrics."
                className="mt-8"
            />

            <div className="mt-2 grid grid-cols-4 gap-4">
                {METRICS.map(({ label, value, postFix }) => (
                    <div
                        key={label}
                        className="space-y-2 rounded-md border px-4 py-4"
                    >
                        <p className="text-slate-400">{label}</p>
                        <p className="text-3xl font-semibold text-slate-600">
                            {value}
                            {postFix}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageThree;
