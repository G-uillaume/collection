const collection = [
    {
        title: 'Les Indes Galantes',
        authour: 'Jean-Philippe Rameau',
        category: ['baroque', 'opera', 'france'],
        link: 'https://www.youtube.com/watch?v=C8YQDlSkiKA',
        description: 'Les Indes galantes is the first of six ballet operas by Jean-Philippe Rameau, created in 1735. The young people of the four nations, France, Italy, Spain and Poland, forsake "peaceful retreats" for combat, preferring glory to the pleasures of youth and love. The "sons of Venus" at the orders of Love flew away from Europe, to the shores of India, that is to say, Turkey, Peru, Persia, America, where four amorous adventures would take place.'
    },
    {
        title: 'Orlando Furioso',
        author: 'Antonio Vivaldi',
        category: ['baroque', 'opera', 'italy'],
        link: 'https://www.youtube.com/watch?v=08-Px5Ft5s8',
        description: 'Orlando Furioso is an opera in three acts by Antonio Vivaldi, with a libretto by Grazio Braccioli, based on the eponymous novel by Ludovico Ariosto called L\'Arioste. The action of the opera takes place on the island of the old magician Alcina, who established her power by stealing the ashes of Merlin the Enchanter and who by her spells seduces the knights entering the island. Alcina welcomed Angelica, daughter of the king of Cathay, in love with Medoro and desired by the paladin Orlando. At the beginning of the drama, arriving on the island, Orlando is in charge of destroying Alcina\'s power. His faithful companion Astolfo is already there, bewitched by Alcina.'
    },
    {
        title: 'Mass in B minor',
        author: 'Johann Sebastian Bach',
        category: ['baroque', 'sacred music', 'germany'],
        link: 'https://www.youtube.com/watch?v=3FLbiDrn8IE&t=2s',
        description: 'The Mass in B minor is a musical work composed by Johann Sebastian Bach, for two sopranos, a contralto, a tenor, a bass, a choir and an orchestra. The Mass in B minor occupied Bach intermittently for more than 25 years. It is not intended for the Office, as it is far too long. It is an abstract and purely spiritual Mass of gigantic dimensions, conceived as the crowning of a life dedicated to sacred music. The five parts of the Mass in B minor were created in three distinct periods: 1724, 1733, 1748-1749. Each of these sets consists of several separate parts (27 in total).'
    },
    {
        title: 'Requiem',
        author: 'Wolfang Amadeus Mozart',
        category: ['classic', 'sacred music', 'germany'],
        link: 'https://www.youtube.com/watch?v=AZfZnbTgY4E',
        description: 'Wolfgang Amadeus Mozart\'s Requiem Mass in D minor, composed in 1791, is a work from the last year of Mozart\'s life, but not exactly the composer\'s last work. It is only about two-thirds in Mozart\'s hand, death having interrupted the composition. Nevertheless, it remains one of his major and emblematic works. His widow, Constance, asked in turn Franz Jakob Freystädtler, Joseph Eybler and Franz Xaver Süßmayr to complete the score to fulfil the commission, thus receiving the promised remuneration without repaying the advance, and also to rehabilitate her husband\'s memory in order to obtain an imperial pension. The Requiem has been the subject of many legends, both because of the unusual circumstances of its commission and because of the difficulty of distinguishing exactly what was or was not in Mozart\'s hand.'
    },
    {
        title: 'Symphony No 3',
        author: 'Ludwig van Beethoven',
        category: ['classic', 'symphonic', 'germany'],
        link: 'https://www.youtube.com/watch?v=BgIjGSPmk7I',
        description: 'Ludwig van Beethoven\'s Symphony No. 3 in E-flat major, commonly known as Eroica, is the third of his nine symphonies. It was composed in 1803 - 1804 and publicly premiered on April 7, 1805. The symphony was originally dedicated to Napoleon Bonaparte, but the composer renounced this dedication when he learned that the First Consul had been crowned emperor. The symphony is finally dedicated to the memory of "a great man," though it was later dedicated to the composer\'s great benefactor, the Prince of Lobkowitz.'
    },
    {
        title: 'Sextet No 1',
        author: 'Johannes Brahms',
        category: ['romantic', 'chamber music', 'germany'],
        link: 'https://www.youtube.com/watch?v=R-TcdppKylw',
        description: 'The String Sextet No. 1 in B-flat major, Op. 18 is a sextet for two violins, two violas and two cellos by Johannes Brahms. It was completed in September 1860 in Ham near Hamburg. Called "Frühlingssextett" ("Spring Sextet"), it was successfully premiered on October 20, 1860 in Hannover and performed again on November 27 in Leipzig.'
    },
    {
        title: 'Prélude à l\'après-midi d\'un faune',
        author: 'Claude Debussy',
        category: ['modern', 'syphonic', 'france'],
        link: 'https://www.youtube.com/watch?v=aCphwVnD_hM',
        description: 'The Prélude à l\'Après-midi d\'un faune, in E major, subtitled "Églogue pour orchestre d\'après Stéphane Mallarmé", is a symphonic work by Claude Debussy, composed between 1892 and 1894. Debussy wrote in the printed program: "The music of this Prélude is a very free illustration of Mallarmé\'s beautiful poem. She hardly wishes to summarise this poem, but wants to suggest the different atmospheres, in the midst of which evolve the desires, and dreams of the Egipan, on this burning afternoon. Tired of chasing fearful nymphs and timid naiads, he abandons himself to a voluptuous sleep that animates the dream of a desire finally realised: the complete possession of the whole of nature".'
    },
    {
        title: 'The Rite of Spring',
        author: 'Igor Stravinsky',
        category: ['modern', 'ballet', 'russia'],
        link: 'https://www.youtube.com/watch?v=YOZmlYgYzG4',
        description: 'The Rite of Spring is a ballet composed by Igor Stravinsky and originally choreographed by Vaslav Nijinsky for Serge de Diaghilev\'s Ballets Russes. Subtitled "Pictures of Pagan Russia", the ballet has as its real programme only its musical division, the two main sections of the score (The Adoration of the Earth and The Sacrifice) moving in two enormous sound blocks. Non-narrative in its presentation, Nicolas Roerich\'s argument evokes rites in honour of the earth and of spring, culminating in the human sacrifice of a young chosen virgin, to conquer the favours of the telluric deities. Stravinsky, for his part, wanted to express "the sublime rise of nature that is renewing itself: the total, panicky rise of the universal sap".'
    },
    {
        title: 'Quartet for the End of Time',
        author: 'Olivier Messiaen',
        category: ['modern', 'chamber music', 'france'],
        link: 'https://www.youtube.com/watch?v=QAQmZvxVffY',
        description: 'The Quartet for the End of Time is a musical work in eight movements by Olivier Messiaen written for violin, cello, clarinet and piano. However, the four instruments only really play together in four movements. The quartet was written while in detention at Stalag VIII-A in Gorlitz in 1940, where Messiaen and Étienne Pasquier had been held since June 20, 1940. It was first performed there on January 15, 1941 by Étienne Pasquier on cello, Jean Le Boulaire on violin, Henri Akoka on clarinet and Olivier Messiaen himself on piano before an audience of 400.'
    },
    {
        title: 'Techno-parade',
        author: 'Guillaume Connesson',
        category: ['contemporary', 'chamber music', 'france'],
        link: 'https://www.youtube.com/watch?v=hfFzXOsxdok',
        description: 'Guillaume Connesson, born in 1970, is currently one of the most frequently performed French composers in the world. Most of his works have been commissioned (Royal Concertgebouw Orchestra, Philadelphia Orchestra, Orchestre National de France...) as well as Pour sortir au jour, commissioned by the Chicago Symphony Orchestra (2013) or Lovecraft\'s Les Trois Cités (co-commissioned by the Netherlands Philharmonic Orchestra and the Orchestre National de Lyon). In addition, his music is regularly performed by numerous orchestras (Brussels Philharmonic, Orchestre National de France, National Symphony Orchestra, Cincinnati Symphony Orchestra, BBC Symphony Orchestra,…). Techno-parade is a piece for flute, clarinet and piano.'
    }
]