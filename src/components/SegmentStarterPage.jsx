import {
    TopRightDotsSVG,
    BottomLeftDotsSVG,
    InfluenzerLighteningSVG,
} from "./SVGs";

const SegmentStarterPage = ({
    title = "",
    description = "",
    index = 1,
    list = [],
}) => {
    return (
        <section className="relative mx-auto flex aspect-[841/594] h-screen w-auto flex-col overflow-hidden border">
            <InfluenzerLighteningSVG className="absolute left-20 top-0" />
            <TopRightDotsSVG className="absolute right-0 top-0 h-[160px] w-auto" />
            <BottomLeftDotsSVG className="absolute -left-0 bottom-0 h-[160px] w-auto" />

            <div className="mx-auto flex w-3/5 flex-1 flex-col items-center justify-center">
                <div className="flex items-center justify-center">
                    <span className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-slate-50 text-4xl font-semibold text-slate-600">
                        {index}
                    </span>
                </div>
                <h1 className="mt-4 text-5xl font-medium text-slate-900">
                    {title}
                </h1>
                <p className="mt-4 text-center text-xl text-slate-400">
                    {description}
                </p>
                <hr className="mt-7 w-full border-slate-200" />
                <ul className="mt-7 grid w-full list-disc grid-cols-2 gap-[1rem_2rem] rounded-xl bg-slate-50 p-8 pl-14 text-xl text-slate-600">
                    {list.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SegmentStarterPage;
