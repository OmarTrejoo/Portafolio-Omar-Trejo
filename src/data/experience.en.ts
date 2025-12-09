import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
    {
        title: 'Product Owner',
        company: 'Vector Casa de Bolsa',
        location: 'Monterrey, Mexico',
        workMode: 'Remote',
        period: 'Jan 2025 - Jul 2025',
        description: 'Implemented SPID for currency transactions, ensuring regulatory compliance. Optimized lead-to-client workflow and managed user story backlog in an agile team.',
        technologies: ['Jira', 'GitHub']
    },
    {
        title: 'Web Developer - Data Analyst',
        company: 'Petravia',
        location: 'Xalapa, Mexico',
        workMode: 'Hybrid',
        period: 'Dec 2023 - Dec 2024',
        description: 'Developed a web system to manage maintenance logs, replacing manual records with a digital flow. Integrated backend with PHP and generated PDF reports that streamlined audits.',
        technologies: ['PHP', 'JavaScript', 'SQL', 'HTML', 'CSS', 'AWS'],
        gallery: [
            '/referencias img/petravia/petravia1.png',
            '/referencias img/petravia/petravia2.png',
            '/referencias img/petravia/petravia3.png',
            '/referencias img/petravia/petravia4.png',
            '/referencias img/petravia/petravia5.png',
            '/referencias img/petravia/petravia6.png',
            '/referencias img/petravia/petravia7.png'
        ]
    },
    {
        title: 'Mobile Developer Assist Vision',
        company: 'Instituto Tecnológico Superior de Xalapa',
        location: 'Xalapa, Mexico',
        period: 'Apr 2024 - Nov 2024',
        description: 'Developed an assistive app for visual impairment using AI: recognition of bills, faces, emotional gestures, and real-time text reading. Award: 1st place local, 2nd place regional, and 4th place national in INNOVATECM 2024.',
        technologies: ['Flutter', 'Dart', 'YOLO', 'TensorFlow Lite', 'Python'],
        gallery: [
            '/referencias img/assist/1-assist.jpeg',
            '/referencias img/assist/2-assist.jpeg',
            '/referencias img/assist/3-assist.jpeg',
            '/referencias img/assist/4-assist.jpeg',
            '/referencias img/assist/5-assist.jpeg',
            '/referencias img/assist/6-assist.jpeg'
        ]
    },
    {
        title: 'Web Developer',
        company: 'Escuela Primaria Makarenko',
        location: 'Cardel, Mexico',
        workMode: 'Hybrid',
        period: 'Apr 2024 - Jun 2024',
        description: 'Developed a web system to manage school breakfasts, digitizing the administrative process with a user-friendly interface and stable functionality.',
        technologies: ['PHP', 'JavaScript', 'SQL', 'HTML', 'CSS'],
        gallery: [
            '/referencias img/makarenko/1-makarenko.jpeg',
            '/referencias img/makarenko/2-makarenko.jpeg',
            '/referencias img/makarenko/3-makarenko.jpeg',
            '/referencias img/makarenko/4-makarenko.jpeg',
            '/referencias img/makarenko/5-makarenko.jpeg',
            '/referencias img/makarenko/6-makarenko.jpeg',
            '/referencias img/makarenko/7-makarenko.jpeg',
            '/referencias img/makarenko/8-makarenko.jpeg'
        ]
    },
    {
        title: 'Web Developer',
        company: 'DIF Municipal',
        location: 'Xalapa, Mexico',
        period: 'Feb 2024 - Jun 2024',
        description: 'Collaborated on the development of a web system to manage support for vulnerable communities, optimizing social resource administration.',
        technologies: ['React', 'JavaScript', 'Node.js', 'Jira', 'Git'],
        gallery: [
            '/referencias img/imss/1-imss.jpeg',
            '/referencias img/imss/2-imss.jpeg',
            '/referencias img/imss/3-imss.jpeg',
            '/referencias img/imss/4-imss.jpeg',
            '/referencias img/imss/5-imss.jpeg',
            '/referencias img/imss/6-imss.jpeg'
        ]
    }
];
