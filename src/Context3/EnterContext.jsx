import { createContext, useReducer } from "react";
import EnterReducer from "./EnterReducer";

const EnterContext = createContext()

export const EnterProvider = ({children})=>{
    const initialState = {
         entertainments : [//{
        //     "source": {
        //     "id": null,
        //     "name": "New York Post"
        //     },
        //     "author": "Nika Shakhnazarova",
        //     "title": "Johnny Depp's ex-wife Lori slams 'horrific' Amber Heard: 'I felt really bad for him' - New York Post ",
        //     "description": "The former make-up artist was married to the “Pirates of the Caribbean” actor for just two years, tying the knot in 1983.",
        //     "url": "https://nypost.com/2023/04/13/johnny-depps-ex-wife-slams-horrific-amber-heard-i-felt-really-bad-for-him/",
        //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/newspress-collage-26569563-1681370081813.jpg?quality=75&strip=all&1681355994&w=1024",
        //     "publishedAt": "2023-04-13T07:40:00Z",
        //     "content": "Johnny Depp’s first wife Lori Allison had some stern words about actress Amber Heard a year on from the pair’s highly publicized defamation trial.\r\nAllison wed the “Pirates of the Caribbean” actor in… [+2987 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "the-washington-post",
        //     "name": "The Washington Post"
        //     },
        //     "author": "Daniel Wu",
        //     "title": "Auctioneer admits to faking Basquiat paintings displayed in Orlando - The Washington Post",
        //     "description": "Michael Barzman pleaded guilty to misleading FBI agents about creating several works that he passed off as authentic Jean-Michel Basquiat paintings.",
        //     "url": "https://www.washingtonpost.com/nation/2023/04/12/orlando-basquiat-fake-paintings-plea/",
        //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KUHYX5GYYYI63LV5H7JKYTCGBI.jpg&w=1440",
        //     "publishedAt": "2023-04-13T05:30:00Z",
        //     "content": "Comment on this story\r\nComment\r\nThe paintings bore many of the hallmarks of Jean-Michel Basquiat, the late New York painter celebrated for his distillations of class and social conflict. They were pa… [+5317 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Eonline.com"
        //     },
        //     "author": "Gabrielle Chung",
        //     "title": "Katie Holmes Shares Rare Insight Into Daughter Suri Cruise's \"Visible\" Childhood - E! NEWS",
        //     "description": "Katie Holmes reflected on how 16-year-old daughter Suri Cruise—who she shares with ex-husband Tom Cruise—spent her childhood in the spotlight: \"She’s an incredible person.\"",
        //     "url": "https://www.eonline.com/news/1371198/katie-holmes-shares-rare-insight-into-daughter-suri-cruises-visible-childhood",
        //     "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2023228/rs_1200x1200-230328120304-1200-katie-holmes-suri-cruise-shutterstock_editorial_9309591q.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        //     "publishedAt": "2023-04-13T04:41:00Z",
        //     "content": "\"That's how I like to work. I like to have that kind of feeling,\" she explained. \"It was very meaningful to me to have her there, because she's my heart.\"\r\nAfter being followed by the paparazzi in th… [+711 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Hollywood Reporter"
        //     },
        //     "author": "Christy Piña",
        //     "title": "Jamie Foxx’s Daughter Says He’s on His “Way to Recovery” After Experiencing a Medical Complication - Hollywood Reporter",
        //     "description": "The Oscar winner has been shooting his upcoming Netflix film, 'Back in Action,' in Atlanta.",
        //     "url": "https://www.hollywoodreporter.com/news/general-news/jamie-foxx-experienced-medical-complication-in-recovery-1235373052/",
        //     "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/04/Jamie-Foxx-Getty-H-2023.jpg?w=1024",
        //     "publishedAt": "2023-04-13T02:56:03Z",
        //     "content": "Jamie Foxx is recovering from a medical complication. \r\nAccording to Foxx’s daughter, Corinne Foxx, the actor “experienced a medical complication” but was “already on his way to recovery.” TheOscar w… [+1735 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "YouTube"
        //     },
        //     "author": null,
        //     "title": "Survivor 44 | Know-It-Alls Ep 7 Recap - Rob Has a Podcast",
        //     "description": "Coming to you LIVE after the east coast airing of Survivor 44, Rob Cesternino and Stephen Fishbach, the Survivor Know-It-Alls, are back! Rob and Stephen disc...",
        //     "url": "https://www.youtube.com/watch?v=qj7GPnEyIQw",
        //     "urlToImage": "https://i.ytimg.com/vi/qj7GPnEyIQw/hqdefault.jpg",
        //     "publishedAt": "2023-04-13T02:26:33Z",
        //     "content": null
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Page Six"
        //     },
        //     "author": "Caroline Blair",
        //     "title": "'Pump Rules' recap: Lala says Raquel’s self-worth comes from a man’s approval - Page Six",
        //     "description": "The former friends got into a heated conversation while reflecting on previous digs they made about each other on “Vanderpump Rules” Wednesday.",
        //     "url": "https://pagesix.com/2023/04/12/pump-rules-recap-lala-says-raquels-self-worth-comes-from-a-mans-approval/",
        //     "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/04/NYPICHPDPICT000009532460.jpg?quality=75&strip=all&w=1200",
        //     "publishedAt": "2023-04-13T02:15:00Z",
        //     "content": "Lala Kent said Raquel Leviss sought validation from men during an explosive argument on Wednesday’s episode of “Vanderpump Rules.”\r\n“You know what I think? I think that your self-worth comes from app… [+3381 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "fox-news",
        //     "name": "Fox News"
        //     },
        //     "author": "Adam Sabes",
        //     "title": "Disneyland to close Splash Mountain in May, releases concept art for 'Tiana’s Bayou Adventure' - Fox News",
        //     "description": "Disney Parks says that Splash Mountain at Disneyland will close beginning on May 31 so that work can take place to build Tiana’s Bayou Adventure.",
        //     "url": "https://www.foxnews.com/us/disneyland-to-close-splash-mountain-may-releases-concept-art-for-tianas-bayou-adventure",
        //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/Untitled-design-670.png",
        //     "publishedAt": "2023-04-13T02:00:00Z",
        //     "content": "Disney Parks announced that Splash Mountain at Disneyland in Anaheim, California will be closing beginning May 31 and released conceptual artwork of what its replacement, Tianas Bayou Adventure, will… [+1986 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Daily Mail"
        //     },
        //     "author": "Paul Chavez",
        //     "title": "Mia Goth is set to join cast of highly anticipated reboot of Blade by Marvel Studios due out in 2024 - Daily Mail",
        //     "description": "Mia Goth, 29, will be joining the Marvel Cinematic Universe for the upcoming highly anticipated reboot of Blade.",
        //     "url": "https://www.dailymail.co.uk/tvshowbiz/article-11967035/Mia-Goth-set-join-cast-highly-anticipated-reboot-Blade-Marvel-Studios-2024.html",
        //     "urlToImage": "https://i.dailymail.co.uk/1s/2023/04/13/02/69770341-0-image-a-11_1681349976731.jpg",
        //     "publishedAt": "2023-04-13T01:43:37Z",
        //     "content": "Mia Goth will be joining the Marvel Cinematic Universe for the upcoming highly anticipated reboot of Blade.\r\nThe 29-year-old English actress is set to join the film starring Oscar-winning actor Maher… [+1928 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Daily Mail"
        //     },
        //     "author": "Jarret Thomas Sackman, Brian Marks",
        //     "title": "Kim Kardashian WILL attend Met Gala despite previous reports that she was cut from the guest list - Daily Mail",
        //     "description": "Kim Kardashian is set to attend the Met Gala this year, despite previous reports that she and her family were cut from the exclusive soiree by Vogue's legendary editor-in-chief Anna Wintour.",
        //     "url": "https://www.dailymail.co.uk/tvshowbiz/article-11967093/Kim-Kardashian-attend-Met-Gala-despite-previous-reports-cut-guest-list.html",
        //     "urlToImage": "https://i.dailymail.co.uk/1s/2023/04/13/01/69769553-0-image-a-103_1681347401760.jpg",
        //     "publishedAt": "2023-04-13T01:43:06Z",
        //     "content": "Kim Kardashian is set to attend the Met Gala this year, despite previous reports that she and her family were cut from the exclusive soiree by Vogue's legendary editor-in-chief Anna Wintour. \r\nAccord… [+4224 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "entertainment-weekly",
        //     "name": "Entertainment Weekly"
        //     },
        //     "author": "Lauren Huff",
        //     "title": "The Masked Singer reveals Dandelion as Alicia Witt | EW.com - Entertainment Weekly News",
        //     "description": "Plus, the actress and singer opens up about why doing the show \"forever changed\" the way she sings for people.",
        //     "url": "https://ew.com/tv/the-masked-singer-dandelion-revealed-alicia-witt/",
        //     "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1000%2C319%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F04%2F12%2FTHE-MASKED-SINGER-Dandelion-041223.jpg",
        //     "publishedAt": "2023-04-13T00:40:00Z",
        //     "content": "Warning: This article contains spoilers from Wednesday's episode of The Masked Singer.\r\nDandelion has officially been weeded out of the competition.\r\nThe delicate plant was the first contestant to go… [+8171 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Parade"
        //     },
        //     "author": "Carly Silva",
        //     "title": "Tim McGraw and Faith Hill's Daughter Snaps Bikini Photos While 'Getting Tan' - Yahoo Life",
        //     "description": "Gracie McGraw and her 'son' Baz are ready for summer.",
        //     "url": "https://parade.com/news/tim-mcgraw-faith-hill-daughter-gracie-sunbathing-bikini-dog-baz-photos-2023",
        //     "urlToImage": "https://media.zenfs.com/en/parade_250/e50612d90e5ee59e615a10743c3caa57",
        //     "publishedAt": "2023-04-13T00:34:00Z",
        //     "content": "Gracie McGraw and her 'son' Baz are ready for summer.\r\nTim McGrawand Faith Hill'sdaughter had herself an Instagram model moment!\r\nGracie McGraw, the eldest of the pair's three daughters, took advanta… [+1345 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Daily Mail"
        //     },
        //     "author": "Brian Marks",
        //     "title": "Yellowstone stars Hassie Harrison and Ryan Bingham confirm their relationship with a fiery kiss - Daily Mail",
        //     "description": "Yellowstone actors Hassie Harrison and Ryan Bingham publicly confirmed their relationship with a sweet but fiery photo shared to Instagram on Wednesday.",
        //     "url": "https://www.dailymail.co.uk/tvshowbiz/article-11966943/Yellowstone-stars-Hassie-Harrison-Ryan-Bingham-confirm-relationship-fiery-kiss.html",
        //     "urlToImage": "https://i.dailymail.co.uk/1s/2023/04/13/00/69767971-0-image-a-17_1681343474735.jpg",
        //     "publishedAt": "2023-04-13T00:16:21Z",
        //     "content": "Yellowstone actors Hassie Harrison and Ryan Bingham publicly confirmed their relationship with a sweet but fiery photo shared to Instagram on Wednesday.\r\nThe picture, which Ryan, 42, posted to his ac… [+2867 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "YouTube"
        //     },
        //     "author": null,
        //     "title": "Bella Hadid Supports Ariana Grande Against Body-Shaming | E! News - E! News",
        //     "description": "One day after Ariana Grande reflects on being body shamed in a video posted to TikTok, Bella Hadid shares a message in support of the singer: \"Love you Ari.\"...",
        //     "url": "https://www.youtube.com/watch?v=3v9bgVQmu-8",
        //     "urlToImage": "https://i.ytimg.com/vi/3v9bgVQmu-8/maxresdefault.jpg",
        //     "publishedAt": "2023-04-12T23:43:00Z",
        //     "content": null
        //     },
        //     {
        //     "source": {
        //     "id": "cnn",
        //     "name": "CNN"
        //     },
        //     "author": "Dan Heching",
        //     "title": "Snoopy is real! Meet Bayley, the cartoon dog's doppelganger - CNN",
        //     "description": "Calling all cute pet lovers, i.e., everyone.",
        //     "url": "https://www.cnn.com/2023/04/12/entertainment/snoopy-lookalike-bayley/index.html",
        //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230412185517-snoopy-042023.jpg?c=16x9&q=w_800,c_fill",
        //     "publishedAt": "2023-04-12T23:35:00Z",
        //     "content": "Calling all cute pet lovers, i.e., everyone.\r\nThe Instagram account for a certain Mini Sheepadoodle named Bayley is going viral, thanks to the adorable black-and-white poochs astounding and uncanny r… [+1389 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "The Guardian"
        //     },
        //     "author": "Guardian staff reporter",
        //     "title": "Anne Perry, killer turned crime writer, dies aged 84 - The Guardian",
        //     "description": "After murdering her friend’s mother as a teenager, as dramatised in film Heavenly Creatures, she turned to writing period thrillers",
        //     "url": "https://www.theguardian.com/books/2023/apr/12/anne-perry-killer-turned-writer-dies-84",
        //     "urlToImage": "https://i.guim.co.uk/img/media/b3bfa44f4ac7de669db2fe284df4b1d9807915c4/0_0_5616_3370/master/5616.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=eeae4df201a45af4d2d17690dc1a43b5",
        //     "publishedAt": "2023-04-12T23:30:00Z",
        //     "content": "A British crime writer who helped bludgeon her friends mother to death as a teenager and was the inspiration for Peter Jacksons film Heavenly Creatures has died in Los Angeles, her publisher announce… [+2218 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "YouTube"
        //     },
        //     "author": null,
        //     "title": "Renfield Review - IGN",
        //     "description": "Renfield reviewed by Matt Donato. Opens in theaters on April 14, 2023.If you're here for Nicolas Cage as an over-the-top Count Dracula, Renfield does not dis...",
        //     "url": "https://www.youtube.com/watch?v=D9KyoJisx-4",
        //     "urlToImage": "https://i.ytimg.com/vi/D9KyoJisx-4/maxresdefault.jpg",
        //     "publishedAt": "2023-04-12T23:28:44Z",
        //     "content": null
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "New York Post"
        //     },
        //     "author": "Katherine Donlevy",
        //     "title": "Rocker Nick Cave 'f--ks with people' by going to church and being conservative - New York Post ",
        //     "description": "“There’s certainly, a similar delight that I got in the early days that I get these days which is sort of f–king with people to some degree.”",
        //     "url": "https://nypost.com/2023/04/12/nick-cave-f-ks-with-people-by-going-to-church-and-being-conservative/",
        //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/nick-cave-comp.jpg?quality=75&strip=all&1681324521&w=1024",
        //     "publishedAt": "2023-04-12T23:26:00Z",
        //     "content": "Australian rocker Nick Cave said his modern mode of “f–king with people” consists of going to church and being a conservative.\r\nThe singer-songwriter told UnHerd podcast host Freddie Sayers last week… [+2739 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Daily Mail"
        //     },
        //     "author": "Carly Johnson",
        //     "title": "The Office's Rainn Wilson catches fan watching show next to him on flight - Daily Mail",
        //     "description": "Wilson's character Dwight Schrute appeared on the screen in front of the man several times while he captured the once in a lifetime moment on Instagram.",
        //     "url": "https://www.dailymail.co.uk/tvshowbiz/article-11966859/The-Offices-Rainn-Wilson-catches-fan-watching-flight.html",
        //     "urlToImage": "https://i.dailymail.co.uk/1s/2023/04/13/00/69766773-0-image-a-4_1681341071657.jpg",
        //     "publishedAt": "2023-04-12T23:19:07Z",
        //     "content": "A man was caught binging The Office on a flight by none other than Rainn Wilson, who played fan-favorite character Dwight Schrute on the hit sitcom.\r\nWilson, 57, secretly filmed the man and poked fun… [+3436 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "Daily Mail"
        //     },
        //     "author": "Christine Rendon",
        //     "title": "Kristin Cavallari embraces her noughties roots as she announces 2004 themed line for Uncommon James - Daily Mail",
        //     "description": "The MTV vet, 36, is paying tribute to the styles that were trending when she was starring on Laguna Beach with her new throwback line for Uncommon James.",
        //     "url": "https://www.dailymail.co.uk/tvshowbiz/article-11966825/Kristin-Cavallari-embraces-noughties-roots-announces-2004-themed-line-Uncommon-James.html",
        //     "urlToImage": "https://i.dailymail.co.uk/1s/2023/04/12/23/69766281-0-image-a-30_1681340106807.jpg",
        //     "publishedAt": "2023-04-12T23:08:00Z",
        //     "content": "Kristin Cavallari is embracing the noughties all over again.\r\nThe MTV vet, 36, is paying tribute to the styles that were trending when she was starring on Laguna Beach with her new throwback inspired… [+2517 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": null,
        //     "name": "INSIDER"
        //     },
        //     "author": "JP Mangalindan",
        //     "title": "Pedro Pascal on Trans Sister Lux: 'I Need Her More Than She Needs Me' - Insider",
        //     "description": "Pedro Pascal praised his trans sister Lux as \"one of the most powerful people\" he's ever known. Lux publicly came out as trans in 2021.",
        //     "url": "https://www.insider.com/pedro-pascal-trans-sister-lux-protective-side-is-lethal-2023-4",
        //     "urlToImage": "https://i.insider.com/64371d7a5f081b0019c0eb62?width=1200&format=jpeg",
        //     "publishedAt": "2023-04-12T22:23:59Z",
        //     "content": "For Pedro Pascal, his trans sister Lux remains \"one of the most powerful people\" he's ever known. \r\nIn an interview with Esquire, the actor opened up about his younger sister, who is 17 years his jun… [+2404 chars]"
        //     }
        ]
    }

    const [state, dispatch] = useReducer (EnterReducer, initialState)
    return(
        <EnterContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </EnterContext.Provider>
    )
}

export default EnterContext