import SectionHeader from "./SectionHeader";

const PageFifteen = () => {
    return (
        <div className="flex-1 p-6">
            <SectionHeader
                title="Your Top collaborators"
                description="This section highlights the top influencer profiles you’ve collaborated with, categorized by their follower count"
            />

            <div className="mt-2 grid grid-cols-3 gap-4 rounded-lg border p-4">
                <InfluencerItem />
                <InfluencerItem />
                <InfluencerItem />
                <InfluencerItem />
                <InfluencerItem />
                <InfluencerItem />
                <InfluencerItem />
                <InfluencerItem />
                <InfluencerItem />
                <InfluencerItem />
                <InfluencerItem />
                <InfluencerItem />
            </div>

            <SectionHeader
                title="Top 3 Collaborators for Each Competitor"
                description="This section showcases the top 3 collaborations for each of your competitors."
                className="mt-4"
                blueTitle
            />

            <div className="mt-2 grid grid-cols-3 rounded-lg border border-blue-500 py-6">
                <div className="space-y-4 border-r px-6 last:border-r-0">
                    <div className="flex items-center justify-center gap-2 overflow-hidden rounded-md bg-slate-50 p-3">
                        <img
                            src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRpjYDM%2FopG6LEn5yybjPwMC7q%2BDaxyT%2F%2FL0IAHSjFLGXYyTdtc97YFhND8dFFRvhmgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                            alt="profile"
                            className="h-[28px] w-[28px] shrink-0 rounded-full"
                        />
                        <div className="truncate">InfoSys</div>
                    </div>

                    <InfluencerItem />
                    <InfluencerItem />
                    <InfluencerItem />
                </div>
                <div className="space-y-4 border-r px-6 last:border-r-0">
                    <div className="flex items-center justify-center gap-2 overflow-hidden rounded-md bg-slate-50 p-3">
                        <img
                            src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRpjYDM%2FopG6LEn5yybjPwMC7q%2BDaxyT%2F%2FL0IAHSjFLGXYyTdtc97YFhND8dFFRvhmgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                            alt="profile"
                            className="h-[28px] w-[28px] shrink-0 rounded-full"
                        />
                        <div className="truncate">
                            CultureX Entertainment Private Limited
                        </div>
                    </div>

                    <InfluencerItem />
                    <InfluencerItem />
                    <InfluencerItem />
                </div>
                <div className="space-y-4 border-r px-6 last:border-r-0">
                    <div className="flex items-center justify-center gap-2 overflow-hidden rounded-md bg-slate-50 p-3">
                        <img
                            src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRpjYDM%2FopG6LEn5yybjPwMC7q%2BDaxyT%2F%2FL0IAHSjFLGXYyTdtc97YFhND8dFFRvhmgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                            alt="profile"
                            className="h-[28px] w-[28px] shrink-0 rounded-full"
                        />
                        <div className="truncate">Modash</div>
                    </div>

                    <InfluencerItem />
                    <InfluencerItem />
                    <InfluencerItem />
                </div>
            </div>
        </div>
    );
};

const InfluencerItem = () => (
    <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-1.5 overflow-hidden">
            <div className="relative h-fit w-fit rounded-full">
                <img
                    src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRpjYDM%2FopG6LEn5yybjPwMC7q%2BDaxyT%2F%2FL0IAHSjFLGXYyTdtc97YFhND8dFFRvhmgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                    alt="profile"
                    className="h-[36px] w-[36px] shrink-0 rounded-full"
                />
            </div>

            <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium text-slate-600">
                    Ashish Chanchlani
                </p>
                <p className="truncate text-sm text-slate-400">
                    @ashishchanchlani
                </p>
            </div>
        </div>

        <div className="shrink-0 rounded-md bg-slate-50 px-6 py-2 text-center">
            <p className="text-sm font-medium text-slate-600">30M</p>
            <p className="text-xs text-slate-400">Followers</p>
        </div>
    </div>
);

export default PageFifteen;
