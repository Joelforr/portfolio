import React from "react";

const projects = [
  {
    title: "Pulse",
    prev: "pulse1.png",
    plat: "Unity/C#",
    team: "Solo",
    role: "Designer, Programmer",
    skill: ["C# Scripting", "Audio Scripting"],
    tags: ["C#", "Rythm", "Action"],
    desc:
      "Pulse is a minimal action game that aims to challenge the players visual perception and rythm. Invisible projectiles spawn in time with the music and close inward. Use your pulse sonar to detect incoming projectiles and survive for until the end of the song",
    vids: [],
    imgs: ["pulse_1.png", "pulse_2.png", "pulse_3.png"]
  },
  {
    title: "Continuum",
    prev: "continuum0.jpg",
    team: "4",
    plat: "Unity/C#",
    role: "Designer, Programmer",
    skill: ["VR Design", "C# Scripting"],
    tags: ["VR", "C#"],
    desc:
      "Continuum is a cyber themed, virtual reality physics based puzzle platformer. This prototype was built for my VR Studio class alongside 3 other group members. The prototype features 3 levels and tutorial. For this project we were faced with the VR locomotive issue and try to think of designs that justified the action of teleporting to move. Thus resulting in the physics simulation of throwing a teleport pad, acting as both a means of movement and challenge a for the player. This game 1 of 3 Virtual Reality games featured in the NYU 2017 End of Year Show ",
    vids: [
      {
        ifrm: (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/J-w0yR8C5yw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ),
        vidId: "J-w0yR8C5yw",
        thumb: 0
      }
    ],
    imgs: ["continuum_1.jpg"]
  },
  {
    title: "Skull Gem",
    prev: "skull-gem0.png",
    team: "Solo",
    plat: "Unity/C#",
    role: "Artist",
    skill: ["Pixel Art", "Animation"],
    tags: ["C#", "Endless Runner"],
    desc:
      "Slay undead creatures of the night and collect valuable soul gems along the way. I have a huge for love pixel art and I admire artwork of artists and other games while simultaneously wishing I could produce something that looks half as good. Skull Gem is me acting on those desires and pushing myself to develop a new skill. I personally created all the visual assets, art and animations for this game using the programs Pyxel and Photshop ",
    vids: [
      {
        ifrm: (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jWONcFsuPik"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ),
        vidId: "jWONcFsuPik",
        thumb: 0
      }
    ],
    imgs: ["skull-gem_1.png"]
  },
  {
    title: "Flight Club",
    prev: "flight-club1.png",
    team: "4",
    plat: "Unity/C#",
    role: "Designer, Programmer",
    skill: ["C# Scripting"],
    tags: ["C#"],
    desc:
      "My first Unity project, Flight Club, is a action game, taking inspiration from Super Smash Bros and Bara Bari Ball. Each player controls a hot-air balloon fighting for control of the skies so in order to drop a bomb on-top their opponent. Players have a limited amount of jumps which refill once they land, requiring precise and strategic action.",
    vids: [],
    imgs: [
      "flight-club_1.png",
      "flight-club_2.png",
      "flight-club_3.png",
      "flight-club_4.png"
    ]
  }
];

export default projects;
