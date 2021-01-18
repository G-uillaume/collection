const body = document.querySelector('body');

const collectionjson = []
fetch('collection.json')
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < 10; i++) {
            collectionjson.push(json[i])
            if (i === 9) {
                const pattern = 'all'
                filterSeries(pattern)
            }
        }
    })
    .catch(error => alert('There was an error ! ' + error))

const darkMode = document.querySelector('.darkMode');
darkMode.addEventListener('click', () => {
    let iLight = document.querySelector('.fa-toggle-off');
    darkMode.removeChild(iLight);
    let iNight = document.createElement('i');
    iNight.className = 'fas fa-toggle-on fa-2x'
    darkMode.className = 'darkMode has-background-black icon is-large has-text-grey';
    darkMode.appendChild(iNight);
    body.className = 'has-background-black';

    darkMode.addEventListener('click', () => {
        darkMode.removeChild(iNight);
        iLight = document.createElement('i');
        iLight.className = 'fas fa-toggle-off fa-2x';
        darkMode.className = 'darkMode has-background-light icon is-large has-text-grey';
        darkMode.appendChild(iLight)
        body.className = 'has-background-light';
    })
})

const filterSeries = (pattern) => {
    let results = [];

    const mainContainer = document.querySelector(".is-multiline");

    for (let serie of collectionjson) {
        if (serie.title.match(pattern) || (serie.author.match(pattern)) || (serie.description.match(pattern))) {
            mainContainer.innerHTML = '';
            results.push(serie);
        } else if (pattern === 'all') {
            results.push(serie)
        } else {
            for (let elem of serie.category) {
                if (elem.name.match(pattern)) {
                    mainContainer.innerHTML = '';
                    results.push(serie);
                }
            }
        }
    }


    for (let element of results) {
        // CONTAINER
        const newDiv = document.createElement('div');
        newDiv.className = 'column is-one-quarter';

        // SECTION CLASS "CARD"

        const section = document.createElement('section');
        section.className = 'card';

        // CARD-IMAGE

        const cardImg = document.createElement('div');
        cardImg.className = 'card-image';

        const figImg = document.createElement('figure');
        figImg.className = 'image is-4by3';

        const imgLarge = document.createElement('img');
        imgLarge.setAttribute('src', element.image);
        imgLarge.setAttribute('alt', 'Illustration picture');

        figImg.appendChild(imgLarge);
        cardImg.appendChild(figImg);

        // CARD-CONTENT


        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        // MEDIA

        const media = document.createElement('div');
        media.className = 'media';

        const mediaLeft = document.createElement('div');
        mediaLeft.className = 'media-left';

        const figAvatar = document.createElement('figure');
        figAvatar.className = 'mt-2 image is-48x48';

        const avatar = document.createElement('img');
        avatar.setAttribute('src', element.avatar);
        avatar.setAttribute('alt', 'Picture of the composer');

        const mediaContent = document.createElement('div');
        mediaContent.className = 'media-content';

        const title = document.createElement('p');
        title.className = 'title is-4';
        title.textContent = element.title;

        const subtitle = document.createElement('p');
        subtitle.className = 'subtitle is-6';
        subtitle.textContent = element.author;

        figAvatar.appendChild(avatar);
        mediaLeft.appendChild(figAvatar);
        mediaContent.appendChild(title);
        mediaContent.appendChild(subtitle);
        media.appendChild(mediaLeft);
        media.appendChild(mediaContent);
        cardContent.appendChild(media);

        // CONTENT

        const content = document.createElement('div');
        content.className = 'content';

        for (let tag of element.category) {

            const spanTag = document.createElement('span');
            spanTag.className = tag.class;
            spanTag.textContent = tag.name;
            content.appendChild(spanTag);
        }

        const description = document.createElement('p');
        description.className = 'mt-2';
        description.innerHTML = element.description;


        content.appendChild(description);
        cardContent.appendChild(content);

        // CARD-FOOTER

        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer py-3';

        for (let elem of element.links) {
            const link = document.createElement('a');
            link.href = elem.href;
            link.target = '_blank';

            const span = document.createElement('span');
            span.className = elem.spanClass;

            const ico = document.createElement('i');
            ico.className = elem.icon;

            span.appendChild(ico);
            link.appendChild(span);
            cardFooter.appendChild(link);
        }

        section.appendChild(cardImg);
        section.appendChild(cardContent);
        section.appendChild(cardFooter);

        newDiv.appendChild(section);

        mainContainer.appendChild(newDiv);
    }
}

document.querySelector('#filter_input')
    .addEventListener('keyup', input => {
        let inputValue = input.target.value;
        const pattern = new RegExp(inputValue, 'gim')
        filterSeries(pattern)
    });