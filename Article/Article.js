/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },

  {
    title: 'Tottenham HotSpurs Sack Manager',
    date: 'Dec 4th, 2019',
    firstParagraph: `Spicy jalapeno bacon ipsum dolor amet laborum non beef, id pork loin prosciutto incididunt ad. Short ribs shoulder shank velit prosciutto, aliqua non chislic rump. Lorem occaecat picanha, pork belly ball tip pork turkey ham hock non sed salami. Drumstick beef ribs officia chicken commodo, picanha mollit consectetur anim sirloin burgdoggen pork belly. Ut non porchetta anim incididunt ribeye aliquip minim turkey. Irure consequat occaecat excepteur.`,
    secondParagraph: `Labore turducken sirloin, esse adipisicing pastrami meatball sint duis pig kielbasa. Sed brisket aute dolore leberkas pork belly occaecat ipsum short ribs bacon jerky strip steak qui. Biltong ham hock do chislic, dolore beef kielbasa incididunt non. Capicola burgdoggen elit biltong exercitation, jowl lorem ham hock. Rump labore lorem buffalo dolore, bresaola mollit irure tempor deserunt ut turkey pork belly aute beef. Occaecat corned beef incididunt in aute ut cupidatat do anim hamburger turducken exercitation pork belly. Irure qui deserunt magna id ex short loin.`,
    thirdParagraph: `Meatloaf flank pork loin, strip steak dolore frankfurter jowl ball tip. Do qui strip steak shoulder shankle drumstick. Mollit dolore bresaola non, veniam quis leberkas esse lorem aute jowl est sed ground round tri-tip. Venison in sunt do, sed fugiat nostrud reprehenderit cow turkey biltong in. Venison ut proident labore.`
  },

  {
    title: "Cupcakes are America's Favorie Dessert",
    date: 'Dec 3rd, 2019',
    firstParagraph: `Cookie pie biscuit candy canes. Halvah I love I love chupa chups. Tiramisu chocolate bar jelly-o topping candy canes. Oat cake icing marshmallow. Danish pie tootsie roll candy canes. Cupcake candy bear claw dessert carrot cake danish cheesecake. Cotton candy toffee I love donut caramels cookie. Halvah sesame snaps chocolate cotton candy. Gummies sweet marshmallow I love brownie carrot cake. Sweet roll halvah I love topping lollipop chocolate.`,
    secondParagraph: `Tiramisu chupa chups apple pie caramels pie jelly beans. Tiramisu macaroon carrot cake. I love sugar plum gummies topping tootsie roll. Caramels fruitcake sugar plum jelly-o jelly beans chupa chups danish. Candy canes sweet roll lemon drops oat cake tiramisu chupa chups cookie sesame snaps cake. Muffin cookie brownie I love pastry donut apple pie. I love jelly I love pastry oat cake I love. Danish chocolate cake gummies I love powder jelly beans bonbon. Caramels I love dragée marzipan.`,
    thirdParagraph: `Cheesecake wafer liquorice jelly-o donut lemon drops. Marshmallow chocolate bear claw chocolate. Danish donut I love. I love jelly marshmallow biscuit powder lemon drops gummi bears fruitcake. Candy canes danish cheesecake cotton candy bear claw. Cake dessert bear claw caramels marzipan sugar plum. Cotton candy jujubes gummi bears donut cake. Tart jelly-o dragée candy.`
  },

  {
    title: 'Youtube Finally Bans BroScienceLife Channel',
    date: 'Sept 1st, 2019',
    firstParagraph: `Bro ipsum dolor sit amet shreddin nose press brain bucket heli brain bucket corn free ride frontside face plant roadie taco glove. Butter gnar gear jammer epic jib pow. Whistler chowder dust on crust bomb hole, hammerhead flow rail. Skinny greasy Whistler sketching clipless.`,
    secondParagraph: `Piste pipe air flow hot dogging travel noodle presta death cookies ollie poaching huckfest twister dirtbag. Whistler roadie afterbang rock-ectomy. Skid pipe corn, pillow popping stunt stomp trail swag couloir groomer chillax back country cork dope chain ring grab. Granny gear hot dogging bonk, schwag shuttle Whistler whip grind yard sale wheels flow.`,
    thirdParagraph: `Butter single track pow bonk dirtbag sketching wheelie caballerial chain ring wack line skinny gear jammer slash. Misty fatty reverse camber ride back country, daffy huck. Epic flow liftie, spin taco glove trail swag huckfest back country poaching single track whip yard sale ACL. Bail heli chowder big ring cornice betty. Booter drop air scream corduroy dust on crust. Bro frontside park slash nose dirt line manny huck schraeder pillow popping T-bar crank air.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">*
    <h2>{title of the article}</h2>*
    <p class="date">{date of the article}</p>*

    {three separate paragraph elements}*

    <span class='expandButton'></span>*
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.*

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

//step 1 create a function that creates a componet
function createArticle(dataObj)
{
  //create indiv elements. referer to above template
  const artDiv = document.createElement('div');
  const artH2 = document.createElement('h2');
  const artDate = document.createElement('p');
  const artP1 = document.createElement('p');
  const artP2 = document.createElement('p');
  const artP3 = document.createElement('p');
  const artSpan = document.createElement('span');

  //add classes to elements
  artDiv.classList.add('article');
  artDate.classList.add('date');
  artSpan.classList.add('expandButton');

  //fill in the proper text
  //data = title, date, p1, p2, p3
  artH2.textContent = dataObj.title;
  artDate.textContent = dataObj.date;
  artP1.textContent = dataObj.firstParagraph;
  artP2.textContent = dataObj.secondParagraph;
  artP3.textContent = dataObj.thirdParagraph;
  artSpan.textContent = 'Click to read more';

  //put the component together
  artDiv.appendChild(artH2);
  artDiv.appendChild(artDate);
  artDiv.appendChild(artP1);
  artDiv.appendChild(artP2);
  artDiv.appendChild(artP3);
  artDiv.appendChild(artSpan);

  //event listener for articles
  artSpan.addEventListener('click', () =>
  {
    artDiv.classList.toggle('article-open');

    //checks to see if article-open is active to display readmore or less
    if(artDiv.classList.contains('article-open'))
    {
      artSpan.textContent = "Click to read less";
    }
    else
    {
      artSpan.textContent = "Click to read more";
    }
  })
  
  //return component
  return artDiv;
}

//put the news articles in the container div
const articleContainer = document.querySelector('.articles');

//creates a new array for the news articles to be rendered later
const newArticleArray = data.map(dataArticle =>
{
  return createArticle(dataArticle);
});

//render news articles
newArticleArray.forEach(item =>
{
  articleContainer.appendChild(item);
});