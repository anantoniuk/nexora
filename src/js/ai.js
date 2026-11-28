
const aiHeroButton = document.querySelector('.ai-hero__button');

aiHeroButton.addEventListener('click', (event) => {
    const target = document.querySelector('#categories');

    if (target) {
        event.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
});
