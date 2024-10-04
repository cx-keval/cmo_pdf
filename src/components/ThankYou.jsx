import {
    SideDotsSVG,
    BottomLeftDotsSVG,
    InfluenzerLighteningSVG,
} from "./SVGs";

const ThankYou = () => {
    return (
        <section className="relative mx-auto flex aspect-[841/594] h-screen w-auto flex-col overflow-hidden border">
            <InfluenzerLighteningSVG className="absolute left-20 top-0" />
            <BottomLeftDotsSVG className="absolute -left-0 bottom-0 h-[160px] w-auto" />
            <SideDotsSVG className="absolute -right-4 top-1/2 h-[160px] w-auto -translate-y-1/2" />

            <div className="z-10 mx-auto flex w-1/2 flex-1 -translate-y-10 flex-col items-center justify-center space-y-4">
                <h1 className="text-[120px] font-bold text-slate-400">
                    Thank You
                </h1>

                <div className="flex w-full items-center justify-between rounded-xl bg-slate-50 p-6">
                    <div className="space-y-1">
                        <p>founderoffice@culturex.in</p>
                        <p>vinay@culturex.in</p>
                        <p>+91 9328371557</p>
                    </div>

                    <a
                        href="https://influenzer.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-black px-10 font-semibold text-white"
                    >
                        Let's Connect
                    </a>
                </div>
            </div>

            <img
                src="https://res.cloudinary.com/drn8ksu9x/image/upload/v1705059002/influenzer/logo.png"
                className="absolute bottom-10 left-1/2 h-[50px] -translate-x-1/2 object-contain"
                alt="logo"
            />
        </section>
    );
};

export default ThankYou;
