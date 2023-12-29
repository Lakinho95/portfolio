const expertise = [
    {
        id: 0,
        title: 'Frontend Development',
        desc: 'I am a skilled Frontend  developer with extensive experience in building web applications using React.js and NextJS.  With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'Software Automation Engineer',
        desc: "As a developer, I have been responsible for creating, executing, and maintaining automated tests for a variety of applications. I'm familiar with different automation tools such as Selenium WebDriver, TestComplete, and similar tools. I have also written automated tests in  JavaScript and Python.",
    },
    {
        id: 2,
        title: 'Blockchain Developer',
        desc: 'With a background in software development, combined with my passion for blockchain technology, I am confident that my skills and interests could align well with the requirements for the Blockchain Developer role.',
    },
    {
        id: 3,
        title: 'Video Editor',
        desc: 'Recently have started learning video editing. Started with DaVinchi Resolve 18 and determined to acquire necessary skills to became successful video editor. ',
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
