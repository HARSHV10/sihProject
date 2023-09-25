import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {convertion,speakText,translation} from '../package/app.js'
import Work from './work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Work/>
 


    Vitaly Dmitrievich Buterin (Russian: Вита́лий Дми́триевич Буте́рин), better known as Vitalik Buterin (Russian: Вита́лик Буте́рин, born 31 January[2] 1994), is a Russian-Canadian computer programmer, and co-founder of Ethereum. Buterin became involved with cryptocurrency early in its inception, co-founding Bitcoin Magazine in 2011.[3][4][5] In 2014, Buterin deployed the Ethereum blockchain with Gavin Wood, Charles Hoskinson, Anthony Di Iorio, and Joseph Lubin.[6][7][8]

Early life and education
Buterin was born on January 31,1994 in Russia, Kolomna, in Russian family.[9][10] His father Dmitry was a computer scientist.[9] Buterin initially appeared to be slow in learning to speak before his unique talent for numbers and numeric patterns surfaced. Even before leaving Russia he started to play with Excel.[11] He and his parents lived in the area until the age of six, when his parents emigrated to Canada in search of better employment opportunities.[12] While in grade three of elementary school in Canada, Buterin was placed into a class for gifted children and was drawn to mathematics, programming, and economics.[13] Buterin then attended The Abelard School, a private high school in Toronto.[14] Buterin learned about Bitcoin from his father, Dimitry Buterin, at the age of 17.[12]

After high school, Buterin attended the University of Waterloo. There, he took advanced courses and was a research assistant for cryptographer Ian Goldberg, who co-created Off-the-Record Messaging and was the former board of directors chairman of the Tor Project.[15][16] In 2012, Buterin won a bronze medal in the International Olympiad in Informatics in Italy.[17]

In 2013, he visited developers in other countries who shared his enthusiasm for code. He returned to Toronto later that year and published a white paper proposing Ethereum.[18][19] He dropped out of university in 2014 when he was awarded with a grant of $100,000 from the Thiel Fellowship, a scholarship created by venture capitalist Peter Thiel and went to work on Ethereum full-time.[20]

On 30 November 2018, Buterin received an honorary doctorate from the Faculty of Business and Economics of the University of Basel on the occasion of the Dies Academicus.[21][clarification needed]

Career
Bitcoin Magazine
Main article: Bitcoin Magazine
In 2011, Buterin began writing for a publication called Bitcoin Weekly after meeting a person on a bitcoin forum with the aim of earning bitcoin.[22] The owner offered five bitcoin (about $3.50 at the time) to anyone who would write an article for him.[23] Buterin wrote for the site until it shut down soon thereafter due to insufficient revenue.[24] In September 2011, Mihai Alisie reached out to Buterin about starting a new print publication called Bitcoin Magazine, a position which Buterin would accept as the first co-founder, and contribute to as a leading writer.[22]

Bitcoin Magazine in 2012 later began publishing a print edition and has been referred to as the first serious publication dedicated to cryptocurrencies.[25] While working for Bitcoin Magazine, Buterin reached out to Jed McCaleb for a job at Ripple who accepted.[26] However, their proposed employment fell apart after Ripple was unable to support a U.S. visa for Buterin.[26]

In addition, he held a position on the editorial board of Ledger in 2016, a peer-reviewed scholarly journal that publishes full-length original research articles on the subjects of cryptocurrency and blockchain technology.[27][needs update]

Ethereum
Main article: Ethereum
Buterin is the inventor of Ethereum, described as a "decentralised mining network and software development platform rolled into one"[28] that facilitates the creation of new cryptocurrencies and programs that share a single blockchain (a cryptographic transaction ledger).[29][30][31]

Buterin first described Ethereum in a white paper[32] in November 2013.[33] Buterin had argued that bitcoin needed a scripting language for application development. But when he failed to gain agreement, he proposed development of a new platform with a more general scripting language.[34]: 88 

The Ethereum white paper was circulated and interest grew in the new protocol in late 2013 and early 2014. Buterin announced Ethereum more publicly at the North American Bitcoin Conference in Miami on 26 January. Buterin delivered a 25-minute speech, describing the general-purpose global computer operating on a decentralized permissionless network, ending with potential uses for Ethereum that ranged from crop insurance to decentralized exchanges to DAOs.[35][36]: 92, 110–130 [37]

About the Ethereum Project, Buterin said in 2020: "I am truly grateful to have the opportunity to work in such an interesting and interdisciplinary area of industry, where I have the chance to interact with cryptographers, mathematicians and economists prominent in their fields, to help build software and tools that already affect tens of thousands of people around the world, and to work on advanced problems in computer science, economics and philosophy every week."[38] However, in a 2018 New Yorker article, his father suggests that Buterin is trying to avoid the focus on him as the philosopher king of the blockchain world, stating "He is trying to focus his time on research. He's not too excited that the community assigns so much importance to him. He wants the community to be more resilient."[8]

Buterin has stated that he was driven to create decentralized money because his World of Warcraft character was nerfed, specifically by patch 3.1.0. He went on to say in his about.me bio, "I happily played World of Warcraft during 2007–2010, but one day Blizzard removed the damage component from my beloved warlock’s Siphon Life spell. I cried myself to sleep, and on that day I realized what horrors centralized services can bring. I soon decided to quit."[39][40]
    </div>
  )
}

export default App
