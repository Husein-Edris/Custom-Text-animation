jQuery(document).ready(function ($) {
	const sentences = ['Test 1', 'Test 2', 'Test 3'];
	let currentIndex = 0;
	let offset = 0;
	const sentenceElement = document.querySelector('.animated-text');

	if (sentenceElement) {
		let forwards = true;
		let skipCount = 0;
		const skipDelay = 15;
		const speed = 100;

		const updateSentence = () => {
			sentenceElement.textContent = sentences[currentIndex].substring(
				0,
				offset
			);
		};

		const handleAnimation = () => {
			if (forwards) {
				if (offset >= sentences[currentIndex].length) {
					if (++skipCount === skipDelay) {
						forwards = false;
						skipCount = 0;
					}
				}
			} else if (offset === 0) {
				forwards = true;
				currentIndex = (currentIndex + 1) % sentences.length;
			}

			if (skipCount === 0) {
				forwards ? offset++ : offset--;
			}

			updateSentence();
		};

		setInterval(handleAnimation, speed);
	}
});
