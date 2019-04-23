var friends = [
    { 
      name: "Quattro Bajeena",
      photo: "https://pbs.twimg.com/profile_images/3324504715/87c9657e01e92c40a8dbd4ad7228b043_400x400.png",
      scores: [ 5, 2, 4, 3, 2, 5, 3, 1, 4, 5 ]
    },
    { 
      name: "Kamille Bidan",
      photo: "http://animeperson.com/ap/ani1/45115.jpg",
      scores: [ 5,5,5,5,5,4,4,1, 1, 5 ]
    },
    { 
      name: "Fa Yuri",
      photo: "https://vignette.wikia.nocookie.net/gundam/images/b/b4/Fa_2.jpg/revision/latest?cb=20110418002342",
      scores: [1,5,3,5,1,5,4,4,1,2]
    },
    { 
      name: "Emma Sheen",
      photo: "https://static.myfigurecollection.net/pics/encyclopedia/5994.jpg?rev=1305232883",
      scores: [3,4,2,4,3,5,4,3,4,5]
    },
    {
        name: "Wang",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQ2Jv80DwJA9FmkJmhWB0bjiU_jsC5fBzSRkgWBPYoYnn-xXx_w",
        scores: [1,1,1,1,1,1,1,1,1,1]
    },
    {
        name: "Shinta & Qum",
        photo: "data:image/jpeg;base64,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",
        scores: [5,5,5,5,5,5,5,5,5,5]
    }

  ];
  module.exports = friends;