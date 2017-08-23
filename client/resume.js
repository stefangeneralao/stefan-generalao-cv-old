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
          parentSection: "Skickligheter"
        },

        "Webbteknologier": {
          id: "Webbteknologier",
          parentSection: "Skickligheter"
        }
      },
      allIds: ["Maskininlärning", "Webbteknologier"]
    },

    selectedSection: {
      id: "Webbteknologier"
    },

		cards: {
			byId: {
        "Intro-Sammanfattning": {
          id: "Intro-Sammanfattning",
          section: "Intro",
          content: [
            {title: "Stefan Generalao"},
            {subtitle: "Om mig"},
            {text: "BAbabababababab"}
          ]
        },

				"Skickligheter-React": {
					id: "Skickligheter-React",
					section: "Webbteknologier",
					content: [
						{title: "React"},
						{subtitle: "Kunnighet"},
						{progressbar: 10},
						{subtitle: "Detaljer"},
		        {text: "I Googles open source-projekt TensorFlow har jag, tillsammans med Python, gjort neuronnätverkets motsvarighet till Hello World."}
					]
				},

				"Skickligheter-JavaScript": {
					id: "Skickligheter-JavaScript",
					section: "Webbteknologier",
					content: [
		        {title: "JavaScript"},
		        {subtitle: "Kunnighet"},
		        {progressbar: 70},
		        {subtitle: "Detaljer"},
		        {text: "JavaScript växte snabbt till att bli mitt favoritspråk."}
					]
				},

				"Skickligheter-TensorFlow": {
					id: "Skickligheter-TensorFlow",
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
			allIds: ["Intro-Sammanfattning", "Skickligheter-React", "Skickligheter-JavaScript", "Skickligheter-TensorFlow"]
		}
	}
}

export default resume
