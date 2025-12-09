import type { Education, Certification, Language } from "../types";


export const education: Education = {
	degree: 'Ingeniería en Sistemas Computacionales',
	institution: 'Instituto Tecnológico Superior de Xalapa',
	location: 'Xalapa, México',
	period: '2020 - 2024',
};

export const certifications: Certification[] = [
	{
		name: 'Scrum Fundamentals Certified (SFC)',
		issuer: 'SCRUMstudy',
		image: '/referencias img/scrum.png',
		url: '/referencias img/scrum.png'
	},
	{
		name: 'Google Cloud Computing Foundations: Infrastructure, Networking, Data, ML & AI',
		issuer: 'Google Cloud',
	},
];

export const languages: Language[] = [
	{ language: 'Español', level: 'Nativo' },
	{ language: 'Inglés', level: 'Intermedio (B1)' },
];

