const resume = () => {
	return {
		sections: {
			byId: {
				"Intro": {
					id: "Intro"
				},

				"Skickligheter": {
					id: "Skickligheter",
					subSections: ["Maskininlärning", "Webbteknologier"]
				}
			},
			allIds: ["Intro", "Skickligheter"]
		},

		subSections: {
			byId: {
				"Maskininlärning": {
					id: "Maskininlärning",
					section: "Skickligheter"
				},

				"Webbteknologier": {
					id: "Webbteknologier",
					section: "Skickligheter"
				}
			},
			allIds: ["Maskininlärning", "Webbteknologier"]
		}

		cards: {
			byId: {
				"React": {
					id: "React",
					section: "Webbteknologier",
					content: [
						{title: "React"},
						{subtitle: "Kunnighet"},
						{progressbar: 10},
						{subtitle: "Detaljer"},
		        {text: "I Googles open source-projekt TensorFlow har jag, tillsammans med Python, gjort neuronnätverkets motsvarighet till Hello World."}
					]
				},

				"JavaScript": {
					id: "JavaScript",
					section: "Webbteknologier",
					content: [
		        {title: "JavaScript"},
		        {subtitle: "Kunnighet"},
		        {progressbar: 70},
		        {subtitle: "Detaljer"},
		        {text: "JavaScript växte snabbt till att bli mitt favoritspråk."}
					]
				},

				"TensorFlow": {
					id: "TensorFlow",
					section: "Maskininlärning",
					content: [
		        {title: "TensorFlow"},
		        {subtitle: "Kunnighet"},
		        {progressbar: 10},
		        {subtitle: "Detaljer"},
		        {text: "I Googles open source-projekt TensorFlow har jag, tillsammans med Python, gjort neuronnätverkets motsvarighet till Hello World."}
					]
				}
			},
			allIds: ["React", "JavaScript", "TensorFlow"]
		}
	}
}

export default resume
