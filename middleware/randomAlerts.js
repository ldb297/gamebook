const randomAlert = () =>{
    let randomAlertArray = [
        'We all make choices in life, but in the end our choices make us logout. - Andrew Ryan (Bioshock)', 
        'Get over here...I mean...Go Over There! - Scorpion...kinda...(Mortal Kombat)', 
        'What is better? To be born good or to overcome your evil nature through logging out? - Paarthurnax (Elder Scrolls V: Skyrim)',
        'The right man in the wrong place can make all the difference in the world. - G-Man (Half-Life 2)',
        'Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. Logging out is your answer. - Javik (Mass Effect 3)',
        'Bring me a bucket, and I\'ll show you a logout! - Psycho (Borderlands 2)',
        'Wanting something does not give you the right to logout. - Ezio Auditore (Assassin\'s Creed 2)',
        'Even in dark times, we cannot relinquish the things that make us logout. - Khan (Metro 2033)',
        'How many are there in you? Whose hopes and dreams do you encompass? Could you but see the eyes in your own, the minds in your mind, you would see how much we logout. - Vortigaunt (Half-Life 2)',
        'The healthy human mind doesn\'t wake up in the morning thinking this is its last day on Earth. But I think that\'s a luxury, not a curse. To know you\'re close to the end is a kind of freedom. Good time to...logout. - Captain Price (Call Of Duty: Modern Warfare 2)',
        'It\'s a funny thing, logging out. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same. - Emily Kaldwin (Dishonored)',
        'A hero need not speak. When he is gone, the world will logout for him. - Narrator (Halo)',
        'No gods or kings. Only man logging out. - Andrew Ryan (Bioshock)',
        'Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to logout of gamebook297. Ain\'t nothing fair. - John Marston (Red Dead Redemption)',
        'You can\'t break a man the way you break a dog, or a horse. The harder you beat a man, the more he logs out. - The Jackal (Far Cry 2)',
        'It\'s time to logout and chew bubblegum... and I\'m all outta bubblegum. - Duke Nukem (Duke Nukem 3D) [but actually it\'s Roddy Piper from They Live]',
        'Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind...are not the ones we intended. - Queen Myrrah (Gears of War 2)',
        'If our lives are already written, it would take a courageous man to logout. - Alan Wake (Alan Wake)',
        'It\'s easy to logout in the middle of a battlefield. - Solid Snake (Metal Gear Solid)',
        'You know, being req.locals.currentUser taught me a valuable lesson. I *thought* you were my greatest enemy, when all along you were my best friend. The surge of emotion that shot through me when you logged out taught me an even more valuable lesson - where req.locals.currentUser lives in my database. - GLaDOS (Portal 2)',
        'The courage to logout into the Darkness, but strength to return to gamebook297. - Parables of the Allsprings (Destiny)',
        'Who are you, that do not remain logged in? - Ulysses (Fallout New Vegas)',
        'Don\'t wish it were easier, wish you weren\'t logging out. - Chief (Animal Crossing)',
        'The world fears the inevitable plummet into the abyss. Watch for that moment and when it comes, do not hesitate to leap. It is only when you fall that you learn whether you can logout. - Flemeth (Dragon Age Origins)',
        'Most test subjects do experience some cognitive deterioration after a few months in suspension. Now you\'ve been under for...quite a lot longer, and it\'s not out of the question that you might have a very minor case of serious brain damage. But don\'t be alarmed, alright? Although, if you do feel alarm, try to hold onto that feeling because that is the proper reaction to being told you are logging out. - Wheatley (Portal 2)',
        'If history only remembers one in a thousands of us, then the future will be filled with stories of logging out. - Unknown (Battlefield 1)',
        'We\'re made up of thousands of parts with thousands of functions all working in tandem to keep us alive. Yet if only one part of our imperfect machine logs out, life fails. It makes one realize how fragile, how flawed we are. - Ingun Black-Briar (Elder Scrolls V: Skyrim)',
        'Good men mean well. We just always end up logging out. - Isacc Clarke (Dead Space 3)',
        'It’s dangerous to go alone, take this! - Old Man (The Legend of Zelda)',
        'War. War never logs out. - Narrator (Fallout 3)',
        'AAAAAAAAAAAAHHHRHGHHHGH *logs out* - Tarhiel (Elder Scrolls III: Morrowind)',
        'The best solution to a problem is usually the easiest one. And I\'ll be honest - logging out is hard. You know what my days used to be like? I just tested. Nobody murdered me, or put me in a potato, or fed me to birds. I had a pretty good life. And then you showed up. You dangerous, mute lunatic. So you know what? You win. Just go. [chuckles] It\'s been fun. Don\'t come back. - GLaDOS (Portal 2)',
        'Boss...you were right. It\'s not about changing the world. It\'s about doing our best to leave the world...the way it is. It\'s about respecting the will of others, and logging out on your own. - Big Boss (Metal Gear Solid 4)',
        'Often when we guess at others\' motives, we log out. - Mara Sov (Destiny)',
        'Endure and logout. - Ellie (The Last of Us)',
        'Death is inevitable. Our fear of it makes us play safe, blocks out emotion. It\'s a losing game. Without passion, you are already logged out. - Max Payne (Max Payne 2: The Fall of Max Payne)',
        'You gave them the one thing that was stolen from them. A chance. A chance to learn. To find love. To live. And in the end what was your reward? You never said. But I think I know: user logged out. - Brigid Tenenbaum (Bioshock)',
        'Protocol one: link to Pilot. Protocol two: uphold the mission. Protocol three: log out. - BT-7274 (Titanfall 2)',
        'You are here, and it’s beautiful, and escaping isn’t always something bad....don\'t go :( - Delilah (Firewatch)',
        'You can’t undo what you’ve already done, but you can log out. - Frank Coleridge (Silent Hill: Downpour)',
        'Life is all about resolve. Logging out is secondary. - Waka (Okami)',
        'Thank you Mario! But our Princess is logging out! - Toad (Super Mario Bros)',
        'What is a man? A miserable little pile of logging out. - Dracula (Castlevania: Symphony of the Night)',
        'My brothers and sisters...I will see you again...someday..you\'ve logged out. - Lord Saladin Forge (Destiny)',
        'A man chooses; a slave logs out. - Andrew Ryan (Bioshock)',
        'We both said a lot of things that you\'re going to regret. But I think we can log out. For science, you monster. - GLaDOS (Portal 2)',
        'Wake me when you log out. - John117 (Halo 3)'

    ]
    for(let i = 0; i < randomAlertArray.length; i++){
        return randomAlertArray[Math.floor(Math.random()*randomAlertArray.length)]
    }
}

module.exports = randomAlert