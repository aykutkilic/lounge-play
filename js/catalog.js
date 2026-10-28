import { typesetBook, column, wrap, SERIF, INK, FADED } from './typeset.js';
import { rng } from './textures.js';

// The Fireside Library's shelf. The poems are public domain; the fables are
// retold in our own words; the magazines are original to the lounge and
// dedicated to the public domain (CC0).

const sonnet = (n, text) => ({ title: n, verse: true, text });

const BOOKS = {
  sonnets: {
    title: 'Sonnets',
    subtitle: 'a small selection',
    author: 'William Shakespeare',
    note: 'First published 1609 · public domain',
    leather: '#6b2d24',
    sections: [
      sonnet('XVIII', `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date;
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;
But thy eternal summer shall not fade,
Nor lose possession of that fair thou ow'st;
Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou grow'st:
So long as men can breathe or eyes can see,
So long lives this, and this gives life to thee.`),
      sonnet('XXIX', `When, in disgrace with fortune and men's eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate,
Wishing me like to one more rich in hope,
Featured like him, like him with friends possess'd,
Desiring this man's art and that man's scope,
With what I most enjoy contented least;
Yet in these thoughts myself almost despising,
Haply I think on thee, and then my state,
Like to the lark at break of day arising
From sullen earth, sings hymns at heaven's gate;
For thy sweet love remember'd such wealth brings
That then I scorn to change my state with kings.`),
      sonnet('LXXIII', `That time of year thou mayst in me behold
When yellow leaves, or none, or few, do hang
Upon those boughs which shake against the cold,
Bare ruin'd choirs, where late the sweet birds sang.
In me thou see'st the twilight of such day
As after sunset fadeth in the west,
Which by and by black night doth take away,
Death's second self, that seals up all in rest.
In me thou see'st the glowing of such fire
That on the ashes of his youth doth lie,
As the death-bed whereon it must expire,
Consum'd with that which it was nourish'd by.
This thou perceiv'st, which makes thy love more strong,
To love that well which thou must leave ere long.`),
      sonnet('CXVI', `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no! it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not Time's fool, though rosy lips and cheeks
Within his bending sickle's compass come;
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
If this be error and upon me prov'd,
I never writ, nor no man ever lov'd.`),
      sonnet('CXXX', `My mistress' eyes are nothing like the sun;
Coral is far more red than her lips' red;
If snow be white, why then her breasts are dun;
If hairs be wires, black wires grow on her head.
I have seen roses damask'd, red and white,
But no such roses see I in her cheeks;
And in some perfumes is there more delight
Than in the breath that from my mistress reeks.
I love to hear her speak, yet well I know
That music hath a far more pleasing sound;
I grant I never saw a goddess go;
My mistress, when she walks, treads on the ground:
And yet, by heaven, I think my love as rare
As any she belied with false compare.`),
    ],
  },

  poems: {
    title: 'Fireside Poems',
    subtitle: 'verses for a long evening',
    author: 'An anthology',
    note: 'All poems in the public domain',
    leather: '#2f4a3a',
    sections: [
      { title: 'Ozymandias', byline: 'Percy Bysshe Shelley · 1818', verse: true, text: `I met a traveller from an antique land,
Who said—"Two vast and trunkless legs of stone
Stand in the desert. . . . Near them, on the sand,
Half sunk a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed;
And on the pedestal, these words appear:
My name is Ozymandias, King of Kings;
Look on my Works, ye Mighty, and despair!
Nothing beside remains. Round the decay
Of that colossal Wreck, boundless and bare
The lone and level sands stretch far away."` },
      { title: 'I Wandered Lonely as a Cloud', byline: 'William Wordsworth · 1807', verse: true, text: `I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed—and gazed—but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.` },
      { title: 'The Tyger', byline: 'William Blake · 1794', verse: true, text: `Tyger Tyger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?

In what distant deeps or skies,
Burnt the fire of thine eyes?
On what wings dare he aspire?
What the hand, dare seize the fire?

And what shoulder, & what art,
Could twist the sinews of thy heart?
And when thy heart began to beat,
What dread hand? & what dread feet?

What the hammer? what the chain,
In what furnace was thy brain?
What the anvil? what dread grasp,
Dare its deadly terrors clasp!

When the stars threw down their spears
And water'd heaven with their tears:
Did he smile his work to see?
Did he who made the Lamb make thee?

Tyger Tyger burning bright,
In the forests of the night:
What immortal hand or eye,
Dare frame thy fearful symmetry?` },
      { title: 'To Autumn', byline: 'John Keats · 1819', verse: true, text: `Season of mists and mellow fruitfulness,
Close bosom-friend of the maturing sun;
Conspiring with him how to load and bless
With fruit the vines that round the thatch-eves run;
To bend with apples the moss'd cottage-trees,
And fill all fruit with ripeness to the core;
To swell the gourd, and plump the hazel shells
With a sweet kernel; to set budding more,
And still more, later flowers for the bees,
Until they think warm days will never cease,
For summer has o'er-brimm'd their clammy cells.

Who hath not seen thee oft amid thy store?
Sometimes whoever seeks abroad may find
Thee sitting careless on a granary floor,
Thy hair soft-lifted by the winnowing wind;
Or on a half-reap'd furrow sound asleep,
Drows'd with the fume of poppies, while thy hook
Spares the next swath and all its twined flowers:
And sometimes like a gleaner thou dost keep
Steady thy laden head across a brook;
Or by a cyder-press, with patient look,
Thou watchest the last oozings hours by hours.

Where are the songs of spring? Ay, Where are they?
Think not of them, thou hast thy music too,—
While barred clouds bloom the soft-dying day,
And touch the stubble-plains with rosy hue;
Then in a wailful choir the small gnats mourn
Among the river sallows, borne aloft
Or sinking as the light wind lives or dies;
And full-grown lambs loud bleat from hilly bourn;
Hedge-crickets sing; and now with treble soft
The red-breast whistles from a garden-croft;
And gathering swallows twitter in the skies.` },
      { title: 'Stopping by Woods on a Snowy Evening', byline: 'Robert Frost · 1923', verse: true, text: `Whose woods these are I think I know.
His house is in the village though;
He will not see me stopping here
To watch his woods fill up with snow.

My little horse must think it queer
To stop without a farmhouse near
Between the woods and frozen lake
The darkest evening of the year.

He gives his harness bells a shake
To ask if there is some mistake.
The only other sound's the sweep
Of easy wind and downy flake.

The woods are lovely, dark and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.` },
      { title: 'The Road Not Taken', byline: 'Robert Frost · 1916', verse: true, text: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.` },
      { title: '"Hope" is the thing with feathers', byline: 'Emily Dickinson · 1891', verse: true, text: `"Hope" is the thing with feathers -
That perches in the soul -
And sings the tune without the words -
And never stops - at all -

And sweetest - in the Gale - is heard -
And sore must be the storm -
That could abash the little Bird
That kept so many warm -

I've heard it in the chillest land -
And on the strangest Sea -
Yet - never - in Extremity,
It asked a crumb - of me.` },
      { title: 'There Will Come Soft Rains', byline: 'Sara Teasdale · 1918', verse: true, text: `There will come soft rains and the smell of the ground,
And swallows circling with their shimmering sound;

And frogs in the pools singing at night,
And wild plum trees in tremulous white;

Robins will wear their feathery fire,
Whistling their whims on a low fence-wire;

And not one will know of the war, not one
Will care at last when it is done.

Not one would mind, neither bird nor tree,
If mankind perished utterly;

And Spring herself, when she woke at dawn
Would scarcely know that we were gone.` },
      { title: 'Jabberwocky', byline: 'Lewis Carroll · 1871', verse: true, text: `'Twas brillig, and the slithy toves
Did gyre and gimble in the wabe:
All mimsy were the borogoves,
And the mome raths outgrabe.

"Beware the Jabberwock, my son!
The jaws that bite, the claws that catch!
Beware the Jubjub bird, and shun
The frumious Bandersnatch!"

He took his vorpal sword in hand;
Long time the manxome foe he sought—
So rested he by the Tumtum tree
And stood awhile in thought.

And, as in uffish thought he stood,
The Jabberwock, with eyes of flame,
Came whiffling through the tulgey wood,
And burbled as it came!

One, two! One, two! And through and through
The vorpal blade went snicker-snack!
He left it dead, and with its head
He went galumphing back.

"And hast thou slain the Jabberwock?
Come to my arms, my beamish boy!
O frabjous day! Callooh! Callay!"
He chortled in his joy.

'Twas brillig, and the slithy toves
Did gyre and gimble in the wabe:
All mimsy were the borogoves,
And the mome raths outgrabe.` },
      { title: 'The Owl and the Pussy-cat', byline: 'Edward Lear · 1871', verse: true, text: `The Owl and the Pussy-cat went to sea
In a beautiful pea-green boat,
They took some honey, and plenty of money,
Wrapped up in a five-pound note.
The Owl looked up to the stars above,
And sang to a small guitar,
"O lovely Pussy! O Pussy, my love,
What a beautiful Pussy you are,
    You are,
    You are!
What a beautiful Pussy you are!"

Pussy said to the Owl, "You elegant fowl!
How charmingly sweet you sing!
O let us be married! too long we have tarried:
But what shall we do for a ring?"
They sailed away, for a year and a day,
To the land where the Bong-Tree grows
And there in a wood a Piggy-wig stood
With a ring at the end of his nose,
    His nose,
    His nose,
With a ring at the end of his nose.

"Dear Pig, are you willing to sell for one shilling
Your ring?" Said the Piggy, "I will."
So they took it away, and were married next day
By the Turkey who lives on the hill.
They dined on mince, and slices of quince,
Which they ate with a runcible spoon;
And hand in hand, on the edge of the sand,
They danced by the light of the moon,
    The moon,
    The moon,
They danced by the light of the moon.` },
    ],
  },

  fables: {
    title: "Aesop's Fables",
    subtitle: 'retold for the lounge',
    author: 'after Aesop',
    note: 'Retellings dedicated to the public domain',
    leather: '#8a5a34',
    sections: [
      { title: 'The Tortoise and the Hare', moral: 'Slow and steady wins the race.', text: `A hare who could not stop talking about how fast he was laughed at a tortoise for the way she plodded along. "Race me, then," said the tortoise, and the whole meadow came out to watch.

The hare shot off and was soon so far ahead that he decided to lie down under a tree and wait for her. The afternoon was warm, the grass was soft, and before long he was fast asleep.

The tortoise never stopped. One foot, then the next, past the sleeping hare and on towards the finish. When the hare finally woke and raced the last stretch, she was already there, resting, while the meadow cheered.` },
      { title: 'The Fox and the Grapes', moral: 'It is easy to scorn what you cannot have.', text: `A hungry fox found a vine heavy with purple grapes, hanging high on a garden wall. He jumped and missed. He took a run at it and missed again. He tried until his legs ached and his pride ached more.

At last he turned away with his nose in the air. "They were sour anyway," he said to nobody in particular, "and I never really wanted them."` },
      { title: 'The Lion and the Mouse', moral: 'No kindness, however small, is ever wasted.', text: `A mouse ran across the paw of a sleeping lion, and the lion woke and pinned her down. "Please let me go," squeaked the mouse, "and one day I will repay you." The lion laughed at the idea of a mouse helping a lion, but he lifted his paw and let her run.

Some time later the lion was caught in a hunter's net. The more he struggled, the tighter it pulled. The mouse heard his roars, came running, and gnawed through the ropes one by one until he was free.` },
      { title: 'The Ant and the Grasshopper', moral: 'There is a time for play and a time for work.', text: `All summer long the grasshopper sang in the sunshine while an ant hurried past him, again and again, dragging grains of corn back to her nest. "Why work so hard on a day like this?" the grasshopper asked. "Come and sing."

"I am storing food for the winter," said the ant, "and you should too." The grasshopper only laughed. When winter came and the fields lay under snow, the ant had plenty to eat, and the grasshopper, who had nothing, learned what she had meant.` },
      { title: 'The North Wind and the Sun', moral: 'Gentleness often succeeds where force fails.', text: `The North Wind and the Sun argued about which of them was stronger. They saw a traveller walking along the road in a warm cloak and agreed that whoever could take the cloak off him would be the winner.

The North Wind blew as hard as he could. The traveller only wrapped the cloak tighter around himself. Then the Sun came out and shone, softly at first and then warmly, until the traveller unbuttoned his cloak, and then, too hot to bear it any longer, took it off altogether.` },
      { title: 'The Crow and the Pitcher', moral: 'Patience and cleverness can solve what strength cannot.', text: `A thirsty crow found a pitcher with a little water at the very bottom, too far down for her beak to reach. She could not tip it over; it was too heavy.

So she picked up a pebble and dropped it in. Then another, and another. Slowly, pebble by pebble, the water rose, until at last it was near enough to the top for her to drink.` },
      { title: 'The Boy Who Cried Wolf', moral: 'Nobody believes a liar, even when they tell the truth.', text: `A shepherd boy, bored on the hillside, shouted "Wolf! Wolf!" just to watch the villagers come running. They arrived out of breath and found no wolf at all, and the boy laughed. He did it again a few days later, and again they came, and again there was nothing.

Then one evening a real wolf crept out of the woods towards the sheep. "Wolf! Wolf!" the boy cried, as loudly as he could. But this time nobody came, because nobody believed him.` },
    ],
  },
};

// ---------------------------------------------------------------- magazines

const MAG_W = 520;
const MAG_H = 680;

function masthead(g, title, sub, color, bg) {
  g.fillStyle = bg;
  g.fillRect(0, 0, MAG_W, MAG_H);
  g.fillStyle = color;
  g.font = `bold 50px ${SERIF}`;
  g.textAlign = 'center';
  g.fillText(title, MAG_W / 2, 80);
  g.font = `italic 13px ${SERIF}`;
  g.fillText(sub, MAG_W / 2, 104);
  g.fillRect(40, 116, MAG_W - 80, 2);
}

function header(g, title, kicker, accent) {
  g.fillStyle = '#f6f0e1';
  g.fillRect(0, 0, MAG_W, MAG_H);
  g.fillStyle = accent;
  g.font = `bold 11px ${SERIF}`;
  g.textAlign = 'left';
  g.fillText(kicker.toUpperCase(), 44, 60);
  g.fillStyle = INK;
  g.font = `bold 30px ${SERIF}`;
  wrap(title, g.font, MAG_W - 88).forEach((l, i) => g.fillText(l, 44, 98 + i * 34));
}

function twoColumns(g, text, top, accent) {
  const colW = (MAG_W - 88 - 20) / 2;
  const paras = text.trim().split(/\n\s*\n/);
  const half = Math.ceil(paras.length / 2);
  column(g, paras.slice(0, half).join('\n\n'), 44, top, colW, { font: `11px ${SERIF}`, lh: 15 });
  column(g, paras.slice(half).join('\n\n'), 44 + colW + 20, top, colW, { font: `11px ${SERIF}`, lh: 15 });
  g.fillStyle = accent;
  g.fillRect(44 + colW + 9, top - 10, 1, MAG_H - top - 60);
}

function folio(g, n, name) {
  g.fillStyle = FADED;
  g.font = `10px ${SERIF}`;
  g.textAlign = 'center';
  g.fillText(`${name} · ${n}`, MAG_W / 2, MAG_H - 28);
}

function mug(g, x, y, s, color) {
  g.fillStyle = color;
  g.beginPath();
  g.roundRect(x - 40 * s, y - 50 * s, 80 * s, 90 * s, 12 * s);
  g.fill();
  g.lineWidth = 10 * s;
  g.strokeStyle = color;
  g.beginPath();
  g.arc(x + 45 * s, y - 5 * s, 18 * s, -Math.PI / 2, Math.PI / 2);
  g.stroke();
  g.strokeStyle = 'rgba(255,255,255,0.55)';
  g.lineWidth = 4 * s;
  for (let k = -1; k <= 1; k++) {
    g.beginPath();
    g.moveTo(x + k * 18 * s, y - 60 * s);
    g.bezierCurveTo(x + k * 18 * s - 14 * s, y - 85 * s, x + k * 18 * s + 14 * s, y - 100 * s, x + k * 18 * s, y - 125 * s);
    g.stroke();
  }
}

function leafy(g, x, y, s, r) {
  g.fillStyle = '#c96f4a';
  g.beginPath();
  g.moveTo(x - 30 * s, y);
  g.lineTo(x + 30 * s, y);
  g.lineTo(x + 22 * s, y + 45 * s);
  g.lineTo(x - 22 * s, y + 45 * s);
  g.fill();
  for (let i = 0; i < 9; i++) {
    const a = -Math.PI / 2 + (r() - 0.5) * 2.2;
    const len = (40 + r() * 50) * s;
    g.fillStyle = ['#2d6a4f', '#40916c', '#52b788'][i % 3];
    g.save();
    g.translate(x, y);
    g.rotate(a);
    g.beginPath();
    g.ellipse(len / 2, 0, len / 2, 11 * s, 0, 0, Math.PI * 2);
    g.fill();
    g.restore();
  }
}

function room(g, x, y, w, h, color, label, emoji) {
  g.fillStyle = color;
  g.strokeStyle = '#3b2a20';
  g.lineWidth = 3;
  g.beginPath();
  g.roundRect(x, y, w, h, 16);
  g.fill();
  g.stroke();
  g.font = `56px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
  g.textAlign = 'center';
  g.fillText(emoji, x + w / 2, y + h / 2 + 8);
  g.fillStyle = INK;
  g.font = `bold 20px ${SERIF}`;
  g.fillText(label, x + w / 2, y + h - 22);
}

const GAZETTE_ACCENT = '#b8573a';
const gazette = {
  title: 'The Cozy Gazette',
  subtitle: 'No. 1 · Autumn',
  author: 'the lounge staff',
  leather: '#b8573a',
  magazine: true,
  build: () => [
    { w: MAG_W, h: MAG_H, draw(g) {
      masthead(g, 'The Cozy Gazette', 'No. 1 · Autumn · free to every guest', '#f6e7cf', '#7a2f22');
      g.fillStyle = '#5a2218';
      g.fillRect(40, 140, MAG_W - 80, 380);
      g.fillStyle = '#26324f';
      g.fillRect(70, 170, 170, 220);
      g.fillStyle = '#f6f1d5';
      g.beginPath(); g.arc(190, 220, 20, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#5a2218'; g.lineWidth = 8; g.strokeRect(70, 170, 170, 220);
      g.beginPath(); g.moveTo(155, 170); g.lineTo(155, 390); g.moveTo(70, 280); g.lineTo(240, 280); g.stroke();
      mug(g, 360, 440, 1.4, '#e6c88f');
      g.fillStyle = '#f6e7cf';
      g.font = `bold 22px ${SERIF}`;
      g.textAlign = 'left';
      ['The perfect cup, slowly', 'Five plants that forgive you', 'Pull-out map of the lounges'].forEach((l, i) => g.fillText(`· ${l}`, 46, 570 + i * 30));
    } },
    { w: MAG_W, h: MAG_H, draw(g) {
      header(g, 'In this issue', 'Contents', GAZETTE_ACCENT);
      g.font = `15px ${SERIF}`;
      [['3', 'The perfect cup, slowly'], ['5', 'A map of the lounges (fold-out)'], ['6', 'Five plants that forgive you'], ['7', 'The emoji puzzle page']].forEach(([n, t], i) => {
        g.fillStyle = GAZETTE_ACCENT;
        g.fillText(n, 44, 190 + i * 40);
        g.fillStyle = INK;
        g.fillText(t, 80, 190 + i * 40);
      });
      column(g, `Welcome to the very first Cozy Gazette. Everything in here was written for the guests of the lounges, to be read slowly with something warm nearby. When you are done, leave it wherever you are sitting; someone will come along and put it back.`, 44, 400, MAG_W - 88, { font: `italic 13px ${SERIF}`, lh: 19, color: FADED });
      folio(g, 2, 'The Cozy Gazette');
    } },
    { w: MAG_W, h: MAG_H, draw(g) {
      header(g, 'The perfect cup, slowly', 'Kitchen', GAZETTE_ACCENT);
      twoColumns(g, `There is no single perfect cup of coffee, but there is a perfect way to make one: slowly, and paying attention.

Start with water just off the boil. Boiling water scorches the grounds; let the kettle rest for half a minute after it clicks off.

Grind the beans just before you brew, about as coarse as sea salt for a pour-over. A good starting point is one heaped tablespoon for every cup of water.

Wet the grounds first with a splash of water and wait thirty seconds while they bloom and bubble. This lets trapped gas escape so the rest of the water can do its work.

Then pour in slow circles, keeping the grounds just covered, until the cup is full. The whole thing should take about three minutes.

Taste it before adding anything. If it is bitter, grind coarser next time; if it is thin and sour, grind finer. Small changes, one at a time.

And if all of this sounds like too much bother, the robot at the counter will happily do it for you.`, 190, GAZETTE_ACCENT);
      folio(g, 3, 'The Cozy Gazette');
    } },
    { w: MAG_W, h: MAG_H, draw(g) {
      header(g, 'Notes from the counter', 'Kitchen', GAZETTE_ACCENT);
      mug(g, 150, 330, 1.2, '#c96f4a');
      mug(g, 360, 340, 0.9, '#2f4a3a');
      column(g, `Our barista prefers a medium roast, a ceramic dripper and a little patience. Tea drinkers are not forgotten: water at about eighty degrees for green tea, a full boil for black, and never squeeze the bag.`, 44, 470, MAG_W - 88, { font: `13px ${SERIF}`, lh: 19 });
      folio(g, 4, 'The Cozy Gazette');
    } },
    { w: MAG_W * 2, h: MAG_H, draw(g) {
      g.fillStyle = '#f3ead6';
      g.fillRect(0, 0, MAG_W * 2, MAG_H);
      g.strokeStyle = 'rgba(120,100,70,0.15)';
      g.lineWidth = 1;
      for (let x = 0; x < MAG_W * 2; x += 40) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, MAG_H); g.stroke(); }
      for (let y = 0; y < MAG_H; y += 40) { g.beginPath(); g.moveTo(0, y); g.lineTo(MAG_W * 2, y); g.stroke(); }
      g.fillStyle = INK;
      g.font = `bold 40px ${SERIF}`;
      g.textAlign = 'center';
      g.fillText('A Map of the Lounges', MAG_W, 70);
      g.font = `italic 15px ${SERIF}`;
      g.fillStyle = FADED;
      g.fillText('four rooms, one door each, and always a seat by the window', MAG_W, 98);
      room(g, 90, 150, 380, 210, '#e9b48f', 'Fireside Library', '🔥');
      room(g, 570, 150, 380, 210, '#b7d9b0', 'Greenhouse Café', '🌿');
      room(g, 90, 410, 380, 210, '#b3b8d9', 'Rainy Rooftop', '🌧️');
      room(g, 570, 410, 380, 210, '#f3c98f', 'Sunset Terrace', '🌅');
      g.strokeStyle = GAZETTE_ACCENT;
      g.setLineDash([10, 8]);
      g.lineWidth = 4;
      g.beginPath();
      g.moveTo(470, 255); g.lineTo(570, 255); g.moveTo(280, 360); g.lineTo(280, 410); g.moveTo(760, 360); g.lineTo(760, 410); g.moveTo(470, 515); g.lineTo(570, 515);
      g.stroke();
      g.setLineDash([]);
      g.fillStyle = INK;
      g.font = `bold 26px ${SERIF}`;
      g.fillText('N', MAG_W * 2 - 60, MAG_H - 80);
      g.fillRect(MAG_W * 2 - 62, MAG_H - 70, 4, 40);
    } },
    { w: MAG_W, h: MAG_H, draw(g) {
      header(g, 'Five plants that forgive you', 'Greenery', GAZETTE_ACCENT);
      const r = rng(4);
      leafy(g, 130, 300, 1, r);
      leafy(g, 390, 300, 0.8, r);
      column(g, `Snake plant: thrives on neglect and a little shade.

Pothos: trails happily from a high shelf and tells you when it is thirsty by drooping.

Monstera: give it light and room, and it will give you enormous leaves.

Cactus: water it once a month and leave it alone.

Fern: likes the steamy greenhouse best, so keep it misted.`, 44, 400, MAG_W - 88, { font: `13px ${SERIF}`, lh: 18 });
      folio(g, 6, 'The Cozy Gazette');
    } },
    { w: MAG_W, h: MAG_H, draw(g) {
      header(g, 'The emoji puzzle page', 'Play', GAZETTE_ACCENT);
      g.textAlign = 'left';
      const puzzles = [['🌧️ + 🏹', 'rainbow'], ['☀️ + 🌻', 'sunflower'], ['🐝 + 🍯 + 🏠', 'beehive'], ['🌙 + 💡', 'moonlight'], ['⭐ + 🐟', 'starfish'], ['☕ + ⏰', 'coffee break']];
      puzzles.forEach(([q], i) => {
        g.font = `34px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
        g.fillText(q, 60, 200 + i * 64);
        g.fillStyle = FADED;
        g.font = `14px ${SERIF}`;
        g.fillText('= ____________', 300, 195 + i * 64);
        g.fillStyle = INK;
      });
      g.save();
      g.translate(MAG_W - 40, MAG_H - 50);
      g.rotate(Math.PI);
      g.font = `italic 10px ${SERIF}`;
      g.fillStyle = FADED;
      g.textAlign = 'left';
      g.fillText(`answers: ${puzzles.map((p) => p[1]).join(', ')}`, 0, 0);
      g.restore();
      folio(g, 7, 'The Cozy Gazette');
    } },
    { w: MAG_W, h: MAG_H, draw(g) {
      g.fillStyle = '#2f4f4f';
      g.fillRect(0, 0, MAG_W, MAG_H);
      g.fillStyle = '#f6e7cf';
      g.textAlign = 'center';
      g.font = `bold 34px ${SERIF}`;
      g.fillText('Robot Barista Co.', MAG_W / 2, 200);
      g.font = `italic 16px ${SERIF}`;
      g.fillText('"I never spill. Well, almost never."', MAG_W / 2, 240);
      g.font = `120px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
      g.fillText('🤖', MAG_W / 2, 420);
      g.font = `14px ${SERIF}`;
      g.fillText('Now serving every lounge, every hour.', MAG_W / 2, 520);
    } },
  ],
};

const STAR = '#f6e7b0';
function sky(g, w, h, seed, n = 220) {
  const grad = g.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#0b1026');
  grad.addColorStop(1, '#25335c');
  g.fillStyle = grad;
  g.fillRect(0, 0, w, h);
  const r = rng(seed);
  for (let i = 0; i < n; i++) {
    g.fillStyle = `rgba(255,250,230,${0.3 + r() * 0.7})`;
    const s = r() * 1.8 + 0.4;
    g.beginPath(); g.arc(r() * w, r() * h, s, 0, Math.PI * 2); g.fill();
  }
}

function constellation(g, pts, name, scale, ox, oy) {
  g.strokeStyle = 'rgba(246,231,176,0.55)';
  g.lineWidth = 1.5;
  g.beginPath();
  pts.forEach(([x, y], i) => (i ? g.lineTo(ox + x * scale, oy + y * scale) : g.moveTo(ox + x * scale, oy + y * scale)));
  g.stroke();
  g.fillStyle = STAR;
  for (const [x, y] of pts) { g.beginPath(); g.arc(ox + x * scale, oy + y * scale, 4, 0, Math.PI * 2); g.fill(); }
  g.font = `italic 16px ${SERIF}`;
  g.textAlign = 'center';
  g.fillText(name, ox + pts[0][0] * scale, oy + pts[0][1] * scale - 16);
}

const starlight = {
  title: 'Starlight Monthly',
  subtitle: 'The night sky issue',
  author: 'the rooftop astronomers',
  leather: '#2c3550',
  magazine: true,
  build: () => [
    { w: MAG_W, h: MAG_H, draw(g) {
      sky(g, MAG_W, MAG_H, 11);
      g.fillStyle = '#f6f1d5';
      g.shadowColor = '#f6f1d5';
      g.shadowBlur = 40;
      g.beginPath(); g.arc(360, 300, 70, 0, Math.PI * 2); g.fill();
      g.shadowBlur = 0;
      g.fillStyle = '#25335c';
      g.beginPath(); g.arc(390, 285, 66, 0, Math.PI * 2); g.fill();
      g.fillStyle = STAR;
      g.font = `bold 46px ${SERIF}`;
      g.textAlign = 'center';
      g.fillText('Starlight Monthly', MAG_W / 2, 84);
      g.font = `italic 14px ${SERIF}`;
      g.fillText('The night sky issue · with a fold-out star chart', MAG_W / 2, 110);
      g.font = `bold 20px ${SERIF}`;
      g.textAlign = 'left';
      ['Finding the North Star', 'The moon, phase by phase', 'Star chart inside'].forEach((l, i) => g.fillText(`✦ ${l}`, 46, 560 + i * 30));
    } },
    { w: MAG_W, h: MAG_H, draw(g) {
      header(g, 'Finding the North Star', 'Skywatching', '#2c3550');
      twoColumns(g, `On a clear night, away from the brightest lights, the first thing to look for is the Big Dipper: seven stars shaped like a ladle with a long, bent handle.

Follow the two stars at the far end of the bowl, the ones furthest from the handle. Draw a line through them and keep going, about five times the distance between them.

You will arrive at a star that is not especially bright, but is special all the same: Polaris, the North Star. It sits almost exactly above the Earth's north pole, so while every other star slowly wheels around the sky through the night, Polaris barely moves.

Travellers have steered by it for thousands of years. Face it, and you are facing north.

From the rooftop lounge it hangs just above the tallest tower on clear nights. When it rains, you will have to take our word for it.`, 190, '#2c3550');
      folio(g, 2, 'Starlight Monthly');
    } },
    { w: MAG_W * 2, h: MAG_H * 2, draw(g) {
      sky(g, MAG_W * 2, MAG_H * 2, 23, 900);
      g.fillStyle = STAR;
      g.font = `bold 52px ${SERIF}`;
      g.textAlign = 'center';
      g.fillText('A Chart of the Northern Sky', MAG_W, 90);
      g.strokeStyle = 'rgba(246,231,176,0.25)';
      g.lineWidth = 1;
      for (const r of [200, 400, 600]) { g.beginPath(); g.arc(MAG_W, MAG_H, r, 0, Math.PI * 2); g.stroke(); }
      constellation(g, [[0, 0], [60, 10], [110, 40], [150, 80], [150, 150], [240, 160], [250, 90], [150, 80]], 'The Big Dipper', 1.8, 250, 330);
      constellation(g, [[0, 0], [70, 40], [130, 0], [190, 50], [250, 10]], 'Cassiopeia', 1.6, 640, 260);
      constellation(g, [[0, 0], [120, -20], [60, 120], [40, 135], [80, 150], [10, 260], [140, 250]], 'Orion', 1.6, 620, 820);
      constellation(g, [[0, 0], [40, 30], [70, 70], [110, 90], [150, 150], [200, 160]], 'The Little Dipper', 1.5, MAG_W, MAG_H);
      g.fillStyle = '#fffbe8';
      g.shadowColor = '#fffbe8';
      g.shadowBlur = 20;
      g.beginPath(); g.arc(MAG_W, MAG_H, 7, 0, Math.PI * 2); g.fill();
      g.shadowBlur = 0;
      g.font = `bold 18px ${SERIF}`;
      g.fillText('Polaris', MAG_W + 50, MAG_H - 14);
    } },
    { w: MAG_W, h: MAG_H, draw(g) {
      header(g, 'The moon, phase by phase', 'Skywatching', '#2c3550');
      const names = ['New', 'Crescent', 'First quarter', 'Gibbous', 'Full', 'Gibbous', 'Last quarter', 'Crescent'];
      names.forEach((n, i) => {
        const x = 80 + (i % 4) * 120;
        const y = 230 + Math.floor(i / 4) * 170;
        g.fillStyle = '#25335c';
        g.beginPath(); g.arc(x, y, 40, 0, Math.PI * 2); g.fill();
        g.save();
        g.beginPath(); g.arc(x, y, 40, 0, Math.PI * 2); g.clip();
        g.fillStyle = '#f6f1d5';
        const k = Math.cos((i / 8) * Math.PI * 2);
        const waxing = i <= 4;
        g.beginPath();
        g.arc(x, y, 40, -Math.PI / 2, Math.PI / 2, !waxing);
        g.ellipse(x, y, Math.abs(k) * 40, 40, 0, Math.PI / 2, -Math.PI / 2, (k > 0) === waxing);
        g.fill();
        g.restore();
        g.fillStyle = INK;
        g.font = `12px ${SERIF}`;
        g.textAlign = 'center';
        g.fillText(n, x, y + 62);
      });
      column(g, `A full cycle takes about twenty-nine and a half days. The moon makes no light of its own; what we see is sunlight, and how much of it depends on where the moon is on its trip around us.`, 44, 590, MAG_W - 88, { font: `12px ${SERIF}`, lh: 17 });
      folio(g, 4, 'Starlight Monthly');
    } },
  ],
};

export const CATALOG = {
  sonnets: { ...BOOKS.sonnets, build: () => typesetBook(BOOKS.sonnets) },
  poems: { ...BOOKS.poems, build: () => typesetBook(BOOKS.poems) },
  fables: { ...BOOKS.fables, build: () => typesetBook(BOOKS.fables) },
  gazette,
  starlight,
};
