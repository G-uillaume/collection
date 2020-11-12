const mainContainer = document.querySelector(".is-multiline");
        for (let element of collection) {

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

            const tag1 = document.createElement('span');
            tag1.className = 'tag is-link';
            tag1.textContent = element.category[0];

            const tag2 = document.createElement('span');
            tag2.className = 'tag is-warning';
            tag2.textContent = element.category[1];

            const tag3 = document.createElement('span');
            tag3.className = 'tag is-danger';
            tag3.textContent = element.category[2];

            const description = document.createElement('p');
            description.className = 'mt-2';
            description.innerHTML = element.description;

            content.appendChild(tag1);
            content.appendChild(tag2);
            content.appendChild(tag3);
            content.appendChild(description);
            cardContent.appendChild(content);

            // CARD-FOOTER

            const cardFooter = document.createElement('div');
            cardFooter.className = 'card-footer py-3';

            const youtube = document.createElement('a');
            youtube.setAttribute('href', element.links[0]);
            youtube.setAttribute('target', '_blank');

            const spanIconYoutube = document.createElement('span');
            spanIconYoutube.className = 'icon is-large has-text-danger';

            const iconYoutube = document.createElement('i');
            iconYoutube.className = 'fab fa-youtube fa-3x';

            spanIconYoutube.appendChild(iconYoutube);
            youtube.appendChild(spanIconYoutube);

            const spotify = document.createElement('a');
            spotify.setAttribute('href', element.links[1]);
            spotify.setAttribute('target', '_blank');

            const spanIconSpotify = document.createElement('span');
            spanIconSpotify.className = 'icon is-large has-text-success';

            const iconSpotify = document.createElement('i');
            iconSpotify.className = 'fab fa-spotify fa-3x';

            spanIconSpotify.appendChild(iconSpotify);
            spotify.appendChild(spanIconSpotify);

            const wikipedia = document.createElement('a');
            wikipedia.setAttribute('href', element.links[2]);
            wikipedia.setAttribute('target', '_blank');

            const spanIconWikipedia = document.createElement('span');
            spanIconWikipedia.className = 'icon is-large has-text-grey';

            const iconWikipedia = document.createElement('i');
            iconWikipedia.className = 'fab fa-wikipedia-w fa-3x';

            spanIconWikipedia.appendChild(iconWikipedia);
            wikipedia.appendChild(spanIconWikipedia);

            cardFooter.appendChild(youtube);
            cardFooter.appendChild(spotify);
            cardFooter.appendChild(wikipedia);


            section.appendChild(cardImg);
            section.appendChild(cardContent);
            section.appendChild(cardFooter);

            newDiv.appendChild(section);

            mainContainer.appendChild(newDiv);
        }