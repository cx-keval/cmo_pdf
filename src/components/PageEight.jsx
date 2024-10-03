import moment from "moment";
import SectionHeader from "./SectionHeader";
import { GrowthUpSVG } from "./SVGs";
import Chart from "react-apexcharts";
import { beautify } from "../utils";

const statHistory = [
    {
        month: "2024-01",
        followers: 3170812,
        avgLikes: 0,
        following: 3092,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-02",
        followers: 3263467,
        avgLikes: 0,
        following: 3129,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-03",
        followers: 3416708,
        avgLikes: 317474,
        following: 3161,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-04",
        followers: 3540290,
        avgLikes: 316975,
        following: 3214,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-05",
        followers: 3724150,
        avgLikes: 308724,
        following: 3259,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-06",
        followers: 3937048,
        avgLikes: 269648,
        following: 3033,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-07",
        followers: 4029898,
        avgLikes: 226148,
        following: 3064,
        avgComments: 0,
        avgViews: 0,
    },
];

const recentPosts = [
    {
        id: "3406778212249327038_501113371",
        text: "9 practices that have helped me increase my sense of detachment :\n\n1. Read an immense number of spiritual books. The more wisdom you absorb from the minds of sages, the less society's shortcomings will bother you.\n- Autobiography of a Yogi\n- Doorways To Light (Krishnananda)\n- Ancient Science Of Mantras (Om Swami)\n- Any book by Rajarshi Nandy\n\n2. Worked really hard at my material career from early on. The quicker your material needs are taken care of, the sooner your consciousness travels to the realms of what's beyond human limitation.\n\n3. Meditating daily. To begin, use @levelsupermind.\n\n4. Conversations with (much) older people. Eventually you realise that only regrets & relationships matter. And beyond the realms of regret & relationships lies the realm of divinity. In the ultimate end, only your equation with divinity matters.\n\n5. Travelling within India. Yes it's chaotic. Yes, it can be slightly unhygienic. But if you're willing to go beyond these obstacles, you will find consciousness elevating geographies in places like Banaras, Rishikesh, Vrindavan & many more.\n\n6. Not celebrating victories for too long.\n\n7. Constantly visualising a life without :\n- My favourite foods.\n- My favourite activities.\n- My loved ones.\n- My physical capabilities.\n- Money, success & adulation.\n\n8. Living a life without any intoxication. Giving up alcohol in 2018 was a game changer for me. Giving up meat around the same time was an equally big game changer.\n\n9. Using sadness to write or create. Using happiness to convey joy to others. Perceiving both simply as tools rather than as states of the mind. Because even thoughts should NOT be taken seriously. They are not in your control. \n\nThe only thing in your control is your perception of your thoughts & life.\n\n---",
        url: "https://www.instagram.com/p/C9HTrvxqVW-/",
        created: "2024-07-07T08:08:14.000+00:00",
        type: "video",
        likes: 249140,
        comments: 1278,
        plays: 3406217,
        mentions: ["levelsupermind"],
    },
    {
        id: "3406247407301339548_501113371",
        text: "Done with boring meals and boring reels.\n\nHere’s an epic meal reco and an epic reel reco.\n\nMeal reco : God’s favourite child - Biryani.\n\nReel reco : This reel by another one of God’s favourite children. Yours truly.\n\nBetter watch this reel till the end and then purchase a packet of Daawat rice to shower upon your loved one.\n\nAnd by chance... if you’re not into food play... just cook them a big bowl of biryani with only India’s finest rice brand. D-D-D-D-DAAWAT.\n\nHappy Daawat World Biryani Day \n\n#Daawatthefinest #DaawatBiryani #DaawatWorldBiryaniDay #7July2024\n\n#ad",
        url: "https://www.instagram.com/p/C9Fa_hJSqmc/",
        created: "2024-07-06T14:33:49.000+00:00",
        type: "video",
        likes: 23833,
        comments: 238,
        plays: 1048653,
        mentions: ["daawatofficial"],
        hashtags: [
            "Daawatthefinest",
            "DaawatBiryani",
            "DaawatWorldBiryaniDay",
            "7July2024",
            "ad",
        ],
    },
    {
        id: "3404096476008840742_501113371",
        text: '9 things to know about "Siddhis" : \n\n1. Some version of "Siddhis" or \'divine abilities\' is spoken about in every religion in the world. \n\n2. In the modern day, very few humans adopt a disciplined spiritual path. Hence a very small percentage can even experience powerful "Siddhis" being blessed upon them. \n\n3. In Hinduism, Siddhis are considered roadblocks or obstacles even though they might seem positive on the surface. A "superpower" may be exciting in the beginning but its purpose is to test your determination to get to the ultimate goal - Union with the divine. \n\n4. The more you meditate/pray, the closer you get to achieving the goal you were sent here for. When one is bestowed with a Siddhi, their ego may get inflated. Siddhis are the divine\'s method of testing your humility and intentions.\n\n5. Siddhis and many aspects of spirituality are beyond the limits of where science has currently reached. Absence of evidence should never mean an evidence of absence. Skeptics will never be convinced about further human evolution. Perhaps they\'re not yet meant to climb the ladder of spiritual evolution. Step 1 : Be open. \n\n6. The heightened "calmness" or "focus" that\'s scientifically proved by studies on meditation is only the first, tiny version of what "siddhis" truly are. \n\n7. They should not be your motivation. But they will definitely help boost your material prospects. \n\n8. If you pray/meditate for the sake of material growth, you will likely not gain siddhis because you\'ll likely not go far up the ladder.\n\n9. Read "Autobiography of a Yogi".\n\nBegin your meditation journey today on @levelsupermind.',
        url: "https://www.instagram.com/p/C89x7WRqn4m/",
        created: "2024-07-03T15:32:48.000+00:00",
        type: "video",
        likes: 63313,
        comments: 377,
        plays: 1172721,
        mentions: ["levelsupermind"],
    },
    {
        id: "3402728842298371364_501113371",
        text: "One of the most emotional episodes of TRS. \n\nOur World Cup memes & feels special is now out. Must watch for fans of cricket and of emotions 😉\n\nRecorded this with @jats72. He's worked as a selector for team India and I think the internet is only JUST getting to know him better. \n\nLoved recording this episode. \n\nWe both tapped into our inner child for this one. Thank you for the Indian cricket team.\n\nAnd above all, thank you to our 3 legends. @virat.kohli @rohitsharma45 & our royal warrior @royalnavghan. Thank you for your service to India, bhaiyyas. You are in all our hearts ♥️\n\nEdit : @akshattiiwari",
        url: "https://www.instagram.com/p/C8469qIK60k/",
        created: "2024-07-01T18:02:38.000+00:00",
        type: "video",
        likes: 473184,
        comments: 968,
        plays: 4568009,
        mentions: [
            "jats72",
            "virat.kohli",
            "rohitsharma45",
            "royalnavghan",
            "akshattiiwari",
        ],
    },
    {
        id: "3401278630392382675_501113371",
        text: "WORLD CHAMPIONS!!! OUR COUNTRY!!! OUR BOYS!!! 🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳🇮🇳♥️♥️♥️♥️♥️♥️♥️♥️",
        url: "https://www.instagram.com/p/C8zxOTCqkTT/",
        created: "2024-06-29T18:00:30.000+00:00",
        type: "photo",
        likes: 620601,
        comments: 925,
    },
    {
        id: "3400506155819759411_501113371",
        text: "It is going to be OUR DAY again, ladies & gents. You can feel it in the air. Jai Hind 🇮🇳♥️🏏\n\nEdit : @akshattiiwari \n\n#indiancricket #cricket #theranveershow",
        url: "https://www.instagram.com/p/C8xBlUCKncz/",
        created: "2024-06-28T16:29:07.000+00:00",
        type: "video",
        likes: 138918,
        comments: 164,
        plays: 1941204,
        mentions: [
            "akshattiiwari",
            "yuvisofficial",
            "sreesanthnair36",
            "robinaiyudauthappa",
        ],
        hashtags: ["indiancricket", "cricket", "theranveershow"],
    },
    {
        id: "3400487679767885154_501113371",
        text: "Lemon Tart Allahbadia 🍋\n\nGuess I'm in my soft boy era now. \nDafuq is up with this era nonsense?\n\nI'm stuck up in Gen-Z slang whilst millennials my age are experiencing parenthood & divorces in equal measure.\n\nGuess delaying marriage has worked out for me after all.\n\nEvery lemon tart needs to be left in the oven for just the right amount of time errbody.\n\nSorry ladies this lemon tart is taken.\n\nTaken by the Illuminati. Yup that's right. Starting a conspiracy theory right here right now babe.\n\nWhy dafuq can't people believe that the Illuminati would recruit me in the first place? Do I not give out that \"Could be dark & twisted\" aura? \n\nI sense not. The only aura I give out is the aura of freshly baked lemon tarts. Perfect biscuit. Perfect lemon cream. Perfect swing of the bat we are so winning it tomorrow, Jai Hind Vande Mataram 🇮🇳🍋♥️\n\nLet's go King Kohli.\n\nLet's go Hitman.\n\nLet's go Bapu.\n\nBut above all, shoutout to mid 2000s Saif Ali Khan who gave every Indian millennial guy a good dose of VIBE INSPIRATION.\n\nVibspiration.\n\nPerspiration.\n\nMeditation. \n\nDownload @levelsupermind to begin your meditation journey.\n\nAnd download episodes of @theranveershowpodcast on to your phone so that these lemon tart vibes accompany you during your late nights. \n\nWhere you still need content but you also need to rest your beautiful eyes, my queen.\n\nMay my voice and content deep dive into your subconscious mind. And destroy the remnants of the suppressed traumas that your poor little hands had to carry in your childhood.\n\nI'm here now, love 🍋🔆🌻💛\n\nWill destroy all that bad energy for ya.\n\nAlways and forever.\n\nLike this post now. Come on. You know you want to. \n\n1 Like = 1 Lemon Tart For Breakfast In Bed Tomorrow. \n\nCourtesy your favourite soft boy podcaster. \n\nKiss you goodbye now. \n\nBye.\n\nIndia is winning the World Cup tomorrow ♥️💪🏼🇮🇳\n\n---\n\nPhoto : @___khatarnak___ \nStyling : That special someone.",
        url: "https://www.instagram.com/p/C8w9Yc3qDVi/",
        created: "2024-06-28T15:49:02.000+00:00",
        type: "photo",
        likes: 182189,
        comments: 674,
        mentions: [
            "levelsupermind",
            "theranveershowpodcast",
            "___khatarnak___",
        ],
    },
    {
        id: "3399770557718901760_501113371",
        text: "Vibes like this only on @theranveershowpodcast 😂🫶🏼🌱\n\nEdit : @rashmitaaaaaaa",
        url: "https://www.instagram.com/p/C8uaU86qrQA/",
        created: "2024-06-27T16:05:39.000+00:00",
        type: "video",
        likes: 51376,
        comments: 148,
        plays: 1295540,
        mentions: [
            "theranveershowpodcast",
            "rashmitaaaaaaa",
            "nawazuddin._siddiqui",
        ],
    },
    {
        id: "3399011288476053508_501113371",
        text: "11 things that (dedicated) men want to tell their partner, but often can't express :\n\n(boyfriends should share this with their girlfriends, saying 'caption is for you babe')\n\n1. Want to give you everything material, then everything emotional and then even more.\n\n2. You are my spiritual growth.\n\n3. If I knew that the crippling pain of my past led up to you, I'd drink it all up 10 times over just to land up at you once.\n\n4. Thank you for everything you do for me. Want you to feel the deep gratitude I have for you in every breath I take in your name.\n\n5. How do I serve you better? Thinking of building a flying carpet to take you around the planet, underneath the stars. Or maybe I'll just work hard enough to get us a whole star system & multiple private planets...\n\n6. I just wanna be better, for your future.\n\n7. I'll take care of your family even more than I'll take care of you.\n\n8. What you believe to be your flaws are ornaments in my eyes. I'm not with you for your looks, status or presentation skills. You just being you is more than I ever prayed for.\n\n9. Thank you for giving me your light to escape into.\n\n10. Life is tough but it used to be tough AND colourless until you arrived. Your presence is the colour in my monochrome world.\n\n11. You are what my 11:11s led up to ♥️\n\n#love #romance",
        url: "https://www.instagram.com/p/C8rtsIVKHAE/",
        created: "2024-06-26T15:09:10.000+00:00",
        type: "video",
        likes: 433357,
        comments: 2259,
        plays: 6287212,
        hashtags: ["love", "romance"],
    },
    {
        id: "3398973783203008781_501113371",
        text: "Tore my ACL on Sunday.\n\nWas feeling heaps of self pity & sadness.\n\nNo sports for 3 months and lots of therapy to recover...\n\nAnd just when I was at my lowest, my life as a podcaster woke me up again.\n\nToday we shot with Major DP Singh.\n\nA Kargil War veteran who lost his leg while protecting one of India's posts in South Kashmir.\n\nHe's lived without 1 leg (and an old ACL injury on his other leg) for 25 years. \n\nHe's become a marathon runner.\n\nHe's achieved multiple world records.\n\nTravels across the country motivating people with stories of hope. \n\nAbsolutely infectious, positive warrior energy.\n\nReally want my knee to recover soon. But days like this don't come your way randomly.\n\nI truly believe that they're sent to you by the universe. To remind you that life is about much more than just your physical (& mental) body's limitations.\n\nToday's strangely poetic meeting was a reminder for me.\n\nI remembered a Bruce Lee quote that I'd go back to a lot while starting off my career : \n\n\"The mind that perceives the limitation, is the limitation.\"\n\n---\n\nThis special episode with Major DP will be out on Kargil Vijay Diwas. 2024 marks the 25th year anniversary of our victory in Kargil. \n\nMay we always remember the sacrifices of our warriors from back in 1999. \n\nHope everyone ends up watching this military special episode.\n\nPersonally, I feel extremely uplifted after speaking with sir. Special day this!\n\nJai Hind 🇮🇳♥️",
        url: "https://www.instagram.com/p/C8rlKW0qoB9/",
        created: "2024-06-26T13:41:11.000+00:00",
        type: "photo",
        likes: 191109,
        comments: 303,
        mentions: ["majordpsingh"],
    },
];

const PageEight = () => {
    const series = [
        {
            name: "Followers",
            data: statHistory.map(({ month, followers }) => ({
                x: new Date(month),
                y: followers,
            })),
        },
    ];

    const options = {
        series,
        chart: {
            type: "area",
            height: 225,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 1,
        },
        xaxis: {
            labels: {
                formatter: (month) => moment(month).format("MMM 'YY"),
                style: {
                    fontSize: "10px",
                    fontFamily: "inherit",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: (value) => beautify(value, 1),
                style: {
                    fontSize: "10px",
                    fontFamily: "inherit",
                },
            },
        },
        tooltip: {
            x: {
                format: "dd MMM yyyy",
            },
            style: {
                fontFamily: "inherit",
            },
        },
        colors: ["#3b82f6"],
        grid: {
            borderColor: "#f1f1f1",
            padding: {
                top: -10,
            },
        },
    };

    // ---------------------
    const postEngagementSeries = [
        {
            name: "Likes",
            group: "likes",
            data: recentPosts
                ?.filter((item) => item?.likes && item?.created)
                .map(({ likes }) => likes),
        },
        {
            name: "Comments",
            group: "comments",
            data: recentPosts
                ?.filter((item) => item?.likes && item?.created)
                ?.map(({ comments }) => comments),
        },
    ];

    const postEngagementOptions = {
        chart: {
            type: "bar",
            height: 270,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: true,
            },
        },
        colors: ["#3b82f6", "#60a5fa", "#93c5fd"],
        xaxis: {
            categories: recentPosts?.map((e) =>
                moment(e.created).format("DD-MMM-YY")
            ),
            labels: {
                style: {
                    fontSize: "11px",
                    colors: "#475569",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: (val) => beautify(val),
                style: {
                    fontSize: "10px",
                    colors: "#475569",
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => beautify(val),
            offsetY: -18,
            style: {
                enabled: true,
                fontSize: "10px",
                fontFamily: "inherit",
                fontWeight: 500,
                colors: ["#475569"],
            },
            background: {
                enabled: true,
                foreColor: "#000",
                padding: 6,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#000",
                opacity: 0.15,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: "55%",
                endingShape: "rounded",
                dataLabels: {
                    position: "top",
                },
            },
        },
        legend: {
            position: "top",
            horizontalAlign: "left",
            markers: {
                radius: 9999,
            },
        },
        fill: {
            opacity: 1,
        },
        grid: {
            borderColor: "#f1f1f1",
        },
    };

    return (
        <div className="flex flex-1 flex-col p-6">
            <SectionHeader
                title="Growth Rate"
                description="This section analyzes influencer's followers, like and post engagement over a specified period."
            />
            <div className="mt-2 rounded-md border p-4">
                <p className="font-medium text-slate-600">Followers Growth</p>

                <Chart
                    type="area"
                    options={options}
                    series={series}
                    height={225}
                />

                <div className="flex items-center justify-between rounded-md border px-4 py-2">
                    <p className="text-sm font-medium text-slate-600">
                        Growth by followers
                    </p>

                    <div className="flex justify-end gap-2 text-sm">
                        <span className="flex items-center text-sm font-semibold text-green-500">
                            <GrowthUpSVG />
                            2.3%
                        </span>
                        <span className="text-sm font-semibold">71.86%</span>
                    </div>
                </div>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="rounded-md border p-4">
                    <p className="font-medium text-slate-600">Likes Growth</p>

                    <Chart
                        type="area"
                        options={options}
                        series={series}
                        height={225}
                    />

                    <div className="flex items-center justify-between rounded-md border px-4 py-2">
                        <p className="text-sm font-medium text-slate-600">
                            Growth by likes
                        </p>

                        <div className="flex justify-end gap-2 text-sm">
                            <span className="flex items-center text-sm font-semibold text-green-500">
                                <GrowthUpSVG />
                                2.3%
                            </span>
                            <span className="text-sm font-semibold">
                                71.86%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="rounded-md border p-4">
                    <p className="font-medium text-slate-600">
                        Post Engagement
                    </p>

                    <Chart
                        type="bar"
                        options={postEngagementOptions}
                        series={postEngagementSeries}
                        height={270}
                    />
                </div>
            </div>
        </div>
    );
};

export default PageEight;
