const collection = [
    {
        title: 'Les Indes Galantes',
        image: 'https://www.opera-online.com/media/images/avatar/work/279/xl_avatar.jpg?1399716084',
        author: 'Jean-Philippe Rameau',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Attribu%C3%A9_%C3%A0_Joseph_Aved%2C_Portrait_de_Jean-Philippe_Rameau_%28vers_1728%29_-_001.jpg',
        category: [{
                name: 'Baroque',
                class: 'tag mr-1 is-link'
            },
            {
                name: 'Opera',
                class: 'tag mr-1 is-warning'
            },
            {
                name: 'France',
                class: 'tag mr-1 is-danger'
            }
        ],
        links: [
            { 
                href: 'https://www.youtube.com/watch?v=C8YQDlSkiKA', 
                spanClass: 'icon is-large has-text-danger', 
                icon: 'fab fa-youtube fa-3x' 
            },
            { 
                href: 'https://open.spotify.com/album/1br46eEbwKlVYkTdbFGRqK?si=89qrYcSLTcqVFc4IVJpNCQ', 
                spanClass: 'icon is-large has-text-success', 
                icon: 'fab fa-spotify fa-3x' 
            },
            { 
                href: 'https://fr.wikipedia.org/wiki/Les_Indes_galantes', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-wikipedia-w fa-3x' 
            }
        ],
        description: '<span class="is-italic">Les Indes galantes</span> is the first of six ballet operas by Jean-Philippe Rameau, created in 1735. The young people of the four nations, France, Italy, Spain and Poland, forsake "peaceful retreats" for combat, preferring glory to the pleasures of youth and love. The "sons of Venus" at the orders of Love flew away from Europe, to the shores of India, that is to say, Turkey, Peru, Persia, America, where four amorous adventures would take place.'
    },
    {
        title: 'Orlando Furioso',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Orlando_Furioso_18.jpg/1200px-Orlando_Furioso_18.jpg',
        author: 'Antonio Vivaldi',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Vivaldi.jpg/220px-Vivaldi.jpg',
        category: [{
                name: 'Baroque',
                class: 'tag mr-1 is-link'
            },
            {
                name: 'Opera',
                class: 'tag mr-1 is-warning'
            }, 
            {
                name: 'Italy',
                class: 'tag mr-1 is-danger'
            }
        ],
        links: [
            { 
                href: 'https://www.youtube.com/watch?v=08-Px5Ft5s8', 
                spanClass: 'icon is-large has-text-danger', 
                icon: 'fab fa-youtube fa-3x' 
            },
            { 
                href: 'https://open.spotify.com/album/7yzY8tvA6uL6xjl9hBVFtc?si=fw8MyvDVTiWZkJEEJ4WytQ', 
                spanClass: 'icon is-large has-text-success', 
                icon: 'fab fa-spotify fa-3x' 
            },
            { 
                href: 'https://fr.wikipedia.org/wiki/Orlando_furioso_(Vivaldi)', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-wikipedia-w fa-3x' 
            }
        ],
        description: '<span=class="is-italic">Orlando Furioso</span> is an opera in three acts by Antonio Vivaldi, with a libretto by Grazio Braccioli, based on the eponymous novel by Ludovico Ariosto called L\'Arioste.<br>The action of the opera takes place on the island of the old magician Alcina, who established her power by stealing the ashes of Merlin the Enchanter and who by her spells seduces the knights entering the island. Alcina welcomed Angelica, daughter of the king of Cathay, in love with Medoro and desired by the paladin Orlando. At the beginning of the drama, arriving on the island, Orlando is in charge of destroying Alcina\'s power. His faithful companion Astolfo is already there, bewitched by Alcina.'
    },
    {
        title: 'Mass in B minor',
        image: 'https://content.wdl.org/11619/thumbnail/1430177770/616x510.jpg',
        author: 'Johann Sebastian Bach',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg',
        category: [{
                name: 'Baroque',
                class: 'tag mr-1 is-link'
            },
            {
                name: 'Sacred music',
                class: 'tag mr-1 is-warning'
            },
            {
                name: 'Germany',
                class: 'tag mr-1 is-danger'
            }
        ],
        links: [
            { 
                href: 'https://www.youtube.com/watch?v=3FLbiDrn8IE&t=2s', 
                spanClass: 'icon is-large has-text-danger', 
                icon: 'fab fa-youtube fa-3x' 
            },
            { 
                href: 'https://open.spotify.com/album/19pwFlrFA0awEGctBOtCCV?si=Pc-lXX0fTlC6MC3wa-zaOw', 
                spanClass: 'icon is-large has-text-success', 
                icon: 'fab fa-spotify fa-3x' 
            },
            { 
                href: 'https://fr.wikipedia.org/wiki/Messe_en_si_mineur', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-wikipedia-w fa-3x' 
            }
        ],
        description: 'The <span class="is-italic">Mass in B minor</span> is a musical work composed by Johann Sebastian Bach, for two sopranos, a contralto, a tenor, a bass, a choir and an orchestra.<br>The Mass in B minor occupied Bach intermittently for more than 25 years. It is not intended for the Office, as it is far too long. It is an abstract and purely spiritual Mass of gigantic dimensions, conceived as the crowning of a life dedicated to sacred music. The five parts of the Mass in B minor were created in three distinct periods: 1724, 1733, 1748-1749. Each of these sets consists of several separate parts (27 in total).'
    },
    {
        title: 'Requiem',
        image: 'https://api.europeana.eu/thumbnail/v2/url.json?size=w400&type=IMAGE&uri=http%3A%2F%2Fwww.theeuropeanlibrary.org%2Fimages%2Ftreasure%2Ftreasure-5.jpg',
        author: 'Wolfgang Amadeus Mozart',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Wolfgang-amadeus-mozart_1.jpg',
        category: [{
                name: 'Classic',
                class: 'tag mr-1 is-link'
            },
            {
                name: 'Sacred music',
                class: 'tag mr-1 is-warning'
            },
            {
                name: 'Germany',
                class: 'tag mr-1 is-danger'
            }
        ],
        links: [
            { 
                href: 'https://www.youtube.com/watch?v=AZfZnbTgY4E', 
                spanClass: 'icon is-large has-text-danger', 
                icon: 'fab fa-youtube fa-3x' 
            },
            { 
                href: 'https://open.spotify.com/album/5BVCfpBgtgGNuvb1TYUD5P?si=1FAqBKmKTAStU4fVZ0-Fww', 
                spanClass: 'icon is-large has-text-success', 
                icon: 'fab fa-spotify fa-3x' 
            },
            { 
                href: 'https://fr.wikipedia.org/wiki/Requiem_(Mozart)', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-wikipedia-w fa-3x' 
            }
        ],
        description: 'Wolfgang Amadeus Mozart\'s <span class="is-italic">Requiem Mass in D minor</span>, composed in 1791, is a work from the last year of Mozart\'s life, but not exactly the composer\'s last work. It is only about two-thirds in Mozart\'s hand, death having interrupted the composition. Nevertheless, it remains one of his major and emblematic works.<br>His widow, Constance, asked in turn Franz Jakob Freystädtler, Joseph Eybler and Franz Xaver Süßmayr to complete the score to fulfil the commission, thus receiving the promised remuneration without repaying the advance, and also to rehabilitate her husband\'s memory in order to obtain an imperial pension. The Requiem has been the subject of many legends, both because of the unusual circumstances of its commission and because of the difficulty of distinguishing exactly what was or was not in Mozart\'s hand.'
    },
    {
        title: 'Symphony No 3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Eroica_Beethoven_title.jpg',
        author: 'Ludwig van Beethoven',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg',
        category: [{
                name: 'Classic',
                class: 'tag mr-1 is-link'
            },
            {
                name: 'Symphonic',
                class: 'tag mr-1 is-warning'
            },
            {
                name: 'Germany',
                class: 'tag mr-1 is-danger'
            }
        ],
        links: [
            { 
                href: 'https://www.youtube.com/watch?v=BgIjGSPmk7I', 
                spanClass: 'icon is-large has-text-danger', 
                icon: 'fab fa-youtube fa-3x' 
            },
            { 
                href: 'https://open.spotify.com/album/4SdAMgzIpyiA0xvbwM8IM5?si=xZMxjXcsQhys6qiJBUNAJw', 
                spanClass: 'icon is-large has-text-success', 
                icon: 'fab fa-spotify fa-3x' 
            },
            { 
                href: 'https://fr.wikipedia.org/wiki/Symphonie_n%C2%BA_3_de_Beethoven', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-wikipedia-w fa-3x' 
            }
        ],
        description: 'Ludwig van Beethoven\'s <span class="is-italic">Symphony No. 3 in E-flat major</span>, commonly known as <span class="has-text-weight-bold">Eroica</span>, is the third of his nine symphonies. It was composed in 1803 - 1804 and publicly premiered on April 7, 1805.<br>The symphony was originally dedicated to Napoleon Bonaparte, but the composer renounced this dedication when he learned that the First Consul had been crowned emperor. The symphony is finally dedicated to the memory of "a great man," though it was later dedicated to the composer\'s great benefactor, the Prince of Lobkowitz.'
    },
    {
        title: 'Sextet No 1',
        image: 'https://www.omifacsimiles.com/brochures/images/204.jpg',
        author: 'Johannes Brahms',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/15/JohannesBrahms.jpg',
        category: [{
                name: 'Romantic',
                class: 'tag mr-1 is-link'
            },
            {
                name: 'Chamber music',
                class: 'tag mr-1 is-warning'
            },
            {
                name: 'Germany',
                class: 'tag mr-1 is-danger'
            }
        ],
        links: [
            {
                href: 'https://www.youtube.com/watch?v=R-TcdppKylw', 
                spanClass: 'icon is-large has-text-danger', 
                icon: 'fab fa-youtube fa-3x' 
            },
            { 
                href: 'https://open.spotify.com/album/0b2mh4dTU2XxaybTMmKlbK?si=SCKSU7N1RXunVqFYHaOeXg', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-spotify fa-3x' 
            },
            { 
                href: 'https://fr.wikipedia.org/wiki/Sextuor_%C3%A0_cordes_no_1_de_Brahms', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-wikipedia-w fa-3x' 
            }
        ],
        description: 'The <span class="is-italic">String Sextet No. 1 in B-flat major, Op. 18</span> is a sextet for two violins, two violas and two cellos by Johannes Brahms. It was completed in September 1860 in Ham near Hamburg. Called "<span class="has-text-weight-bold">Frühlingssextett</span>" ("Spring Sextet"), it was successfully premiered on October 20, 1860 in Hannover and performed again on November 27 in Leipzig.'
    },
    {
        title: 'Prélude à l\'après-midi d\'un faune',
        image: 'https://assets.classicfm.com/2012/34/faun-1345563606-view-0.jpg',
        author: 'Claude Debussy',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Claude_Debussy_ca_1908%2C_foto_av_F%C3%A9lix_Nadar.jpg',
        category: [{
                name: 'Modern',
                class: 'tag mr-1 is-link'
            },
            {
                name: 'Symphonic',
                class: 'tag mr-1 is-warning'
            },
            {
                name: 'France',
                class: 'tag mr-1 is-danger'
            }
        ],
        links: [
            { 
                href: 'https://www.youtube.com/watch?v=aCphwVnD_hM', 
                spanClass: 'icon is-large has-text-danger', 
                icon: 'fab fa-youtube fa-3x' 
            },
            { 
                href: 'https://open.spotify.com/album/3CKTDliChhr9L5mzjdANlc?si=reF8hJruRHiAdidMpYQr8Q', 
                spanClass: 'icon is-large has-text-success', 
                icon: 'fab fa-spotify fa-3x' 
            },
            { 
                href: 'https://fr.wikipedia.org/wiki/Pr%C3%A9lude_%C3%A0_l%27Apr%C3%A8s-midi_d%27un_faune', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-wikipedia-w fa-3x' 
            }
        ],
        description: 'The <span class="is-italic">Prélude à l\'Après-midi d\'un faune</span>, in E major, subtitled "<span class="is-italic">Églogue pour orchestre d\'après Stéphane Mallarmé</span>", is a symphonic work by Claude Debussy, composed between 1892 and 1894.<br>Debussy wrote in the printed program: "The music of this Prélude is a very free illustration of Mallarmé\'s beautiful poem. She hardly wishes to summarise this poem, but wants to suggest the different atmospheres, in the midst of which evolve the desires, and dreams of the Egipan, on this burning afternoon. Tired of chasing fearful nymphs and timid naiads, he abandons himself to a voluptuous sleep that animates the dream of a desire finally realised: the complete possession of the whole of nature".'
    },
    {
        title: 'The Rite of Spring',
        image: 'https://cdn.radiofrance.fr/s3/cruiser-production/2017/05/663b6450-4d2c-4994-93da-b83404ecb97f/600x337_sacre_du_printemps_dessin_titre.jpg',
        author: 'Igor Stravinsky',
        avatar: 'data:image/jpeg;base64,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',
        category: [{
                name: 'Modern',
                class: 'tag mr-1 is-link'
            },
            {
                name: 'Ballet',
                class: 'tag mr-1 is-warning'
            },
            {
                name: 'Russia',
                class: 'tag mr-1 is-danger'
            }
        ],
        links: [
            { 
                href: 'https://www.youtube.com/watch?v=YOZmlYgYzG4', 
                spanClass: 'icon is-large has-text-danger', 
                icon: 'fab fa-youtube fa-3x' 
            },
            { 
                href: 'https://open.spotify.com/album/0jtDZ6elwRCAGerxkzozy3?si=eWDtZE30SsaPmklT1bwgeA', 
                spanClass: 'icon is-large has-text-success', 
                icon: 'fab fa-spotify fa-3x' 
            },
            { 
                href: 'https://fr.wikipedia.org/wiki/Le_Sacre_du_printemps', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-wikipedia-w fa-3x' 
            }
        ],
        description: '<span class="is-italic">The Rite of Spring</span> is a ballet composed by Igor Stravinsky and originally choreographed by Vaslav Nijinsky for Serge de Diaghilev\'s Ballets Russes.<br>Subtitled "<span class="is-italic">Pictures of Pagan Russia</span>", the ballet has as its real programme only its musical division, the two main sections of the score (The Adoration of the Earth and The Sacrifice) moving in two enormous sound blocks. Non-narrative in its presentation, Nicolas Roerich\'s argument evokes rites in honour of the earth and of spring, culminating in the human sacrifice of a young chosen virgin, to conquer the favours of the telluric deities. Stravinsky, for his part, wanted to express <q><span class="is-italic">the sublime rise of nature that is renewing itself: the total, panicky rise of the universal sap</span></q>.'
    },
    {
        title: 'Quartet for the End of Time',
        image: 'https://cdn.radiofrance.fr/s3/cruiser-production/2018/10/a59542f8-ac3b-4d02-bcec-c53d029a401c/600x337_klippfeld_1280x720.jpg',
        author: 'Olivier Messiaen',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Lezing_Franse_compoist_Olivier_Messianen_in_Koninklijk_Conservatorium_in_Den_Haa%2C_Bestanddeelnr_933-8263.jpg',
        category: [{
                name: 'Modern',
                class: 'tag mr-1 is-link'
            },
            {
                name: 'Chamber music',
                class: 'tag mr-1 is-warning',
            },
            {
                name: 'France',
                class: 'tag mr-1 is-danger'
            }
        ],
        links: [
            { 
                href: 'https://www.youtube.com/watch?v=QAQmZvxVffY', 
                spanClass: 'icon is-large has-text-danger', 
                icon: 'fab fa-youtube fa-3x' 
            },
            { 
                href: 'https://open.spotify.com/album/74DM9nRD47sdXTs3gn3Jnc?si=n2WN-LheQBODQuVlg_mnoA', 
                spanClass: 'icon is-large has-text-success', 
                icon: 'fab fa-spotify fa-3x' 
            },
            { 
                href: 'https://fr.wikipedia.org/wiki/Quatuor_pour_la_fin_du_Temps', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-wikipedia-w fa-3x' 
            }
        ],
        description: 'The <span class="is-italic">Quartet for the End of Time</span> is a musical work in eight movements by Olivier Messiaen written for violin, cello, clarinet and piano. However, the four instruments only really play together in four movements.<br>The quartet was written while in detention at Stalag VIII-A in Gorlitz in 1940, where Messiaen and Étienne Pasquier had been held since June 20, 1940. It was first performed there on January 15, 1941 by Étienne Pasquier on cello, Jean Le Boulaire on violin, Henri Akoka on clarinet and Olivier Messiaen himself on piano before an audience of 400.'
    },
    {
        title: 'Techno-parade',
        image: 'https://i.ytimg.com/vi/hfFzXOsxdok/maxresdefault.jpg',
        author: 'Guillaume Connesson',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/G._Connesson.jpg',
        category: [{
                name: 'Contemporary',
                class: 'tag mr-1 is-link'
            },
            {
                name: 'Chamber music',
                class: 'tag mr-1 is-warning',
            },
            {
                name: 'France',
                class: 'tag mr-1 is-danger'
            }
        ],
        links: [
            { 
                href: 'https://www.youtube.com/watch?v=hfFzXOsxdok', 
                spanClass: 'icon is-large has-text-danger', 
                icon: 'fab fa-youtube fa-3x' 
            },
            { 
                href: 'https://open.spotify.com/track/7KheSukF5KjkJ504O2MnXQ?si=GcIbhyoMT-aXA63eSPfwPg', 
                spanClass: 'icon is-large has-text-success', 
                icon: 'fab fa-spotify fa-3x' 
            },
            { 
                href: 'https://fr.wikipedia.org/wiki/Guillaume_Connesson', 
                spanClass: 'icon is-large has-text-grey', 
                icon: 'fab fa-wikipedia-w fa-3x' 
            }
        ],
        description: 'Guillaume Connesson, born in 1970, is currently one of the most frequently performed French composers in the world. Most of his works have been commissioned (Royal Concertgebouw Orchestra, Philadelphia Orchestra, Orchestre National de France...) as well as Pour sortir au jour, commissioned by the Chicago Symphony Orchestra (2013) or Lovecraft\'s Les Trois Cités (co-commissioned by the Netherlands Philharmonic Orchestra and the Orchestre National de Lyon). In addition, his music is regularly performed by numerous orchestras (Brussels Philharmonic, Orchestre National de France, National Symphony Orchestra, Cincinnati Symphony Orchestra, BBC Symphony Orchestra,…).<br>Techno-parade is a piece for flute, clarinet and piano.'
    }
]