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
  r2:'https://i.pinimg.com/736x/eb/24/1a/eb241a5b3646245d06b9267e63f849ec.jpg',
  r3:'https://i.pinimg.com/1200x/94/fc/3f/94fc3fec617cb8efd9020f3e900b9b01.jpg',
  r4:'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=900&q=90',
  r5:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=90',
  n1:'https://i.pinimg.com/736x/b4/14/aa/b414aaa3bb6d16e652caabaeeaceaeea.jpg',
  n2:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=90',
  n3:'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=90',
  n4:'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=900&q=90',
  b1:'https://i.pinimg.com/1200x/e4/f1/4e/e4f14e3c6bd7c07ce2ab6497783d5fff.jpg',
  b2:'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&q=90',
  b3:'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=90',
  e1:'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=900&q=90',
  e2:'https://i.pinimg.com/1200x/80/86/65/80866544ba9523f6d804ed52ba88e179.jpg',
  e3:'https://i.pinimg.com/736x/69/ba/3c/69ba3c025eefcfa1f80b36194dc72a6b.jpg',
  br1:'https://i.pinimg.com/736x/24/b9/76/24b9767f7f7bbe21d56a87a5b080a889.jpg',
  br2:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=90',
  ch1:'https://i.pinimg.com/1200x/7c/70/18/7c70188c2fe9bedfc5d32de5bb3010ab.jpg',
  lk1:'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=90',
  t1:'https://images.unsplash.com/photo-1583937443604-f42c0f2c6bef?w=900&q=90',
  py1:'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=900&q=90',
  pd1:'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=900&q=90',
  kd1:'https://i.pinimg.com/736x/8a/2b/1d/8a2b1d2bbef8e961c5e7a6b53d68d631.jpg',
  jk1:'https://i.pinimg.com/736x/bf/99/12/bf99123de342a2af42066b3436585939.jpg',
  mg1:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=90',
  ck1:'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=90',
  gn1:'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=900&q=90',
  cn1:'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&q=90',
  sp1:'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=900&q=90',
  ko1:'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=90',
  mring1:'https://i.pinimg.com/736x/9f/97/25/9f9725732e29f1ab8ebd1b9d4c4e6656.jpg',
  mring2:'https://i.pinimg.com/1200x/d1/02/79/d10279b7b418b5908767d58b59438f8b.jpg',
  mring3:'https://i.pinimg.com/736x/56/82/de/5682de1f3a994b47a6f39c639dfd4a79.jpg',
  msingnet:'https://i.pinimg.com/1200x/ea/73/2a/ea732a872e18f6ee79d25b7a0aa27933.jpg',
  msingnet2:'https://i.pinimg.com/1200x/ce/7b/5f/ce7b5f8b9141fa9d04841d2929a83782.jpg',
  msingnet3:'https://i.pinimg.com/1200x/f2/4d/3f/f24d3f9c0ff080e1b63e4839d8725d8f.jpg',
  mom:'https://i.pinimg.com/1200x/04/2b/fb/042bfb37799802a27afff884b338a9ef.jpg',
  mom2:'https://i.pinimg.com/736x/ec/8d/8c/ec8d8c2e22980f5651e6ae135b3bc989.jpg',
  mom3:'https://i.pinimg.com/736x/d6/a9/ee/d6a9eeb6233f7315117d6ba683e7215d.jpg',
  mdiamond:'https://i.pinimg.com/1200x/7d/9c/67/7d9c672c1ad3799b65203e36ebd6da94.jpg',
  mdiamond2:'https://i.pinimg.com/1200x/b4/7e/29/b47e294fa17f5e2f253d25763d3270ad.jpg',
  mdiamond3:'https://i.pinimg.com/1200x/c2/cd/44/c2cd44d1d1461f5210f394fbb4b98b97.jpg',
  silverg:'https://i.pinimg.com/1200x/32/93/56/329356dbbade5399d621178fb5701d8d.jpg',
  silverg2:'https://i.pinimg.com/736x/30/70/6c/30706c7d39278502fcf7e262e4701251.jpg',
  silverg3:'https://i.pinimg.com/1200x/5e/c7/d9/5ec7d94195cca84f389b2c8099b45708.jpg',
  silverg4:'https://i.pinimg.com/736x/3d/c9/6a/3dc96a1347d23b695c7d43144586561a.jpg',
  silverg5:'https://i.pinimg.com/1200x/80/ed/58/80ed58b563ccf3e78d312683c9858a0a.jpg',
  silverg6:'https://i.pinimg.com/736x/85/2b/81/852b81d4cdc3a24c12480295be9dd884.jpg',
  silverc1:'https://i.pinimg.com/736x/5b/95/f5/5b95f594e30e2c069999c10aa895074c.jpg',
  silverc2:'https://i.pinimg.com/736x/28/88/bd/2888bd572b58cb8bea8830f679d41af4.jpg',
  silverc3:'https://i.pinimg.com/736x/58/6f/fe/586ffeddd5f232adf54ad1c0db9ae451.jpg',
  silverc4:'https://i.pinimg.com/736x/6b/df/c6/6bdfc6f6c559fb7595cecfa20f71dac0.jpg',
  silverc5:'https://i.pinimg.com/736x/be/2e/ee/be2eee203da5c168345f859420e98d43.jpg',
  silverc6:'https://i.pinimg.com/1200x/a5/99/22/a5992201a98cc0d929be59b84161cd52.jpg',
  silverk1:'https://i.pinimg.com/1200x/5b/d3/12/5bd312009d524a23d2a738da012c8d29.jpg',
  silverk2:'https://i.pinimg.com/736x/ab/a2/b9/aba2b9ab9dbac510e3bd7f10de92a3c8.jpg',
  silverk3:'https://i.pinimg.com/736x/87/18/44/871844098ac01901a0b5e45c5d8b98e1.jpg',
  silverk4:'https://i.pinimg.com/1200x/71/b7/5e/71b75e5df5bf8d5a482ad5d49f6f375f.jpg',
  silverk5:'https://i.pinimg.com/1200x/14/e2/83/14e283f042e2e77ad4860973a15cdcd8.jpg',
  silverk6:'https://i.pinimg.com/736x/aa/3f/8f/aa3f8f30ca7face32863b73634ec75bf.jpg',

  silverwpe:'https://i.pinimg.com/1200x/e5/2d/b3/e52db3f86ff426f8765bdf9408237a9c.jpg',
   silverwpe2:'https://i.pinimg.com/1200x/ad/48/4d/ad484d0fcdb5a5a49bc5a9b8e401229b.jpg',
    silverwpe3:'https://i.pinimg.com/736x/56/bd/53/56bd53f571548a3cc1a86ab56bedcdb6.jpg',
     silverwpe4:'https://i.pinimg.com/1200x/d0/18/ad/d018ad1a81d8a7bbd4228abf6f99e1ed.jpg',
      silverwpe5:'https://i.pinimg.com/736x/74/41/ea/7441ea17b04c7fc5f88c547172351929.jpg',
       silverwpe6:'https://i.pinimg.com/1200x/86/19/fb/8619fb8046ca84c9997b04e41f90f965.jpg',
   silverwka:'https://i.pinimg.com/736x/45/6b/04/456b04ce93dfd3f092b41f1c83f25f11.jpg',
silverwka2:'https://i.pinimg.com/736x/00/96/d7/0096d7d9d49b78c202479ae84e484bb2.jpg',
silverwka3:'https://i.pinimg.com/736x/7c/5e/57/7c5e5717e7f0568286a65c65edc21e26.jpg',
silverwka4:'https://i.pinimg.com/1200x/14/c8/87/14c887044bf964e0af41e6371f13f5ba.jpg',
silverwka5:'https://i.pinimg.com/1200x/3b/15/54/3b1554100bf35d00749c0558c4c6c31e.jpg',
silverwka6:'https://i.pinimg.com/1200x/5b/a4/f5/5ba4f5abf8c23f5724775f00869a4763.jpg',
silverwb:'https://i.pinimg.com/736x/99/a9/0b/99a90b39d2ee6e919400eeb8e2d41f4a.jpg',
silverwb2:'https://i.pinimg.com/736x/04/e7/b4/04e7b420c7baf00016eaca0302b72802.jpg',
silverwb3:'https://i.pinimg.com/736x/e6/72/e9/e672e9353bf7a09e7d5c728494b8348d.jpg',
silverwb4:'https://i.pinimg.com/1200x/c5/31/46/c53146f34aab5861f3b42ef5b7018cb3.jpg',
silverwb5:'https://i.pinimg.com/736x/3d/d2/b9/3dd2b96513a24bd6f9aab963bf4e6eac.jpg',
silverwb6:'https://i.pinimg.com/1200x/b0/73/cf/b073cf226d5a3306dca733e9c1d977e4.jpg',
silvertr:'https://i.pinimg.com/1200x/fb/8b/e9/fb8be9e880410d656b3a354e9056fc64.jpg',
silvertr2:'https://i.pinimg.com/1200x/6a/00/ac/6a00ac00fd82e1e691f677507c40f777.jpg',
silvertr3:'https://img.staticdj.com/bd23d44cd5aef207e7df671163c1c036_1024x.jpeg',
silvertr4:'https://i.pinimg.com/1200x/f2/b8/34/f2b834e1bfdf41d49e5e26e381803306.jpg',
silvertr5:'https://i.pinimg.com/1200x/ee/ef/92/eeef92f629b6b6c5a536e845811d8a69.jpg',
silvertr6:'https://i.pinimg.com/736x/55/59/31/555931d60a2c98ddff22b92df55b0af3.jpg',
silverp:'https://i.pinimg.com/1200x/29/e1/00/29e100c78236519106d1172dd74a6ef4.jpg',
silverp2:'https://i.pinimg.com/736x/31/9b/a8/319ba8e9d3db2b06d53d4ce5028345d0.jpg',
silverp3:'https://i.pinimg.com/1200x/69/27/00/6927004aba7782a81280f36b8937d512.jpg',
silverp4:'https://i.pinimg.com/736x/c8/9d/ac/c89dac18d43d09e3dcd40999135e9528.jpg',
silverp5:'https://i.pinimg.com/1200x/9e/f9/30/9ef9308a3c02f7608ef41e46035c4c7a.jpg',
silverp6:'https://i.pinimg.com/1200x/1e/a1/69/1ea169e10925f0fbc5bf13f8b48be9e6.jpg',
silverwj:'https://i.pinimg.com/736x/44/96/14/449614fba17454c74c4ed0ab04f44973.jpg',
silverwj2:'https://i.pinimg.com/1200x/0c/ee/97/0cee970adc6de9503e3c0aba70799575.jpg',
silverwj3:'https://i.pinimg.com/736x/38/20/9a/38209ad12724fdcbd4d4c6a0118073aa.jpg',
silverwj4:'https://i.pinimg.com/736x/1e/09/dc/1e09dc3823b198dcf61907d85bbc7fd3.jpg',
silverwj5:'https://i.pinimg.com/736x/aa/06/1e/aa061eb9cbbb8243d8e4ff8090db2261.jpg',
silverwj6:'https://i.pinimg.com/736x/e5/e9/16/e5e916ab2c2808318f75dc9b4d8b0a18.jpg',
silverwerr:'https://i.pinimg.com/736x/2e/46/08/2e4608b5837585d27913f5db735258ce.jpg',
silverwerr2:'https://i.pinimg.com/736x/dc/98/3c/dc983c1081b09ec896e084442a8ffa3c.jpg',
silverwerr3:'https://i.pinimg.com/736x/d8/9b/e9/d89be9de79b3b0f42de85063d613e086.jpg',
silverwerr4:'https://i.pinimg.com/1200x/55/65/79/55657983b3bd0cf6def05394d0073cce.jpg',
silverwerr5:'https://i.pinimg.com/1200x/d8/af/91/d8af91a6f88e1f21494e9bffed8e8f21.jpg',
silverwerr6:'https://i.pinimg.com/1200x/44/f3/bd/44f3bd12d2bbe1c69363adee6128ddb5.jpg',
silverwch:'https://i.pinimg.com/736x/0d/49/c7/0d49c7f8592125020b58693fce85893d.jpg',
silverwch2:'https://i.pinimg.com/736x/07/d9/5f/07d95fbe7bf67ed8d60cf7bc27531610.jpg',
silverwch3:'https://i.pinimg.com/1200x/76/56/0b/76560b47d41a21a39481b75c4bee8c63.jpg',
silverwch4:'https://i.pinimg.com/1200x/8a/7b/d1/8a7bd1d0a6347f84754afa5fb2bedd72.jpg',
silverwch5:'https://i.pinimg.com/1200x/7a/f5/83/7af5839bb082f59822a35896fc24e3aa.jpg',
silverwch6:'https://i.pinimg.com/736x/5e/0f/38/5e0f3839e1a2e2c0a1f6747fa33bacbc.jpg',
silverwri:'https://i.pinimg.com/1200x/ab/98/54/ab985443b8ab2d6f288a5d4cdf554903.jpg',
silverwri2:'https://i.pinimg.com/1200x/13/5b/96/135b967d68c7f043e535d2c9d1b16da3.jpg',
silverwri3:'https://i.pinimg.com/736x/d9/77/64/d9776427886aa2a6d2a79c49681174c7.jpg',
silverwri4:'https://i.pinimg.com/1200x/37/97/fc/3797fc530d9735758ce9d3efe41b9930.jpg',
silverwri5:'https://i.pinimg.com/1200x/0b/05/27/0b0527600af58b7c721c7dd9095fcc94.jpg',
silverwri6:'https://i.pinimg.com/1200x/91/59/37/9159375914b1caa05c2651e9e1676ec3.jpg',
silvermbra:'https://i.pinimg.com/736x/31/9b/a8/319ba8e9d3db2b06d53d4ce5028345d0.jpg',
silvermbra2:'https://i.pinimg.com/736x/6a/e7/06/6ae70658c0b79f30feff6ffed8decc96.jpg',
silvermbra3:'https://i.pinimg.com/1200x/cc/7f/ac/cc7fac54226f8f091acf1c2c4b6df3bd.jpg',
silvermbra4:'https://i.pinimg.com/736x/7c/f9/00/7cf9000f303c25201b119d3d1f6745e2.jpg',
silvermbra5:'https://i.pinimg.com/1200x/39/19/d6/3919d6504699cb9a2b0d64ff1a0647e1.jpg',
silvermbra6:'https://i.pinimg.com/736x/26/8e/45/268e45907f01ec2447ce8e330243a709.jpg',
silvermka:'https://i.pinimg.com/736x/45/6b/04/456b04ce93dfd3f092b41f1c83f25f11.jpg',
silvermka2:'https://i.pinimg.com/736x/0c/b9/74/0cb974a1cbf12eaf635ab063bcf61d88.jpg',
silvermka3:'https://i.pinimg.com/1200x/82/af/d6/82afd6be2c81cceeaa74b2d624e5a13e.jpg',
silvermka4:'https://i.pinimg.com/1200x/75/6a/69/756a6959cbed90c05a77846a386673dc.jpg',
silvermka5:'https://i.pinimg.com/1200x/82/51/2a/82512afec576c5c46423bb83f1a20bc7.jpg',
silvermka6:'https://i.pinimg.com/1200x/12/3a/17/123a17dadd0840cff5eec734aef21ac6.jpg',
silvermch:'https://i.pinimg.com/1200x/0d/15/d7/0d15d7c497c705a10d084959671a8449.jpg',
silvermch2:'https://i.pinimg.com/1200x/f7/fb/b0/f7fbb01e8ab82e9675d863a0040d8236.jpg',
silvermch3:'https://i.pinimg.com/1200x/1a/65/3c/1a653cb3a16bd88400b75829dccdab77.jpg',
silvermch4:'https://i.pinimg.com/736x/10/52/b8/1052b8dfe5e41a9bb6b36f7f118fbc2e.jpg',
silvermch5:'https://i.pinimg.com/1200x/0d/42/16/0d4216b8f1f0e3a1e84baa7e6ed0889d.jpg',
silvermch6:'https://i.pinimg.com/736x/9a/29/39/9a2939a32577e5e4902485b6ac8985b2.jpg',
silvermrings:'https://i.pinimg.com/736x/e4/79/cd/e479cd126938b702357c4bc066ab155d.jpg',
silvermrings2:'https://i.pinimg.com/736x/7a/96/9d/7a969d24db7aa046110164539fb1e16b.jpg',
silvermrings3:'https://i.pinimg.com/1200x/df/6d/2c/df6d2c7a8b33b854476dda86da2a1e23.jpg',
silvermrings4:'https://i.pinimg.com/736x/03/c9/d5/03c9d53f353af8c50b3d992557011dac.jpg',
silvermrings5:'https://i.pinimg.com/1200x/59/b6/3a/59b63a9c0143b655345c022d125565f9.jpg',
silvermrings6:'https://i.pinimg.com/1200x/9a/55/f2/9a55f2462d0a10f67d6f94efde28034e.jpg',


goldCoins:'https://i.pinimg.com/1200x/32/64/c8/3264c8903cab4285185653821bd48908.jpg',
goldCoins2:'https://i.pinimg.com/736x/3c/46/97/3c4697486abf9982131e7f236041fde5.jpg',
goldCoins3:'https://i.pinimg.com/1200x/14/75/ab/1475ab3b692a881b8af78e50f3a4bf31.jpg',
goldCoins4:'https://i.pinimg.com/736x/2e/8a/8e/2e8a8e95bf086629fdba28e6eba7f551.jpg',
goldCoins5:'https://i.pinimg.com/736x/cd/df/c8/cddfc8cab9dd80da52be401ec94ca32d.jpg',
goldCoins6:'https://i.pinimg.com/1200x/13/64/b1/1364b1c366240e402aff6e75ce6e6d05.jpg',
goldCoins7:'https://i.pinimg.com/736x/e5/c5/01/e5c5015992ed5379d5de0de4ccf693a7.jpg',
goldCoins8:'https://i.pinimg.com/1200x/1b/c7/2a/1bc72a524426bd4780c739c45d2a566f.jpg',
goldCoins9:'https://i.pinimg.com/736x/ea/84/b2/ea84b2f962f7ffb52768ddb1551871ad.jpg',
goldKi:'https://i.pinimg.com/1200x/1b/69/f7/1b69f77da4ae99ddad44ece690df142f.jpg',
goldKi2:'https://i.pinimg.com/1200x/73/77/94/7377947a6e3aa8759bebb4093afa1603.jpg',
goldKi3:'https://i.pinimg.com/1200x/28/2b/0f/282b0fd8aad7bb98e8d745c0cb87b756.jpg',
goldkbr:'https://i.pinimg.com/1200x/03/e4/9d/03e49d2366ef1a4b4db62aeace98b7c2.jpg',
goldkbr2:'https://i.pinimg.com/1200x/ff/5b/e7/ff5be7a82fbc7f7816d9d75bad9a42d9.jpg',
goldkbr3:'https://i.pinimg.com/1200x/83/53/60/835360fae83e6ec43ff882869414430f.jpg',
goldkch:'https://i.pinimg.com/1200x/a9/04/0a/a9040a1ac95dd9173c3254f7f136247f.jpg',
goldkch2:'https://i.pinimg.com/1200x/01/ba/bb/01babbd4c9b69dbc15365ee6907a0fc0.jpg',
goldkch3:'https://i.pinimg.com/736x/6b/e4/05/6be40596d29754fec52b1188f9ebad6a.jpg',
goldker:'https://i.pinimg.com/736x/b7/e9/1e/b7e91e951196696fd56546b24fb425b9.jpg',
goldker2:'https://i.pinimg.com/736x/c0/a5/3d/c0a53d9e71184eb0efd3331e2800a5a8.jpg',
goldker3:'https://i.pinimg.com/736x/6a/c0/4c/6ac04c52e8780acb45fa46c02ea5cbbf.jpg',
goldwtn:'https://i.pinimg.com/736x/bf/99/12/bf99123de342a2af42066b3436585939.jpg',
goldwtn2:'https://i.pinimg.com/736x/fc/09/6d/fc096d1313dae8ee8d6bc74f7eaf23ef.jpg',
goldwtn3:'https://i.pinimg.com/736x/9d/4e/df/9d4edfaeca89ade0c53e5c16d584af31.jpg',
goldwtn4:'https://i.pinimg.com/736x/54/d1/0a/54d10a445be2990048c5556417a42fa7.jpg',
goldwtn5:'https://i.pinimg.com/736x/11/6f/36/116f360a9fbcf1e2067219f6db0d7fe0.jpg',
goldwtn6:'https://i.pinimg.com/736x/e0/78/83/e078838e98c27f334a466d457a5bac83.jpg',


goldbride:'https://i.pinimg.com/1200x/9f/a7/c3/9fa7c36bb7614508661f294f9912f064.jpg',
goldbride2:'https://i.pinimg.com/1200x/08/e6/3b/08e63b415eefa5bec5bfeb335eb5a999.jpg',
goldbride3:'https://i.pinimg.com/1200x/ff/59/77/ff5977c01abf6a62dffda6d2159f214d.jpg',
goldchoker:'https://i.pinimg.com/736x/79/2e/f6/792ef645e1894c2cb98676e5aed731ad.jpg',
goldchoker2:'https://i.pinimg.com/736x/50/d9/bc/50d9bc289d17279e6bb6f65f73213f15.jpg',
goldchoker3:'https://i.pinimg.com/736x/26/87/cf/2687cf5915d10f0e96a9ba07b47bc1f7.jpg',
goldHaar:'https://i.pinimg.com/1200x/02/3c/42/023c425c0301126a2bf91da1844a8685.jpg',
goldHaar2:'https://i.pinimg.com/736x/6c/bf/91/6cbf91b3b6afaabff80566ebf2ba913c.jpg',
goldHaar3:'https://i.pinimg.com/1200x/d7/6d/75/d76d754c2642c0482dcfed859a208e20.jpg',
goldNath:'https://i.pinimg.com/1200x/cd/12/d1/cd12d1fb51000116dbf1265412eab5bf.jpg',
goldNath2:'https://i.pinimg.com/1200x/29/01/3a/29013a6452079627eccb69452cb87297.jpg',
goldNath3:'https://i.pinimg.com/736x/d3/67/a8/d367a87c184af4198f6ffb476fb6b892.jpg',
goldbangle:'https://i.pinimg.com/736x/d8/99/3a/d8993ab67fe9ccb514b88bfc59c5f587.jpg',
goldbangle2:'https://i.pinimg.com/736x/8c/a5/62/8ca562e4a6deca52f289ce36d61002b0.jpg',
goldbangle3:'https://i.pinimg.com/736x/47/1a/b0/471ab005d55c098b881c6d6d17934734.jpg',

goldtops:'https://i.pinimg.com/1200x/2e/c9/77/2ec977371f54ff31a21379a853b5e67b.jpg',
goldtops2:'https://i.pinimg.com/1200x/4c/8e/3f/4c8e3f58a69aff9a2de43cc7451bb6dc.jpg',
goldtops3:'https://i.pinimg.com/736x/5b/3b/5b/5b3b5b06e234e4422602ea936e311975.jpg',
goldtops4:'https://i.pinimg.com/736x/42/5f/b6/425fb69a6f17f8321351f062ab21a8e2.jpg',
goldtops5:'https://i.pinimg.com/736x/8e/97/ac/8e97acf09973a37b239755f612a9794e.jpg',
goldtops6:'https://i.pinimg.com/1200x/c9/89/52/c98952e57802ed72e9f86e51191e67d8.jpg',

goldJhumki:'https://i.pinimg.com/736x/29/c7/c6/29c7c67c484cc6a33ff8222a79bde655.jpg',
goldJhumki2:'https://i.pinimg.com/736x/12/5b/7d/125b7d79f3fee48576a72826058f476d.jpg',
goldJhumki3:'https://i.pinimg.com/1200x/0b/4c/8f/0b4c8fcb06076954c4cd2b68fce8a45f.jpg',
goldJhumki4:'https://i.pinimg.com/736x/c9/93/5f/c9935fa4411b6d84be38e3369f7f4a2a.jpg',
goldJhumki5:'https://i.pinimg.com/736x/63/c9/72/63c9724074726825a6c630013480f684.jpg',
goldJhumki6:'https://i.pinimg.com/736x/53/3b/21/533b21eb74c35d8db157ef7da8cca3e8.jpg',

goldkundal:'https://i.pinimg.com/1200x/f1/dc/f9/f1dcf9f99b3332eda9cdd31f83c9c59d.jpg',
goldkundal2:'https://i.pinimg.com/736x/ce/9d/68/ce9d685059c5f12676a1f7393cc6fb03.jpg',
goldkundal3:'https://i.pinimg.com/736x/03/02/82/0302823a3ded67c9d44f24635d677839.jpg',
goldkundal4:'https://i.pinimg.com/736x/08/5c/2c/085c2c1917cd04ed4efe4598e4376617.jpg',
goldkundal5:'https://i.pinimg.com/736x/7e/17/c9/7e17c9e9fd46e13d8466cd8e04a722c7.jpg',
goldkundal6:'https://i.pinimg.com/736x/3b/b5/77/3bb577406a9bd3a8d6124b527cd2ea2f.jpg',

goldnosepin:'https://i.pinimg.com/1200x/7b/ab/ac/7babac888d3438e134ef3a893b34e2ef.jpg',
goldnosepin2:'https://i.pinimg.com/1200x/8e/aa/a1/8eaaa1395bf85dca665953fde67a76ef.jpg',
goldnosepin3:'https://i.pinimg.com/1200x/16/0d/57/160d57678a509bca8a4de9cc2a32cd05.jpg',
goldnosepin4:'https://i.pinimg.com/736x/34/dc/e9/34dce9730e0de6e46ee1dde4c9a87a23.jpg',
goldnosepin5:'https://i.pinimg.com/736x/88/a9/3d/88a93d4c9c66bdf4d1abf782e4ca73a5.jpg',
goldnosepin6:'https://i.pinimg.com/736x/70/13/df/7013df530736256c0a80472aebafeab1.jpg',

nosering:'https://i.pinimg.com/1200x/f8/b9/4a/f8b94a88240f4255ea7604d87a1c0224.jpg',
nosering2:'https://i.pinimg.com/1200x/16/e8/06/16e80656e9864dfb50b481396c01540a.jpg',
nosering3:'https://i.pinimg.com/1200x/f7/09/61/f7096105707f966fccf288db593afccc.jpg',
nosering4:'https://i.pinimg.com/1200x/76/78/d8/7678d8ca5a4d5ad407592205c8bd1709.jpg',
nosering5:'https://i.pinimg.com/736x/73/58/fc/7358fced0489f8b1b9bfc800dd211178.jpg',
nosering6:'https://i.pinimg.com/1200x/0a/e6/c7/0ae6c7efd223329f3ec82b52362e3671.jpg',

nath:'https://i.pinimg.com/1200x/2a/42/5a/2a425a07db0e58c073560a78bef9c210.jpg',
nath2:'https://i.pinimg.com/736x/b0/5c/6b/b05c6bfcbdb07a1268a2f82ef7da925c.jpg',
nath3:'https://i.pinimg.com/1200x/48/62/24/48622485003408094486a73d5a64fdc8.jpg',
nath4:'https://i.pinimg.com/1200x/12/c3/af/12c3af0be516661cddc72aa5627e80c9.jpg',
nath5:'https://i.pinimg.com/736x/4d/87/91/4d8791eb9c4046bb1361bebc4fb9a0c1.jpg',
nath6:'https://i.pinimg.com/736x/d6/64/69/d664692a4d056e30f0e389b77d90191e.jpg',

mangalsutra:'https://i.pinimg.com/736x/ba/ac/78/baac78f282ea55cc1aa7f3c2c7773c19.jpg',
mangalsutra2:'https://i.pinimg.com/736x/b4/49/6b/b4496ba180731fa62f97b11e4da56fec.jpg',
mangalsutra3:'https://i.pinimg.com/736x/e1/5a/b0/e15ab0f52f97f7a4cbcbbe9ae3d5f5c6.jpg',
mangalsutra4:'https://i.pinimg.com/1200x/44/fe/a5/44fea5e0b37b4e1158440d804683596e.jpg',
mangalsutra5:'https://i.pinimg.com/736x/a1/c4/95/a1c49514ad7334ff5441a73ab7fad0dc.jpg',
mangalsutra6:'https://i.pinimg.com/1200x/53/05/e7/5305e79d5a9b954e360a225cde4969a6.jpg',

chudi:'https://i.pinimg.com/736x/6f/99/26/6f9926cb90c266955ff0f60110184685.jpg',
chudi2:'https://i.pinimg.com/736x/74/23/c5/7423c5ba164505b60a5909cce5640e18.jpg',
chudi3:'https://i.pinimg.com/736x/2f/01/03/2f0103b9cf9de55f9cfa67f523308e2e.jpg',
chudi4:'https://i.pinimg.com/1200x/0b/bc/99/0bbc996724aafab3763f4961cae7f55f.jpg',
chudi5:'https://i.pinimg.com/736x/0f/47/14/0f47145287847fbf791697b3554e6314.jpg',
chudi6:'https://i.pinimg.com/736x/6c/a4/bb/6ca4bbf2515fead83d8d142db4a3e3c2.jpg',

raanihar:'https://i.pinimg.com/1200x/5a/45/49/5a4549376e8aea423054b42e1ecdcbc4.jpg',
raanihar2:'https://i.pinimg.com/736x/72/60/84/726084e6d4c9897272e361cdaf38f97e.jpg',
raanihar3:'https://i.pinimg.com/736x/ec/88/e3/ec88e3e1d32dddf7925f8dd021b7dd45.jpg',
raanihar4:'https://i.pinimg.com/736x/bf/f4/6a/bff46a4eddecd2054f103270f9a3a35d.jpg',
raanihar5:'https://i.pinimg.com/736x/78/73/58/7873589944730beeff4cd977b607288a.jpg',
raanihar6:'https://i.pinimg.com/736x/ee/53/be/ee53beac48d316c27e429ac492df281c.jpg',

choker:'https://i.pinimg.com/736x/3e/76/07/3e7607254f0c2c104bac149c70e9dd06.jpg',
choker2:'https://i.pinimg.com/736x/6e/7b/ca/6e7bcaeba41d68ac66278a727e531335.jpg',
choker3:'https://i.pinimg.com/736x/6e/f1/8b/6ef18b1c67cbe0da6c575b9d7dc633bc.jpg',
choker4:'https://i.pinimg.com/736x/e6/10/57/e61057e83476f9a68341e626ef802808.jpg',
choker5:'https://i.pinimg.com/1200x/87/86/5a/87865ae25705562b8703c0c06af691d6.jpg',
choker6:'https://i.pinimg.com/1200x/6a/c0/2f/6ac02f8cb09fae5fb90bf05e2bff09fd.jpg',

necklaces:'https://i.pinimg.com/736x/b5/1d/54/b51d54377881806e0bb72019260fb5f4.jpg',
necklaces2:'https://i.pinimg.com/736x/38/f3/92/38f392ede873533d9eb2751ee1b13150.jpg',
necklaces3:'https://i.pinimg.com/736x/53/c2/d4/53c2d401545c3041af70e7625d748edc.jpg',
necklaces4:'https://i.pinimg.com/736x/32/ba/25/32ba2551a794df808e20d84d8c0fbfbf.jpg',
necklaces5:'https://i.pinimg.com/1200x/92/c6/34/92c634423561a232da095c9456df1df2.jpg',
necklaces6:'https://i.pinimg.com/1200x/cb/d1/bc/cbd1bcc02f50903d26d443bf21adf818.jpg',

Om:'https://i.pinimg.com/1200x/1f/9e/2b/1f9e2b14f4caf757767f8e9f1bc75446.jpg',
Om2:'https://i.pinimg.com/1200x/8f/de/99/8fde99bd56c5cad14357b23b6fb49570.jpg',
Om3:'https://i.pinimg.com/1200x/c9/54/54/c95454ce07121322e2945c0d427a60ec.jpg',
Om4:'https://i.pinimg.com/1200x/75/d6/2a/75d62aea637d806b787bf755ef67e75a.jpg',
Om5:'https://i.pinimg.com/1200x/7f/4e/d6/7f4ed6c9464242993d107858b4bf2eaf.jpg',
Om6:'https://i.pinimg.com/1200x/2c/f3/52/2cf35261687eae0c693de69ca7afbe98.jpg',

kanthi:'https://i.pinimg.com/1200x/75/6e/a2/756ea2299ba84dff8669bcfcd4ab955a.jpg',
kanthi2:'https://i.pinimg.com/1200x/1b/29/63/1b2963881dc523a82b9eb57a8f881cba.jpg',
kanthi3:'https://i.pinimg.com/1200x/a7/7f/6f/a77f6f0faf810a3b65aa0195c8cb87db.jpg',
kanthi4:'https://i.pinimg.com/1200x/67/c6/cf/67c6cffc31f1d7bb6d623f265b47d1ea.jpg',
kanthi5:'https://i.pinimg.com/1200x/54/a5/ac/54a5acf1536ec21ff40b5423a525293a.jpg',
kanthi6:'https://i.pinimg.com/1200x/ae/c4/d4/aec4d4b37009b6c8b741fc8b4c865828.jpg',

kada:'https://i.pinimg.com/736x/1f/9f/1d/1f9f1dee5397c6b8e2f32257d0c1abe0.jpg',
kada4:'https://i.pinimg.com/736x/90/92/0f/90920f058226de9a656df64d76754df5.jpg',
kada2:'https://i.pinimg.com/736x/84/94/20/8494201888befe7485cb21e007ed7c1d.jpg',
kada3:'https://i.pinimg.com/736x/b3/53/08/b353083f773b97dce5869ed8e34cc376.jpg',
kada5:'https://i.pinimg.com/736x/50/d4/c9/50d4c99de6a267276b50dc39957e9174.jpg',
kada6:'https://i.pinimg.com/736x/91/04/a1/9104a15e160422e183cdfd6d9eee9079.jpg',


omlocket:'https://i.pinimg.com/736x/ba/43/62/ba4362fed9794ef43f85e8a9c9aff372.jpg',
omlocket2:'https://i.pinimg.com/736x/da/4e/01/da4e0143c7816b21ea0188b513b1bb7e.jpg',
omlocket3:'https://i.pinimg.com/736x/19/31/2d/19312d3d0f42bfb21c8fa8c3a24491aa.jpg',
omlocket4:'https://i.pinimg.com/1200x/ac/85/19/ac8519c4c4f302f3ac7452bdf2d1b268.jpg',
omlocket5:'https://i.pinimg.com/1200x/88/d9/b5/88d9b53db32d6b005a538239eed320bf.jpg',
omlocket6:'https://i.pinimg.com/736x/9f/3f/97/9f3f9781c22403bcc2aa8e97f9647cec.jpg',

maalocket:'https://i.pinimg.com/1200x/7c/6c/f3/7c6cf35d6489ff8d4734897018ea3330.jpg',
maalocket1:'https://i.pinimg.com/736x/8a/ab/d1/8aabd116d11d4377b1a7fd7f99eeae2d.jpg',
maalocket2:'https://i.pinimg.com/736x/c5/f7/64/c5f764660fdff1ef7db826791486fd09.jpg',
maalocket3:'https://i.pinimg.com/1200x/31/cd/6a/31cd6aab02e225af007a1e20140f3376.jpg',
maalocket4:'https://i.pinimg.com/1200x/bf/e6/7f/bfe67fc59a26607d7221612ab3ac3fcd.jpg',
maalocket5:'https://i.pinimg.com/1200x/83/e8/f7/83e8f70fd2919c4e596faeaae192b416.jpg',
maalocket6:'https://i.pinimg.com/1200x/e0/c0/80/e0c0802eb90dfa651acafc4bc2fed093.jpg',

gurjarlocket:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnU9nkyBr25baPSrVubFTfnrXM2b3IfBL-_w&s',
gurjarlocket2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBstJDE_V_zqcYgcsv1p8IGsX7TwhVY24Cg&s',
gurjarlocket3:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3XdR8oKOeqVYL75rm_Z99qyWsO50P4BBHA&s',
gurjarlocket4:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5vwBuiQ8K6PBAibYTuEjG-HjEKHhgiZA6g&s',
gurjarlocket5:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nq_C3qXIGQ2yDZ0CuFM8KXX-J_A9mIJ_TA&s',
gurjarlocket6:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MPTB0q75Mzxgls0yDD7C2ucmpYBiBzYq0A&s',


mkada:'https://i.pinimg.com/1200x/54/f3/12/54f3124fff0941b91099c3bce829ef86.jpg',
mkada2:'https://i.pinimg.com/736x/e1/ae/6d/e1ae6d1b6f3296d4f4ac4633d4044ab3.jpg',
mkada3:'https://i.pinimg.com/1200x/08/37/d4/0837d433df3d1ac805d6f8948b69d5cd.jpg',
mkada4:'https://i.pinimg.com/736x/b3/b2/cc/b3b2cc032c96297975974cea80fc3fd8.jpg',
mkada5:'https://i.pinimg.com/736x/f8/75/8a/f8758a72ba65d1f03a1d20639d679914.jpg',
mkada6:'https://i.pinimg.com/736x/68/f7/27/68f7278fbdffef4b95fdf439c3485d7a.jpg',

wbracelets:'https://i.pinimg.com/736x/eb/fe/0f/ebfe0fca41870abcb4c804c444766d6c.jpg',
wbracelets2:'https://i.pinimg.com/736x/ce/8f/76/ce8f763e35ec925e6b161ca9e48b2ede.jpg',
wbracelets3:'https://i.pinimg.com/736x/d8/2b/27/d82b277f6fc177d7120c2cd44345320d.jpg',
wbracelets4:'https://i.pinimg.com/736x/3b/ae/83/3bae83c73e2ecee62d14cbe47e9344aa.jpg',
wbracelets5:'https://i.pinimg.com/736x/b2/ad/c1/b2adc19a23c423362cd5b772b907bc20.jpg',
wbracelets6:'https://i.pinimg.com/736x/1c/a2/06/1ca206019f694e14d711577dd9693f68.jpg',

mbracelets:'https://i.pinimg.com/1200x/6c/63/ea/6c63eaaa4169da7d9a471e97f8da7b98.jpg',
mbracelets2:'https://i.pinimg.com/1200x/40/55/c3/4055c355b4c2706152b4b8a3193b54ab.jpg',
mbracelets3:'https://i.pinimg.com/1200x/9e/ea/d7/9eead7dfe47e422969b0e4a74d769ef1.jpg',
mbracelets4:'https://i.pinimg.com/1200x/74/01/f7/7401f73014b222ee40932a00fdebfdbf.jpg',
mbracelets5:'https://i.pinimg.com/736x/c1/cd/38/c1cd38c8a46d693e4136692626358279.jpg',
mbracelets6:'https://i.pinimg.com/1200x/74/b5/c2/74b5c23c99b9373776e79a841bcaa683.jpg',


mbali:'https://i.pinimg.com/1200x/d5/72/db/d572db50fdf5bc456242f14d1d9c764c.jpg',
mbali2:'https://i.pinimg.com/736x/8f/bf/8e/8fbf8e49ca44ff3f9af5a0baf1a0a345.jpg',
mbali3:'https://i.pinimg.com/1200x/15/17/cc/1517cc4843bb00f6e4d47443614081fb.jpg',
mbali4:'https://i.pinimg.com/736x/ab/2d/1d/ab2d1d9cf40a51ba7341d9105d094a44.jpg',
mbali5:'https://i.pinimg.com/1200x/82/a8/d0/82a8d09453a9787093efbc925188db25.jpg',
mbali6:'https://i.pinimg.com/1200x/89/40/aa/8940aa2b5ae4a8c48466f233a48712fc.jpg',

wmali:'https://i.pinimg.com/736x/6d/0e/a6/6d0ea6ff563158d87166a3302ff84749.jpg',
wmali2:'https://i.pinimg.com/1200x/43/59/09/4359093c545004cfe777ea037351d152.jpg',
wmali3:'https://i.pinimg.com/736x/12/1f/66/121f6650752aeb46dc695de9be6558f9.jpg',
wmali4:'https://i.pinimg.com/1200x/f2/af/83/f2af836c6650a6ab771803ae3a7b4d03.jpg',
wmali5:'https://i.pinimg.com/736x/cc/1f/9b/cc1f9b5dcfb94281237a93f50bc9f313.jpg',
wmali6:'https://i.pinimg.com/736x/b2/d0/69/b2d0694015b4c194bc056ed109aa3500.jpg',

wearrings:'https://i.pinimg.com/736x/1f/ef/e2/1fefe2356eaceb08cf515728b239fbfa.jpg',
wearrings2:'https://i.pinimg.com/736x/8b/4b/36/8b4b36abd0d7abd3dc5f45d4b5bc4c3b.jpg',
wearrings3:'https://i.pinimg.com/736x/f5/db/6c/f5db6c5f37abae6be28f514a8363e548.jpg',
wearrings4:'https://i.pinimg.com/736x/5c/a9/68/5ca96805fa1043dded20cd8b6c09aa47.jpg',
wearrings5:'https://i.pinimg.com/736x/58/37/9d/58379d888a246e9950dbaac1ba88361d.jpg',
wearrings6:'https://i.pinimg.com/736x/a9/14/dc/a914dca94e3913f846832d17c59478df.jpg',

mearring:'https://i.pinimg.com/1200x/e1/4f/f9/e14ff9816198d72e37f9914bc22548d5.jpg',
mearring2:'https://i.pinimg.com/1200x/50/48/78/504878137b7760f53c33f016df9a9cf4.jpg',
mearring3:'https://i.pinimg.com/1200x/58/c3/d7/58c3d73a10e23576765ec237e313f356.jpg',
mearring4:'https://i.pinimg.com/1200x/e1/ab/c0/e1abc004aed7f8784c8a5388130540dc.jpg',
mearring5:'https://i.pinimg.com/1200x/10/b1/77/10b177c92183f08fb50112585e2ea42c.jpg',
mearring6:'https://i.pinimg.com/1200x/35/78/61/3578614822ed4fab692959fcee62aa45.jpg',

mchain:'https://i.pinimg.com/736x/43/58/29/435829de25b6f081c1a5d44b25b04143.jpg',
mchain2:'https://i.pinimg.com/736x/c9/8d/30/c98d3081f725142baca34dc5c0209418.jpg',
mchain3:'https://i.pinimg.com/1200x/c5/5a/c4/c55ac4c14d217005b21510b780c296b4.jpg',
mchain4:'https://i.pinimg.com/736x/cb/02/55/cb0255af79ca2e3d5096cd09eb29e617.jpg',
mchain5:'https://i.pinimg.com/1200x/42/6d/34/426d34e1b5722d3e71b4417150fdc74e.jpg',
mchain6:'https://i.pinimg.com/736x/a5/8f/85/a58f85773efc10abac97cc3360e6f340.jpg',

wchain:'https://i.pinimg.com/1200x/15/8b/51/158b5131a648a6b42e2d36262be4a755.jpg',
wchain2:'https://i.pinimg.com/736x/46/b5/02/46b502687f7111de1e945383c342aa9a.jpg',
wchain3:'https://i.pinimg.com/736x/2f/20/d3/2f20d3dcad119123882bd6ad94232e21.jpg',
wchain4:'https://i.pinimg.com/736x/b5/76/71/b57671d03b3b9f6d9e72596d88355ca0.jpg',
wchain5:'https://i.pinimg.com/736x/1b/98/91/1b9891a7c9dfa99c19e64d70ee49e665.jpg',
wchain6:'https://i.pinimg.com/736x/a1/01/1f/a1011f47b3098d91985fe085e0dea86c.jpg',

wring:'https://i.pinimg.com/736x/32/c7/45/32c745d5a8e1d8ac440b81bedee9c73f.jpg',
wring2:'https://i.pinimg.com/1200x/59/a0/65/59a0652308ebce6e6a24aa62bffbf639.jpg',
wring3:'https://i.pinimg.com/1200x/1a/5f/54/1a5f54e16ddf93a867186771c2239540.jpg',
wring4:'https://i.pinimg.com/736x/5a/df/fc/5adffcbd6f1568c4021f70c8cc829cb4.jpg',
wring5:'https://i.pinimg.com/736x/5a/36/2f/5a362fa4ddabaef07de87b6a925aa242.jpg',
wring6:'https://i.pinimg.com/1200x/c2/e0/95/c2e09556480b3a7d475fd4bb1ac03a09.jpg',




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
    { name:'Classic Gold Band',      desc:'A sturdy 22K gold band with a brushed finish — the mark of measured confidence.',          imgs:[I.mring1,I.mring2,I.mring3], features:['22K Gold','Brushed Finish','BIS Certified','Custom Sizing'] },
    { name:'Signet Ring',            desc:'Bold oval signet in 22K gold, hand-engraved with a traditional motif.',                    imgs:[I.msingnet,I.msingnet2,I.msingnet3], features:['22K Gold','Hand-engraved','Heavyweight Design','Hallmarked'] },
    { name:'Om Band Ring',           desc:'Sacred Om symbol intricately carved on a solid 22K gold band.',                            imgs:[I.mom,I.mom2,I.mom3], features:['22K Gold','Om Motif','Anti-tarnish Finish','BIS Certified'] },
    { name:'Diamond-set Band',       desc:'A clean 18K gold band channel-set with three brilliant-cut diamonds.',                    imgs:[I.mdiamond,I.mdiamond2,I.r4], features:['18K Gold','Diamond Channel Set','Polished Finish','GIA Certified'] },
  ],
  'gold/womens/rings': [
    { name:'Solitaire Diamond Ring', desc:'A timeless solitaire set in 22K gold — the ultimate declaration of love.',                 imgs:[I.wring,I.wring2,I.wring3], features:['22K Gold','Brilliant-cut Diamond','Cathedral Setting','BIS Certified'] },
    { name:'Rose Gold Halo Ring',    desc:'A halo of micro-pavé stones encircles a central gem in 18K rose gold.',                   imgs:[I.wring4,I.wring5,I.wring6], features:['18K Rose Gold','Pavé Diamond Halo','GIA Certified Stone','Custom Sizing'] },
    // { name:'Floral Cocktail Ring',   desc:'Inspired by a blooming lotus — petals of gold surround a polished gemstone.',             imgs:[I.r4,I.r2,I.r3], features:['22K Gold','Floral Design','Gemstone Centre','Handcrafted'] },
    // { name:'Twisted Band',           desc:'Two strands of 18K gold twisted into one — modern, minimal, endlessly elegant.',          imgs:[I.r3,I.r4,I.r1], features:['18K Gold','Twisted Design','High-polish','Stackable'] },
  ],
  'gold/mens/chains': [
    { name:'Curb Chain — Heavy',     desc:'Hand-assembled curb chain in 22K gold, available in 18", 20" and 22".',                   imgs:[I.mchain5,I.mchain,I.mchain4], features:['22K Gold','Mirror Polish','3 Length Options','BIS Certified'] },
    { name:'Figaro Chain',           desc:'Classic Figaro pattern in 22K gold — alternating oval and round links.',                  imgs:[I.mchain3,I.mchain2,I.mchain6], features:['22K Gold','Figaro Pattern','Secure Lobster Clasp','Hallmarked'] },
    // { name:'Rope Chain',             desc:'A tightly coiled rope chain in 22K gold that gleams from every angle.',                   imgs:[I.n4,I.ch1,I.n3], features:['22K Gold','Rope Weave','3mm Width','BIS Certified'] },
  ],
  'gold/womens/chains': [
    { name:'Delicate Box Chain',     desc:'A gossamer-thin box chain in 18K gold — perfect for layering lockets.',                   imgs:[I.wchain,I.wchain3,I.wchain2], features:['18K Gold','Box Link','Lightweight','Hallmarked'] },
    { name:'Herringbone Chain',      desc:'Flat, flexible herringbone weave in 22K gold that lies smooth against the skin.',         imgs:[I.wchain4,I.wchain5,I.wchain6], features:['22K Gold','Herringbone Pattern','Flat Profile','BIS Certified'] },
    // { name:'Gold Ball Chain',        desc:'Tiny spheres of 22K gold strung into a delicate everyday chain.',                        imgs:[I.n1,I.n2,I.ch1], features:['22K Gold','Ball Link','16" Length','Lightweight'] },
  ],
  'gold/mens/earrings': [
    { name:'Classic Gold Stud',      desc:'A simple 22K gold dome stud — the essential men\'s earring.',                             imgs:[I.mearring2,I.mearring,I.mearring3], features:['22K Gold','Butterfly Back','6mm Diameter','Hallmarked'] },
    { name:'Om Stud',                desc:'Sacred Om engraved on a flat gold disc — devotion you can wear daily.',                   imgs:[I.mearring4,I.mearring5,I.mearring6], features:['22K Gold','Om Engraving','Push-back Setting','BIS Certified'] },
  ],
  'gold/womens/earrings': [
    { name:'Diamond Drop Earring',   desc:'A single brilliant-cut diamond suspends from a delicate 18K gold hook.',                 imgs:[I.wearrings,I.wearrings3,I.wearrings2], features:['18K Gold','Brilliant-cut Diamond','Hook Setting','GIA Certified'] },
    { name:'Gold Flower Stud',       desc:'A five-petal gold flower with a pearl centre — timeless feminine elegance.',              imgs:[I.wearrings4,I.wearrings5,I.wearrings6], features:['22K Gold','Pearl Centre','Push-back','Handcrafted'] },
    // { name:'Chandelier Earring',     desc:'Three tiers of 22K gold drops that catch the light with every movement.',                 imgs:[I.e2,I.e3,I.e1], features:['22K Gold','Three-tier Drop','Hook Back','Party Favourite'] },
  ],
  'gold/mens/bali': [
    { name:'Classic Gold Bali',      desc:'A smooth circular bali in 22K gold — the definitive men\'s hoop earring.',               imgs:[I.mbali2,I.mbali,I.mbali3], features:['22K Gold','Smooth Finish','Hinged Closure','BIS Certified'] },
    { name:'Twisted Bali',           desc:'A twisted rope texture on a classic bali form, in 22K gold.',                            imgs:[I.mbali4,I.mbali5,I.mbali6], features:['22K Gold','Rope Texture','Hinged Clasp','Hallmarked'] },
  ],
  'gold/womens/bali': [
    { name:'Floral Bali',            desc:'Tiny floral clusters set in 22K gold — a feminine take on the classic hoop.',             imgs:[I.wmali3,I.wmali,I.wmali2], features:['22K Gold','Floral Detail','Hinged Closure','Handcrafted'] },
    { name:'Diamond Bali',           desc:'A continuous channel of diamonds set in 18K gold bali — pure sparkle.',                  imgs:[I.wmali4,I.wmali5,I.wmali6], features:['18K Gold','Diamond Channel','Safety Catch','GIA Certified'] },
  ],
  'gold/mens/bracelets': [
    { name:'Curb Bracelet',          desc:'A heavy curb-link bracelet in 22K gold — bold, masculine, enduring.',                    imgs:[I.mbracelets2,I.mbracelets,I.mbracelets3], features:['22K Gold','Curb Link','Box Clasp','BIS Certified'] },
    { name:'ID Bracelet',            desc:'Flat-link ID bracelet in 22K gold with engraving surface on the plate.',                  imgs:[I.mbracelets4,I.mbracelets5,I.mbracelets6], features:['22K Gold','ID Plate','Engravable','Hallmarked'] },
  ],
  'gold/womens/bracelets': [
    { name:'Tennis Bracelet',        desc:'A continuous channel of brilliant diamonds in 18K gold — the definitive luxury bracelet.',imgs:[I.wbracelets,I.wbracelets2,I.wbracelets3], features:['18K Gold','F-G VS Diamonds','Box Clasp','GIA Certified'] },
    { name:'Gold Charm Bracelet',    desc:'A delicate 22K gold chain with three traditional charms — personal and meaningful.',      imgs:[I.wbracelets4,I.wbracelets5,I.wbracelets6], features:['22K Gold','3 Charms Included','Lobster Clasp','Customisable'] },
    // { name:'Bangle with Stones',     desc:'A solid 22K gold bangle studded with ruby and emerald accents.',                         imgs:[I.b2,I.b3,I.b1], features:['22K Gold','Ruby & Emerald','Polished Finish','BIS Certified'] },
  ],
  'gold/mens/kada': [
    { name:'Plain Kada — Heavy',     desc:'A thick solid 22K gold kada — worn as a mark of tradition and strength.',                 imgs:[I.mkada,I.mkada2,I.mkada3], features:['22K Gold','Open-cuff','Solid Weight','BIS Certified'] },
    { name:'Rope-edge Kada',         desc:'Traditional rope-edge design on a solid 22K gold open kada.',                            imgs:[I.mkada4,I.mkada5,I.mkada6], features:['22K Gold','Rope Edge','Open Cuff','Hallmarked'] },
  ],
  'gold/womens/kada': [
    { name:'Floral Kada',            desc:'A delicate 22K gold kada with hand-carved floral motifs all around.',                    imgs:[I.kada,I.kada2,I.kada3], features:['22K Gold','Floral Motif','Lightweight','BIS Certified'] },
    { name:'Diamond Kada',           desc:'A 22K gold kada channel-set with brilliant diamonds along its span.',                    imgs:[I.kada4,I.kada5,I.kada6], features:['22K Gold','Diamond-set','Safety Clasp','GIA Certified'] },
  ],
  'gold/mens/kanthi': [
    { name:'Traditional Kanthi',     desc:'A devotional kanthi necklace in 22K gold with sacred bead design.',                      imgs:[I.kanthi3,I.kanthi,I.kanthi2], features:['22K Gold','Sacred Beads','Traditional Design','BIS Certified'] },
    { name:'Om Kanthi',              desc:'Om-embossed beads strung in 22K gold — worn as a devotional ornament.',                  imgs:[I.kanthi4,I.kanthi5,I.kanthi6], features:['22K Gold','Om Motif Beads','Adjustable Length','Hallmarked'] },
  ],
  'gold/mens/om-lockets': [
    { name:'Om Locket — Classic',    desc:'A hand-carved Om symbol on a solid 22K gold locket — devotion made wearable.',           imgs:[I.omlocket,I.omlocket2,I.omlocket3], features:['22K Gold','Hand-carved Om','Wide Bail','Gift-ready Box'] },
    { name:'Om Locket — 3D',         desc:'A three-dimensional Om locket in 22K gold with high-relief engraving.',                  imgs:[I.omlocket4,I.omlocket5,I.omlocket6], features:['22K Gold','3D Relief','Polished Finish','BIS Certified'] },
  ],
  'gold/mens/maa-lockets': [
    { name:'Maa Locket — Script',    desc:'The word "Maa" in elegant Devanagari script, crafted in solid 22K gold.',                imgs:[I.maalocket,I.maalocket2,I.maalocket3], features:['22K Gold','Devanagari Script','Handcrafted','Hallmarked'] },
    { name:'Maa Locket — Portrait',  desc:'A goddess Durga portrait locket in 22K gold — a tribute to divine motherhood.',          imgs:[I.maalocket4,I.maalocket5,I.maalocket6], features:['22K Gold','Durga Portrait','Embossed Detail','BIS Certified'] },
  ],
  'gold/mens/gurjar-lockets': [
    { name:'Gurjar Pride Locket',    desc:'A locket in 22K gold featuring traditional Gurjar community motifs.',                    imgs:[I.gurjarlocket,I.gurjarlocket2,I.gurjarlocket3], features:['22K Gold','Gurjar Motif','Cultural Heritage','BIS Certified'] },
    { name:'Gurjar Heritage Locket', desc:'Bold Gurjar warrior emblem cast in 22K gold — a locket of cultural pride.',              imgs:[I.gurjarlocket4,I.gurjarlocket5,I.gurjarlocket6], features:['22K Gold','Heritage Design','Deep Engraving','Hallmarked'] },
  ],
  'gold/mens/om-collection': [
    { name:'Om Pendant',             desc:'A minimal Om pendant in 22K gold — sacred simplicity.',                                  imgs:[I.Om,I.Om3,I.Om2], features:['22K Gold','Om Design','Lightweight','BIS Certified'] },
    { name:'Om Signet Ring',         desc:'The Om symbol inlaid in a classic 22K gold signet ring.',                                imgs:[I.Om4,I.Om5,I.om6], features:['22K Gold','Om Inlay','Signet Style','Hallmarked'] },
  ],
  'gold/womens/necklaces': [
    { name:'Pearl Strand Necklace',  desc:'South Sea pearls strung on 18K gold silk — a classic that transcends generations.',      imgs:[I.necklace2,I.necklace,I.necklace3], features:['18K Gold Clasp','South Sea Pearls','Hand-knotted','Luxury Box'] },
    { name:'Layered Gold Necklace',  desc:'Three layers of 22K gold chains at varying lengths — effortlessly editorial.',           imgs:[I.necklace4,I.necklace5,I.necklace6], features:['22K Gold','Triple Layer','Adjustable','BIS Certified'] },
  ],
  'gold/womens/chokers': [
    { name:'Diamond Gold Choker',    desc:'Channel-set diamonds in a close-fitting 22K gold choker — drama at its finest.',        imgs:[I.choker,I.choker4,I.choker1], features:['22K Gold','Channel Diamonds','Adjustable','Bridal Favourite'] },
    { name:'Floral Choker',          desc:'22K gold florets linked into a choker that moves beautifully with the neck.',            imgs:[I.choker2,I.choker5,I.choker6], features:['22K Gold','Floral Links','Box Clasp','Handcrafted'] },
  ],
  'gold/womens/rani-haar': [
    { name:'Rani Haar — Classic',    desc:'A long layered rani haar in 22K gold with ruby and meenakari pendant work.',             imgs:[I.raanihar,I.raanihar2,I.raanihar3], features:['22K Gold','Ruby & Meenakari','Multi-layer','Bridal Weight'] },
    { name:'Rani Haar — Pearls',     desc:'Alternating 22K gold beads and South Sea pearls in a grand rani haar.',                 imgs:[I.raanihar4,I.raanihar5,I.raanihar6], features:['22K Gold','Pearl Accents','Knotted Thread','BIS Certified'] },
  ],
  'gold/womens/chudi': [
    { name:'Gold Chudi Set of 8',    desc:'Eight hand-carved 22K gold chudi with a repeating lotus motif.',                        imgs:[I.chudi,I.chudi3,I.chudi2], features:['22K Gold','Lotus Motif','Set of 8','Custom Weight'] },
    { name:'Slim Gold Bangles',      desc:'Twelve slim 22K gold bangles stacked for everyday brilliance.',                         imgs:[I.chudi4,I.chudi5,I.chudi6], features:['22K Gold','Lightweight','Set of 12','Daily Wear'] },
  ],
  'gold/womens/mangalsutra': [
    { name:'Classic Mangalsutra',    desc:'Sacred 22K gold pendant with diamond on traditional black bead chain.',                  imgs:[I.mangalsutra,I.mangalsutra2,I.mangalsutra3], features:['22K Gold','Certified Diamond','Black Bead','Customisable Length'] },
    { name:'Modern Mangalsutra',     desc:'A contemporary single-strand mangalsutra in 18K gold with a sleek pendant.',             imgs:[I.mangalsutra4,I.mangalsutra5,I.mangalsutra6], features:['18K Gold','Modern Design','Lightweight','BIS Certified'] },
  ],
  'gold/womens/nath': [
    { name:'Bridal Nath — Large',    desc:'A grand bridal nath in 22K gold with pearl and ruby drops, worn with a chain support.',  imgs:[I.nath,I.nath2,I.nath3], features:['22K Gold','Pearl & Ruby','Chain Support Included','Bridal Piece'] },
    { name:'Everyday Nath',          desc:'A small, comfortable nath in 22K gold for daily wear.',                                  imgs:[I.nath4,I.nath5,I.nath6], features:['22K Gold','Lightweight','Easy Clasp','BIS Certified'] },
  ],
  'gold/womens/nose-rings': [
    { name:'Diamond Nose Ring',      desc:'A tiny brilliant-cut diamond set in an 18K gold nose ring.',                            imgs:[I.nosering,I.nosering2,I.nosering3], features:['18K Gold','Brilliant Diamond','Twist-lock Closure','GIA Certified'] },
    { name:'Plain Gold Nose Ring',   desc:'A simple 22K gold nose ring — minimal, refined, traditional.',                          imgs:[I.nosering4,I.nosering5,I.nosering6], features:['22K Gold','Plain Design','Comfortable Fit','BIS Certified'] },
  ],
  'gold/womens/nose-pins': [
    { name:'Diamond Nose Pin',       desc:'A single brilliant-cut diamond on an 18K gold nose pin — barely-there luxury.',         imgs:[I.goldnosepin,I.goldnosepin2,I.goldnosepin3], features:['18K Gold','Brilliant Diamond','Flat Pin Back','GIA Certified'] },
    { name:'Ruby Nose Pin',          desc:'A vivid Burmese ruby set in 22K gold on a classic push-pin back.',                      imgs:[I.goldnosepin5,I.goldnosepin6,I.goldnosepin7], features:['22K Gold','Burmese Ruby','Push-pin Back','BIS Certified'] },
  ],
  'gold/womens/kundal': [
    { name:'Traditional Kundal',     desc:'Large circular ear ornaments in 22K gold with traditional filigree work.',               imgs:[I.goldkundal,I.goldkundal3,I.goldkundal2], features:['22K Gold','Filigree Work','Traditional Design','Hallmarked'] },
    { name:'Meenakari Kundal',       desc:'22K gold kundal adorned with vibrant meenakari enamel in traditional colours.',          imgs:[I.goldkundal6,I.goldkundal5,I.goldkundal4], features:['22K Gold','Meenakari Enamel','Hand-painted','BIS Certified'] },
  ],
  'gold/womens/jhumki': [
    { name:'Traditional Gold Jhumki',desc:'Hand-engraved jhumkis with meenakari work — India\'s finest earring tradition.',        imgs:[I.goldJhumki,I.goldJhumki3,I.goldJhumki2], features:['22K Gold','Meenakari Work','Ruby & Emerald','Traditional'] },
    { name:'Light Jhumki',           desc:'A smaller, everyday jhumki in 22K gold — easy to wear from morning to evening.',        imgs:[I.goldJhumki4,I.goldJhumki5,I.goldJhumki6], features:['22K Gold','Lightweight','Hook Back','Daily Wear'] },
  ],
  'gold/womens/tops': [
    { name:'Diamond Tops',           desc:'Brilliant-cut diamond studs in a four-claw 18K gold setting.',                          imgs:[I.goldtops2,I.goldtops3,I.goldtops], features:['18K Gold','Brilliant Diamond','Four-claw','Certificate Included'] },
    { name:'Pearl Tops',             desc:'A perfectly round Akoya pearl set in 22K gold — a timeless stud.',                      imgs:[I.goldtops4,I.goldtops5,I.goldtops6], features:['22K Gold','Akoya Pearl','Push-back','Luxury Box'] },
  ],
  'gold/womens/temple': [
    { name:'Temple Necklace',        desc:'Lakshmi and lotus motif panels in 22K gold — sacred artistry for festive occasions.',   imgs:[I.goldwtn,I.goldwtn2,I.goldwtn3], features:['22K Gold','Temple Motif','Hand-finished','South Indian Style'] },
    { name:'Temple Earrings',        desc:'Traditional deity-motif earrings in 22K gold with meenakari accents.',                  imgs:[I.goldwtn4,I.goldwtn5,I.goldwtn6], features:['22K Gold','Deity Motif','Meenakari Accents','Festive Wear'] },
  ],
  'gold/bridal': [
    { name:'Royal Bridal Set',       desc:'A complete 7-piece bridal set in 22K gold — necklace, maang tikka, earrings, bangles, nath, payal, mangalsutra.', imgs:[I.goldbride,I.goldbride2,I.goldbride3], features:['22K Gold','7-Piece Set','Polki & Ruby','Bespoke Fitting'] },
    { name:'Bridal Choker Set',      desc:'Grand choker with matching earrings and tikka in 22K gold, set with diamonds.',         imgs:[I.goldchoker,I.goldchoker2,I.goldchoker3], features:['22K Gold','Diamond-set','Matching Set','Bridal Weight'] },
    { name:'Rani Haar Bridal Set',   desc:'A sweeping rani haar with matching earrings and bangles for the modern bride.',         imgs:[I.goldHaar,I.goldHaar2,I.goldHaar3], features:['22K Gold','Multi-layer','Pearl Accents','Complete Set'] },
    { name:'Bridal Nath',            desc:'A large statement nath in 22K gold with pearl, ruby and emerald drops.',                imgs:[I.goldNath,I.goldNath2,I.goldNath3], features:['22K Gold','Pearl & Ruby','Chain Support','Bridal Only'] },
    { name:'Bridal Bangles Set',     desc:'A set of 12 slim 22K gold bangles with diamond accents for the bride.',                 imgs:[I.goldbangle,I.goldbangle2,I.goldbangle3], features:['22K Gold','Diamond Accents','Set of 12','BIS Certified'] },
  ],
  'gold/kids': [
    { name:'Kids Ring',              desc:'A tiny 18K gold ring with a heart motif — a keepsake for life.',                        imgs:[I.goldKi2,I.goldKi3,I.goldKi], features:['18K Gold','Heart Motif','Safe Design','BIS Certified'] },
    { name:'Kids Bracelet',          desc:'A delicate 18K gold chain bracelet with a star charm for little wrists.',               imgs:[I.goldkbr3,I.goldkbr,I.goldkbr2], features:['18K Gold','Star Charm','Safety Clasp','Adjustable'] },
    { name:'Kids Chain',             desc:'A lightweight 18K gold chain designed for comfortable daily wear.',                     imgs:[I.goldkch,I.goldkch2,I.goldkch3], features:['18K Gold','Lightweight','Secure Clasp','BIS Certified'] },
    { name:'Kids Earrings',          desc:'Tiny butterfly studs in 18K gold with a comfortable push-back setting.',                imgs:[I.goldker,I.goldker1,I.goldker2], features:['18K Gold','Butterfly Design','Push-back','Hypoallergenic'] },
  ],
  'gold/coins': [
    { name:'1 Gram Gold Coin',       desc:'Certified 24K pure gold coin — a timeless investment and auspicious gift.',             imgs:[I.goldCoins,I.goldCoins3,I.goldCoins2], features:['24K Pure Gold','BIS Certified','1 Gram','Gift Box Included'] },
    { name:'5 Gram Gold Coin',       desc:'A 24K gold coin with Lakshmi motif — prosperity in your hands.',                       imgs:[I.goldCoins5,I.goldCoins4,I.goldCoins6], features:['24K Pure Gold','Lakshmi Motif','5 Gram','Certificate Included'] },
    { name:'10 Gram Gold Coin',      desc:'An investment-grade 24K gold coin in a premium tamper-proof capsule.',                  imgs:[I.goldCoins7,I.goldCoins8,I.goldCoins9], features:['24K Pure Gold','10 Gram','Tamper-proof Capsule','BIS Certified'] },
  ],
  'silver/mens/rings': [
    { name:'Oxidised Silver Band',   desc:'A wide oxidised band with tribal texture — contemporary style with deep roots.',        imgs:[I.silvermrings,I.silvermrings2,I.silvermrings3], features:['92.5 Silver','Hand-oxidised','Tribal Pattern','Unisex Design'] },
    { name:'Plain Silver Band',      desc:'A simple polished silver band — the understated choice of the discerning man.',         imgs:[I.silvermrings4,I.silvermrings5,I.silvermrings6], features:['92.5 Silver','High-polish','BIS Certified','Comfortable Fit'] },
  ],
  'silver/mens/chains': [
    { name:'Silver Curb Chain',      desc:'A sturdy curb-link silver chain — the masculine choice for everyday wear.',             imgs:[I.silvermch,I.silvermch2,I.silvermch3], features:['92.5 Silver','Curb Link','Lobster Clasp','BIS Certified'] },
    { name:'Silver Rope Chain',      desc:'Twisted rope weave in sterling silver, available in 18" and 22".',                     imgs:[I.silvermch4,I.silvermch5,I.silvermch6], features:['92.5 Silver','Rope Weave','2 Lengths','Hallmarked'] },
  ],
  'silver/mens/kada': [
    { name:"Men's Silver Kada",      desc:'Solid 92.5 silver kada with rope-edge — tradition worn with authority.',               imgs:[I.silvermka,I.silvermka2,I.silvermka3], features:['92.5 Silver','Rope Edge','Open Cuff','BIS Hallmarked'] },
    { name:'Plain Silver Kada',      desc:'A smooth, heavy silver kada — minimal design, maximum presence.',                      imgs:[I.silvermka4,I.silvermka5,I.silvermka6], features:['92.5 Silver','Plain Finish','Heavy Gauge','BIS Certified'] },
  ],
  'silver/mens/bracelets': [
    { name:'Silver Curb Bracelet',   desc:'Curb-link silver bracelet with a box clasp — bold and enduring.',                      imgs:[I.silvermbra,I.silvermbra2,I.silvermbra3], features:['92.5 Silver','Curb Link','Box Clasp','BIS Certified'] },
    { name:'Silver ID Bracelet',     desc:'Flat-plate silver ID bracelet with an engravable surface.',                             imgs:[I.silvermbra4,I.silvermbra5,I.silvermbra6], features:['92.5 Silver','Engravable Plate','Lobster Clasp','Hallmarked'] },
  ],
  'silver/womens/rings': [
    { name:'Filigree Silver Ring',   desc:'Gossamer-thin silver wire woven into a delicate filigree ring.',                       imgs:[I.silverwri,I.silverwri3,I.silverwri2], features:['92.5 Silver','Cuttack Filigree','Handcrafted','Lightweight'] },
    { name:'Stone-set Silver Ring',  desc:'A 92.5 silver ring set with a cushion-cut amethyst — colour and craft.',               imgs:[I.silverwri6,I.silverwri5,I.silverwri4], features:['92.5 Silver','Amethyst Stone','Prong Setting','BIS Certified'] },
  ],
  'silver/womens/chains': [
    { name:'Silver Box Chain',       desc:'A fine silver box chain for layering or wearing alone with a pendant.',                 imgs:[I.silverwch,I.silverwch2,I.silverwch3], features:['92.5 Silver','Box Link','16" Length','BIS Certified'] },
    { name:'Silver Ball Chain',      desc:'Tiny silver spheres strung into a delicate ball chain necklace.',                      imgs:[I.silverwch4,I.silverwch5,I.silverwch6], features:['92.5 Silver','Ball Link','Lightweight','Hallmarked'] },
  ],
  'silver/womens/earrings': [
    { name:'Oxidised Silver Drops',  desc:'Long oxidised silver drops with geometric patterning — bold and contemporary.',        imgs:[I.silverwerr3,I.silverwerr1,I.silverwerr2], features:['92.5 Silver','Oxidised Finish','Hook Back','Statement Piece'] },
    { name:'Silver Stud',            desc:'A simple polished silver stud — the silver wardrobe essential.',                       imgs:[I.silverwerr4,I.silverwerr5,I.silverwerr6], features:['92.5 Silver','High-polish','Push-back','Hypoallergenic'] },
  ],
  'silver/womens/jhumke': [
    { name:'Oxidised Silver Jhumke', desc:'Large oxidised jhumke with beaded drops — bold, beautiful, unmistakably Indian.',     imgs:[I.silverwj,I.silverwj2,I.silverwj3], features:['92.5 Silver','Hand Oxidised','Beaded Drops','Lever-back Hook'] },
    { name:'Plain Silver Jhumke',    desc:'Classic jhumke in polished silver — the heritage earring for everyday wear.',          imgs:[I.silverwj4,I.silverwj5,I.silverwj6], features:['92.5 Silver','Plain Finish','Comfortable Fit','BIS Certified'] },
  ],
  'silver/womens/payal': [
    { name:'Designer Payal',         desc:'Sterling silver anklets with a ghungroo pattern — the music of tradition.',            imgs:[I.silverp,I.silverp3,I.silverp2], features:['92.5 Silver','Ghungroo Bells','Lobster Clasp','Sold as Pair'] },
    { name:'Plain Payal',            desc:'A simple polished silver payal — minimal and comfortable for daily wear.',              imgs:[I.silverp4,I.silverp5,I.silverp6], features:['92.5 Silver','Plain Design','Adjustable','BIS Certified'] },
  ],
  'silver/womens/toe-rings': [
    { name:'Floral Toe Ring',        desc:'A tiny floral silver toe ring — delicate, traditional, auspicious.',                   imgs:[I.silvertr5,I.silvertr,I.silvertr3], features:['92.5 Silver','Floral Motif','Open Band','Adjustable'] },
    { name:'Plain Silver Toe Ring',  desc:'A smooth plain silver toe ring — the enduring symbol of married grace.',               imgs:[I.silvertr2,I.silvertr4,I.silvertr6], features:['92.5 Silver','Plain Band','Open Design','Lightweight'] },
  ],
  'silver/womens/bracelets': [
    { name:'Filigree Silver Bracelet',desc:'Gossamer silver filigree bracelet — ultra-lightweight, exquisite craft.',             imgs:[I.silverwb,I.silverwb2,I.silverwb3], features:['92.5 Silver','Cuttack Filigree','Toggle Clasp','Ultra Lightweight'] },
    { name:'Silver Charm Bracelet',  desc:'A fine silver chain bracelet with five traditional charm drops.',                      imgs:[I.silverwb4,I.silverwb5,I.silverwb6], features:['92.5 Silver','5 Charms','Lobster Clasp','Customisable'] },
  ],
  'silver/womens/kada': [
    { name:'Floral Silver Kada',     desc:'A lightweight silver kada with hand-carved floral motifs — feminine tradition.',       imgs:[I.silverwka,I.silverwka2,I.silverwka3], features:['92.5 Silver','Floral Motif','Open Cuff','Lightweight'] },
    { name:'Filigree Kada',          desc:'A wide silver kada in Cuttack filigree — the finest Indian silverwork tradition.',    imgs:[I.silverwka4,I.silverwka5,I.silverwka6], features:['92.5 Silver','Cuttack Filigree','Handcrafted','BIS Certified'] },
  ],
  'silver/womens/pendants': [
    { name:'Silver Om Pendant',      desc:'A minimal Om pendant in 92.5 silver — sacred geometry in a modern silhouette.',       imgs:[I.silverwpe,I.silverwpe2,I.silverwpe3], features:['92.5 Silver','High-polish','Universal Bail','Hypoallergenic'] },
    { name:'Hamsa Pendant',          desc:'A Hand of Fatima (Hamsa) in oxidised silver — protection and elegance.',               imgs:[I.silverwpe4,I.silverwpe5,I.silverwpe6], features:['92.5 Silver','Oxidised Finish','Hamsa Design','BIS Certified'] },
  ],
  'silver/kids': [
    { name:'Baby Chanda Suraj Set',  desc:'Chanda and Suraj motif set in 92.5 silver — a sacred gift for newborns.',             imgs:[I.silverk1,I.silverk2,I.silverk3], features:['92.5 Silver','Chanda Suraj Motif','Gift Box','BIS Certified'] },
    { name:'Kids Silver Kada',       desc:'A small 92.5 silver kada for children — safe, light and beautifully crafted.',        imgs:[I.silverk4,I.silverk5,I.silverk6], features:['92.5 Silver','Child-safe Design','Lightweight','BIS Certified'] },
  ],
  'silver/coins': [
    { name:'5 Gram Silver Coin',     desc:'999 pure silver coin with Lakshmi motif — an auspicious gifting tradition.',           imgs:[I.silverc1,I.silverc2,I.silverc3], features:['999 Pure Silver','Lakshmi Motif','5 Gram','Gift Box'] },
    { name:'10 Gram Silver Coin',    desc:'A 999 pure silver coin in a tamper-proof capsule with BIS certification.',             imgs:[I.silverc4,I.silverc6,I.silverc5], features:['999 Pure Silver','10 Gram','Tamper-proof','BIS Certified'] },
  ],
  'silver/gifts': [
    { name:'Silver Gift Set — Pooja',desc:'A curated pooja gift set in 92.5 silver — diya, spoon, and bowl with box.',           imgs:[I.silverg,I.silverg2,I.silverg3], features:['92.5 Silver','3-piece Set','Pooja Items','Gift Wrapped'] },
    { name:'Silver Showpiece',       desc:'A handcrafted silver showpiece depicting a traditional Indian motif.',                  imgs:[I.silverg4,I.silverg5,I.silverg6], features:['92.5 Silver','Handcrafted','Display Stand','Gift Box'] },
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