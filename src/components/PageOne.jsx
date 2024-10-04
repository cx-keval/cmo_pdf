import {
    SideDotsSVG,
    BottomLeftDotsSVG,
    InfluenzerLighteningSVG,
} from "./SVGs";

const PageOne = () => {
    return (
        <section className="relative mx-auto flex aspect-[841/594] h-screen w-auto flex-col overflow-hidden border">
            <InfluenzerLighteningSVG className="absolute left-20 top-0" />
            <BottomLeftDotsSVG className="absolute -left-0 bottom-0 h-[160px] w-auto" />
            <SideDotsSVG className="absolute -top-16 right-0 h-[160px]" />
            <div className="absolute bottom-0 left-0 right-0 aspect-square translate-y-[88%] skew-x-3 rounded-full bg-slate-50"></div>

            <div className="w-7/5 z-10 mx-auto flex flex-1 -translate-y-10 flex-col items-center justify-center space-y-4">
                <div className="flex items-center gap-8">
                    <div className="flex-[1.25]">
                        <p className="mb-4 text-7xl font-bold">
                            Customized Diagnosis
                        </p>

                        <hr />
                        <p className="my-4 font-medium text-slate-400">
                            Created On :{" "}
                            <span className="text-slate-600">25/05/2024</span>
                        </p>
                        <hr />
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center gap-4">
                        <img
                            src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRpjYDM%2FopG6LEn5yybjPwMC7q%2BDaxyT%2F%2FL0IAHSjFLGXYyTdtc97YFhND8dFFRvhmgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                            alt="profile"
                            className="aspect-square h-[150px] w-auto overflow-hidden rounded-lg"
                        />
                        <p className="w-3/4 text-center text-xl font-medium text-slate-600">
                            CultureX Entertainment Private Limited
                        </p>
                    </div>
                </div>

                <div className="mt-4 flex w-full items-center rounded-xl bg-slate-50 p-8">
                    <p className="flex-[1.25] shrink-0 text-xl font-medium">
                        Competitors
                    </p>

                    <div className="flex flex-1 items-center gap-4 overflow-hidden text-slate-600">
                        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl bg-white p-4">
                            <img
                                src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDZV%2BMI1sY1L8JvHJB4dXZLAFe7JaRNchWmK9Xp1W2zb%2F98rjxGcsp93Sv%2FYQdDZTIp8Va3tDVmaiUbg5OHS8Kf2Wwq5%2BhsabX0Nc9aXCBbcsw%3D%3D"
                                alt="profile"
                                className="w-[55px] shrink-0 overflow-hidden rounded-full"
                            />
                            <p className="line-clamp-2 text-center">Nike</p>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl bg-white p-4">
                            <img
                                src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDYvy61sBcp4g%2BGwAUOgcFcWWIL%2FdABgUC9Md6MKlHvB4RWOVcDyDsy1dpt2%2F3JUiOz7cDvaANaSus%2BTa%2B5MpxtqgNlJUwVYqIiahjW32e%2BqWA%3D%3D"
                                alt="profile"
                                className="w-[55px] shrink-0 overflow-hidden rounded-full"
                            />
                            <p className="line-clamp-2 text-center">Axe</p>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl bg-white p-4">
                            <img
                                src="https://imgigp.modash.io/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY6%2BlN4nI8g5ywMDf0jnSXRu5BTUdEqqJAOu%2B3ptfaWy%2BUGnQLWF36aVVwLjITxgmah04bCKYD%2FspeqqSQmguMRWwq5%2BhsabX0Nc9aXCBbcsw%3D%3D"
                                alt="profile"
                                className="w-[55px] shrink-0 overflow-hidden rounded-full"
                            />
                            <p className="line-clamp-2 text-center">Spotify</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <p className="text-center text-lg text-slate-400">Created by</p>
                <img
                    src="https://res.cloudinary.com/drn8ksu9x/image/upload/v1705059002/influenzer/logo.png"
                    className="h-[50px] object-contain"
                    alt="logo"
                />
            </div>
        </section>
    );
};

export default PageOne;
