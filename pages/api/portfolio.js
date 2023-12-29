const portfolio = [
    {
        id: 0,
        projectName: "Hydrte",
        url: "https://hydrte.netlify.app/",
        image: "projects/hydrte.png",
        projectDetail: "Commercial website which allow users to request their orders by filling the form.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "CSS"
            },
            {
                tech: "EmailJS"
            },
        ]
    },
    {
        id: 1,
        projectName: "Odds",
        url: "https://b2c.otawix.com/",
        image: "projects/odds.mkv",
        projectDetail: "Script allows user to input starting and ending data and script would use that parameters to scrape odds data through oddsshark.com website",
        technologiesUsed: [
            {
                tech: "Python"
            },
            {
                tech: "Selenium"
            },
        ]
    },
    {
        id: 2,
        projectName: "Life Coach Promo Video",
        url: "/",
        image: "projects/LifeCoach.mkv",
        projectDetail: "Life Coach video edited using DaVinchi Resolve",
        technologiesUsed: [
            {
                tech: "DaVinci Resolve"
            },
        ]
    },
    {
        id: 2,
        projectName: "Mozzart",
        url: "https://culyte.com",
        image: "projects/mozz.mkv",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "Python"
            },
            {
                tech: "Selenium"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
