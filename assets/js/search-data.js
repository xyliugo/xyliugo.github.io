// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "(*) denotes equal contribution. For a complete list of publications, please visit my Google Scholar page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-m-starting-my-phd-at-nus-soc-in-fall-2024-advised-by-michael-qizhe-shieh",
          title: 'I’m starting my PhD at NUS SoC in Fall 2024, advised by Michael...',
          description: "",
          section: "News",},{id: "news-our-paper-codexgraph-is-accepted-to-naacl-codexgraph-is-a-system-that-leverages-graph-databases-to-enhance-llm-interaction-with-code-repositories-enabling-precise-code-retrieval-and-navigation",
          title: 'Our paper CodexGraph is accepted to NAACL! CodexGraph is a system that leverages...',
          description: "",
          section: "News",},{id: "news-our-paper-noisyrollout-is-on-arxiv-now-we-propose-a-simple-yet-effective-technique-that-boosts-vlm-reasoning-by-mixing-clean-and-noisy-trajectories-during-rl-improving-generalization-with-no-extra-cost",
          title: 'Our paper NoisyRollout is on Arxiv now! We propose a simple yet effective...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%75.%78%69%61%6E%67%79%61%6E@%75.%6E%75%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xyliugo", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lsFTg-0AAAAJ", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/dobogiyy", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
