// /* ─────────────────────────────────────────────────────
//    products.js  —  Aurum Fine Jewellery Product Catalogue
//    ───────────────────────────────────────────────────── */

// export const WHATSAPP_NUMBER = '919761560132' // Replace with real number

// /* ── Image pools ─────────────────────────────────── */
// const IMG = {
//   rosering1: 'https://i.pinimg.com/736x/14/6d/fb/146dfbbd2094d2442f053b5c75cb0d21.jpg',
//   rosering2:'https://i.pinimg.com/736x/7b/2f/5a/7b2f5a7214e3ac0fc978106b3739b2f2.jpg',
//   rosering3:'https://i.pinimg.com/736x/51/48/59/5148597f0c4c365f247cc6cc6a2a0d50.jpg',
//   ring1:       'https://i.pinimg.com/1200x/52/7f/d5/527fd502e821a6f5e490218224da9d40.jpg',
//   ring2:       'https://i.pinimg.com/1200x/0e/12/36/0e1236c3b5f1f7986f51d6f705a3d459.jpg',
//   ring3:       'https://i.pinimg.com/1200x/aa/94/81/aa9481821a408c00d9b337aeefcd1900.jpg',
//   ring4:       'https://i.pinimg.com/1200x/28/1c/0f/281c0ff6002477ca0fd670788c555e96.jpg',
//   ring5:        'https://i.pinimg.com/1200x/4a/99/ed/4a99ed2e7a6dc30351084b2eb84f0c51.jpg',
//   necklace1:   'https://i.pinimg.com/736x/3f/df/4a/3fdf4a40a6430c17fc39852bf784c808.jpg',
//   necklace2:   'https://i.pinimg.com/736x/b5/1d/54/b51d54377881806e0bb72019260fb5f4.jpg',
//   necklace3:   'https://i.pinimg.com/1200x/fe/dc/ea/fedceaddcfe8ddc997eea0048daac09b.jpg',
//   necklace4:   'https://i.pinimg.com/736x/26/87/cf/2687cf5915d10f0e96a9ba07b47bc1f7.jpg',
//   bracelet1:   'https://i.pinimg.com/1200x/f5/23/39/f5233908544897faa442f22a1eded598.jpg',
//   bracelet2:   'https://i.pinimg.com/1200x/37/08/a3/3708a3324e669edfa3df326a91e0a55b.jpg',
//   bracelet3:   'https://i.pinimg.com/736x/29/29/cf/2929cfe15395fb55cfe69600474544e3.jpg',
//   bracelet4:   'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=90',
//   earring1:    'https://i.pinimg.com/736x/8e/a5/97/8ea597e672ef9860ad8776db1e6f6882.jpg',
//   earring2:    'https://i.pinimg.com/1200x/69/54/f7/6954f72b58a6da6b916f9392fed1a525.jpg',
//   earring3:    'https://i.pinimg.com/1200x/51/92/27/519227b6a3f6ac32e87e284a29b413d1.jpg',
//   tops:        'https://i.pinimg.com/1200x/83/93/d2/8393d23e4d109d7ff4401ae2501aad6d.jpg',
//   tops1:        'https://i.pinimg.com/1200x/11/77/d2/1177d28bdfb75e2ddb40ea07a207f883.jpg',
//   tops2:        'https://i.pinimg.com/1200x/02/32/b8/0232b8d6a3652dc6785b0113651e1afe.jpg',
//   bridal1:     'https://i.pinimg.com/1200x/07/35/3a/07353ae28e4756541c45154c2a510072.jpg',
//   bridal2:     'https://i.pinimg.com/736x/0f/f8/7d/0ff87d1cee83bbb6649adefecbb97a32.jpg',
//   bridal3:      'https://i.pinimg.com/1200x/c9/43/72/c94372fd5db3008d9a5ecb77a6892c37.jpg',
//   chain1:      'https://i.pinimg.com/1200x/39/8c/09/398c09b96ec8f62055ed57189b606101.jpg',
//   chain2:       'https://i.pinimg.com/1200x/42/6d/34/426d34e1b5722d3e71b4417150fdc74e.jpg',
//   chain3:      'https://i.pinimg.com/1200x/31/e4/de/31e4deac2581e530fb7ffc11d0ae80f2.jpg',
//   locket1:     'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=90',
//   temple1:     'https://i.pinimg.com/736x/ef/51/52/ef5152e4bb902c9ea4df434091be6508.jpg',
//   payal1:      'https://i.pinimg.com/736x/01/8c/c5/018cc5537ff7a2febc0ac8910b886c18.jpg',
//   payal2:       'https://i.pinimg.com/1200x/74/18/fb/7418fb7240dde10057b2260650449076.jpg',
//   pendant1:    'https://i.pinimg.com/1200x/48/30/5d/48305dbfe0eb24df0d4fbd69cada75cd.jpg',
//   pendant2:     'https://i.pinimg.com/1200x/b6/fb/fe/b6fbfe8864d69995cd83019130a0e390.jpg',
//   pendant3:     'https://i.pinimg.com/1200x/7f/f1/de/7ff1de475ede123a7dd81c7bfa6f247f.jpg',
//   kade1:       'https://i.pinimg.com/1200x/79/86/f3/7986f3c3a160020983295704981accc8.jpg',
//   kade2:        'https://i.pinimg.com/736x/c6/ee/da/c6eedaaa9ed6404d355242a3b37e9a10.jpg',
//   kade3:'https://i.pinimg.com/736x/00/53/60/005360512584d840607709594b2128a8.jpg',
//   choker1:     'https://i.pinimg.com/736x/bc/67/9d/bc679dd47fe8eaff655a5b8e8df7fa08.jpg',
//   mangal1:     'https://i.pinimg.com/736x/ce/6c/36/ce6c36e8a0d03598d0339d529e40457e.jpg',
//   managl2:      'https://i.pinimg.com/736x/97/5d/a8/975da81b9671df99ba5b28b4fd4935ea.jpg',
//   managal3:      'https://i.pinimg.com/736x/41/71/06/4171064acbffd6e92a039e5724804917.jpg',
//   jhumki1:     'https://i.pinimg.com/736x/b2/2c/b0/b22cb0e890121560f131e789969e3439.jpg',
//   craft1:      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=90',
//   chudi1:      'https://i.pinimg.com/webp/736x/62/fa/78/62fa78569c8c07d467a68f540b36b12e.webp',
//   chudi2:      'https://i.pinimg.com/1200x/3e/57/af/3e57afe2d1f885b2fbb96d5d08acf3c1.jpg',
//   chudi3:      'https://i.pinimg.com/736x/9d/24/f4/9d24f4eee078ace7a4aaab61be66e9ee.jpg',
//   omgold: 'https://i.pinimg.com/736x/c4/15/f4/c415f40892d600b165eda0f7c9348b51.jpg',
//   omgold1: 'https://i.pinimg.com/736x/ac/42/29/ac4229ce50ad3f63c75381a935366045.jpg',
//   omgold2: 'https://i.pinimg.com/736x/e3/4a/ee/e34aeed89b0be7cc20264a2d0a5e8fe0.jpg',
//   payal2:   'https://i.pinimg.com/1200x/74/18/fb/7418fb7240dde10057b2260650449076.jpg',
//   payal3:   'https://i.pinimg.com/736x/61/af/2e/61af2e667e5aa7c52b4f418df3695223.jpg',
// silverring1:'https://i.pinimg.com/736x/d7/1e/51/d71e51c340a9ee5ec5571f544ec37219.jpg',
// silverring2:'https://i.pinimg.com/736x/7c/d2/3e/7cd23e1a406198f53b567306da5efaa3.jpg',
// silverring3:'https://i.pinimg.com/736x/eb/0f/13/eb0f137c7d42a92ea9286910eeb3b3c0.jpg',
//   temple2:      'https://i.pinimg.com/1200x/c6/ff/8e/c6ff8e16553727dc3b05ccd0b26480f8.jpg',
//   temple3:       'https://i.pinimg.com/736x/1b/0a/88/1b0a8878670c92a2b4aefb48c454a20a.jpg',
//   silverearring:'https://i.pinimg.com/1200x/a3/b0/2e/a3b02e5884c20b0bd29d8d62d324003b.jpg',
//   silverearring1:'https://i.pinimg.com/736x/14/9a/48/149a48d29f8732c66e53ad66be586601.jpg',
//   silverbracelet:'https://i.pinimg.com/736x/31/9b/a8/319ba8e9d3db2b06d53d4ce5028345d0.jpg',
//   silverbracelet2:'https://i.pinimg.com/1200x/b2/f8/71/b2f871a8379a4c15f6fafe1dbc03bc28.jpg',
//   silverbracelet3:'https://i.pinimg.com/1200x/16/db/49/16db493f61a14c37867a99e1944b1dc2.jpg'
// }

// /* ── Product list ─────────────────────────────────── */
// export const products = [
//   // ── GOLD RINGS ──────────────────────────────────
//   {
//     id: 'gr-001',
//     slug: 'gold-solitaire-ring',
//     name: 'Gold Rings',
//     category: 'Rings',
//     categorySlug: 'gold-rings',
//     metal: 'gold',
//     collections: ['party-wear'],
//     images: [IMG.ring1, IMG.ring2, IMG.ring3],
//     shortDescription: 'A timeless solitaire set in 22K gold — the ultimate declaration of love and refinement.',
//     fullDescription: 'Our Solitaire Diamond Ring is a masterclass in understated luxury. Forged from 22-karat gold and set with a perfectly round brilliant-cut diamond, this ring is designed to endure every generation. The cathedral setting elevates the stone while allowing light to dance through its facets at every angle. Available in custom sizing.',
//     features: ['22K Hallmarked Gold', 'Brilliant-cut Diamond', 'Custom Sizing Available', 'BIS Certified'],
//     tags: ['gold', 'party-wear'],
//   },
//   {
//     id: 'gr-002',
//     slug: 'gold-halo-ring-women',
//     name: 'Rose Gold Halo Ring',
//     category: 'Rings',
//     categorySlug: 'gold-rings',
//     metal: 'gold',
//     collections: ['party-wear', 'daily-wear'],
//     images: [IMG.rosering1, IMG.rosering2, IMG.rosering3],
//     shortDescription: 'A halo of micro-pave stones encircles a central gem — opulence at its most elegant.',
//     fullDescription: 'The Rose Gold Halo Ring features a central gemstone encircled by a delicate halo of pavé-set diamonds. Crafted in 18K rose gold, the warm tone complements every complexion. Perfect as an engagement ring or a statement anniversary gift.',
//     features: ['18K Rose Gold', 'Pavé Diamond Halo', 'GIA Certified Stone', 'Complimentary Sizing'],
//     tags: ['gold', 'party-wear', 'daily-wear'],
//   },
//   {
//     id: 'gr-003',
//     slug: 'gold-men-band',
//     name: 'Classic Gold Band — Men',
//     category: 'Rings',
//     categorySlug: 'gold-rings',
//     metal: 'gold',
//     collections: ['daily-wear', 'lightweight'],
//     images: [IMG.ring4, IMG.ring3, IMG.ring5],
//     shortDescription: 'A bold, hand-finished band in 22K gold — built for the man who moves with quiet confidence.',
//     fullDescription: 'The Classic Men\'s Band is crafted from solid 22K gold with a brushed matte finish on the exterior and polished interior. Its weight and presence on the wrist speak of quality without pretension. Available in 6mm and 8mm widths.',
//     features: ['22K Gold', 'Brushed Finish', 'Available in 6mm & 8mm', 'Lifetime Polish Warranty'],
//     tags: ['gold', 'daily-wear', 'lightweight'],
//   },

//   // ── GOLD NECKLACES ───────────────────────────────
//   {
//     id: 'gn-001',
//     slug: 'gold-pearl-necklace',
//     name: 'Minimal Necklace',
//     category: 'Necklaces',
//     categorySlug: 'gold-necklaces',
//     metal: 'gold',
//     collections: ['party-wear', 'bridal'],
//     images: [IMG.necklace2, IMG.necklace1, IMG.necklace3],
//     shortDescription: 'South Sea pearls strung on 18K gold — a classic that never loses its brilliance.',
//     fullDescription: 'A strand of perfectly matched South Sea pearls suspended on 18K gold silk thread with a diamond-set gold clasp. Each pearl is individually hand-knotted and inspected for lustre, roundness, and surface quality. This is the necklace that defines generations.',
//     features: ['18K Gold Clasp', 'South Sea Pearls', 'Hand-knotted Thread', 'Comes in Luxury Box'],
//     tags: ['gold', 'party-wear', 'bridal'],
//   },
//   {
//     id: 'gn-002',
//     slug: 'gold-diamond-choker',
//     name: 'Gold Choker',
//     category: 'Chokers',
//     categorySlug: 'gold-chokers',
//     metal: 'gold',
//     collections: ['party-wear', 'bridal'],
//     images: [IMG.choker1, IMG.necklace4, IMG.necklace1],
//     shortDescription: 'A statement choker of channel-set diamonds in 22K gold — made for unforgettable evenings.',
//     fullDescription: 'The Diamond Gold Choker sits close to the neck in a sleek channel setting of brilliant-cut diamonds. Crafted in 22K gold, the contrast between warm metal and icy stones creates an effect both dramatic and sophisticated. This piece transitions seamlessly from ceremony to celebration.',
//     features: ['22K Hallmarked Gold', 'Channel-set Diamonds', 'Adjustable Length', 'Bridal Favourite'],
//     tags: ['gold', 'party-wear', 'bridal'],
//   },
//   {
//     id: 'gn-003',
//     slug: 'gold-neck-chain-men',
//     name: 'Curb Chain — Men',
//     category: 'Neck Chains',
//     categorySlug: 'gold-chains',
//     metal: 'gold',
//     collections: ['daily-wear'],
//     images: [IMG.chain1, IMG.chain2, IMG.chain3],
//     shortDescription: 'A substantial curb chain in 22K gold — the cornerstone of a man\'s jewellery collection.',
//     fullDescription: 'Hand-assembled link by link from 22K gold, our Curb Chain for men delivers a satisfying weight and a mirror polish that catches the light at every turn. Available in 18\", 20\", and 22\" lengths. Each chain is hallmarked and accompanied by a certificate of purity.',
//     features: ['22K Hallmarked Gold', 'Mirror Polish', '3 Length Options', 'BIS Certified'],
//     tags: ['gold', 'daily-wear'],
//   },

//   // ── GOLD EARRINGS ────────────────────────────────
//   {
//     id: 'ge-001',
//     slug: 'gold-jhumki-traditional',
//     name: 'Traditional Gold Jhumki',
//     category: 'Jhumki',
//     categorySlug: 'gold-jhumki',
//     metal: 'gold',
//     collections: ['traditional', 'party-wear'],
//     images: [IMG.jhumki1, IMG.earring1, IMG.earring2],
//     shortDescription: 'Hand-engraved jhumkis with meenakari work — India\'s finest earring tradition, perfected.',
//     fullDescription: 'These Traditional Gold Jhumkis are a tribute to centuries of Indian goldsmithing. Each piece is hand-engraved with floral motifs and accented with vibrant meenakari enamel work. The cascading bell drops are set with ruby and emerald accents, creating an earring that is both festive and refined.',
//     features: ['22K Gold Base', 'Hand Meenakari Work', 'Ruby & Emerald Accents', 'Traditional Craftsmanship'],
//     tags: ['gold', 'traditional', 'party-wear'],
//   },
//   {
//     id: 'ge-002',
//     slug: 'gold-tops-diamond',
//     name: ' Gold Tops',
//     category: 'Tops',
//     categorySlug: 'gold-tops',
//     metal: 'gold',
//     collections: ['daily-wear', 'lightweight'],
//     images: [IMG.tops, IMG.tops1, IMG.tops2],
//     shortDescription: 'Brilliant-cut diamond studs in a four-claw 18K gold setting — perfect for every day.',
//     fullDescription: 'The Diamond Tops are a wardrobe essential — a perfectly matched pair of brilliant-cut diamonds in a classic four-claw 18K gold setting. Their simplicity is their strength. Whether worn to a board meeting or a dinner, these tops elevate every look without competing with it.',
//     features: ['18K Gold', 'Brilliant-cut Diamond', 'Push-back Setting', 'Certificate Included'],
//     tags: ['gold', 'daily-wear', 'lightweight'],
//   },

//   // ── GOLD BRACELETS ───────────────────────────────
//   {
//     id: 'gb-001',
//     slug: 'gold-tennis-bracelet',
//     name: 'Tennis Bracelet',
//     category: 'Bracelets',
//     categorySlug: 'gold-bracelets',
//     metal: 'gold',
//     collections: ['party-wear'],
//     images: [IMG.bracelet1, IMG.bracelet2, IMG.bracelet3],
//     shortDescription: 'A continuous line of diamond-set gold links — the definitive luxury bracelet.',
//     fullDescription: 'Our Tennis Bracelet features a continuous channel of round brilliant diamonds set in 18K gold, flexing elegantly with every movement. The box clasp with safety catch ensures it stays where it belongs — on your wrist. A piece that transcends trends because it embodies perfection.',
//     features: ['18K Gold', 'F-G VS Diamond Quality', 'Safety Box Clasp', 'Resizable'],
//     tags: ['gold', 'party-wear'],
//   },
//   {
//     id: 'gb-002',
//     slug: 'gold-chudi-set',
//     name: 'Gold Chudi Set',
//     category: 'Chudi',
//     categorySlug: 'gold-chudi',
//     metal: 'gold',
//     collections: ['traditional', 'bridal'],
//     images: [IMG.chudi1, IMG.chudi2, IMG.chudi3],
//     shortDescription: 'A set of eight hand-carved gold chudi — the sound of celebration.',
//     fullDescription: 'Our Gold Chudi Set of eight bangles is carved from solid 22K gold and adorned with a repeating lotus motif. The graduated design — with slightly varied widths — creates a stacked look that moves and chimes beautifully. Customisable in weight from 2 to 4 grams per bangle.',
//     features: ['22K Gold', 'Lotus Carved Motif', 'Set of 8', 'Custom Weight Options'],
//     tags: ['gold', 'traditional', 'bridal'],
//   },

//   // ── GOLD BRIDAL ──────────────────────────────────
//   {
//     id: 'gbr-001',
//     slug: 'gold-bridal-full-set',
//     name: 'Royal Bridal Set',
//     category: 'Bridal Jewellery',
//     categorySlug: 'gold-bridal',
//     metal: 'gold',
//     collections: ['bridal', 'traditional'],
//     images: [IMG.bridal1, IMG.bridal2, IMG.bridal3],
//     shortDescription: 'A complete 22K gold bridal set — necklace, maang tikka, earrings, and bangles.',
//     fullDescription: 'The Royal Bridal Set is our flagship offering for the bride who deserves nothing less than everything. Crafted from 22K gold with hand-placed rubies, emeralds, and polki diamonds, this seven-piece set — necklace, choker, maang tikka, earrings, nath, bangles, and payal — tells the story of India\'s bridal heritage in the most luminous way possible.',
//     features: ['22K Hallmarked Gold', '7-Piece Complete Set', 'Polki & Ruby Setting', 'Bespoke Fitting Service'],
//     tags: ['gold', 'bridal', 'traditional'],
//   },
//   {
//     id: 'gbr-002',
//     slug: 'gold-mangalsutra-classic',
//     name: 'Classic Mangalsutra',
//     category: 'Mangalsutra',
//     categorySlug: 'gold-mangalsutra',
//     metal: 'gold',
//     collections: ['bridal', 'daily-wear'],
//     images: [IMG.mangal1, IMG.managl2, IMG.managal3],
//     shortDescription: 'A sacred mangalsutra in 22K gold with black bead pattern — tradition refined.',
//     fullDescription: 'Our Classic Mangalsutra combines the sacred black bead pattern with a central pendant of 22K gold set with a solitaire diamond. The chain blends traditional tanmaniya design with a contemporary slim profile, making it suitable for daily wear without ever losing its ceremonial gravitas.',
//     features: ['22K Gold Pendant', 'Certified Diamond', 'Traditional Black Bead', 'Length Customisable'],
//     tags: ['gold', 'bridal', 'daily-wear'],
//   },

//   // ── GOLD LOCKETS ─────────────────────────────────
//   {
//     id: 'gl-001',
//     slug: 'gold-om-locket',
//     name: 'Om Locket — Gold',
//     category: 'Lockets',
//     categorySlug: 'gold-lockets',
//     metal: 'gold',
//     collections: ['traditional', 'daily-wear'],
//     images: [IMG.omgold, IMG.omgold1, IMG.omgold2],
//     shortDescription: 'A hand-carved Om locket in 22K gold — devotion you can wear every day.',
//     fullDescription: 'The Om Locket is cast from 22K gold with a deeply hand-engraved Om symbol on the face and a smooth mirror finish on the reverse. The bail is generously proportioned to fit chains up to 5mm wide. A piece that bridges the sacred and the everyday.',
//     features: ['22K Gold', 'Hand-engraved Om', 'Wide Bail Fitting', 'Gift-ready Box'],
//     tags: ['gold', 'traditional', 'daily-wear'],
//   },

//   // ── GOLD TEMPLE ──────────────────────────────────
//   {
//     id: 'gt-001',
//     slug: 'gold-temple-necklace',
//     name: 'Temple Necklace',
//     category: 'Temple Jewellery',
//     categorySlug: 'gold-temple',
//     metal: 'gold',
//     collections: ['traditional'],
//     images: [IMG.temple1, IMG.temple2, IMG.temple3],
//     shortDescription: 'Temple-inspired gold necklace with deity motifs — sacred artistry at its finest.',
//     fullDescription: 'Inspired by the adornments of temple deities across South India, this necklace is a work of devotional art. Each panel is individually cast and hand-finished, depicting traditional motifs of Lakshmi, lotus, and peacock in rich 22K gold. The layered design falls across the chest in a cascade of golden opulence.',
//     features: ['22K Gold', 'Hand-finished Panels', 'Temple Motif Design', 'South Indian Tradition'],
//     tags: ['gold', 'traditional'],
//   },

//   // ── SILVER PAYAL ─────────────────────────────────
//   {
//     id: 'sp-001',
//     slug: 'silver-payal-designer',
//     name: 'Designer Payal',
//     category: 'Payal',
//     categorySlug: 'silver-payal',
//     metal: 'silver',
//     collections: ['traditional', 'daily-wear'],
//     images: [IMG.payal1, IMG.payal2, IMG.payal3],
//     shortDescription: 'Sterling silver anklets with a delicate ghungroo pattern — the music of tradition.',
//     fullDescription: 'Our Designer Payal is crafted from 92.5 sterling silver with an interlocking chain design and tiny ghungroo bells that chime softly with each step. The lobster clasp allows easy adjustment to fit any ankle. Sold as a pair, presented in a luxury velvet pouch.',
//     features: ['92.5 Sterling Silver', 'Ghungroo Bell Drops', 'Adjustable Lobster Clasp', 'Sold as a Pair'],
//     tags: ['silver', 'traditional', 'daily-wear'],
//   },

//   // ── SILVER RINGS ─────────────────────────────────
//   {
//     id: 'sr-001',
//     slug: 'silver-oxidised-ring',
//     name: 'Oxidised Silver Ring',
//     category: 'Rings',
//     categorySlug: 'silver-rings',
//     metal: 'silver',
//     collections: ['daily-wear', 'lightweight'],
//     images: [IMG.silverring1, IMG.silverring2, IMG.silverring3],
//     shortDescription: 'A hand-oxidised band with tribal texture — contemporary style rooted in tradition.',
//     fullDescription: 'The Oxidised Silver Ring features a wide band surface with hand-stamped geometric patterns that are then selectively oxidised to create contrast. The result is a ring that feels simultaneously ancient and modern — equally at home with jeans or a kurta.',
//     features: ['92.5 Sterling Silver', 'Hand-oxidised Finish', 'Tribal Pattern', 'Unisex Design'],
//     tags: ['silver', 'daily-wear', 'lightweight'],
//   },

//   // ── SILVER KADE ──────────────────────────────────
//   {
//     id: 'sk-001',
//     slug: 'silver-kade-men',
//     name: 'Men\'s Silver Kade',
//     category: 'Kade',
//     categorySlug: 'silver-kade',
//     metal: 'silver',
//     collections: ['traditional'],
//     images: [IMG.kade1, IMG.kade2, IMG.kade3],
//     shortDescription: 'A solid silver kade with a carved rope edge — worn by men who honour tradition.',
//     fullDescription: 'Cast from solid 92.5 silver, our Men\'s Kade features a traditional rope-edge design that is both decorative and structurally reinforcing. The open-cuff design allows a small range of flex for easy wearing, while the heavy gauge ensures it sits with authority on the wrist. Each piece is hallmarked.',
//     features: ['92.5 Sterling Silver', 'Rope Edge Design', 'Open-cuff for Flex', 'BIS Hallmarked'],
//     tags: ['silver', 'traditional'],
//   },

//   // ── SILVER EARRINGS ──────────────────────────────
//   {
//     id: 'se-001',
//     slug: 'silver-jhumke-oxidised',
//     name: 'Oxidised Silver Jhumke',
//     category: 'Jhumke',
//     categorySlug: 'silver-jhumke',
//     metal: 'silver',
//     collections: ['traditional', 'party-wear'],
//     images: [IMG.silverearring, IMG.earring3, IMG.silverearring1],
//     shortDescription: 'Large oxidised silver jhumke with beaded drops — bold, beautiful, unmistakably Indian.',
//     fullDescription: 'These Oxidised Silver Jhumke are a celebration of Indian craftsmanship at its most expressive. A wide dome of hand-engraved silver is bordered by delicate silver granulation, with five beaded drops that swing and catch the light. The lever-back hook ensures all-day comfort.',
//     features: ['92.5 Sterling Silver', 'Hand Oxidised', 'Lever-back Hook', 'Beaded Drop Finish'],
//     tags: ['silver', 'traditional', 'party-wear'],
//   },

//   // ── SILVER PENDANTS ──────────────────────────────
//   {
//     id: 'spe-001',
//     slug: 'silver-om-pendant',
//     name: 'Silver Pendant',
//     category: 'Pendants',
//     categorySlug: 'silver-pendants',
//     metal: 'silver',
//     collections: ['daily-wear', 'lightweight'],
//     images: [IMG.pendant1, IMG.pendant2, IMG.pendant3],
//     shortDescription: 'A minimal Om pendant in 92.5 silver — sacred geometry in a modern silhouette.',
//     fullDescription: 'The Silver Om Pendant strips the sacred symbol to its essence — a clean, minimal form cast in 92.5 sterling silver and given a high-polish finish. It pairs equally well with a chunky silver chain for a bold statement or a fine box chain for everyday subtlety.',
//     features: ['92.5 Sterling Silver', 'High-polish Finish', 'Universal Bail', 'Hypoallergenic'],
//     tags: ['silver', 'daily-wear', 'lightweight'],
//   },

//   // ── SILVER BRACELETS ─────────────────────────────
//   {
//     id: 'sb-001',
//     slug: 'silver-bracelet-women',
//     name: 'Filigree Silver Bracelet',
//     category: 'Bracelets',
//     categorySlug: 'silver-bracelets',
//     metal: 'silver',
//     collections: ['lightweight', 'daily-wear'],
//     images: [IMG.silverbracelet, IMG.  silverbracelet2, IMG.  silverbracelet3],
//     shortDescription: 'Gossamer-thin silver filigree bracelet — the craft of Cuttack made wearable.',
//     fullDescription: 'Inspired by the legendary Cuttack filigree tradition, this bracelet is woven from 92.5 silver wire drawn to a diameter of less than 0.5mm. The result is a piece of extraordinary delicacy that belies its durability. A toggle clasp makes it easy to put on and take off solo.',
//     features: ['92.5 Sterling Silver', 'Cuttack Filigree Technique', 'Toggle Clasp', 'Ultra Lightweight'],
//     tags: ['silver', 'lightweight', 'daily-wear'],
//   },
// ]

// /* ── Derived helpers ─────────────────────────────── */
// export function getProductBySlug(slug) {
//   return products.find(p => p.slug === slug) || null
// }

// export function getProductsByCategory(categorySlug) {
//   return products.filter(p => p.categorySlug === categorySlug)
// }

// export function getProductsByMetal(metal) {
//   return products.filter(p => p.metal === metal)
// }

// export function getProductsByCollection(collectionSlug) {
//   return products.filter(p => p.collections.includes(collectionSlug))
// }

// export function getProductsByTag(tag) {
//   return products.filter(p => p.tags.includes(tag))
// }

// export function getRelatedProducts(product, limit = 4) {
//   return products
//     .filter(p =>
//       p.id !== product.id &&
//       (p.categorySlug === product.categorySlug || p.metal === product.metal)
//     )
//     .slice(0, limit)
// }

// export const allCategories = [
//   // Gold
//   { label: 'Rings', slug: 'gold-rings', metal: 'gold' },
//   { label: 'Neck Chains', slug: 'gold-chains', metal: 'gold' },
//   { label: 'Lockets', slug: 'gold-lockets', metal: 'gold' },
//   { label: 'Kundal', slug: 'gold-kundal', metal: 'gold' },
//   { label: 'Earrings', slug: 'gold-earrings', metal: 'gold' },
//   { label: 'Nose Rings', slug: 'gold-nose-rings', metal: 'gold' },
//   { label: 'Nose Pins', slug: 'gold-nose-pins', metal: 'gold' },
//   { label: 'Necklaces', slug: 'gold-necklaces', metal: 'gold' },
//   { label: 'Chokers', slug: 'gold-chokers', metal: 'gold' },
//   { label: 'Rani Haar', slug: 'gold-rani-haar', metal: 'gold' },
//   { label: 'Bali', slug: 'gold-bali', metal: 'gold' },
//   { label: 'Om Collection', slug: 'gold-om', metal: 'gold' },
//   { label: 'Bracelets', slug: 'gold-bracelets', metal: 'gold' },
//   { label: 'Chudi', slug: 'gold-chudi', metal: 'gold' },
//   { label: 'Kade', slug: 'gold-kade', metal: 'gold' },
//   { label: 'Mangalsutra', slug: 'gold-mangalsutra', metal: 'gold' },
//   { label: 'Kanthi', slug: 'gold-kanthi', metal: 'gold' },
//   { label: 'Nath', slug: 'gold-nath', metal: 'gold' },
//   { label: 'Bridal Jewellery', slug: 'gold-bridal', metal: 'gold' },
//   { label: 'Kids Jewellery', slug: 'gold-kids', metal: 'gold' },
//   { label: 'Jhumki', slug: 'gold-jhumki', metal: 'gold' },
//   { label: 'Tops', slug: 'gold-tops', metal: 'gold' },
//   { label: 'Gold Coins', slug: 'gold-coins', metal: 'gold' },
//   { label: 'Temple Jewellery', slug: 'gold-temple', metal: 'gold' },
//   // Silver
//   { label: 'Payal', slug: 'silver-payal', metal: 'silver' },
//   { label: 'Toe Rings', slug: 'silver-toe-rings', metal: 'silver' },
//   { label: 'Neck Chains', slug: 'silver-chains', metal: 'silver' },
//   { label: 'Rings', slug: 'silver-rings', metal: 'silver' },
//   { label: 'Kade', slug: 'silver-kade', metal: 'silver' },
//   { label: 'Bracelets', slug: 'silver-bracelets', metal: 'silver' },
//   { label: 'Jhumke', slug: 'silver-jhumke', metal: 'silver' },
//   { label: 'Earrings', slug: 'silver-earrings', metal: 'silver' },
//   { label: 'Baby Sets', slug: 'silver-baby', metal: 'silver' },
//   { label: 'Pendants', slug: 'silver-pendants', metal: 'silver' },
//   { label: 'Kids Kade', slug: 'silver-kids-kade', metal: 'silver' },
//   { label: 'Silver Coins', slug: 'silver-coins', metal: 'silver' },
//   { label: 'Gift Items', slug: 'silver-gifts', metal: 'silver' },
// ]

/* ─────────────────────────────────────────────────────
   catalogue.js — Complete Aurum Jewellery Data Layer
   ───────────────────────────────────────────────────── */

export const WHATSAPP_NUMBER = '919876543210'

/* ── Image pools ──────────────────────────────────── */
const I = {
  r1:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=90',
  r2:'https://i.pinimg.com/736x/e3/6a/99/e36a996702c4d41004640f1a13e68598.jpg',
  r3:'https://i.pinimg.com/1200x/94/fc/3f/94fc3fec617cb8efd9020f3e900b9b01.jpg',
  r4:'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=900&q=90',
  r5:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=90',
  n1:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=90',
  n2:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=90',
  n3:'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=90',
  n4:'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=900&q=90',
  b1:'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=90',
  b2:'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&q=90',
  b3:'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=90',
  e1:'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=900&q=90',
  e2:'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=90',
  e3:'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=90',
  br1:'https://images.unsplash.com/photo-1498671546682-94a232c26d17?w=900&q=90',
  br2:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=90',
  ch1:'https://i.pinimg.com/1200x/7c/70/18/7c70188c2fe9bedfc5d32de5bb3010ab.jpg',
  lk1:'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=90',
  t1:'https://images.unsplash.com/photo-1583937443604-f42c0f2c6bef?w=900&q=90',
  py1:'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=900&q=90',
  pd1:'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=900&q=90',
  kd1:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=90',
  jk1:'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=900&q=90',
  mg1:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=90',
  ck1:'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=90',
  gn1:'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=900&q=90',
  cn1:'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&q=90',
  sp1:'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=900&q=90',
  ko1:'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=90',
}

/* ── Category registry — drives ALL routes & nav ─── */
export const CATEGORIES = [
  // GOLD MEN
  { slug:'gold/mens/rings',        label:'Gold Rings',         gender:'men',   metal:'gold', path:'/shop/gold/mens/rings' },
  { slug:'gold/mens/chains',       label:'Gold Neck Chains',   gender:'men',   metal:'gold', path:'/shop/gold/mens/chains' },
  { slug:'gold/mens/earrings',     label:'Gold Earrings',      gender:'men',   metal:'gold', path:'/shop/gold/mens/earrings' },
  { slug:'gold/mens/bali',         label:'Gold Bali',          gender:'men',   metal:'gold', path:'/shop/gold/mens/bali' },
  { slug:'gold/mens/bracelets',    label:'Gold Bracelets',     gender:'men',   metal:'gold', path:'/shop/gold/mens/bracelets' },
  { slug:'gold/mens/kada',         label:'Gold Kada',          gender:'men',   metal:'gold', path:'/shop/gold/mens/kada' },
  { slug:'gold/mens/kanthi',       label:'Gold Kanthi',        gender:'men',   metal:'gold', path:'/shop/gold/mens/kanthi' },
  { slug:'gold/mens/om-lockets',   label:'Gold Om Lockets',    gender:'men',   metal:'gold', path:'/shop/gold/mens/om-lockets' },
  { slug:'gold/mens/maa-lockets',  label:'Gold Maa Lockets',   gender:'men',   metal:'gold', path:'/shop/gold/mens/maa-lockets' },
  { slug:'gold/mens/gurjar-lockets',label:'Gold Gurjar Lockets',gender:'men',  metal:'gold', path:'/shop/gold/mens/gurjar-lockets' },
  { slug:'gold/mens/om-collection',label:'Gold Om Collection', gender:'men',   metal:'gold', path:'/shop/gold/mens/om-collection' },
  // GOLD WOMEN
  { slug:'gold/womens/rings',      label:'Gold Rings',         gender:'women', metal:'gold', path:'/shop/gold/womens/rings' },
  { slug:'gold/womens/chains',     label:'Gold Neck Chains',   gender:'women', metal:'gold', path:'/shop/gold/womens/chains' },
  { slug:'gold/womens/earrings',   label:'Gold Earrings',      gender:'women', metal:'gold', path:'/shop/gold/womens/earrings' },
  { slug:'gold/womens/necklaces',  label:'Gold Necklaces',     gender:'women', metal:'gold', path:'/shop/gold/womens/necklaces' },
  { slug:'gold/womens/chokers',    label:'Gold Chokers',       gender:'women', metal:'gold', path:'/shop/gold/womens/chokers' },
  { slug:'gold/womens/rani-haar',  label:'Gold Rani Haar',     gender:'women', metal:'gold', path:'/shop/gold/womens/rani-haar' },
  { slug:'gold/womens/bali',       label:'Gold Bali',          gender:'women', metal:'gold', path:'/shop/gold/womens/bali' },
  { slug:'gold/womens/bracelets',  label:'Gold Bracelets',     gender:'women', metal:'gold', path:'/shop/gold/womens/bracelets' },
  { slug:'gold/womens/chudi',      label:'Gold Chudi',         gender:'women', metal:'gold', path:'/shop/gold/womens/chudi' },
  { slug:'gold/womens/kada',       label:'Gold Kada',          gender:'women', metal:'gold', path:'/shop/gold/womens/kada' },
  { slug:'gold/womens/mangalsutra',label:'Mangalsutra',        gender:'women', metal:'gold', path:'/shop/gold/womens/mangalsutra' },
  { slug:'gold/womens/nath',       label:'Nath',               gender:'women', metal:'gold', path:'/shop/gold/womens/nath' },
  { slug:'gold/womens/nose-rings', label:'Nose Rings',         gender:'women', metal:'gold', path:'/shop/gold/womens/nose-rings' },
  { slug:'gold/womens/nose-pins',  label:'Nose Pins',          gender:'women', metal:'gold', path:'/shop/gold/womens/nose-pins' },
  { slug:'gold/womens/kundal',     label:'Kundal',             gender:'women', metal:'gold', path:'/shop/gold/womens/kundal' },
  { slug:'gold/womens/jhumki',     label:'Jhumki',             gender:'women', metal:'gold', path:'/shop/gold/womens/jhumki' },
  { slug:'gold/womens/tops',       label:'Tops',               gender:'women', metal:'gold', path:'/shop/gold/womens/tops' },
  { slug:'gold/womens/temple',     label:'Temple Jewellery',   gender:'women', metal:'gold', path:'/shop/gold/womens/temple' },
  // GOLD SPECIAL
  { slug:'gold/bridal',            label:'Bridal Jewellery',   gender:'women', metal:'gold', path:'/shop/gold/bridal', special:true },
  { slug:'gold/kids',              label:'Kids Jewellery',     gender:'kids',  metal:'gold', path:'/shop/gold/kids', special:true },
  { slug:'gold/coins',             label:'Gold Coins',         gender:'unisex',metal:'gold', path:'/shop/gold/coins', special:true },
  // SILVER MEN
  { slug:'silver/mens/rings',      label:'Silver Rings',       gender:'men',   metal:'silver', path:'/shop/silver/mens/rings' },
  { slug:'silver/mens/chains',     label:'Silver Neck Chains', gender:'men',   metal:'silver', path:'/shop/silver/mens/chains' },
  { slug:'silver/mens/kada',       label:'Silver Kada',        gender:'men',   metal:'silver', path:'/shop/silver/mens/kada' },
  { slug:'silver/mens/bracelets',  label:'Silver Bracelets',   gender:'men',   metal:'silver', path:'/shop/silver/mens/bracelets' },
  // SILVER WOMEN
  { slug:'silver/womens/rings',    label:'Silver Rings',       gender:'women', metal:'silver', path:'/shop/silver/womens/rings' },
  { slug:'silver/womens/chains',   label:'Silver Neck Chains', gender:'women', metal:'silver', path:'/shop/silver/womens/chains' },
  { slug:'silver/womens/earrings', label:'Silver Earrings',    gender:'women', metal:'silver', path:'/shop/silver/womens/earrings' },
  { slug:'silver/womens/jhumke',   label:'Silver Jhumke',      gender:'women', metal:'silver', path:'/shop/silver/womens/jhumke' },
  { slug:'silver/womens/payal',    label:'Silver Payal',       gender:'women', metal:'silver', path:'/shop/silver/womens/payal' },
  { slug:'silver/womens/toe-rings',label:'Silver Toe Rings',   gender:'women', metal:'silver', path:'/shop/silver/womens/toe-rings' },
  { slug:'silver/womens/bracelets',label:'Silver Bracelets',   gender:'women', metal:'silver', path:'/shop/silver/womens/bracelets' },
  { slug:'silver/womens/kada',     label:'Silver Kada',        gender:'women', metal:'silver', path:'/shop/silver/womens/kada' },
  { slug:'silver/womens/pendants', label:'Silver Pendants',    gender:'women', metal:'silver', path:'/shop/silver/womens/pendants' },
  // SILVER SPECIAL
  { slug:'silver/kids',            label:'Silver Kids',        gender:'kids',  metal:'silver', path:'/shop/silver/kids', special:true },
  { slug:'silver/coins',           label:'Silver Coins',       gender:'unisex',metal:'silver', path:'/shop/silver/coins', special:true },
  { slug:'silver/gifts',           label:'Silver Gift Items',  gender:'unisex',metal:'silver', path:'/shop/silver/gifts', special:true },
]

export function getCategoryBySlug(slug) {
  return CATEGORIES.find(c => c.slug === slug) || null
}

/* ── Collection registry ─────────────────────────── */
export const COLLECTIONS = [
  { slug:'mens/lightweight',    label:"Men's Lightweight",       gender:'men',   path:'/collections/mens/lightweight',    image:I.ch1 },
  { slug:'mens/daily-wear',     label:"Men's Daily Wear",        gender:'men',   path:'/collections/mens/daily-wear',     image:I.r3  },
  { slug:'mens/party-wear',     label:"Men's Party Wear",        gender:'men',   path:'/collections/mens/party-wear',     image:I.r2  },
  { slug:'mens/traditional',    label:"Men's Traditional",       gender:'men',   path:'/collections/mens/traditional',    image:I.kd1 },
  { slug:'womens/lightweight',  label:"Women's Lightweight",     gender:'women', path:'/collections/womens/lightweight',  image:I.e2  },
  { slug:'womens/daily-wear',   label:"Women's Daily Wear",      gender:'women', path:'/collections/womens/daily-wear',   image:I.n1  },
  { slug:'womens/party-wear',   label:"Women's Party Wear",      gender:'women', path:'/collections/womens/party-wear',   image:I.e3  },
  { slug:'womens/traditional',  label:"Women's Traditional",     gender:'women', path:'/collections/womens/traditional',  image:I.jk1 },
  { slug:'bridal',              label:'Bridal Collection',       gender:'women', path:'/collections/bridal',              image:I.br1 },
  { slug:'kids',                label:'Kids Collection',         gender:'kids',  path:'/collections/kids',               image:I.b1  },
]

export function getCollectionBySlug(slug) {
  return COLLECTIONS.find(c => c.slug === slug) || null
}

/* ── Product factory: generates products for any category slug ─ */
const PRODUCT_TEMPLATES = {
  'gold/mens/rings': [
    { name:'Classic Gold Band',      desc:'A sturdy 22K gold band with a brushed finish — the mark of measured confidence.',          imgs:[I.r3,I.r1,I.r4], features:['22K Gold','Brushed Finish','BIS Certified','Custom Sizing'] },
    { name:'Signet Ring',            desc:'Bold oval signet in 22K gold, hand-engraved with a traditional motif.',                    imgs:[I.r4,I.r3,I.r2], features:['22K Gold','Hand-engraved','Heavyweight Design','Hallmarked'] },
    { name:'Om Band Ring',           desc:'Sacred Om symbol intricately carved on a solid 22K gold band.',                            imgs:[I.r1,I.r4,I.r3], features:['22K Gold','Om Motif','Anti-tarnish Finish','BIS Certified'] },
    { name:'Diamond-set Band',       desc:'A clean 18K gold band channel-set with three brilliant-cut diamonds.',                    imgs:[I.r2,I.r1,I.r4], features:['18K Gold','Diamond Channel Set','Polished Finish','GIA Certified'] },
  ],
  'gold/womens/rings': [
    { name:'Solitaire Diamond Ring', desc:'A timeless solitaire set in 22K gold — the ultimate declaration of love.',                 imgs:[I.r1,I.r2,I.r3], features:['22K Gold','Brilliant-cut Diamond','Cathedral Setting','BIS Certified'] },
    { name:'Rose Gold Halo Ring',    desc:'A halo of micro-pavé stones encircles a central gem in 18K rose gold.',                   imgs:[I.r2,I.r1,I.r4], features:['18K Rose Gold','Pavé Diamond Halo','GIA Certified Stone','Custom Sizing'] },
    { name:'Floral Cocktail Ring',   desc:'Inspired by a blooming lotus — petals of gold surround a polished gemstone.',             imgs:[I.r4,I.r2,I.r3], features:['22K Gold','Floral Design','Gemstone Centre','Handcrafted'] },
    { name:'Twisted Band',           desc:'Two strands of 18K gold twisted into one — modern, minimal, endlessly elegant.',          imgs:[I.r3,I.r4,I.r1], features:['18K Gold','Twisted Design','High-polish','Stackable'] },
  ],
  'gold/mens/chains': [
    { name:'Curb Chain — Heavy',     desc:'Hand-assembled curb chain in 22K gold, available in 18", 20" and 22".',                   imgs:[I.ch1,I.n3,I.n4], features:['22K Gold','Mirror Polish','3 Length Options','BIS Certified'] },
    { name:'Figaro Chain',           desc:'Classic Figaro pattern in 22K gold — alternating oval and round links.',                  imgs:[I.n3,I.ch1,I.n4], features:['22K Gold','Figaro Pattern','Secure Lobster Clasp','Hallmarked'] },
    { name:'Rope Chain',             desc:'A tightly coiled rope chain in 22K gold that gleams from every angle.',                   imgs:[I.n4,I.ch1,I.n3], features:['22K Gold','Rope Weave','3mm Width','BIS Certified'] },
  ],
  'gold/womens/chains': [
    { name:'Delicate Box Chain',     desc:'A gossamer-thin box chain in 18K gold — perfect for layering lockets.',                   imgs:[I.ch1,I.n1,I.n2], features:['18K Gold','Box Link','Lightweight','Hallmarked'] },
    { name:'Herringbone Chain',      desc:'Flat, flexible herringbone weave in 22K gold that lies smooth against the skin.',         imgs:[I.n2,I.ch1,I.n3], features:['22K Gold','Herringbone Pattern','Flat Profile','BIS Certified'] },
    { name:'Gold Ball Chain',        desc:'Tiny spheres of 22K gold strung into a delicate everyday chain.',                        imgs:[I.n1,I.n2,I.ch1], features:['22K Gold','Ball Link','16" Length','Lightweight'] },
  ],
  'gold/mens/earrings': [
    { name:'Classic Gold Stud',      desc:'A simple 22K gold dome stud — the essential men\'s earring.',                             imgs:[I.e2,I.e1,I.e3], features:['22K Gold','Butterfly Back','6mm Diameter','Hallmarked'] },
    { name:'Om Stud',                desc:'Sacred Om engraved on a flat gold disc — devotion you can wear daily.',                   imgs:[I.e1,I.e2,I.e3], features:['22K Gold','Om Engraving','Push-back Setting','BIS Certified'] },
  ],
  'gold/womens/earrings': [
    { name:'Diamond Drop Earring',   desc:'A single brilliant-cut diamond suspends from a delicate 18K gold hook.',                  imgs:[I.e3,I.e1,I.e2], features:['18K Gold','Brilliant-cut Diamond','Hook Setting','GIA Certified'] },
    { name:'Gold Flower Stud',       desc:'A five-petal gold flower with a pearl centre — timeless feminine elegance.',              imgs:[I.e1,I.e3,I.e2], features:['22K Gold','Pearl Centre','Push-back','Handcrafted'] },
    { name:'Chandelier Earring',     desc:'Three tiers of 22K gold drops that catch the light with every movement.',                 imgs:[I.e2,I.e3,I.e1], features:['22K Gold','Three-tier Drop','Hook Back','Party Favourite'] },
  ],
  'gold/mens/bali': [
    { name:'Classic Gold Bali',      desc:'A smooth circular bali in 22K gold — the definitive men\'s hoop earring.',               imgs:[I.e2,I.e1,I.ko1], features:['22K Gold','Smooth Finish','Hinged Closure','BIS Certified'] },
    { name:'Twisted Bali',           desc:'A twisted rope texture on a classic bali form, in 22K gold.',                            imgs:[I.ko1,I.e2,I.e1], features:['22K Gold','Rope Texture','Hinged Clasp','Hallmarked'] },
  ],
  'gold/womens/bali': [
    { name:'Floral Bali',            desc:'Tiny floral clusters set in 22K gold — a feminine take on the classic hoop.',             imgs:[I.e3,I.e1,I.ko1], features:['22K Gold','Floral Detail','Hinged Closure','Handcrafted'] },
    { name:'Diamond Bali',           desc:'A continuous channel of diamonds set in 18K gold bali — pure sparkle.',                  imgs:[I.ko1,I.e3,I.e2], features:['18K Gold','Diamond Channel','Safety Catch','GIA Certified'] },
  ],
  'gold/mens/bracelets': [
    { name:'Curb Bracelet',          desc:'A heavy curb-link bracelet in 22K gold — bold, masculine, enduring.',                    imgs:[I.b2,I.b1,I.b3], features:['22K Gold','Curb Link','Box Clasp','BIS Certified'] },
    { name:'ID Bracelet',            desc:'Flat-link ID bracelet in 22K gold with engraving surface on the plate.',                  imgs:[I.b3,I.b2,I.b1], features:['22K Gold','ID Plate','Engravable','Hallmarked'] },
  ],
  'gold/womens/bracelets': [
    { name:'Tennis Bracelet',        desc:'A continuous channel of brilliant diamonds in 18K gold — the definitive luxury bracelet.',imgs:[I.b1,I.b2,I.b3], features:['18K Gold','F-G VS Diamonds','Box Clasp','GIA Certified'] },
    { name:'Gold Charm Bracelet',    desc:'A delicate 22K gold chain with three traditional charms — personal and meaningful.',      imgs:[I.b3,I.b1,I.b2], features:['22K Gold','3 Charms Included','Lobster Clasp','Customisable'] },
    { name:'Bangle with Stones',     desc:'A solid 22K gold bangle studded with ruby and emerald accents.',                         imgs:[I.b2,I.b3,I.b1], features:['22K Gold','Ruby & Emerald','Polished Finish','BIS Certified'] },
  ],
  'gold/mens/kada': [
    { name:'Plain Kada — Heavy',     desc:'A thick solid 22K gold kada — worn as a mark of tradition and strength.',                 imgs:[I.kd1,I.b2,I.b3], features:['22K Gold','Open-cuff','Solid Weight','BIS Certified'] },
    { name:'Rope-edge Kada',         desc:'Traditional rope-edge design on a solid 22K gold open kada.',                            imgs:[I.b3,I.kd1,I.b2], features:['22K Gold','Rope Edge','Open Cuff','Hallmarked'] },
  ],
  'gold/womens/kada': [
    { name:'Floral Kada',            desc:'A delicate 22K gold kada with hand-carved floral motifs all around.',                    imgs:[I.b1,I.kd1,I.b3], features:['22K Gold','Floral Motif','Lightweight','BIS Certified'] },
    { name:'Diamond Kada',           desc:'A 22K gold kada channel-set with brilliant diamonds along its span.',                    imgs:[I.kd1,I.b1,I.b2], features:['22K Gold','Diamond-set','Safety Clasp','GIA Certified'] },
  ],
  'gold/mens/kanthi': [
    { name:'Traditional Kanthi',     desc:'A devotional kanthi necklace in 22K gold with sacred bead design.',                      imgs:[I.n3,I.n4,I.ch1], features:['22K Gold','Sacred Beads','Traditional Design','BIS Certified'] },
    { name:'Om Kanthi',              desc:'Om-embossed beads strung in 22K gold — worn as a devotional ornament.',                  imgs:[I.n4,I.n3,I.lk1], features:['22K Gold','Om Motif Beads','Adjustable Length','Hallmarked'] },
  ],
  'gold/mens/om-lockets': [
    { name:'Om Locket — Classic',    desc:'A hand-carved Om symbol on a solid 22K gold locket — devotion made wearable.',           imgs:[I.lk1,I.n3,I.ch1], features:['22K Gold','Hand-carved Om','Wide Bail','Gift-ready Box'] },
    { name:'Om Locket — 3D',         desc:'A three-dimensional Om locket in 22K gold with high-relief engraving.',                  imgs:[I.n3,I.lk1,I.n4], features:['22K Gold','3D Relief','Polished Finish','BIS Certified'] },
  ],
  'gold/mens/maa-lockets': [
    { name:'Maa Locket — Script',    desc:'The word "Maa" in elegant Devanagari script, crafted in solid 22K gold.',                imgs:[I.lk1,I.n4,I.n3], features:['22K Gold','Devanagari Script','Handcrafted','Hallmarked'] },
    { name:'Maa Locket — Portrait',  desc:'A goddess Durga portrait locket in 22K gold — a tribute to divine motherhood.',          imgs:[I.n4,I.lk1,I.ch1], features:['22K Gold','Durga Portrait','Embossed Detail','BIS Certified'] },
  ],
  'gold/mens/gurjar-lockets': [
    { name:'Gurjar Pride Locket',    desc:'A locket in 22K gold featuring traditional Gurjar community motifs.',                    imgs:[I.lk1,I.ch1,I.n3], features:['22K Gold','Gurjar Motif','Cultural Heritage','BIS Certified'] },
    { name:'Gurjar Heritage Locket', desc:'Bold Gurjar warrior emblem cast in 22K gold — a locket of cultural pride.',              imgs:[I.n3,I.lk1,I.n4], features:['22K Gold','Heritage Design','Deep Engraving','Hallmarked'] },
  ],
  'gold/mens/om-collection': [
    { name:'Om Pendant',             desc:'A minimal Om pendant in 22K gold — sacred simplicity.',                                  imgs:[I.lk1,I.n3,I.ch1], features:['22K Gold','Om Design','Lightweight','BIS Certified'] },
    { name:'Om Signet Ring',         desc:'The Om symbol inlaid in a classic 22K gold signet ring.',                                imgs:[I.r4,I.r3,I.lk1], features:['22K Gold','Om Inlay','Signet Style','Hallmarked'] },
    { name:'Om Bangle',              desc:'A solid 22K gold bangle with continuous Om motif engraved around its surface.',          imgs:[I.kd1,I.b2,I.lk1], features:['22K Gold','Om All-around','Open Cuff','BIS Certified'] },
  ],
  'gold/womens/necklaces': [
    { name:'Pearl Strand Necklace',  desc:'South Sea pearls strung on 18K gold silk — a classic that transcends generations.',      imgs:[I.n2,I.n1,I.n3], features:['18K Gold Clasp','South Sea Pearls','Hand-knotted','Luxury Box'] },
    { name:'Layered Gold Necklace',  desc:'Three layers of 22K gold chains at varying lengths — effortlessly editorial.',           imgs:[I.n1,I.n2,I.n4], features:['22K Gold','Triple Layer','Adjustable','BIS Certified'] },
    { name:'Emerald Drop Necklace',  desc:'A cushion-cut emerald suspended from a delicate 22K gold chain.',                       imgs:[I.n3,I.n1,I.n2], features:['22K Gold','Certified Emerald','Single Drop','Hallmarked'] },
  ],
  'gold/womens/chokers': [
    { name:'Diamond Gold Choker',    desc:'Channel-set diamonds in a close-fitting 22K gold choker — drama at its finest.',        imgs:[I.ck1,I.n4,I.n1], features:['22K Gold','Channel Diamonds','Adjustable','Bridal Favourite'] },
    { name:'Floral Choker',          desc:'22K gold florets linked into a choker that moves beautifully with the neck.',            imgs:[I.n4,I.ck1,I.n3], features:['22K Gold','Floral Links','Box Clasp','Handcrafted'] },
  ],
  'gold/womens/rani-haar': [
    { name:'Rani Haar — Classic',    desc:'A long layered rani haar in 22K gold with ruby and meenakari pendant work.',             imgs:[I.n1,I.br1,I.n2], features:['22K Gold','Ruby & Meenakari','Multi-layer','Bridal Weight'] },
    { name:'Rani Haar — Pearls',     desc:'Alternating 22K gold beads and South Sea pearls in a grand rani haar.',                 imgs:[I.n2,I.n1,I.br2], features:['22K Gold','Pearl Accents','Knotted Thread','BIS Certified'] },
  ],
  'gold/womens/chudi': [
    { name:'Gold Chudi Set of 8',    desc:'Eight hand-carved 22K gold chudi with a repeating lotus motif.',                        imgs:[I.b1,I.b3,I.kd1], features:['22K Gold','Lotus Motif','Set of 8','Custom Weight'] },
    { name:'Slim Gold Bangles',      desc:'Twelve slim 22K gold bangles stacked for everyday brilliance.',                         imgs:[I.b3,I.b1,I.kd1], features:['22K Gold','Lightweight','Set of 12','Daily Wear'] },
  ],
  'gold/womens/mangalsutra': [
    { name:'Classic Mangalsutra',    desc:'Sacred 22K gold pendant with diamond on traditional black bead chain.',                  imgs:[I.mg1,I.n2,I.br2], features:['22K Gold','Certified Diamond','Black Bead','Customisable Length'] },
    { name:'Modern Mangalsutra',     desc:'A contemporary single-strand mangalsutra in 18K gold with a sleek pendant.',             imgs:[I.n2,I.mg1,I.n1], features:['18K Gold','Modern Design','Lightweight','BIS Certified'] },
  ],
  'gold/womens/nath': [
    { name:'Bridal Nath — Large',    desc:'A grand bridal nath in 22K gold with pearl and ruby drops, worn with a chain support.',  imgs:[I.e1,I.br1,I.e3], features:['22K Gold','Pearl & Ruby','Chain Support Included','Bridal Piece'] },
    { name:'Everyday Nath',          desc:'A small, comfortable nath in 22K gold for daily wear.',                                  imgs:[I.e2,I.e1,I.ko1], features:['22K Gold','Lightweight','Easy Clasp','BIS Certified'] },
  ],
  'gold/womens/nose-rings': [
    { name:'Diamond Nose Ring',      desc:'A tiny brilliant-cut diamond set in an 18K gold nose ring.',                            imgs:[I.e2,I.ko1,I.e1], features:['18K Gold','Brilliant Diamond','Twist-lock Closure','GIA Certified'] },
    { name:'Plain Gold Nose Ring',   desc:'A simple 22K gold nose ring — minimal, refined, traditional.',                          imgs:[I.ko1,I.e2,I.e1], features:['22K Gold','Plain Design','Comfortable Fit','BIS Certified'] },
  ],
  'gold/womens/nose-pins': [
    { name:'Diamond Nose Pin',       desc:'A single brilliant-cut diamond on an 18K gold nose pin — barely-there luxury.',         imgs:[I.e1,I.ko1,I.e2], features:['18K Gold','Brilliant Diamond','Flat Pin Back','GIA Certified'] },
    { name:'Ruby Nose Pin',          desc:'A vivid Burmese ruby set in 22K gold on a classic push-pin back.',                      imgs:[I.e2,I.e1,I.ko1], features:['22K Gold','Burmese Ruby','Push-pin Back','BIS Certified'] },
  ],
  'gold/womens/kundal': [
    { name:'Traditional Kundal',     desc:'Large circular ear ornaments in 22K gold with traditional filigree work.',               imgs:[I.e1,I.e3,I.ko1], features:['22K Gold','Filigree Work','Traditional Design','Hallmarked'] },
    { name:'Meenakari Kundal',       desc:'22K gold kundal adorned with vibrant meenakari enamel in traditional colours.',          imgs:[I.e3,I.e1,I.ko1], features:['22K Gold','Meenakari Enamel','Hand-painted','BIS Certified'] },
  ],
  'gold/womens/jhumki': [
    { name:'Traditional Gold Jhumki',desc:'Hand-engraved jhumkis with meenakari work — India\'s finest earring tradition.',        imgs:[I.jk1,I.e1,I.e2], features:['22K Gold','Meenakari Work','Ruby & Emerald','Traditional'] },
    { name:'Light Jhumki',           desc:'A smaller, everyday jhumki in 22K gold — easy to wear from morning to evening.',        imgs:[I.e2,I.jk1,I.e3], features:['22K Gold','Lightweight','Hook Back','Daily Wear'] },
  ],
  'gold/womens/tops': [
    { name:'Diamond Tops',           desc:'Brilliant-cut diamond studs in a four-claw 18K gold setting.',                          imgs:[I.e2,I.e3,I.e1], features:['18K Gold','Brilliant Diamond','Four-claw','Certificate Included'] },
    { name:'Pearl Tops',             desc:'A perfectly round Akoya pearl set in 22K gold — a timeless stud.',                      imgs:[I.e3,I.e2,I.ko1], features:['22K Gold','Akoya Pearl','Push-back','Luxury Box'] },
  ],
  'gold/womens/temple': [
    { name:'Temple Necklace',        desc:'Lakshmi and lotus motif panels in 22K gold — sacred artistry for festive occasions.',   imgs:[I.t1,I.br1,I.n1], features:['22K Gold','Temple Motif','Hand-finished','South Indian Style'] },
    { name:'Temple Earrings',        desc:'Traditional deity-motif earrings in 22K gold with meenakari accents.',                  imgs:[I.jk1,I.t1,I.e3], features:['22K Gold','Deity Motif','Meenakari Accents','Festive Wear'] },
  ],
  'gold/bridal': [
    { name:'Royal Bridal Set',       desc:'A complete 7-piece bridal set in 22K gold — necklace, maang tikka, earrings, bangles, nath, payal, mangalsutra.', imgs:[I.br1,I.br2,I.n1], features:['22K Gold','7-Piece Set','Polki & Ruby','Bespoke Fitting'] },
    { name:'Bridal Choker Set',      desc:'Grand choker with matching earrings and tikka in 22K gold, set with diamonds.',         imgs:[I.ck1,I.br1,I.n1], features:['22K Gold','Diamond-set','Matching Set','Bridal Weight'] },
    { name:'Rani Haar Bridal Set',   desc:'A sweeping rani haar with matching earrings and bangles for the modern bride.',         imgs:[I.br2,I.n2,I.b1], features:['22K Gold','Multi-layer','Pearl Accents','Complete Set'] },
    { name:'Bridal Nath',            desc:'A large statement nath in 22K gold with pearl, ruby and emerald drops.',                imgs:[I.e1,I.br1,I.e3], features:['22K Gold','Pearl & Ruby','Chain Support','Bridal Only'] },
    { name:'Bridal Bangles Set',     desc:'A set of 12 slim 22K gold bangles with diamond accents for the bride.',                 imgs:[I.b3,I.b1,I.kd1], features:['22K Gold','Diamond Accents','Set of 12','BIS Certified'] },
  ],
  'gold/kids': [
    { name:'Kids Ring',              desc:'A tiny 18K gold ring with a heart motif — a keepsake for life.',                        imgs:[I.r2,I.r3,I.r4], features:['18K Gold','Heart Motif','Safe Design','BIS Certified'] },
    { name:'Kids Bracelet',          desc:'A delicate 18K gold chain bracelet with a star charm for little wrists.',               imgs:[I.b3,I.b1,I.b2], features:['18K Gold','Star Charm','Safety Clasp','Adjustable'] },
    { name:'Kids Chain',             desc:'A lightweight 18K gold chain designed for comfortable daily wear.',                     imgs:[I.ch1,I.n2,I.n3], features:['18K Gold','Lightweight','Secure Clasp','BIS Certified'] },
    { name:'Kids Earrings',          desc:'Tiny butterfly studs in 18K gold with a comfortable push-back setting.',                imgs:[I.e2,I.e1,I.ko1], features:['18K Gold','Butterfly Design','Push-back','Hypoallergenic'] },
  ],
  'gold/coins': [
    { name:'1 Gram Gold Coin',       desc:'Certified 24K pure gold coin — a timeless investment and auspicious gift.',             imgs:[I.r4,I.r3,I.r1], features:['24K Pure Gold','BIS Certified','1 Gram','Gift Box Included'] },
    { name:'5 Gram Gold Coin',       desc:'A 24K gold coin with Lakshmi motif — prosperity in your hands.',                       imgs:[I.r3,I.r4,I.r2], features:['24K Pure Gold','Lakshmi Motif','5 Gram','Certificate Included'] },
    { name:'10 Gram Gold Coin',      desc:'An investment-grade 24K gold coin in a premium tamper-proof capsule.',                  imgs:[I.r1,I.r3,I.r4], features:['24K Pure Gold','10 Gram','Tamper-proof Capsule','BIS Certified'] },
  ],
  'silver/mens/rings': [
    { name:'Oxidised Silver Band',   desc:'A wide oxidised band with tribal texture — contemporary style with deep roots.',        imgs:[I.r3,I.r4,I.r2], features:['92.5 Silver','Hand-oxidised','Tribal Pattern','Unisex Design'] },
    { name:'Plain Silver Band',      desc:'A simple polished silver band — the understated choice of the discerning man.',         imgs:[I.r4,I.r3,I.r5], features:['92.5 Silver','High-polish','BIS Certified','Comfortable Fit'] },
  ],
  'silver/mens/chains': [
    { name:'Silver Curb Chain',      desc:'A sturdy curb-link silver chain — the masculine choice for everyday wear.',             imgs:[I.ch1,I.n3,I.n4], features:['92.5 Silver','Curb Link','Lobster Clasp','BIS Certified'] },
    { name:'Silver Rope Chain',      desc:'Twisted rope weave in sterling silver, available in 18" and 22".',                     imgs:[I.n4,I.ch1,I.n3], features:['92.5 Silver','Rope Weave','2 Lengths','Hallmarked'] },
  ],
  'silver/mens/kada': [
    { name:"Men's Silver Kada",      desc:'Solid 92.5 silver kada with rope-edge — tradition worn with authority.',               imgs:[I.kd1,I.b2,I.b3], features:['92.5 Silver','Rope Edge','Open Cuff','BIS Hallmarked'] },
    { name:'Plain Silver Kada',      desc:'A smooth, heavy silver kada — minimal design, maximum presence.',                      imgs:[I.b3,I.kd1,I.b2], features:['92.5 Silver','Plain Finish','Heavy Gauge','BIS Certified'] },
  ],
  'silver/mens/bracelets': [
    { name:'Silver Curb Bracelet',   desc:'Curb-link silver bracelet with a box clasp — bold and enduring.',                      imgs:[I.b2,I.b1,I.b3], features:['92.5 Silver','Curb Link','Box Clasp','BIS Certified'] },
    { name:'Silver ID Bracelet',     desc:'Flat-plate silver ID bracelet with an engravable surface.',                             imgs:[I.b3,I.b2,I.b1], features:['92.5 Silver','Engravable Plate','Lobster Clasp','Hallmarked'] },
  ],
  'silver/womens/rings': [
    { name:'Filigree Silver Ring',   desc:'Gossamer-thin silver wire woven into a delicate filigree ring.',                       imgs:[I.r5,I.r3,I.r2], features:['92.5 Silver','Cuttack Filigree','Handcrafted','Lightweight'] },
    { name:'Stone-set Silver Ring',  desc:'A 92.5 silver ring set with a cushion-cut amethyst — colour and craft.',               imgs:[I.r2,I.r5,I.r4], features:['92.5 Silver','Amethyst Stone','Prong Setting','BIS Certified'] },
  ],
  'silver/womens/chains': [
    { name:'Silver Box Chain',       desc:'A fine silver box chain for layering or wearing alone with a pendant.',                 imgs:[I.ch1,I.n2,I.n1], features:['92.5 Silver','Box Link','16" Length','BIS Certified'] },
    { name:'Silver Ball Chain',      desc:'Tiny silver spheres strung into a delicate ball chain necklace.',                      imgs:[I.n2,I.ch1,I.n1], features:['92.5 Silver','Ball Link','Lightweight','Hallmarked'] },
  ],
  'silver/womens/earrings': [
    { name:'Oxidised Silver Drops',  desc:'Long oxidised silver drops with geometric patterning — bold and contemporary.',        imgs:[I.e3,I.e1,I.jk1], features:['92.5 Silver','Oxidised Finish','Hook Back','Statement Piece'] },
    { name:'Silver Stud',            desc:'A simple polished silver stud — the silver wardrobe essential.',                       imgs:[I.e2,I.e3,I.ko1], features:['92.5 Silver','High-polish','Push-back','Hypoallergenic'] },
  ],
  'silver/womens/jhumke': [
    { name:'Oxidised Silver Jhumke', desc:'Large oxidised jhumke with beaded drops — bold, beautiful, unmistakably Indian.',     imgs:[I.jk1,I.e1,I.e3], features:['92.5 Silver','Hand Oxidised','Beaded Drops','Lever-back Hook'] },
    { name:'Plain Silver Jhumke',    desc:'Classic jhumke in polished silver — the heritage earring for everyday wear.',          imgs:[I.e1,I.jk1,I.e2], features:['92.5 Silver','Plain Finish','Comfortable Fit','BIS Certified'] },
  ],
  'silver/womens/payal': [
    { name:'Designer Payal',         desc:'Sterling silver anklets with a ghungroo pattern — the music of tradition.',            imgs:[I.py1,I.b3,I.sp1], features:['92.5 Silver','Ghungroo Bells','Lobster Clasp','Sold as Pair'] },
    { name:'Plain Payal',            desc:'A simple polished silver payal — minimal and comfortable for daily wear.',              imgs:[I.sp1,I.py1,I.b3], features:['92.5 Silver','Plain Design','Adjustable','BIS Certified'] },
  ],
  'silver/womens/toe-rings': [
    { name:'Floral Toe Ring',        desc:'A tiny floral silver toe ring — delicate, traditional, auspicious.',                   imgs:[I.r5,I.py1,I.r3], features:['92.5 Silver','Floral Motif','Open Band','Adjustable'] },
    { name:'Plain Silver Toe Ring',  desc:'A smooth plain silver toe ring — the enduring symbol of married grace.',               imgs:[I.r3,I.r5,I.py1], features:['92.5 Silver','Plain Band','Open Design','Lightweight'] },
  ],
  'silver/womens/bracelets': [
    { name:'Filigree Silver Bracelet',desc:'Gossamer silver filigree bracelet — ultra-lightweight, exquisite craft.',             imgs:[I.b3,I.b2,I.b1], features:['92.5 Silver','Cuttack Filigree','Toggle Clasp','Ultra Lightweight'] },
    { name:'Silver Charm Bracelet',  desc:'A fine silver chain bracelet with five traditional charm drops.',                      imgs:[I.b1,I.b3,I.b2], features:['92.5 Silver','5 Charms','Lobster Clasp','Customisable'] },
  ],
  'silver/womens/kada': [
    { name:'Floral Silver Kada',     desc:'A lightweight silver kada with hand-carved floral motifs — feminine tradition.',       imgs:[I.b1,I.kd1,I.b3], features:['92.5 Silver','Floral Motif','Open Cuff','Lightweight'] },
    { name:'Filigree Kada',          desc:'A wide silver kada in Cuttack filigree — the finest Indian silverwork tradition.',    imgs:[I.kd1,I.b1,I.b2], features:['92.5 Silver','Cuttack Filigree','Handcrafted','BIS Certified'] },
  ],
  'silver/womens/pendants': [
    { name:'Silver Om Pendant',      desc:'A minimal Om pendant in 92.5 silver — sacred geometry in a modern silhouette.',       imgs:[I.pd1,I.lk1,I.n3], features:['92.5 Silver','High-polish','Universal Bail','Hypoallergenic'] },
    { name:'Hamsa Pendant',          desc:'A Hand of Fatima (Hamsa) in oxidised silver — protection and elegance.',               imgs:[I.lk1,I.pd1,I.n4], features:['92.5 Silver','Oxidised Finish','Hamsa Design','BIS Certified'] },
  ],
  'silver/kids': [
    { name:'Baby Chanda Suraj Set',  desc:'Chanda and Suraj motif set in 92.5 silver — a sacred gift for newborns.',             imgs:[I.b3,I.b1,I.b2], features:['92.5 Silver','Chanda Suraj Motif','Gift Box','BIS Certified'] },
    { name:'Kids Silver Kada',       desc:'A small 92.5 silver kada for children — safe, light and beautifully crafted.',        imgs:[I.kd1,I.b3,I.b2], features:['92.5 Silver','Child-safe Design','Lightweight','BIS Certified'] },
  ],
  'silver/coins': [
    { name:'5 Gram Silver Coin',     desc:'999 pure silver coin with Lakshmi motif — an auspicious gifting tradition.',           imgs:[I.r3,I.r4,I.r5], features:['999 Pure Silver','Lakshmi Motif','5 Gram','Gift Box'] },
    { name:'10 Gram Silver Coin',    desc:'A 999 pure silver coin in a tamper-proof capsule with BIS certification.',             imgs:[I.r4,I.r3,I.r5], features:['999 Pure Silver','10 Gram','Tamper-proof','BIS Certified'] },
  ],
  'silver/gifts': [
    { name:'Silver Gift Set — Pooja',desc:'A curated pooja gift set in 92.5 silver — diya, spoon, and bowl with box.',           imgs:[I.b3,I.kd1,I.b1], features:['92.5 Silver','3-piece Set','Pooja Items','Gift Wrapped'] },
    { name:'Silver Showpiece',       desc:'A handcrafted silver showpiece depicting a traditional Indian motif.',                  imgs:[I.t1,I.b2,I.b3], features:['92.5 Silver','Handcrafted','Display Stand','Gift Box'] },
  ],
}

/* ── Generate product objects from templates ──────── */
function makeProducts(categorySlug, catMeta) {
  const templates = PRODUCT_TEMPLATES[categorySlug] || []
  return templates.map((t, idx) => {
    const id = categorySlug.replace(/\//g, '-') + '-' + (idx + 1)
    const slug = t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const detailPath = `/shop/${categorySlug}/${slug}`
    return {
      id,
      slug,
      detailPath,
      categorySlug,
      name: t.name,
      gender: catMeta?.gender || 'unisex',
      category: catMeta?.label || categorySlug,
      metal: catMeta?.metal || 'gold',
      collections: [],
      images: t.imgs,
      shortDescription: t.desc,
      fullDescription: t.desc + ' Each piece is crafted by master artisans with decades of experience, using only the finest materials. Available for bespoke customisation — contact us for details.',
      features: t.features,
      tags: [catMeta?.metal, catMeta?.gender].filter(Boolean),
    }
  })
}

/* ── Build full product catalogue ─────────────────── */
const _productsByCategory = {}
CATEGORIES.forEach(cat => {
  const key = cat.slug
  _productsByCategory[key] = makeProducts(key, cat)
})

export function getProductsByCategory(slug) {
  return _productsByCategory[slug] || []
}

export function getProductByPath(categorySlug, productSlug) {
  const list = _productsByCategory[categorySlug] || []
  return list.find(p => p.slug === productSlug) || null
}

export function getRelatedProducts(categorySlug, currentSlug, limit = 4) {
  const list = _productsByCategory[categorySlug] || []
  const others = list.filter(p => p.slug !== currentSlug)
  // Also pull from same metal/gender
  const cat = getCategoryBySlug(categorySlug)
  let extras = []
  if (cat) {
    CATEGORIES
      .filter(c => c.metal === cat.metal && c.gender === cat.gender && c.slug !== categorySlug)
      .slice(0, 2)
      .forEach(c => { extras = extras.concat((_productsByCategory[c.slug] || []).slice(0, 1)) })
  }
  return [...others, ...extras].slice(0, limit)
}

export function getCollectionProducts(collectionSlug, limit = 8) {
  const col = getCollectionBySlug(collectionSlug)
  if (!col) return []
  const gender = col.gender
  let list = []
  CATEGORIES
    .filter(c => gender === 'kids' ? c.gender === 'kids' : c.gender === gender)
    .forEach(c => { list = list.concat((_productsByCategory[c.slug] || []).slice(0, 1)) })
  return list.slice(0, limit)
}

/* ── WhatsApp helper ─────────────────────────────── */
export function getWhatsAppUrl(product) {
  const msg = [
    'Hello,',
    'I am interested in this jewellery item.',
    '',
    `*Product Name:* ${product.name}`,
    `*Category:* ${product.category}`,
    `*Material:* ${product.metal.charAt(0).toUpperCase() + product.metal.slice(1)}`,
    `*Gender:* ${(product.gender||'').charAt(0).toUpperCase() + (product.gender||'').slice(1)}`,
    '',
    'Please share more details.',
  ].join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}