const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: {
				name: "Hernan Garcia",
				title: "Software Engineer",
				skills: ["JavaScript", "React", "HTML", "CSS", "Bootstrap", "Python", "PHP", "Flask"],
				goal: "Helping companies reach their goals by serving them great mate.",
				about:
					"I really enjoy coding and helping out others, my favorite subject to read is about aliens and other civilizations.<br>This is just some writing so we can see how it looks when there is a good amount of context. Maybe I can create some more content to fill up.",
				display: "objective",
				imageURL: "http://lorempixel.com/300/400/nature/2",
				linkedinURL: "https://www.linkedin.com/in/hernan-garcia-448400186/",
				githubURL: "https://github.com/hernanjkd"
			},

			actions: {
				changeDisplay: () => {
					//get the store
					const store = getStore();
					const updatedUser = store.user;

					updatedUser.display = store.user.display === "objective" ? "about" : "objective";

					setStore({ user: updatedUser });
				},
				deleteUser: () => {}
			}
		}
	};
};

export default getState;
