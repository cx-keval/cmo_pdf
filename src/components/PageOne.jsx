import {
    TopRightDotsSVG,
    BottomLeftDotsSVG,
    InfluenzerLighteningSVG,
} from "./SVGs";

const PageOne = () => {
    return (
        <section className="relative mx-auto flex aspect-[841/594] h-screen w-auto flex-col overflow-hidden border">
            <InfluenzerLighteningSVG className="absolute left-20 top-0" />
            <TopRightDotsSVG className="absolute right-0 top-0 h-[160px] w-auto" />
            <BottomLeftDotsSVG className="absolute -left-0 bottom-0 h-[160px] w-auto" />

            <div className="mx-auto flex w-3/5 flex-1 flex-col items-center justify-center">
                <h1 className="text-5xl font-medium text-slate-900">
                    Profile Diagnosis
                </h1>
                <p className="mt-4 text-center text-xl text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exer
                </p>
                <hr className="mt-7 w-full border-slate-200" />
                <ul className="mt-7 grid w-full list-disc grid-cols-2 gap-[1rem_2rem] rounded-xl bg-slate-50 p-8 pl-14 text-xl text-slate-600">
                    <li>Profile</li>
                    <li>Profile Metrics</li>
                    <li>Profile vs Competitor</li>
                    <li>Social Overview</li>
                </ul>
            </div>
        </section>
    );
};

export default PageOne;
