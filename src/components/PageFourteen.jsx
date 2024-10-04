import SectionHeader from "./SectionHeader";

const PageFourteen = () => {
    return (
        <div className="flex-1 p-6">
            <SectionHeader
                title="Collaboration Media Performance Insights"
                description="This section provides insights into the performance of contents featuring branded content by the influencer."
            />

            <div className="mt-2 grid grid-cols-4 rounded-lg border py-4">
                <div className="space-y-2 border-r px-4 last:border-r-0">
                    <p className="text-sm font-medium text-slate-600">
                        Avg. Views
                    </p>

                    <div className="flex items-center gap-1.5">
                        <span className="text-xl font-semibold">21.5%</span>

                        <span className="rounded-full bg-green-50 px-2 py-0.5 text-sm text-green-500">
                            Excellent
                        </span>
                    </div>

                    <p className="text-xs text-slate-400">
                        This percentage reflects how successful branded content
                        performed relative to general content.
                    </p>

                    <hr />

                    <p className="text-sm text-slate-400">Detail Breakdown</p>

                    <div className="space-y-2 rounded-md bg-slate-50 p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                Branded
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                71.86K
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                General
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                69.45K
                            </span>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------- */}
                <div className="space-y-2 border-r px-4 last:border-r-0">
                    <p className="text-sm font-medium text-slate-600">
                        Avg. Likes
                    </p>

                    <div className="flex items-center gap-1.5">
                        <span className="text-xl font-semibold">21.5%</span>

                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-sm text-blue-500">
                            Good
                        </span>
                    </div>

                    <p className="text-xs text-slate-400">
                        This percentage reflects how successful branded content
                        performed relative to general content.
                    </p>

                    <hr />

                    <p className="text-sm text-slate-400">Detail Breakdown</p>

                    <div className="space-y-2 rounded-md bg-slate-50 p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                Branded
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                71.86K
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                General
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                69.45K
                            </span>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------- */}
                <div className="space-y-2 border-r px-4 last:border-r-0">
                    <p className="text-sm font-medium text-slate-600">
                        Avg. Comments
                    </p>

                    <div className="flex items-center gap-1.5">
                        <span className="text-xl font-semibold">21.5%</span>

                        <span className="rounded-full bg-orange-50 px-2 py-0.5 text-sm text-orange-500">
                            Fair
                        </span>
                    </div>

                    <p className="text-xs text-slate-400">
                        This percentage reflects how successful branded content
                        performed relative to general content.
                    </p>

                    <hr />

                    <p className="text-sm text-slate-400">Detail Breakdown</p>

                    <div className="space-y-2 rounded-md bg-slate-50 p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                Branded
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                71.86K
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                General
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                69.45K
                            </span>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------- */}
                <div className="space-y-2 border-r px-4 last:border-r-0">
                    <p className="text-sm font-medium text-slate-600">
                        Engagement Rate
                    </p>

                    <div className="flex items-center gap-1.5">
                        <span className="text-xl font-semibold">1.5%</span>

                        <span className="rounded-full bg-red-50 px-2 py-0.5 text-sm text-red-500">
                            Poor
                        </span>
                    </div>

                    <p className="text-xs text-slate-400">
                        This percentage reflects how successful branded content
                        performed relative to general content.
                    </p>

                    <hr />

                    <p className="text-sm text-slate-400">Detail Breakdown</p>

                    <div className="space-y-2 rounded-md bg-slate-50 p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                Branded
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                71.86K
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                General
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                                69.45K
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <SectionHeader
                title="Collaborated Feed"
                description="This section shows latest 4 collaborated media posted by the influencer."
                className="mt-4"
            />

            <div className="mt-2 grid grid-cols-4 gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

const Card = () => {
    return (
        <div className="flex flex-col gap-2 rounded-lg border p-3">
            <div className="flex items-center gap-1 overflow-hidden">
                <img
                    src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRpjYDM%2FopG6LEn5yybjPwMC7q%2BDaxyT%2F%2FL0IAHSjFLGXYyTdtc97YFhND8dFFRvhmgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                    alt="profile"
                    className="h-[30px] w-[30px] shrink-0 rounded-full"
                />
                <div className="flex-1 overflow-hidden">
                    <p className="truncate text-sm font-medium text-slate-600">
                        Ashish Chanchlani
                    </p>
                    <p className="truncate text-xs text-slate-400">
                        @ashishchanchlani • 25th April, 2024
                    </p>
                </div>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-md">
                <img
                    src="https://i.ytimg.com/vi/9lx11dy9J30/hqdefault.jpg"
                    className="z-[1] h-full w-full object-contain"
                    alt="thumbnail"
                />
                <div
                    aria-label="dark-overlay"
                    className="absolute inset-0 bg-gradient-to-t from-black from-0% via-transparent via-30% to-transparent to-100%"
                />

                <div className="absolute bottom-2 left-2 right-2 z-[10] flex items-center justify-between rounded-md text-xs text-white">
                    <div className="flex items-center gap-1">
                        <span className="item-center flex gap-1 font-medium text-white">
                            Instagram
                        </span>
                    </div>
                    <span className="rounded-full bg-slate-950/50 px-2 font-medium text-white">
                        Feed
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-evenly rounded-md bg-slate-100 py-1 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-1">76.1K</span>
                <span className="flex items-center gap-1">1679</span>
                <span className="flex items-center gap-1">
                    <span>E.R.</span>
                    6.86%
                </span>
            </div>
        </div>
    );
};

export default PageFourteen;
