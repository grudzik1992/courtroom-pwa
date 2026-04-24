const QUESTION_BANK = [
	{ s: 'Violent Verbs', t: 'mc', q: 'To commit a crime means to...', o: ['be a victim of crime', 'be a witness', 'carry out a crime', 'escape from prison'], a: 2, e: 'to commit a crime = popelnic przestepstwo.' },
	{ s: 'Violent Verbs', t: 'enpl', q: 'to witness sth', a: 'byc swiadkiem czegos', e: 'Example: Did anybody witness the attack?' },
	{ s: 'Violent Verbs', t: 'mc', q: 'The defendant ___ not guilty. Which verb fits?', o: ['sentenced', 'acquitted', 'pleaded', 'deliberated'], a: 2, e: 'to plead not guilty = nie przyznac sie do winy.' },
	{ s: 'Violent Verbs', t: 'enpl', q: 'to acquit sb of all charges', a: 'uniewinnic kogos od wszystkich zarzutow', e: 'The judge acquitted him of all charges.' },
	{ s: 'Violent Verbs', t: 'plen', q: 'zostac skazanym na 5 lat wiezienia', a: 'to be sentenced to 5 years in prison', e: 'She was sentenced to five years in prison.' },
	{ s: 'Violent Verbs', t: 'mc', q: 'The jury ___ for several hours before reaching a verdict.', o: ['committed', 'deliberated', 'struck', 'proved'], a: 1, e: 'to deliberate = obradowac, naradzac sie.' },
	{ s: 'Violent Verbs', t: 'enpl', q: 'struck from the record', a: 'usuniety z protokolu', e: 'That comment should be struck from the record.' },
	{ s: 'Violent Verbs', t: 'plen', q: 'udowodnic wine', a: 'to prove', e: 'We have to prove that his actions qualify as burglary.' },

	{ s: 'Notable Nouns', t: 'enpl', q: 'trial', a: 'proces', e: 'When will the trial begin?' },
	{ s: 'Notable Nouns', t: 'enpl', q: 'prosecution', a: 'oskarzenie', e: 'The prosecution has a solid case.' },
	{ s: 'Notable Nouns', t: 'mc', q: 'Her testimony is hearsay. What does hearsay mean?', o: ['concrete proof', 'secondhand unverified information', 'a confession', 'physical evidence'], a: 1, e: 'hearsay = informacja z drugiej reki, niebezposrednia.' },
	{ s: 'Notable Nouns', t: 'enpl', q: 'fate', a: 'los', e: 'His fate lies in the jury\'s hands.' },
	{ s: 'Notable Nouns', t: 'plen', q: 'zeznanie', a: 'testimony', e: 'A witness gives testimony in court.' },

	{ s: 'Common Crimes', t: 'enpl', q: 'to be found guilty of sth', a: 'zostac uznanym za winnego czegos', e: 'He was found guilty of murder.' },
	{ s: 'Common Crimes', t: 'enpl', q: 'shoplifting', a: 'kradziez sklepowa', e: 'You are accused of shoplifting.' },
	{ s: 'Common Crimes', t: 'plen', q: 'przemyt', a: 'smuggling', e: 'They were found not guilty of smuggling.' },
	{ s: 'Common Crimes', t: 'enpl', q: 'burglary', a: 'wlamanie', e: 'We have to prove that his actions qualify as burglary.' },
	{ s: 'Common Crimes', t: 'mc', q: 'She is ___ with kidnapping. Choose the correct verb.', o: ['accused', 'charged', 'found', 'sentenced'], a: 1, e: 'to be charged with sth = zostac oskarzonym o cos.' },

	{ s: 'Phrasal Verbs & Crime', t: 'enpl', q: 'to apprehend sb', a: 'aresztowac kogos', e: 'The police apprehended the thugs.' },
	{ s: 'Phrasal Verbs & Crime', t: 'enpl', q: 'thug', a: 'bandyta', e: 'An informal word for a violent criminal.' },
	{ s: 'Phrasal Verbs & Crime', t: 'plen', q: 'wladze', a: 'authorities', e: 'Authorities believe a gang broke into the jewellery store.' },
	{ s: 'Phrasal Verbs & Crime', t: 'mc', q: 'Four inmates ___ of prison yesterday.', o: ['broke into', 'broke out', 'tipped off', 'brought in'], a: 1, e: 'to break out of prison = uciec z wiezienia.' },
	{ s: 'Phrasal Verbs & Crime', t: 'enpl', q: 'anonymous', a: 'anonimowy', e: 'An anonymous caller tipped off the police.' },
	{ s: 'Phrasal Verbs & Crime', t: 'plen', q: 'dawac komus cynk', a: 'to tip off sb', e: 'An anonymous caller tipped off the police.' },
	{ s: 'Phrasal Verbs & Crime', t: 'mc', q: 'He was speeding, but he was ___ with a warning.', o: ['brought in', 'let off', 'mixed up', 'broken out'], a: 1, e: 'to be let off with a warning = zostac wypuszczonym z ostrzezeniem.' },
	{ s: 'Phrasal Verbs & Crime', t: 'plen', q: 'zadawac sie z kims ze zlym towarzystwem', a: 'to get mixed up with sb', e: 'She got mixed up with a bad crowd.' },
	{ s: 'Phrasal Verbs & Crime', t: 'enpl', q: 'suspect', a: 'podejrzany', e: 'The police brought in two suspects for questioning.' },
	{ s: 'Phrasal Verbs & Crime', t: 'enpl', q: 'to bring in sb', a: 'zatrzymac kogos', e: 'The police brought in two suspects for questioning.' },

	{ s: 'Conversation 1', t: 'enpl', q: 'assailant', a: 'napastnik, agresor', e: 'Can you identify the assailant from that night?' },
	{ s: 'Conversation 1', t: 'enpl', q: 'intent', a: 'zamiar', e: 'Was it the assailant\'s intent to steal the wallet?' },
	{ s: 'Conversation 1', t: 'enpl', q: 'sustained', a: 'podtrzymany', e: 'Judge: Sustained.' },
	{ s: 'Conversation 1', t: 'plen', q: 'przysiega w sadzie', a: 'oath', e: 'May I remind you that you\'re under oath?' },
	{ s: 'Conversation 1', t: 'mc', q: 'Beyond a shadow of a ___ means without any doubt.', o: ['reason', 'doubt', 'proof', 'verdict'], a: 1, e: 'beyond a shadow of a doubt = ponad wszelka watpliwosc.' },

	{ s: 'Conversation 2', t: 'enpl', q: 'to get under way', a: 'zaczynac, rozpoczynac', e: 'The trial is finally getting under way.' },
	{ s: 'Conversation 2', t: 'mc', q: 'The defendant stands charged with two ___ of murder.', o: ['cases', 'charges', 'counts', 'suits'], a: 2, e: 'count = osobny zarzut w akcie oskarzenia.' },
	{ s: 'Conversation 2', t: 'enpl', q: 'prematurely', a: 'przedwczesnie', e: 'Two souls whose lives were taken from them prematurely.' },
	{ s: 'Conversation 2', t: 'enpl', q: 'in cold blood', a: 'z zimna krwia', e: 'The defendant committed these crimes in cold blood.' },
	{ s: 'Conversation 2', t: 'enpl', q: 'heinous', a: 'potworny, ohydny', e: 'She is accused of a heinous crime.' },
	{ s: 'Conversation 2', t: 'plen', q: 'nie miec wczesniejszych konfliktow z prawem', a: 'to have no previous run-ins with the law', e: 'She\'s had no previous run-ins with the law.' },
	{ s: 'Conversation 2', t: 'enpl', q: 'to refrain from sth', a: 'powstrzymac sie od czegos', e: 'You must refrain from communicating with one another.' },

	{ s: 'People in a Courtroom', t: 'enpl', q: 'plaintiff', a: 'powod, strona pozywajaca', e: 'The plaintiff believes she is owed damages.' },
	{ s: 'People in a Courtroom', t: 'mc', q: 'I think he\'ll ___ off. It means he won\'t be punished.', o: ['get', 'let', 'take', 'break'], a: 0, e: 'to get off = ujsc na sucho.' },
	{ s: 'People in a Courtroom', t: 'enpl', q: 'wet behind the ears', a: 'miec mleko pod nosem', e: 'This prosecutor is a little wet behind the ears.' },
	{ s: 'People in a Courtroom', t: 'enpl', q: 'to call to the stand', a: 'wezwac kogos na swiadka', e: 'We have another witness to call to the stand.' },
	{ s: 'People in a Courtroom', t: 'enpl', q: 'bailiff', a: 'straznik sadowy', e: 'The bailiff will escort the jury to their seats.' },

	{ s: 'Punishments & Idioms', t: 'plen', q: 'przeprowadzic sledztwo', a: 'to carry out an investigation', e: 'The police will need to carry out their investigation.' },
	{ s: 'Punishments & Idioms', t: 'enpl', q: 'infamy', a: 'nieslawa, zla slawa', e: 'He won\'t get a fair trial because of his infamy.' },
	{ s: 'Punishments & Idioms', t: 'mc', q: 'I think he\'s ___ the death penalty.', o: ['facing', 'carrying', 'taking', 'meeting'], a: 0, e: 'to face sth = mierzyc sie z czyms.' },
	{ s: 'Punishments & Idioms', t: 'fill', q: 'Complete: She pulled the ___ over everyone\'s eyes.', a: 'wool', e: 'to pull the wool over someone\'s eyes = mydlic komus oczy.' },
	{ s: 'Punishments & Idioms', t: 'fill', q: 'Complete: No one can escape the long ___ of the law.', a: 'arm', e: 'the long arm of the law = dlugie ramie prawa.' },
	{ s: 'Punishments & Idioms', t: 'fill', q: 'Complete: They really threw the ___ at him.', a: 'book', e: 'to throw the book at sb = zasadzic najwyzszy wymiar kary.' },
	{ s: 'Punishments & Idioms', t: 'enpl', q: 'to do time', a: 'odsiedziec wyrok w wiezieniu', e: 'She\'s already done time.' },
	{ s: 'Punishments & Idioms', t: 'enpl', q: 'to keep on the straight and narrow', a: 'trzymac sie z dala od klopotow', e: 'Police have to keep people on the straight and narrow.' },

	{ s: 'Legalese & Society', t: 'enpl', q: 'litigious', a: 'lubiacy sie procesowac', e: 'Americans are often considered litigious.' },
	{ s: 'Legalese & Society', t: 'plen', q: 'pozwac kogos', a: 'to sue sb', e: 'Coffee too hot? Sue somebody!' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'grievance', a: 'zal, skarga', e: 'People seek compensation for some grievance.' },
	{ s: 'Legalese & Society', t: 'mc', q: 'Germany ___ the cake with 123 lawsuits per 1,000 citizens.', o: ['wins', 'takes', 'gets', 'holds'], a: 1, e: 'to take the cake = zajmowac pierwsze miejsce.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'lucrative', a: 'lukratywny, zyskowny', e: 'Being a lawyer can be quite lucrative.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'per capita', a: 'na glowe mieszkanca', e: 'The USA has the most lawyers per capita.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'legalese', a: 'terminologia prawnicza, zargon prawniczy', e: 'Complex legal English is called legalese.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'irksome', a: 'meczacy, denerwujacy', e: 'These irksome expressions confuse even native speakers.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'affidavit', a: 'oswiadczenie zlozone pod przysiega', e: 'A written sworn statement used as evidence.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'subpoena', a: 'wezwanie do stawiennictwa pod grozba kary', e: 'A subpoena requires a person to appear in court.' },
	{ s: 'Legalese & Society', t: 'mc', q: 'Pro bono means...', o: ['for money', 'for the public good or free of charge', 'under oath', 'a court order'], a: 1, e: 'pro bono = dla dobra publicznego, bez oplaty.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'modus operandi', a: 'sposob dzialania', e: 'The criminal\'s modus operandi was always the same.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'part and parcel', a: 'nieodlaczny element', e: 'Latin terms are part and parcel of any lawyer\'s day.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'quid pro quo', a: 'cos za cos, rewanz', e: 'A quid pro quo is an exchange.' },

	{ s: 'Violent Verbs', t: 'enpl', q: 'courtroom', a: 'sala sadowa', e: 'A courtroom is the room where a trial takes place.' },
	{ s: 'Notable Nouns', t: 'enpl', q: 'evidence', a: 'dowod', e: 'Evidence is used to prove guilt or innocence.' },
	{ s: 'Notable Nouns', t: 'enpl', q: 'verdict', a: 'werdykt', e: 'The jury reaches a verdict after deliberation.' },
	{ s: 'Notable Nouns', t: 'enpl', q: 'concrete proof', a: 'niezbity dowod', e: 'Hearsay is not concrete proof.' },
	{ s: 'Phrasal Verbs & Crime', t: 'enpl', q: 'to beat up sb', a: 'pobic kogos', e: 'The thug beat up the victim before running away.' },
	{ s: 'Phrasal Verbs & Crime', t: 'plen', q: 'wlamac sie do czegos', a: 'to break into sth', e: 'A gang broke into the jewellery store.' },
	{ s: 'Phrasal Verbs & Crime', t: 'enpl', q: 'jewellery store', a: 'sklep jubilerski', e: 'A gang broke into the jewellery store.' },
	{ s: 'Phrasal Verbs & Crime', t: 'enpl', q: 'inmate', a: 'wiezien', e: 'Four inmates broke out of prison yesterday.' },
	{ s: 'Phrasal Verbs & Crime', t: 'enpl', q: 'questioning', a: 'przesluchanie', e: 'The police brought in two suspects for questioning.' },
	{ s: 'Conversation 1', t: 'plen', q: 'portfel', a: 'wallet', e: 'The attacker ran off with a wallet.' },
	{ s: 'Conversation 1', t: 'plen', q: 'czysta spekulacja', a: 'pure speculation', e: 'Objection! That\'s pure speculation.' },
	{ s: 'Conversation 2', t: 'enpl', q: 'opening remarks', a: 'mowy wstepne', e: 'The prosecution may now make its opening remarks.' },
	{ s: 'Conversation 2', t: 'enpl', q: 'physical evidence', a: 'dowody rzeczowe', e: 'Physical evidence supports the case.' },
	{ s: 'Conversation 2', t: 'enpl', q: 'testimonial evidence', a: 'dowody z zeznan', e: 'Testimonial evidence comes from witnesses.' },
	{ s: 'Conversation 2', t: 'plen', q: 'bledne rozpoznanie sprawcy', a: 'mistaken identity', e: 'The defence argued it was a case of mistaken identity.' },
	{ s: 'People in a Courtroom', t: 'enpl', q: 'stenographer', a: 'stenograf, protokolant sadowy', e: 'The stenographer records what is said in court.' },
	{ s: 'People in a Courtroom', t: 'enpl', q: 'damages', a: 'odszkodowanie', e: 'The plaintiff believes she is owed damages.' },
	{ s: 'Punishments & Idioms', t: 'plen', q: 'lapowki pod stolem', a: 'payments under the table', e: 'Payments under the table means bribery.' },
	{ s: 'Punishments & Idioms', t: 'plen', q: 'robota od srodka', a: 'inside job', e: 'An inside job means help from someone inside.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'lawsuit', a: 'pozew sadowy', e: 'A lawsuit is a case brought before a court.' },
	{ s: 'Legalese & Society', t: 'plen', q: 'szukac odszkodowania', a: 'to seek compensation', e: 'Many claimants seek compensation for some grievance.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'lawyer', a: 'prawnik', e: 'The USA has over a million lawyers.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'prestigious', a: 'prestizowy', e: 'Law firms can be prestigious organisations.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'injunction', a: 'nakaz sadowy', e: 'An injunction is a court order.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'habeas corpus', a: 'ochrona przed bezprawnym aresztowaniem', e: 'Habeas corpus protects against unlawful detention.' },
	{ s: 'Legalese & Society', t: 'enpl', q: 'per se', a: 'samo przez sie', e: 'A thing may not be wrong per se, but still cause problems in context.' },

	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: Hardly a day goes by when I do not have some kind of training session. Missing word: ___', a: 'hardly', e: 'hardly a day goes by = prawie nie ma dnia, zeby cos sie nie wydarzylo.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: ___ on my rest days, I usually kick around a ball with some friends.', a: 'even', e: 'even on my rest days = nawet w dni odpoczynku.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: I would ___ call myself sporty.', a: 'hardly', e: 'I would hardly call myself sporty = raczej nie nazwalbym sie wysportowanym.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: I go ___ if it is miserable weather.', a: 'even', e: 'even if = nawet jesli.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: ___ though I enjoy sports, I hardly ever get to play them these days.', a: 'even', e: 'even though = mimo ze.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: I ___ ever get to play them these days.', a: 'hardly', e: 'hardly ever = prawie nigdy.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: I ___ ever miss a match.', a: 'hardly', e: 'If you hardly ever miss a match, you almost always watch it.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: I think I have become ___ more obsessed this season.', a: 'even', e: 'even more = jeszcze bardziej.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: I ___ know someone in the national team.', a: 'even', e: 'I even know someone adds emphasis.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: I know ___ anyone plays it compared to some other sports.', a: 'hardly', e: 'hardly anyone = prawie nikt.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: I ___ follow any sports to be honest.', a: 'hardly', e: 'I hardly follow any sports = prawie nie sledze sportu.', k: 'sentence' },
	{ s: 'Language Focus: even / hardly', t: 'fill', q: 'Complete: I do not ___ know which sport they are talking about anymore.', a: 'even', e: 'I do not even know = nawet nie wiem.', k: 'sentence' },

	{ s: 'Courtroom Sentences', t: 'enpl', q: 'The defendant stands charged with two counts of murder.', a: 'oskarzonemu postawiono dwa zarzuty morderstwa', e: 'count means a separate charge in legal English.', k: 'sentence' },
	{ s: 'Courtroom Sentences', t: 'enpl', q: 'The physical and testimonial evidence will show beyond a reasonable doubt that the defendant committed these crimes in cold blood.', a: 'dowody rzeczowe i zeznania wykaza ponad uzasadniona watpliwosc, ze oskarzony popelnil te zbrodnie z zimna krwia', e: 'This sentence combines key prosecution vocabulary from the article.', k: 'sentence' },
	{ s: 'Courtroom Sentences', t: 'enpl', q: 'This is simply an unfortunate case of mistaken identity.', a: 'to po prostu niefortunny przypadek blednego rozpoznania sprawcy', e: 'The defence uses this phrase to suggest the wrong person was identified.', k: 'sentence' },
	{ s: 'Courtroom Sentences', t: 'enpl', q: 'Could the stenographer please reread that last statement by the defendant?', a: 'czy protokolant moglby ponownie odczytac ostatnie oswiadczenie oskarzonego', e: 'to reread = przeczytac cos ponownie.', k: 'sentence' },
	{ s: 'Courtroom Sentences', t: 'enpl', q: 'The bailiff will now escort the jury to their seats.', a: 'straznik sadowy odprowadzi teraz lawe przysieglych na ich miejsca', e: 'to escort = odprowadzic, eskortowac.', k: 'sentence' },
	{ s: 'Courtroom Sentences', t: 'plen', q: 'Anonimowy rozmowca dal cynk policji.', a: 'An anonymous caller tipped off the police.', e: 'to tip off = dac cynk.', k: 'sentence' },
	{ s: 'Courtroom Sentences', t: 'plen', q: 'Czterech wiezniow ucieklo wczoraj z wiezienia.', a: 'Four inmates broke out of prison yesterday.', e: 'to break out of prison = uciec z wiezienia.', k: 'sentence' },
	{ s: 'Courtroom Sentences', t: 'plen', q: 'Policja zatrzymala dwoch podejrzanych do przesluchania.', a: 'The police brought in two suspects for questioning.', e: 'to bring in = zatrzymac lub doprowadzic.', k: 'sentence' },
	{ s: 'Courtroom Sentences', t: 'plen', q: 'Ten prokurator ma jeszcze mleko pod nosem, wiec mamy realna szanse.', a: 'This prosecutor is a little wet behind the ears, so we stand a fighting chance.', e: 'wet behind the ears = niedoswiadczony.', k: 'sentence' },
	{ s: 'Courtroom Sentences', t: 'plen', q: 'Przyjmowal lapowki pod stolem.', a: 'He was accepting payments under the table.', e: 'under the table = korupcyjnie, nieoficjalnie.', k: 'sentence' },
	{ s: 'Courtroom Dialogues', t: 'enpl', q: 'This case is so captivating. There are so many twists and turns.', a: 'Ta sprawa jest tak wciagajaca. Jest w niej tyle zwrotow akcji.', e: 'captivating = porywajacy, twists and turns = zwroty akcji.', k: 'sentence' },
	{ s: 'Courtroom Dialogues', t: 'enpl', q: 'The defendant is guilty, no ifs, ands, or buts.', a: 'Oskarzony jest winny, bez zadnych ale.', e: 'no ifs, ands, or buts = bez zadnych ale i watpliwosci.', k: 'sentence' },
	{ s: 'Courtroom Dialogues', t: 'enpl', q: 'The last witness\'s testimony was shaky at best.', a: 'Zeznanie ostatniego swiadka bylo w najlepszym razie watpliwe.', e: 'shaky at best = w najlepszym razie watpliwy.', k: 'sentence' },
	{ s: 'Courtroom Dialogues', t: 'enpl', q: 'The attorney was totally badgering the witness.', a: 'Adwokat doslownie zasypywal swiadka pytaniami.', e: 'to badger sb = zasypywac kogos pytaniami.', k: 'sentence' },
	{ s: 'Courtroom Dialogues', t: 'enpl', q: 'The matching DNA found at the scene of the crime and at the defendant\'s home is basically a smoking gun.', a: 'Pasujace DNA znalezione na miejscu zbrodni i w domu oskarzonego to w zasadzie koronny dowod.', e: 'a smoking gun = rozstrzygajacy, bardzo mocny dowod.', k: 'sentence' },
	{ s: 'Courtroom Dialogues', t: 'plen', q: 'Oskarzony po prostu zamydlil ci oczy.', a: 'The defendant simply pulled the wool over your eyes.', e: 'to pull the wool over someone\'s eyes = mydlic komus oczy.', k: 'sentence' },
	{ s: 'Courtroom Dialogues', t: 'plen', q: 'Ale oskarzony ma calkiem mocne alibi.', a: 'But the defendant has a pretty solid alibi.', e: 'solid alibi = mocne alibi.', k: 'sentence' },
	{ s: 'Courtroom Dialogues', t: 'plen', q: 'On moze po prostu zmyslil jakas skomplikowana historie.', a: 'He may have just fabricated some elaborate story.', e: 'to fabricate sth = zmyslic cos.', k: 'sentence' },
	{ s: 'Courtroom Dialogues', t: 'plen', q: 'To nie brzmi dla mnie niepodwazalnie.', a: 'It is not airtight for me.', e: 'airtight = niepodwazalny.', k: 'sentence' },
	{ s: 'Courtroom Dialogues', t: 'plen', q: 'Ma kryminalna przeszlosc i odsiedzial juz wyrok, wiec procedura prawna nie jest mu obca.', a: 'He has a prior criminal record and has already done time, so he is no stranger to the legal process.', e: 'to do time = odsiedziec wyrok.', k: 'sentence' },
	{ s: 'Legalese Sentences', t: 'enpl', q: 'American courtrooms are crammed with people seeking compensation for some kind of grievance.', a: 'Amerykanskie sale sadowe sa wypelnione ludzmi szukajacymi odszkodowania za jakas krzywde lub skarge.', e: 'to seek compensation = szukac odszkodowania, grievance = skarga lub zal.', k: 'sentence' },
	{ s: 'Legalese Sentences', t: 'enpl', q: 'Germany takes the cake with a whopping 123 lawsuits per 1,000 citizens.', a: 'Niemcy bija wszystkich na glowe z ogromna liczba 123 pozwow na 1000 obywateli.', e: 'to take the cake = zajmowac pierwsze miejsce.', k: 'sentence' },
	{ s: 'Legalese Sentences', t: 'enpl', q: 'You will not have to travel far to come across someone who buys into the stereotype that Americans are obsessed with lawsuits.', a: 'Nie trzeba daleko szukac, zeby spotkac kogos, kto wierzy w stereotyp, ze Amerykanie maja obsesje na punkcie pozwow.', e: 'to come across sb = natknac sie na kogos.', k: 'sentence' },
	{ s: 'Legalese Sentences', t: 'plen', q: 'Kancelarie prawne moga byc prestizowymi organizacjami, a bycie prawnikiem moze byc bardzo lukratywne.', a: 'Law firms can be prestigious organisations, and being a lawyer can be quite lucrative.', e: 'prestigious = prestizowy, lucrative = lukratywny.', k: 'sentence' },
	{ s: 'Legalese Sentences', t: 'plen', q: 'Zlozony angielski jezyk prawniczy, nazywany legalese, moze byc cierniem w boku praktycznie kazdego.', a: 'Complex legal English, known as legalese, can be a thorn in the side of virtually anyone.', e: 'a thorn in the side = cos bardzo uciazliwego.', k: 'sentence' },
	{ s: 'Legalese Sentences', t: 'plen', q: 'Lacinskie terminy, takie jak pro bono, habeas corpus i modus operandi, sa nieodlaczna czescia dnia kazdego prawnika.', a: 'Latin terms like pro bono, habeas corpus, and modus operandi are part and parcel of any lawyer\'s day.', e: 'part and parcel = nieodlaczny element.', k: 'sentence' },
].map((item, index) => ({ ...item, id: item.id || `q${index + 1}`, k: item.k || 'word' }));

const SETTINGS = {
	preset: 'exam',
	content: 'mix',
	direction: 'mix',
	format: 'mix',
	order: 'random',
	limit: '30',
};

const STORAGE_KEYS = {
	progress: 'courtroom_progress_v2',
	bestPct: 'courtroom_best_pct_v2',
};

let qs = [];
let cur = 0;
let score = 0;
let wrongs = 0;
let res = [];
let answered = false;
let hintUsed = false;
let repeatCounts = {};
let progressData = loadProgress();
let sessionMeta = { reviewFallback: false };

function shuffle(list) {
	const arr = [...list];
	for (let i = arr.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

function sample(list, count) {
	return shuffle(list).slice(0, count);
}

function normalizeText(value) {
	return String(value || '')
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[’']/g, '')
		.replace(/[^a-z0-9\s-]/g, ' ')
		.replace(/\b(a|an|the)\b/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function loadProgress() {
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEYS.progress) || '{}');
	} catch {
		return {};
	}
}

function saveProgress() {
	localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progressData));
}

function getStats(id) {
	return progressData[id] || { seen: 0, correct: 0, wrong: 0, streak: 0, nextReview: 0, hints: 0 };
}

function reviewDelayMs(streak) {
	if (streak <= 1) return 6 * 60 * 60 * 1000;
	if (streak === 2) return 24 * 60 * 60 * 1000;
	if (streak === 3) return 72 * 60 * 60 * 1000;
	return 7 * 24 * 60 * 60 * 1000;
}

function updateProgress(id, ok, usedHint) {
	const now = Date.now();
	const stats = { ...getStats(id) };
	stats.seen += 1;
	if (usedHint) stats.hints += 1;
	if (ok) {
		stats.correct += 1;
		stats.streak += 1;
		stats.nextReview = now + reviewDelayMs(stats.streak);
	} else {
		stats.wrong += 1;
		stats.streak = 0;
		stats.nextReview = now;
	}
	progressData[id] = stats;
	saveProgress();
}

function difficultyOf(item) {
	const stats = getStats(item.id);
	const dueBoost = stats.nextReview && stats.nextReview <= Date.now() ? 3 : 0;
	return (stats.wrong * 3) + (stats.hints || 0) + dueBoost - stats.correct - stats.streak;
}

function isDue(item) {
	const stats = getStats(item.id);
	if (!stats.seen) return false;
	return stats.nextReview <= Date.now() || stats.wrong > stats.correct;
}

function getAnswerVariants(answer) {
	const source = String(answer || '');
	const parts = [source, ...source.split(','), ...source.split(';')];
	const variants = new Set();
	parts.forEach(part => {
		const clean = normalizeText(part);
		if (!clean) return;
		variants.add(clean);
		if (clean.startsWith('to ')) variants.add(clean.slice(3));
	});
	return [...variants];
}

function buildHintText(answer) {
	const display = String(answer || '').split(';')[0].trim();
	const words = display.split(/\s+/).filter(Boolean);
	const masked = words.map(word => {
		const plain = word.replace(/[^a-zA-Z0-9-]/g, '');
		if (!plain) return word;
		const start = plain.slice(0, Math.min(2, plain.length));
		return start + '.'.repeat(Math.max(plain.length - start.length, 1));
	}).join(' ');
	return `${masked} · ${words.length} wyraz(y)`;
}

function getReviewPool() {
	const due = QUESTION_BANK.filter(isDue).sort((left, right) => difficultyOf(right) - difficultyOf(left));
	if (due.length) return due;
	sessionMeta.reviewFallback = true;
	return [...QUESTION_BANK].sort((left, right) => difficultyOf(right) - difficultyOf(left)).slice(0, 20);
}

function matchesContent(item) {
	if (SETTINGS.content === 'words') return item.k !== 'sentence';
	if (SETTINGS.content === 'sentences') return item.k === 'sentence';
	return true;
}

function matchesDirection(item) {
	if (SETTINGS.direction === 'mix') return true;
	return item.t === SETTINGS.direction;
}

function getDisplayAnswer(item) {
	return String(item.a || '').trim();
}

function generatedOptionsFor(item) {
	const correct = getDisplayAnswer(item);
	const sameBucket = QUESTION_BANK
		.filter(candidate => candidate.id !== item.id && candidate.t === item.t && candidate.k === item.k)
		.map(getDisplayAnswer);
	const fallbackBucket = QUESTION_BANK
		.filter(candidate => candidate.id !== item.id && candidate.t === item.t)
		.map(getDisplayAnswer);
	const unique = [...new Set([...sameBucket, ...fallbackBucket].filter(option => normalizeText(option) !== normalizeText(correct)))];
	const distractors = sample(unique, 3);
	if (distractors.length < 3) return null;
	return shuffle([correct, ...distractors]);
}

function makeBadge(questionType, sourceType) {
	if (questionType === 'mc') {
		if (sourceType === 'enpl') return { cls: 'tb-mc', label: 'ABCD · EN -> PL' };
		if (sourceType === 'plen') return { cls: 'tb-mc', label: 'ABCD · PL -> EN' };
		if (sourceType === 'fill') return { cls: 'tb-mc', label: 'ABCD · Luka' };
		return { cls: 'tb-mc', label: 'ABCD · Teoria' };
	}
	if (sourceType === 'enpl') return { cls: 'tb-en', label: 'EN -> PL' };
	if (sourceType === 'plen') return { cls: 'tb-pl', label: 'PL -> EN' };
	return { cls: 'tb-fill', label: 'Uzupełnij luke' };
}

function makeMcQuestion(item, isRepeat = false) {
	if (item.t === 'mc') {
		return {
			sessionId: `${item.id}:mc:${Math.random().toString(36).slice(2, 8)}`,
			sourceId: item.id,
			source: item,
			s: isRepeat ? `${item.s} · powtorka` : item.s,
			t: 'mc',
			q: item.q,
			o: [...item.o],
			a: item.a,
			e: item.e,
			badge: makeBadge('mc', 'mc'),
			variant: 'mc',
		};
	}
	const options = generatedOptionsFor(item);
	if (!options) return null;
	const answer = getDisplayAnswer(item);
	const answerIndex = options.findIndex(option => normalizeText(option) === normalizeText(answer));
	if (answerIndex === -1) return null;
	return {
		sessionId: `${item.id}:mc:${Math.random().toString(36).slice(2, 8)}`,
		sourceId: item.id,
		source: item,
		s: isRepeat ? `${item.s} · powtorka` : item.s,
		t: 'mc',
		q: item.q,
		o: options,
		a: answerIndex,
		e: item.e,
		badge: makeBadge('mc', item.t),
		variant: 'mc',
	};
}

function makeTypedQuestion(item, isRepeat = false) {
	if (item.t === 'mc') return null;
	return {
		sessionId: `${item.id}:typed:${Math.random().toString(36).slice(2, 8)}`,
		sourceId: item.id,
		source: item,
		s: isRepeat ? `${item.s} · powtorka` : item.s,
		t: item.t,
		q: item.q,
		a: item.a,
		accept: getAnswerVariants(item.a),
		e: item.e,
		badge: makeBadge('typed', item.t),
		variant: 'typed',
	};
}

function buildQuestionFromItem(item, forcedVariant, isRepeat = false) {
	const desired = forcedVariant || (SETTINGS.format === 'mc'
		? 'mc'
		: SETTINGS.format === 'typed'
			? 'typed'
			: item.t === 'mc'
				? 'mc'
				: item.k === 'sentence'
					? 'typed'
				: Math.random() < 0.6
					? 'mc'
					: 'typed');
	if (desired === 'mc') return makeMcQuestion(item, isRepeat) || makeTypedQuestion(item, isRepeat);
	return makeTypedQuestion(item, isRepeat) || makeMcQuestion(item, isRepeat);
}

function orderDeck(deck) {
	if (SETTINGS.order === 'section') {
		return [...deck].sort((left, right) => left.s.localeCompare(right.s) || left.q.localeCompare(right.q));
	}
	if (SETTINGS.order === 'hard') {
		return [...deck].sort((left, right) => difficultyOf(right.source) - difficultyOf(left.source));
	}
	return shuffle(deck);
}

function fallbackDeck() {
	return orderDeck(QUESTION_BANK.map(item => buildQuestionFromItem(item)).filter(Boolean)).slice(0, 15);
}

function buildDeck() {
	sessionMeta.reviewFallback = false;
	let pool = SETTINGS.preset === 'review' ? getReviewPool() : QUESTION_BANK;
	pool = pool.filter(matchesContent).filter(matchesDirection);
	if (SETTINGS.format === 'typed') pool = pool.filter(item => item.t !== 'mc');
	if (SETTINGS.format === 'mc') pool = pool.filter(item => ['mc', 'enpl', 'plen', 'fill'].includes(item.t));
	if (!pool.length) pool = SETTINGS.preset === 'review' ? getReviewPool() : QUESTION_BANK.filter(matchesContent);
	let deck = pool.map(item => buildQuestionFromItem(item)).filter(Boolean);
	deck = orderDeck(deck);
	const limit = SETTINGS.limit === 'all' ? deck.length : Math.min(deck.length, parseInt(SETTINGS.limit, 10));
	return deck.slice(0, limit || deck.length);
}

function setSetting(btn) {
	const { group, value } = btn.dataset;
	SETTINGS[group] = value;
	document.querySelectorAll(`.chip[data-group='${group}']`).forEach(node => node.classList.remove('sel'));
	btn.classList.add('sel');
	refreshHomeStats();
}

function showScreen(id) {
	document.querySelectorAll('.screen').forEach(node => node.classList.remove('active'));
	document.getElementById(id).classList.add('active');
	if (id === 'results') document.getElementById(id).scrollTop = 0;
}

function startQuiz() {
	qs = buildDeck();
	if (!qs.length) qs = fallbackDeck();
	cur = 0;
	score = 0;
	wrongs = 0;
	res = [];
	answered = false;
	hintUsed = false;
	repeatCounts = {};
	showScreen('quiz');
	render();
}

function retry() {
	startQuiz();
}

function goHome() {
	refreshHomeStats();
	showScreen('home');
}

function updateTop() {
	const total = qs.length || 1;
	document.getElementById('prog').style.width = `${(cur / total) * 100}%`;
	document.getElementById('qctr').textContent = `${Math.min(cur + 1, total)}/${total}`;
	document.getElementById('sc').textContent = score;
	document.getElementById('wr').textContent = wrongs;
	document.getElementById('sect-pill').textContent = qs[cur] ? qs[cur].s : '';
}

function refreshHomeStats() {
	const best = localStorage.getItem(STORAGE_KEYS.bestPct);
	const due = QUESTION_BANK.filter(isDue).length;
	document.getElementById('total-items').textContent = QUESTION_BANK.length;
	document.getElementById('best-score').textContent = best ? `${best}%` : '—';
	document.getElementById('due-count').textContent = due;
	const note = SETTINGS.preset === 'review'
		? (due
			? `Masz ${due} zaleglych kart do powtorki. Najtrudniejsze beda pokazane jako pierwsze.`
			: 'Brak zaleglych kart. Tryb powtorek uzyje teraz najslabszych pytan z historii.')
		: 'Bledne pytania wracaja po kilku kartach, a tryb powtorek zbiera zalegle hasla z historii.';
	document.getElementById('home-note').textContent = note;
	document.getElementById('start-btn').textContent = SETTINGS.preset === 'review'
		? 'Uruchom powtorki ->'
		: SETTINGS.preset === 'learn'
			? 'Rozpocznij nauke ->'
			: 'Rozpocznij sesje ->';
}

function renderBottom(question) {
	const nextLabel = cur < qs.length - 1 ? 'Nastepne pytanie ->' : 'Zobacz wyniki ->';
	const mainButton = question.t === 'mc'
		? `<button class='btn-next' id='nav-btn' onclick='nxt()' style='display:none'>${nextLabel}</button>`
		: `<button class='btn-check' id='nav-btn' onclick='chkFill()'>Sprawdz</button>`;
	return `
		<div class='quiz-tools'>
			<button class='btn-tool' id='hint-btn' onclick='useHint()'>Podpowiedz</button>
			<button class='btn-tool' id='give-up-btn' onclick='giveUp()'>Nie wiem</button>
		</div>
		${mainButton}`;
}

function render() {
	if (cur >= qs.length) {
		showResults();
		return;
	}
	answered = false;
	hintUsed = false;
	const q = qs[cur];
	updateTop();
	const body = document.getElementById('qbody');
	const bottom = document.getElementById('qbottom');
	const badge = `<div class='type-badge ${q.badge.cls}'>${q.badge.label}</div>`;

	if (q.t === 'mc') {
		body.innerHTML = `
			${badge}
			<div class='q-card'><div class='q-text'>${q.q}</div></div>
			<div class='opts'>${q.o.map((option, index) => `<button class='opt' onclick='choose(${index})' id='o${index}'>${option}</button>`).join('')}</div>
			<div class='hint-box' id='hint-box'></div>
			<div class='feedback' id='fb'></div>`;
		bottom.innerHTML = renderBottom(q);
	} else {
		const direction = q.t === 'enpl'
			? 'Wpisz polskie tlumaczenie:'
			: q.t === 'plen'
				? 'Wpisz angielskie tlumaczenie:'
				: 'Wpisz brakujace slowo:';
		body.innerHTML = `
			${badge}
			<div class='q-card'><div class='q-text' style='font-weight:500'>${q.q}</div><div class='q-dir'>${direction}</div></div>
			<input type='text' class='fill-input' id='fi' placeholder='Twoja odpowiedz...' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'>
			<div class='hint-box' id='hint-box'></div>
			<div class='feedback' id='fb'></div>`;
		bottom.innerHTML = renderBottom(q);
		setTimeout(() => {
			const field = document.getElementById('fi');
			if (field) field.focus();
		}, 100);
		document.getElementById('fi').addEventListener('keydown', event => {
			if (event.key === 'Enter') chkFill();
		});
	}
	body.scrollTop = 0;
}

function disableTools() {
	['hint-btn', 'give-up-btn'].forEach(id => {
		const element = document.getElementById(id);
		if (element) element.disabled = true;
	});
}

function showHint(text) {
	const box = document.getElementById('hint-box');
	if (!box) return;
	box.classList.add('show');
	box.textContent = text;
}

function useHint() {
	if (answered || hintUsed) return;
	hintUsed = true;
	const q = qs[cur];
	if (q.t === 'mc') {
		const wrongOptions = q.o.map((option, index) => ({ option, index })).filter(entry => entry.index !== q.a);
		sample(wrongOptions, 2).forEach(entry => {
			const node = document.getElementById(`o${entry.index}`);
			if (!node) return;
			node.disabled = true;
			node.classList.add('hinted');
		});
		showHint('Usunieto 2 bledne odpowiedzi.');
	} else {
		showHint(`Podpowiedz: ${buildHintText(q.a)}`);
	}
	const button = document.getElementById('hint-btn');
	if (button) button.disabled = true;
}

function scheduleRepeat(question) {
	const count = repeatCounts[question.sourceId] || 0;
	if (count >= 2) return false;
	repeatCounts[question.sourceId] = count + 1;
	const repeated = buildQuestionFromItem(question.source, question.variant, true);
	if (!repeated) return false;
	const insertAt = Math.min(qs.length, cur + (SETTINGS.preset === 'learn' ? 2 : 3));
	qs.splice(insertAt, 0, repeated);
	return true;
}

function showFB(ok, answerText, explanation, meta = {}) {
	const fb = document.getElementById('fb');
	fb.className = `feedback show ${ok ? 'ok' : 'bad'}`;
	const notes = [];
	if (meta.gaveUp) notes.push('Pytanie zostalo oznaczone jako nieopanowane.');
	if (meta.repeatScheduled) notes.push('Wroci jeszcze w tej sesji do powtorki.');
	if (hintUsed) notes.push('W tej probie uzyto podpowiedzi.');
	const noteHtml = notes.length ? `<span class='feedback-note'>${notes.join(' ')}</span>` : '';
	fb.innerHTML = ok
		? `✓ Poprawnie! ${explanation}${noteHtml}`
		: `✗ Blad. Poprawna odpowiedz: <strong>${answerText}</strong>. ${explanation}${noteHtml}`;
}

function finalizeAnswer(ok, answerText, meta = {}) {
	const q = qs[cur];
	const repeatScheduled = ok ? false : scheduleRepeat(q);
	updateProgress(q.sourceId, ok, hintUsed);
	if (ok) score += 1;
	else wrongs += 1;
	res.push({ s: q.s, q: q.q, ok, a: answerText, hint: hintUsed, repeat: repeatScheduled });
	document.getElementById('sc').textContent = score;
	document.getElementById('wr').textContent = wrongs;
	disableTools();
	showFB(ok, answerText, q.e, { ...meta, repeatScheduled });
}

function choose(index) {
	if (answered) return;
	answered = true;
	const q = qs[cur];
	q.o.forEach((option, optionIndex) => {
		const button = document.getElementById(`o${optionIndex}`);
		if (!button) return;
		button.disabled = true;
		if (optionIndex === q.a) button.classList.add('reveal');
		if (optionIndex === index && index !== q.a) button.classList.add('wrong');
		if (optionIndex === index && index === q.a) {
			button.classList.remove('reveal');
			button.classList.add('correct');
		}
	});
	finalizeAnswer(index === q.a, q.o[q.a]);
	document.getElementById('nav-btn').style.display = 'block';
}

function chkFill() {
	if (answered) return;
	answered = true;
	const q = qs[cur];
	const input = document.getElementById('fi');
	const value = normalizeText(input.value);
	const ok = q.accept.some(variant => value === variant);
	input.disabled = true;
	input.classList.add(ok ? 'correct' : 'wrong');
	finalizeAnswer(ok, q.a);
	const button = document.getElementById('nav-btn');
	button.textContent = cur < qs.length - 1 ? 'Nastepne pytanie ->' : 'Zobacz wyniki ->';
	button.className = 'btn-next';
	button.onclick = nxt;
}

function giveUp() {
	if (answered) return;
	answered = true;
	const q = qs[cur];
	if (q.t === 'mc') {
		q.o.forEach((option, index) => {
			const node = document.getElementById(`o${index}`);
			if (!node) return;
			node.disabled = true;
			if (index === q.a) node.classList.add('reveal');
		});
		finalizeAnswer(false, q.o[q.a], { gaveUp: true });
		document.getElementById('nav-btn').style.display = 'block';
		return;
	}
	const input = document.getElementById('fi');
	input.value = q.a;
	input.disabled = true;
	input.classList.add('wrong');
	finalizeAnswer(false, q.a, { gaveUp: true });
	const button = document.getElementById('nav-btn');
	button.textContent = cur < qs.length - 1 ? 'Nastepne pytanie ->' : 'Zobacz wyniki ->';
	button.className = 'btn-next';
	button.onclick = nxt;
}

function nxt() {
	cur += 1;
	render();
}

function showResults() {
	showScreen('results');
	const pct = Math.round((score / (qs.length || 1)) * 100);
	let grade = '2 - Niedostateczny';
	let cls = 'grade-2';
	let trophy = '💪';
	if (pct >= 90) {
		grade = '5 - Celujacy';
		cls = 'grade-5';
		trophy = '🏆';
	} else if (pct >= 80) {
		grade = '4+ - Bardzo dobry';
		cls = 'grade-4';
		trophy = '🥈';
	} else if (pct >= 70) {
		grade = '4 - Dobry';
		cls = 'grade-4';
		trophy = '🎯';
	} else if (pct >= 60) {
		grade = '3 - Dostateczny';
		cls = 'grade-3';
		trophy = '📚';
	}

	document.getElementById('trophy').textContent = trophy;
	document.getElementById('res-score').textContent = `${score}/${qs.length}`;
	document.getElementById('res-pct').textContent = `${pct}% poprawnych${sessionMeta.reviewFallback ? ' · tryb powtorek uzyl najslabszych pytan z historii' : ''}`;
	document.getElementById('res-grade').textContent = grade;
	document.getElementById('res-grade').className = `res-grade ${cls}`;

	const best = parseInt(localStorage.getItem(STORAGE_KEYS.bestPct) || '0', 10);
	const badge = document.getElementById('best-badge');
	if (pct > best) {
		localStorage.setItem(STORAGE_KEYS.bestPct, pct);
		badge.style.display = 'inline-block';
		document.getElementById('best-score').textContent = `${pct}%`;
	} else {
		badge.style.display = 'none';
	}

	const bySection = {};
	res.forEach(entry => {
		if (!bySection[entry.s]) bySection[entry.s] = [];
		bySection[entry.s].push(entry);
	});
	let html = '';
	Object.entries(bySection).forEach(([section, entries]) => {
		const sectionScore = entries.filter(entry => entry.ok).length;
		html += `<div class='sect-title'><span>${section}</span><span>${sectionScore}/${entries.length}</span></div>`;
		entries.forEach(entry => {
			const shortQ = entry.q.length > 48 ? `${entry.q.slice(0, 48)}...` : entry.q;
			const shortA = entry.a.length > 28 ? `${entry.a.slice(0, 28)}...` : entry.a;
			html += `<div class='res-row'><span class='res-q'>${shortQ}</span><span class='res-a ${entry.ok ? 'ok' : 'bad'}'>${entry.ok ? '✓' : '✗'} ${shortA}${entry.repeat ? ' ↺' : ''}</span></div>`;
		});
	});
	document.getElementById('sect-results').innerHTML = html;
	refreshHomeStats();
}

window.addEventListener('load', () => {
	refreshHomeStats();
});

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', event => {
	event.preventDefault();
	deferredPrompt = event;
	setTimeout(() => {
		if (!localStorage.getItem('install_dismissed')) {
			document.getElementById('install-banner').classList.add('show');
		}
	}, 2000);
});

function installApp() {
	if (!deferredPrompt) return;
	deferredPrompt.prompt();
	deferredPrompt.userChoice.then(() => {
		deferredPrompt = null;
		document.getElementById('install-banner').classList.remove('show');
	});
}

function dismissInstall() {
	document.getElementById('install-banner').classList.remove('show');
	localStorage.setItem('install_dismissed', '1');
}

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js').catch(() => {});
}
