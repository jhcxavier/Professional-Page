const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: 0,
			userAPI: [
				{
					name: "Hernan Garcia",
					title: "Software Engineer",
					skills: ["JavaScript", "React", "HTML", "CSS", "Bootstrap", "Python", "PHP", "Flask"],
					goal: "Helping companies reach their goals by serving them great mate.",
					imageName: "hernan.png",
					linkedin: "https://www.linkedin.com/in/hernan-garcia-448400186/",
					github: "https://github.com/hernanjkd"
				},
				{
					name: "Vanessa Fernander",
					title: "Web Developer",
					skills: ["JavaScript", "React", "HTML", "CSS", "Bootstrap"],
					goal: "The elite savings excuses into the prize cook What if the broken emotion ate the advice?",
					imageName: "hernan.png"
				},
				{
					name: "João Henrique",
					title: "Web Developer",
					skills: ["JavaScript", "React", "HTML", "CSS", "Bootstrap", "Python", "PHP", "Flask"],
					goal: "The elite savings excuses into the prize cook What if the broken emotion ate the advice?",
					imageName: "hernan.png"
				}
			]
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			deleteUser: () => {}
		}
	};
};

export default getState;
