const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			products: [],
			user: [
				{
					name: "Hernan Garcia",
					title: "Software Engineer",
					skills: ["JavaScript", "React", "HTML", "CSS"],
					goal: "The elite savings excuses into the prize cook What if the broken emotion ate the advice?"
				},
				{
					name: "Vanessa",
					title: "Web Developer",
					skills: "JavaScript - React - HTML - CSS",
					goal: "The elite savings excuses into the prize cook What if the broken emotion ate the advice?"
				},
				{
					name: "João Henrique",
					title: "Web Developer",
					skills: "JavaScript - React - HTML - CSS",
					goal: "The elite savings excuses into the prize cook What if the broken emotion ate the advice?"
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
