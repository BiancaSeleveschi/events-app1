import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuid } from "uuid";

Vue.use(Vuex);
export const EventBus = new Vue();
export default new Vuex.Store({
  state: {
    events: [
      {
        name: "Sunwaves Festival",
        location: "Tulcea",
        date: "2023-09-05",
        description:
          "A festival that combines music, technology and alternative arts in a unique beach setting.",
        img: "https://sunwaves-fest.ro/wp-content/uploads/2021/05/sunwaves-festival-13.jpg",
        price: 80,
        id: uuid(),
        category: "festivals",
      },
      {
        name: "Jazz in the Park",
        location: "Cluj-Napoca",
        date: "2023-09-0523",
        description:
          "A festival that celebrates jazz music in a beautiful park setting.",
        img: "https://media.szekelyhon.ro/pictures/kronika_2021/05_majus2/b_facebook_jazz_in_the_park_skd.jpg",
        price: 40,
        id: uuid(),
        category: "festivals",
      },
      {
        name: "Sunwaves Festival",
        location: "Constanța",
        date: "2023-09-05",
        description:
          "A festival that combines music, technology and alternative arts in a unique beach setting.",
        img: "https://pbs.twimg.com/media/FLWBMYzXIAIjDXf.jpg:large",
        price: 80,
        id: uuid(),
        category: "festivals",
      },
      {
        name: "Jazz in the Park",
        location: "Suceava",
        date: "2023-09-0523",
        description:
          "A festival that celebrates jazz music in a beautiful park setting.",
        img: "https://zcj.ro/images/db/1_3_244405_1677136210_06289_fav.jpg",
        price: 40,
        id: uuid(),
        category: "festivals",
      },
      {
        name: "Untold",
        location: "Cluj-Napoca",
        date: "2023-08-03",
        description:
          "One of the biggest music festivals in Europe, featuring world-renowned DJs and live acts.",
        img: "https://www.thedjrevolution.com/wp-content/uploads/elementor/thumbs/Romanias-UNTOLD-Festival-drops-massive-lineup-for-2021-edition-p99jpvrfd39hqjtx71s9u1qc5txkenlh73uxkh3mn2.jpg",
        price: 750,
        id: uuid(),
        category: "festivals",
      },
      {
        name: "Electric Castle",
        location: "Cluj-Napoca",
        date: "2023-08-05",
        description:
          "A festival that combines music, technology and alternative arts in a unique medieval castle setting.",
        img: "https://www.datocms-assets.com/43475/1657709341-287783925_5129942580453776_4847351174605689115_n.jpg?auto=format&fit=crop&h=530&w=940",
        price: 550,
        id: uuid(),
        category: "festivals",
      },
      {
        name: "ARTmania",
        location: "Sibiu",
        date: "2023-11-20",
        description:
          "An international festival of visual and performing arts, featuring music, theater, exhibitions and workshops.",
        img: "https://yourope.org/wp-content/uploads/2017/03/Artmania-3.jpg",
        price: 100,
        id: uuid(),
        category: "festivals",
      },
      {
        name: "Sighisoara Medieval Festival",
        location: "Deva",
        date: "2023-06-23",
        description:
          "A festival that celebrates the medieval history and traditions of the city, featuring reenactments, parades, concerts and crafts.",
        img: "https://romaniatourstore.com/wp-content/uploads/2017/02/Sighisoara-Medieval-Festival-1024x768.jpg",
        price: 50,
        id: uuid(),
        category: "festivals",
      },
      {
        name: "George Enescu International Festival",
        location: "Bucharest",
        date: "2023-06-20",
        description:
          "A classical music festival that honors the legacy of the Romanian composer George Enescu, featuring world-class orchestras and soloists.",
        img: "https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/2019-09/ok_enescu_festival_opening_copyright_ampt_small.jpg",
        price: 200,
        id: uuid(),
        category: "festivals",
      },
      {
        name: "National Triathlon Championship",
        date: "2023-06-20",
        location: "Bucharest",
        description:
          "The top triathletes from across Romania compete for the national championship title in this exciting two-day event.",
        img: "https://www.sportstravelmagazine.com/wp-content/uploads/2019/01/181104_4723-1.jpg",
        id: uuid(),
        price: 75,
        category: "sports",
      },
      {
        name: "National Triathlon Championship",
        date: "2023-07-20",
        location: "Botoșani",
        description:
          "The top triathletes from across Romania compete for the national championship title in this exciting two-day event.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4RETggFEma6TNiBsVm8LYLfYyMnus9NAK8kylxt3SL-KzNg2fZuc7_t0Pvk4TADs0b0&usqp=CAU",
        id: uuid(),
        price: 75,
        category: "sports",
      },
      {
        name: "Cluj-Napoca Marathon",
        date: "2023-06-20",
        location: "Cluj-Napoca",
        description:
          "A popular marathon held annually in Cluj-Napoca, with thousands of participants from all over the world.",
        img: "https://i0.wp.com/maraton-cluj.ro/wp-content/uploads/2017/08/CLUJ.jpg?fit=1600%2C724&ssl=1",
        id: uuid(),
        price: 50,
        category: "sports",
      },
      {
        name: "Mountain Biking Cup",
        date: "2023-09-22",
        location: "Brașov",
        description:
          "A thrilling mountain biking competition in the beautiful mountains of Poiana Brașov, with professional and amateur categories.",
        img: "https://img.redbull.com/images/c_crop,x_0,y_0,h_2772,w_4928/c_fill,w_740,h_416/q_auto:low,f_auto/redbullcom/2022/8/17/mbaaujhyksswmaftgo9i/uci-world-cup-les-gets-2019-men-xco-lars-forster",
        id: uuid(),
        price: 30,
        category: "sports",
      },
      {
        name: "Romanian Open Tennis Tournament",
        date: "2023-09-24",
        location: "Bucharest",
        description:
          "One of the top tennis tournaments in Romania, featuring some of the world's best tennis players and rising stars.",
        img: "https://previews.123rf.com/images/agcreativelab/agcreativelab1508/agcreativelab150800235/43512276-bucharest-romania-july-9-2014-image-from-the-central-arena-of-bnr-arenas-during-the-tennis.jpg",
        id: uuid(),
        price: 100,
        category: "sports",
      },
      {
        name: "National Beach Volleyball Championship",
        date: "2023-09-05",
        location: "Constanța",
        description:
          "The top beach volleyball players from across Romania compete for the national championship title in this exciting two-day event.",
        img: "https://www.masslive.com/resizer/ej4P0urCBzUjMjFLSJSDUPX85NU=/arc-anglerfish-arc2-prod-advancelocal/public/HZKVGN5SMNDUVBIUN4RJAB3UCM.jpg",
        id: uuid(),
        price: 25,
        category: "sports",
      },
      {
        name: "National Beach Volleyball Championship",
        date: "2023-08-05",
        location: "Târgu Mureș",
        description:
          "The top beach volleyball players from across Romania compete for the national championship title in this exciting two-day event.",
        img: "https://www.masslive.com/resizer/ej4P0urCBzUjMjFLSJSDUPX85NU=/arc-anglerfish-arc2-prod-advancelocal/public/HZKVGN5SMNDUVBIUN4RJAB3UCM.jpg",
        id: uuid(),
        price: 25,
        category: "sports",
      },
      {
        name: "Stand-up Comedy Night",
        date: "2023-06-20",
        location: "Bucharest",
        category: "comedies",
        id: uuid(),
        price: 40,
        description:
          "Join us for a night of laughter at our stand-up comedy show! Our lineup features some of the funniest comedians in the city. ",
        img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/c7/44/bf/regular-croatian-stand.jpg",
      },
      {
        name: "Improvisational Comedy Show",
        date: "2023-06-20",
        location: "Cluj-Napoca",
        category: "comedies",
        description:
          "Get ready to be entertained and laugh out loud with our stand-up comedy event.",
        price: 35,
        id: uuid(),
        img: "https://assets3.thrillist.com/v1/image/1661515/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
      },
      {
        name: "Improvisational Comedy Show",
        date: "2023-06-20",
        location: "Bacău",
        category: "comedies",
        description:
          "Stand-up comedy is a form of entertainment where a comedian performs in front of a live audience.",
        price: 35,
        id: uuid(),
        img: "https://www.fantasyspringsresort.com/wp-content/uploads/2018/12/improv-gridbox.jpg",
      },
      {
        name: "Comedy Gala",
        date: "2023-09-15",
        location: "Craiova",
        category: "comedies",
        description:
          "Join us for a night of laughter at our stand-up comedy show! Our lineup features some of the funniest comedians in the city. ",
        price: 50,
        id: uuid(),
        img: "https://www.comedyfestival.co.nz/assets/Uploads/NZICF-Show-Search-View-380-x-285.jpg",
      },
      {
        name: "Improvisational Comedy Show",
        date: "2023-06-20",
        location: "Caransebeș",
        category: "comedies",
        description:
          "Stand-up comedy is a form of entertainment where a comedian performs in front of a live audience.",
        price: 35,
        id: uuid(),
        img: "https://assets3.thrillist.com/v1/image/1661515/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
      },
      {
        name: "Stand-up Comedy Night",
        date: "2023-05-12",
        location: "Baia Mare",
        category: "comedies",
        description:
          "Join us for a night of side-splitting humor and good times at our stand-up show.",
        price: 40,
        id: uuid(),
        img: "https://njfamily-images.s3.amazonaws.com/wp-content/uploads/2019/09/StandUpComedy-1.jpg",
      },
      {
        name: "Stand-up Comedy Night",
        date: "2023-06-12",
        location: "Târgu Mureș",
        category: "comedies",
        description:
          "Join us for a night of laughter at our stand-up comedy show! Our lineup features some of the funniest comedians in the city. ",
        price: 40,
        id: uuid(),
        img: "https://njfamily-images.s3.amazonaws.com/wp-content/uploads/2019/09/StandUpComedy-1.jpg",
      },
      {
        name: "Improvisational Comedy Show",
        date: "2023-06-20",
        location: "Vaslui",
        category: "comedies",
        description:
          "Looking for a fun night out? Look no further than our stand-up comedy event, guaranteed to leave you in stitches!",
        price: 35,
        id: uuid(),
        img: "data:image/jpeg;base64,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",
      },
      {
        name: "Improvisational Comedy Show",
        date: "2023-06-20",
        location: "Călărași",
        category: "comedies",
        description:
          "Join us for a night of side-splitting humor and good times at our stand-up show.",
        price: 35,
        id: uuid(),
        img: "https://www.fantasyspringsresort.com/wp-content/uploads/2018/12/improv-gridbox.jpg",
      },
      {
        name: "Comedy Gala",
        date: "2023-09-15",
        location: "Iași",
        category: "comedies",
        description:
          "Looking for a fun night out? Look no further than our stand-up comedy event, guaranteed to leave you in stitches!",
        price: 50,
        id: uuid(),
        img: "data:image/jpeg;base64,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",
      },
      {
        name: "Improvisational Comedy Show",
        date: "2023-06-20",
        location: "Vrancea",
        category: "comedies",
        description:
          "Join us for a night of side-splitting humor and good times at our stand-up show.",
        price: 35,
        id: uuid(),
        img: "https://www.fantasyspringsresort.com/wp-content/uploads/2018/12/improv-gridbox.jpg",
      },
      {
        name: "Roast Battle",
        date: "2023-07-05",
        location: "Timișoara",
        description:
          "Comedy fans unite! Our stand-up show is the perfect way to have a good time and let loose.",
        category: "comedies",
        price: 45,
        id: uuid(),
        img: "https://cdn.comedy.co.uk/images/library/comedies/900x450/r/roast_battle_series4.jpg",
      },
      {
        name: "Open Mic Night",
        date: "2023-08-10",
        location: "Iași",
        category: "comedies",
        price: 30,
        id: uuid(),
        description:
          "Stand-up comedy is a form of entertainment where a comedian performs in front of a live audience.",
        img: "data:image/jpeg;base64,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",
      },
      {
        name: "Roast Battle",
        date: "2023-07-05",
        location: "Dâmboviţa",
        description:
          "Comedy fans unite! Our stand-up show is the perfect way to have a good time and let loose.",
        category: "comedies",
        price: 45,
        id: uuid(),
        img: "https://cdn.comedy.co.uk/images/library/comedies/900x450/r/roast_battle_series4.jpg",
      },
      {
        name: "Open Mic Night",
        date: "2023-09-10",
        location: "Bistriţa",
        category: "comedies",
        price: 30,
        id: uuid(),
        description:
          "Stand-up comedy is a form of entertainment where a comedian performs in front of a live audience.",
        img: "data:image/jpeg;base64,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",
      },
      {
        name: "Comedy Gala",
        date: "2023-09-15",
        location: "Constanța",
        category: "comedies",
        description:
          "Join us for a night of side-splitting humor and good times at our stand-up show.",
        price: 50,
        id: uuid(),
        img: "data:image/jpeg;base64,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",
      },
      {
        name: "Comedy Gala",
        date: "2023-09-15",
        location: " Sfântu Gheorghe",
        category: "comedies",
        description:
          "Looking for a fun night out? Look no further than our stand-up comedy event, guaranteed to leave you in stitches!",
        price: 50,
        id: uuid(),
        img: "data:image/jpeg;base64,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",
      },
      {
        name: "Improvisational Comedy Show",
        date: "2023-06-20",
        location: "Oradea",
        category: "comedies",
        description:
          "Join us for a night of side-splitting humor and good times at our stand-up show.",
        price: 35,
        id: uuid(),
        img: "https://www.fantasyspringsresort.com/wp-content/uploads/2018/12/improv-gridbox.jpg",
      },
      {
        name: "Open Mic Night",
        date: "2023-08-10",
        location: "Satu Mare",
        category: "comedies",
        price: 30,
        id: uuid(),
        description:
          "Stand-up comedy is a form of entertainment where a comedian performs in front of a live audience.",
        img: "https://popmenucloud.com/nfdlgvxb/80e14293-cd80-4a81-aeeb-7a32bed9570a.jpg",
      },
      {
        name: "Comedy Gala",
        date: "2023-09-15",
        location: "Baia Mare",
        category: "comedies",
        description:
          "Looking for a fun night out? Look no further than our stand-up comedy event, guaranteed to leave you in stitches!",
        price: 50,
        id: uuid(),
        img: "https://www.comedyfestival.co.nz/assets/Uploads/NZICF-Show-Search-View-380-x-285.jpg",
      },
      {
        name: "Comedy Gala",
        date: "2023-09-15",
        location: "Pitești",
        category: "comedies",
        description:
          "Laugh until your sides hurt with our hilarious stand-up show!",
        price: 50,
        id: uuid(),
        img: "https://www.comedyfestival.co.nz/assets/Uploads/NZICF-Show-Search-View-380-x-285.jpg",
      },
      {
        name: "Improvisational Comedy Show",
        date: "2023-06-20",
        location: "Pitești",
        category: "comedies",
        description:
          "Join us for a night of side-splitting humor and good times at our stand-up show.",
        price: 35,
        id: uuid(),
        img: "https://www.fantasyspringsresort.com/wp-content/uploads/2018/12/improv-gridbox.jpg",
      },
      {
        name: "Comedy Gala",
        date: "2023-09-15",
        location: "Bistriţa",
        category: "comedies",
        description:
          "Laugh until your sides hurt with our hilarious stand-up show!",
        price: 50,
        id: uuid(),
        img: "https://www.comedyfestival.co.nz/assets/Uploads/NZICF-Show-Search-View-380-x-285.jpg",
      },
      {
        name: "Circus Show",
        location: "Bucharest",
        date: "2023-06-10",
        id: uuid(),
        category: "kids",
        price: 20,
        description: "An exciting circus show for kids of all ages",
        img: "https://en.pimg.jp/048/651/594/1/48651594.jpg",
      },
      {
        name: "Circus Show",
        location: "Arad",
        date: "2023-06-16",
        id: uuid(),
        category: "kids",
        price: 20,
        description: "An exciting circus show for kids of all ages",
        img: "https://cdn.britannica.com/96/198296-050-65D1A810/Clowns-tour-Ringling-Bros-Barnum-Atlanta-2017.jpg",
      },
      {
        name: "Circus Show",
        location: "Vaslui",
        date: "2023-06-13",
        id: uuid(),
        category: "kids",
        price: 20,
        description: "An exciting circus show for kids of all ages",
        img: "https://previews.123rf.com/images/seamartini/seamartini1811/seamartini181100501/127471767-circus-show-with-trained-animals-and-air-acrobat-performances-vector-top-tent-arena-lion-and.jpg",
      },
      {
        name: "Puppet Theater",
        location: "Cluj-Napoca",
        date: "2023-07-15",
        id: uuid(),
        category: "kids",
        price: 15,
        description: "A fun puppet show for young children",
        img: "https://static01.nyt.com/images/2019/10/30/world/xxparis-marionettes-dispatch1/merlin_161425188_7f46ef52-d46a-4a41-9f78-f5f067beaad9-superJumbo.jpg",
      },
      {
        name: "Circus Show",
        location: "Caracal",
        date: "2023-06-13",
        id: uuid(),
        category: "kids",
        price: 20,
        description: "An exciting circus show for kids of all ages",
        img: "https://previews.123rf.com/images/seamartini/seamartini1811/seamartini181100501/127471767-circus-show-with-trained-animals-and-air-acrobat-performances-vector-top-tent-arena-lion-and.jpg",
      },
      {
        name: "Puppet Theater",
        location: "Piatra Neamț",
        date: "2023-07-15",
        id: uuid(),
        category: "kids",
        price: 15,
        description: "A fun puppet show for young children",
        img: "https://static01.nyt.com/images/2019/10/30/world/xxparis-marionettes-dispatch1/merlin_161425188_7f46ef52-d46a-4a41-9f78-f5f067beaad9-superJumbo.jpg",
      },
      {
        name: "Puppet Theater",
        location: "Brăila",
        date: "2023-07-15",
        id: uuid(),
        category: "kids",
        price: 15,
        description: "A fun puppet show for young children",
        img: "https://static01.nyt.com/images/2019/10/30/world/xxparis-marionettes-dispatch1/merlin_161425188_7f46ef52-d46a-4a41-9f78-f5f067beaad9-superJumbo.jpg",
      },
      {
        name: "Puppet Theater",
        location: "Tulcea",
        date: "2023-07-15",
        id: uuid(),
        category: "kids",
        price: 15,
        description: "A fun puppet show for young children",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/41/SarTerem_%D0%9F%D1%80%D1%8B%D0%B3%D0%B0%D1%8E%D1%89%D0%B0%D1%8F_%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D0%B0.jpg",
      },
      {
        name: "Magic Workshop",
        location: "Timișoara",
        date: "2023-08-20",
        id: uuid(),
        category: "kids",
        price: 25,
        description: "Learn the secrets of magic and impress your friends!",
        img: "https://m.media-amazon.com/images/I/91yPV4QatKL._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Magic Workshop",
        location: "Oradea",
        date: "2023-08-20",
        id: uuid(),
        category: "kids",
        price: 25,
        description: "Learn the secrets of magic and impress your friends!",
        img: "https://i.ytimg.com/vi/1hDskPgEnp4/mqdefault.jpg",
      },
      {
        name: "Magic Workshop",
        location: "Ploiești",
        date: "2023-08-20",
        id: uuid(),
        category: "kids",
        price: 25,
        description: "Learn the secrets of magic and impress your friends!",
        img: "https://i.ytimg.com/vi/1hDskPgEnp4/mqdefault.jpg",
      },
      {
        name: "Magic Workshop",
        location: "Timișoara",
        date: "2023-08-20",
        id: uuid(),
        category: "kids",
        price: 25,
        description: "Learn the secrets of magic and impress your friends!",
        img: "https://m.media-amazon.com/images/I/91yPV4QatKL._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Magic Workshop",
        location: "Alba-Iulia",
        date: "2023-08-20",
        id: uuid(),
        category: "kids",
        price: 25,
        description: "Learn the secrets of magic and impress your friends!",
        img: "https://cdn.amightygirl.com/catalog/product/cache/1/image/602f0fa2c1f0d1ba5e241f914e856ff9/m/a/magic_workshop_1.jpg",
      },
      {
        name: "Magic Workshop",
        location: "Ilfov",
        date: "2023-08-20",
        id: uuid(),
        category: "kids",
        price: 25,
        description: "Learn the secrets of magic and impress your friends!",
        img: "https://m.media-amazon.com/images/I/91yPV4QatKL._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Magic Workshop",
        location: "Drobeta-Turnu Severin",
        date: "2023-08-20",
        id: uuid(),
        category: "kids",
        price: 25,
        description: "Learn the secrets of magic and impress your friends!",
        img: "https://cdn.amightygirl.com/catalog/product/cache/1/image/602f0fa2c1f0d1ba5e241f914e856ff9/m/a/magic_workshop_1.jpg",
      },
      {
        name: "Puppet Theater",
        location: "Oradea",
        date: "2023-07-15",
        id: uuid(),
        category: "kids",
        price: 15,
        description: "A fun puppet show for young children",
        img: "https://img.freepik.com/free-vector/cartoon-puppet-show-background_23-2148890735.jpg?w=2000",
      },
      {
        name: "Magic Workshop",
        location: "Satu Mare",
        date: "2023-08-20",
        id: uuid(),
        category: "kids",
        price: 25,
        description: "Learn the secrets of magic and impress your friends!",
        img: "https://cdn.alivenetwork.com/images/bands/online-magic-party-for-kids-children-300x300@2x.jpg",
      },
      {
        name: "Art & Crafts Fair",
        location: "Buzău",
        date: "2023-09-05",
        id: uuid(),
        category: "kids",
        price: 10,
        description:
          "Join us for a day of creativity and fun activities for kids",
        img: "https://assets.website-files.com/61512ef60082c12d546590c3/6243f5d05b3945d7f7caa123_GE-Arts-Crafts.jpg",
      },
      {
        name: "Art & Crafts Fair",
        location: "Oradea",
        date: "2023-09-05",
        id: uuid(),
        category: "kids",
        price: 10,
        description:
          "Join us for a day of creativity and fun activities for kids",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/St_Briavels_Art_and_Craft_Fair_2012_15.JPG/2560px-St_Briavels_Art_and_Craft_Fair_2012_15.JPG",
      },
      {
        name: "Art & Crafts Fair",
        location: "Miercurea Ciuc",
        date: "2023-09-05",
        id: uuid(),
        category: "kids",
        price: 10,
        description:
          "Join us for a day of creativity and fun activities for kids",
        img: "https://assets.website-files.com/61512ef60082c12d546590c3/6243f5d05b3945d7f7caa123_GE-Arts-Crafts.jpg",
      },
      {
        name: "Art & Crafts Fair",
        location: "Târgu Jiu",
        date: "2023-09-05",
        id: uuid(),
        category: "kids",
        price: 10,
        description:
          "Join us for a day of creativity and fun activities for kids",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/St_Briavels_Art_and_Craft_Fair_2012_15.JPG/2560px-St_Briavels_Art_and_Craft_Fair_2012_15.JPG",
      },
      {
        name: "Art & Crafts Fair",
        location: "Deva",
        date: "2023-09-05",
        id: uuid(),
        category: "kids",
        price: 10,
        description:
          "Join us for a day of creativity and fun activities for kids",
        img: "https://i0.wp.com/blog.folksy.com/wp-content/uploads/2013/10/stoneflower1.jpg",
      },
      {
        name: "Magic Workshop",
        location: "Alba-Iulia",
        date: "2023-08-20",
        id: uuid(),
        category: "kids",
        price: 25,
        description: "Learn the secrets of magic and impress your friends!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirsJlfA-z3zoJRJouMryYGpOEY6q4o0YSXA&usqp=CAU",
      },
      {
        name: "Art & Crafts Fair",
        location: "Buzău",
        date: "2023-09-05",
        id: uuid(),
        category: "kids",
        price: 10,
        description:
          "Join us for a day of creativity and fun activities for kids",
        img: "https://i0.wp.com/blog.folksy.com/wp-content/uploads/2013/10/stoneflower1.jpg",
      },
      {
        name: "Magic Workshop",
        location: "Giurgiu",
        date: "2023-08-20",
        id: uuid(),
        category: "kids",
        price: 25,
        description: "Learn the secrets of magic and impress your friends!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirsJlfA-z3zoJRJouMryYGpOEY6q4o0YSXA&usqp=CAU",
      },
      {
        name: "Art & Crafts Fair",
        location: "Ploiești",
        date: "2023-09-05",
        id: uuid(),
        category: "kids",
        price: 10,
        description:
          "Join us for a day of creativity and fun activities for kids",
        img: "https://shelterislandgazette.com/wp-content/uploads/2022/07/ArtsCrafts-22.jpg",
      },
    ],
    cart: [],
  },
  getters: {
    getTotalPrice: (state) => {
      let total = 0;
      if (state.cart) {
        state.cart.forEach((item) => {
          total += item.event.price * item.quantity;
        });
      }
      return total.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
    },
    getFilteredEvents: (state) => (searchWord) => {
      const filteredEvents = state.events.filter((event) => {
        return event.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      EventBus.$emit("filtered-events", filteredEvents);
    },
  },
  mutations: {
    ADD_TO_CART(state, item) {
      let itemCart = state.cart.find((i) => i.event.id === item.event.id);
      if (itemCart) {
        itemCart.quantity++;
        itemCart.quantityPrice = itemCart.quantity * item.event.price;
        itemCart.quantityPrice = parseFloat(
          itemCart.quantityPrice
        ).toLocaleString("pt-BR", { maximumFractionDigits: 2 });
      } else {
        state.cart.push(item);
      }
    },
    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    addToCart(context, item) {
      context.commit("ADD_TO_CART", item);
    },
    removeEventFromCart(context, index) {
      context.commit("REMOVE_FROM_CART", index);
    },
  },
  modules: {},
});
