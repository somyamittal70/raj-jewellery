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

export const WHATSAPP_NUMBER = "919876543210";

/* ── Image pools ──────────────────────────────────── */
const I = {
  r1: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=90",
  r2: "https://i.pinimg.com/736x/eb/24/1a/eb241a5b3646245d06b9267e63f849ec.jpg",
  r3: "https://i.pinimg.com/1200x/94/fc/3f/94fc3fec617cb8efd9020f3e900b9b01.jpg",
  r4: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=900&q=90",
  r5: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=90",
  n1: "https://i.pinimg.com/736x/b4/14/aa/b414aaa3bb6d16e652caabaeeaceaeea.jpg",
  n2: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=90",
  n3: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=90",
  n4: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=900&q=90",
  b1: "https://i.pinimg.com/1200x/e4/f1/4e/e4f14e3c6bd7c07ce2ab6497783d5fff.jpg",
  b2: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&q=90",
  b3: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=90",
  e1: "https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=900&q=90",
  e2: "https://i.pinimg.com/1200x/80/86/65/80866544ba9523f6d804ed52ba88e179.jpg",
  e3: "https://i.pinimg.com/736x/69/ba/3c/69ba3c025eefcfa1f80b36194dc72a6b.jpg",
  br1: "https://i.pinimg.com/736x/24/b9/76/24b9767f7f7bbe21d56a87a5b080a889.jpg",
  br2: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=90",
  ch1: "https://i.pinimg.com/1200x/7c/70/18/7c70188c2fe9bedfc5d32de5bb3010ab.jpg",
  lk1: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=90",
  t1: "https://images.unsplash.com/photo-1583937443604-f42c0f2c6bef?w=900&q=90",
  py1: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=900&q=90",
  pd1: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=900&q=90",
  kd1: "https://i.pinimg.com/736x/8a/2b/1d/8a2b1d2bbef8e961c5e7a6b53d68d631.jpg",
  jk1: "https://i.pinimg.com/736x/bf/99/12/bf99123de342a2af42066b3436585939.jpg",
  mg1: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=90",
  ck1: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=90",
  gn1: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=900&q=90",
  cn1: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&q=90",
  sp1: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=900&q=90",
  ko1: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=90",
  mring1:
    "https://i.pinimg.com/736x/9f/97/25/9f9725732e29f1ab8ebd1b9d4c4e6656.jpg",
  mring2:
    "https://i.pinimg.com/1200x/d1/02/79/d10279b7b418b5908767d58b59438f8b.jpg",
  mring3:
    "https://i.pinimg.com/736x/56/82/de/5682de1f3a994b47a6f39c639dfd4a79.jpg",
  msingnet:
    "https://i.pinimg.com/1200x/ea/73/2a/ea732a872e18f6ee79d25b7a0aa27933.jpg",
  msingnet2:
    "https://i.pinimg.com/1200x/ce/7b/5f/ce7b5f8b9141fa9d04841d2929a83782.jpg",
  msingnet3:
    "https://i.pinimg.com/1200x/f2/4d/3f/f24d3f9c0ff080e1b63e4839d8725d8f.jpg",
  mom: "https://i.pinimg.com/1200x/04/2b/fb/042bfb37799802a27afff884b338a9ef.jpg",
  mom2: "https://i.pinimg.com/736x/ec/8d/8c/ec8d8c2e22980f5651e6ae135b3bc989.jpg",
  mom3: "https://i.pinimg.com/736x/d6/a9/ee/d6a9eeb6233f7315117d6ba683e7215d.jpg",
  mdiamond:
    "https://i.pinimg.com/1200x/7d/9c/67/7d9c672c1ad3799b65203e36ebd6da94.jpg",
  mdiamond2:
    "https://i.pinimg.com/1200x/b4/7e/29/b47e294fa17f5e2f253d25763d3270ad.jpg",
  mdiamond3:
    "https://i.pinimg.com/1200x/c2/cd/44/c2cd44d1d1461f5210f394fbb4b98b97.jpg",
  mring00:
    "https://i.pinimg.com/1200x/6e/53/42/6e5342ee744ae290c657116d9c27fbc4.jpg",
  mring0:
    "https://i.pinimg.com/1200x/fc/6d/a7/fc6da771e0f678dba0d9fed39d510ea0.jpg",
  mring:
    "https://i.pinimg.com/1200x/8c/47/69/8c476908775f19658252de8715d46dc7.jpg",
  mring4:
    "https://i.pinimg.com/1200x/ac/96/e2/ac96e2e97e6923f5c514259f282e8dad.jpg",
  mring5:
    "https://i.pinimg.com/1200x/1f/46/42/1f464285db2a2592442549d267e90e57.jpg",
  mring6:
    "https://i.pinimg.com/1200x/11/90/2b/11902b84e870c2d1de7d31790c196b7d.jpg",

  mring7:
    "https://i.pinimg.com/1200x/1a/65/65/1a6565d5ecf476ef5a4508de01a18611.jpg",
  mring8:
    "https://i.pinimg.com/1200x/61/15/ba/6115baaf38bc380826c604dec40f9217.jpg",
  mring9:
    "https://i.pinimg.com/736x/ee/ba/02/eeba02bf55a355722959f3bfa7965e16.jpg",
  mring10:
    "https://i.pinimg.com/1200x/ea/63/f0/ea63f0fa617c2b9db4f886434249bef3.jpg",
  mring11:
    "https://i.pinimg.com/1200x/f9/5a/6a/f95a6a93a70fb5fcce94a7b421d06f80.jpg",
  mring12:
    "https://i.pinimg.com/736x/ef/45/84/ef4584a10a2c04974b5a376f11201193.jpg",
  mring13:
    "https://i.pinimg.com/736x/40/9d/4b/409d4b1a7e5cab4c836b7d5a51f8a689.jpg",
  mring14:
    "https://i.pinimg.com/1200x/d2/13/1f/d2131f9994ff82705029a57ce0f4bb44.jpg",
  mring15:
    "https://i.pinimg.com/1200x/9b/88/c3/9b88c3ac1be5b29426973363a5aff1d9.jpg",
  mring16:
    "https://i.pinimg.com/1200x/28/1c/0f/281c0ff6002477ca0fd670788c555e96.jpg",
  mring17:
    "https://i.pinimg.com/1200x/4a/99/ed/4a99ed2e7a6dc30351084b2eb84f0c51.jpg",
  mring18:
    "https://i.pinimg.com/1200x/64/07/d6/6407d6020005aeb94a0f489bba2cee9a.jpg",
  mring19:
    "https://i.pinimg.com/736x/ac/6a/f4/ac6af4470155134c892ba46bb6697d71.jpg",
  mring20:
    "https://i.pinimg.com/1200x/f9/09/ee/f909eec3f1aa818812a56040baf8a311.jpg",
  mring21:
    "https://i.pinimg.com/736x/fd/24/20/fd2420831755c3cfdf787ace8e8d649f.jpg",
  mring22:
    "https://i.pinimg.com/736x/0f/9f/9a/0f9f9a0ff180a6a7c72a549c37546a91.jpg",
  mring23:
    "https://i.pinimg.com/1200x/42/d1/98/42d198829c41e1de266f2a12e8bf0257.jpg",
  mring24:
    "https://i.pinimg.com/1200x/52/7f/d5/527fd502e821a6f5e490218224da9d40.jpg",
  mring25:
    "https://i.pinimg.com/736x/ee/ba/02/eeba02bf55a355722959f3bfa7965e16.jpg",
  mring26:
    "https://i.pinimg.com/736x/e0/0d/91/e00d91af9d85be653efd9bad3636152e.jpg",
  mring27:
    "https://i.pinimg.com/1200x/56/0f/01/560f01f190a2f4c20b43cb405906e237.jpg",
  mring28:
    "https://i.pinimg.com/736x/86/13/e3/8613e3f3354e55b67e0d7fc8dcecaeda.jpg",
  mring29:
    "https://i.pinimg.com/736x/03/31/6f/03316f53bdf15dbc95cb39a820735adc.jpg",
  mring30:
    "https://i.pinimg.com/736x/d2/f9/8d/d2f98de179be7dd5f351ceaced2a21f7.jpg",
  mring31:
    "https://i.pinimg.com/1200x/b1/22/81/b12281c4a059bef7122d87f6c9f2ae25.jpg",
  mring32:
    "https://i.pinimg.com/736x/d8/da/0e/d8da0e98c23542da2784e3dfa879edea.jpg",
  mring33:
    "https://i.pinimg.com/736x/c3/6b/92/c36b92ccad773b3b804e42acf96de897.jpg",
  mring34:
    "https://i.pinimg.com/1200x/78/7a/f3/787af3fd48a4b50bcbf388ea1fbec9e9.jpg",
  mring35:
    "https://i.pinimg.com/1200x/1e/ae/48/1eae48684618402f9c82e31a34a22b14.jpg",
  mring36:
    "https://i.pinimg.com/736x/32/24/9e/32249e0a19d683f3c8bd2d6f2c7f7eb3.jpg",
  mring37:
    "https://i.pinimg.com/736x/0f/9f/9a/0f9f9a0ff180a6a7c72a549c37546a91.jpg",
  mring38:
    "https://i.pinimg.com/1200x/d9/ba/02/d9ba02ebf863347cb4be9586be3b196e.jpg",
  mring39:
    "https://i.pinimg.com/1200x/d4/74/4a/d4744afb3547e9d0996e822903909150.jpg",
  mring40:
    "https://i.pinimg.com/736x/22/47/c9/2247c9d3448905e4b0f5ed19cdcd0ba8.jpg",
  mring41:
    "https://i.pinimg.com/736x/82/19/4e/82194e2b04c2f1be581eb56806f35491.jpg",

  silverg:
    "https://i.pinimg.com/1200x/32/93/56/329356dbbade5399d621178fb5701d8d.jpg",
  silverg4:
    "https://i.pinimg.com/736x/3d/c9/6a/3dc96a1347d23b695c7d43144586561a.jpg",
  silverg7:
    "https://i.pinimg.com/1200x/ab/5f/6b/ab5f6b6825bc14aa229d9c3bb4c8b4ba.jpg",
  silverg10:
    "https://i.pinimg.com/1200x/61/f6/e8/61f6e83253b116088fae18b1caebc49d.jpg",
  silverg13:
    "https://i.pinimg.com/1200x/92/8a/e8/928ae806ecefe4fcc2c8a02197298f01.jpg",
  silverg16:
    "https://i.pinimg.com/1200x/3c/46/95/3c46955bec6758dbcc30d7a896a56be9.jpg",
  silverg19:
    "https://i.pinimg.com/1200x/41/59/4d/41594d7ad545b30bdc8d87244c7ee73a.jpg",
  silverg22:
    "https://i.pinimg.com/736x/a3/6f/a5/a36fa5b228b5a74d4ba32998eb3553e2.jpg",
  silverg25:
    "https://i.pinimg.com/1200x/9c/69/6e/9c696e857baef4094d1e9054dc133839.jpg",
  silverg28:
    "https://i.pinimg.com/736x/d0/52/6b/d0526b09031728cd4424893c513c4f42.jpg",
  silverg31:
    "https://i.pinimg.com/1200x/f8/22/f4/f822f4d21ed068595ddf12579a59df78.jpg",
  silverg34:
    "https://i.pinimg.com/1200x/65/49/02/654902c8a8d1f468d28000e2885c74b3.jpg",

  silverc1:
    "https://i.pinimg.com/736x/5b/95/f5/5b95f594e30e2c069999c10aa895074c.jpg",
  silverc4:
    "https://i.pinimg.com/736x/6b/df/c6/6bdfc6f6c559fb7595cecfa20f71dac0.jpg",
  silverc7:
  "https://i.pinimg.com/1200x/7a/d9/b8/7ad9b86b25f2f045cbb70b428907670c.jpg",
  silverc10:
  "https://i.pinimg.com/1200x/cd/94/05/cd9405230be236abdc1bb8537ef7bcda.jpg",
  silverc13:
  "https://i.pinimg.com/736x/44/58/aa/4458aa842627109084ba734f8d8638aa.jpg",
  silverc16:
  "https://i.pinimg.com/736x/fd/a2/3d/fda23d8eeac6b4b8eeec5bf7d0c270dc.jpg",
  silverc19:
  "https://i.pinimg.com/736x/57/aa/91/57aa91d2731f3aa40cb59f617d961d0a.jpg",
  silverc22:
  "https://i.pinimg.com/736x/0e/d4/87/0ed4874cacaebb080ba0d9bdb1a02d1c.jpg",
  silverc25:
  "https://i.pinimg.com/1200x/18/bf/f2/18bff27ff2fe722d68a6bcc14b6d9c11.jpg",
  silverc28:
  "https://i.pinimg.com/1200x/f0/1b/4b/f01b4bf790be9da54f610150576c3a9f.jpg",
  silverc31:
  "https://i.pinimg.com/1200x/1f/a0/99/1fa099e9044d9d86bcce1d99931a8510.jpg",
  silverc34:
  "https://i.pinimg.com/1200x/ba/03/c2/ba03c2ed5a82fda129856d9b9f5e886f.jpg",

  silverk1:
    "https://i.pinimg.com/1200x/5b/d3/12/5bd312009d524a23d2a738da012c8d29.jpg",
  silverk2:
    "https://i.pinimg.com/736x/ab/a2/b9/aba2b9ab9dbac510e3bd7f10de92a3c8.jpg",
  silverk3:
    "https://i.pinimg.com/736x/87/18/44/871844098ac01901a0b5e45c5d8b98e1.jpg",
  silverk4:
    "https://i.pinimg.com/1200x/71/b7/5e/71b75e5df5bf8d5a482ad5d49f6f375f.jpg",
  silverk5:
    "https://i.pinimg.com/1200x/14/e2/83/14e283f042e2e77ad4860973a15cdcd8.jpg",
  silverk6:
    "https://i.pinimg.com/736x/aa/3f/8f/aa3f8f30ca7face32863b73634ec75bf.jpg",
  silverk7:
  "https://i.pinimg.com/1200x/ce/b3/f3/ceb3f32257ebd9fbae426837b5756b1c.jpg",
  silverk10:
  "https://i.pinimg.com/1200x/68/90/1a/68901a55cabd1606e9076056398aeb8a.jpg",
  silverk13:
  "https://i.pinimg.com/1200x/1f/ab/bd/1fabbd951555ae2526cfb0b5ea529ffd.jpg",
  silverk16:
  "https://i.pinimg.com/736x/86/f5/79/86f579f53975f1b2bab5fc941d3f04d2.jpg",
  silverk19:
  "https://i.pinimg.com/1200x/82/e0/90/82e090715a713cd35560071c296379a1.jpg",
  silverk22:
  "https://i.pinimg.com/736x/bb/d8/de/bbd8defecec3260b4f05b1181d4c319b.jpg",
  silverk25:
  "https://i.pinimg.com/1200x/af/e8/da/afe8dac1ce920d8be5b6a3b46282e4f1.jpg",
  silverk28:
  "https://i.pinimg.com/1200x/30/31/9b/30319b12e46e14d6c59d9b2153930b98.jpg",
  silverk31:
  "https://i.pinimg.com/736x/2d/0c/6a/2d0c6a5fc9b26a94a8afa1bca1971e0a.jpg",
  silverk34:
  "https://i.pinimg.com/1200x/75/80/e2/7580e22190734bc6687dd3caeaf5a8b1.jpg",

  silverwpe:
    "https://i.pinimg.com/1200x/e5/2d/b3/e52db3f86ff426f8765bdf9408237a9c.jpg",
  silverwpe2:
    "https://i.pinimg.com/1200x/ad/48/4d/ad484d0fcdb5a5a49bc5a9b8e401229b.jpg",
  silverwpe3:
    "https://i.pinimg.com/736x/56/bd/53/56bd53f571548a3cc1a86ab56bedcdb6.jpg",
  silverwpe4:
    "https://i.pinimg.com/1200x/d0/18/ad/d018ad1a81d8a7bbd4228abf6f99e1ed.jpg",
  silverwpe5:
    "https://i.pinimg.com/736x/74/41/ea/7441ea17b04c7fc5f88c547172351929.jpg",
  silverwpe6:
    "https://i.pinimg.com/1200x/86/19/fb/8619fb8046ca84c9997b04e41f90f965.jpg",

  silverwpe7:
    "https://i.pinimg.com/1200x/8f/a7/a2/8fa7a288c6749c15cc5caf886e3b4f45.jpg",
  silverwpe8:
    "https://i.pinimg.com/736x/2e/5f/62/2e5f62a66fcc2a13c8d88c0c3a0fe4e6.jpg",
  silverwpe9:
    "https://i.pinimg.com/1200x/b3/f8/c9/b3f8c9ad49b02e817ed63c965d231653.jpg",
  silverwpe10:
    "https://i.pinimg.com/1200x/94/75/ab/9475ab33db5c9c37a4f8cb46dc7bba06.jpg",
  silverwpe11:
    "https://i.pinimg.com/1200x/d4/70/e9/d470e964ebd0ca848eada7bf32cd1813.jpg",
  silverwpe12:
    "https://i.pinimg.com/736x/22/2b/7b/222b7b62efa0de9bbfae3968faae3e4d.jpg",
  silverwpe13:
    "https://i.pinimg.com/1200x/70/a3/4a/70a34ab174cb3e42f07570f9f96689af.jpg",
  silverwpe14:
    "https://i.pinimg.com/736x/bc/d7/dc/bcd7dcca7b8b241d598c8729e8ff0251.jpg",
  silverwpe15:
    "https://i.pinimg.com/736x/9b/7f/bd/9b7fbd138f56fe7c94841c4e13d3df74.jpg",
  silverwpe16:
    "https://i.pinimg.com/736x/bc/26/2b/bc262b2e544c17a37c3b58110d70009d.jpg",

  silverwpe17:
    "https://i.pinimg.com/1200x/d2/a7/b4/d2a7b4314341f1bbfadd16f838945269.jpg",
  silverwpe18:
    "https://i.pinimg.com/1200x/41/16/21/411621176c2fe577d470523b9a140993.jpg",
  silverwpe19:
    "https://i.pinimg.com/736x/4c/38/a1/4c38a11f5506cb6bc3bbbe0cc755972d.jpg",
  silverwpe20:
    "https://i.pinimg.com/1200x/0d/1a/ab/0d1aab1efd37c44930af0c4fe91cb4d6.jpg",
  silverwpe21:
    "https://i.pinimg.com/736x/cf/89/1d/cf891d09e2817db90000e6eaee0890fc.jpg",
  silverwpe22:
    "https://i.pinimg.com/1200x/c3/82/3c/c3823ce113cfeadf8fea865cbb55afd2.jpg",
  silverwpe23:
    "https://i.pinimg.com/736x/59/39/b3/5939b31b7e527bf17d61caaedbd3839d.jpg",
  silverwpe24:
    "https://i.pinimg.com/736x/79/47/0b/79470bcb5ca3648e75d36bf559f439d9.jpg",

  silverwka:
    "https://i.pinimg.com/736x/45/6b/04/456b04ce93dfd3f092b41f1c83f25f11.jpg",
  silverwka2:
    "https://i.pinimg.com/736x/00/96/d7/0096d7d9d49b78c202479ae84e484bb2.jpg",
  silverwka3:
    "https://i.pinimg.com/736x/7c/5e/57/7c5e5717e7f0568286a65c65edc21e26.jpg",
  silverwka4:
    "https://i.pinimg.com/1200x/14/c8/87/14c887044bf964e0af41e6371f13f5ba.jpg",
  silverwka5:
    "https://i.pinimg.com/1200x/3b/15/54/3b1554100bf35d00749c0558c4c6c31e.jpg",
  silverwka6:
    "https://i.pinimg.com/1200x/5b/a4/f5/5ba4f5abf8c23f5724775f00869a4763.jpg",
  silverwka7:
    "https://i.pinimg.com/736x/d5/67/09/d5670943a51c8ae35baab32935b0cdcc.jpg",
  silverwka10:
    "https://i.pinimg.com/736x/40/e6/30/40e6304138911347054c782816b64a9e.jpg",
  silverwka13:
    "https://i.pinimg.com/736x/23/6f/35/236f3516c5d0eb58f8294429481584fc.jpg",
  silverwka16:
    "https://i.pinimg.com/1200x/c4/08/78/c4087819da0a2549ab3c3808a9ee2060.jpg",
  silverwka19:
    "https://i.pinimg.com/736x/7c/5e/57/7c5e5717e7f0568286a65c65edc21e26.jpg",
  silverwka22:
    "https://i.pinimg.com/736x/2f/1c/be/2f1cbe141ddda50851cf27d9d1b27105.jpg",
  silverwka25: "https://i.pinimg.com/736x/56/6c/26/566c263aaa5c6b19be359ae6ae199f2d.jpg",
  silverwka28: "https://i.pinimg.com/1200x/70/92/6c/70926c5973657da9e31b7d1367b19356.jpg",
  silverwka31: "https://i.pinimg.com/736x/99/a9/0b/99a90b39d2ee6e919400eeb8e2d41f4a.jpg",
  silverwka34: "https://i.pinimg.com/1200x/39/90/3b/39903b49cd1137dd0b242cf0e5ba5bce.jpg",

  silverwb:
    "https://i.pinimg.com/736x/99/a9/0b/99a90b39d2ee6e919400eeb8e2d41f4a.jpg",
  silverwb2:
    "https://i.pinimg.com/736x/04/e7/b4/04e7b420c7baf00016eaca0302b72802.jpg",
  silverwb3:
    "https://i.pinimg.com/736x/e6/72/e9/e672e9353bf7a09e7d5c728494b8348d.jpg",
  silverwb4:
    "https://i.pinimg.com/1200x/c5/31/46/c53146f34aab5861f3b42ef5b7018cb3.jpg",
  silverwb5:
    "https://i.pinimg.com/736x/3d/d2/b9/3dd2b96513a24bd6f9aab963bf4e6eac.jpg",
  silverwb6:
    "https://i.pinimg.com/1200x/b0/73/cf/b073cf226d5a3306dca733e9c1d977e4.jpg",
  silverwb7:
    "https://i.pinimg.com/736x/1b/06/77/1b0677bb1b218ba245bfa95263599d67.jpg",
  silverwb10:
    "https://i.pinimg.com/1200x/c6/5e/44/c65e443580197aae4670f1a8a5fe6323.jpg",
  silverwb13:
    "https://i.pinimg.com/736x/a5/d5/bc/a5d5bc5b26551f81bc36bb916ea212fc.jpg",
  silverwb16:
    "https://i.pinimg.com/1200x/af/b4/b5/afb4b510010150649391a195ffa3dd47.jpg",
  silverwb19:
    "https://i.pinimg.com/1200x/9d/b5/23/9db5236c5b8a224c1988273103e631ae.jpg",
  silverwb22:
    "https://i.pinimg.com/1200x/b0/31/19/b03119aecc95e9a5bf5520300b01e70f.jpg",
  silverwb25:
    "https://i.pinimg.com/1200x/9b/30/7b/9b307bc67214b4b83efa34ad02cdc77e.jpg",
  silverwb28:
    "https://i.pinimg.com/736x/56/f4/62/56f46237dad5870ff6d987ef4aa5d29d.jpg",
  silverwb31:
    "https://i.pinimg.com/1200x/dd/8e/d8/dd8ed825abe0146686e2ad1ad803bc5f.jpg",
  silverwb34:
    "https://i.pinimg.com/1200x/d9/0c/26/d90c26c33b87e25c0e458fc6bb40566a.jpg",

  silvertr:
    "https://i.pinimg.com/1200x/a3/f0/62/a3f062105d280fec239397e5909f7d2d.jpg",
  silvertr2:
    "https://i.pinimg.com/736x/d3/e0/8b/d3e08bf6406c836adef66be0c8eab2f5.jpg",
  silvertr3:
    "https://i.pinimg.com/736x/49/79/e4/4979e4da469bd415e2cf0d38baae0ec7.jpg",
  silvertr4:
    "https://i.pinimg.com/1200x/9c/16/33/9c16336e665f21600570bd76cf5bcead.jpg",
  silvertr5:
    "https://i.pinimg.com/1200x/ca/19/84/ca1984755813187e0f9b559f4a5d35c0.jpg",
  silvertr6:
    "https://i.pinimg.com/1200x/1d/23/75/1d23756e3fea46dc5cd2a824b3036cb7.jpg",
  silvertr7:
    "https://i.pinimg.com/1200x/49/0a/98/490a98d6b8382fd7d548cc59e078e66a.jpg",
  silvertr8:
    "https://i.pinimg.com/1200x/46/86/9f/46869ff609677a73cdfb1fd1bb281808.jpg",
  silvertr9:
    "https://i.pinimg.com/1200x/67/20/4a/67204ad0c02cab9432f75c0263b1a1fc.jpg",
  silvertr10:
    "https://i.pinimg.com/736x/20/b1/92/20b192bd1f29d96b0231ba9b1b0762fc.jpg",
  silvertr11:
    "https://i.pinimg.com/736x/bf/3a/12/bf3a12c4080b4303cbbf415b58c161ca.jpg",
  silvertr12:
    "https://i.pinimg.com/1200x/59/fc/d1/59fcd10a78dac8d8f88eb888ed6dd05c.jpg",
  silvertr13:
    "https://i.pinimg.com/1200x/8f/d7/fa/8fd7fa72bebc4cd72938b6f1b50d1e5a.jpg",
  silvertr14:
    "https://i.pinimg.com/1200x/bf/76/db/bf76dbf6ae12cf737c34e66a838ed8bf.jpg",
  silvertr15:
    "https://i.pinimg.com/1200x/30/a3/a1/30a3a1985c8d16468ec0498cf28664c7.jpg",
  silvertr16:
    "https://i.pinimg.com/1200x/b9/c2/d9/b9c2d9374f008549332ac245b51c74b7.jpg",
  silvertr17:
    "https://i.pinimg.com/1200x/fe/08/1c/fe081c039ca9e482d9515814f900e2b8.jpg",
  silvertr18:
    "https://i.pinimg.com/1200x/14/09/b0/1409b0a5020675119a2b3b012f6d6f67.jpg",
  silvertr19:
    "https://i.pinimg.com/1200x/48/c4/45/48c44548672d3ea8e10f3f51b9a1e7f5.jpg",
  silvertr20:
    "https://i.pinimg.com/1200x/4c/8c/f6/4c8cf6ba655e40d55c4746f7feabc9ab.jpg",
  silvertr21:
    "https://i.pinimg.com/1200x/32/23/00/3223000edd9617b66aa8f8b227c4f73a.jpg",
  silvertr22:
    "https://i.pinimg.com/1200x/72/85/be/7285be566038278318625bae27d6eb5f.jpg",
  silvertr23:
    "https://i.pinimg.com/736x/63/c7/22/63c722e3b82c32f1313a074b5f266244.jpg",
  silvertr24:
    "https://i.pinimg.com/236x/8f/4a/fd/8f4afd8c76f6b5b4002184448dec06f0.jpg",
  silvertr25:
    "https://i.pinimg.com/736x/14/7a/0d/147a0d878756d4adf7a560b52cc86268.jpg",
  silvertr26:
    "https://i.pinimg.com/736x/90/c8/1d/90c81d0f70955c815f705a3be59d167a.jpg",
  silvertr27:
    "https://i.pinimg.com/736x/0e/b3/49/0eb3491aa6ca4d8c904ef5cbad0ca69b.jpg",
  silvertr28:
    "https://i.pinimg.com/736x/e0/b2/04/e0b204773d1973bf3703c0ea93ecc0f9.jpg",
  silvertr29:
    "https://i.pinimg.com/736x/a1/f8/cc/a1f8cc08299718eb1c34bbb7bc507cda.jpg",
  silvertr30:
    "https://i.pinimg.com/1200x/ac/1e/9d/ac1e9d0c9663cd5a40584c848dc02af3.jpg",
  silvertr31:
    "https://i.pinimg.com/1200x/08/86/d4/0886d40312e37b62b62c5400bc07226f.jpg",
  silvertr32:
    "https://i.pinimg.com/1200x/e5/2d/6a/e52d6afbf038d97057458a9f163580c5.jpg",
  silvertr33:
    "https://i.pinimg.com/736x/de/00/85/de008563823f86a67f668d5d6a3154ae.jpg",
  silvertr34:
    "https://i.pinimg.com/1200x/34/61/6f/34616fab1e2130885e02aa34d148dcd6.jpg",
  silvertr35:
    "https://i.pinimg.com/1200x/87/81/43/8781438f4053e25f5dccc6662520fe19.jpg",
  silvertr36:
    "https://i.pinimg.com/736x/96/dd/58/96dd58b0c85feb9ba7ffcd48c6ef1533.jpg",

  silverp:
    "https://i.pinimg.com/1200x/29/e1/00/29e100c78236519106d1172dd74a6ef4.jpg",
  silverp2:
    "https://i.pinimg.com/736x/31/9b/a8/319ba8e9d3db2b06d53d4ce5028345d0.jpg",
  silverp3:
    "https://i.pinimg.com/1200x/69/27/00/6927004aba7782a81280f36b8937d512.jpg",
  silverp4:
    "https://i.pinimg.com/736x/c8/9d/ac/c89dac18d43d09e3dcd40999135e9528.jpg",
  silverp5:
    "https://i.pinimg.com/1200x/9e/f9/30/9ef9308a3c02f7608ef41e46035c4c7a.jpg",
  silverp6:
    "https://i.pinimg.com/1200x/1e/a1/69/1ea169e10925f0fbc5bf13f8b48be9e6.jpg",
  silverp7:
    "https://i.pinimg.com/736x/a9/cd/14/a9cd14e7f43fc5c32e74ce315db70f90.jpg",
  silverp8:
    "https://i.pinimg.com/736x/e0/1e/0b/e01e0b161256d2f7937179b79f568f8b.jpg",
  silverp9:
    "https://i.pinimg.com/1200x/11/fc/db/11fcdbc38777e73c0095a06fc3f3a891.jpg",
  silverp10:
    "https://i.pinimg.com/736x/e5/70/21/e570213cfeecf40d9693dd13f5ac610d.jpg",
  silverp11:
    "https://i.pinimg.com/736x/0e/e7/2d/0ee72d8cc95caf04fabff31022a5f18c.jpg",
  silverp12:
    "https://i.pinimg.com/736x/55/f0/ca/55f0ca4fe12598c06ad065e8c5ae474c.jpg",
  silverp13:
    "https://i.pinimg.com/1200x/96/d4/a5/96d4a59f14509ff736715ec55e21e608.jpg",
  silverp14:
    "https://i.pinimg.com/736x/6e/14/5a/6e145a45058c258554367c3836d08921.jpg",
  silverp15:
    "https://i.pinimg.com/736x/a6/05/5b/a6055bef8e387856668a79294db3f19c.jpg",
  silverp16:
    "https://i.pinimg.com/736x/5c/ad/3c/5cad3cc039e04e5b6e565f3df609a759.jpg",
  silverp17:
    "https://i.pinimg.com/736x/55/55/0f/55550f82f243b9991e51d7b29984ae7d.jpg",
  silverp18:
    "https://i.pinimg.com/1200x/c9/fa/a9/c9faa92002db70cb822510179bf6fd55.jpg",
  silverp19:
    "https://i.pinimg.com/1200x/a3/49/d1/a349d136a7e51829cb659cd8d8cd91f1.jpg",
  silverp20:
    "https://i.pinimg.com/736x/ff/bb/a7/ffbba7d6cd3192416f31ba35b402288f.jpg",
  silverp21:
    "https://i.pinimg.com/736x/db/b8/7d/dbb87d13fcda8c02e6292ff9079bc21f.jpg",
  silverp22:
    "https://i.pinimg.com/1200x/dc/75/57/dc7557c811107bc8a0b87907a5e392d2.jpg",
  silverp23:
    "https://i.pinimg.com/736x/b8/26/6a/b8266aed676a26b8e898368792fd6f03.jpg",
  silverp24:
    "https://i.pinimg.com/736x/7c/58/e8/7c58e8afdea43c95064de68a8758bc97.jpg",
  silverp25:
    "https://i.pinimg.com/1200x/7f/75/2c/7f752cece2de754ba220907b8cb8f1c8.jpg",
  silverp26:
    "https://i.pinimg.com/736x/4c/f6/d2/4cf6d2ade9525250e94083370650f903.jpg",
  silverp27:
    "https://i.pinimg.com/736x/90/43/e7/9043e7718d763dfb7b102d462dc1be48.jpg",
  silverp28:
    "https://i.pinimg.com/736x/d3/9c/b1/d39cb14187f73862628f62c34e7f0ce1.jpg",
  silverp29:
    "https://i.pinimg.com/1200x/76/dc/38/76dc3897bb76de97d1b444a4bbdb59ac.jpg",
  silverp30:
    "https://i.pinimg.com/736x/ea/e2/e1/eae2e11c1348628b8ada41cf7b0e30c6.jpg",
  silverp31:
    "https://i.pinimg.com/1200x/ea/00/32/ea00325ba75da2553e64ae705907a725.jpg",
  silverp32:
    "https://i.pinimg.com/1200x/05/78/61/0578614aff97967b2f0bb5e640dce6a1.jpg",
  silverp33:
    "https://i.pinimg.com/1200x/0b/a3/d8/0ba3d84632670cdadfe0a36ddbb7c3bf.jpg",
  silverp34:
    "https://i.pinimg.com/1200x/45/fc/55/45fc55b48d1858df8fdb4429e393fb5b.jpg",
  silverp35:
    "https://i.pinimg.com/1200x/89/37/96/8937962774e5d7b87aa962b91d5b4a06.jpg",
  silverp36:
    "https://i.pinimg.com/736x/50/7f/71/507f7172211241e74d134f78791b5667.jpg",
  silverp37:
    "https://i.pinimg.com/1200x/e5/43/07/e54307de4fd1436b91cf017b6fd41e38.jpg",
  silverp38:
    "https://i.pinimg.com/1200x/a4/ad/0e/a4ad0e51060d76aa25f40262a031bf9d.jpg",
  silverp39:
    "https://i.pinimg.com/1200x/4b/2a/21/4b2a2117f8c56291412b94ebe69adcf6.jpg",
  silverp40:
    "https://i.pinimg.com/736x/8e/6e/24/8e6e24586016f49e33793c4b5bb65bd1.jpg",
  silverp41:
    "https://i.pinimg.com/736x/ea/7d/db/ea7ddb24ca37f21b0b52d717bf73daaf.jpg",
  silverp42:
    "https://i.pinimg.com/1200x/c6/9b/bd/c69bbdb38008b52d1cb3383a8a61dd2b.jpg",
  silverp43:
    "https://i.pinimg.com/736x/58/3b/bc/583bbc31fb64f511481910ce9e00ecbb.jpg",
  silverp44:
    "https://i.pinimg.com/736x/cd/ce/28/cdce28c0a6d4e013cfaf0909fc034d47.jpg",
  silverp45:
    "https://i.pinimg.com/736x/c6/53/81/c6538177258eeb1fed4fc7ba9fdb3f92.jpg",
  silverp46:
    "https://i.pinimg.com/736x/71/1f/26/711f26d1e94b29a34206b7423a31a3f5.jpg",
  silverp47:
    "https://i.pinimg.com/736x/1d/88/0f/1d880feabe2bb1c36949586e3fc826ad.jpg",
  silverp48:
    "https://i.pinimg.com/1200x/03/5a/a8/035aa8803362bd0d6169d42370a07b23.jpg",

  silverwj:
    "https://i.pinimg.com/736x/44/96/14/449614fba17454c74c4ed0ab04f44973.jpg",
  silverwj2:
    "https://i.pinimg.com/1200x/0c/ee/97/0cee970adc6de9503e3c0aba70799575.jpg",
  silverwj3:
    "https://i.pinimg.com/736x/38/20/9a/38209ad12724fdcbd4d4c6a0118073aa.jpg",
  silverwj4:
    "https://i.pinimg.com/736x/1e/09/dc/1e09dc3823b198dcf61907d85bbc7fd3.jpg",
  silverwj5:
    "https://i.pinimg.com/736x/aa/06/1e/aa061eb9cbbb8243d8e4ff8090db2261.jpg",
  silverwj6:
    "https://i.pinimg.com/736x/e5/e9/16/e5e916ab2c2808318f75dc9b4d8b0a18.jpg",
  silverwj7:
    "https://i.pinimg.com/1200x/85/3d/b8/853db8b8d6ef897c737cdf451d312872.jpg",
  silverwj8:
    "https://i.pinimg.com/736x/6f/29/33/6f29339e0ae28955090540771ec62898.jpg",
  silverwj9:
    "https://i.pinimg.com/736x/77/bd/80/77bd801ce63568802486ed15fa76807d.jpg",
  silverwj10:
    "https://i.pinimg.com/736x/90/80/25/908025f62f7a8ef60f66d316aa7e30cb.jpg",
  silverwj11:
    "https://i.pinimg.com/1200x/d9/f3/58/d9f358409bec48f9581f6054ea3d4488.jpg",
  silverwj12:
    "https://i.pinimg.com/1200x/ad/96/a1/ad96a10cfb08195d4401d500c43e42b2.jpg",
  silverwj13:
    "https://i.pinimg.com/736x/13/e7/1d/13e71d3c9260f9a1951c0ec378d175af.jpg",
  silverwj14:
    "https://i.pinimg.com/736x/04/1c/2f/041c2fb2ae443eb971afda62a619bd5d.jpg",
  silverwj15:
    "https://i.pinimg.com/736x/50/f9/9d/50f99d473a69ebf1f7bb49372c3ceb7f.jpg",
  silverwj16:
    "https://i.pinimg.com/736x/2e/0e/4b/2e0e4b38cf2033bf78a8417a1a94547e.jpg",
  silverwj17:
    "https://i.pinimg.com/736x/78/7d/fb/787dfb326ad4e1b7bc2b05cceb0ab476.jpg",
  silverwj18:
    "https://i.pinimg.com/1200x/c0/21/4b/c0214bccc1f6ee3472877e28c0953341.jpg",
  silverwj19:
    "https://i.pinimg.com/1200x/1e/b6/43/1eb6435115b6a0e712f9c36db30d06f5.jpg",
  silverwj20:
    "https://i.pinimg.com/1200x/9e/c4/3d/9ec43d69339e4bb014d36f27bc7ebd3e.jpg",
  silverwj21:
    "https://i.pinimg.com/1200x/82/05/7a/82057a118febecdcd7360d166736646f.jpg",
  silverwj22:
    "https://i.pinimg.com/1200x/87/2a/e8/872ae8cb1516806df51c5861d3558826.jpg",
  silverwj23:
    "https://i.pinimg.com/1200x/53/4a/ee/534aee06c0fa53153fed8ae2f3d27277.jpg",
  silverwj24:
    "https://i.pinimg.com/736x/6b/ba/a8/6bbaa849fa75fc634b755409c3956470.jpg",
  silverwj25:
    "https://i.pinimg.com/736x/29/ec/5b/29ec5b8815df85460ddfeccb9d310d5c.jpg",
  silverwj26:
    "https://i.pinimg.com/736x/1a/ad/28/1aad28f6311e50c9dbc0f0603e6b4f7e.jpg",
  silverwj27:
    "https://i.pinimg.com/736x/1b/f6/2f/1bf62f35bc20f44ae13890c2dc09d96a.jpg",
  silverwj28:
    "https://i.pinimg.com/1200x/85/3d/b8/853db8b8d6ef897c737cdf451d312872.jpg",
  silverwj29:
    "https://i.pinimg.com/736x/76/34/3b/76343b901b7aa2eedb596fb7b07c8a3f.jpg",
  silverwj30:
    "https://i.pinimg.com/736x/fb/6e/6c/fb6e6c0dbb7f6261e82599263f37a0bf.jpg",
  silverwj31:
    "https://i.pinimg.com/736x/02/be/99/02be99c1fa8dbd0078c63970fb8349d5.jpg",
  silverwj32:
    "https://i.pinimg.com/736x/cb/52/0b/cb520b37e8ad13eae055dab081dc1d64.jpg",
  silverwj33:
    "https://i.pinimg.com/1200x/05/f2/a7/05f2a7d95d30173dc21cbc43eb00c681.jpg",
  silverwj34:
    "https://i.pinimg.com/1200x/b9/58/88/b958888ad08348e10fb4b21088d84251.jpg",
  silverwj35:
    "https://i.pinimg.com/1200x/55/16/89/5516894e13a8ddc44952f2af184a0525.jpg",
  silverwj36:
    "https://i.pinimg.com/736x/76/52/5f/76525f102f3b7e63a1958425285ef6dd.jpg",

  silverwerr:
    "https://i.pinimg.com/736x/2e/46/08/2e4608b5837585d27913f5db735258ce.jpg",
  silverwerr2:
    "https://i.pinimg.com/736x/dc/98/3c/dc983c1081b09ec896e084442a8ffa3c.jpg",
  silverwerr3:
    "https://i.pinimg.com/736x/d8/9b/e9/d89be9de79b3b0f42de85063d613e086.jpg",
  silverwerr4:
    "https://i.pinimg.com/1200x/55/65/79/55657983b3bd0cf6def05394d0073cce.jpg",
  silverwerr5:
    "https://i.pinimg.com/1200x/d8/af/91/d8af91a6f88e1f21494e9bffed8e8f21.jpg",
  silverwerr6:
    "https://i.pinimg.com/1200x/44/f3/bd/44f3bd12d2bbe1c69363adee6128ddb5.jpg",
  silverwerr7:
    "https://i.pinimg.com/1200x/20/e4/ed/20e4ed04433e3441deeb507c01a28109.jpg",
  silverwerr8:
    "https://i.pinimg.com/736x/8e/03/ec/8e03ec54b360843615faad2adcef1ec0.jpg",
  silverwerr9:
    "https://i.pinimg.com/1200x/8c/18/29/8c18296c41e1dad43a2f128a4d361ebe.jpg",
  silverwerr10:
    "https://i.pinimg.com/736x/ed/71/a4/ed71a40976dec68bebf5033bd18d62c3.jpg",
  silverwerr11:
    "https://i.pinimg.com/736x/3a/f3/00/3af300b646a29f6099d367c85dc4045a.jpg",
  silverwerr12:
    "https://i.pinimg.com/736x/e4/c1/15/e4c11509950412bd47159dc1b15d578f.jpg",
  silverwerr13:
    "https://i.pinimg.com/1200x/11/01/a8/1101a8fcc0de5f0de84962799b8544ec.jpg",
  silverwerr14:
    "https://i.pinimg.com/1200x/f3/31/23/f33123902df64f7f6eacdbe73eafa541.jpg",
  silverwerr15:
    "https://i.pinimg.com/1200x/a8/f4/f1/a8f4f147a2f0aed4dd139c2852d5c1cd.jpg",
  silverwerr16:
    "https://i.pinimg.com/736x/59/4c/7a/594c7a1fe044478a76376ceb843f8287.jpg",
  silverwerr17:
    "https://i.pinimg.com/736x/96/18/b6/9618b6b918cf40d7e1e6742d8f5c81f6.jpg",
  silverwerr18:
    "https://i.pinimg.com/1200x/84/6c/9a/846c9aed15c1cbfb26f6313c7414f7d8.jpg",
  silverwerr19:
    "https://i.pinimg.com/736x/92/c1/5e/92c15eaefcb28c0262de83a8b69892e0.jpg",
  silverwerr20:
    "https://i.pinimg.com/736x/71/b9/4e/71b94e007d4136991587a26cc1520cbb.jpg",
  silverwerr21:
    "https://i.pinimg.com/736x/6b/a9/03/6ba903de53fbba9de207def4fad74a59.jpg",
  silverwerr22:
    "https://i.pinimg.com/1200x/65/d7/59/65d7593c780d936bb77f4fa27b86119e.jpg",
  silverwerr23:
    "https://i.pinimg.com/1200x/c0/fe/db/c0fedb94918e8391831c2107f7ff65fe.jpg",
  silverwerr24:
    "https://i.pinimg.com/1200x/53/53/36/535336e75cb67088d5eef53729c27933.jpg",
  silverwerr25:
    "https://i.pinimg.com/1200x/24/1a/2f/241a2f5f31089d63a550d4abe82e7bf2.jpg",
  silverwerr26:
    "https://i.pinimg.com/1200x/fe/ef/60/feef603b4ffafc878f1d83ccdc8453da.jpg",
  silverwerr27:
    "https://i.pinimg.com/1200x/98/61/9a/98619aa67054213154cbbb1a815eb706.jpg",
  silverwerr28:
    "https://i.pinimg.com/1200x/4b/38/2d/4b382de9b3b512d99b412e594b539073.jpg",
  silverwerr29:
    "https://i.pinimg.com/1200x/1c/b4/d3/1cb4d377909d64210a490fd668942fee.jpg",
  silverwerr30:
    "https://i.pinimg.com/1200x/33/de/d8/33ded8479ab5b109e6fa61025f39588e.jpg",
  silverwerr31:
    "https://i.pinimg.com/1200x/8f/8c/82/8f8c82ed4ae9db2c77048d606599a3ad.jpg",
  silverwerr32:
    "https://i.pinimg.com/1200x/b2/0e/33/b20e3337ffb77e8150540ef7bb6e98e0.jpg",
  silverwerr33:
    "https://i.pinimg.com/1200x/2a/34/73/2a347330470a542dfb50ea67ef566105.jpg",
  silverwerr34:
    "https://i.pinimg.com/736x/85/c3/4e/85c34e897ab82c4f0988d51b3036a954.jpg",
  silverwerr35:
    "https://i.pinimg.com/736x/9f/80/47/9f804712f035d77f821fd352574b6945.jpg",
  silverwerr36:
    "https://i.pinimg.com/1200x/a4/e2/ea/a4e2ea10f4de20071dbe299645db9d59.jpg",

  silverwch:
    "https://i.pinimg.com/736x/0d/49/c7/0d49c7f8592125020b58693fce85893d.jpg",
  silverwch2:
    "https://i.pinimg.com/736x/07/d9/5f/07d95fbe7bf67ed8d60cf7bc27531610.jpg",
  silverwch3:
    "https://i.pinimg.com/1200x/76/56/0b/76560b47d41a21a39481b75c4bee8c63.jpg",
  silverwch4:
    "https://i.pinimg.com/1200x/8a/7b/d1/8a7bd1d0a6347f84754afa5fb2bedd72.jpg",
  silverwch5:
    "https://i.pinimg.com/1200x/7a/f5/83/7af5839bb082f59822a35896fc24e3aa.jpg",
  silverwch6:
    "https://i.pinimg.com/736x/5e/0f/38/5e0f3839e1a2e2c0a1f6747fa33bacbc.jpg",

  silverwch7:
    "https://i.pinimg.com/1200x/6a/e0/8e/6ae08e4e7a2a37f396967bd3fe148ebd.jpg",
  silverwch8:
    "https://i.pinimg.com/736x/9a/0d/bf/9a0dbfdf7f61e2cdfe7eaf103b56ec5e.jpg",
  silverwch9:
    "https://i.pinimg.com/1200x/c5/82/5e/c5825eaffe10697db787f9a052c1e180.jpg",
  silverwch10:
    "https://i.pinimg.com/736x/18/ec/a1/18eca1a45ad9caed0e6bbeeb05f2ac2b.jpg",
  silverwch11:
    "https://i.pinimg.com/736x/16/22/25/162225beee72f63a36800db1d00f3917.jpg",
  silverwch12:
    "https://i.pinimg.com/736x/f8/c2/e3/f8c2e30e2867c331b23d5949871db7eb.jpg",
  silverwch13:
    "https://i.pinimg.com/736x/9e/20/b0/9e20b00ca3e41a432588ee877e65a276.jpg",
  silverwch14:
    "https://i.pinimg.com/736x/07/37/c8/0737c85c63cfe308d38e64a0bc84ec0b.jpg",
  silverwch15:
    "https://i.pinimg.com/736x/04/c2/78/04c27862525bb0d7bb5eca398316787b.jpg",
  silverwch16:
    "https://i.pinimg.com/1200x/2f/0c/d3/2f0cd33fc84afd8d48af4c74396320df.jpg",
  silverwch17:
    "https://i.pinimg.com/1200x/c8/cb/1e/c8cb1e8a339bcddf2aead37bf5573c42.jpg",
  silverwch18:
    "https://i.pinimg.com/736x/f2/93/2d/f2932d38e3999941941dfabe51654c4f.jpg",
  silverwch19:
    "https://i.pinimg.com/736x/5f/9c/9e/5f9c9e87ade3969662fe8faa6824477c.jpg",
  silverwch20:
    "https://i.pinimg.com/736x/a0/21/52/a02152d32b8ab083b28e84328ebf657e.jpg",
  silverwch21:
    "https://i.pinimg.com/736x/67/c2/25/67c22519fa705d4b6983dc71a1c6c4fc.jpg",
  silverwch22:
    "https://i.pinimg.com/736x/c9/4b/e5/c94be54bc37950156e3125913063bc82.jpg",
  silverwch23:
    "https://i.pinimg.com/736x/47/dd/3b/47dd3b87ac1146cc84aa7a1c95f721fb.jpg",
  silverwch24:
    "https://i.pinimg.com/1200x/da/99/68/da99682f58a5d0e70965b504576ff4ac.jpg",

  silverwch25:
    "https://i.pinimg.com/736x/56/69/bf/5669bf3c632d2ce106170883ebea3933.jpg",
  silverwch26:
    "https://i.pinimg.com/736x/dc/e4/ad/dce4ad277e1f2f98916552e01ccda5ca.jpg",
  silverwch27:
    "https://i.pinimg.com/1200x/48/39/01/483901b15251e988cced18f512de3c27.jpg",
  silverwch28:
    "https://i.pinimg.com/736x/3f/f7/d1/3ff7d18b7e6e0c1ed7b7566554887b7f.jpg",
  silverwch29:
    "https://i.pinimg.com/736x/c6/06/1f/c6061fa77b623228e1cf4d095a69c587.jpg",
  silverwch30:
    "https://i.pinimg.com/1200x/ad/c2/7f/adc27f6728b8c5d0041f1630eaf1782f.jpg",
  silverwch31:
    "https://i.pinimg.com/736x/7f/77/a2/7f77a2f521c0ca31a89e4291736b46ed.jpg",
  silverwch32:
    "https://i.pinimg.com/736x/22/91/74/229174762fd60b16a69faf5578280d14.jpg",
  silverwch33:
    "https://i.pinimg.com/1200x/87/59/34/8759340338d8547511ffce0b62180546.jpg",
  silverwch34:
    "https://i.pinimg.com/1200x/54/de/88/54de887b3cd53e04645c229ae9fdc282.jpg",
  silverwch35:
    "https://i.pinimg.com/736x/00/fe/69/00fe696ad4880fb45728cc16c4e82ba5.jpg",
  silverwch36:
    "https://i.pinimg.com/1200x/bb/1b/b3/bb1bb33e3dc469a5cd97c3a2c4ef195a.jpg",
  silverwch37:
    "https://i.pinimg.com/1200x/29/66/1d/29661d43d4c00e7c40d467728bec9f81.jpg",
  silverwch38:
    "https://i.pinimg.com/1200x/09/8c/a1/098ca16850b11eb238ea34976b919ebe.jpg",
  silverwch39:
    "https://i.pinimg.com/1200x/20/f1/78/20f1789f435f7a80e1114f2d10a7ae74.jpg",
  silverwch40:
    "https://i.pinimg.com/1200x/31/ed/eb/31edebc2dcabbd4bfba2503870415236.jpg",
  silverwch41:
    "https://i.pinimg.com/1200x/a1/e4/85/a1e485231d6abe46baa50f62a603c941.jpg",
  silverwch42:
    "https://i.pinimg.com/736x/0b/29/ba/0b29babb7987a50434b10d34cabb3c79.jpg",
  silverwch43:
    "https://i.pinimg.com/1200x/23/72/99/237299da0812c2849af88b80e71c3fae.jpg",
  silverwch44:
    "https://i.pinimg.com/1200x/b9/e5/4f/b9e54f9ee27d719c6bee575d3e5dd3e9.jpg",
  silverwch45:
    "https://i.pinimg.com/1200x/47/31/93/473193f006bae3f3ac4cda8c44abc034.jpg",
  silverwch46:
    "https://i.pinimg.com/736x/0b/1c/3f/0b1c3faf1622a76c2cc9d8a81903a563.jpg",
  silverwch47:
    "https://i.pinimg.com/736x/2b/88/15/2b8815714c01b6e8ac920bb0819af4b8.jpg",
  silverwch48:
    "https://i.pinimg.com/736x/62/f8/06/62f80603e575ff94d47db4307d1571fb.jpg",

  silverwri:
    "https://i.pinimg.com/1200x/ab/98/54/ab985443b8ab2d6f288a5d4cdf554903.jpg",
  silverwri2:
    "https://i.pinimg.com/1200x/13/5b/96/135b967d68c7f043e535d2c9d1b16da3.jpg",
  silverwri3:
    "https://i.pinimg.com/736x/d9/77/64/d9776427886aa2a6d2a79c49681174c7.jpg",
  silverwri4:
    "https://i.pinimg.com/1200x/37/97/fc/3797fc530d9735758ce9d3efe41b9930.jpg",
  silverwri5:
    "https://i.pinimg.com/1200x/0b/05/27/0b0527600af58b7c721c7dd9095fcc94.jpg",
  silverwri6:
    "https://i.pinimg.com/1200x/91/59/37/9159375914b1caa05c2651e9e1676ec3.jpg",
  silverwri7:
    "https://i.pinimg.com/1200x/e3/40/9d/e3409d04b1272e843584db3238c52189.jpg",
  silverwri8:
    "https://i.pinimg.com/1200x/b5/16/c5/b516c59c1088b1368ed0acd3670a2a7e.jpg",
  silverwri9:
    "https://i.pinimg.com/1200x/ef/94/65/ef9465757fad4b03b2b84af48b8f80f7.jpg",
  silverwri10:
    "https://i.pinimg.com/1200x/0d/8c/d9/0d8cd9643712e3d90da111dcbf8f812c.jpg",
  silverwri11:
    "https://i.pinimg.com/1200x/c0/a7/3d/c0a73d2ba196c48edd149f1bacbdb84a.jpg",
  silverwri12:
    "https://i.pinimg.com/736x/f7/82/d6/f782d63f1310248491cb6af536262607.jpg",
  silverwri13:
    "https://i.pinimg.com/736x/13/77/4f/13774fd91c43fcc04714fb47ee7485ed.jpg",
  silverwri14:
    "https://i.pinimg.com/1200x/2a/67/bc/2a67bc3fd991dabfcabc49b8cf040c4b.jpg",
  silverwri15:
    "https://i.pinimg.com/1200x/53/de/08/53de08b37deaba27b4a12188ab5b0dc9.jpg",
  silverwri16:
    "https://i.pinimg.com/736x/d5/a3/86/d5a386068576f34bd28b2eb4c8bad76a.jpg",
  silverwri17:
    "https://i.pinimg.com/1200x/f9/8c/0c/f98c0c07f24a7a38719fe0cb545ca00d.jpg",
  silverwri18:
    "https://i.pinimg.com/736x/1b/3a/d7/1b3ad7facdb033d987f896c89bcf085b.jpg",
  silverwri19:
    "https://i.pinimg.com/736x/61/83/6c/61836cc15ba699d74139726b547fe397.jpg",
  silverwri20:
    "https://i.pinimg.com/1200x/2c/83/96/2c839639d90f00fcec2fc3e4f4aecc20.jpg",
  silverwri21:
    "https://i.pinimg.com/736x/ad/42/0e/ad420e0348ed83abb5ad925331a11283.jpg",
  silverwri22:
    "https://i.pinimg.com/1200x/7e/43/59/7e43591bb0ea3d22261d4bd8f7888496.jpg",
  silverwri23:
    "https://i.pinimg.com/736x/3f/d1/f8/3fd1f8f8bd13f60412cdfd5900501d05.jpg",
  silverwri24:
    "https://i.pinimg.com/736x/af/5f/a7/af5fa73af802170f49c2733944c68078.jpg",
  silverwri25:
    "https://i.pinimg.com/1200x/a3/99/9c/a3999cdce88e29bc11a2ed58f6d19abe.jpg",
  silverwri26:
    "https://i.pinimg.com/1200x/09/01/b9/0901b99471edc4840e4983177f85958a.jpg",
  silverwri27:
    "https://i.pinimg.com/736x/de/80/92/de8092cbe39e433b8d43c3f01fe96774.jpg",
  silverwri28:
    "https://i.pinimg.com/1200x/bd/0e/a2/bd0ea21120726b5d5ae273c4490bb5b4.jpg",
  silverwri29:
    "https://i.pinimg.com/1200x/e9/af/29/e9af29d0e4c0cfce33ff98616ec0a4b0.jpg",
  silverwri30:
    "https://i.pinimg.com/1200x/e9/af/29/e9af29d0e4c0cfce33ff98616ec0a4b0.jpg",
  silverwri31:
    "https://i.pinimg.com/736x/a2/f2/77/a2f277b6ccabc303b67b90fd92fe1c9c.jpg",
  silverwri32:
    "https://i.pinimg.com/1200x/ff/d2/da/ffd2da62747ae7dc38c502ed46310dad.jpg",
  silverwri33:
    "https://i.pinimg.com/736x/81/6f/8e/816f8e548d2c702b262cf997d0f54ebb.jpg",
  silverwri34:
    "https://i.pinimg.com/736x/ba/11/3c/ba113c9da3ed81e74b05ac294b5a66f2.jpg",
  silverwri35:
    "https://i.pinimg.com/1200x/ab/21/21/ab2121436c11009eed39703436554098.jpg",
  silverwri36:
    "https://i.pinimg.com/1200x/94/f3/63/94f3631888277f454f4d4c73f87b28f3.jpg",
  silverwri37:
    "https://i.pinimg.com/1200x/0c/33/1c/0c331ca1d3cdedaa9c95066084b33e64.jpg",
  silverwri38:
    "https://i.pinimg.com/736x/10/c6/6e/10c66e15632f64049b76302b142efcde.jpg",
  silverwri39:
    "https://i.pinimg.com/1200x/45/b1/43/45b143b1225a3e501e5e84e524319955.jpg",
  silverwri40:
    "https://i.pinimg.com/1200x/7a/f6/cc/7af6cc0adc82f6dad58929b42dfe8b57.jpg",
  silverwri41:
    "https://i.pinimg.com/1200x/4a/c9/e3/4ac9e36dcb7cd1d5b75bf98c1d91af75.jpg",
  silverwri42:
    "https://i.pinimg.com/736x/3d/44/ec/3d44ec49eef6f63606388d9373a98644.jpg",
  silverwri43:
    "https://i.pinimg.com/736x/5a/49/e1/5a49e15303d0061aba31ce08cca59cf4.jpg",
  silverwri44:
    "https://i.pinimg.com/736x/df/98/7a/df987ab527936d5cc1cfcf6fdb3cbe53.jpg",
  silverwri45:
    "https://i.pinimg.com/1200x/2b/4c/ec/2b4cec578d1e7af28a9fac846031f0d6.jpg",
  silverwri46:
    "https://i.pinimg.com/1200x/99/9c/a2/999ca2916e53404467c360d1799bc098.jpg",
  silverwri47:
    "https://i.pinimg.com/736x/6c/bc/b9/6cbcb96c50a4d479f2ab92ddec616df2.jpg",
  silverwri48:
    "https://i.pinimg.com/736x/64/e0/2b/64e02b6bb7c0efced0c0529c0393e6db.jpg",

  silvermbra:
    "https://i.pinimg.com/1200x/c7/8c/6f/c78c6f88c3d45cf6ccf713203cb1508d.jpg",
  silvermbra2:
    "https://i.pinimg.com/736x/7c/40/bd/7c40bdc2cd94eef77ae18c617ee6ce94.jpg",
  silvermbra3:
    "https://i.pinimg.com/1200x/4e/6b/36/4e6b36991baaea85a36244f5d4cd51fe.jpg",
  silvermbra4:
    "https://i.pinimg.com/1200x/cb/84/86/cb84862e7004ea2d210a0ee7862040e2.jpg",
  silvermbra5:
    "https://i.pinimg.com/1200x/75/91/03/759103c59eb644b634cc1e7f471e95d4.jpg",
  silvermbra6:
    "https://i.pinimg.com/1200x/73/78/56/7378560c83a15023c80527ffb92f928f.jpg",
  silvermbra7:
    "https://i.pinimg.com/1200x/2d/c3/29/2dc329fd475e59ee1b2bfa4f82589a84.jpg",
  silvermbra8:
    "https://i.pinimg.com/736x/e5/b3/99/e5b399184060474881fafaf38d789c41.jpg",
  silvermbra9:
    "https://i.pinimg.com/1200x/24/4c/8b/244c8bc757abeaf1fe6c7bd0bb481d19.jpg",
  silvermbra10:
    "https://i.pinimg.com/1200x/49/e9/02/49e902857688176cddb5d78d8bf1858e.jpg",
  silvermbra11:
    "https://i.pinimg.com/736x/07/b3/ad/07b3ad9892cab4c118f93ee1b63dd344.jpg",
  silvermbra12:
    "https://i.pinimg.com/1200x/e7/39/fa/e739faa84bc2b1e8466bee7b05dd2440.jpg",
  silvermbra13:
    "https://i.pinimg.com/1200x/ad/da/ac/addaacd3d8fb1e86930d6bb23ff4f2ed.jpg",
  silvermbra14:
    "https://i.pinimg.com/1200x/91/42/2a/91422a663ceacc82471dbf574dd11b19.jpg",
  silvermbra15:
    "https://i.pinimg.com/1200x/3c/9a/fb/3c9afb5b899b98865207331737fa4ca4.jpg",
  silvermbra16:
    "https://i.pinimg.com/1200x/34/c6/c6/34c6c695755064f6a3fd58ac632dddb5.jpg",
  silvermbra17:
    "https://i.pinimg.com/1200x/d4/7b/b3/d47bb3cfff7c6c07d96cbbb906e65d29.jpg",
  silvermbra18:
    "https://i.pinimg.com/1200x/2d/b6/de/2db6de71fd046b8f9994fa43c3da2acf.jpg",
  silvermbra19:
    "https://i.pinimg.com/1200x/a5/8b/3e/a58b3e7e1bba3a92989fc903818b06a5.jpg",
  silvermbra20:
    "https://i.pinimg.com/1200x/26/c4/0b/26c40b699b78d0113b1574c8378db9bd.jpg",
  silvermbra21:
    "https://i.pinimg.com/1200x/1f/f8/c7/1ff8c788fb376114f7dd0e0284051888.jpg",
  silvermbra22:
    "https://i.pinimg.com/736x/a8/6b/f6/a86bf690fc4c5c8f3b2eed6b504dd5a6.jpg",
  silvermbra23:
    "https://i.pinimg.com/1200x/bf/45/51/bf4551a85452740ccaa1eb2758296b00.jpg",
  silvermbra24:
    "https://i.pinimg.com/1200x/16/cd/0f/16cd0ff7555446f0230a5754b6de7a37.jpg",
  silvermbra25:
    "https://i.pinimg.com/1200x/de/2c/76/de2c7683e423ceb5f9d321e97758705f.jpg",
  silvermbra26:
    "https://i.pinimg.com/1200x/25/40/8a/25408a5bbabe9f9e3ca7f1cd632ff2b2.jpg",
  silvermbra27:
    "https://i.pinimg.com/1200x/2d/b6/de/2db6de71fd046b8f9994fa43c3da2acf.jpg",
  silvermbra28:
    "https://i.pinimg.com/1200x/d5/a9/22/d5a92209c599f300a9b08cf96795002d.jpg",
  silvermbra29:
    "https://i.pinimg.com/1200x/a2/a2/4b/a2a24b85287a31f5f1fd0a4761233186.jpg",
  silvermbra30:
    "https://i.pinimg.com/1200x/49/da/62/49da62094b7290f8cfca85e4743f6c8b.jpg",
  silvermbra31:
    "https://i.pinimg.com/1200x/7b/92/36/7b92366a3a08f2adf39a9c94fc3833e0.jpg",
  silvermbra32:
    "https://i.pinimg.com/1200x/3c/be/f3/3cbef32f7a360ec8210bc659b0391a1a.jpg",
  silvermbra33:
    "https://i.pinimg.com/1200x/11/f5/13/11f513f4ea2b179ca8cf23f8f2755c13.jpg",
  silvermbra34:
    "https://i.pinimg.com/1200x/50/11/9c/50119c4d1cc27c2683eb4e3a4ce92340.jpg",
  silvermbra35:
    "https://i.pinimg.com/1200x/30/5d/98/305d980a5e0d85e076df2ddea1745ec7.jpg",
  silvermbra36:
    "https://i.pinimg.com/1200x/4e/6b/36/4e6b36991baaea85a36244f5d4cd51fe.jpg",

  silvermka:
    "https://i.pinimg.com/736x/6b/54/f4/6b54f411d8ff6798b8bf151937c8b86c.jpg",
  silvermka2:
    "https://i.pinimg.com/736x/d6/bb/9c/d6bb9c3bbab57ce21b4cef30a5b36ab8.jpg",
  silvermka3:
    "https://i.pinimg.com/1200x/43/d0/9d/43d09d14134e9d29b88d6b2a6eec58f6.jpg",
  silvermka4:
    "https://i.pinimg.com/736x/47/a6/c5/47a6c562c8c7b841433ba02dfd51acae.jpg",
  silvermka5:
    "https://i.pinimg.com/736x/f6/e2/2a/f6e22a00a4d8ef39f19159d76567a0ca.jpg",
  silvermka6:
    "https://i.pinimg.com/736x/57/5a/7d/575a7d1942af4835c2f6416e089fa0dc.jpg",
  silvermka7:
    "https://i.pinimg.com/736x/cf/2c/13/cf2c13eac1da175ee654b6ec4f287a38.jpg",
  silvermka8:
    "https://i.pinimg.com/736x/35/e8/fa/35e8fa5f75999eaeb6f679d7c2e2134d.jpg",
  silvermka9:
    "https://i.pinimg.com/736x/5d/59/e8/5d59e83864778a4ad8065c3cc18eb9cf.jpg",
  silvermka10:
    "https://i.pinimg.com/1200x/1c/20/ce/1c20ce1ef543ffbcf6579c3215c217e3.jpg",
  silvermka11:
    "https://i.pinimg.com/1200x/28/7e/fd/287efdb0630d894e3e84965818881eea.jpg",
  silvermka12:
    "https://i.pinimg.com/1200x/94/a8/85/94a885bc497786f8c52958cdb9ed27c6.jpg",
  silvermka13:
    "https://i.pinimg.com/736x/b0/90/4e/b0904e496e65591c4a30334da49cedca.jpg",
  silvermka14:
    "https://i.pinimg.com/1200x/97/c6/55/97c6553ffd650cf5c38b6ceb514bbe93.jpg",
  silvermka15:
    "https://i.pinimg.com/1200x/4f/f2/6e/4ff26e4762fb97423f627a7297f3ee34.jpg",
  silvermka16:
    "https://i.pinimg.com/1200x/41/49/00/414900f651bdeb09e202b6a0e4746d23.jpg",
  silvermka17:
    "https://i.pinimg.com/1200x/9e/fc/bb/9efcbb1369209d9e47dec53ca213abd3.jpg",
  silvermka18:
    "https://i.pinimg.com/1200x/c9/01/ef/c901efa20a1d7648adf89534cbe775a7.jpg",
  silvermka19:
    "https://i.pinimg.com/736x/aa/06/ea/aa06ea08fa4ed1071c3b83a39fdc63fc.jpg",
  silvermka20:
    "https://i.pinimg.com/736x/0f/b5/0b/0fb50bd85fd07896abf0c4a8827cb435.jpg",
  silvermka21:
    "https://i.pinimg.com/736x/73/5f/00/735f005f7d0de1559374ff4832b96523.jpg",
  silvermka22:
    "https://i.pinimg.com/1200x/73/94/93/739493f9850f188616c82691944f00f2.jpg",
  silvermka23:
    "https://i.pinimg.com/736x/aa/52/40/aa5240edd6b8e3a61c93a4e181eae603.jpg",
  silvermka24:
    "https://i.pinimg.com/1200x/2a/45/e9/2a45e960172945f513868bd2baaef166.jpg",
  silvermka25:
    "https://i.pinimg.com/1200x/99/c1/1b/99c11bcdd6cfb623a7742f614c84720d.jpg",
  silvermka26:
    "https://i.pinimg.com/1200x/33/d7/33/33d7338ee2f0b07ebc4750e60eb5f418.jpg",
  silvermka27:
    "https://i.pinimg.com/1200x/ae/e4/8e/aee48e0996d3085e465e715ce281bec3.jpg",
  silvermka28:
    "https://i.pinimg.com/1200x/54/33/57/543357f62c0283b60ebc78ec4ec9fb6d.jpg",
  silvermka29:
    "https://i.pinimg.com/736x/c2/a3/73/c2a373755160cc71a24004228924501d.jpg",
  silvermka30:
    "https://i.pinimg.com/1200x/c4/03/44/c40344e1740442de5c338cac87a67751.jpg",
  silvermka31:
    "https://i.pinimg.com/1200x/2a/45/e9/2a45e960172945f513868bd2baaef166.jpg",
  silvermka32:
    "https://i.pinimg.com/736x/c3/af/af/c3afafb24442422826e5905eba613bb0.jpg",
  silvermka33:
    "https://i.pinimg.com/1200x/51/51/b2/5151b284b1e8353c9163c1d22d837637.jpg",
  silvermka34:
    "https://i.pinimg.com/1200x/01/02/24/0102249df2ea8e82ba58dd8e4c8843db.jpg",
  silvermka35:
    "https://i.pinimg.com/1200x/b0/31/7c/b0317c8218e0cae6b36fa3d9fc440a2a.jpg",
  silvermka36:
    "https://i.pinimg.com/1200x/08/0f/b6/080fb61fa44d7ac4f28c424d61fc8f6c.jpg",

  silvermch:
    "https://i.pinimg.com/1200x/0d/15/d7/0d15d7c497c705a10d084959671a8449.jpg",
  silvermch2:
    "https://i.pinimg.com/1200x/f7/fb/b0/f7fbb01e8ab82e9675d863a0040d8236.jpg",
  silvermch3:
    "https://i.pinimg.com/1200x/1a/65/3c/1a653cb3a16bd88400b75829dccdab77.jpg",
  silvermch4:
    "https://i.pinimg.com/736x/10/52/b8/1052b8dfe5e41a9bb6b36f7f118fbc2e.jpg",
  silvermch5:
    "https://i.pinimg.com/1200x/0d/42/16/0d4216b8f1f0e3a1e84baa7e6ed0889d.jpg",
  silvermch6:
    "https://i.pinimg.com/736x/9a/29/39/9a2939a32577e5e4902485b6ac8985b2.jpg",
  silvermch7:
    "https://i.pinimg.com/1200x/18/76/d6/1876d67a0cceef05e4535f97ff2c391c.jpg",
  silvermch8:
    "https://i.pinimg.com/736x/04/76/32/047632e5d62e70ba415a9ca3f397413a.jpg",
  silvermch9:
    "https://i.pinimg.com/1200x/21/80/ab/2180ab2c9f228e69dfb6eed226e628ac.jpg",
  silvermch10:
    "https://i.pinimg.com/736x/ad/da/ac/addaacd3d8fb1e86930d6bb23ff4f2ed.jpg",
  silvermch11:
    "https://i.pinimg.com/1200x/89/30/6b/89306b5e76faeb32efc6574cc2e87582.jpg",
  silvermch12:
    "https://i.pinimg.com/1200x/07/a8/31/07a831fa14e599866c5e3cfec9d2a531.jpg",
  silvermch13:
    "https://i.pinimg.com/1200x/f0/19/71/f019716216de490d4ead29d77f94a17e.jpg",
  silvermch14:
    "https://i.pinimg.com/1200x/61/c0/cf/61c0cf5c69938587b3e761ee25e071d7.jpg",
  silvermch15:
    "https://i.pinimg.com/1200x/5f/74/a7/5f74a79bb8f8ccd768860d40130de810.jpg",
  silvermch16:
    "https://i.pinimg.com/1200x/b7/1a/91/b71a9132acecdf8fe9df6ddc4c26b176.jpg",
  silvermch17:
    "https://i.pinimg.com/1200x/a5/8b/3e/a58b3e7e1bba3a92989fc903818b06a5.jpg",
  silvermch18:
    "https://i.pinimg.com/736x/3e/09/50/3e095063ebd6d1518c9baa06ba9a4f1f.jpg",
  silvermch19:
    "https://i.pinimg.com/736x/77/e8/2c/77e82cf93e8e1f1b61046ee05a3fb9b0.jpg",
  silvermch20:
    "https://i.pinimg.com/736x/80/fb/ca/80fbcab988868db1fdb5a453ec6d1ee3.jpg",
  silvermch21:
    "https://i.pinimg.com/1200x/cd/4a/c5/cd4ac593f1dba1b9153a969fa03dffcd.jpg",
  silvermch22:
    "https://i.pinimg.com/736x/63/ea/59/63ea590b070993b8a718ef788c7e1fc1.jpg",
  silvermch23:
    "https://i.pinimg.com/736x/65/84/2f/65842f3c2ab69fa0bdbc96eaed12ddd8.jpg",
  silvermch24:
    "https://i.pinimg.com/1200x/d4/23/79/d42379d8d06089e68d495d0cd3838cda.jpg",
  silvermch25:
    "https://i.pinimg.com/1200x/18/6b/e0/186be0e491157fd7de9289b82b9d9008.jpg",
  silvermch26:
    "https://i.pinimg.com/1200x/ff/d6/8e/ffd68eff14feb03ea7350ff9399f8d39.jpg",
  silvermch27:
    "https://i.pinimg.com/1200x/ea/7d/9c/ea7d9c3cb62fae149266d7952ce67fd9.jpg",
  silvermch28:
    "https://i.pinimg.com/736x/84/b8/0e/84b80efc7e731b3e74a60b4ad435c9e8.jpg",
  silvermch29:
    "https://i.pinimg.com/1200x/d0/a5/01/d0a501c389d83f936c9c4dd65cbc43f3.jpg",
  silvermch30:
    "https://i.pinimg.com/1200x/c9/f6/64/c9f66406ce87ec6f5cdb57e2860db2ba.jpg",
  silvermch31:
    "https://i.pinimg.com/1200x/67/37/2f/67372fd5bf9fc2eb5c7b90bd86f61c9f.jpg",
  silvermch32:
    "https://i.pinimg.com/736x/47/2d/9e/472d9ee66479c9b62eb8769027f8b2ef.jpg",
  silvermch33:
    "https://i.pinimg.com/1200x/44/8a/d2/448ad2c70730d6e22b7ecfb8028bcfb1.jpg",
  silvermch34:
    "https://i.pinimg.com/1200x/ba/69/34/ba6934fd1583aa6d01b9006ccfdc7a01.jpg",
  silvermch35:
    "https://i.pinimg.com/736x/51/c2/92/51c2921ac37a91dfabb27ea42586f073.jpg",
  silvermch36:
    "https://i.pinimg.com/1200x/0f/96/59/0f9659f757715e3f48869d6fc7754da8.jpg",
  silvermch37:
    "https://i.pinimg.com/1200x/11/ef/72/11ef72033fd8e9c0f4ec5eb102385d4a.jpg",
  silvermch38:
    "https://i.pinimg.com/1200x/f6/1b/dd/f61bddd2e155b8ad422f5b8e99d5623c.jpg",
  silvermch39:
    "https://i.pinimg.com/1200x/8e/56/3e/8e563ecc71782f5a5a890b05e554c916.jpg",
  silvermch40:
    "https://i.pinimg.com/1200x/e1/70/f0/e170f0e7f049178219ec24d107b380c8.jpg",
  silvermch41:
    "https://i.pinimg.com/1200x/c3/25/34/c3253427045ac4509f975ff56a9b61ef.jpg",
  silvermch42:
    "https://i.pinimg.com/736x/8e/47/2c/8e472c844b10b1724cb7af3d68f461cb.jpg",
  silvermch43:
    "https://i.pinimg.com/1200x/12/be/b3/12beb300c4a55cd4d0030d2e07fb8df2.jpg",
  silvermch44:
    "https://i.pinimg.com/1200x/20/6b/6d/206b6de556e718cea2fa6ae21bd86094.jpg",
  silvermch45:
    "https://i.pinimg.com/1200x/5a/c8/b8/5ac8b81bfa66afc389bacbc217c0c467.jpg",
  silvermch46:
    "https://i.pinimg.com/736x/e0/f2/87/e0f28778594f39d7916d6b1c736db350.jpg",
  silvermch47:
    "https://i.pinimg.com/1200x/65/97/43/659743dd9451daaad2f4b19a466f33c3.jpg",
  silvermch48:
    "https://i.pinimg.com/1200x/e4/41/e2/e441e2d16d2fb9fa31ea9f1a4f4bbbe6.jpg",

  silvermrings:
    "https://i.pinimg.com/736x/e4/79/cd/e479cd126938b702357c4bc066ab155d.jpg",
  silvermrings2:
    "https://i.pinimg.com/736x/7a/96/9d/7a969d24db7aa046110164539fb1e16b.jpg",
  silvermrings3:
    "https://i.pinimg.com/1200x/df/6d/2c/df6d2c7a8b33b854476dda86da2a1e23.jpg",
  silvermrings4:
    "https://i.pinimg.com/736x/03/c9/d5/03c9d53f353af8c50b3d992557011dac.jpg",
  silvermrings5:
    "https://i.pinimg.com/1200x/59/b6/3a/59b63a9c0143b655345c022d125565f9.jpg",
  silvermrings6:
    "https://i.pinimg.com/1200x/b9/c7/ce/b9c7ce07da9cb14f740355fcf9574a08.jpg",
  silvermrings7:
    "https://i.pinimg.com/736x/fe/4f/53/fe4f53360210e0b246fe2a1793826b14.jpg",
  silvermrings8:
    "https://i.pinimg.com/736x/94/a1/08/94a108db13712430f9fd5bafdadbe36e.jpg",
  silvermrings9:
    "https://i.pinimg.com/1200x/7a/c5/1a/7ac51a863907703412c3af84a4dee5b0.jpg",
  silvermrings10:
    "https://i.pinimg.com/1200x/a7/7c/d6/a77cd60083dc487194c6ce4bfb420e07.jpg",
  silvermrings11:
    "https://i.pinimg.com/736x/16/9e/40/169e40690ad257c910407b96fec11914.jpg",
  silvermrings12:
    "https://i.pinimg.com/736x/08/d2/82/08d282a5f38b2341e1d1bea4d6d03fd3.jpg",
  silvermrings13:
    "https://i.pinimg.com/736x/fb/0e/42/fb0e426125a781c16ec37f22b37cabfc.jpg",
  silvermrings14:
    "https://i.pinimg.com/736x/76/68/c9/7668c997c960448f4416d660e1037dc5.jpg",
  silvermrings15:
    "https://i.pinimg.com/736x/62/fa/46/62fa46625541362c80c9bfcb308f7164.jpg",
  silvermrings16:
    "https://i.pinimg.com/1200x/19/67/d4/1967d47fac7ef879139c8876a4ccc1e1.jpg",
  silvermrings17:
    "https://i.pinimg.com/1200x/e7/9b/c9/e79bc94f64fe52157b7c487e63272e52.jpg",
  silvermrings18:
    "https://i.pinimg.com/736x/26/6d/21/266d215fabde8741626968cd9a23016f.jpg",
  silvermrings19:
    "https://i.pinimg.com/1200x/e0/6c/d0/e06cd039648eecf76580236c3150a30d.jpg",
  silvermrings20:
    "https://i.pinimg.com/1200x/d6/75/a7/d675a76594360d63361962a89f37a842.jpg",
  silvermrings21:
    "https://i.pinimg.com/1200x/ac/09/4f/ac094face97f602c025d79105faffe9d.jpg",
  silvermrings22:
    "https://i.pinimg.com/1200x/77/6b/28/776b28e3dbb7c2fec9dcd9af3910df9a.jpg",
  silvermrings23:
    "https://i.pinimg.com/1200x/e0/b7/4e/e0b74e7caabe15941758df32f3430267.jpg",
  silvermrings24:
    "https://i.pinimg.com/1200x/cc/4e/3f/cc4e3f728dc6713746620fa523c7f3d6.jpg",
  silvermrings25:
    "https://i.pinimg.com/1200x/f2/33/98/f23398a3dc0af623c8138bd76d7ff975.jpg",
  silvermrings26:
    "https://i.pinimg.com/736x/54/cd/1d/54cd1d32f8f9b2e25e5e0038c267b5de.jpg",
  silvermrings27:
    "https://i.pinimg.com/1200x/ab/0e/c2/ab0ec256ea6b4b5f988c204e7650fcd6.jpg",
  silvermrings28:
    "https://i.pinimg.com/1200x/b8/33/79/b833794a034ba057b13a8bd71694a28a.jpg",
  silvermrings29:
    "https://i.pinimg.com/1200x/2d/7d/a5/2d7da5ca7f8b042ca2cb33c607663c4e.jpg",
  silvermrings30:
    "https://i.pinimg.com/1200x/88/97/8a/88978af06c4a3b74e713fff158d10f45.jpg",
  silvermrings31:
    "https://i.pinimg.com/1200x/f8/37/fb/f837fbe340b3200201c6662f68ff8d9d.jpg",
  silvermrings32:
    "https://i.pinimg.com/1200x/19/0a/4d/190a4daaba9c09de7d235ef4e4abc08a.jpg",
  silvermrings33:
    "https://i.pinimg.com/1200x/ea/18/a3/ea18a3bb51da896d69c464710ae97e16.jpg",
  silvermrings34:
    "https://i.pinimg.com/1200x/41/b0/0e/41b00ec4144f7dec21b51e2b9a6b29c9.jpg",
  silvermrings35:
    "https://i.pinimg.com/1200x/68/b7/bd/68b7bdf5f2983a4c9ac5a346e788f22b.jpg",
  silvermrings36:
    "https://i.pinimg.com/1200x/76/0f/38/760f3821cc85430019be2ca6c764dc0b.jpg",
  silvermrings37:
    "https://i.pinimg.com/1200x/47/d3/00/47d300270848a4b7cb9403f033c0a061.jpg",
  silvermrings38:
    "https://i.pinimg.com/1200x/4f/d9/f9/4fd9f9498ed47e6db00fced4482ae3fa.jpg",
  silvermrings39:
    "https://i.pinimg.com/1200x/a5/4c/45/a54c45900e3c28d2d7dc80922372e5b6.jpg",
  silvermrings40:
    "https://i.pinimg.com/1200x/e4/40/12/e44012c2430afd8c822e3df40add1bae.jpg",
  silvermrings41:
    "https://i.pinimg.com/1200x/35/9e/c2/359ec255aae7b0ad22fae558584dd8ee.jpg",
  silvermrings42:
    "https://i.pinimg.com/1200x/03/fc/8e/03fc8e7ee043bd90ad417e50ad3b0d7b.jpg",
  silvermrings43:
    "https://i.pinimg.com/1200x/a1/36/49/a13649efd160c2b53b4feb7974029519.jpg",
  silvermrings44:
    "https://i.pinimg.com/736x/bd/11/f4/bd11f44f326c636921abc23965b8e5d3.jpg",
  silvermrings45:
    "https://i.pinimg.com/1200x/e5/0f/1d/e50f1da319e4f85263600dcd29e18415.jpg",
  silvermrings46:
    "https://i.pinimg.com/736x/62/fa/46/62fa46625541362c80c9bfcb308f7164.jpg",
  silvermrings47:
    "https://i.pinimg.com/736x/23/47/bc/2347bc2ee88326f763af21297c51c54a.jpg",
  silvermrings48:
    "https://i.pinimg.com/1200x/b7/f9/d5/b7f9d5c1d8d5f8889b7f2ad672fea160.jpg",

  goldCoins:
    "https://i.pinimg.com/1200x/32/64/c8/3264c8903cab4285185653821bd48908.jpg",
  goldCoins2:
    "https://i.pinimg.com/736x/3c/46/97/3c4697486abf9982131e7f236041fde5.jpg",
  goldCoins3:
    "https://i.pinimg.com/1200x/14/75/ab/1475ab3b692a881b8af78e50f3a4bf31.jpg",
  goldCoins4:
    "https://i.pinimg.com/736x/2b/0b/27/2b0b27423443abd14dcbc16c627c72f0.jpg",
  goldCoins5:
    "https://i.pinimg.com/736x/38/73/69/387369406ce05bd83e42118424c6563c.jpg",
  goldCoins6:
    "https://i.pinimg.com/1200x/cc/80/4a/cc804aa0eb7c7e57d8f369439457b39b.jpg",
  goldCoins7:
    "https://i.pinimg.com/1200x/9f/44/8e/9f448e488c867271c02f85c04cb8f101.jpg",
  goldCoins8:
    "https://i.pinimg.com/736x/b1/65/8c/b1658c1f73917e045203765f65d77004.jpg",
  goldCoins9:
    "https://i.pinimg.com/1200x/1d/d7/16/1dd71623d2cd33eef8f958feb5420537.jpg",
  goldCoins10:
    "https://i.pinimg.com/736x/42/22/55/422255a318876c89e9af0c934e3aff3f.jpg",
  goldCoins11:
    "https://i.pinimg.com/1200x/d8/47/1d/d8471d2c1c3559856af3e3d19e7bb5d8.jpg",
  goldCoins12:
    "https://i.pinimg.com/736x/17/29/09/1729097ef24732b087baf15235947c7c.jpg",
  goldCoins13:
    "https://i.pinimg.com/1200x/52/f8/5f/52f85fe596423d33c9cce1797f05ddbc.jpg",
  goldCoins14:
    "https://i.pinimg.com/1200x/4b/22/98/4b2298649d72e95dae9d3686f6da9a66.jpg",
  goldCoins15:
    "https://i.pinimg.com/736x/6a/8c/1d/6a8c1d882b0452431fed15419a1efb22.jpg",
  goldCoins16:
    "https://i.pinimg.com/736x/9c/20/aa/9c20aaeb796549b0b4e7265cc697a846.jpg",
  goldCoins17:
    "https://i.pinimg.com/1200x/20/7b/d4/207bd43e676d5d7223e654a000b528b7.jpg",
  goldCoins18:
    "https://i.pinimg.com/736x/35/5f/47/355f47d12075e2636438a7d2878f6eb3.jpg",
  goldCoins19:
    "https://i.pinimg.com/1200x/88/35/37/883537e152e696ba174a2550b4dc05ce.jpg",
  goldCoins20:
    "https://i.pinimg.com/1200x/98/da/45/98da45d455f6828c2a770b6d7ba883a7.jpg",
  goldCoins21:
    "https://i.pinimg.com/1200x/4e/f9/6b/4ef96be6d608e09ec792cacef9f379d5.jpg",
  goldCoins22:
    "https://i.pinimg.com/1200x/9e/64/02/9e6402ac9465fb835eafb7e9998d6036.jpg",
  goldCoins23:
    "https://i.pinimg.com/1200x/29/9b/ac/299bacae072f17cff89961ff5b85a4fb.jpg",
  goldCoins24:
    "https://i.pinimg.com/1200x/43/e3/bd/43e3bd30a8b9d0e57d0d4338a4254ba7.jpg",
  goldCoins25:
    "https://i.pinimg.com/1200x/d3/22/35/d322359a0bea532556464c3cdd9ae2d4.jpg",
  goldCoins26:
    "https://i.pinimg.com/736x/8d/c0/2c/8dc02c7b500bd520f987060cc78e7778.jpg",
  goldCoins27:
    "https://i.pinimg.com/1200x/ab/f1/5a/abf15a0b3b8d326049557107861fe0a0.jpg",
  goldCoins28:
    "https://i.pinimg.com/736x/79/58/4d/79584dab677f35b3eb924a9ba1917204.jpg",
  goldCoins29:
    "https://i.pinimg.com/1200x/d7/26/10/d72610259f4434b88d83b05620d1768d.jpg",
  goldCoins30:
    "https://i.pinimg.com/736x/97/83/5f/97835fcae4860048bb5be7f91a66d88b.jpg",
  goldCoins31:
    "https://i.pinimg.com/1200x/70/86/cc/7086cc43e14fde2a2b57c05ac2dc1e97.jpg",
  goldCoins32:
    "https://i.pinimg.com/1200x/b2/a4/20/b2a420d6261ad2398b15014d38435f50.jpg",
  goldCoins33:
    "https://i.pinimg.com/1200x/f3/b8/ea/f3b8eae14079eaf8bd449507cd9de57c.jpg",
  goldCoins34:
    "https://i.pinimg.com/1200x/b3/d8/81/b3d881cb16bfc6340ca00fc0c369fe09.jpg",
  goldCoins35:
    "https://i.pinimg.com/1200x/e7/47/39/e74739d120bfb77014cbba16fea29505.jpg",
  goldCoins36:
    "https://i.pinimg.com/1200x/be/91/89/be9189a3b9546d5cb390d3fecc562dfc.jpg",
  goldCoins37:
    "https://i.pinimg.com/1200x/5f/bf/10/5fbf10418b9b50194864e3144bae93c5.jpg",
  goldCoins38:
    "https://i.pinimg.com/1200x/fa/4d/a4/fa4da403f95e8552cc88818e3e1205a3.jpg",
  goldCoins39:
    "https://i.pinimg.com/736x/ec/04/0a/ec040ac1e7042e8f2e556f95f72c89c3.jpg",
  goldCoins40:
    "https://i.pinimg.com/1200x/e1/70/94/e17094e1dc3e49ea12d84a442a246565.jpg",
  goldCoins41:
    "https://i.pinimg.com/1200x/0d/22/57/0d2257431f84aea6cf42d150adc601ff.jpg",
  goldCoins42:
    "https://i.pinimg.com/1200x/c5/30/25/c530259f7f401bc810bc03d45e82dc74.jpg",
  goldCoins43:
    "https://i.pinimg.com/1200x/ad/21/bb/ad21bb15d688cfdc4cfa3ed1021d131e.jpg",
  goldCoins44:
    "https://i.pinimg.com/1200x/a8/52/7e/a8527eca3d2b148d61f3ee8f505170d3.jpg",
  goldCoins45:
    "https://i.pinimg.com/1200x/fa/01/8d/fa018d723d1a7d90de8f42a028b6f600.jpg",
  goldCoins46:
    "https://i.pinimg.com/1200x/f9/11/71/f91171838846043196df76ac22d4fcc2.jpg",
  goldCoins47:
    "https://i.pinimg.com/1200x/4f/36/90/4f36902e60400cb0d47eca99822ba0c2.jpg",
  goldCoins48:
    "https://i.pinimg.com/1200x/1e/9c/99/1e9c995b9306fe4d15d96aa7d6e80afb.jpg",

  goldKi:
    "https://i.pinimg.com/1200x/1b/69/f7/1b69f77da4ae99ddad44ece690df142f.jpg",
  goldKi2:
    "https://i.pinimg.com/1200x/73/77/94/7377947a6e3aa8759bebb4093afa1603.jpg",
  goldKi3:
    "https://i.pinimg.com/1200x/28/2b/0f/282b0fd8aad7bb98e8d745c0cb87b756.jpg",
  goldkbr:
    "https://i.pinimg.com/1200x/03/e4/9d/03e49d2366ef1a4b4db62aeace98b7c2.jpg",
  goldkbr2:
    "https://i.pinimg.com/1200x/ff/5b/e7/ff5be7a82fbc7f7816d9d75bad9a42d9.jpg",
  goldkbr3:
    "https://i.pinimg.com/1200x/83/53/60/835360fae83e6ec43ff882869414430f.jpg",
  goldkch:
    "https://i.pinimg.com/1200x/a9/04/0a/a9040a1ac95dd9173c3254f7f136247f.jpg",
  goldkch2:
    "https://i.pinimg.com/1200x/01/ba/bb/01babbd4c9b69dbc15365ee6907a0fc0.jpg",
  goldkch3:
    "https://i.pinimg.com/736x/6b/e4/05/6be40596d29754fec52b1188f9ebad6a.jpg",
  goldker:
    "https://i.pinimg.com/736x/b7/e9/1e/b7e91e951196696fd56546b24fb425b9.jpg",
  goldker2:
    "https://i.pinimg.com/736x/c0/a5/3d/c0a53d9e71184eb0efd3331e2800a5a8.jpg",
  goldker3:
    "https://i.pinimg.com/736x/6a/c0/4c/6ac04c52e8780acb45fa46c02ea5cbbf.jpg",
  // goldkan,goldknp,goldkpe,goldkhp,goldkto,goldkcu,goldkhc
  goldkan:
    "https://i.pinimg.com/736x/2c/43/c1/2c43c1cd4d7d71cef39d31588aa374df.jpg",
  goldknp:
    "https://i.pinimg.com/1200x/e0/0e/b0/e00eb0ce5d5f0d30dabffd84a690846d.jpg",
  goldkpe:
    "https://i.pinimg.com/736x/46/2b/31/462b31c9bd816371c916d423788003cf.jpg",
  goldkhp:
    "https://i.pinimg.com/1200x/da/f7/fa/daf7fa1d5f5bf9a58e650a233866286c.jpg",
  goldkto:
    "https://i.pinimg.com/1200x/48/75/76/4875760b23ea17633818d2e77313d8eb.jpg",
  goldkhc:
    "https://i.pinimg.com/1200x/d1/bc/cc/d1bccc14e1deaed12f7121b4b78142d1.jpg",
  goldkcu:
    "https://i.pinimg.com/1200x/ad/95/6e/ad956ed5df6bcbc828d585b11496a684.jpg",
  goldkchm:
    "https://i.pinimg.com/1200x/2f/03/d5/2f03d53295a2f8f5d58b2656bcc54549.jpg",


  goldwtn:
    "https://i.pinimg.com/736x/bf/99/12/bf99123de342a2af42066b3436585939.jpg",
  goldwtn2:
    "https://i.pinimg.com/736x/fc/09/6d/fc096d1313dae8ee8d6bc74f7eaf23ef.jpg",
  goldwtn3:
    "https://i.pinimg.com/736x/9d/4e/df/9d4edfaeca89ade0c53e5c16d584af31.jpg",
  goldwtn4:
    "https://i.pinimg.com/736x/54/d1/0a/54d10a445be2990048c5556417a42fa7.jpg",
  goldwtn5:
    "https://i.pinimg.com/736x/11/6f/36/116f360a9fbcf1e2067219f6db0d7fe0.jpg",
  goldwtn6:
    "https://i.pinimg.com/736x/e0/78/83/e078838e98c27f334a466d457a5bac83.jpg",
  goldwtn7:
    "https://i.pinimg.com/control1/1200x/b8/6c/dc/b86cdcbc7fc891b86c7b926a9a28c6a4.jpg",
  goldwtn8:
    "https://i.pinimg.com/1200x/6c/8f/d3/6c8fd34aa6e7926460b2609abc815516.jpg",
  goldwtn9:
    "https://i.pinimg.com/1200x/8e/ed/7f/8eed7f9b5feff012e23d5d10282a930b.jpg",
  goldwtn10:
    "https://i.pinimg.com/736x/03/ca/84/03ca84ee598b2b67010fcdf8d9f03f39.jpg",
  goldwtn11:
    "https://i.pinimg.com/control1/1200x/2a/3a/de/2a3ade462629739548d0673c93a05ef4.jpg",
  goldwtn12:
    "https://i.pinimg.com/1200x/8e/22/81/8e2281b03f52bf7e90a49c45a97afcd3.jpg",
  goldwtn13:
    "https://i.pinimg.com/1200x/ab/1e/b2/ab1eb2ef9531ff877cba47405ace4f3a.jpg",
  goldwtn14:
    "https://i.pinimg.com/736x/53/1b/ec/531becad421cdc6bc7e5645d9be0d4ef.jpg",
  goldwtn15:
    "https://i.pinimg.com/1200x/3e/b6/10/3eb610409ac4e1c09b1888de737fa07e.jpg",
  goldwtn16:
    "https://i.pinimg.com/1200x/f9/43/f9/f943f960b5c84fae427099de8e18d465.jpg",

  goldbride:
    "https://i.pinimg.com/1200x/9f/a7/c3/9fa7c36bb7614508661f294f9912f064.jpg",
  goldbride2:
    "https://i.pinimg.com/1200x/08/e6/3b/08e63b415eefa5bec5bfeb335eb5a999.jpg",
  goldbride3:
    "https://i.pinimg.com/1200x/ff/59/77/ff5977c01abf6a62dffda6d2159f214d.jpg",
  goldchoker:
    "https://i.pinimg.com/736x/79/2e/f6/792ef645e1894c2cb98676e5aed731ad.jpg",
  goldchoker2:
    "https://i.pinimg.com/736x/50/d9/bc/50d9bc289d17279e6bb6f65f73213f15.jpg",
  goldchoker3:
    "https://i.pinimg.com/736x/26/87/cf/2687cf5915d10f0e96a9ba07b47bc1f7.jpg",
  goldHaar:
    "https://i.pinimg.com/1200x/02/3c/42/023c425c0301126a2bf91da1844a8685.jpg",
  goldHaar2:
    "https://i.pinimg.com/736x/6c/bf/91/6cbf91b3b6afaabff80566ebf2ba913c.jpg",
  goldHaar3:
    "https://i.pinimg.com/1200x/d7/6d/75/d76d754c2642c0482dcfed859a208e20.jpg",
  goldNath:
    "https://i.pinimg.com/1200x/cd/12/d1/cd12d1fb51000116dbf1265412eab5bf.jpg",
  goldNath2:
    "https://i.pinimg.com/1200x/29/01/3a/29013a6452079627eccb69452cb87297.jpg",
  goldNath3:
    "https://i.pinimg.com/736x/d3/67/a8/d367a87c184af4198f6ffb476fb6b892.jpg",
  goldbangle:
    "https://i.pinimg.com/736x/d8/99/3a/d8993ab67fe9ccb514b88bfc59c5f587.jpg",
  goldbangle2:
    "https://i.pinimg.com/736x/8c/a5/62/8ca562e4a6deca52f289ce36d61002b0.jpg",
  goldbangle3:
    "https://i.pinimg.com/736x/47/1a/b0/471ab005d55c098b881c6d6d17934734.jpg",
  goldpayal:
    "https://i.pinimg.com/736x/e8/9a/a5/e89aa56afa5aa39c4c4c0b5e86aeb068.jpg",
  goldmangalsutra:
    "https://i.pinimg.com/1200x/41/b7/f5/41b7f5fb1d67d51c138541056d886ff8.jpg",
  goldmaangtikka:
    "https://i.pinimg.com/1200x/0f/4e/35/0f4e352f0e43a823e2bfbd9e490bc112.jpg",
  goldbridale:
    "https://i.pinimg.com/1200x/f7/4f/44/f74f44be294900bbd392742aca65aa2f.jpg",
  goldbridalr:
    "https://i.pinimg.com/1200x/e6/ac/64/e6ac6401655093f1bde222114bdedb5b.jpg",
  goldbridalh:
    "https://i.pinimg.com/1200x/67/7a/f4/677af4d88e77df3ebde44757bde870d8.jpg",
  goldbridalw:
    "https://i.pinimg.com/1200x/97/70/c8/9770c8889957984c0faf87c1f2b02160.jpg",
  

  goldtops:
    "https://i.pinimg.com/1200x/2e/c9/77/2ec977371f54ff31a21379a853b5e67b.jpg",
  goldtops2:
    "https://i.pinimg.com/736x/a7/cb/b1/a7cbb1047bf3f9cccac425f4095cfb8f.jpg",
  goldtops3:
    "https://i.pinimg.com/736x/5b/3b/5b/5b3b5b06e234e4422602ea936e311975.jpg",
  goldtops4:
    "https://i.pinimg.com/736x/42/5f/b6/425fb69a6f17f8321351f062ab21a8e2.jpg",
  goldtops5:
    "https://i.pinimg.com/736x/8e/97/ac/8e97acf09973a37b239755f612a9794e.jpg",
  goldtops6:
    "https://i.pinimg.com/1200x/c9/89/52/c98952e57802ed72e9f86e51191e67d8.jpg",
  goldtops7:
    "https://i.pinimg.com/736x/ef/d8/50/efd850f1368d1fc895d2dbb3df4d6fe7.jpg",
  goldtops8:
    "https://i.pinimg.com/736x/ef/d8/50/efd850f1368d1fc895d2dbb3df4d6fe7.jpg",
  goldtops9:
    "https://i.pinimg.com/1200x/37/8a/f8/378af8bbdfd036755f84cf689baed56f.jpg",
  goldtops10:
    "https://i.pinimg.com/1200x/9b/76/cd/9b76cd4bd50f4f203411767eb507b121.jpg",
  goldtops11:
    "https://i.pinimg.com/736x/f2/5b/cd/f25bcd5d114b621fca19a275bcd64911.jpg",
  goldtops12:
    "https://i.pinimg.com/1200x/f2/af/83/f2af836c6650a6ab771803ae3a7b4d03.jpg",
  goldtops13:
    "https://i.pinimg.com/736x/af/db/63/afdb631b0eaba0346c6c024a030e6a70.jpg",
  goldtops14:
    "https://i.pinimg.com/1200x/cc/e0/d5/cce0d5b4bd5fa6aa65d2d7778919f603.jpg",
  goldtops15:
    "https://i.pinimg.com/control1/1200x/b9/e9/25/b9e9254ef2197faba42d13a7bf9cd392.jpg",
  goldtops16:
    "https://i.pinimg.com/1200x/7b/7d/57/7b7d573eadb18e5dae3255ce043216a2.jpg",
  goldtops17:
    "https://i.pinimg.com/1200x/e9/74/0b/e9740b02a97232ff23e556e25e12f0f5.jpg",
  goldtops18:
    "https://i.pinimg.com/736x/b9/75/40/b97540b3f0e85e9f6b1c97f4f8734855.jpg",
  goldtops19:
    "https://i.pinimg.com/1200x/94/e2/a2/94e2a209f9aeb77f17ada305e39be59d.jpg",
  goldtops20:
    "https://i.pinimg.com/1200x/48/1e/74/481e7411818155d7d635b1af3f88efd7.jpg",
  goldtops21:
    "https://i.pinimg.com/736x/fb/73/cd/fb73cd0164d4d42674e40d6fb324408a.jpg",
  goldtops22:
    "https://i.pinimg.com/1200x/83/91/f3/8391f3ef4ac1d8d140ab0f41aa4722ce.jpg",
  goldtops23:
    "https://i.pinimg.com/1200x/a5/86/cc/a586cc911d707c99ef3bf1a8347e273c.jpg",
  goldtops24:
    "https://i.pinimg.com/736x/d0/ba/13/d0ba1355e731b80b01e740badd608489.jpg",
  goldtops25:
    "https://i.pinimg.com/736x/d6/e3/c2/d6e3c2c77c3368712eabd491a24f2d85.jpg",
  goldtops26:
    "https://i.pinimg.com/736x/73/f3/46/73f34646846c9aa0fc2b2635c0924112.jpg",
  goldtops27:
    "https://i.pinimg.com/1200x/55/e7/d3/55e7d3185948875bf2b81a42c39abb82.jpg",
  goldtops28:
    "https://i.pinimg.com/1200x/6f/e8/15/6fe815a28e05c17717c2b19ebd9215f9.jpg",
  goldtops29:
    "https://i.pinimg.com/control1/1200x/95/a1/0c/95a10cc05c8bc85ea3f5918ab813ccec.jpg",
  goldtops30:
    "https://i.pinimg.com/736x/87/f7/1c/87f71c6780566e2c8868b77bfe520781.jpg",
  goldtops31:
    "https://i.pinimg.com/1200x/21/ed/ae/21edae06b14d542d1c47ac1462053110.jpg",
  goldtops32:
    "https://i.pinimg.com/1200x/82/45/1a/82451a3302f75774c01905c11b96465e.jpg",
  goldtops33:
    "https://i.pinimg.com/1200x/71/96/52/719652f5155df3c0bc66dcb677f869a2.jpg",
  goldtops34:
    "https://i.pinimg.com/1200x/82/37/db/8237db664283531cea855cb84c782c96.jpg",
  goldtops35:
    "https://i.pinimg.com/1200x/b4/f0/11/b4f01184fbb645ba3e799739960b9411.jpg",
  goldtops36:
    "https://i.pinimg.com/1200x/c8/6a/05/c86a05daa67e5dde78e4028f56ce3cf4.jpg",
  goldtops37:
    "https://i.pinimg.com/736x/7a/c0/0c/7ac00c570c4e955aeb6c4d18790485e7.jpg",
  goldtops38:
    "https://i.pinimg.com/736x/10/05/06/100506f00a782e4000db6437aeaef07f.jpg",
  goldtops39:
    "https://i.pinimg.com/1200x/75/fa/89/75fa89913214ea7d3132716ecc80408f.jpg",
  goldtops40:
    "https://i.pinimg.com/736x/36/ac/a2/36aca23efbf189a36343e81e1946038c.jpg",
  goldtops41:
    "https://i.pinimg.com/736x/d0/e7/9e/d0e79e31b1ec41aa5015378996416141.jpg",
  goldtops42:
    "https://i.pinimg.com/1200x/b9/d6/c4/b9d6c41f50740760a9f3741efb848a73.jpg",
  goldtops43:
    "https://i.pinimg.com/control1/1200x/e2/cb/3e/e2cb3ef09369d0d8d935656bcb12d848.jpg",
  goldtops44:
    "https://i.pinimg.com/1200x/45/e1/54/45e154ffe4b648f581d501da25c0c6bf.jpg",
  goldtops45:
    "https://i.pinimg.com/736x/95/1b/3b/951b3b194f245ca2d05efef7e67a16f0.jpg",
  goldtops46:
    "https://i.pinimg.com/1200x/46/44/10/464410cae2b585a0557e664895d805b8.jpg",
  goldtops47:
    "https://i.pinimg.com/736x/61/0a/b1/610ab1284fb0d19620c7debf870ef887.jpg",
  goldtops48:
    "https://i.pinimg.com/control1/1200x/76/b4/fd/76b4fd596bc3ea469e4f7c976bae073b.jpg",

  goldJhumki:
    "https://i.pinimg.com/736x/29/c7/c6/29c7c67c484cc6a33ff8222a79bde655.jpg",
  goldJhumki2:
    "https://i.pinimg.com/736x/12/5b/7d/125b7d79f3fee48576a72826058f476d.jpg",
  goldJhumki3:
    "https://i.pinimg.com/1200x/0b/4c/8f/0b4c8fcb06076954c4cd2b68fce8a45f.jpg",
  goldJhumki4:
    "https://i.pinimg.com/736x/c9/93/5f/c9935fa4411b6d84be38e3369f7f4a2a.jpg",
  goldJhumki5:
    "https://i.pinimg.com/736x/63/c9/72/63c9724074726825a6c630013480f684.jpg",
  goldJhumki6:
    "https://i.pinimg.com/736x/53/3b/21/533b21eb74c35d8db157ef7da8cca3e8.jpg",
  goldJhumki7:
    "https://i.pinimg.com/control1/1200x/a1/97/b3/a197b3c10ce5c23ee2fd65ab37864536.jpg",
  goldJhumki8:
    "https://i.pinimg.com/736x/9c/4a/42/9c4a423089bd5df3d90ff2b5c90b2022.jpg",
  goldJhumki9:
    "https://i.pinimg.com/control1/1200x/8d/3d/06/8d3d0612677f48e83c40f0c8ca67a6cd.jpg",
  goldJhumki10:
    "https://i.pinimg.com/736x/a1/e2/c5/a1e2c54170bc8650a402949411efc607.jpg",
  goldJhumki11:
    "https://i.pinimg.com/736x/01/0e/70/010e704f8d24727b4cf26d9ba237f3b5.jpg",
  goldJhumki12:
    "https://i.pinimg.com/1200x/af/1a/d8/af1ad876974e2421c4dde31ec3cdc32c.jpg",
  goldJhumki13:
    "https://i.pinimg.com/736x/fa/95/64/fa956485bfd28acaf23408900f9309c4.jpg",
  goldJhumki14:
    "https://i.pinimg.com/736x/f5/89/b0/f589b08717d15beb67c72f11250de779.jpg",
  goldJhumki15:
    "https://i.pinimg.com/control1/736x/87/b5/12/87b512d79ca6fdc8d5ede3f8340fc76b.jpg",
  goldJhumki16:
    "https://i.pinimg.com/736x/a9/cd/c8/a9cdc81b17044d7231db094efede9f40.jpg", //
  goldJhumki17: "",
  goldJhumki18: "",
  goldJhumki19:
    "https://i.pinimg.com/1200x/0b/4c/8f/0b4c8fcb06076954c4cd2b68fce8a45f.jpg", //
  goldJhumki20: "",
  goldJhumki21: "",
  goldJhumki22:
    "https://i.pinimg.com/1200x/c9/dd/a8/c9dda8a49e8fbad797a6fdd222bb8f84.jpg", //
  goldJhumki23: "",
  goldJhumki24: "",
  goldJhumki25:
    "https://i.pinimg.com/control1/736x/8b/cc/bd/8bccbdebc93012f60439328c67dda925.jpg", //
  goldJhumki26: "",
  goldJhumki27: "",
  goldJhumki28:
    "https://i.pinimg.com/736x/17/ca/9c/17ca9ca7fd3d53ef29bf36974566c647.jpg", //
  goldJhumki29: "",
  goldJhumki30: "",
  goldJhumki31:
    "https://i.pinimg.com/736x/93/a7/45/93a745ed6e9b9b09c41f6a870d83b984.jpg", //
  goldJhumki32: "",
  goldJhumki33: "",
  goldJhumki34:
    "https://i.pinimg.com/1200x/01/98/81/0198818cb459bae0556319cfdac573d4.jpg", //
  goldJhumki35: "",
  goldJhumki36: "",
  goldJhumki37:
    "https://i.pinimg.com/736x/fe/8b/74/fe8b746f68fbf198cd88f308ec97eebf.jpg", //
  goldJhumki38: "",
  goldJhumki39: "",
  goldJhumki40:
    "https://i.pinimg.com/736x/1b/99/67/1b996714fe116d84daa27e9d988d18f9.jpg", //
  goldJhumki41: "",
  goldJhumki42: "",
  goldJhumki43:
    "https://i.pinimg.com/736x/17/90/52/1790529183477a7226e6a1ae00f393bb.jpg", //
  goldJhumki44: "",
  goldJhumki45: "",
  goldJhumki46:
    "https://i.pinimg.com/736x/42/63/fa/4263fa2fe54e53ddf5d50abf761f2fbd.jpg", //
  goldJhumki47: "",
  goldJhumki48: "",

  goldkundal:
    "https://i.pinimg.com/1200x/f1/dc/f9/f1dcf9f99b3332eda9cdd31f83c9c59d.jpg",
  goldkundal2:
    "https://i.pinimg.com/736x/ce/9d/68/ce9d685059c5f12676a1f7393cc6fb03.jpg",
  goldkundal3:
    "https://i.pinimg.com/736x/03/02/82/0302823a3ded67c9d44f24635d677839.jpg",
  goldkundal4:
    "https://i.pinimg.com/736x/08/5c/2c/085c2c1917cd04ed4efe4598e4376617.jpg",
  goldkundal5:
    "https://i.pinimg.com/736x/7e/17/c9/7e17c9e9fd46e13d8466cd8e04a722c7.jpg",
  goldkundal6:
    "https://i.pinimg.com/736x/3b/b5/77/3bb577406a9bd3a8d6124b527cd2ea2f.jpg",
  goldkundal7:
    "https://i.pinimg.com/control1/736x/45/5f/b6/455fb695d5868cc8678b07fba86dfd9f.jpg",
  goldkundal8:
    "https://i.pinimg.com/736x/7e/ef/ba/7eefba2a099518a3137440a3715908ac.jpg",
  goldkundal9:
    "https://i.pinimg.com/1200x/0b/02/c5/0b02c5ee2b4760fb7a116ca747585f5b.jpg",
  goldkundal10:
    "https://i.pinimg.com/736x/91/2b/bf/912bbf188e3147cc122ccabb50c43cbd.jpg",
  goldkundal11:
    "https://i.pinimg.com/1200x/11/12/32/111232a931461d19213c2d0d27be0413.jpg",
  goldkundal12:
    "https://i.pinimg.com/736x/53/8e/27/538e2702e5135875b5d206813204bb6c.jpg",
  goldkundal13:
    "https://i.pinimg.com/736x/7e/17/c9/7e17c9e9fd46e13d8466cd8e04a722c7.jpg",
  goldkundal14:
    "https://i.pinimg.com/736x/5a/0f/b5/5a0fb5f418ca8e9e8db2a7e971cce140.jpg",
  goldkundal15:
    "https://i.pinimg.com/736x/24/7a/a4/247aa46d6732171e0f2c3c353e222d6d.jpg",
  goldkundal16:
    "https://i.pinimg.com/736x/21/e1/d3/21e1d37deee141faa6d767f21c4c48df.jpg",
  goldkundal17:
    "https://i.pinimg.com/control1/1200x/6c/1f/a8/6c1fa89579e4bedbed683982a06e1e12.jpg",
  goldkundal18:
    "https://i.pinimg.com/control1/736x/f0/2c/d4/f02cd42d50903dc17c0bb5c514d199d4.jpg",
  goldkundal19:
    "https://i.pinimg.com/736x/f5/0c/c2/f50cc22b265dfadfc9c13289b02a3d92.jpg",
  goldkundal20:
    "https://i.pinimg.com/736x/e6/b2/38/e6b238962f05fd298e5089679a0e3af2.jpg",
  goldkundal21:
    "https://i.pinimg.com/736x/8f/ae/02/8fae0268e3beb07ca7e2ff1300659d0d.jpg",
  goldkundal22:
    "https://i.pinimg.com/1200x/9a/e2/57/9ae2576f8adf8255bbb642adf3f88722.jpg",
  goldkundal23:
    "https://i.pinimg.com/736x/a3/72/a4/a372a495f7b9533b014ee43737535dd6.jpg",
  goldkundal24:
    "https://i.pinimg.com/736x/03/e0/01/03e001922b4e44821acbe66e3472ba55.jpg",
  goldkundal25:
    "https://i.pinimg.com/736x/cd/c7/d9/cdc7d9c909e4fd68c62b5646a9a2f1a0.jpg",
  goldkundal26:
    "https://i.pinimg.com/1200x/69/a0/91/69a0912807c269badb0d27ea6fc6994e.jpg",
  goldkundal27:
    "https://i.pinimg.com/736x/9e/c9/28/9ec928d7b7ee0219177c11a309b3503c.jpg",
  goldkundal28:
    "https://i.pinimg.com/736x/9b/1b/68/9b1b6874235cc357222cd457caa561c4.jpg",
  goldkundal29:
    "https://i.pinimg.com/736x/a7/2e/0e/a72e0e3fef04fd9ae96c09e3c1393345.jpg",
  goldkundal30:
    "https://i.pinimg.com/736x/b7/69/4a/b7694a041832ac0edc81810a044802b7.jpg",
  goldkundal31:
    "https://i.pinimg.com/736x/29/37/4a/29374a7a33b2e8030d01726601b076ac.jpg",
  goldkundal32:
    "https://i.pinimg.com/736x/91/6e/79/916e79b876ec2b1b577238602d01b00e.jpg",
  goldkundal33:
    "https://i.pinimg.com/736x/55/20/53/5520530dcec4b5f852dd7ee8046da5f3.jpg",
  goldkundal34:
    "https://i.pinimg.com/1200x/2b/11/bf/2b11bf589554f29d8759c75042570218.jpg",
  goldkundal35:
    "https://i.pinimg.com/1200x/62/2b/3a/622b3a4d00cb2fd1e879a696f938d7c6.jpg",
  goldkundal36:
    "https://i.pinimg.com/1200x/c9/a6/bb/c9a6bb495c9fe3e176f3f68915c6c891.jpg",
  goldkundal37:
    "https://i.pinimg.com/736x/2b/7a/67/2b7a67edda623eae01044ae4ad4f9e3b.jpg",
  goldkundal38:
    "https://i.pinimg.com/736x/49/98/05/4998058d803d0aaa61e63bf4aa9da9fd.jpg",
  goldkundal39:
    "https://i.pinimg.com/1200x/50/ae/31/50ae31504af1b7173e0874d429c6b049.jpg",
  goldkundal40:
    "https://i.pinimg.com/736x/64/39/54/6439544947c027e4155c26861453afe9.jpg",
  goldkundal41:
    "https://i.pinimg.com/736x/f8/e6/ba/f8e6bac35526ba9acf9de669dae42a25.jpg",
  goldkundal42:
    "https://i.pinimg.com/1200x/13/8b/2e/138b2e2cd28ff58e35ad9ea59b285031.jpg",
  goldkundal43:
    "https://i.pinimg.com/736x/e2/86/7a/e2867a770a42dfa75ab021ee29f54a2e.jpg",
  goldkundal44:
    "https://i.pinimg.com/736x/24/e2/b6/24e2b6529ebd361a65731592d95f4bf2.jpg",
  goldkundal45:
    "https://i.pinimg.com/736x/78/38/f8/7838f896ceabd9ce2b79896de741105c.jpg",
  goldkundal46:
    "https://i.pinimg.com/736x/91/d7/8a/91d78a537852d38c4e2cd03b365d30e4.jpg",
  goldkundal47:
    "https://i.pinimg.com/1200x/75/0b/f0/750bf054b17324382a73192551c379ff.jpg",
  goldkundal48:
    "https://i.pinimg.com/736x/8f/58/d5/8f58d5ef7becc548421eedd0ee3c4833.jpg",

  goldnosepin:
    "https://i.pinimg.com/1200x/7b/ab/ac/7babac888d3438e134ef3a893b34e2ef.jpg",
  goldnosepin2:
    "https://i.pinimg.com/1200x/8e/aa/a1/8eaaa1395bf85dca665953fde67a76ef.jpg",
  goldnosepin3:
    "https://i.pinimg.com/1200x/16/0d/57/160d57678a509bca8a4de9cc2a32cd05.jpg",
  goldnosepin4:
    "https://i.pinimg.com/736x/34/dc/e9/34dce9730e0de6e46ee1dde4c9a87a23.jpg",
  goldnosepin5:
    "https://i.pinimg.com/736x/88/a9/3d/88a93d4c9c66bdf4d1abf782e4ca73a5.jpg",
  goldnosepin6:
    "https://i.pinimg.com/736x/70/13/df/7013df530736256c0a80472aebafeab1.jpg",
  goldnosepin7:
    "https://i.pinimg.com/1200x/23/b1/30/23b130387b67d3e1d52a9055db2af4aa.jpg",
  goldnosepin8:
    "https://i.pinimg.com/1200x/7a/c9/10/7ac91076e66f63ff654731d7bf87e1ba.jpg",
  goldnosepin9:
    "https://i.pinimg.com/736x/51/65/6c/51656c568ead8ed984074082b2cdb886.jpg",
  goldnosepin10:
    "https://i.pinimg.com/1200x/d3/da/76/d3da7663f4e9ca6e794fb15bcb93f56f.jpg",
  goldnosepin11:
    "https://i.pinimg.com/1200x/5b/91/34/5b913420956f11a25ed369e17001981f.jpg",
  goldnosepin12:
    "https://i.pinimg.com/736x/c8/b9/19/c8b919528f6185cac948154d178267fe.jpg",
  goldnosepin13:
    "https://i.pinimg.com/736x/1e/d1/37/1ed137dc03e0bab1b73aa82f4cf46577.jpg",
  goldnosepin14:
    "https://i.pinimg.com/1200x/78/1a/2a/781a2a404e11ebc8082ea5cf16f8b52f.jpg",
  goldnosepin15:
    "https://i.pinimg.com/1200x/1d/c8/4e/1dc84eba7eda25170619db9b19650220.jpg",
  goldnosepin16:
    "https://i.pinimg.com/1200x/71/d3/5e/71d35e6dfaa08cd990adf08dcda9357d.jpg",
  goldnosepin17:
    "https://i.pinimg.com/1200x/4b/1d/02/4b1d02ed709591291b9ffcb3db668a5f.jpg",
  goldnosepin18:
    "https://i.pinimg.com/736x/a8/d9/20/a8d92049caca8c2e3447c7e11d44fbd2.jpg",
  goldnosepin19:
    "https://i.pinimg.com/736x/3c/57/51/3c5751b5e482d52fc55893d97fcca45f.jpg",
  goldnosepin20:
    "https://i.pinimg.com/736x/22/59/b4/2259b4b5b9e352cb0a0cd675ebc4f58c.jpg",
  goldnosepin21:
    "https://i.pinimg.com/1200x/f1/eb/b8/f1ebb85c2c883236928cf297ceac7d7a.jpg",
  goldnosepin22:
    "https://i.pinimg.com/1200x/6c/f5/8d/6cf58dc0b3a106173840bc8a8c7ad827.jpg",
  goldnosepin23:
    "https://i.pinimg.com/736x/e4/39/42/e43942684121cfbbade64151a0fd0031.jpg",
  goldnosepin24:
    "https://i.pinimg.com/1200x/b8/4d/41/b84d4167a4fcbbf97e25014bfd44845f.jpg",
  goldnosepin25:
    "https://i.pinimg.com/736x/2d/4d/c8/2d4dc83daac6e4eb00efb8e401eb468a.jpg",
  goldnosepin26:
    "https://i.pinimg.com/736x/74/e5/cb/74e5cb9315e62e9ef032a18ba8745d62.jpg",
  goldnosepin27:
    "https://i.pinimg.com/736x/31/ee/ac/31eeac5b2dd21fc6a4c33cc7e81b1d32.jpg",
  goldnosepin28:
    "https://i.pinimg.com/736x/d0/f7/ff/d0f7ff7f970d0928d067ea4187c04063.jpg",
  goldnosepin29:
    "https://i.pinimg.com/736x/41/34/72/413472b3015e9618a263d7b8ae54c45f.jpg",
  goldnosepin30:
    "https://i.pinimg.com/1200x/05/54/25/055425f8d6e37e0ebad87e272f7d1446.jpg",
  goldnosepin31:
    "https://i.pinimg.com/736x/ed/f1/c0/edf1c01bfec27b827d7c72acbca8ccea.jpg",
  goldnosepin32:
    "https://i.pinimg.com/1200x/7f/fe/c4/7ffec435f8c4ba4996fe1a68f86f8453.jpg",
  goldnosepin33:
    "https://i.pinimg.com/736x/0d/34/f6/0d34f6207306735cb2392b49b6a8f97f.jpg",
  goldnosepin34:
    "https://i.pinimg.com/736x/af/de/e2/afdee2e75d2af236de68fa0260a11f79.jpg",
  goldnosepin35:
    "https://i.pinimg.com/736x/37/42/0b/37420ba12894f1fc5545ca496d0ada05.jpg",
  goldnosepin36:
    "https://i.pinimg.com/1200x/1d/fa/fd/1dfafd8de2cadb9815f0b29b24205d02.jpg",
  goldnosepin37:
    "https://i.pinimg.com/1200x/32/7a/01/327a01adfc42cc2392e95a8308a6e6ba.jpg",
  goldnosepin38:
    "https://i.pinimg.com/1200x/3f/45/1e/3f451ee4ca9f53a9a78eeabd17d56eb4.jpg",
  goldnosepin39:
    "https://i.pinimg.com/736x/be/d6/ca/bed6ca1d94b7cc31388bd8fe462250ff.jpg",
  goldnosepin40:
    "https://i.pinimg.com/736x/31/24/8b/31248ba8c3b9f1c7bc4383ea3a17b222.jpg",
  goldnosepin41:
    "https://i.pinimg.com/736x/e4/0b/49/e40b49fedb94b1e2257578871db56526.jpg",
  goldnosepin42:
    "https://i.pinimg.com/736x/32/51/ea/3251eadf094b597ea5d2f8bb7c14d499.jpg",
  goldnosepin43:
    "https://i.pinimg.com/736x/07/75/70/077570ddfc63c79584c8086c44ee77d7.jpg",
  goldnosepin44:
    "https://i.pinimg.com/736x/20/10/61/2010619bb48610faae4bcb1cf941cd83.jpg",
  goldnosepin45:
    "https://i.pinimg.com/1200x/ff/c1/f5/ffc1f52c5a65d866addf494255714b6e.jpg",
  goldnosepin46:
    "https://i.pinimg.com/736x/ed/33/0c/ed330c1a1aa85b3a1539cb8083bcdf54.jpg",
  goldnosepin47:
    "https://i.pinimg.com/736x/53/b2/1a/53b21a7eef58a6bd588ba1aa24a51e1b.jpg",
  goldnosepin48:
    "https://i.pinimg.com/736x/d5/9b/53/d59b53b1bcbdda75607671a559b3aa79.jpg",

  nosering:
    "https://i.pinimg.com/1200x/f8/b9/4a/f8b94a88240f4255ea7604d87a1c0224.jpg",
  nosering2:
    "https://i.pinimg.com/1200x/16/e8/06/16e80656e9864dfb50b481396c01540a.jpg",
  nosering3:
    "https://i.pinimg.com/1200x/f7/09/61/f7096105707f966fccf288db593afccc.jpg",
  nosering4:
    "https://i.pinimg.com/1200x/76/78/d8/7678d8ca5a4d5ad407592205c8bd1709.jpg",
  nosering5:
    "https://i.pinimg.com/736x/73/58/fc/7358fced0489f8b1b9bfc800dd211178.jpg",
  nosering6:
    "https://i.pinimg.com/1200x/0a/e6/c7/0ae6c7efd223329f3ec82b52362e3671.jpg",
  nosering7:
    "https://i.pinimg.com/736x/88/43/c7/8843c7a83a7e5c6d948dc6e6772048b7.jpg",
  nosering8:
    "https://i.pinimg.com/1200x/71/45/b5/7145b5765bfda03bdff3e17bf5006874.jpg",
  nosering9:
    "https://i.pinimg.com/1200x/72/e2/9f/72e29f0bbfa2a5ffe32f7ef76757c672.jpg",
  nosering10:
    "https://i.pinimg.com/1200x/7b/ab/ac/7babac888d3438e134ef3a893b34e2ef.jpg",
  nosering11:
    "https://i.pinimg.com/736x/26/0e/cf/260ecf2b580560744f891681993027db.jpg",
  nosering12:
    "https://i.pinimg.com/1200x/bc/61/a2/bc61a2ee34dc7a02fc4b42331fde2c46.jpg",
  nosering13:
    "https://i.pinimg.com/1200x/2b/8c/16/2b8c1660762e8d66e6cc04fba7692b69.jpg",
  nosering14:
    "https://i.pinimg.com/1200x/ee/1f/a4/ee1fa45a316d9a143a63a3a65e89c0c9.jpg",
  nosering15:
    "https://i.pinimg.com/1200x/0a/e6/c7/0ae6c7efd223329f3ec82b52362e3671.jpg",
  nosering16:
    "https://i.pinimg.com/1200x/8d/ab/04/8dab04dfbb5ad51ff7888a02765a6d60.jpg",
  nosering17:
    "https://i.pinimg.com/1200x/3d/86/e1/3d86e18aeb7b6e4cb30248ee2c0c995f.jpg",
  nosering18:
    "https://i.pinimg.com/1200x/34/f2/3e/34f23e78aed4aeb49732a0e43f014ed1.jpg",
  nosering19:
    "https://i.pinimg.com/1200x/c6/b8/4c/c6b84cf4d0afe1a9b13cb04e1d49f4d0.jpg",
  nosering20:
    "https://i.pinimg.com/1200x/a2/af/b6/a2afb60dd6cd7e5587109969335e5247.jpg",
  nosering21:
    "https://i.pinimg.com/736x/ae/27/b8/ae27b8b208caa3f6666ce31a59a4500a.jpg",
  nosering22:
    "https://i.pinimg.com/1200x/76/78/d8/7678d8ca5a4d5ad407592205c8bd1709.jpg",
  nosering23:
    "https://i.pinimg.com/1200x/0c/34/1b/0c341b24e628a28aaed7753ffdc5037d.jpg",
  nosering24:
    "https://i.pinimg.com/1200x/64/21/53/642153eea2f06e056c2c884ac89d9753.jpg",
  nosering25:
    "https://i.pinimg.com/1200x/61/29/8e/61298ee4bdbb478d0d9a2aa91428d863.jpg",
  nosering26:
    "https://i.pinimg.com/736x/27/3c/aa/273caac13730643bb7ed6c516a93ae84.jpg",
  nosering27:
    "https://i.pinimg.com/736x/dc/fa/86/dcfa86d8db254febbdf393233a989d95.jpg",
  nosering28:
    "https://i.pinimg.com/1200x/8b/3c/9a/8b3c9a56979c34aa2ce2fba5db4796a0.jpg",
  nosering29:
    "https://i.pinimg.com/1200x/55/13/ff/5513fff545c3031de9072d0b85f7e5f6.jpg",
  nosering30:
    "https://i.pinimg.com/1200x/d5/d1/86/d5d1869a1fb1e27544181a3d98baae87.jpg",
  nosering31:
    "https://i.pinimg.com/1200x/1b/8d/5b/1b8d5b4c0ea671b0a92917291106a3a9.jpg",
  nosering32:
    "https://i.pinimg.com/1200x/85/b3/81/85b3811ab3c974258c040ce3376a1035.jpg",
  nosering33:
    "https://i.pinimg.com/736x/df/33/33/df33330daae3c07fab086665be8a6270.jpg",
  nosering34:
    "https://i.pinimg.com/1200x/d4/de/80/d4de80fe43ed019d5f5788a5700be7c4.jpg",
  nosering35:
    "https://i.pinimg.com/1200x/f3/a6/49/f3a649e97e5b3be2a152d018221aed32.jpg",
  nosering36:
    "https://i.pinimg.com/control1/736x/be/71/a3/be71a3258ced4dd34e01f7e3ecb92991.jpg",
  nosering37:
    "https://i.pinimg.com/control1/736x/51/9d/7e/519d7e2a7b559866401b5068f65259e4.jpg",
  nosering38:
    "https://i.pinimg.com/1200x/85/d3/11/85d311f8a00f4092faa96171d887d803.jpg",
  nosering39:
    "https://i.pinimg.com/control1/736x/86/8b/f7/868bf7ce07b2dc5cb8e66840e7ad1981.jpg",
  nosering40:
    "https://i.pinimg.com/control1/1200x/43/c3/c1/43c3c11c066a76d0f285c16c1a9bfaaa.jpg",
  nosering41:
    "https://i.pinimg.com/1200x/c2/14/ae/c214ae9d7592c1e47b315f57ec5fa11d.jpg",
  nosering42:
    "https://i.pinimg.com/1200x/98/21/42/982142529b1f029987ed0c262123ac06.jpg",
  nosering43:
    "https://i.pinimg.com/1200x/71/0d/40/710d40e6028bc8099762e584ad40786f.jpg",
  nosering44:
    "https://i.pinimg.com/1200x/e3/fa/af/e3faafa0da07e54383e450e32bf6ec16.jpg",
  nosering45:
    "https://i.pinimg.com/1200x/3b/94/36/3b9436e4fdba03fb0fe2689e9518acdd.jpg",
  nosering46:
    "https://i.pinimg.com/736x/7a/9c/cd/7a9ccdd7d22f4993998ba7888ab6f839.jpg",
  nosering47:
    "https://i.pinimg.com/1200x/ef/6a/ef/ef6aef8247eca6b7a82f83c3ab55cfbb.jpg",
  nosering48:
    "https://i.pinimg.com/736x/16/19/95/161995f600ef03cbbe95c19750aa7a72.jpg",

  nath: "https://i.pinimg.com/1200x/2a/42/5a/2a425a07db0e58c073560a78bef9c210.jpg",
  nath2:
    "https://i.pinimg.com/736x/b0/5c/6b/b05c6bfcbdb07a1268a2f82ef7da925c.jpg",
  nath3:
    "https://i.pinimg.com/1200x/48/62/24/48622485003408094486a73d5a64fdc8.jpg",
  nath4:
    "https://i.pinimg.com/1200x/12/c3/af/12c3af0be516661cddc72aa5627e80c9.jpg",
  nath5:
    "https://i.pinimg.com/736x/4d/87/91/4d8791eb9c4046bb1361bebc4fb9a0c1.jpg",
  nath6:
    "https://i.pinimg.com/736x/d6/64/69/d664692a4d056e30f0e389b77d90191e.jpg",
  nath7:
    "https://i.pinimg.com/control1/736x/ca/51/a6/ca51a66957e95ff0a04bd92d51acc2df.jpg",
  nath8:
    "https://i.pinimg.com/1200x/4a/ff/27/4aff274c4dd33d79fde78b862b30c483.jpg",
  nath9:
    "https://i.pinimg.com/736x/b1/1d/97/b11d97d4c2b65cc23c70b3bf3b3c4fa4.jpg",
  nath10:
    "https://i.pinimg.com/1200x/61/6b/cf/616bcf07a4ef9721fda0e0971886bc3c.jpg",
  nath11:
    "https://i.pinimg.com/1200x/db/6f/a5/db6fa50cb208621df23508c07739c6e9.jpg",
  nath12:
    "https://i.pinimg.com/control1/1200x/ff/85/2f/ff852f9b8480ff204f95e9d217e37dbb.jpg",
  nath13:
    "https://i.pinimg.com/control1/736x/e2/33/11/e233117143b1140d0c39c975d9e837b2.jpg",
  nath14:
    "https://i.pinimg.com/1200x/2d/a0/c2/2da0c29af0de0d576655b909793d9abc.jpg",
  nath15:
    "https://i.pinimg.com/736x/e9/ea/37/e9ea37799fa6a4b51bab667426d06a10.jpg",
  nath16:
    "https://i.pinimg.com/control1/736x/4d/87/91/4d8791eb9c4046bb1361bebc4fb9a0c1.jpg",
  nath17:
    "https://i.pinimg.com/736x/9a/65/12/9a65122a9517ed227f3c76a1bd34bd5f.jpg",
  nath18:
    "https://i.pinimg.com/1200x/65/9e/89/659e890722fc852938ce135178e6f4cd.jpg",
  nath19:
    "https://i.pinimg.com/736x/d3/67/a8/d367a87c184af4198f6ffb476fb6b892.jpg",
  nath20:
    "https://i.pinimg.com/1200x/49/0d/69/490d6951708b6fdf01023613b931b216.jpg",
  nath21:
    "https://i.pinimg.com/1200x/5d/23/f1/5d23f1f5bb8e6d364b3134c73c70dc1d.jpg",
  nath22:
    "https://i.pinimg.com/1200x/eb/00/bc/eb00bc3c18daec401e5455cdb23ff0eb.jpg",
  nath23:
    "https://i.pinimg.com/1200x/0b/5a/db/0b5adb8cbf8fc9d3a40022af40e7b415.jpg",
  nath24:
    "https://i.pinimg.com/1200x/ce/8f/75/ce8f75b8d04b6c8fbb2c6f8f5b07d562.jpg",
  nath25:
    "https://i.pinimg.com/736x/8a/ac/36/8aac361e6060f00ebe07392276cfc685.jpg",
  nath26:
    "https://i.pinimg.com/736x/7f/f5/18/7ff518cd367e5004bf6fee3c98f3c421.jpg",
  nath27:
    "https://i.pinimg.com/1200x/87/9a/6b/879a6b19ae43594075ab872469f82253.jpg",
  nath28:
    "https://i.pinimg.com/736x/8f/2a/c8/8f2ac8fcaed5892e368ce9bff1f616e4.jpg",
  nath29:
    "https://i.pinimg.com/736x/e8/a3/d2/e8a3d2a897218edd17e104fcfa440d8e.jpg",
  nath30:
    "https://i.pinimg.com/1200x/f1/12/9c/f1129c1dae7294084d72a422e7d7816b.jpg",
  nath31:
    "https://i.pinimg.com/736x/54/3c/55/543c55a763a2c11d991220fb849cbc42.jpg",
  nath32:
    "https://i.pinimg.com/1200x/18/74/b0/1874b0bf79628b754542b8341e1a88cd.jpg",
  nath33:
    "https://i.pinimg.com/736x/6f/8e/43/6f8e438f95313108764f8058caac3a19.jpg",
  nath34:
    "https://i.pinimg.com/736x/7d/de/19/7dde19192e198715be799fcb0a090440.jpg",
  nath35:
    "https://i.pinimg.com/736x/d6/6f/65/d66f65874bb2d55de28e99f4e362d983.jpg",
  nath36:
    "https://i.pinimg.com/1200x/04/13/8a/04138afd36238e82a33a596bd59c9683.jpg",
  nath37:
    "https://i.pinimg.com/1200x/75/d1/2f/75d12f9a77670b7c9211d6369219a986.jpg",
  nath38:
    "https://i.pinimg.com/1200x/9b/02/23/9b0223cd8f4b5b9467d2d7cac5e9034d.jpg",
  nath39:
    "https://i.pinimg.com/736x/ae/1e/4c/ae1e4c0f22e7d699301c75f0d8f8bbf9.jpg",
  nath40:
    "https://i.pinimg.com/736x/e0/11/55/e0115508bf1a4f9f7fb64ae692b3b3d6.jpg",
  nath41:
    "https://i.pinimg.com/736x/12/fa/3d/12fa3de6b5e98b75923df16527b8863a.jpg",
  nath42:
    "https://i.pinimg.com/736x/1d/61/47/1d6147cb5e2b5d1d762167ae0db01f38.jpg",
  nath43:
    "https://i.pinimg.com/736x/c0/e5/57/c0e557a23344a21c80fe370eee28464a.jpg",
  nath44:
    "https://i.pinimg.com/736x/3c/04/01/3c04016fbba7d24c79a3a99e9a6aec8e.jpg",
  nath45:
    "https://i.pinimg.com/736x/55/19/a6/5519a6cbedeab55692f8e300c19a16b2.jpg",
  nath46:
    "https://i.pinimg.com/736x/d9/ae/e0/d9aee00dba87e732c1e64a9bd47eade1.jpg",
  nath47:
    "https://i.pinimg.com/736x/11/49/21/114921d17cd765007d71aaccf7b1a2f7.jpg",
  nath48:
    "https://i.pinimg.com/1200x/a0/fd/9b/a0fd9b54fdbbdb891ddbc7b4a82a340f.jpg",

  mangalsutra:
    "https://i.pinimg.com/736x/ba/ac/78/baac78f282ea55cc1aa7f3c2c7773c19.jpg",
  mangalsutra2:
    "https://i.pinimg.com/736x/b4/49/6b/b4496ba180731fa62f97b11e4da56fec.jpg",
  mangalsutra3:
    "https://i.pinimg.com/736x/e1/5a/b0/e15ab0f52f97f7a4cbcbbe9ae3d5f5c6.jpg",
  mangalsutra4:
    "https://i.pinimg.com/1200x/44/fe/a5/44fea5e0b37b4e1158440d804683596e.jpg",
  mangalsutra5:
    "https://i.pinimg.com/736x/a1/c4/95/a1c49514ad7334ff5441a73ab7fad0dc.jpg",
  mangalsutra6:
    "https://i.pinimg.com/1200x/53/05/e7/5305e79d5a9b954e360a225cde4969a6.jpg",
  mangalsutra7:
    "https://i.pinimg.com/736x/15/fd/ae/15fdaed568cec107ae046de9651edfd5.jpg",
  mangalsutra8:
    "https://i.pinimg.com/736x/22/f9/f5/22f9f5dd1dc508c037f591adfd6d0d79.jpg",
  mangalsutra9:
    "https://i.pinimg.com/736x/1e/23/40/1e23401d757957083174b829bcec7747.jpg",
  mangalsutra10:
    "https://i.pinimg.com/control1/1200x/dd/29/0b/dd290b77a262147a8645a3c870c10cc2.jpg",
  mangalsutra11:
    "https://i.pinimg.com/control1/1200x/ae/43/4d/ae434d22e816f0fbbd97a2a007f9a35e.jpg",
  mangalsutra12:
    "https://i.pinimg.com/736x/64/97/53/649753cb4c5f1e7ea5f75d2024553bdd.jpg",
  mangalsutra13:
    "https://i.pinimg.com/736x/26/d4/d5/26d4d5559d16aa49c0f4d880276adf6c.jpg",
  mangalsutra14:
    "https://i.pinimg.com/736x/41/71/06/4171064acbffd6e92a039e5724804917.jpg",
  mangalsutra15:
    "https://i.pinimg.com/control1/1200x/6e/20/a5/6e20a5a8b394492d536d1b6ecae39e77.jpg",
  mangalsutra16:
    "https://i.pinimg.com/736x/19/20/6f/19206fc01dea2e5d25692386cc08f119.jpg",
  mangalsutra17:
    "https://i.pinimg.com/control1/1200x/96/61/b4/9661b4596aafd6b6f8579afe71ed0ae2.jpg",
  mangalsutra18:
    "https://i.pinimg.com/736x/e1/78/cc/e178cc6127f03eec75fe0a1d576b535d.jpg",
  mangalsutra19:
    "https://i.pinimg.com/1200x/21/c6/1d/21c61d8806f8dca0347b84cb52c694dc.jpg",
  mangalsutra20:
    "https://i.pinimg.com/736x/ae/c7/f4/aec7f43ca4c97f4131468a4d5504ecd8.jpg",
  mangalsutra21:
    "https://i.pinimg.com/control1/736x/0c/c3/d2/0cc3d246f7dc7d82f0bbfcf645a2ec0c.jpg",
  mangalsutra22:
    "https://i.pinimg.com/1200x/c6/59/cd/c659cd5d7375843d770a428812990d23.jpg",
  mangalsutra23:
    "https://i.pinimg.com/736x/fe/d9/b4/fed9b41cb891d3b5563505227bfe4480.jpg",
  mangalsutra24:
    "https://i.pinimg.com/736x/ca/a9/3f/caa93f361ab20d4c0b21c14fd394f7c2.jpg",
  mangalsutra25:
    "https://i.pinimg.com/1200x/e7/db/0a/e7db0ac763f5bc06f0bb631d043dc015.jpg",
  mangalsutra26:
    "https://i.pinimg.com/736x/74/fb/0e/74fb0eac78df1bab4e1ed4981adbce99.jpg",
  mangalsutra27:
    "https://i.pinimg.com/control1/736x/a7/39/17/a73917f53817c58866c9f9cc11a8d53b.jpg",
  mangalsutra28:
    "https://i.pinimg.com/736x/62/d4/d4/62d4d473d50011ad5e6c3a518cef8fa1.jpg",
  mangalsutra29:
    "https://i.pinimg.com/736x/a7/93/c4/a793c420a3748b9dcd6ea2d14b7ae97c.jpg",
  mangalsutra30:
    "https://i.pinimg.com/1200x/19/9d/7b/199d7b3b4df5b073485fc44e93bebd94.jpg",
  mangalsutra31:
    "https://i.pinimg.com/1200x/4f/aa/08/4faa08525436e1377e90643a153cf464.jpg",
  mangalsutra32:
    "https://i.pinimg.com/736x/f8/d2/9c/f8d29c5f5295fb748fb848d658e1a2f4.jpg",
  mangalsutra33:
    "https://i.pinimg.com/control1/736x/84/8c/55/848c5577f6e420edc0a9e8b33088dede.jpg",
  mangalsutra34:
    "https://i.pinimg.com/control1/736x/77/7b/55/777b55058c281567e2290a01aa1c4922.jpg",
  mangalsutra35:
    "https://i.pinimg.com/1200x/6b/6b/b8/6b6bb8d7ef94f76ff3d793ecfc999620.jpg",
  mangalsutra36:
    "https://i.pinimg.com/736x/31/d1/cc/31d1cca7593baa382800d90a89aaf2ae.jpg",
  mangalsutra37:
    "https://i.pinimg.com/736x/b0/94/f1/b094f113047a6e52dd9f0176b79dae2c.jpg",
  mangalsutra38:
    "https://i.pinimg.com/1200x/6e/a2/3c/6ea23ce696e35d13e4a839112cd2f764.jpg",
  mangalsutra39:
    "https://i.pinimg.com/736x/83/e9/c4/83e9c48901cdb3c275edbbaf86a5a976.jpg",
  mangalsutra40:
    "https://i.pinimg.com/736x/8c/84/8e/8c848ebbbf2f097e1bbc2b89382f21d4.jpg",
  mangalsutra41:
    "https://i.pinimg.com/1200x/e9/02/e5/e902e51b45ccc06556e5c7b9f427d117.jpg",
  mangalsutra42:
    "https://i.pinimg.com/1200x/35/f3/ad/35f3adab045c981044cc1cf0fc9c34ba.jpg",
  mangalsutra43:
    "https://i.pinimg.com/736x/cd/44/81/cd448156e88c34bd32698ba0f2c55966.jpg",
  mangalsutra44:
    "https://i.pinimg.com/736x/9c/23/cf/9c23cf82772c9f7e52c04b889a417017.jpg",
  mangalsutra45:
    "https://i.pinimg.com/736x/82/85/b0/8285b06a436704fb8fbd803c0a8bc5aa.jpg",
  mangalsutra46:
    "https://i.pinimg.com/736x/bb/d6/0c/bbd60ce20d0eeb64dbe5c211568076b5.jpg",
  mangalsutra47:
    "https://i.pinimg.com/736x/43/32/34/43323470986bcd4fd325c51c691c8354.jpg",
  mangalsutra48:
    "https://i.pinimg.com/736x/0e/f8/a2/0ef8a25c1da5688dffb561827f82224e.jpg",

  chudi:
    "https://i.pinimg.com/736x/6f/99/26/6f9926cb90c266955ff0f60110184685.jpg",
  chudi2:
    "https://i.pinimg.com/736x/74/23/c5/7423c5ba164505b60a5909cce5640e18.jpg",
  chudi3:
    "https://i.pinimg.com/736x/2f/01/03/2f0103b9cf9de55f9cfa67f523308e2e.jpg",
  chudi4:
    "https://i.pinimg.com/1200x/0b/bc/99/0bbc996724aafab3763f4961cae7f55f.jpg",
  chudi5:
    "https://i.pinimg.com/736x/0f/47/14/0f47145287847fbf791697b3554e6314.jpg",
  chudi6:
    "https://i.pinimg.com/736x/6c/a4/bb/6ca4bbf2515fead83d8d142db4a3e3c2.jpg",
  chudi7:
    "https://i.pinimg.com/736x/6c/a4/bb/6ca4bbf2515fead83d8d142db4a3e3c2.jpg",
  chudi8:
    "https://i.pinimg.com/1200x/17/f8/6f/17f86f3443cf3fab71dfc8577ef42814.jpg",
  chudi9:
    "https://i.pinimg.com/control1/736x/89/54/56/89545658ba23e603663ba8efc9b703f6.jpg",
  chudi10:
    "https://i.pinimg.com/736x/33/c0/08/33c0086a738e48cc5be2c68ca13e397e.jpg",
  chudi11:
    "https://i.pinimg.com/1200x/b5/2f/e2/b52fe225d8fcd848570f465661122ce7.jpg",
  chudi12:
    "https://i.pinimg.com/1200x/1c/c5/d7/1cc5d767cb9406e413506c41a31a24e7.jpg",
  chudi13:
    "https://i.pinimg.com/1200x/b0/54/ee/b054ee8ccc90c7d047c260db0bbf3cb3.jpg",
  chudi14:
    "https://i.pinimg.com/736x/6a/f8/31/6af8317a81f1b3f17950041ffba566fd.jpg",
  chudi15:
    "https://i.pinimg.com/control1/1200x/53/3b/ef/533befcc274025cfdb974485ca85e1e4.jpg",
  chudi16:
    "https://i.pinimg.com/736x/8c/53/19/8c5319e992f7b30225b8dfcf0b5c4258.jpg",
  chudi17:
    "https://i.pinimg.com/control1/1200x/cc/5c/2a/cc5c2a2453ddf6553924552b91db4c3c.jpg",
  chudi18:
    "https://i.pinimg.com/control1/1200x/9e/e2/07/9ee2079457405824e3f0f6c13be4b564.jpg",
  chudi19:
    "https://i.pinimg.com/control1/736x/57/c2/0e/57c20e4a5d80ab8081890d808bacb18b.jpg",
  chudi20:
    "https://i.pinimg.com/736x/18/95/c8/1895c88761cdab59a896372a59d4c2e7.jpg",
  chudi21:
    "https://i.pinimg.com/736x/a2/0b/20/a20b20acc3bd20d5a708c73c75ed9094.jpg",
  chudi22:
    "https://i.pinimg.com/1200x/72/5c/2e/725c2e2d1065a31b7459e4d80fb72ff8.jpg",
  chudi23:
    "https://i.pinimg.com/control1/1200x/2a/11/e0/2a11e0a3878a9f6bfffdc1f9e86725b3.jpg",
  chudi24:
    "https://i.pinimg.com/control1/736x/16/ca/a6/16caa6bdc85cae3e5921836524003011.jpg",
  chudi25:
    "https://i.pinimg.com/736x/31/0f/9b/310f9bc3fca881815909c2152b100f87.jpg",
  chudi26:
    "https://i.pinimg.com/1200x/50/0f/7e/500f7ed7a9426d58d83bb19d08f3ee2c.jpg",
  chudi27:
    "https://i.pinimg.com/1200x/3d/78/34/3d78345d3dba4c359b0eb46a608203f2.jpg",
  chudi28:
    "https://i.pinimg.com/1200x/3f/2e/62/3f2e62bf1a531ed2df57de4e26066288.jpg",
  chudi29:
    "https://i.pinimg.com/1200x/0b/bc/99/0bbc996724aafab3763f4961cae7f55f.jpg",
  chudi30:
    "https://i.pinimg.com/control1/736x/e8/9e/b4/e89eb468b7648834991de0302c653165.jpg",
  chudi31:
    "https://i.pinimg.com/control1/736x/bd/05/79/bd0579393a2a4d750b13226655b41929.jpg",
  chudi32:
    "https://i.pinimg.com/736x/eb/dc/b8/ebdcb8334f057bc51aff9309a3b124b7.jpg",
  chudi33:
    "https://i.pinimg.com/736x/d2/15/f4/d215f433042bf8d36616c119408f1113.jpg",
  chudi34:
    "https://i.pinimg.com/1200x/d2/2f/54/d22f542f0f541110e9e903e4d493d727.jpg",
  chudi35:
    "https://i.pinimg.com/1200x/57/87/00/5787002f9cb0e8bba5359e639ce3fd7b.jpg",
  chudi36:
    "https://i.pinimg.com/1200x/4e/c4/b0/4ec4b0c5fbb1d81dba67ae560653ce65.jpg",
  chudi37:
    "https://i.pinimg.com/1200x/5f/52/f9/5f52f9db75a13131a948205cfa72e15a.jpg",
  chudi38:
    "https://i.pinimg.com/1200x/de/d7/d0/ded7d05cbf57b1c9545f7afeb396ee95.jpg",
  chudi39:
    "https://i.pinimg.com/736x/a5/15/5f/a5155f9e43ac3a6ccc0f52194b38abda.jpg",
  chudi40:
    "https://i.pinimg.com/736x/59/3e/9d/593e9d9cdca7253f436c1830915ef546.jpg",
  chudi41:
    "https://i.pinimg.com/736x/00/76/aa/0076aabed64a5ee73afecf4940c8f446.jpg",
  chudi42:
    "https://i.pinimg.com/1200x/89/37/91/893791c2600b8900f16cf1ad57a71dad.jpg",
  chudi43:
    "https://i.pinimg.com/1200x/01/ac/c8/01acc865822145544468734eb7c13d45.jpg",
  chudi44:
    "https://i.pinimg.com/control1/736x/c6/1f/e0/c61fe066377d8780d92f9aef995e4b88.jpg",
  chudi45:
    "https://i.pinimg.com/1200x/1e/49/ef/1e49efd64ac4365dbae20125e2ec39f7.jpg",
  chudi46:
    "https://i.pinimg.com/1200x/8f/1b/0c/8f1b0ce541270571c0fbdcac4cf7a64c.jpg",
  chudi47:
    "https://i.pinimg.com/736x/fe/84/3d/fe843d132af5db04e7b05f4a0a1b1525.jpg",
  chudi48:
    "https://i.pinimg.com/736x/bc/a3/ab/bca3ab2879b77bfaac8ac39928783744.jpg",

  raanihar:
    "https://i.pinimg.com/1200x/5a/45/49/5a4549376e8aea423054b42e1ecdcbc4.jpg",
  raanihar2:
    "https://i.pinimg.com/736x/72/60/84/726084e6d4c9897272e361cdaf38f97e.jpg",
  raanihar3:
    "https://i.pinimg.com/736x/ec/88/e3/ec88e3e1d32dddf7925f8dd021b7dd45.jpg",
  raanihar4:
    "https://i.pinimg.com/736x/bf/f4/6a/bff46a4eddecd2054f103270f9a3a35d.jpg",
  raanihar5:
    "https://i.pinimg.com/736x/78/73/58/7873589944730beeff4cd977b607288a.jpg",
  raanihar6:
    "https://i.pinimg.com/736x/ee/53/be/ee53beac48d316c27e429ac492df281c.jpg",
  raanihar7:
    "https://i.pinimg.com/control1/1200x/89/9e/01/899e01109ec11c7f2582427d3e943c74.jpg",
  raanihar8:
    "https://i.pinimg.com/control1/1200x/de/ad/cb/deadcb7625d0a836d2076fe17681eb04.jpg",
  raanihar9:
    "https://i.pinimg.com/1200x/57/8b/06/578b06243cbb528e0ff0685f1c050cdf.jpg",
  raanihar10:
    "https://i.pinimg.com/736x/db/5f/44/db5f443b6247fef4828a90f0aaaf83f7.jpg",
  raanihar11:
    "https://i.pinimg.com/control1/1200x/63/1a/1a/631a1a0132a9b87eebdc70a4b37f0015.jpg",
  raanihar12:
    "https://i.pinimg.com/736x/a9/2b/74/a92b74d79515c0765a53f1d977da878d.jpg",
  raanihar13:
    "https://i.pinimg.com/1200x/a0/fb/73/a0fb73c47703b0ff0e6a31980a301f48.jpg",
  raanihar14:
    "https://i.pinimg.com/736x/44/ea/c3/44eac31e2f240645414c103674b8015c.jpg",
  raanihar15:
    "https://i.pinimg.com/736x/ae/e3/88/aee38815562bc2c65bfeaccc970420a7.jpg",
  raanihar16:
    "https://i.pinimg.com/1200x/34/c9/5b/34c95b21b1d7f753741f4f82132f5bc1.jpg",
  raanihar17:
    "https://i.pinimg.com/736x/96/43/3f/96433feea00183312196c60386c7461e.jpg",
  raanihar18:
    "https://i.pinimg.com/736x/ec/88/e3/ec88e3e1d32dddf7925f8dd021b7dd45.jpg",
  raanihar19:
    "https://i.pinimg.com/736x/0f/4a/09/0f4a094d35014e636ca9e8b20d4da8ec.jpg",
  raanihar20:
    "https://i.pinimg.com/control1/1200x/e7/8c/6e/e78c6e5fd4f5ad9d0f6449d01c45330e.jpg",
  raanihar21:
    "https://i.pinimg.com/736x/f7/15/0e/f7150e8a535644d3821a4a2abf786176.jpg",
  raanihar22:
    "https://i.pinimg.com/736x/b3/14/af/b314af279f7b95fe6cc439fe688c52f9.jpg",
  raanihar23:
    "https://i.pinimg.com/736x/fc/8a/b8/fc8ab8938f9d97f1fe43883987ab553e.jpg",
  raanihar24:
    "https://i.pinimg.com/736x/db/d5/6e/dbd56ecd02e21386148fcad0e4e18365.jpg",
  raanihar25:
    "https://i.pinimg.com/control1/1200x/85/3c/08/853c08cf659f021bf810e7ee07ec5474.jpg",
  raanihar26:
    "https://i.pinimg.com/736x/f1/92/3a/f1923a6b27515a7c3faaf475114b7348.jpg",
  raanihar27:
    "https://i.pinimg.com/736x/3d/a8/dd/3da8dd4dcf5f2ea5454c5e4926981f74.jpg",
  raanihar28:
    "https://i.pinimg.com/736x/91/c9/18/91c918fbb15ac16c5a461b65158e4951.jpg",
  raanihar29:
    "https://i.pinimg.com/control1/1200x/33/29/7e/33297e190c519bd3eb3b164f8c07291f.jpg",
  raanihar30:
    "https://i.pinimg.com/736x/03/f5/61/03f56131b7c6f0b125c1656f6d49e9d0.jpg",
  raanihar31:
    "https://i.pinimg.com/736x/b7/6a/1d/b76a1d889356231c8b4f88ee464a3c71.jpg",
  raanihar32:
    "https://i.pinimg.com/1200x/5f/13/45/5f134562f0d8701140677b6c9b28d6bb.jpg",
  raanihar33:
    "https://i.pinimg.com/736x/19/4a/9a/194a9ad3effb89a64c61c325515b5a60.jpg",
  raanihar34:
    "https://i.pinimg.com/736x/eb/df/c0/ebdfc0d7a1b0f9031616c9e3435ea0cd.jpg",
  raanihar35:
    "https://i.pinimg.com/1200x/d4/e2/1e/d4e21ef5fb9d4c156c3bf6feab48f5a2.jpg",
  raanihar36:
    "https://i.pinimg.com/1200x/2c/a8/68/2ca86880a5eb15396f9ce821fdd53924.jpg",
  raanihar37:
    "https://i.pinimg.com/736x/1f/e3/8d/1fe38d4dfe64a8eb4a5e0dcd207814f9.jpg",
  raanihar38:
    "https://i.pinimg.com/736x/41/23/a9/4123a900f31c449a39d53f4ad492ff21.jpg",
  raanihar39:
    "https://i.pinimg.com/736x/73/63/26/736326f25d00999716147b183ad02b1c.jpg",
  raanihar40:
    "https://i.pinimg.com/736x/95/e4/6a/95e46a548bd3adbeb8a0e5b48af81c88.jpg",
  raanihar41:
    "https://i.pinimg.com/736x/46/92/b1/4692b1dac9bad270917aae49d91a2eb7.jpg",
  raanihar42:
    "https://i.pinimg.com/1200x/4b/fb/a8/4bfba813eaf4c05e0818351db23f819a.jpg",
  raanihar43:
    "https://i.pinimg.com/736x/64/00/11/640011b51773cca0ad277fd53d0b3674.jpg",
  raanihar44:
    "https://i.pinimg.com/736x/28/0b/5b/280b5b3d434aa211353376d777da08f0.jpg",
  raanihar45:
    "https://i.pinimg.com/736x/8a/d4/53/8ad4537da1d766c504030b878369a30f.jpg",
  raanihar46:
    "https://i.pinimg.com/736x/34/fc/64/34fc6425b292685875e452ebc9b67c40.jpg",
  raanihar47:
    "https://i.pinimg.com/736x/42/0c/09/420c09ab93e3e8ded481c45ebcea6fd0.jpg",
  raanihar48:
    "https://i.pinimg.com/1200x/a4/07/d2/a407d2f4222dce7bb00fe25f078231b8.jpg",

  choker:
    "https://i.pinimg.com/736x/3e/76/07/3e7607254f0c2c104bac149c70e9dd06.jpg",
  choker2:
    "https://i.pinimg.com/736x/6e/7b/ca/6e7bcaeba41d68ac66278a727e531335.jpg",
  choker3:
    "https://i.pinimg.com/736x/6e/f1/8b/6ef18b1c67cbe0da6c575b9d7dc633bc.jpg",
  choker4:
    "https://i.pinimg.com/736x/e6/10/57/e61057e83476f9a68341e626ef802808.jpg",
  choker5:
    "https://i.pinimg.com/1200x/87/86/5a/87865ae25705562b8703c0c06af691d6.jpg",
  choker6:
    "https://i.pinimg.com/1200x/6a/c0/2f/6ac02f8cb09fae5fb90bf05e2bff09fd.jpg",
  choker7:
    "https://i.pinimg.com/736x/1c/a2/4d/1ca24da726d21edc1a093cd29bd2ea6b.jpg",
  choker8:
    "https://i.pinimg.com/736x/9a/ca/5a/9aca5a4f0903c7cdc84065103b34c972.jpg",
  choker9:
    "https://i.pinimg.com/736x/98/6d/e4/986de4ce76313dfa4b6e4e8c6088be78.jpg",
  choker10:
    "https://i.pinimg.com/736x/67/f1/5c/67f15c1624f5ee99d884d986f8a67877.jpg",
  choker11:
    "https://i.pinimg.com/1200x/29/a9/09/29a909c6df1e75b89cc38be030e2133e.jpg",
  choker12:
    "https://i.pinimg.com/736x/1a/73/fa/1a73fa4ad6779c8a3468725601b9f74a.jpg",
  choker13:
    "https://i.pinimg.com/1200x/08/54/a2/0854a233f51fd739f5dda73cd64ac13e.jpg",
  choker14:
    "https://i.pinimg.com/1200x/aa/1f/12/aa1f12004932e9bc02735bcb1d4a1fd1.jpg",
  choker15:
    "https://i.pinimg.com/1200x/65/07/65/650765ee6ed67c35a965d0d33c8c1719.jpg",
  choker16:
    "https://i.pinimg.com/1200x/0d/c8/02/0dc802e701504e6ad4809402f3cd8843.jpg",
  choker17:
    "https://i.pinimg.com/control1/1200x/9c/6c/7f/9c6c7f4beb0ae1710647d3c44134f6ea.jpg",
  choker18:
    "https://i.pinimg.com/736x/0f/3f/4d/0f3f4d43899c1fc1d4cf7e07b6f1aa2d.jpg",
  choker19:
    "https://i.pinimg.com/736x/e6/10/57/e61057e83476f9a68341e626ef802808.jpg",
  choker20:
    "https://i.pinimg.com/control1/1200x/b4/ec/c2/b4ecc2208d7bb83361047ce20d42f11a.jpg",
  choker21:
    "https://i.pinimg.com/736x/6f/7c/41/6f7c4124ac861407baafbe7aecebb6b1.jpg",
  choker22:
    "https://i.pinimg.com/1200x/43/e6/3f/43e63fb3e686c8ac6f5759f70a750d3d.jpg",
  choker23:
    "https://i.pinimg.com/1200x/ec/da/b3/ecdab3b905758f4c1d083eafe5a10a6a.jpg",
  choker24:
    "https://i.pinimg.com/736x/4f/93/d9/4f93d943f790b44dbf0863b899d02c53.jpg",
  choker25:
    "https://i.pinimg.com/736x/cf/d2/96/cfd296628e8ebccb061cd1629b06deab.jpg",
  choker26:
    "https://i.pinimg.com/736x/56/d3/06/56d306222f92b60472652f1e57fb3a4d.jpg",
  choker27:
    "https://i.pinimg.com/736x/4f/15/2e/4f152ee721011f5c99b692ba64bf7bc8.jpg",
  choker28:
    "https://i.pinimg.com/736x/b7/89/21/b7892190bc1bc473ca77fcee498629af.jpg",
  choker29:
    "https://i.pinimg.com/control1/736x/bc/67/9d/bc679dd47fe8eaff655a5b8e8df7fa08.jpg",
  choker30:
    "https://i.pinimg.com/control1/736x/d8/fa/c6/d8fac6f43d81af1e295b7c979eabef1c.jpg",
  choker31:
    "https://i.pinimg.com/1200x/07/35/3a/07353ae28e4756541c45154c2a510072.jpg",
  choker32:
    "https://i.pinimg.com/control1/736x/3c/64/61/3c64619063cf8c4220025c0df812da35.jpg",
  choker33:
    "https://i.pinimg.com/control1/1200x/46/4c/53/464c534b902f87c0bcd1066c8341e6db.jpg",
  choker34:
    "https://i.pinimg.com/1200x/37/a0/d4/37a0d48fd230664fad1249b51060908d.jpg",
  choker35:
    "https://i.pinimg.com/736x/19/22/ae/1922ae5e95595e1f52355977fcca3142.jpg",
  choker36:
    "https://i.pinimg.com/control1/736x/5f/71/77/5f7177716efb680b83641b5629434e79.jpg",
  choker37:
    "https://i.pinimg.com/736x/9b/f5/c4/9bf5c49be5c5f679e527fb813f0f0ae6.jpg",
  choker38:
    "https://i.pinimg.com/736x/a5/50/b0/a550b0db6f914929a8beaac9f643dfa0.jpg",
  choker39:
    "https://i.pinimg.com/1200x/b7/9c/c7/b79cc7dbca81088215936ce1edfcdaf1.jpg",
  choker40:
    "https://i.pinimg.com/736x/11/99/36/119936495448e4de3c103e434e70e746.jpg",
  choker41:
    "https://i.pinimg.com/1200x/f7/fa/96/f7fa96eebb39eb0ccb7e2167e78b6b0f.jpg",
  choker42:
    "https://i.pinimg.com/control1/736x/76/d6/f1/76d6f13b8f56087450f09bd341f8d801.jpg",
  choker43:
    "https://i.pinimg.com/736x/56/d3/b4/56d3b470eea34723be35b90c44b41ad1.jpg",
  choker44:
    "https://i.pinimg.com/736x/ae/d1/92/aed192a3d10a7fba0574b124e8ce701d.jpg",
  choker45:
    "https://i.pinimg.com/736x/18/2c/3b/182c3bf0fa51435d6201ea59c5deb9f6.jpg",
  choker46:
    "https://i.pinimg.com/736x/6c/97/00/6c9700a42d3f5bcf5f07c5cb0106a4dd.jpg",
  choker47:
    "https://i.pinimg.com/736x/6c/97/00/6c9700a42d3f5bcf5f07c5cb0106a4dd.jpg",

  necklaces:
    "https://i.pinimg.com/736x/b5/1d/54/b51d54377881806e0bb72019260fb5f4.jpg",
  necklaces2:
    "https://i.pinimg.com/736x/38/f3/92/38f392ede873533d9eb2751ee1b13150.jpg",
  necklaces3:
    "https://i.pinimg.com/736x/53/c2/d4/53c2d401545c3041af70e7625d748edc.jpg",
  necklaces4:
    "https://i.pinimg.com/736x/32/ba/25/32ba2551a794df808e20d84d8c0fbfbf.jpg",
  necklaces5:
    "https://i.pinimg.com/1200x/92/c6/34/92c634423561a232da095c9456df1df2.jpg",
  necklaces6:
    "https://i.pinimg.com/1200x/cb/d1/bc/cbd1bcc02f50903d26d443bf21adf818.jpg",
  necklaces7:
    "https://i.pinimg.com/control1/1200x/a1/d0/0c/a1d00cf42372302f4e8419248cf4038a.jpg",
  necklaces8:
    "https://i.pinimg.com/736x/d1/95/0d/d1950d68bc57ec71bf3ec56483156dba.jpg",
  necklaces9:
    "https://i.pinimg.com/control1/1200x/bb/c4/32/bbc432fd0ab7dade2f4707517a0c2e72.jpg",
  necklaces10:
    "https://i.pinimg.com/control1/736x/61/7b/8c/617b8ce1b53fdb3cefc492efd979c4db.jpg",
  necklaces11:
    "https://i.pinimg.com/736x/39/08/27/3908275c6fb45f5a6442afb7c930d5a7.jpg",
  necklaces12:
    "https://i.pinimg.com/1200x/63/00/6b/63006b337a5d30804a699711f2052288.jpg",
  necklaces13:
    "https://i.pinimg.com/736x/a1/09/ec/a109ecfbbe6a7be63c4ee37e4f554882.jpg",
  necklaces14:
    "https://i.pinimg.com/1200x/47/83/e6/4783e681aa860ad9bc7157fb4023d51e.jpg",
  necklaces15:
    "https://i.pinimg.com/1200x/3f/84/02/3f84027aea5bc3422cd3de5409d834a6.jpg",
  necklaces16:
    "https://i.pinimg.com/control1/1200x/e5/0b/a1/e50ba1b08ad0e85253b54172a39409a1.jpg",
  necklaces17:
    "https://i.pinimg.com/1200x/9a/fd/97/9afd9766fc7b7d9baee9de7e9690706f.jpg",
  necklaces18:
    "https://i.pinimg.com/1200x/aa/0c/70/aa0c70ff9bd30af646f8306f1230c7e3.jpg",
  necklaces19:
    "https://i.pinimg.com/736x/5a/47/79/5a47796f274e5597c59f8c4bc57c1f8f.jpg",
  necklaces20:
    "https://i.pinimg.com/736x/de/39/4b/de394b825c63242cf1c8ac6725e23085.jpg",
  necklaces21:
    "https://i.pinimg.com/736x/07/bc/15/07bc156c42fc7974becfad4c8e5c29de.jpg",
  necklaces22:
    "https://i.pinimg.com/736x/84/af/1e/84af1e3daa1a67376b3b1c069e2cb201.jpg",
  necklaces23:
    "https://i.pinimg.com/736x/c2/7c/48/c27c4823aaf7a3b7e117b399b7e74bc5.jpg",
  necklaces24:
    "https://i.pinimg.com/736x/2b/4f/b3/2b4fb30c67cec9bf94e46667d0841833.jpg",
  necklaces25:
    "https://i.pinimg.com/736x/26/d6/7c/26d67c32daa567236f98043b1f5381dd.jpg",
  necklaces26:
    "https://i.pinimg.com/736x/57/95/4d/57954d18507b7154ddf0e143732bab51.jpg",
  necklaces27:
    "https://i.pinimg.com/control1/1200x/51/f6/c8/51f6c8aa3d74e64ae86e91c493e70bf7.jpg",
  necklaces28:
    "https://i.pinimg.com/736x/d5/ba/7b/d5ba7b2acb10986f070aa7d4387cb87a.jpg",
  necklaces29:
    "https://i.pinimg.com/736x/cf/58/02/cf5802ac8f5adccb0ed2eb73b2f8d08b.jpg",
  necklaces30:
    "https://i.pinimg.com/736x/fb/ff/16/fbff16b15a0f2219ec4fb9a19a944265.jpg",
  necklaces31:
    "https://i.pinimg.com/736x/4e/b9/7d/4eb97d0e05f0a0f750d7af510bfa9b3c.jpg",
  necklaces32:
    "https://i.pinimg.com/1200x/d8/33/d8/d833d81773246b138e27807dd2a89836.jpg",
  necklaces33:
    "https://i.pinimg.com/1200x/76/3c/ba/763cbae4a279b156f4e3f3a99831fd06.jpg",
  necklaces34:
    "https://i.pinimg.com/736x/30/70/44/307044960a7542344dceeb50effc328f.jpg",
  necklaces35:
    "https://i.pinimg.com/1200x/06/31/96/063196abf3f9f64fe86b1bc1e2611dd4.jpg",
  necklaces36:
    "https://i.pinimg.com/1200x/be/20/4a/be204ad9e05105138ead4884f82fd04f.jpg",
  necklaces37:
    "https://i.pinimg.com/1200x/52/3b/da/523bda5bb609777985b0d567620c7b78.jpg",
  necklaces38:
    "https://i.pinimg.com/1200x/01/0d/71/010d7187b2ad6f491e4d3f6c460d6a7c.jpg",
  necklaces39:
    "https://i.pinimg.com/736x/d2/75/16/d27516c38b0641944c8c85a925c9e24f.jpg",
  necklaces40:
    "https://i.pinimg.com/1200x/a7/eb/0f/a7eb0f2dab4cbcad6c1b721e5207150e.jpg",
  necklaces41:
    "https://i.pinimg.com/736x/94/37/9e/94379e52064a08aa2b792efde522fefc.jpg",
  necklaces42:
    "https://i.pinimg.com/736x/40/5a/b9/405ab9bd37986cffc6d5902548ee3b09.jpg",
  necklaces43:
    "https://i.pinimg.com/736x/eb/bb/c5/ebbbc5f8962918599b5dc3213be205d0.jpg",
  necklaces44:
    "https://i.pinimg.com/736x/b7/55/5c/b7555cbebd69ed07b47f877d64110246.jpg",
  necklaces45:
    "https://i.pinimg.com/1200x/fb/d1/e4/fbd1e4dac8b9b974ae81f01d1c9af130.jpg",
  necklaces46:
    "https://i.pinimg.com/736x/11/95/52/119552963460e4c49e35b26a2cbf4c2f.jpg",
  necklaces47:
    "https://i.pinimg.com/736x/86/21/43/862143737b81ae776cd27f8c98a2619b.jpg",
  necklaces48:
    "https://i.pinimg.com/control1/736x/45/fc/fc/45fcfc1a8c83e7490f30237bc6cd8cb1.jpg",

  Om: "https://i.pinimg.com/1200x/1f/9e/2b/1f9e2b14f4caf757767f8e9f1bc75446.jpg",
  Om2: "https://i.pinimg.com/1200x/8f/de/99/8fde99bd56c5cad14357b23b6fb49570.jpg",
  Om3: "https://i.pinimg.com/1200x/c9/54/54/c95454ce07121322e2945c0d427a60ec.jpg",
  Om4: "https://i.pinimg.com/1200x/04/2b/fb/042bfb37799802a27afff884b338a9ef.jpg",
  Om5: "https://i.pinimg.com/1200x/ce/bc/9e/cebc9ef09ba8cba93ba768cc5a31b5a9.jpg",
  Om6: "https://i.pinimg.com/1200x/2f/4b/4f/2f4b4fe3048a9dc15dca531aec257671.jpg",
  Om7: "https://i.pinimg.com/1200x/e6/72/42/e6724200f30325ea4bb2979cb7d5868f.jpg",
  Om8: "https://i.pinimg.com/736x/75/6b/17/756b17780c9b52a529329e79dc8d1cd7.jpg",
  Om9: "https://i.pinimg.com/1200x/fc/ea/6a/fcea6ae13c07977b65cfa33180b17e92.jpg",
  Om10: "https://i.pinimg.com/1200x/11/df/e5/11dfe520f8d640b3823e2f741a7041f6.jpg",
  Om11: "https://i.pinimg.com/1200x/1a/45/1d/1a451d4ec32194c86ea4bdbc10ed4a68.jpg",
  Om12: "https://i.pinimg.com/1200x/0f/b8/02/0fb802b23e1ae17615cb7599c845142c.jpg",
  Om13: "https://i.pinimg.com/1200x/e0/3f/8f/e03f8fd2c862c19f622e298f4da5b215.jpg",
  Om14: "https://i.pinimg.com/1200x/fd/5b/42/fd5b422cfa4051d922e34a76c18f8f50.jpg",
  Om15: "https://i.pinimg.com/1200x/18/d7/e9/18d7e98443c93ea3b14b6b3dc4e584ac.jpg",
  Om16: "https://i.pinimg.com/1200x/e1/f1/50/e1f1502acf33c77092210e060cc21490.jpg",
  Om17: "https://i.pinimg.com/1200x/dc/b6/f3/dcb6f363b8248708bfb5cfd5fd33434f.jpg",
  Om18: "https://i.pinimg.com/1200x/6e/6e/39/6e6e39244ef470ada35475ec8f9ae909.jpg",
  Om19: "https://i.pinimg.com/1200x/8a/b0/a1/8ab0a1a34ac723b06e0322bbbffe7bc8.jpg",
  Om20: "https://i.pinimg.com/1200x/9f/3b/4a/9f3b4a54f3c647564cd0b89c6592331a.jpg",
  Om21: "https://i.pinimg.com/1200x/eb/a6/e6/eba6e6561b30390fb8c3774da0acdb8a.jpg",
  Om22: "https://i.pinimg.com/1200x/a1/68/07/a16807858a3cb6a45333901de09eb465.jpg",
  Om23: "https://i.pinimg.com/736x/a8/78/f2/a878f28634ac7d803d8a7c51b9c2ffac.jpg",
  Om24: "https://i.pinimg.com/1200x/c8/78/9f/c8789f32d4b56c01d011bb6cbb4e2997.jpg",
  Om25: "https://i.pinimg.com/1200x/1c/19/94/1c19945daea988ac0faebb028bbcbfb9.jpg",
  Om26: "https://i.pinimg.com/1200x/2b/eb/06/2beb067e6487913f52d0fef9cc087bc6.jpg",
  Om27: "https://i.pinimg.com/736x/e8/ed/7e/e8ed7ee085ca412f1e77b2682e189e4d.jpg",
  Om28: "https://i.pinimg.com/1200x/98/bc/15/98bc15eb370cfbb7f2b17322d266de74.jpg",
  Om29: "https://i.pinimg.com/1200x/2b/eb/06/2beb067e6487913f52d0fef9cc087bc6.jpg",
  Om30: "https://i.pinimg.com/1200x/63/b2/9e/63b29e3adf18a529126e4c4e0e33b864.jpg",
  Om31: "https://i.pinimg.com/1200x/d4/e8/f5/d4e8f5ef4354de057188d1e603db7036.jpg",
  Om32: "",
  Om33: "",
  Om34: "https://i.pinimg.com/1200x/fd/5b/42/fd5b422cfa4051d922e34a76c18f8f50.jpg",
  Om35: "",
  Om36: "",

  kanthi:
    "https://i.pinimg.com/1200x/75/6e/a2/756ea2299ba84dff8669bcfcd4ab955a.jpg",
  kanthi2:
    "https://i.pinimg.com/1200x/1b/29/63/1b2963881dc523a82b9eb57a8f881cba.jpg",
  kanthi3:
    "https://i.pinimg.com/1200x/a7/7f/6f/a77f6f0faf810a3b65aa0195c8cb87db.jpg",
  kanthi4:
    "https://i.pinimg.com/1200x/67/c6/cf/67c6cffc31f1d7bb6d623f265b47d1ea.jpg",
  kanthi5:
    "https://i.pinimg.com/1200x/54/a5/ac/54a5acf1536ec21ff40b5423a525293a.jpg",
  kanthi6:
    "https://i.pinimg.com/1200x/ae/c4/d4/aec4d4b37009b6c8b741fc8b4c865828.jpg",
  kanthi7:
    "https://i.pinimg.com/736x/f1/8f/e3/f18fe3020b18b2e139c2424189f40da9.jpg",
  kanthi8:
    "https://i.pinimg.com/1200x/1b/29/63/1b2963881dc523a82b9eb57a8f881cba.jpg",
  kanthi9:
    "https://i.pinimg.com/1200x/28/12/43/28124341a16153c7341ec7fd44b717e4.jpg",
  kanthi10:
    "https://i.pinimg.com/736x/0c/ab/c1/0cabc124a549c809581ec5d3babc45ea.jpg",
  kanthi11:
    "https://i.pinimg.com/736x/b5/33/e8/b533e83549d1b50d55ca8bef0bed26bb.jpg",
  kanthi12:
    "https://i.pinimg.com/1200x/83/d5/fe/83d5fe6fedf681b2db95d1ee9a3b6f6c.jpg",
  kanthi13:
    "https://i.pinimg.com/1200x/24/fc/34/24fc34af8dfe6268da13a01c628e2efc.jpg",
  kanthi14:
    "https://i.pinimg.com/736x/75/7d/b6/757db6b65a1fca72ba2dde13dbaf4963.jpg",
  kanthi15:
    "https://i.pinimg.com/736x/ce/92/79/ce9279657dbd45a2c7abb5ea485e8dd7.jpg",
  kanthi16:
    "https://i.pinimg.com/236x/eb/7c/b6/eb7cb655b474bcc5ac6712bff548eaea.jpg",
  kanthi17:
    "https://i.pinimg.com/736x/3b/72/59/3b72599d18c1e2f09bef1b299b3fc423.jpg",
  kanthi18:
    "https://i.pinimg.com/1200x/af/57/82/af57825d93cc22b1108e19e4146cf050.jpg",
  kanthi19:
    "https://i.pinimg.com/736x/b5/33/e8/b533e83549d1b50d55ca8bef0bed26bb.jpg",
  kanthi20:
    "https://i.pinimg.com/736x/8d/30/3b/8d303be32a96ba880f8d24060db29917.jpg",
  kanthi21:
    "https://i.pinimg.com/1200x/28/12/43/28124341a16153c7341ec7fd44b717e4.jpg",
  kanthi22:
    "https://i.pinimg.com/1200x/80/ba/55/80ba55a7274f93980012802d43f159a9.jpg",
  kanthi23:
    "https://i.pinimg.com/736x/91/24/92/912492d4a7496a648d4c1823a18ae671.jpg",
  kanthi24:
    "https://i.pinimg.com/1200x/c0/ff/17/c0ff1711eedfbf4531cb58fd413fe55a.jpg",
  kanthi25:
    "https://i.pinimg.com/1200x/6d/c0/50/6dc0509bef134bcdac7c2b5d4cdde74e.jpg",
  kanthi26:
    "https://i.pinimg.com/736x/d3/4b/ca/d34bca0a8bff94ebd849e070e4532745.jpg",
  kanthi27:
    "https://i.pinimg.com/1200x/83/d5/fe/83d5fe6fedf681b2db95d1ee9a3b6f6c.jpg",
  kanthi28:
    "https://i.pinimg.com/736x/0c/ab/c1/0cabc124a549c809581ec5d3babc45ea.jpg",
  kanthi29:
    "https://i.pinimg.com/736x/ce/92/79/ce9279657dbd45a2c7abb5ea485e8dd7.jpg",
  kanthi30:
    "https://i.pinimg.com/736x/85/e9/4e/85e94e0a72a1b7988b545055449ad328.jpg",
  kanthi31:
    "https://i.pinimg.com/736x/8d/30/3b/8d303be32a96ba880f8d24060db29917.jpg",
  kanthi32:
    "https://i.pinimg.com/1200x/28/12/43/28124341a16153c7341ec7fd44b717e4.jpg",
  kanthi33:
    "https://i.pinimg.com/736x/46/1b/a6/461ba6429b867835b146bdd2aa997f39.jpg",
  kanthi34:
    "https://i.pinimg.com/1200x/b4/dc/5a/b4dc5aeae8fb286bbfc8e88d1e0fc5b1.jpg",
  kanthi35:
    "https://i.pinimg.com/1200x/54/63/a8/5463a890a7ff3d9d8a3eeb4ffb4ce075.jpg",
  kanthi36:
    "https://i.pinimg.com/1200x/25/44/58/2544587a0a338ac4291b9296b856ff59.jpg",
  kanthi37: "",
  kanthi38: "",
  kanthi39: "",
  kanthi40: "",
  kanthi41: "",
  kanthi42: "",
  kanthi43: "",
  kanthi44: "",
  kanthi45: "",
  kanthi46: "",
  kanthi47: "",
  kanthi48: "",

  kada: "https://i.pinimg.com/736x/1f/9f/1d/1f9f1dee5397c6b8e2f32257d0c1abe0.jpg",
  kada4:
    "https://i.pinimg.com/736x/90/92/0f/90920f058226de9a656df64d76754df5.jpg",
  kada2:
    "https://i.pinimg.com/736x/84/94/20/8494201888befe7485cb21e007ed7c1d.jpg",
  kada3:
    "https://i.pinimg.com/736x/b3/53/08/b353083f773b97dce5869ed8e34cc376.jpg",
  kada5:
    "https://i.pinimg.com/736x/50/d4/c9/50d4c99de6a267276b50dc39957e9174.jpg",
  kada6:
    "https://i.pinimg.com/736x/91/04/a1/9104a15e160422e183cdfd6d9eee9079.jpg",
  kada7:
    "https://i.pinimg.com/control1/736x/7b/94/64/7b946426da92411e864bce6474c0c442.jpg",
  kada8:
    "https://i.pinimg.com/1200x/e9/e6/a4/e9e6a44e1a8b8c2bf2b64104e8ba449c.jpg",
  kada9:
    "https://i.pinimg.com/1200x/d9/cf/dd/d9cfdd82541e2834dc69ed10b6fd124f.jpg",
  kada10:
    "https://i.pinimg.com/736x/73/53/29/73532982a86da50adb416d98c5d561d4.jpg",
  kada11:
    "https://i.pinimg.com/736x/90/06/5f/90065ff681f71f3568fbf861d49de788.jpg",
  kada12:
    "https://i.pinimg.com/1200x/5a/6a/64/5a6a643450619b14c748f6bcda45573c.jpg",
  kada13:
    "https://i.pinimg.com/1200x/c7/f4/b8/c7f4b8e30b80ac3c38a68fb16a8d5784.jpg",
  kada14:
    "https://i.pinimg.com/736x/6f/ef/f1/6feff13d45b6009dd57ec9cd76278c18.jpg",
  kada15:
    "https://i.pinimg.com/1200x/2b/2e/6e/2b2e6e22cf8f890fe2752d44e82c290c.jpg",
  kada16:
    "https://i.pinimg.com/736x/e8/d6/b6/e8d6b6aaff324a018a4b9cc82c03ead5.jpg",
  kada17:
    "https://i.pinimg.com/1200x/ec/13/9c/ec139ca1616beca0d9ac1fd3d2a15b4f.jpg",
  kada18:
    "https://i.pinimg.com/1200x/70/5a/dd/705add90166191479dcfe829dfc09f19.jpg",
  kada19:
    "https://i.pinimg.com/1200x/76/1d/11/761d115c3eb9d463f7297a1fffc1f6f9.jpg",
  kada20:
    "https://i.pinimg.com/736x/7a/d1/40/7ad1404cc058889db0e6c864f13f07ea.jpg",
  kada21:
    "https://i.pinimg.com/736x/22/38/be/2238be626b859e767fdea4932d6cb198.jpg",
  kada22:
    "https://i.pinimg.com/control1/736x/21/b2/44/21b2448937476112a5464481269c75a2.jpg",
  kada23:
    "https://i.pinimg.com/1200x/3e/95/c0/3e95c0825b29c3ebee7e00ece52f8b0b.jpg",
  kada24:
    "https://i.pinimg.com/736x/63/44/8d/63448db0569192a010b75242a713bb46.jpg",
  kada25:
    "https://i.pinimg.com/736x/c7/7e/a4/c77ea42571f0b0305330086965d18acb.jpg",
  kada26:
    "https://i.pinimg.com/1200x/6d/20/c6/6d20c696e3bdec66dc6020cc4cd34145.jpg",
  kada27:
    "https://i.pinimg.com/736x/29/ac/12/29ac123e8d2961d90a9c6e91e0b7faa5.jpg",
  kada28:
    "https://i.pinimg.com/736x/55/1c/00/551c0018e3c40c9391066c520219529b.jpg",
  kada29:
    "https://i.pinimg.com/736x/7d/6b/41/7d6b4169a4c4f29516aa7e3e4ec9c1b8.jpg",
  kada30:
    "https://i.pinimg.com/1200x/91/31/b8/9131b851df76e1ee1a25009037145cf1.jpg",
  kada31:
    "https://i.pinimg.com/1200x/9b/a4/7e/9ba47e619ed4dd76e24cf9d32454e4d4.jpg",
  kada32:
    "https://i.pinimg.com/736x/a2/30/3c/a2303c473f7d71765c133eba3e40eb74.jpg",
  kada33:
    "https://i.pinimg.com/736x/d3/12/15/d31215cbe589bf8463cb94aa902e3045.jpg",
  kada34:
    "https://i.pinimg.com/736x/1a/d0/1f/1ad01fe7c1c68d33759c5b18f1e8812d.jpg",
  kada35:
    "https://i.pinimg.com/736x/ed/22/1a/ed221a9a8b5415897c4fb929bffa8755.jpg",
  kada36:
    "https://i.pinimg.com/736x/0f/9c/01/0f9c01f3f62d02c8ba7bdac657c3ca0b.jpg",
  kada37:
    "https://i.pinimg.com/1200x/bb/af/3b/bbaf3bc0b79d8533dd0d27fb617119a6.jpg",
  kada38:
    "https://i.pinimg.com/736x/f7/14/9a/f7149ad0b8ae5b3f7e38b16175c87db4.jpg",
  kada39:
    "https://i.pinimg.com/736x/76/a5/29/76a5292284d8c5578e61356140807cca.jpg",
  kada40:
    "https://i.pinimg.com/736x/a8/4b/0a/a84b0aa9f9e6e6647af695ce42a343c8.jpg",
  kada41:
    "https://i.pinimg.com/1200x/b5/9d/e4/b59de426aec14cd345c6a22570f74a5b.jpg",
  kada42:
    "https://i.pinimg.com/736x/4f/c0/61/4fc06196cf410296e4086e42d9f44be4.jpg",
  kada43:
    "https://i.pinimg.com/1200x/2a/0f/92/2a0f920ee7cb7ce9b351f89403636e1a.jpg",
  kada44:
    "https://i.pinimg.com/1200x/68/c1/9c/68c19cc6a2a09641bc2420329c6c1cbd.jpg",
  kada45:
    "https://i.pinimg.com/1200x/d4/de/4d/d4de4d9b545a04b7f95941211eaccbb9.jpg",
  kada46:
    "https://i.pinimg.com/736x/79/d3/9a/79d39a510eea35de0dda638fca8b92f7.jpg",
  kada47:
    "https://i.pinimg.com/736x/de/77/20/de7720e5dc50ce7d52813777ac92a3c1.jpg",
  kada48:
    "https://i.pinimg.com/736x/72/ba/ee/72baeebca2f475f4d3c5ec9683cf1add.jpg",

  omlocket:
    "https://i.pinimg.com/736x/ba/43/62/ba4362fed9794ef43f85e8a9c9aff372.jpg",
  omlocket2:
    "https://i.pinimg.com/736x/da/4e/01/da4e0143c7816b21ea0188b513b1bb7e.jpg",
  omlocket3:
    "https://i.pinimg.com/736x/19/31/2d/19312d3d0f42bfb21c8fa8c3a24491aa.jpg",
  omlocket4:
    "https://i.pinimg.com/1200x/ac/85/19/ac8519c4c4f302f3ac7452bdf2d1b268.jpg",
  omlocket5:
    "https://i.pinimg.com/1200x/88/d9/b5/88d9b53db32d6b005a538239eed320bf.jpg",
  omlocket6:
    "https://i.pinimg.com/736x/9f/3f/97/9f3f9781c22403bcc2aa8e97f9647cec.jpg",
  omlocket7:
    "https://i.pinimg.com/1200x/46/7b/74/467b74523ba8a8c163b09dcc0b55c2c0.jpg",
  omlocket8:
    "https://i.pinimg.com/1200x/87/b0/95/87b0955e157dddf619f440d1db54bb5a.jpg",
  omlocket9:
    "https://i.pinimg.com/736x/4d/e6/88/4de688155e927730d96ce744dbd2d507.jpg",
  omlocket10:
    "https://i.pinimg.com/1200x/95/56/e8/9556e89db1e98ff15020cb7c7bdee1c4.jpg",
  omlocket11:
    "https://i.pinimg.com/736x/cb/b3/9b/cbb39b37ebbb965fe8cd2beaa10b0f4e.jpg",
  omlocket12:
    "https://i.pinimg.com/1200x/ed/51/f0/ed51f064cd7aa3884900c00f9f446cd9.jpg",
  omlocket13:
    "https://i.pinimg.com/736x/ed/d0/93/edd0936cde0bb2bff1503bc958be0afc.jpg",
  omlocket14:
    "https://i.pinimg.com/1200x/05/11/1d/05111d836f7100fb10edec1337aa41ce.jpg",
  omlocket15:
    "https://i.pinimg.com/1200x/31/16/4c/31164cede93575d3864fdc67d39f8343.jpg",
  omlocket16:
    "https://i.pinimg.com/736x/ef/dd/99/efdd992f7e2b36eba5cac63c022d9880.jpg",
  omlocket17:
    "https://i.pinimg.com/1200x/7f/4e/d6/7f4ed6c9464242993d107858b4bf2eaf.jpg",
  omlocket18:
    "https://i.pinimg.com/1200x/57/59/04/5759049863a9c7bcb24192e6a94abe8f.jpg",
  omlocket19:
    "https://i.pinimg.com/1200x/9f/73/c0/9f73c04bee617e4693a7d2c9e87fc253.jpg",
  omlocket20:
    "https://i.pinimg.com/736x/52/3b/e4/523be4e5e70ec09a48d6f838881e94a3.jpg",
  omlocket21:
    "https://i.pinimg.com/736x/29/de/9a/29de9a52e0ba68434867dd04b2e4694d.jpg",
  omlocket22:
    "https://i.pinimg.com/736x/af/09/5c/af095c88d0ed0dd18e9a2762226ab661.jpg",
  omlocket23:
    "https://i.pinimg.com/736x/ae/4d/5f/ae4d5fe9b576109ad05949c6070f23e7.jpg",
  omlocket24:
    "https://i.pinimg.com/1200x/93/47/8e/93478edd6ab8f2d8494e4d723dcccd9c.jpg",
  omlocket25:
    "https://i.pinimg.com/1200x/04/3a/bd/043abdd04b261ed1b3c9c3a7931275eb.jpg",
  omlocket26:
    "https://i.pinimg.com/736x/1f/54/f5/1f54f56a15788224545b64e53677e87a.jpg",
  omlocket27:
    "https://i.pinimg.com/736x/f6/79/a4/f679a40e986dc78c49f3d5dba14f5bb7.jpg",
  omlocket28:
    "https://i.pinimg.com/736x/c5/46/71/c5467138a7a3134615eb379e132988e5.jpg",
  omlocket29:
    "https://i.pinimg.com/736x/da/4e/01/da4e0143c7816b21ea0188b513b1bb7e.jpg",
  omlocket30:
    "https://i.pinimg.com/736x/5d/f7/67/5df767837e2cda9327a6ec059e22c233.jpg",
  omlocket31:
    "https://i.pinimg.com/1200x/04/a4/27/04a427c80718043b46aee742fe30b801.jpg",
  omlocket32:
    "https://i.pinimg.com/1200x/17/d1/02/17d102903dc322c2a8d92208a826631e.jpg",
  omlocket33:
    "https://i.pinimg.com/1200x/fe/ff/45/feff45702b0485d387b7b74908934da7.jpg",
  omlocket34:
    "https://i.pinimg.com/736x/ce/d3/03/ced3035d9ca5fe6b74b36cb6fda375f9.jpg",
  omlocket35:
    "https://i.pinimg.com/736x/1d/f2/bb/1df2bb6aeec224b28a3b9bfd427cf31c.jpg",
  omlocket36:
    "https://i.pinimg.com/736x/4d/e6/88/4de688155e927730d96ce744dbd2d507.jpg",

  maalocket:
    "https://i.pinimg.com/1200x/7c/6c/f3/7c6cf35d6489ff8d4734897018ea3330.jpg",
  maalocket1:
    "https://i.pinimg.com/736x/8a/ab/d1/8aabd116d11d4377b1a7fd7f99eeae2d.jpg",
  maalocket2:
    "https://i.pinimg.com/736x/c5/f7/64/c5f764660fdff1ef7db826791486fd09.jpg",
  maalocket3:
    "https://i.pinimg.com/1200x/31/cd/6a/31cd6aab02e225af007a1e20140f3376.jpg",
  maalocket4:
    "https://i.pinimg.com/1200x/bf/e6/7f/bfe67fc59a26607d7221612ab3ac3fcd.jpg",
  maalocket5:
    "https://i.pinimg.com/1200x/83/e8/f7/83e8f70fd2919c4e596faeaae192b416.jpg",
  maalocket6:
    "https://i.pinimg.com/1200x/e0/c0/80/e0c0802eb90dfa651acafc4bc2fed093.jpg",
  maalocket7: "https://i.pinimg.com/1200x/d8/04/06/d80406acb739f258abcce64014702fee.jpg",
  maalocket10: "https://i.pinimg.com/1200x/80/62/e7/8062e7cee8fe80e7e0f7fc7dc0c04da0.jpg",
  maalocket13: "https://i.pinimg.com/736x/69/47/17/69471789a62946a380085f68e3127000.jpg",
  maalocket16: "https://i.pinimg.com/1200x/61/59/97/615997ecbfe5cbca132afd3a0beef81e.jpg",
  maalocket19: "https://i.pinimg.com/736x/87/78/32/87783230fb9737d51af4e8a4d2eec07a.jpg",
  maalocket22: "https://i.pinimg.com/1200x/17/12/c7/1712c7bcbd80fabb07570b98147e162b.jpg",
  maalocket25: "https://i.pinimg.com/1200x/ca/48/87/ca4887bb4e86d9933fe2898d354e2f61.jpg",
  maalocket28: "https://i.pinimg.com/1200x/11/0a/50/110a5008e614a9a1815790cf0b6f56f5.jpg",
  maalocket31: "https://i.pinimg.com/1200x/cc/1f/1b/cc1f1b6b2070ebfb904935479b918316.jpg",
  maalocket34: "https://i.pinimg.com/1200x/80/54/d4/8054d4c98c5f22080061d354dfe50c06.jpg",

  gurjarlocket:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnU9nkyBr25baPSrVubFTfnrXM2b3IfBL-_w&s",
  gurjarlocket4:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBstJDE_V_zqcYgcsv1p8IGsX7TwhVY24Cg&s",
  gurjarlocket7:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3XdR8oKOeqVYL75rm_Z99qyWsO50P4BBHA&s",
  gurjarlocket10:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5vwBuiQ8K6PBAibYTuEjG-HjEKHhgiZA6g&s",
  gurjarlocket13:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Nq_C3qXIGQ2yDZ0CuFM8KXX-J_A9mIJ_TA&s",
  gurjarlocket16:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MPTB0q75Mzxgls0yDD7C2ucmpYBiBzYq0A&s",
  gurjarlocket19:
    "https://i.pinimg.com/474x/12/1a/ae/121aaef2c86350025e0b25d86bdf0688.jpg?nii=t",

  mkada:
    "https://i.pinimg.com/1200x/54/f3/12/54f3124fff0941b91099c3bce829ef86.jpg",
  mkada2:
    "https://i.pinimg.com/736x/e1/ae/6d/e1ae6d1b6f3296d4f4ac4633d4044ab3.jpg",
  mkada3:
    "https://i.pinimg.com/1200x/08/37/d4/0837d433df3d1ac805d6f8948b69d5cd.jpg",
  mkada4:
    "https://i.pinimg.com/736x/b3/b2/cc/b3b2cc032c96297975974cea80fc3fd8.jpg",
  mkada5:
    "https://i.pinimg.com/736x/f8/75/8a/f8758a72ba65d1f03a1d20639d679914.jpg",
  mkada6:
    "https://i.pinimg.com/736x/68/f7/27/68f7278fbdffef4b95fdf439c3485d7a.jpg",
  mkada7:
    "https://i.pinimg.com/1200x/a3/41/91/a341919a6b1979f3c40baad6caf1f9e1.jpg",
  mkada8:
    "https://i.pinimg.com/1200x/be/c3/83/bec383c5cc2410d0b194b16870c5c064.jpg",
  mkada9:
    "https://i.pinimg.com/1200x/0c/9c/c2/0c9cc27ccd443adacc51fb4aa6cc9729.jpg",
  mkada10:
    "https://i.pinimg.com/736x/2e/5c/08/2e5c08d6505785a2026abece31cec080.jpg",
  mkada11:
    "https://i.pinimg.com/736x/62/82/5a/62825af67fa6d625e3093c847366a01b.jpg",
  mkada12:
    "https://i.pinimg.com/736x/30/3f/19/303f194fe5638f73b80e1cda66ffef21.jpg",
  mkada13:
    "https://i.pinimg.com/1200x/42/bc/54/42bc546f85d439bc7975ce7386754f3d.jpg",
  mkada14:
    "https://i.pinimg.com/736x/ab/51/24/ab51246ea16d51d0e23b5e7e632eb3b3.jpg",
  mkada15:
    "https://i.pinimg.com/736x/be/e3/fc/bee3fc243d0a93add8351770238ed4b9.jpg",
  mkada16:
    "https://i.pinimg.com/1200x/d5/41/0e/d5410e6bc5bb36febd30265e2c1638a5.jpg",
  mkada17:
    "https://i.pinimg.com/736x/f1/61/0b/f1610bfc02adf416dc0c497419340551.jpg",
  mkada18:
    "https://i.pinimg.com/736x/2f/da/b6/2fdab6f0b8326a6bc057c059a3fdc375.jpg",
  mkada19:
    "https://i.pinimg.com/736x/d8/ec/70/d8ec70c0714609666ce5ba4c98e8da04.jpg",
  mkada20:
    "https://i.pinimg.com/736x/9f/3a/57/9f3a5701af9ecfb72b4fd705819e77c0.jpg",
  mkada21:
    "https://i.pinimg.com/736x/73/2a/bf/732abf0e629df39daa408be42f15eb10.jpg",
  mkada22:
    "https://i.pinimg.com/736x/af/0a/39/af0a39f00318a3b578440644f2bd029b.jpg",
  mkada23:
    "https://i.pinimg.com/1200x/c0/fa/32/c0fa32cb87b95550bba2925ad8baeee3.jpg",
  mkada24:
    "https://i.pinimg.com/736x/b1/5f/4a/b15f4a5568c17b660cf6cc60939b5580.jpg",
  mkada25:
    "https://i.pinimg.com/1200x/65/2f/30/652f30c507e412669defa5419d4d0ee0.jpg",
  mkada26:
    "https://i.pinimg.com/1200x/ec/19/57/ec195713b1cb0ca06918d70ed62ab0eb.jpg",
  mkada27:
    "https://i.pinimg.com/736x/ab/51/24/ab51246ea16d51d0e23b5e7e632eb3b3.jpg",
  mkada28:
    "https://i.pinimg.com/1200x/7e/9c/67/7e9c672a527277f9b561e0a9b2298338.jpg",
  mkada29:
    "https://i.pinimg.com/1200x/39/1e/84/391e84fbd6eb05b551eaff8732e8ed8b.jpg",
  mkada30:
    "https://i.pinimg.com/736x/73/2a/bf/732abf0e629df39daa408be42f15eb10.jpg",
  mkada31:
    "https://i.pinimg.com/1200x/48/12/3c/48123c8a7d0854b045295473afe0b44c.jpg",
  mkada32:
    "https://i.pinimg.com/736x/9e/72/69/9e72696bd0cf40dd050d781345f909de.jpg",
  mkada33:
    "https://i.pinimg.com/1200x/03/2d/37/032d3713f03aef454cc007ca8fcae38c.jpg",
  mkada34:
    "https://i.pinimg.com/1200x/37/08/a3/3708a3324e669edfa3df326a91e0a55b.jpg",
  mkada35:
    "https://i.pinimg.com/1200x/7f/84/df/7f84df7b88db7f3cbc4d03377b1818d6.jpg",
  mkada36:
    "https://i.pinimg.com/1200x/53/06/1a/53061acf60af2846f2d7fc7c12dd7f68.jpg",
  mkada37:
    "https://i.pinimg.com/1200x/01/a9/61/01a961dbba19e600a3bb61ce22b906eb.jpg",
  mkada38:
    "https://i.pinimg.com/1200x/5a/d3/86/5ad386f9834ba9d214ad8591e353f8dd.jpg",
  mkada39:
    "https://i.pinimg.com/736x/c2/1e/78/c21e78e74d4d115425d15f3979f88b34.jpg",
  mkada40:
    "https://i.pinimg.com/736x/5d/dc/42/5ddc42ca598d0f143828403b3203c474.jpg",
  mkada41:
    "https://i.pinimg.com/1200x/e5/92/79/e59279ccd01a51a9cd2bda0891d27196.jpg",
  mkada42:
    "https://i.pinimg.com/1200x/50/51/af/5051af654b96ffea9840f13143dada0e.jpg",
  mkada43:
    "https://i.pinimg.com/736x/c4/98/c2/c498c2b125789024c47351e5873e5bca.jpg",
  mkada44:
    "https://i.pinimg.com/1200x/53/a9/8a/53a98ac94a68e486d33aaae2fe6cf342.jpg",
  mkada45:
    "https://i.pinimg.com/736x/1b/bb/f0/1bbbf025dc50f088cc8aaf5afb965aa0.jpg",
  mkada46:
    "https://i.pinimg.com/1200x/ab/73/8a/ab738a82dd2b232d2fbdc41afd2466c5.jpg",
  mkada47:
    "https://i.pinimg.com/1200x/03/ec/12/03ec12bbfb5dece41c9499587a5871a7.jpg",
  mkada48:
    "https://i.pinimg.com/236x/8a/43/34/8a433468e6cf5d91a2817eca3618bfce.jpg",

  wbracelets:
    "https://i.pinimg.com/736x/eb/fe/0f/ebfe0fca41870abcb4c804c444766d6c.jpg",
  wbracelets2:
    "https://i.pinimg.com/736x/ce/8f/76/ce8f763e35ec925e6b161ca9e48b2ede.jpg",
  wbracelets3:
    "https://i.pinimg.com/736x/d8/2b/27/d82b277f6fc177d7120c2cd44345320d.jpg",
  wbracelets4:
    "https://i.pinimg.com/736x/3b/ae/83/3bae83c73e2ecee62d14cbe47e9344aa.jpg",
  wbracelets5:
    "https://i.pinimg.com/736x/b2/ad/c1/b2adc19a23c423362cd5b772b907bc20.jpg",
  wbracelets6:
    "https://i.pinimg.com/736x/1c/a2/06/1ca206019f694e14d711577dd9693f68.jpg",
  wbracelets7:
    "https://i.pinimg.com/1200x/7f/e4/fb/7fe4fbacc903f55e9025be9c78e9d465.jpg",
  wbracelets8:
    "https://i.pinimg.com/1200x/fe/03/8e/fe038ef558b4d94243167c61a1db4ef3.jpg",
  wbracelets9:
    "https://i.pinimg.com/736x/7c/56/d0/7c56d079b208e902902841dcb1fbe53e.jpg",
  wbracelets10:
    "https://i.pinimg.com/control1/1200x/53/08/25/53082528bb9bae0a1cd93fae879f422c.jpg",
  wbracelets11:
    "https://i.pinimg.com/1200x/d3/5e/5f/d35e5fe0721a3bb7497bf41e5980958c.jpg",
  wbracelets12:
    "https://i.pinimg.com/1200x/2d/ff/62/2dff626c8f0fab61f5ec77180729fdb1.jpg",
  wbracelets13:
    "https://i.pinimg.com/736x/ce/8f/76/ce8f763e35ec925e6b161ca9e48b2ede.jpg",
  wbracelets14:
    "https://i.pinimg.com/736x/9e/32/71/9e3271525628fd2421b710bb9e1c4c7d.jpg",
  wbracelets15:
    "https://i.pinimg.com/control1/736x/29/85/5d/29855d2c229338bf31163b5dcc2ceba3.jpg",
  wbracelets16:
    "https://i.pinimg.com/control1/736x/1b/76/dc/1b76dc9805aa77678c0d239cc90e71ce.jpg",
  wbracelets17:
    "https://i.pinimg.com/736x/25/22/35/2522359901f1a3f6ee2a401fe4dc166c.jpg",
  wbracelets18:
    "https://i.pinimg.com/736x/fd/25/d3/fd25d3f24649fe291a0a7d77d97f8665.jpg",
  wbracelets19:
    "https://i.pinimg.com/1200x/4a/20/72/4a2072f63b329fec1aec30ff4edd3b62.jpg",
  wbracelets20:
    "https://i.pinimg.com/1200x/7a/c9/09/7ac9092126c25af5924cca6ec48d5a1c.jpg",
  wbracelets21:
    "https://i.pinimg.com/736x/ea/b7/6e/eab76e5607a8331cc637a1af17382d77.jpg",
  wbracelets22:
    "https://i.pinimg.com/736x/3b/ae/83/3bae83c73e2ecee62d14cbe47e9344aa.jpg",
  wbracelets23:
    "https://i.pinimg.com/736x/b2/ad/c1/b2adc19a23c423362cd5b772b907bc20.jpg",
  wbracelets24:
    "https://i.pinimg.com/control1/1200x/8e/02/3a/8e023aadc0e5e58a298d946c9511a67f.jpg",
  wbracelets25:
    "https://i.pinimg.com/1200x/85/a4/38/85a4383acf41e187e75dad81003aa025.jpg",
  wbracelets26:
    "https://i.pinimg.com/736x/fd/1a/53/fd1a53a3da79e82f0d5a014b5650b9d9.jpg",
  wbracelets27:
    "https://i.pinimg.com/736x/b5/ca/ec/b5caec4c63c906f64d07d64c0e314e81.jpg",
  wbracelets28:
    "https://i.pinimg.com/736x/d8/1e/44/d81e443143c6cc5a24f3cf3e286c6191.jpg",
  wbracelets29:
    "https://i.pinimg.com/736x/ae/56/e4/ae56e42307f016043850abcac2494b72.jpg",
  wbracelets30:
    "https://i.pinimg.com/736x/c6/04/e8/c604e8da38cee7a1f84004b0be16e417.jpg",
  wbracelets31:
    "https://i.pinimg.com/736x/16/44/a0/1644a008e392b9035e5a4cbdec562fe1.jpg",
  wbracelets32:
    "https://i.pinimg.com/1200x/5b/cf/d0/5bcfd06b88b0385fe8dfbaf207c2943b.jpg",
  wbracelets33:
    "https://i.pinimg.com/736x/c9/2d/36/c92d36bb5de8864b898be3b8aee6cc89.jpg",
  wbracelets34:
    "https://i.pinimg.com/736x/0e/6f/88/0e6f88cff8fff1350931416ea98cf891.jpg",
  wbracelets35:
    "https://i.pinimg.com/736x/c0/55/6b/c0556b47993d960c832609be86ad469d.jpg",
  wbracelets36:
    "https://i.pinimg.com/736x/d3/5c/dd/d35cdd95bd8d742a673148e00c273032.jpg",
  wbracelets37:
    "https://i.pinimg.com/736x/14/42/23/144223df43327b002acd5cd21b816622.jpg",
  wbracelets38:
    "https://i.pinimg.com/736x/c7/ec/bb/c7ecbb751c3e9d39bd452ee1171bf11f.jpg",
  wbracelets39:
    "https://i.pinimg.com/736x/d8/2b/27/d82b277f6fc177d7120c2cd44345320d.jpg",
  wbracelets40:
    "https://i.pinimg.com/1200x/ab/c0/c9/abc0c952b70df8b7f9a25731a0ce8487.jpg",
  wbracelets41:
    "https://i.pinimg.com/736x/58/39/f2/5839f2c6619e2ae463e0d0c74784c4c3.jpg",
  wbracelets42:
    "https://i.pinimg.com/1200x/d9/19/b7/d919b7aa04248ca9bfdb8cef611793f4.jpg",
  wbracelets43:
    "https://i.pinimg.com/736x/ac/cc/46/accc467e4097b58750dc2039a3f9baff.jpg",
  wbracelets44:
    "https://i.pinimg.com/1200x/57/0e/92/570e923d2f3c39932a3aa05b96ee922a.jpg",
  wbracelets45:
    "https://i.pinimg.com/736x/41/7d/aa/417daa0c3b86a7375fa8c4d0998084ec.jpg",
  wbracelets46:
    "https://i.pinimg.com/736x/9f/4b/c8/9f4bc82dacb94f4b3319300cd4a92306.jpg",
  wbracelets47:
    "https://i.pinimg.com/1200x/3a/41/f8/3a41f8bb79bf253f76ca560430f96259.jpg",
  wbracelets48:
    "https://i.pinimg.com/736x/09/99/2c/09992cfa49d11bb5b69c98d94d939396.jpg",

  mbracelets:
    "https://i.pinimg.com/1200x/6c/63/ea/6c63eaaa4169da7d9a471e97f8da7b98.jpg",
  mbracelets2:
    "https://i.pinimg.com/1200x/40/55/c3/4055c355b4c2706152b4b8a3193b54ab.jpg",
  mbracelets3:
    "https://i.pinimg.com/1200x/9e/ea/d7/9eead7dfe47e422969b0e4a74d769ef1.jpg",
  mbracelets4:
    "https://i.pinimg.com/1200x/74/01/f7/7401f73014b222ee40932a00fdebfdbf.jpg",
  mbracelets5:
    "https://i.pinimg.com/736x/c1/cd/38/c1cd38c8a46d693e4136692626358279.jpg",
  mbracelets6:
    "https://i.pinimg.com/1200x/74/b5/c2/74b5c23c99b9373776e79a841bcaa683.jpg",
  mbracelets7:
    "https://i.pinimg.com/736x/38/5a/80/385a8020d9e3112c101365e8102b9847.jpg",
  mbracelets8:
    "https://i.pinimg.com/1200x/2f/47/98/2f4798e77875a1e108a60d22c9a9d643.jpg",
  mbracelets9:
    "https://i.pinimg.com/1200x/7a/f0/8f/7af08ff1da4982f49deecc65560ef23a.jpg",
  mbracelets10:
    "https://i.pinimg.com/1200x/12/dd/2d/12dd2dfe38b8609746d5067828774bbd.jpg",
  mbracelets11:
    "https://i.pinimg.com/1200x/36/12/45/361245685ed226c7c3a03fb80cc325ae.jpg",
  mbracelets12:
    "https://i.pinimg.com/1200x/cc/63/23/cc63236254c394422e8cad35c754ddde.jpg",
  mbracelets13:
    "https://i.pinimg.com/1200x/da/d2/c8/dad2c84802ecbf5868db502ea6ff4370.jpg",
  mbracelets14:
    "https://i.pinimg.com/1200x/8a/31/4b/8a314baa24b49baf899945fa18af6596.jpg",
  mbracelets15:
    "https://i.pinimg.com/1200x/b5/ff/06/b5ff0676f4efb19c17d1f0178af79616.jpg",
  mbracelets16:
    "https://i.pinimg.com/1200x/39/07/18/3907188bdac4a2ecd33938b176fdb921.jpg",
  mbracelets17:
    "https://i.pinimg.com/736x/b4/20/79/b4207967ef5c59b71adf82c1b34ea379.jpg",
  mbracelets18:
    "https://i.pinimg.com/1200x/0e/7e/b1/0e7eb14d0fd3ad682fc50c3feb87c9b5.jpg",
  mbracelets19:
    "https://i.pinimg.com/1200x/a5/19/19/a51919909c5e6136269ba7159804245d.jpg",
  mbracelets20:
    "https://i.pinimg.com/1200x/49/d1/b5/49d1b5c0835dd74fe67c061830dbe1ad.jpg",
  mbracelets21:
    "https://i.pinimg.com/1200x/a8/7c/42/a87c420ef49b838de963b20020a09d6c.jpg",
  mbracelets22:
    "https://i.pinimg.com/1200x/75/1f/d5/751fd53096ab339b06dc0f423c3868a3.jpg",
  mbracelets23:
    "https://i.pinimg.com/1200x/b6/ca/04/b6ca043368266defe0c3c80610403332.jpg",
  mbracelets24:
    "https://i.pinimg.com/1200x/9e/41/38/9e4138f219810e06fb2b5f93a6fc54c0.jpg",
  mbracelets25:
    "https://i.pinimg.com/736x/3d/0a/b8/3d0ab885e90eda322e9799871d2189bd.jpg",
  mbracelets26:
    "https://i.pinimg.com/1200x/c3/4a/34/c34a348087d9d08413809c40885a729d.jpg",
  mbracelets27:
    "https://i.pinimg.com/1200x/fc/9b/1f/fc9b1f2d649f5355a235563ec25821d8.jpg",
  mbracelets28:
    "https://i.pinimg.com/1200x/a7/b6/17/a7b6171a171a73823c74cb1e997e1fa5.jpg",
  mbracelets29:
    "https://i.pinimg.com/1200x/4c/d5/06/4cd506c8536de15c9a7ed991460b2f24.jpg",
  mbracelets30:
    "https://i.pinimg.com/1200x/3c/47/70/3c4770b2d682b79527ce10c9a95ac056.jpg",
  mbracelets31:
    "https://i.pinimg.com/1200x/2d/a2/cb/2da2cb1822651e6d9c1de6a776f6b737.jpg",
  mbracelets32:
    "https://i.pinimg.com/1200x/ee/42/23/ee4223604a7eb253f4020a64c24ee42f.jpg",
  mbracelets33:
    "https://i.pinimg.com/1200x/0e/4b/70/0e4b706f919111a10cfc52d42e62aafd.jpg",
  mbracelets34:
    "https://i.pinimg.com/1200x/c1/47/cf/c147cfb98ae165e3f5a836f389a4a5bc.jpg",
  mbracelets35:
    "https://i.pinimg.com/736x/e6/55/2e/e6552e2970eabb2ed8adf20ef8e503bf.jpg",
  mbracelets36:
    "https://i.pinimg.com/736x/25/70/cf/2570cf06424f221a4ef6102c5ae834e4.jpg",
  mbracelets37:
    "https://i.pinimg.com/736x/d1/2a/5d/d12a5d219c3230d3f884e297b3ffc85c.jpg",
  mbracelets38:
    "https://i.pinimg.com/1200x/bb/9c/ea/bb9cea9236120cc1f6addbf92d460148.jpg",
  mbracelets39:
    "https://i.pinimg.com/1200x/08/d0/44/08d0440d28456353c55f9c595d8c5037.jpg",
  mbracelets40:
    "https://i.pinimg.com/1200x/a7/1e/31/a71e31b38bc2b79f1f34064d658e19c3.jpg",
  mbracelets41:
    "https://i.pinimg.com/1200x/ef/1c/0c/ef1c0cf6e05b376866179c7a5d7dfb54.jpg",
  mbracelets42:
    "https://i.pinimg.com/1200x/98/bb/34/98bb3402e6f436508ed539b0e216adf5.jpg",
  mbracelets43:
    "https://i.pinimg.com/1200x/80/31/e6/8031e6e224f170cbe84d82beb5c4e97b.jpg",
  mbracelets44:
    "https://i.pinimg.com/1200x/19/44/07/194407dd86f309bdef7e18d842b3cb2b.jpg",
  mbracelets45:
    "https://i.pinimg.com/1200x/e2/cd/52/e2cd52deff997f34c96b51d296fc713e.jpg",
  mbracelets46:
    "https://i.pinimg.com/1200x/39/45/ef/3945ef389beb9ace7200329e26e42bd7.jpg",

  mbracelets47:
    "https://i.pinimg.com/1200x/6f/7f/56/6f7f568f9547e6c8211422697786f32c.jpg",
  mbracelets48:
    "https://i.pinimg.com/1200x/d6/2f/4b/d62f4b4211f6ef7b3b27ee29623d3314.jpg",
  mbracelets49:
    "https://i.pinimg.com/1200x/19/ae/79/19ae79237b52df9828dc9f8d1f1a2be4.jpg",

  mbali:
    "https://i.pinimg.com/1200x/d5/72/db/d572db50fdf5bc456242f14d1d9c764c.jpg",
  mbali2:
    "https://i.pinimg.com/736x/8f/bf/8e/8fbf8e49ca44ff3f9af5a0baf1a0a345.jpg",
  mbali3:
    "https://i.pinimg.com/1200x/15/17/cc/1517cc4843bb00f6e4d47443614081fb.jpg",
  mbali4:
    "https://i.pinimg.com/736x/ab/2d/1d/ab2d1d9cf40a51ba7341d9105d094a44.jpg",
  mbali5:
    "https://i.pinimg.com/1200x/82/a8/d0/82a8d09453a9787093efbc925188db25.jpg",
  mbali6:
    "https://i.pinimg.com/1200x/89/40/aa/8940aa2b5ae4a8c48466f233a48712fc.jpg",
  mbali7:
    "https://i.pinimg.com/736x/65/d5/05/65d505541b14d3df7ba9c852c09477cf.jpg",
  mbali8:
    "https://i.pinimg.com/1200x/0d/71/a5/0d71a5e07872a8555ed64d064adf4f6e.jpg",
  mbali9:
    "https://i.pinimg.com/1200x/1e/f3/8e/1ef38e00529d721c206a8ec9dac35544.jpg",
  mbali10:
    "https://i.pinimg.com/1200x/82/a8/d0/82a8d09453a9787093efbc925188db25.jpg",
  mbali11:
    "https://i.pinimg.com/1200x/2a/86/05/2a860596ac52f4b86730b3ea94cbb834.jpg",
  mbali12:
    "https://i.pinimg.com/1200x/82/a8/d0/82a8d09453a9787093efbc925188db25.jpg",
  mbali13:
    "https://i.pinimg.com/1200x/79/fd/87/79fd874e98935e88d17f005c4ac35e04.jpg",
  mbali14:
    "https://i.pinimg.com/736x/75/74/4f/75744f7be6335eca3c75458d437992e0.jpg",
  mbali15:
    "https://i.pinimg.com/1200x/d5/72/db/d572db50fdf5bc456242f14d1d9c764c.jpg",
  mbali16:
    "https://i.pinimg.com/1200x/3d/9c/a5/3d9ca506662f64c0bb4ea53be6495293.jpg",
  mbali17:
    "https://i.pinimg.com/1200x/a2/27/58/a2275884a0ee78b43cca3bef576e5da5.jpg",
  mbali18:
    "https://i.pinimg.com/736x/fe/2f/55/fe2f55488a271c395c2daa0b5797d729.jpg",
  mbali19:
    "https://i.pinimg.com/1200x/85/c1/17/85c117c8c3a61d4d35c7c43aaf2c97f9.jpg",
  mbali20:
    "https://www.muteyaar.com/wp-content/uploads/2023/03/J0713-scaled.jpg",
  mbali21:
    "https://www.roopdarshan.co.nz/cdn/shop/files/DSC_9256-Photoroom.jpg?v=1746832769",
  mbali22:
    "https://i.pinimg.com/1200x/64/01/71/640171c4e09ccf076f5b99912c29caf4.jpg",
  mbali23:
    "https://i.pinimg.com/736x/c0/88/94/c08894a11aea13c3e11d6e66f9876a4d.jpg",
  mbali24:
    "https://i.pinimg.com/736x/e9/9e/32/e99e32e99221bcc5fc1812b14fc9206b.jpg",
  mbali25:
    "https://i.pinimg.com/1200x/f3/35/49/f33549e081632864dd11a2a1a0b01842.jpg",
  mbali26:
    "https://i.pinimg.com/1200x/0c/43/36/0c4336f731a8d47bb9ce473475652662.jpg",
  mbali27:
    "https://i.pinimg.com/736x/c0/88/94/c08894a11aea13c3e11d6e66f9876a4d.jpg",
  mbali28:
    "https://i.pinimg.com/736x/d8/27/4a/d8274aca1d79cf780fc7f66c584cf1b6.jpg",
  mbali29:
    "https://i.pinimg.com/1200x/a9/e5/dd/a9e5dda62235e397b5ae73bf9e6e7fc2.jpg",
  mbali30:
    "https://i.pinimg.com/736x/fe/2f/55/fe2f55488a271c395c2daa0b5797d729.jpg",
  mbali31:
    "https://i.pinimg.com/1200x/41/cf/92/41cf929379b51e993c4761159058c802.jpg",
  mbali32:
    "https://i.pinimg.com/1200x/b8/d1/53/b8d153427582905c40e592e406b6b2f0.jpg",
  mbali33:
    "https://i.pinimg.com/736x/b3/69/4b/b3694bdf04a839cec5ecb6898e6ed1e4.jpg",
  mbali34:
    "https://i.pinimg.com/1200x/f3/35/49/f33549e081632864dd11a2a1a0b01842.jpg",
  mbali35:
    "https://i.pinimg.com/1200x/df/47/a8/df47a8d77e1d03b8b4c4387eaa12762a.jpg",
  mbali36:
    "https://i.pinimg.com/1200x/56/98/fc/5698fc6ac030d80522733c7001ca0cda.jpg",
  mbali37:
    "https://i.pinimg.com/1200x/59/49/e1/5949e1c21790bb60452febac809d717d.jpg",
  mbali38:
    "https://i.pinimg.com/736x/ab/06/fc/ab06fc54b9b0b1c2208c35e8bf0855fa.jpg",
  mbali39:
    "https://i.pinimg.com/1200x/f9/19/8d/f9198d8c6b259ebb037efafc5d286198.jpg",
  mbali40:
    "https://i.pinimg.com/1200x/34/32/b8/3432b8950bbc1fe3862a3742b12c9f13.jpg",
  mbali41:
    "https://i.pinimg.com/736x/1b/20/f9/1b20f91f179359bf5156db9ad297f8eb.jpg",
  mbali41:
    "https://i.pinimg.com/736x/86/0a/4a/860a4a6cd9ee03cf4d672e1b93aecb91.jpg",
  mbali42:
    "https://i.pinimg.com/1200x/54/55/0b/54550b306b54df6f633540c47aeb006f.jpg",
  mbali43:
    "https://i.pinimg.com/1200x/a9/e5/dd/a9e5dda62235e397b5ae73bf9e6e7fc2.jpg",
  mbali44:
    "https://i.pinimg.com/1200x/54/37/1c/54371cc120c3c91ce0e57d0849e90993.jpg",
  mbali45:
    "https://i.pinimg.com/1200x/d0/c5/c1/d0c5c1b16e47d54525a03acc07925b49.jpg",
  mbali46:
    "https://i.pinimg.com/736x/d8/27/4a/d8274aca1d79cf780fc7f66c584cf1b6.jpg",
  mbali47:
    "https://i.pinimg.com/736x/5f/6f/95/5f6f95959653d5e6bd1c343d53742acf.jpg",
  mbali48:
    "https://i.pinimg.com/736x/c0/cc/20/c0cc20f17ef4e1ff03cf45d8390d0d23.jpg",

  wmali:
    "https://i.pinimg.com/736x/6d/0e/a6/6d0ea6ff563158d87166a3302ff84749.jpg",
  wmali2:
    "https://i.pinimg.com/1200x/43/59/09/4359093c545004cfe777ea037351d152.jpg",
  wmali3:
    "https://i.pinimg.com/736x/12/1f/66/121f6650752aeb46dc695de9be6558f9.jpg",
  wmali4:
    "https://i.pinimg.com/1200x/f2/af/83/f2af836c6650a6ab771803ae3a7b4d03.jpg",
  wmali5:
    "https://i.pinimg.com/736x/cc/1f/9b/cc1f9b5dcfb94281237a93f50bc9f313.jpg",
  wmali6:
    "https://i.pinimg.com/736x/b2/d0/69/b2d0694015b4c194bc056ed109aa3500.jpg",
  wmali7:
    "https://i.pinimg.com/736x/3a/33/85/3a33850171ff24ee8e9fc66178301e4d.jpg",
  wmali8:
    "https://i.pinimg.com/1200x/5a/38/86/5a3886579ff1ea6918168b6fb6fcf923.jpg",
  wmali9:
    "https://i.pinimg.com/1200x/2a/ea/19/2aea19ad0b28d501b8343e0dd23a97d2.jpg",
  wmali10:
    "https://i.pinimg.com/736x/15/53/60/1553607d29144962c90a137a2a6d1096.jpg",
  wmali11:
    "https://i.pinimg.com/736x/5f/cd/b1/5fcdb1198b644f9152fc7256232ff438.jpg",
  wmali12:
    "https://i.pinimg.com/1200x/07/36/40/073640e5c7a871d1a11a7fbfd39cd453.jpg",
  wmali13:
    "https://i.pinimg.com/control1/736x/cd/eb/37/cdeb37ad930eeeb47ea0ce5da59cb82a.jpg",
  wmali14:
    "https://i.pinimg.com/736x/fd/df/3a/fddf3a20362fd5efdc7729045fc74118.jpg",
  wmali15:
    "https://i.pinimg.com/1200x/9f/2b/e5/9f2be5d871df4e5ec2550e1e2aa9fc2f.jpg",
  wmali16:
    "https://i.pinimg.com/736x/64/fe/96/64fe9686159642cd3ec7a2ea4ad83943.jpg",
  wmali17:
    "https://i.pinimg.com/1200x/57/6c/11/576c11a00549a08d63f8e7eb18ae3113.jpg",
  wmali18:
    "https://i.pinimg.com/1200x/64/73/65/6473650fe6c2dcf305da828ad9529c02.jpg",
  wmali19:
    "https://i.pinimg.com/1200x/56/72/91/567291ff70edb8cf8be7fd54e6b30c31.jpg",
  wmali20:
    "https://i.pinimg.com/1200x/aa/4d/d2/aa4dd2e51b1711048a0e008dcbabf226.jpg",
  wmali21:
    "https://i.pinimg.com/736x/e4/d5/ac/e4d5ac90fb9fcd342ae32dca176208c4.jpg",
  wmali22:
    "https://i.pinimg.com/736x/32/89/f1/3289f19fc627990f0fdca01385527e1a.jpg",
  wmali23:
    "https://i.pinimg.com/736x/1a/e3/0f/1ae30f3768d69940a3ffe491e1120f46.jpg",
  wmali24:
    "https://i.pinimg.com/736x/9a/55/3f/9a553fca032da4536c3370089fc81415.jpg",
  wmali25:
    "https://i.pinimg.com/736x/4d/22/77/4d2277a6b54e6e204b5489cb52c561ad.jpg",
  wmali26:
    "https://i.pinimg.com/736x/33/b2/59/33b2592916f3fdd71d4dfafe22860bb0.jpg",
  wmali27:
    "https://i.pinimg.com/736x/35/5d/de/355dde58b8becf49ccd798fe71790932.jpg",
  wmali28:
    "https://i.pinimg.com/736x/2b/9a/3c/2b9a3cdc369ca1622e5954715eb42548.jpg",
  wmali29:
    "https://i.pinimg.com/736x/95/b7/3e/95b73e4b57c5a54d6bcdd54020ab2570.jpg",
  wmali30:
    "https://i.pinimg.com/736x/b5/a7/29/b5a729f68ffb1cfb09c1afa96305c718.jpg",
  wmali31:
    "https://i.pinimg.com/736x/96/00/fa/9600fa58c08a4187ed22787cc0856fdc.jpg",
  wmali32:
    "https://i.pinimg.com/1200x/00/5e/b8/005eb8243c0cfe81e5426fbd058da42c.jpg",
  wmali33:
    "https://i.pinimg.com/1200x/50/1b/8a/501b8a44ea712ed0ae309c37fb87e76e.jpg",
  wmali34:
    "https://i.pinimg.com/736x/a8/23/c9/a823c90714b4c680679ef3ff49185bb9.jpg",
  wmali35:
    "https://i.pinimg.com/1200x/a3/21/41/a32141d29812625308954798934af28d.jpg",
  wmali36:
    "https://i.pinimg.com/1200x/ec/e4/2c/ece42c332ce709db606591a00870a13e.jpg",
  wmali37:
    "https://i.pinimg.com/736x/3d/f5/5d/3df55d2d4832fa81b916cc8b260cb7d9.jpg",
  wmali38:
    "https://i.pinimg.com/736x/19/c0/58/19c0586c1a3eeb40f816df96360f5eeb.jpg",
  wmali39:
    "https://i.pinimg.com/1200x/3d/73/5f/3d735fcd2cf812a8a724210c5bf0dae7.jpg",
  wmali40:
    "https://i.pinimg.com/1200x/b9/d6/1c/b9d61c392ba1421f1a85589757845137.jpg",
  wmali41:
    "https://i.pinimg.com/1200x/37/07/58/37075809e0585476e3763e97e1e4ea4f.jpg",
  wmali42:
    "https://i.pinimg.com/736x/32/45/a0/3245a04bf287231ccc67e8c39b2df658.jpg",
  wmali43:
    "https://i.pinimg.com/1200x/e7/dd/7a/e7dd7a43b22c89bd34d7c9588a5d3f69.jpg",
  wmali44:
    "https://i.pinimg.com/1200x/fb/15/54/fb1554e1bbbb9d1c9603675ca5c7a26c.jpg",
  wmali45:
    "https://i.pinimg.com/736x/e5/1a/d7/e51ad7cc4a765df5a9b4726191b83d15.jpg",
  wmali46:
    "https://i.pinimg.com/736x/fa/5b/a8/fa5ba8561bf332a00cb8f7bc40e26315.jpg",
  wmali47:
    "https://i.pinimg.com/736x/1c/61/06/1c61064d58069deae50af44b1372bb06.jpg",
  wmali48:
    "https://i.pinimg.com/1200x/a6/52/b3/a652b3818cfc5c826582ede7c45903b9.jpg",

  wearrings:
    "https://i.pinimg.com/736x/1f/ef/e2/1fefe2356eaceb08cf515728b239fbfa.jpg",
  wearrings2:
    "https://i.pinimg.com/736x/8b/4b/36/8b4b36abd0d7abd3dc5f45d4b5bc4c3b.jpg",
  wearrings3:
    "https://i.pinimg.com/736x/f5/db/6c/f5db6c5f37abae6be28f514a8363e548.jpg",
  wearrings4:
    "https://i.pinimg.com/736x/5c/a9/68/5ca96805fa1043dded20cd8b6c09aa47.jpg",
  wearrings5:
    "https://i.pinimg.com/736x/58/37/9d/58379d888a246e9950dbaac1ba88361d.jpg",
  wearrings6:
    "https://i.pinimg.com/736x/a9/14/dc/a914dca94e3913f846832d17c59478df.jpg",
  wearrings7:
    "https://i.pinimg.com/736x/cb/a3/30/cba33082aabc8517c9680fe91c06f524.jpg",
  wearrings8:
    "https://i.pinimg.com/736x/58/37/9d/58379d888a246e9950dbaac1ba88361d.jpg",
  wearrings9:
    "https://i.pinimg.com/736x/f5/db/6c/f5db6c5f37abae6be28f514a8363e548.jpg",
  wearrings10:
    "https://i.pinimg.com/736x/c8/f9/98/c8f9982932822606c0857cf690cde1aa.jpg",
  wearrings11:
    "https://i.pinimg.com/1200x/1b/16/2a/1b162a6964eb0dbc245e56f7f6da9574.jpg",
  wearrings12:
    "https://i.pinimg.com/736x/0d/1b/4b/0d1b4b71494124d4c519258f373b93fc.jpg",
  wearrings13:
    "https://i.pinimg.com/736x/2f/b7/04/2fb704166404b4b725ae7a262b238f77.jpg",
  wearrings14:
    "https://i.pinimg.com/1200x/7e/20/fb/7e20fb9894490432ae15068f9bbf6d8f.jpg",
  wearrings15:
    "https://i.pinimg.com/1200x/7a/8f/7f/7a8f7fdedb945ec51098d8d94afae1c8.jpg",
  wearrings16:
    "https://i.pinimg.com/736x/6d/7f/b3/6d7fb3e6a1f3383a3ea2239379c2dc0a.jpg",
  wearrings17:
    "https://i.pinimg.com/736x/55/27/69/552769fab21141ee9cbcd158adf0ada6.jpg",
  wearrings18:
    "https://i.pinimg.com/control1/736x/9b/6b/33/9b6b332c93f0083f7132b329b413c7f9.jpg",
  wearrings19:
    "https://i.pinimg.com/736x/d1/be/56/d1be56e80366f728fad01163805381cb.jpg",
  wearrings20:
    "https://i.pinimg.com/736x/0d/c1/18/0dc118f6bcf92029aa2242751761c358.jpg",
  wearrings21:
    "https://i.pinimg.com/736x/30/02/d3/3002d35984ef8b1253a56a56fcf38259.jpg",
  wearrings22:
    "https://i.pinimg.com/1200x/ce/fd/c9/cefdc98ac6e9a1ae40b48a2e53d2fd09.jpg",
  wearrings23:
    "https://i.pinimg.com/736x/2f/70/5f/2f705f747c5cf7d16afd7d51aa058678.jpg",
  wearrings24:
    "https://i.pinimg.com/1200x/69/09/ad/6909ad19b388fc814e11ef2aa12d3a86.jpg",
  wearrings25:
    "https://i.pinimg.com/736x/ad/4c/e8/ad4ce851eff95e6acea22171ecbce241.jpg",
  wearrings26:
    "https://i.pinimg.com/control1/1200x/44/32/0b/44320bdad36c2eec2172a041cee4c871.jpg",
  wearrings27:
    "https://i.pinimg.com/736x/0a/8b/cd/0a8bcd7180c8ac307fe09d8314809ed0.jpg",
  wearrings28:
    "https://i.pinimg.com/736x/8e/97/ac/8e97acf09973a37b239755f612a9794e.jpg",
  wearrings29:
    "https://i.pinimg.com/1200x/2e/11/e7/2e11e7c359daaa8d3c10048c04eebd4b.jpg",
  wearrings30:
    "https://i.pinimg.com/1200x/96/a0/d3/96a0d30cce8140d07295ad05b9ee271a.jpg",
  wearrings31:
    "https://i.pinimg.com/1200x/c8/0d/37/c80d37af915933eaa4a837b8031bf11e.jpg",
  wearrings32:
    "https://i.pinimg.com/736x/e3/79/de/e379de63ffddbc05068f92d7a1d69940.jpg",
  wearrings33:
    "https://i.pinimg.com/control1/1200x/fa/5b/15/fa5b15fa5b99a0c62adb989ec76c0f22.jpg",
  wearrings34:
    "https://i.pinimg.com/736x/9c/b9/89/9cb989a317c8d73feb89d6102ab4642c.jpg",
  wearrings35:
    "https://i.pinimg.com/control1/736x/28/ce/f0/28cef08d1e10457f63c2904db714fd9b.jpg",
  wearrings36:
    "https://i.pinimg.com/1200x/66/07/da/6607daccfebade91902cfdfe08b9e628.jpg",
  wearrings37:
    "https://i.pinimg.com/736x/72/55/a6/7255a682c2564a64de42ca7a54d50269.jpg",
  wearrings38:
    "https://i.pinimg.com/1200x/ac/63/c0/ac63c02989c6132cc8ca8071a5587e6c.jpg",
  wearrings39:
    "https://i.pinimg.com/1200x/e5/3e/5e/e53e5e5f795aaa6aae080dc6c13ff7c4.jpg",
  wearrings40:
    "https://i.pinimg.com/1200x/8d/f9/7a/8df97a04de4e13c6baa7686dd5b904c9.jpg",
  wearrings41:
    "https://i.pinimg.com/736x/95/13/69/951369482a94402c25b62cd5d72b7948.jpg",
  wearrings42:
    "https://i.pinimg.com/1200x/95/25/52/9525520ae79571a8e736a6930aff5135.jpg",
  wearrings43:
    "https://i.pinimg.com/1200x/90/f6/a7/90f6a71bdb365165f6d86ad832735a84.jpg",
  wearrings44:
    "https://i.pinimg.com/736x/ad/40/54/ad40545ef826a8a1e8e02f31f117ebe1.jpg",
  wearrings45:
    "https://i.pinimg.com/736x/c2/81/09/c281093e25ae9698f132d05110a3ab77.jpg",
  wearrings46:
    "https://i.pinimg.com/736x/40/cb/ee/40cbee13638c0a0f47993b5da6187be1.jpg",
  wearrings47:
    "https://i.pinimg.com/control1/1200x/07/aa/cf/07aacf82b8d40821869315399a687fe8.jpg",
  wearrings48:
    "https://i.pinimg.com/736x/e7/52/d0/e752d0455a32fdd8dec11ac07db28d2e.jpg",

  mearring:
    "https://i.pinimg.com/1200x/e1/4f/f9/e14ff9816198d72e37f9914bc22548d5.jpg",
  mearring2:
    "https://i.pinimg.com/1200x/50/48/78/504878137b7760f53c33f016df9a9cf4.jpg",
  mearring3:
    "https://i.pinimg.com/1200x/58/c3/d7/58c3d73a10e23576765ec237e313f356.jpg",
  mearring4:
    "https://i.pinimg.com/1200x/e1/ab/c0/e1abc004aed7f8784c8a5388130540dc.jpg",
  mearring5:
    "https://i.pinimg.com/1200x/10/b1/77/10b177c92183f08fb50112585e2ea42c.jpg",
  mearring6:
    "https://i.pinimg.com/1200x/35/78/61/3578614822ed4fab692959fcee62aa45.jpg",
  mearring7:
    "https://i.pinimg.com/1200x/17/97/97/179797a7046959cdcfd766af1e85c0ea.jpg",
  mearring8:
    "https://i.pinimg.com/1200x/61/3a/bc/613abcecb1b06eded0cb9c1abcb89598.jpg",
  mearring9:
    "https://i.pinimg.com/1200x/03/19/58/031958821e49cbe2edd0de59c28bbe4f.jpg",
  mearring10:
    "https://i.pinimg.com/1200x/8d/1e/9c/8d1e9cda0d7eeb11a97361eaa60931ca.jpg",
  mearring11:
    "https://i.pinimg.com/736x/dc/f2/18/dcf21847f4532e7d3c3204e060d3ba7b.jpg",
  mearring12:
    "https://i.pinimg.com/1200x/41/0f/76/410f765bec1fa99a39df8cc68ffaa108.jpg",
  mearring13:
    "https://i.pinimg.com/1200x/53/95/a2/5395a20c654e1a097e36580410e7b901.jpg",
  mearring14:
    "https://i.pinimg.com/1200x/2c/bb/a4/2cbba4eacd703e8942cd993013f01d6c.jpg",
  mearring15:
    "https://i.pinimg.com/1200x/25/76/65/2576653e8ce6b91989e983557e764d68.jpg",
  mearring16:
    "https://i.pinimg.com/1200x/87/3e/ea/873eea0896dba59482b1bc8ab1514ec6.jpg",
  mearring17:
    "https://i.pinimg.com/736x/09/c0/d9/09c0d9a9d71180b9d006b8a0b2fbe55a.jpg",
  mearring18:
    "https://i.pinimg.com/1200x/20/b0/32/20b032b3106b41b4af5a7cbe7e0b5863.jpg",
  mearring19:
    "https://i.pinimg.com/1200x/a2/8c/f9/a28cf97ce6b0e506bfbae8f620c3a69d.jpg",
  mearring20:
    "https://i.pinimg.com/1200x/4d/22/31/4d2231db1dd03ae099b82a1ed05ed82c.jpg",
  mearring21: "",
  mearring22:
    "https://i.pinimg.com/1200x/15/17/cc/1517cc4843bb00f6e4d47443614081fb.jpg",
  mearring23: "",
  mearring24: "",
  mearring25:
    "https://i.pinimg.com/736x/dc/f2/18/dcf21847f4532e7d3c3204e060d3ba7b.jpg",
  mearring26: "",
  mearring27: "",
  mearring28:
    "https://i.pinimg.com/1200x/d0/c5/c1/d0c5c1b16e47d54525a03acc07925b49.jpg",
  mearring29: "",
  mearring30:
    "https://i.pinimg.com/1200x/70/98/e1/7098e18bf69c35c813bc10ae27f262d0.jpg",
  mearring31:
    "https://i.pinimg.com/1200x/9a/f4/b4/9af4b4b79afefcffe70b9cf1834b33f6.jpg",
  mearring32:
    "https://i.pinimg.com/1200x/14/6e/44/146e44e27ee1ea690ab0662a03187b52.jpg",
  mearring33:
    "https://i.pinimg.com/1200x/15/38/cf/1538cf11d5514e4d3ae267b740495c8c.jpg",
  mearring34:
    "https://i.pinimg.com/1200x/5d/27/61/5d27616a13680b57c41b95f644b91de5.jpg",
  mearring35:
    "https://i.pinimg.com/1200x/4d/bd/bf/4dbdbf03d3d7bdff958a9ff3c66235cc.jpg",
  mearring36:
    "https://i.pinimg.com/1200x/f8/dd/18/f8dd1835b30dc46e78434473533f4250.jpg",
  mearring37:
    "https://i.pinimg.com/736x/dc/f2/18/dcf21847f4532e7d3c3204e060d3ba7b.jpg",
  mearring38:
    "https://i.pinimg.com/1200x/8d/1e/9c/8d1e9cda0d7eeb11a97361eaa60931ca.jpg",
  mearring39:
    "https://i.pinimg.com/1200x/41/0f/76/410f765bec1fa99a39df8cc68ffaa108.jpg",
  mearring40:
    "https://i.pinimg.com/1200x/cd/b2/e8/cdb2e85c317120e0c64e6e3bff44006f.jpg",
  mearring41:
    "https://i.pinimg.com/736x/a8/d2/6f/a8d26f7855bcf41ced290e7a2226db92.jpg",
  mearring42:
    "https://i.pinimg.com/1200x/18/74/e2/1874e2cd11fb5152bf65f1f9ec2f540f.jpg",
  mearring43:
    "https://i.pinimg.com/1200x/f3/35/49/f33549e081632864dd11a2a1a0b01842.jpg",
  mearring44:
    "https://i.pinimg.com/736x/ef/d7/b7/efd7b724e007e9cac23a531f86438ee9.jpg",
  mearring45:
    "https://i.pinimg.com/1200x/ca/47/9e/ca479e18c882af0a6fc0ce06ec3cf52d.jpg",

  mchain:
    "https://i.pinimg.com/736x/43/58/29/435829de25b6f081c1a5d44b25b04143.jpg",
  mchain2:
    "https://i.pinimg.com/736x/c9/8d/30/c98d3081f725142baca34dc5c0209418.jpg",
  mchain3:
    "https://i.pinimg.com/1200x/c5/5a/c4/c55ac4c14d217005b21510b780c296b4.jpg",
  mchain4:
    "https://i.pinimg.com/736x/cb/02/55/cb0255af79ca2e3d5096cd09eb29e617.jpg",
  mchain5:
    "https://i.pinimg.com/1200x/42/6d/34/426d34e1b5722d3e71b4417150fdc74e.jpg",
  mchain6:
    "https://i.pinimg.com/736x/a5/8f/85/a58f85773efc10abac97cc3360e6f340.jpg",

  wchain:
    "https://i.pinimg.com/1200x/15/8b/51/158b5131a648a6b42e2d36262be4a755.jpg",
  wchain2:
    "https://i.pinimg.com/736x/46/b5/02/46b502687f7111de1e945383c342aa9a.jpg",
  wchain3:
    "https://i.pinimg.com/736x/2f/20/d3/2f20d3dcad119123882bd6ad94232e21.jpg",
  wchain4:
    "https://i.pinimg.com/736x/b5/76/71/b57671d03b3b9f6d9e72596d88355ca0.jpg",
  wchain5:
    "https://i.pinimg.com/736x/1b/98/91/1b9891a7c9dfa99c19e64d70ee49e665.jpg",
  wchain6:
    "https://i.pinimg.com/736x/a1/01/1f/a1011f47b3098d91985fe085e0dea86c.jpg",
  wchain7:
    "https://i.pinimg.com/736x/37/cb/c5/37cbc5abec734b28df5b8dac3b2a6469.jpg",
  wchain8:
    "https://i.pinimg.com/control1/736x/b4/14/aa/b414aaa3bb6d16e652caabaeeaceaeea.jpg",
  wchain9:
    "https://i.pinimg.com/1200x/79/75/31/79753166afb2ee842a22971a4d115581.jpg",
  wchain10:
    "https://i.pinimg.com/736x/5b/45/fa/5b45fa20b3791ab601c4f8d07986c73d.jpg",
  wchain11:
    "https://i.pinimg.com/736x/d4/e5/ee/d4e5ee70593ad6cca435ae30abcc0f7b.jpg",
  wchain12:
    "https://i.pinimg.com/736x/b4/63/b0/b463b036efca5a4407628e2665fb84b0.jpg",
  wchain13:
    "https://i.pinimg.com/736x/d8/b5/28/d8b528160a12a16d8b6d13074cad7f6a.jpg",
  wchain14:
    "https://i.pinimg.com/control1/1200x/90/56/ae/9056ae9b826eccbe60addafd272abf7a.jpg",
  wchain15:
    "https://i.pinimg.com/736x/54/90/ff/5490ffa96501b3fb874c697197db8639.jpg",
  wchain16:
    "https://i.pinimg.com/control1/1200x/d9/1a/82/d91a825ec441cabfcde92e6641c52a89.jpg",
  wchain17:
    "https://i.pinimg.com/1200x/94/37/ba/9437bacf725f5bf9adec1dc0275c6ed6.jpg",
  wchain18:
    "https://i.pinimg.com/1200x/64/a7/6d/64a76d97c518cbce1b51d33be13a1af3.jpg",
  wchain19:
    "https://i.pinimg.com/1200x/08/3d/bd/083dbd44cf3f87fdcf32c4b6803b1be3.jpg",
  wchain20:
    "https://i.pinimg.com/736x/ba/f3/01/baf30106e3c54f61f71cb0d98258f9c3.jpg",
  wchain21:
    "https://i.pinimg.com/736x/dc/3c/4e/dc3c4ee9a6e13bcd815e46c3685d9845.jpg",
  wchain22:
    "https://i.pinimg.com/1200x/4e/60/97/4e6097a35d6097ad5bd6014be03d9424.jpg",
  wchain23:
    "https://i.pinimg.com/736x/46/10/d4/4610d4a75ff2538b98603b06c0de778b.jpg",
  wchain24:
    "https://i.pinimg.com/736x/f6/1f/cd/f61fcd99460c825d382227fda8a8118c.jpg",
  wchain25:
    "https://i.pinimg.com/736x/c8/2a/5a/c82a5a6e6b5e6980972f6376f7aad681.jpg",
  wchain26:
    "https://i.pinimg.com/736x/a4/7a/62/a47a62bb726c10cedd33ddaf52c703d9.jpg",
  wchain27:
    "https://i.pinimg.com/736x/df/df/68/dfdf6826329345e5c758500c15c54f95.jpg",
  wchain28:
    "https://i.pinimg.com/control1/736x/b3/f3/dd/b3f3dde0a36fa07ceee9409cebb71db1.jpg",
  wchain29:
    "https://i.pinimg.com/736x/f6/04/09/f60409b0100775a899f512e90a3d8e55.jpg",
  wchain30:
    "https://i.pinimg.com/1200x/62/ea/7a/62ea7afc2e4bd556ba875a0d9806c3eb.jpg",
  wchain31:
    "https://i.pinimg.com/1200x/79/08/30/790830ea0a25fb6919cad217f76c27ba.jpg",
  wchain32:
    "https://i.pinimg.com/736x/72/4f/e9/724fe99dc84f5096c6c8fad2bd0d2225.jpg",
  wchain33:
    "https://i.pinimg.com/736x/42/44/82/424482a04b0584f07c2ac48a64955899.jpg",
  wchain34:
    "https://i.pinimg.com/control1/1200x/ab/9f/03/ab9f032cf916e6302f19549648f809ec.jpg",
  wchain35:
    "https://i.pinimg.com/1200x/36/ba/73/36ba7391a89771412d1a451ae8d9e108.jpg",
  wchain36:
    "https://i.pinimg.com/736x/c2/48/61/c24861a74753fb67b106c28aa1054413.jpg",
  wchain37:
    "https://i.pinimg.com/1200x/2d/10/13/2d101337efcf07365390760da1e762c7.jpg",
  wchain38:
    "https://i.pinimg.com/1200x/f7/33/c5/f733c5a4e84fd2429fdd39418afdf60e.jpg",
  wchain39:
    "https://i.pinimg.com/1200x/e3/35/a3/e335a3df0fa03842fe7149782ab4fcfe.jpg",
  wchain40:
    "https://i.pinimg.com/1200x/6c/77/c7/6c77c78498a790343cf7b2359272c484.jpg",
  wchain41:
    "https://i.pinimg.com/736x/bb/6b/9c/bb6b9c87befc325cf6b67fa5a92c3aeb.jpg",
  wchain42:
    "https://i.pinimg.com/736x/9e/02/38/9e0238d389aa6539d5ae187ccb8f4f94.jpg",
  wchain43:
    "https://i.pinimg.com/736x/df/35/3d/df353ddcdf444c95f22e79de3269b91f.jpg",
  wchain44:
    "https://i.pinimg.com/736x/b5/d2/a7/b5d2a725b8d111b0ff5e4cb0fc377d4d.jpg",
  wchain45:
    "https://i.pinimg.com/736x/fd/7c/42/fd7c429b0b8acf2cd5290c9e7f6d0f0e.jpg",
  wchain46:
    "https://i.pinimg.com/1200x/0f/6e/00/0f6e004650cc6ab31dc358c6c5798d96.jpg",
  wchain47:
    "https://i.pinimg.com/736x/b8/4f/15/b84f15e8905b66d6738adf9951437792.jpg",
  wchain48:
    "https://i.pinimg.com/736x/9a/3d/b3/9a3db37ec1f9b4da63315c5fad9fdb9a.jpg",

  wring:
    "https://i.pinimg.com/736x/32/c7/45/32c745d5a8e1d8ac440b81bedee9c73f.jpg",
  wring2:
    "https://i.pinimg.com/736x/6b/ed/00/6bed00ef15062df0280f2af57c3fdbd3.jpg",
  wring3:
    "https://i.pinimg.com/control1/1200x/3c/73/60/3c73600fd7c72d1cfb38e45bc052f2be.jpg",

  wring4:
    "https://i.pinimg.com/736x/5a/df/fc/5adffcbd6f1568c4021f70c8cc829cb4.jpg",
  wring5:
    "https://i.pinimg.com/control1/1200x/ac/4a/32/ac4a32015280d5e130a365e0c75d8cbf.jpg",
  wring6:
    "https://i.pinimg.com/736x/6f/f1/6e/6ff16e49d727aa1258a4db9c53517195.jpg",
  wring7:
    "https://i.pinimg.com/1200x/60/24/86/60248641866ca378f1078ff18bfcbd99.jpg",
  wring8:
    "https://i.pinimg.com/control1/1200x/9e/7b/2b/9e7b2b11a0d79b40e909f9fe6b276318.jpg",
  wring9:
    "https://i.pinimg.com/736x/39/d7/c8/39d7c851de6a6a88c3fd5c8800292fb0.jpg",
  wring10:
    "https://i.pinimg.com/1200x/95/27/86/952786e913cd0fd8ab74498788c045a6.jpg",
  // wring11:"",
  wring12:
    "https://i.pinimg.com/control1/1200x/40/5b/7f/405b7ff8ec3499e93e8ea2d68ec9855f.jpg",
  wring13:
    "https://i.pinimg.com/736x/9e/e4/82/9ee4829ef31a542fb7a75e676e67e408.jpg",
  wring14:
    "https://i.pinimg.com/736x/37/18/45/371845ea44640e7dd559a6c3530a04c7.jpg",
  wring15:
    "https://i.pinimg.com/control1/736x/2d/15/32/2d1532c15acfcfe7a37535b00e02d326.jpg",
  wring16:
    "https://i.pinimg.com/736x/a9/d4/73/a9d473cf4360c66e7da92791afe7195c.jpg",
  wring17:
    "https://i.pinimg.com/736x/4a/86/df/4a86df97256a4212e58a55aa54381911.jpg",
  wring18:
    "https://i.pinimg.com/control1/736x/7c/ba/fb/7cbafbaaa628958ee50178d85e561b39.jpg",
  wring19:
    "https://i.pinimg.com/736x/3b/5d/f1/3b5df10a3d0b61f6db27ffabc71d25fb.jpg",
  wring20:
    "https://i.pinimg.com/736x/48/e4/ae/48e4aef958e97962dcbbc8b8f8212f2c.jpg",
  wring21:
    "https://i.pinimg.com/736x/14/10/7d/14107df09ef7527bfe027c8c6efbd03c.jpg",

  wring22:
    "https://i.pinimg.com/1200x/60/24/86/60248641866ca378f1078ff18bfcbd99.jpg",
  wring23:
    "https://i.pinimg.com/736x/33/5e/53/335e5315428c47ed85a2ea15929b362b.jpg",
  wring24:
    "https://i.pinimg.com/1200x/ad/ac/63/adac6380750696d351a1082492229af4.jpg",
  wring25:
    "https://i.pinimg.com/736x/0e/6d/ea/0e6dea8f55fe19b83dc94d0b747f18c0.jpg",
  wring26:
    "https://i.pinimg.com/control1/1200x/52/a9/87/52a9879756076c6f13fce9cca3a3c84c.jpg",
  wring27:
    "https://i.pinimg.com/736x/4d/36/75/4d3675cc9ef86f4c1ee672f5e013f37a.jpg",
  wring28:
    "https://i.pinimg.com/1200x/90/02/ad/9002ad0ac34c41050762813c10728e1b.jpg",
  wring29:
    "https://i.pinimg.com/736x/2c/98/e6/2c98e6db396c144e044ad7b5e0d76c59.jpg",
  wring30:
    "https://i.pinimg.com/736x/c4/5e/6d/c45e6d88e41d107aef657079e4935ebd.jpg",
  wring31:
    "https://i.pinimg.com/1200x/95/27/86/952786e913cd0fd8ab74498788c045a6.jpg",
  wring32:
    "https://i.pinimg.com/736x/18/c3/0b/18c30bb1eb1bb66236541dd1680d5ba2.jpg",
  wring33:
    "https://i.pinimg.com/736x/ef/9d/12/ef9d12a0653f055f79c756e56b672aaa.jpg",
  wring11:
    "https://i.pinimg.com/1200x/40/2a/48/402a485d3bfd936288ca29485655f1e2.jpg",
  wring34:
    "https://i.pinimg.com/736x/c1/14/66/c1146652acdec9193473d86fa2376aaa.jpg",
  wring35:
    "https://i.pinimg.com/control1/736x/e1/da/b8/e1dab872106d42daeee7ae6ad9421a50.jpg",
  wring36:
    "https://i.pinimg.com/1200x/07/96/23/079623683daf1c0ddeb79ee5868c52c2.jpg",
  wring37:
    "https://i.pinimg.com/736x/9e/e4/82/9ee4829ef31a542fb7a75e676e67e408.jpg",
  wring38:
    "https://i.pinimg.com/736x/cf/73/39/cf7339dab9217b7119c7e02c443c37f1.jpg",
  wring39:
    "https://i.pinimg.com/1200x/2c/b0/d5/2cb0d55befb22c5c871f8457701ee228.jpg",
  wring40:
    "https://i.pinimg.com/736x/4b/f6/1e/4bf61e39ba6a0539fd8b4fc01b84d4af.jpg",
  wring41:
    "https://i.pinimg.com/1200x/ea/ae/2a/eaae2aa54725b956be00577d1970d43a.jpg",
  wring42:
    "https://i.pinimg.com/736x/0e/45/33/0e45338227fc4feea85ca142feaf3094.jpg",
  wring43:
    "https://i.pinimg.com/736x/49/39/d4/4939d4aa44609c75a64f49be6dd98646.jpg",
  wring44:
    "https://i.pinimg.com/control1/1200x/90/02/ad/9002ad0ac34c41050762813c10728e1b.jpg",
  wring45:
    "https://i.pinimg.com/1200x/99/dd/c5/99ddc51d66ff098d6374611aa8f9211e.jpg",
  wring46:
    "https://i.pinimg.com/1200x/59/a0/65/59a0652308ebce6e6a24aa62bffbf639.jpg",
};

/* ── Category registry — drives ALL routes & nav ─── */
export const CATEGORIES = [
  // GOLD MEN
  {
    slug: "gold/mens/rings",
    label: "Gold Rings",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/rings",
  },
  {
    slug: "gold/mens/chains",
    label: "Gold Neck Chains",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/chains",
  },
  {
    slug: "gold/mens/earrings",
    label: "Gold Earrings",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/earrings",
  },
  {
    slug: "gold/mens/bali",
    label: "Gold Bali",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/bali",
  },
  {
    slug: "gold/mens/bracelets",
    label: "Gold Bracelets",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/bracelets",
  },
  {
    slug: "gold/mens/kada",
    label: "Gold Kada",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/kada",
  },
  {
    slug: "gold/mens/kanthi",
    label: "Gold Kanthi",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/kanthi",
  },
  {
    slug: "gold/mens/om-lockets",
    label: "Gold Om Lockets",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/om-lockets",
  },
  {
    slug: "gold/mens/maa-lockets",
    label: "Gold Maa Lockets",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/maa-lockets",
  },
  {
    slug: "gold/mens/gurjar-lockets",
    label: "Gold Gurjar Lockets",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/gurjar-lockets",
  },
  {
    slug: "gold/mens/om-collection",
    label: "Gold Om Collection",
    gender: "men",
    metal: "gold",
    path: "/shop/gold/mens/om-collection",
  },
  // GOLD WOMEN
  {
    slug: "gold/womens/rings",
    label: "Gold Rings",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/rings",
  },
  {
    slug: "gold/womens/chains",
    label: "Gold Neck Chains",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/chains",
  },
  {
    slug: "gold/womens/earrings",
    label: "Gold Earrings",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/earrings",
  },
  {
    slug: "gold/womens/necklaces",
    label: "Gold Necklaces",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/necklaces",
  },
  {
    slug: "gold/womens/chokers",
    label: "Gold Chokers",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/chokers",
  },
  {
    slug: "gold/womens/rani-haar",
    label: "Gold Rani Haar",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/rani-haar",
  },
  {
    slug: "gold/womens/bali",
    label: "Gold Bali",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/bali",
  },
  {
    slug: "gold/womens/bracelets",
    label: "Gold Bracelets",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/bracelets",
  },
  {
    slug: "gold/womens/chudi",
    label: "Gold Chudi",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/chudi",
  },
  {
    slug: "gold/womens/kada",
    label: "Gold Kada",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/kada",
  },
  {
    slug: "gold/womens/mangalsutra",
    label: "Mangalsutra",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/mangalsutra",
  },
  {
    slug: "gold/womens/nath",
    label: "Nath",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/nath",
  },
  {
    slug: "gold/womens/nose-rings",
    label: "Nose Rings",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/nose-rings",
  },
  {
    slug: "gold/womens/nose-pins",
    label: "Nose Pins",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/nose-pins",
  },
  {
    slug: "gold/womens/kundal",
    label: "Kundal",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/kundal",
  },
  {
    slug: "gold/womens/jhumki",
    label: "Jhumki",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/jhumki",
  },
  {
    slug: "gold/womens/tops",
    label: "Tops",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/tops",
  },
  {
    slug: "gold/womens/temple",
    label: "Temple Jewellery",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/womens/temple",
  },
  // GOLD SPECIAL
  {
    slug: "gold/bridal",
    label: "Bridal Jewellery",
    gender: "women",
    metal: "gold",
    path: "/shop/gold/bridal",
    special: true,
  },
  {
    slug: "gold/kids",
    label: "Kids Jewellery",
    gender: "kids",
    metal: "gold",
    path: "/shop/gold/kids",
    special: true,
  },
  {
    slug: "gold/coins",
    label: "Gold Coins",
    gender: "unisex",
    metal: "gold",
    path: "/shop/gold/coins",
    special: true,
  },
  // SILVER MEN
  {
    slug: "silver/mens/rings",
    label: "Silver Rings",
    gender: "men",
    metal: "silver",
    path: "/shop/silver/mens/rings",
  },
  {
    slug: "silver/mens/chains",
    label: "Silver Neck Chains",
    gender: "men",
    metal: "silver",
    path: "/shop/silver/mens/chains",
  },
  {
    slug: "silver/mens/kada",
    label: "Silver Kada",
    gender: "men",
    metal: "silver",
    path: "/shop/silver/mens/kada",
  },
  {
    slug: "silver/mens/bracelets",
    label: "Silver Bracelets",
    gender: "men",
    metal: "silver",
    path: "/shop/silver/mens/bracelets",
  },
  // SILVER WOMEN
  {
    slug: "silver/womens/rings",
    label: "Silver Rings",
    gender: "women",
    metal: "silver",
    path: "/shop/silver/womens/rings",
  },
  {
    slug: "silver/womens/chains",
    label: "Silver Neck Chains",
    gender: "women",
    metal: "silver",
    path: "/shop/silver/womens/chains",
  },
  {
    slug: "silver/womens/earrings",
    label: "Silver Earrings",
    gender: "women",
    metal: "silver",
    path: "/shop/silver/womens/earrings",
  },
  {
    slug: "silver/womens/jhumke",
    label: "Silver Jhumke",
    gender: "women",
    metal: "silver",
    path: "/shop/silver/womens/jhumke",
  },
  {
    slug: "silver/womens/payal",
    label: "Silver Payal",
    gender: "women",
    metal: "silver",
    path: "/shop/silver/womens/payal",
  },
  {
    slug: "silver/womens/toe-rings",
    label: "Silver Toe Rings",
    gender: "women",
    metal: "silver",
    path: "/shop/silver/womens/toe-rings",
  },
  {
    slug: "silver/womens/bracelets",
    label: "Silver Bracelets",
    gender: "women",
    metal: "silver",
    path: "/shop/silver/womens/bracelets",
  },
  {
    slug: "silver/womens/kada",
    label: "Silver Kada",
    gender: "women",
    metal: "silver",
    path: "/shop/silver/womens/kada",
  },
  {
    slug: "silver/womens/pendants",
    label: "Silver Pendants",
    gender: "women",
    metal: "silver",
    path: "/shop/silver/womens/pendants",
  },
  // SILVER SPECIAL
  {
    slug: "silver/kids",
    label: "Silver Kids",
    gender: "kids",
    metal: "silver",
    path: "/shop/silver/kids",
    special: true,
  },
  {
    slug: "silver/coins",
    label: "Silver Coins",
    gender: "unisex",
    metal: "silver",
    path: "/shop/silver/coins",
    special: true,
  },
  {
    slug: "silver/gifts",
    label: "Silver Gift Items",
    gender: "unisex",
    metal: "silver",
    path: "/shop/silver/gifts",
    special: true,
  },
];

export function getCategoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug) || null;
}

/* ── Collection registry ─────────────────────────── */
export const COLLECTIONS = [
  {
    slug: "mens/lightweight",
    label: "Men's Lightweight",
    gender: "men",
    path: "/collections/mens/lightweight",
    image: I.ch1,
  },
  {
    slug: "mens/daily-wear",
    label: "Men's Daily Wear",
    gender: "men",
    path: "/collections/mens/daily-wear",
    image: I.r3,
  },
  {
    slug: "mens/party-wear",
    label: "Men's Party Wear",
    gender: "men",
    path: "/collections/mens/party-wear",
    image: I.r2,
  },
  {
    slug: "mens/traditional",
    label: "Men's Traditional",
    gender: "men",
    path: "/collections/mens/traditional",
    image: I.kd1,
  },
  {
    slug: "womens/lightweight",
    label: "Women's Lightweight",
    gender: "women",
    path: "/collections/womens/lightweight",
    image: I.e2,
  },
  {
    slug: "womens/daily-wear",
    label: "Women's Daily Wear",
    gender: "women",
    path: "/collections/womens/daily-wear",
    image: I.n1,
  },
  {
    slug: "womens/party-wear",
    label: "Women's Party Wear",
    gender: "women",
    path: "/collections/womens/party-wear",
    image: I.e3,
  },
  {
    slug: "womens/traditional",
    label: "Women's Traditional",
    gender: "women",
    path: "/collections/womens/traditional",
    image: I.jk1,
  },
  {
    slug: "bridal",
    label: "Bridal Collection",
    gender: "women",
    path: "/collections/bridal",
    image: I.br1,
  },
  {
    slug: "kids",
    label: "Kids Collection",
    gender: "kids",
    path: "/collections/kids",
    image: I.b1,
  },
];

export function getCollectionBySlug(slug) {
  return COLLECTIONS.find((c) => c.slug === slug) || null;
}

/* ── Product factory: generates products for any category slug ─ */
const PRODUCT_TEMPLATES = {
  "gold/mens/rings": [
    {
      name: "Classic Gold Band",
      desc: "A sturdy 22K gold band with a brushed finish — the mark of measured confidence.",
      imgs: [I.mring1, I.mring2, I.mring3],
      features: [
        "22K Gold",
        "Brushed Finish",
        "BIS Certified",
        "Custom Sizing",
      ],
    },
    {
      name: "Signet Ring",
      desc: "Bold oval signet in 22K gold, hand-engraved with a traditional motif.",
      imgs: [I.msingnet, I.msingnet2, I.msingnet3],
      features: [
        "22K Gold",
        "Hand-engraved",
        "Heavyweight Design",
        "Hallmarked",
      ],
    },
    {
      name: "Om Band Ring",
      desc: "Sacred Om symbol intricately carved on a solid 22K gold band.",
      imgs: [I.mom, I.mom2, I.mom3],
      features: [
        "22K Gold",
        "Om Motif",
        "Anti-tarnish Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Band",
      desc: "A clean 18K gold band channel-set with three brilliant-cut diamonds.",
      imgs: [I.mdiamond, I.mdiamond2, I.r4],
      features: [
        "18K Gold",
        "Diamond Channel Set",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Pearl Drop Rings",
      desc: "Elegant pearl drops in 22K gold, perfect for a touch of timeless sophistication.",
      imgs: [I.mring, I.mring0, I.mring00],
      features: ["22K Gold", "Pearl Drops", "Hypoallergenic", "BIS Certified"],
    },
    {
      name: "Twisted Rope Ring",
      desc: "Two strands of 22K gold twisted into a single band — a modern take on a classic design.",
      imgs: [I.mring4, I.mring5, I.mring6],
      features: [
        "22K Gold",
        "Twisted Design",
        "High-polish Finish",
        "Custom Sizing",
      ],
    },
    {
      name: "Celtic Knot Ring",
      desc: "Intricate Celtic knotwork carved into a 22K gold band — a symbol of eternity.",
      imgs: [I.mring7, I.mring8, I.mring9],
      features: [
        "22K Gold",
        "Celtic Knot Design",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Gold Ring",
      desc: "A textured 22K gold band with a hammered finish — rugged yet refined.",
      imgs: [I.mring10, I.mring11, I.mring12],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Polished Edges",
        "Hallmarked",
      ],
    },
    {
      name: "Black Rhodium Ring",
      desc: "A 22K gold band plated with black rhodium for a bold, contemporary look.",
      imgs: [I.mring13, I.mring14, I.mring15],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Two-tone Gold Ring",
      desc: "A 22K gold band with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.mring16, I.mring17, I.mring18],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Polished Finish",
        "Custom Sizing",
      ],
    },
    {
      name: "Geometric Pattern Ring",
      desc: "A 22K gold band engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.mring19, I.mring20, I.mring21],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Floral Motif Ring",
      desc: "A delicate 22K gold band adorned with engraved floral motifs — feminine and elegant.",
      imgs: [I.mring22, I.mring23, I.mring24],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Sapphire-set Ring",
      desc: "A 22K gold band set with a deep blue sapphire — a regal statement piece.",
      imgs: [I.mring25, I.mring26, I.mring27],
      features: [
        "22K Gold",
        "Sapphire Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Ring",
      desc: "A 22K gold band set with a vibrant green emerald — a touch of luxury and color.",
      imgs: [I.mring28, I.mring29, I.mring30],
      features: [
        "22K Gold",
        "Emerald Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Ring",
      desc: "A 22K gold band set with a rich red ruby — a classic choice for elegance.",
      imgs: [I.mring31, I.mring32, I.mring33],
      features: [
        "22K Gold",
        "Ruby Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Ring",
      desc: "A 22K gold band that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.mring34, I.mring35, I.mring36],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/rings": [
    {
      name: "Solitaire Diamond Ring",
      desc: "A timeless solitaire set in 22K gold — the ultimate declaration of love.",
      imgs: [I.wring, I.wring2, I.wring3],
      features: [
        "22K Gold",
        "Brilliant-cut Diamond",
        "Cathedral Setting",
        "BIS Certified",
      ],
    },
    {
      name: "Rose Gold Halo Ring",
      desc: "A halo of micro-pavé stones encircles a central gem in 18K rose gold.",
      imgs: [I.wring4, I.wring5, I.wring6],
      features: [
        "18K Rose Gold",
        "Pavé Diamond Halo",
        "GIA Certified Stone",
        "Custom Sizing",
      ],
    },
    {
      name: "Vintage Filigree Ring",
      desc: "Intricate filigree work in 22K gold — a nod to antique elegance.",
      imgs: [I.wring7, I.wring8, I.wring9],
      features: [
        "22K Gold",
        "Filigree Detailing",
        "Antique Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Pearl and Diamond Ring",
      desc: "A lustrous pearl flanked by sparkling diamonds in 18K gold.",
      imgs: [I.wring10, I.wring11, I.wring12],
      features: [
        "18K Gold",
        "Pearl Centerpiece",
        "Diamond Accents",
        "GIA Certified",
      ],
    },
    {
      name: "Floral Motif Ring",
      desc: "A delicate floral design in 22K gold, perfect for everyday elegance.",
      imgs: [I.wring13, I.wring14, I.wring15],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Two-tone Gold Ring",
      desc: "A 22K gold band with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.wring16, I.wring17, I.wring18],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Polished Finish",
        "Custom Sizing",
      ],
    },
    {
      name: "Geometric Pattern Ring",
      desc: "A 22K gold band engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.wring19, I.wring20, I.wring21],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Floral Motif Ring",
      desc: "A delicate 22K gold band adorned with engraved floral motifs — feminine and elegant.",
      imgs: [I.wring22, I.wring23, I.wring24],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Sapphire-set Ring",
      desc: "A 22K gold band set with a deep blue sapphire — a regal statement piece.",
      imgs: [I.wring25, I.wring26, I.wring27],
      features: [
        "22K Gold",
        "Sapphire Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Ring",
      desc: "A 22K gold band set with a vibrant green emerald — a touch of luxury and color.",
      imgs: [I.wring28, I.wring29, I.wring30],
      features: [
        "22K Gold",
        "Emerald Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Ring",
      desc: "A 22K gold band set with a rich red ruby — a classic choice for elegance.",
      imgs: [I.wring31, I.wring32, I.wring33],
      features: [
        "22K Gold",
        "Ruby Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Ring",
      desc: "A 22K gold band that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.wring34, I.wring35, I.wring36],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond Eternity Band",
      desc: "A continuous circle of diamonds set in 18K gold — a symbol of eternal love.",
      imgs: [I.wring37, I.wring38, I.wring39],
      features: [
        "18K Gold",
        "Eternity Band",
        "Brilliant-cut Diamonds",
        "GIA Certified",
      ],
    },
    {
      name: "Twisted Rope Ring",
      desc: "Two strands of 22K gold twisted into a single band — a modern take on a classic design.",
      imgs: [I.wring40, I.wring41, I.wring42],
      features: [
        "22K Gold",
        "Twisted Design",
        "High-polish Finish",
        "Custom Sizing",
      ],
    },
    {
      name: "Celtic Knot Ring",
      desc: "Intricate Celtic knotwork carved into a 22K gold band — a symbol of eternity.",
      imgs: [I.wring43, I.wring44, I.wring45],
      features: [
        "22K Gold",
        "Celtic Knot Design",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Gold Ring",
      desc: "A textured 22K gold band with a hammered finish — rugged yet refined.",
      imgs: [I.wring46, I.wring47, I.wring48],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Polished Edges",
        "Hallmarked",
      ],
    },
  ],
  "gold/mens/chains": [
    {
      name: "Curb Chain — Heavy",
      desc: 'Hand-assembled curb chain in 22K gold, available in 18", 20" and 22".',
      imgs: [I.mchain5, I.mchain, I.mchain4],
      features: [
        "22K Gold",
        "Mirror Polish",
        "3 Length Options",
        "BIS Certified",
      ],
    },
    {
      name: "Figaro Chain",
      desc: "Classic Figaro pattern in 22K gold — alternating oval and round links.",
      imgs: [I.mchain3, I.mchain2, I.mchain6],
      features: [
        "22K Gold",
        "Figaro Pattern",
        "Secure Lobster Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Rope Chain",
      desc: "Twisted rope design in 22K gold — a timeless choice for everyday wear.",
      imgs: [I.mchain4, I.mchain5, I.mchain6],
      features: [
        "22K Gold",
        "Rope Design",
        "Durable Construction",
        "BIS Certified",
      ],
    },
    {
      name: "Box Chain",
      desc: "A sleek box-link chain in 22K gold — understated elegance for any occasion.",
      imgs: [I.mchain2, I.mchain3, I.mchain4],
      features: ["22K Gold", "Box Link", "Lightweight", "Hallmarked"],
    },
    {
      name: "Snake Chain",
      desc: "Smooth, flexible snake chain in 22K gold — a modern classic.",
      imgs: [I.mchain, I.mchain2, I.mchain3],
      features: ["22K Gold", "Snake Design", "Flexible Wear", "BIS Certified"],
    },
    {
      name: "Anchor Chain",
      desc: "Sturdy anchor-link chain in 22K gold — a bold statement piece.",
      imgs: [I.mchain5, I.mchain6, I.mchain],
      features: [
        "22K Gold",
        "Anchor Link",
        "Durable Construction",
        "Hallmarked",
      ],
    },
    {
      name: "Herringbone Chain",
      desc: "Flat, flexible herringbone weave in 22K gold that lies smooth against the skin.",
      imgs: [I.mchain4, I.mchain5, I.mchain6],
      features: [
        "22K Gold",
        "Herringbone Pattern",
        "Flat Profile",
        "BIS Certified",
      ],
    },
    {
      name: "Cuban Link Chain",
      desc: "Thick, interlocking Cuban links in 22K gold — a bold and masculine design.",
      imgs: [I.mchain2, I.mchain3, I.mchain4],
      features: ["22K Gold", "Cuban Link", "Heavyweight Design", "Hallmarked"],
    },
    {
      name: "Ball Chain",
      desc: "Tiny spheres of 22K gold strung into a delicate everyday chain.",
      imgs: [I.mchain5, I.mchain6, I.mchain],
      features: ["22K Gold", "Ball Link", '16" Length', "Lightweight"],
    },
    {
      name: "Twisted Rope Chain",
      desc: "A rope-like twist in 22K gold — a classic design that catches the light beautifully.",
      imgs: [I.mchain3, I.mchain4, I.mchain5],
      features: [
        "22K Gold",
        "Twisted Rope Design",
        "Durable Construction",
        "BIS Certified",
      ],
    },
    {
      name: "Figaro Chain — Heavy",
      desc: "A heavier version of the classic Figaro pattern in 22K gold — bold and eye-catching.",
      imgs: [I.mchain2, I.mchain3, I.mchain4],
      features: [
        "22K Gold",
        "Heavyweight Figaro",
        "Secure Lobster Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Curb Chain — Lightweight",
      desc: "A lighter version of the classic curb chain in 22K gold — perfect for layering.",
      imgs: [I.mchain5, I.mchain6, I.mchain],
      features: [
        "22K Gold",
        "Lightweight Curb",
        "3 Length Options",
        "BIS Certified",
      ],
    },
    {
      name: "Box Chain — Heavy",
      desc: "A heavier version of the sleek box-link chain in 22K gold — substantial and durable.",
      imgs: [I.mchain2, I.mchain3, I.mchain4],
      features: [
        "22K Gold",
        "Heavyweight Box Link",
        "Lightweight",
        "Hallmarked",
      ],
    },
    {
      name: "Snake Chain — Heavy",
      desc: "A thicker version of the smooth snake chain in 22K gold — bold and modern.",
      imgs: [I.mchain5, I.mchain6, I.mchain],
      features: [
        "22K Gold",
        "Heavyweight Snake",
        "Flexible Wear",
        "BIS Certified",
      ],
    },
    {
      name: "Anchor Chain — Heavy",
      desc: "A heavier version of the sturdy anchor-link chain in 22K gold — a statement piece.",
      imgs: [I.mchain2, I.mchain3, I.mchain4],
      features: [
        "22K Gold",
        "Heavyweight Anchor",
        "Durable Construction",
        "Hallmarked",
      ],
    },
    {
      name: "Herringbone Chain — Heavy",
      desc: "A thicker version of the flat herringbone weave in 22K gold — smooth and substantial.",
      imgs: [I.mchain5, I.mchain6, I.mchain],
      features: [
        "22K Gold",
        "Heavyweight Herringbone",
        "Flat Profile",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/chains": [
    {
      name: "Delicate Box Chain",
      desc: "A gossamer-thin box chain in 18K gold — perfect for layering lockets.",
      imgs: [I.wchain, I.wchain3, I.wchain2],
      features: ["18K Gold", "Box Link", "Lightweight", "Hallmarked"],
    },
    {
      name: "Herringbone Chain",
      desc: "Flat, flexible herringbone weave in 22K gold that lies smooth against the skin.",
      imgs: [I.wchain4, I.wchain5, I.wchain6],
      features: [
        "22K Gold",
        "Herringbone Pattern",
        "Flat Profile",
        "BIS Certified",
      ],
    },
    {
      name: "Gold Ball Chain",
      desc: "Tiny spheres of 22K gold strung into a delicate everyday chain.",
      imgs: [I.wchain7, I.wchain8, I.wchain9],
      features: ["22K Gold", "Ball Link", '16" Length', "Lightweight"],
    },
    {
      name: "Twisted Rope Chain",
      desc: "A rope-like twist in 22K gold — a classic design that catches the light beautifully.",
      imgs: [I.wchain10, I.wchain11, I.wchain12],
      features: [
        "22K Gold",
        "Twisted Rope Design",
        "Durable Construction",
        "BIS Certified",
      ],
    },
    {
      name: "Figaro Chain",
      desc: "Classic Figaro pattern in 22K gold — alternating oval and round links.",
      imgs: [I.wchain13, I.wchain14, I.wchain15],
      features: [
        "22K Gold",
        "Figaro Pattern",
        "Secure Lobster Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Curb Chain — Lightweight",
      desc: "A lighter version of the classic curb chain in 22K gold — perfect for layering.",
      imgs: [I.wchain16, I.wchain17, I.wchain18],
      features: [
        "22K Gold",
        "Lightweight Curb",
        "3 Length Options",
        "BIS Certified",
      ],
    },
    {
      name: "Curb Chain — Heavy",
      desc: 'Hand-assembled curb chain in 22K gold, available in 18", 20" and 22".',
      imgs: [I.wchain19, I.wchain20, I.wchain21],
      features: [
        "22K Gold",
        "Mirror Polish",
        "3 Length Options",
        "BIS Certified",
      ],
    },
    {
      name: "Snake Chain",
      desc: "Smooth, flexible snake chain in 22K gold — a modern classic.",
      imgs: [I.wchain22, I.wchain23, I.wchain24],
      features: ["22K Gold", "Snake Design", "Flexible Wear", "BIS Certified"],
    },
    {
      name: "Anchor Chain",
      desc: "Sturdy anchor-link chain in 22K gold — a bold statement piece.",
      imgs: [I.wchain25, I.wchain26, I.wchain27],
      features: [
        "22K Gold",
        "Anchor Link",
        "Durable Construction",
        "Hallmarked",
      ],
    },
    {
      name: "Cuban Link Chain",
      desc: "Thick, interlocking Cuban links in 22K gold — a bold and masculine design.",
      imgs: [I.wchain28, I.wchain29, I.wchain30],
      features: ["22K Gold", "Cuban Link", "Heavyweight Design", "Hallmarked"],
    },
    {
      name: "Box Chain — Heavy",
      desc: "A heavier version of the sleek box-link chain in 22K gold — substantial and durable.",
      imgs: [I.wchain31, I.wchain32, I.wchain33],
      features: [
        "22K Gold",
        "Heavyweight Box Link",
        "Lightweight",
        "Hallmarked",
      ],
    },
    {
      name: "Snake Chain — Heavy",
      desc: "A thicker version of the smooth snake chain in 22K gold — bold and modern.",
      imgs: [I.wchain34, I.wchain35, I.wchain36],
      features: [
        "22K Gold",
        "Heavyweight Snake",
        "Flexible Wear",
        "BIS Certified",
      ],
    },
    {
      name: "Anchor Chain — Heavy",
      desc: "A heavier version of the sturdy anchor-link chain in 22K gold — a statement piece.",
      imgs: [I.wchain37, I.wchain38, I.wchain39],
      features: [
        "22K Gold",
        "Heavyweight Anchor",
        "Durable Construction",
        "Hallmarked",
      ],
    },
    {
      name: "Herringbone Chain — Heavy",
      desc: "A thicker version of the flat herringbone weave in 22K gold — smooth and substantial.",
      imgs: [I.wchain40, I.wchain41, I.wchain42],
      features: [
        "22K Gold",
        "Heavyweight Herringbone",
        "Flat Profile",
        "BIS Certified",
      ],
    },
    {
      name: "Figaro Chain — Heavy",
      desc: "A heavier version of the classic Figaro pattern in 22K gold — bold and eye-catching.",
      imgs: [I.wchain45, I.wchain44, I.wchain43],
      features: [
        "22K Gold",
        "Heavyweight Figaro",
        "Secure Lobster Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Twisted Rope Chain — Heavy",
      desc: "A thicker version of the rope-like twist in 22K gold — catches the light beautifully.",
      imgs: [I.wchain46, I.wchain47, I.wchain48],
      features: [
        "22K Gold",
        "Heavyweight Twisted Rope",
        "Durable Construction",
        "BIS Certified",
      ],
    },
  ],
  "gold/mens/earrings": [
    {
      name: "Classic Gold Stud",
      desc: "A simple 22K gold dome stud — the essential men's earring.",
      imgs: [I.mearring2, I.mearring, I.mearring3],
      features: ["22K Gold", "Butterfly Back", "6mm Diameter", "Hallmarked"],
    },
    {
      name: "Om Stud",
      desc: "Sacred Om engraved on a flat gold disc — devotion you can wear daily.",
      imgs: [I.mearring4, I.mearring5, I.mearring6],
      features: [
        "22K Gold",
        "Om Engraving",
        "Push-back Setting",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond Stud",
      desc: "A single brilliant-cut diamond set in 18K gold — understated luxury.",
      imgs: [I.mearring7, I.mearring8, I.mearring9],
      features: [
        "18K Gold",
        "Brilliant-cut Diamond",
        "Butterfly Back",
        "GIA Certified",
      ],
    },
    {
      name: "Hoop Earring",
      desc: "A small 22K gold hoop with a hinged clasp — classic and versatile.",
      imgs: [I.mearring10, I.mearring11, I.mearring12],
      features: ["22K Gold", "Hinged Hoop", "Polished Finish", "Hallmarked"],
    },
    {
      name: "Twisted Rope Hoop",
      desc: "A 22K gold hoop with a twisted rope texture — adds subtle flair to any outfit.",
      imgs: [I.mearring13, I.mearring14, I.mearring15],
      features: [
        "22K Gold",
        "Twisted Rope Design",
        "Hinged Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Celtic Knot Stud",
      desc: "Intricate Celtic knot design engraved on a 22K gold stud — a symbol of eternity.",
      imgs: [I.mearring16, I.mearring17, I.mearring18],
      features: [
        "22K Gold",
        "Celtic Knot Engraving",
        "Push-back Setting",
        "Hallmarked",
      ],
    },
    {
      name: "Hammered Gold Stud",
      desc: "A textured 22K gold stud with a hammered finish — rugged yet refined.",
      imgs: [I.mearring19, I.mearring20, I.mearring21],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Polished Edges",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Stud",
      desc: "A 22K gold stud plated with black rhodium for a bold, contemporary look.",
      imgs: [I.mearring22, I.mearring23, I.mearring24],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Stud",
      desc: "A 22K gold stud with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.mearring25, I.mearring26, I.mearring27],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Geometric Pattern Stud",
      desc: "A 22K gold stud engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.mearring28, I.mearring29, I.mearring30],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Stud",
      desc: "A delicate 22K gold stud adorned with engraved floral motifs — feminine and elegant.",
      imgs: [I.mearring31, I.mearring32, I.mearring33],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Stud",
      desc: "A 22K gold stud set with a deep blue sapphire — a regal statement piece.",
      imgs: [I.mearring34, I.mearring35, I.mearring36],
      features: [
        "22K Gold",
        "Sapphire Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Stud",
      desc: "A 22K gold stud set with a vibrant green emerald — a touch of luxury and color.",
      imgs: [I.mearring37, I.mearring38, I.mearring39],
      features: [
        "22K Gold",
        "Emerald Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Stud",
      desc: "A 22K gold stud set with a rich red ruby — a classic choice for elegance.",
      imgs: [I.mearring40, I.mearring41, I.mearring42],
      features: [
        "22K Gold",
        "Ruby Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Stud",
      desc: "A 22K gold stud that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.mearring43, I.mearring44, I.mearring45],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond Stud Earrings",
      desc: "A pair of brilliant-cut diamonds set in 18K gold — timeless elegance for any occasion.",
      imgs: [I.mearring46, I.mearring47, I.mearring48],
      features: [
        "18K Gold",
        "Brilliant-cut Diamonds",
        "Butterfly Back",
        "GIA Certified",
      ],
    },
  ],
  "gold/womens/earrings": [
    {
      name: "Diamond Drop Earring",
      desc: "A single brilliant-cut diamond suspends from a delicate 18K gold hook.",
      imgs: [I.wearrings, I.wearrings3, I.wearrings2],
      features: [
        "18K Gold",
        "Brilliant-cut Diamond",
        "Hook Setting",
        "GIA Certified",
      ],
    },
    {
      name: "Gold Flower Stud",
      desc: "A five-petal gold flower with a pearl centre — timeless feminine elegance.",
      imgs: [I.wearrings4, I.wearrings5, I.wearrings6],
      features: ["22K Gold", "Pearl Centre", "Push-back", "Handcrafted"],
    },
    {
      name: "Chandelier Earring",
      desc: "Three tiers of 22K gold drops that catch the light with every movement.",
      imgs: [I.wearrings48, I.wearrings47, I.wearrings46],
      features: ["22K Gold", "Three-tier Drop", "Hook Back", "Party Favourite"],
    },
    {
      name: "Hoop Earring",
      desc: "A classic 22K gold hoop with a hinged clasp — versatile and elegant.",
      imgs: [I.wearrings7, I.wearrings8, I.wearrings9],
      features: ["22K Gold", "Hinged Hoop", "Polished Finish", "Hallmarked"],
    },
    {
      name: "Twisted Rope Hoop",
      desc: "A 22K gold hoop with a twisted rope texture — adds subtle flair to any outfit.",
      imgs: [I.wearrings10, I.wearrings11, I.wearrings12],
      features: [
        "22K Gold",
        "Twisted Rope Design",
        "Hinged Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Celtic Knot Stud",
      desc: "Intricate Celtic knot design engraved on a 22K gold stud — a symbol of eternity.",
      imgs: [I.wearrings13, I.wearrings14, I.wearrings15],
      features: [
        "22K Gold",
        "Celtic Knot Engraving",
        "Push-back Setting",
        "Hallmarked",
      ],
    },
    {
      name: "Hammered Gold Stud",
      desc: "A textured 22K gold stud with a hammered finish — rugged yet refined.",
      imgs: [I.wearrings16, I.wearrings17, I.wearrings18],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Polished Edges",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Stud",
      desc: "A 22K gold stud plated with black rhodium for a bold, contemporary look.",
      imgs: [I.wearrings19, I.wearrings20, I.wearrings21],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Stud",
      desc: "A 22K gold stud with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.wearrings22, I.wearrings23, I.wearrings24],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Geometric Pattern Stud",
      desc: "A 22K gold stud engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.wearrings25, I.wearrings26, I.wearrings27],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Stud",
      desc: "A delicate 22K gold stud adorned with engraved floral motifs — feminine and elegant.",
      imgs: [I.wearrings28, I.wearrings29, I.wearrings30],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Stud",
      desc: "A 22K gold stud set with a deep blue sapphire — a regal statement piece.",
      imgs: [I.wearrings31, I.wearrings32, I.wearrings33],
      features: [
        "22K Gold",
        "Sapphire Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Stud",
      desc: "A 22K gold stud set with a vibrant green emerald — a touch of luxury and color.",
      imgs: [I.wearrings34, I.wearrings35, I.wearrings36],
      features: [
        "22K Gold",
        "Emerald Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Stud",
      desc: "A 22K gold stud set with a rich red ruby — a classic choice for elegance.",
      imgs: [I.wearrings37, I.wearrings38, I.wearrings39],
      features: [
        "22K Gold",
        "Ruby Gemstone",
        "Polished Finish",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Stud",
      desc: "A 22K gold stud that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.wearrings40, I.wearrings41, I.wearrings42],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond Stud Earrings",
      desc: "A pair of brilliant-cut diamonds set in 18K gold — timeless elegance for any occasion.",
      imgs: [I.wearrings43, I.wearrings44, I.wearrings45],
      features: [
        "18K Gold",
        "Brilliant-cut Diamonds",
        "Butterfly Back",
        "GIA Certified",
      ],
    },
  ],
  "gold/mens/bali": [
    {
      name: "Classic Gold Bali",
      desc: "A smooth circular bali in 22K gold — the definitive men's hoop earring.",
      imgs: [I.mbali2, I.mbali, I.mbali3],
      features: [
        "22K Gold",
        "Smooth Finish",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Twisted Bali",
      desc: "A twisted rope texture on a classic bali form, in 22K gold.",
      imgs: [I.mbali4, I.mbali5, I.mbali6],
      features: ["22K Gold", "Rope Texture", "Hinged Clasp", "Hallmarked"],
    },
    {
      name: "Diamond-set Bali",
      desc: "A channel of brilliant diamonds set in 18K gold bali — understated sparkle.",
      imgs: [I.mbali7, I.mbali8, I.mbali9],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Safety Catch",
        "GIA Certified",
      ],
    },
    {
      name: "Hammered Bali",
      desc: "A hammered texture on a solid 22K gold bali — rugged yet refined.",
      imgs: [I.mbali10, I.mbali11, I.mbali12],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Bali",
      desc: "A 22K gold bali plated with black rhodium for a bold, contemporary look.",
      imgs: [I.mbali13, I.mbali14, I.mbali15],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Hinged Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Bali",
      desc: "A 22K gold bali with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.mbali16, I.mbali17, I.mbali18],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Geometric Pattern Bali",
      desc: "A 22K gold bali engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.mbali19, I.mbali20, I.mbali21],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Hinged Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Bali",
      desc: "A delicate 22K gold bali adorned with engraved floral motifs — masculine elegance.",
      imgs: [I.mbali22, I.mbali23, I.mbali24],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Bali",
      desc: "A 22K gold bali set with a deep blue sapphire — a regal statement piece.",
      imgs: [I.mbali25, I.mbali26, I.mbali27],
      features: [
        "22K Gold",
        "Sapphire Gemstone",
        "Hinged Clasp",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Bali",
      desc: "A 22K gold bali set with a vibrant green emerald — a touch of luxury and color.",
      imgs: [I.mbali28, I.mbali29, I.mbali30],
      features: [
        "22K Gold",
        "Emerald Gemstone",
        "Hinged Closure",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Bali",
      desc: "A 22K gold bali set with a rich red ruby — a classic choice for elegance.",
      imgs: [I.mbali31, I.mbali32, I.mbali33],
      features: ["22K Gold", "Ruby Gemstone", "Hinged Clasp", "GIA Certified"],
    },
    {
      name: "Custom Engraved Bali",
      desc: "A 22K gold bali that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.mbali34, I.mbali35, I.mbali36],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Matte Finish Bali",
      desc: "A sophisticated 22K gold bali with a premium matte finish for a modern masculine look.",
      imgs: [I.mbali37, I.mbali38, I.mbali39],
      features: ["22K Gold", "Matte Finish", "Hinged Closure", "BIS Certified"],
    },
    {
      name: "Greek Pattern Bali",
      desc: "A 22K gold bali featuring an engraved Greek-inspired pattern for a distinctive style.",
      imgs: [I.mbali40, I.mbali41, I.mbali42],
      features: ["22K Gold", "Greek Pattern", "Hinged Clasp", "Hallmarked"],
    },
    {
      name: "Square Edge Bali",
      desc: "A contemporary square-edge bali crafted in 22K gold with a bold geometric profile.",
      imgs: [I.mbali43, I.mbali44, I.mbali45],
      features: [
        "22K Gold",
        "Square Edge Design",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Dual Line Bali",
      desc: "A stylish 22K gold bali with dual engraved lines that add subtle depth and elegance.",
      imgs: [I.mbali46, I.mbali47, I.mbali48],
      features: ["22K Gold", "Dual Line Design", "Hinged Clasp", "Hallmarked"],
    },
  ],
  "gold/womens/bali": [
    {
      name: "Floral Bali",
      desc: "Tiny floral clusters set in 22K gold — a feminine take on the classic hoop.",
      imgs: [I.wmali3, I.wmali, I.wmali2],
      features: ["22K Gold", "Floral Detail", "Hinged Closure", "Handcrafted"],
    },
    {
      name: "Diamond Bali",
      desc: "A continuous channel of diamonds set in 18K gold bali — pure sparkle.",
      imgs: [I.wmali4, I.wmali5, I.wmali6],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Safety Catch",
        "GIA Certified",
      ],
    },
    {
      name: "Twisted Rope Bali",
      desc: "A 22K gold bali with a twisted rope texture — adds subtle flair to any outfit.",
      imgs: [I.wmali7, I.wmali8, I.wmali9],
      features: [
        "22K Gold",
        "Twisted Rope Design",
        "Hinged Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Bali",
      desc: "A hammered texture on a solid 22K gold bali — rugged yet refined.",
      imgs: [I.wmali10, I.wmali11, I.wmali12],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Bali",
      desc: "A 22K gold bali plated with black rhodium for a bold, contemporary look.",
      imgs: [I.wmali13, I.wmali14, I.wmali15],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Hinged Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Bali",
      desc: "A 22K gold bali with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.wmali16, I.wmali17, I.wmali18],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Geometric Pattern Bali",
      desc: "A 22K gold bali engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.wmali19, I.wmali20, I.wmali21],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Hinged Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Bali",
      desc: "A delicate 22K gold bali adorned with engraved floral motifs — masculine elegance.",
      imgs: [I.wmali22, I.wmali23, I.wmali24],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Bali",
      desc: "A 22K gold bali set with a deep blue sapphire — a regal statement piece.",
      imgs: [I.wmali25, I.wmali26, I.wmali27],
      features: [
        "22K Gold",
        "Sapphire Gemstone",
        "Hinged Clasp",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Bali",
      desc: "A 22K gold bali set with a vibrant green emerald — a touch of luxury and color.",
      imgs: [I.wmali28, I.wmali29, I.wmali30],
      features: [
        "22K Gold",
        "Emerald Gemstone",
        "Hinged Closure",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Bali",
      desc: "A 22K gold bali set with a rich red ruby — a classic choice for elegance.",
      imgs: [I.wmali31, I.wmali32, I.wmali33],
      features: ["22K Gold", "Ruby Gemstone", "Hinged Clasp", "GIA Certified"],
    },
    {
      name: "Custom Engraved Bali",
      desc: "A 22K gold bali that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.wmali34, I.wmali35, I.wmali36],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Bali",
      desc: "A channel of brilliant diamonds set in 18K gold bali — understated sparkle.",
      imgs: [I.wmali37, I.wmali38, I.wmali39],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Safety Catch",
        "GIA Certified",
      ],
    },
    {
      name: "Hammered Bali",
      desc: "A hammered texture on a solid 22K gold bali — rugged yet refined.",
      imgs: [I.wmali40, I.wmali41, I.wmali42],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Bali",
      desc: "A 22K gold bali plated with black rhodium for a bold, contemporary look.",
      imgs: [I.wmali43, I.wmali44, I.wmali45],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Hinged Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Bali",
      desc: "A 22K gold bali with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.wmali46, I.wmali47, I.wmali48],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Hinged Closure",
        "BIS Certified",
      ],
    },
  ],
  "gold/mens/bracelets": [
    {
      name: "Curb Bracelet",
      desc: "A heavy curb-link bracelet in 22K gold — bold, masculine, enduring.",
      imgs: [I.mbracelets2, I.mbracelets, I.mbracelets3],
      features: ["22K Gold", "Curb Link", "Box Clasp", "BIS Certified"],
    },
    {
      name: "ID Bracelet",
      desc: "Flat-link ID bracelet in 22K gold with engraving surface on the plate.",
      imgs: [I.mbracelets4, I.mbracelets5, I.mbracelets6],
      features: ["22K Gold", "ID Plate", "Engravable", "Hallmarked"],
    },
    {
      name: "Rope Bracelet",
      desc: "Twisted rope design in 22K gold — a classic men's bracelet.",
      imgs: [I.mbracelets7, I.mbracelets8, I.mbracelets9],
      features: ["22K Gold", "Rope Design", "Box Clasp", "BIS Certified"],
    },
    {
      name: "Figaro Bracelet",
      desc: "Alternating oval and round links in 22K gold — a timeless men's bracelet.",
      imgs: [I.mbracelets10, I.mbracelets11, I.mbracelets12],
      features: ["22K Gold", "Figaro Pattern", "Box Clasp", "Hallmarked"],
    },
    {
      name: "Anchor Bracelet",
      desc: "Sturdy anchor-link bracelet in 22K gold — a bold statement piece.",
      imgs: [I.mbracelets13, I.mbracelets14, I.mbracelets15],
      features: ["22K Gold", "Anchor Link", "Box Clasp", "BIS Certified"],
    },
    {
      name: "Twisted Rope Bracelet",
      desc: "A thicker version of the twisted rope design in 22K gold — bold and masculine.",
      imgs: [I.mbracelets16, I.mbracelets17, I.mbracelets18],
      features: ["22K Gold", "Twisted Rope Design", "Box Clasp", "Hallmarked"],
    },
    {
      name: "Cuban Link Bracelet",
      desc: "Thick, interlocking Cuban links in 22K gold — a bold and masculine design.",
      imgs: [I.mbracelets19, I.mbracelets20, I.mbracelets21],
      features: ["22K Gold", "Cuban Link", "Box Clasp", "BIS Certified"],
    },
    {
      name: "Box Link Bracelet",
      desc: "A sleek box-link bracelet in 22K gold — modern and versatile.",
      imgs: [I.mbracelets22, I.mbracelets23, I.mbracelets24],
      features: ["22K Gold", "Box Link", "Box Clasp", "Hallmarked"],
    },
    {
      name: "Snake Bracelet",
      desc: "Smooth, flexible snake bracelet in 22K gold — a modern classic.",
      imgs: [I.mbracelets25, I.mbracelets26, I.mbracelets27],
      features: ["22K Gold", "Snake Design", "Box Clasp", "BIS Certified"],
    },
    {
      name: "Herringbone Bracelet",
      desc: "Flat, flexible herringbone weave in 22K gold that lies smooth against the skin.",
      imgs: [I.mbracelets28, I.mbracelets29, I.mbracelets30],
      features: ["22K Gold", "Herringbone Pattern", "Box Clasp", "Hallmarked"],
    },
    {
      name: "Diamond-set Bracelet",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.mbracelets31, I.mbracelets32, I.mbracelets33],
      features: ["18K Gold", "Diamond Channel", "Box Clasp", "GIA Certified"],
    },
    {
      name: "Custom Engraved Bracelet",
      desc: "A 22K gold bracelet that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.mbracelets34, I.mbracelets35, I.mbracelets36],
      features: ["22K Gold", "Custom Engraving", "Box Clasp", "BIS Certified"],
    },
    {
      name: "Hammered Bracelet",
      desc: "A hammered texture on a solid 22K gold bracelet — rugged yet refined.",
      imgs: [I.mbracelets37, I.mbracelets38, I.mbracelets39],
      features: ["22K Gold", "Hammered Texture", "Box Clasp", "Hallmarked"],
    },
    {
      name: "Black Rhodium Bracelet",
      desc: "A 22K gold bracelet plated with black rhodium for a bold, contemporary look.",
      imgs: [I.mbracelets40, I.mbracelets41, I.mbracelets42],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Box Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Two-tone Gold Bracelet",
      desc: "A 22K gold bracelet with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.mbracelets43, I.mbracelets44, I.mbracelets45],
      features: ["22K Gold", "18K Gold Inlay", "Box Clasp", "Hallmarked"],
    },
    {
      name: "Geometric Pattern Bracelet",
      desc: "A 22K gold bracelet engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.mbracelets46, I.mbracelets47, I.mbracelets48],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Box Clasp",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/bracelets": [
    {
      name: "Tennis Bracelet",
      desc: "A continuous channel of brilliant diamonds in 18K gold — the definitive luxury bracelet.",
      imgs: [I.wbracelets, I.wbracelets2, I.wbracelets3],
      features: ["18K Gold", "F-G VS Diamonds", "Box Clasp", "GIA Certified"],
    },
    {
      name: "Gold Charm Bracelet",
      desc: "A delicate 22K gold chain with three traditional charms — personal and meaningful.",
      imgs: [I.wbracelets4, I.wbracelets5, I.wbracelets6],
      features: [
        "22K Gold",
        "3 Charms Included",
        "Lobster Clasp",
        "Customisable",
      ],
    },
    {
      name: "Bangle with Stones",
      desc: "A solid 22K gold bangle studded with ruby and emerald accents.",
      imgs: [I.wbracelets46, I.wbracelets47, I.wbracelets48],
      features: [
        "22K Gold",
        "Ruby & Emerald",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Twisted Rope Bracelet",
      desc: "A twisted rope design in 22K gold — a classic feminine bracelet.",
      imgs: [I.wbracelets7, I.wbracelets8, I.wbracelets9],
      features: [
        "22K Gold",
        "Twisted Rope Design",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Bracelet",
      desc: "A hammered texture on a solid 22K gold bracelet — rugged yet refined.",
      imgs: [I.wbracelets10, I.wbracelets11, I.wbracelets12],
      features: ["22K Gold", "Hammered Texture", "Lobster Clasp", "Hallmarked"],
    },
    {
      name: "Black Rhodium Bracelet",
      desc: "A 22K gold bracelet plated with black rhodium for a bold, contemporary look.",
      imgs: [I.wbracelets13, I.wbracelets14, I.wbracelets15],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Two-tone Gold Bracelet",
      desc: "A 22K gold bracelet with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.wbracelets16, I.wbracelets17, I.wbracelets18],
      features: ["22K Gold", "18K Gold Inlay", "Lobster Clasp", "Hallmarked"],
    },
    {
      name: "Geometric Pattern Bracelet",
      desc: "A 22K gold bracelet engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.wbracelets19, I.wbracelets20, I.wbracelets21],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Bracelet",
      desc: "A 22K gold bracelet set with deep blue sapphires — a regal statement piece.",
      imgs: [I.wbracelets22, I.wbracelets23, I.wbracelets24],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Lobster Clasp",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Bracelet",
      desc: "A 22K gold bracelet set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.wbracelets25, I.wbracelets26, I.wbracelets27],
      features: [
        "22K Gold",
        "Emerald Gemstones",
        "Lobster Clasp",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Bracelet",
      desc: "A 22K gold bracelet set with rich red rubies — a classic choice for elegance.",
      imgs: [I.wbracelets28, I.wbracelets29, I.wbracelets30],
      features: [
        "22K Gold",
        "Ruby Gemstones",
        "Lobster Clasp",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Bracelet",
      desc: "A 22K gold bracelet that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.wbracelets31, I.wbracelets32, I.wbracelets33],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Bracelet",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.wbracelets34, I.wbracelets35, I.wbracelets36],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Lobster Clasp",
        "GIA Certified",
      ],
    },
    {
      name: "Hammered Bracelet",
      desc: "A hammered texture on a solid 22K gold bracelet — rugged yet refined.",
      imgs: [I.wbracelets37, I.wbracelets38, I.wbracelets39],
      features: ["22K Gold", "Hammered Texture", "Lobster Clasp", "Hallmarked"],
    },
    {
      name: "Black Rhodium Bracelet",
      desc: "A 22K gold bracelet plated with black rhodium for a bold, contemporary look.",
      imgs: [I.wbracelets40, I.wbracelets41, I.wbracelets42],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Two-tone Gold Bracelet",
      desc: "A 22K gold bracelet with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.wbracelets43, I.wbracelets44, I.wbracelets45],
      features: ["22K Gold", "18K Gold Inlay", "Lobster Clasp", "Hallmarked"],
    },
  ],
  "gold/mens/kada": [
    {
      name: "Plain Kada — Heavy",
      desc: "A thick solid 22K gold kada — worn as a mark of tradition and strength.",
      imgs: [I.mkada, I.mkada2, I.mkada3],
      features: ["22K Gold", "Open-cuff", "Solid Weight", "BIS Certified"],
    },
    {
      name: "Rope-edge Kada",
      desc: "Traditional rope-edge design on a solid 22K gold open kada.",
      imgs: [I.mkada4, I.mkada5, I.mkada6],
      features: ["22K Gold", "Rope Edge", "Open Cuff", "Hallmarked"],
    },
    {
      name: "Diamond-set Kada",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.mkada7, I.mkada8, I.mkada9],
      features: ["18K Gold", "Diamond Channel", "Open Cuff", "GIA Certified"],
    },
    {
      name: "Hammered Kada",
      desc: "A hammered texture on a solid 22K gold kada — rugged yet refined.",
      imgs: [I.mkada10, I.mkada11, I.mkada12],
      features: ["22K Gold", "Hammered Texture", "Open Cuff", "BIS Certified"],
    },
    {
      name: "Black Rhodium Kada",
      desc: "A 22K gold kada plated with black rhodium for a bold, contemporary look.",
      imgs: [I.mkada13, I.mkada14, I.mkada15],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Open Cuff",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Kada",
      desc: "A 22K gold kada with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.mkada16, I.mkada17, I.mkada18],
      features: ["22K Gold", "18K Gold Inlay", "Open Cuff", "BIS Certified"],
    },
    {
      name: "Geometric Pattern Kada",
      desc: "A 22K gold kada engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.mkada19, I.mkada20, I.mkada21],
      features: ["22K Gold", "Geometric Engraving", "Open Cuff", "Hallmarked"],
    },
    {
      name: "Floral Motif Kada",
      desc: "A delicate 22K gold kada adorned with engraved floral motifs — masculine elegance.",
      imgs: [I.mkada22, I.mkada23, I.mkada24],
      features: ["22K Gold", "Floral Engraving", "Open Cuff", "BIS Certified"],
    },
    {
      name: "Sapphire-set Kada",
      desc: "A 22K gold kada set with a deep blue sapphire — a regal statement piece.",
      imgs: [I.mkada25, I.mkada26, I.mkada27],
      features: ["22K Gold", "Sapphire Gemstone", "Open Cuff", "GIA Certified"],
    },
    {
      name: "Emerald-set Kada",
      desc: "A 22K gold kada set with a vibrant green emerald — a touch of luxury and color.",
      imgs: [I.mkada28, I.mkada29, I.mkada30],
      features: ["22K Gold", "Emerald Gemstone", "Open Cuff", "GIA Certified"],
    },
    {
      name: "Ruby-set Kada",
      desc: "A 22K gold kada set with a rich red ruby — a classic choice for elegance.",
      imgs: [I.mkada31, I.mkada32, I.mkada33],
      features: ["22K Gold", "Ruby Gemstone", "Open Cuff", "GIA Certified"],
    },
    {
      name: "Custom Engraved Kada",
      desc: "A 22K gold kada that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.mkada34, I.mkada35, I.mkada36],
      features: ["22K Gold", "Custom Engraving", "Open Cuff", "BIS Certified"],
    },
    {
      name: "Diamond-set Kada",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.mkada37, I.mkada38, I.mkada39],
      features: ["18K Gold", "Diamond Channel", "Open Cuff", "GIA Certified"],
    },
    {
      name: "Hammered Kada",
      desc: "A hammered texture on a solid 22K gold kada — rugged yet refined.",
      imgs: [I.mkada40, I.mkada41, I.mkada42],
      features: ["22K Gold", "Hammered Texture", "Open Cuff", "BIS Certified"],
    },
    {
      name: "Black Rhodium Kada",
      desc: "A 22K gold kada plated with black rhodium for a bold, contemporary look.",
      imgs: [I.mkada43, I.mkada44, I.mkada45],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Open Cuff",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Kada",
      desc: "A 22K gold kada with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.mkada46, I.mkada47, I.mkada48],
      features: ["22K Gold", "18K Gold Inlay", "Open Cuff", "BIS Certified"],
    },
  ],
  "gold/womens/kada": [
    {
      name: "Floral Kada",
      desc: "A delicate 22K gold kada with hand-carved floral motifs all around.",
      imgs: [I.kada, I.kada2, I.kada3],
      features: ["22K Gold", "Floral Motif", "Lightweight", "BIS Certified"],
    },
    {
      name: "Diamond Kada",
      desc: "A 22K gold kada channel-set with brilliant diamonds along its span.",
      imgs: [I.kada4, I.kada5, I.kada6],
      features: ["22K Gold", "Diamond-set", "Safety Clasp", "GIA Certified"],
    },
    {
      name: "Twisted Rope Kada",
      desc: "A twisted rope design in 22K gold — a classic feminine kada.",
      imgs: [I.kada7, I.kada8, I.kada9],
      features: [
        "22K Gold",
        "Twisted Rope Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Kada",
      desc: "A hammered texture on a solid 22K gold kada — rugged yet refined.",
      imgs: [I.kada10, I.kada11, I.kada12],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Kada",
      desc: "A 22K gold kada plated with black rhodium for a bold, contemporary look.",
      imgs: [I.kada13, I.kada14, I.kada15],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Lightweight",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Kada",
      desc: "A 22K gold kada with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.kada16, I.kada17, I.kada18],
      features: ["22K Gold", "18K Gold Inlay", "Lightweight", "BIS Certified"],
    },
    {
      name: "Geometric Pattern Kada",
      desc: "A 22K gold kada engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.kada19, I.kada20, I.kada21],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Lightweight",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Kada",
      desc: "A delicate 22K gold kada adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.kada22, I.kada23, I.kada24],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Kada",
      desc: "A 22K gold kada set with a deep blue sapphire — a regal statement piece.",
      imgs: [I.kada25, I.kada26, I.kada27],
      features: [
        "22K Gold",
        "Sapphire Gemstone",
        "Lightweight",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Kada",
      desc: "A 22K gold kada set with a vibrant green emerald — a touch of luxury and color.",
      imgs: [I.kada28, I.kada29, I.kada30],
      features: [
        "22K Gold",
        "Emerald Gemstone",
        "Lightweight",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Kada",
      desc: "A 22K gold kada set with a rich red ruby — a classic choice for elegance.",
      imgs: [I.kada31, I.kada32, I.kada33],
      features: ["22K Gold", "Ruby Gemstone", "Lightweight", "GIA Certified"],
    },
    {
      name: "Custom Engraved Kada",
      desc: "A 22K gold kada that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.kada34, I.kada35, I.kada36],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Kada",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.kada37, I.kada38, I.kada39],
      features: ["18K Gold", "Diamond Channel", "Lightweight", "GIA Certified"],
    },
    {
      name: "Hammered Kada",
      desc: "A hammered texture on a solid 22K gold kada — rugged yet refined.",
      imgs: [I.kada40, I.kada41, I.kada42],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Kada",
      desc: "A 22K gold kada plated with black rhodium for a bold, contemporary look.",
      imgs: [I.kada43, I.kada44, I.kada45],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Lightweight",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Kada",
      desc: "A 22K gold kada with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.kada46, I.kada47, I.kada48],
      features: ["22K Gold", "18K Gold Inlay", "Lightweight", "BIS Certified"],
    },
  ],
  "gold/mens/kanthi": [
    {
      name: "Traditional Kanthi",
      desc: "A devotional kanthi necklace in 22K gold with sacred bead design.",
      imgs: [I.kanthi3, I.kanthi, I.kanthi2],
      features: [
        "22K Gold",
        "Sacred Beads",
        "Traditional Design",
        "BIS Certified",
      ],
    },
    {
      name: "Om Kanthi",
      desc: "Om-embossed beads strung in 22K gold — worn as a devotional ornament.",
      imgs: [I.kanthi4, I.kanthi5, I.kanthi6],
      features: [
        "22K Gold",
        "Om Motif Beads",
        "Adjustable Length",
        "Hallmarked",
      ],
    },
    {
      name: "Maa Kanthi",
      desc: 'A kanthi necklace in 22K gold with "Maa" engraved on the beads — a tribute to motherhood.',
      imgs: [I.kanthi7, I.kanthi8, I.kanthi9],
      features: [
        "22K Gold",
        "Maa Engraved Beads",
        "Adjustable Length",
        "BIS Certified",
      ],
    },
    {
      name: "Gurjar Kanthi",
      desc: "A kanthi necklace in 22K gold with Gurjar community motifs on the beads.",
      imgs: [I.kanthi10, I.kanthi11, I.kanthi12],
      features: [
        "22K Gold",
        "Gurjar Motif Beads",
        "Adjustable Length",
        "Hallmarked",
      ],
    },
    {
      name: "Diamond-set Kanthi",
      desc: "A channel of brilliant diamonds set in 18K gold beads — understated sparkle.",
      imgs: [I.kanthi13, I.kanthi14, I.kanthi15],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Adjustable Length",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Kanthi",
      desc: "A 22K gold kanthi that can be personalized with your own engraving on the beads.",
      imgs: [I.kanthi16, I.kanthi17, I.kanthi18],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Adjustable Length",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Kanthi",
      desc: "A hammered texture on a solid 22K gold kanthi — rugged yet refined.",
      imgs: [I.kanthi19, I.kanthi20, I.kanthi21],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Adjustable Length",
        "Hallmarked",
      ],
    },
    {
      name: "Black Rhodium Kanthi",
      desc: "A 22K gold kanthi plated with black rhodium for a bold, contemporary look.",
      imgs: [I.kanthi22, I.kanthi23, I.kanthi24],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Adjustable Length",
        "BIS Certified",
      ],
    },
    {
      name: "Two-tone Gold Kanthi",
      desc: "A 22K gold kanthi with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.kanthi25, I.kanthi26, I.kanthi27],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Adjustable Length",
        "Hallmarked",
      ],
    },
    {
      name: "Geometric Pattern Kanthi",
      desc: "A 22K gold kanthi engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.kanthi28, I.kanthi29, I.kanthi30],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Adjustable Length",
        "BIS Certified",
      ],
    },
    {
      name: "Floral Motif Kanthi",
      desc: "A delicate 22K gold kanthi adorned with engraved floral motifs — masculine elegance.",
      imgs: [I.kanthi31, I.kanthi32, I.kanthi33],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Adjustable Length",
        "Hallmarked",
      ],
    },
    {
      name: "Floral  Kanthi",
      desc: "A delicate 22K gold kanthi adorned with engraved floral  — masculine elegance.",
      imgs: [I.kanthi34, I.kanthi35, I.kanthi36],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Adjustable Length",
        "Hallmarked",
      ],
    },
  ],
  "gold/mens/om-lockets": [
    {
      name: "Om Locket — Classic",
      desc: "A hand-carved Om symbol on a solid 22K gold locket — devotion made wearable.",
      imgs: [I.omlocket, I.omlocket2, I.omlocket3],
      features: ["22K Gold", "Hand-carved Om", "Wide Bail", "Gift-ready Box"],
    },
    {
      name: "Om Locket — 3D",
      desc: "A three-dimensional Om locket in 22K gold with high-relief engraving.",
      imgs: [I.omlocket4, I.omlocket5, I.omlocket6],
      features: ["22K Gold", "3D Relief", "Polished Finish", "BIS Certified"],
    },
    {
      name: "Om Locket — Divine Glow",
      desc: "An elegant Om locket crafted in 22K gold with a radiant finish that reflects spiritual grace.",
      imgs: [I.omlocket7, I.omlocket8, I.omlocket9],
      features: [
        "22K Gold",
        "Radiant Finish",
        "Lightweight Design",
        "BIS Hallmarked",
      ],
    },
    {
      name: "Om Locket — Sacred Aura",
      desc: "A beautifully detailed Om pendant inspired by traditional temple artistry and timeless devotion.",
      imgs: [I.omlocket10, I.omlocket11, I.omlocket12],
      features: [
        "22K Gold",
        "Temple-Inspired Design",
        "Fine Detailing",
        "Premium Packaging",
      ],
    },
    {
      name: "Om Locket — Eternal Blessing",
      desc: "A premium Om locket featuring intricate craftsmanship and a polished golden shine.",
      imgs: [I.omlocket13, I.omlocket14, I.omlocket15],
      features: ["22K Gold", "Mirror Polish", "Durable Build", "BIS Certified"],
    },
    {
      name: "Om Locket — Lotus Harmony",
      desc: "An Om symbol gracefully combined with lotus-inspired elements for a serene spiritual look.",
      imgs: [I.omlocket16, I.omlocket17, I.omlocket18],
      features: [
        "22K Gold",
        "Lotus Motif",
        "Elegant Finish",
        "Gift Box Included",
      ],
    },
    {
      name: "Om Locket — Royal Heritage",
      desc: "A regal Om pendant crafted with traditional Indian artistry and premium gold workmanship.",
      imgs: [I.omlocket19, I.omlocket20, I.omlocket21],
      features: [
        "22K Gold",
        "Heritage Design",
        "Premium Craftsmanship",
        "Hallmarked Gold",
      ],
    },
    {
      name: "Om Locket — Sun Radiance",
      desc: "A vibrant Om locket surrounded by sunburst-inspired detailing symbolizing energy and positivity.",
      imgs: [I.omlocket22, I.omlocket23, I.omlocket24],
      features: [
        "22K Gold",
        "Sunburst Pattern",
        "Glossy Finish",
        "Certified Purity",
      ],
    },
    {
      name: "Om Locket — Spiritual Essence",
      desc: "A contemporary Om pendant designed for everyday wear while maintaining a sacred touch.",
      imgs: [I.omlocket25, I.omlocket26, I.omlocket27],
      features: [
        "22K Gold",
        "Modern Design",
        "Daily Wear Friendly",
        "Scratch Resistant",
      ],
    },
    {
      name: "Om Locket — Golden Serenity",
      desc: "A refined Om locket with smooth contours and a luxurious gold finish for a peaceful presence.",
      imgs: [I.omlocket28, I.omlocket29, I.omlocket30],
      features: ["22K Gold", "Smooth Finish", "Comfort Fit", "Premium Quality"],
    },
    {
      name: "Om Locket — Celestial Om",
      desc: "A unique Om pendant inspired by celestial patterns, blending spirituality with modern elegance.",
      imgs: [I.omlocket31, I.omlocket32, I.omlocket33],
      features: ["22K Gold", "Celestial Pattern", "High Polish", "Gift Ready"],
    },
    {
      name: "Om Locket — Divine Heritage",
      desc: "A statement Om locket featuring rich detailing and a classic gold aesthetic rooted in tradition.",
      imgs: [I.omlocket34, I.omlocket35, I.omlocket36],
      features: [
        "22K Gold",
        "Traditional Artwork",
        "Premium Finish",
        "BIS Hallmarked",
      ],
    },
  ],
  "gold/mens/maa-lockets": [
    {
      name: "Maa Locket — Script",
      desc: 'The word "Maa" in elegant Devanagari script, crafted in solid 22K gold.',
      imgs: [I.maalocket, I.maalocket2, I.maalocket3],
      features: ["22K Gold", "Devanagari Script", "Handcrafted", "Hallmarked"],
    },
    {
      name: "Maa Locket — Portrait",
      desc: "A goddess Durga portrait locket in 22K gold — a tribute to divine motherhood.",
      imgs: [I.maalocket4, I.maalocket5, I.maalocket6],
      features: [
        "22K Gold",
        "Durga Portrait",
        "Embossed Detail",
        "BIS Certified",
      ],
    },
    {
      name: "Maa Locket — Divine Blessing",
      desc: "A beautifully crafted Maa locket symbolizing a mother's unconditional love and blessings.",
      imgs: [I.maalocket7, I.maalocket8, I.maalocket9],
      features: [
        "22K Gold",
        "Elegant Lettering",
        "Premium Finish",
        "BIS Hallmarked",
      ],
    },
    {
      name: "Maa Locket — Golden Love",
      desc: "A timeless Maa pendant designed to celebrate the eternal bond between mother and child.",
      imgs: [I.maalocket10, I.maalocket11, I.maalocket12],
      features: ["22K Gold", "Handcrafted Design", "High Polish", "Gift Ready"],
    },
    {
      name: "Maa Locket — Sacred Affection",
      desc: "An artistic Maa locket featuring graceful curves and intricate detailing in pure gold.",
      imgs: [I.maalocket13, I.maalocket14, I.maalocket15],
      features: [
        "22K Gold",
        "Fine Craftsmanship",
        "Lightweight",
        "Hallmarked Gold",
      ],
    },
    {
      name: "Maa Locket — Mother's Grace",
      desc: "A delicate Maa pendant that beautifully captures the warmth and care of motherhood.",
      imgs: [I.maalocket16, I.maalocket17, I.maalocket18],
      features: [
        "22K Gold",
        "Smooth Finish",
        "Comfort Wear",
        "Certified Purity",
      ],
    },
    {
      name: "Maa Locket — Eternal Bond",
      desc: "A premium Maa locket designed as a lasting symbol of love, strength, and protection.",
      imgs: [I.maalocket19, I.maalocket20, I.maalocket21],
      features: [
        "22K Gold",
        "Premium Detailing",
        "Mirror Polish",
        "Gift Packaging",
      ],
    },
    {
      name: "Maa Locket — Lotus Devotion",
      desc: "A Maa pendant inspired by the lotus flower, representing purity and maternal affection.",
      imgs: [I.maalocket22, I.maalocket23, I.maalocket24],
      features: ["22K Gold", "Lotus Motif", "Luxury Finish", "BIS Certified"],
    },
    {
      name: "Maa Locket — Divine Mother",
      desc: "A spiritually inspired locket honoring the nurturing power and grace of motherhood.",
      imgs: [I.maalocket25, I.maalocket26, I.maalocket27],
      features: [
        "22K Gold",
        "Spiritual Design",
        "Detailed Engraving",
        "Hallmarked",
      ],
    },
    {
      name: "Maa Locket — Heart of Gold",
      desc: "A heartfelt Maa pendant featuring a modern design with a touch of traditional elegance.",
      imgs: [I.maalocket28, I.maalocket29, I.maalocket30],
      features: [
        "22K Gold",
        "Modern Styling",
        "Glossy Finish",
        "Premium Quality",
      ],
    },
    {
      name: "Maa Locket — Blessing Charm",
      desc: "A graceful Maa charm locket crafted to keep a mother's blessings close every day.",
      imgs: [I.maalocket31, I.maalocket32, I.maalocket33],
      features: ["22K Gold", "Charm Design", "Daily Wear", "Certified Gold"],
    },
    {
      name: "Maa Locket — Golden Tribute",
      desc: "An exquisite Maa locket created as a tribute to the love, sacrifice, and strength of mothers.",
      imgs: [I.maalocket34, I.maalocket35, I.maalocket36],
      features: [
        "22K Gold",
        "Artisan Crafted",
        "Luxury Polish",
        "BIS Hallmarked",
      ],
    },
  ],
  "gold/mens/gurjar-lockets": [
    {
      name: "Gurjar Pride Locket",
      desc: "A locket in 22K gold featuring traditional Gurjar community motifs.",
      imgs: [I.gurjarlocket],
      features: [
        "22K Gold",
        "Gurjar Motif",
        "Cultural Heritage",
        "BIS Certified",
      ],
    },
    {
      name: "Gurjar Heritage Locket",
      desc: "Bold Gurjar warrior emblem cast in 22K gold — a locket of cultural pride.",
      imgs: [I.gurjarlocket4],
      features: ["22K Gold", "Heritage Design", "Deep Engraving", "Hallmarked"],
    },
    {
      name: "Gurjar Royal Crest Locket",
      desc: "A majestic Gurjar-inspired locket showcasing a royal crest design crafted in pure 22K gold.",
      imgs: [I.gurjarlocket7],
      features: [
        "22K Gold",
        "Royal Crest Design",
        "Premium Finish",
        "BIS Hallmarked",
      ],
    },
    {
      name: "Gurjar Warrior Shield Locket",
      desc: "A bold gold locket inspired by the courage and strength of legendary Gurjar warriors.",
      imgs: [I.gurjarlocket10],
      features: [
        "22K Gold",
        "Warrior Shield Motif",
        "High Relief Design",
        "Certified Gold",
      ],
    },
    {
      name: "Gurjar Legacy Locket",
      desc: "A timeless tribute to Gurjar heritage, crafted with intricate detailing and cultural symbolism.",
      imgs: [I.gurjarlocket13],
      features: [
        "22K Gold",
        "Heritage Artwork",
        "Fine Craftsmanship",
        "Hallmarked",
      ],
    },
    {
      name: "Gurjar Rajputana Locket",
      desc: "An elegant locket inspired by Rajputana-era Gurjar traditions and royal identity.",
      imgs: [I.gurjarlocket16],
      features: [
        "22K Gold",
        "Rajputana Style",
        "Detailed Engraving",
        "Luxury Packaging",
      ],
    },
    {
      name: "Gurjar Unity Locket",
      desc: "A meaningful design symbolizing unity, pride, and the enduring spirit of the Gurjar community.",
      imgs: [I.gurjarlocket19],
      features: [
        "22K Gold",
        "Community Symbol",
        "Glossy Finish",
        "BIS Certified",
      ],
    },
  ],
  "gold/mens/om-collection": [
    {
      name: "Om Pendant",
      desc: "A minimal Om pendant in 22K gold — sacred simplicity.",
      imgs: [I.Om, I.Om3, I.Om2],
      features: ["22K Gold", "Om Design", "Lightweight", "BIS Certified"],
    },
    {
      name: "Om Signet Ring",
      desc: "The Om symbol inlaid in a classic 22K gold signet ring.",
      imgs: [I.Om4, I.Om5, I.Om6],
      features: ["22K Gold", "Om Inlay", "Signet Style", "Hallmarked"],
    },
    {
      name: "Om Bracelet",
      desc: "A 22K gold bracelet with a central Om charm — devotion on the wrist.",
      imgs: [I.Om7, I.Om8, I.Om9],
      features: ["22K Gold", "Om Charm", "Adjustable", "BIS Certified"],
    },
    {
      name: "Om Cufflinks",
      desc: "22K gold cufflinks engraved with the Om symbol — a subtle spiritual touch.",
      imgs: [I.Om10, I.Om11, I.Om12],
      features: ["22K Gold", "Om Engraving", "Cufflink Style", "Hallmarked"],
    },
    {
      name: "Om Keychain",
      desc: "A 22K gold keychain with a dangling Om charm — carry your devotion everywhere.",
      imgs: [I.Om13, I.Om14, I.Om15],
      features: ["22K Gold", "Om Charm", "Keychain Style", "BIS Certified"],
    },
    {
      name: "Om Wall Hanging",
      desc: "A decorative wall hanging in 22K gold with a central Om motif — sacred home decor.",
      imgs: [I.Om16, I.Om17, I.Om18],
      features: ["22K Gold", "Om Motif", "Wall Hanging", "Hallmarked"],
    },
    {
      name: "Om Ring",
      desc: "A 22K gold ring with a raised Om symbol — a wearable expression of faith.",
      imgs: [I.Om19, I.Om20, I.Om21],
      features: ["22K Gold", "Raised Om", "Ring Style", "BIS Certified"],
    },
    {
      name: "Om Brooch",
      desc: "A 22K gold brooch in the shape of the Om symbol — a statement accessory.",
      imgs: [I.Om22, I.Om23, I.Om24],
      features: ["22K Gold", "Om Shape", "Brooch Style", "Hallmarked"],
    },
    {
      name: "Om Pendant with Gemstone",
      desc: "A 22K gold Om pendant accented with a small sapphire — sacred and stylish.",
      imgs: [I.Om25, I.Om26, I.Om27],
      features: [
        "22K Gold",
        "Sapphire Accent",
        "Pendant Style",
        "GIA Certified",
      ],
    },
    {
      name: "Om Bracelet with Diamond",
      desc: "A 22K gold bracelet featuring a channel of diamonds around an Om charm — understated luxury.",
      imgs: [I.Om28, I.Om29, I.Om30],
      features: ["22K Gold", "Diamond Channel", "Om Charm", "GIA Certified"],
    },
    {
      name: "Om Cufflinks with Enamel",
      desc: "22K gold cufflinks with Om symbol inlaid with black enamel — a bold spiritual statement.",
      imgs: [I.Om31, I.Om32, I.Om33],
      features: ["22K Gold", "Enamel Inlay", "Cufflink Style", "Hallmarked"],
    },
    {
      name: "Om Keychain with Engraving",
      desc: "A 22K gold keychain engraved with the Om symbol — a personal touch to your devotion.",
      imgs: [I.Om34, I.Om35, I.Om36],
      features: ["22K Gold", "Engraved Om", "Keychain Style", "BIS Certified"],
    },
    // {
    //   name: "Om Wall Hanging with Gemstone",
    //   desc: "A decorative wall hanging in 22K gold with Om motif and a small emerald accent.",
    //   imgs: [I.Om37, I.Om38, I.Om39],
    //   features: ["22K Gold", "Emerald Accent", "Wall Hanging", "GIA Certified"],
    // },
    // {
    //   name: "Om Ring with Diamond",
    //   desc: "A 22K gold ring with raised Om symbol and a channel of diamonds — sacred elegance.",
    //   imgs: [I.Om40, I.Om41, I.Om42],
    //   features: ["22K Gold", "Raised Om", "Diamond Channel", "GIA Certified"],
    // },
    // {
    //   name: "Om Brooch with Sapphire",
    //   desc: "A 22K gold brooch in the shape of Om symbol accented with a small sapphire — a statement of faith.",
    //   imgs: [I.Om43, I.Om44, I.Om45],
    //   features: [
    //     "22K Gold",
    //     "Sapphire Accent",
    //     "Brooch Style",
    //     "GIA Certified",
    //   ],
    // },
    // {
    //   name: "Om Pendant with Ruby",
    //   desc: "A 22K gold Om pendant accented with a small ruby — sacred and stylish.",
    //   imgs: [I.Om46, I.Om47, I.Om48],
    //   features: ["22K Gold", "Ruby Accent", "Pendant Style", "GIA Certified"],
    // },
  ],
  "gold/womens/necklaces": [
    {
      name: "Pearl Strand Necklace",
      desc: "South Sea pearls strung on 18K gold silk — a classic that transcends generations.",
      imgs: [I.necklaces2, I.necklaces, I.necklaces3],
      features: [
        "18K Gold Clasp",
        "South Sea Pearls",
        "Hand-knotted",
        "Luxury Box",
      ],
    },
    {
      name: "Layered Gold Necklace",
      desc: "Three layers of 22K gold chains at varying lengths — effortlessly editorial.",
      imgs: [I.necklaces4, I.necklaces5, I.necklaces6],
      features: ["22K Gold", "Triple Layer", "Adjustable", "BIS Certified"],
    },
    {
      name: "Diamond Pendant Necklace",
      desc: "A solitaire diamond pendant on a delicate 18K gold chain — understated elegance.",
      imgs: [I.necklaces7, I.necklaces8, I.necklaces9],
      features: [
        "18K Gold",
        "Solitaire Diamond",
        "Adjustable",
        "GIA Certified",
      ],
    },
    {
      name: "Meenakari Necklace",
      desc: "A 22K gold necklace with vibrant meenakari enamel in traditional motifs.",
      imgs: [I.necklaces10, I.necklaces11, I.necklaces12],
      features: [
        "22K Gold",
        "Meenakari Enamel",
        "Traditional Motifs",
        "BIS Certified",
      ],
    },
    {
      name: "Choker Necklace",
      desc: "A close-fitting 22K gold choker with intricate filigree work — regal and refined.",
      imgs: [I.necklaces13, I.necklaces14, I.necklaces15],
      features: ["22K Gold", "Filigree Work", "Adjustable", "Hallmarked"],
    },
    {
      name: "Statement Necklace",
      desc: "A bold 22K gold necklace with geometric patterns and a contemporary silhouette.",
      imgs: [I.necklaces16, I.necklaces17, I.necklaces18],
      features: ["22K Gold", "Geometric Design", "Adjustable", "BIS Certified"],
    },
    {
      name: "Floral Motif Necklace",
      desc: "A delicate 22K gold necklace adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.necklaces19, I.necklaces20, I.necklaces21],
      features: ["22K Gold", "Floral Engraving", "Adjustable", "Hallmarked"],
    },
    {
      name: "Sapphire-set Necklace",
      desc: "A 22K gold necklace set with deep blue sapphires — a regal statement piece.",
      imgs: [I.necklaces22, I.necklaces23, I.necklaces24],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Adjustable",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Necklace",
      desc: "A 22K gold necklace set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.necklaces25, I.necklaces26, I.necklaces27],
      features: [
        "22K Gold",
        "Emerald Gemstones",
        "Adjustable",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Necklace",
      desc: "A 22K gold necklace set with rich red rubies — a classic choice for elegance.",
      imgs: [I.necklaces28, I.necklaces29, I.necklaces30],
      features: ["22K Gold", "Ruby Gemstones", "Adjustable", "GIA Certified"],
    },
    {
      name: "Custom Engraved Necklace",
      desc: "A 22K gold necklace that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.necklaces31, I.necklaces32, I.necklaces33],
      features: ["22K Gold", "Custom Engraving", "Adjustable", "BIS Certified"],
    },
    {
      name: "Diamond-set Necklace",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.necklaces34, I.necklaces35, I.necklaces36],
      features: ["18K Gold", "Diamond Channel", "Adjustable", "GIA Certified"],
    },
    {
      name: "Hammered Necklace",
      desc: "A hammered texture on a solid 22K gold necklace — rugged yet refined.",
      imgs: [I.necklaces37, I.necklaces38, I.necklaces39],
      features: ["22K Gold", "Hammered Texture", "Adjustable", "BIS Certified"],
    },
    {
      name: "Black Rhodium Necklace",
      desc: "A 22K gold necklace plated with black rhodium for a bold, contemporary look.",
      imgs: [I.necklaces40, I.necklaces41, I.necklaces42],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Adjustable",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Necklace",
      desc: "A 22K gold necklace with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.necklaces43, I.necklaces44, I.necklaces45],
      features: ["22K Gold", "18K Gold Inlay", "Adjustable", "BIS Certified"],
    },
    {
      name: "Geometric Pattern Necklace",
      desc: "A 22K gold necklace engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.necklaces46, I.necklaces47, I.necklaces48],
      features: ["22K Gold", "Geometric Engraving", "Adjustable", "Hallmarked"],
    },
  ],
  "gold/womens/chokers": [
    {
      name: "Diamond Gold Choker",
      desc: "Channel-set diamonds in a close-fitting 22K gold choker — drama at its finest.",
      imgs: [I.choker, I.choker4, I.choker1],
      features: [
        "22K Gold",
        "Channel Diamonds",
        "Adjustable",
        "Bridal Favourite",
      ],
    },
    {
      name: "Floral Choker",
      desc: "22K gold florets linked into a choker that moves beautifully with the neck.",
      imgs: [I.choker2, I.choker5, I.choker6],
      features: ["22K Gold", "Floral Links", "Box Clasp", "Handcrafted"],
    },
    {
      name: "Meenakari Choker",
      desc: "A 22K gold choker with vibrant meenakari enamel in traditional motifs.",
      imgs: [I.choker3, I.choker7, I.choker8],
      features: ["22K Gold", "Meenakari Enamel", "Adjustable", "BIS Certified"],
    },
    {
      name: "Pearl Choker",
      desc: "South Sea pearls strung on 22K gold links — a classic that transcends generations.",
      imgs: [I.choker9, I.choker10, I.choker11],
      features: ["22K Gold", "South Sea Pearls", "Hand-knotted", "Luxury Box"],
    },
    {
      name: "Geometric Choker",
      desc: "A bold 22K gold choker with geometric patterns and a contemporary silhouette.",
      imgs: [I.choker12, I.choker13, I.choker14],
      features: ["22K Gold", "Geometric Design", "Adjustable", "BIS Certified"],
    },
    {
      name: "Hammered Gold Choker",
      desc: "A hammered texture on a solid 22K gold choker — rugged yet refined.",
      imgs: [I.choker15, I.choker16, I.choker17],
      features: ["22K Gold", "Hammered Texture", "Adjustable", "BIS Certified"],
    },
    {
      name: "Black Rhodium Choker",
      desc: "A 22K gold choker plated with black rhodium for a bold, contemporary look.",
      imgs: [I.choker18, I.choker19, I.choker20],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Adjustable",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Choker",
      desc: "A 22K gold choker with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.choker21, I.choker22, I.choker23],
      features: ["22K Gold", "18K Gold Inlay", "Adjustable", "BIS Certified"],
    },
    {
      name: "Geometric Pattern Choker",
      desc: "A 22K gold choker engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.choker24, I.choker25, I.choker26],
      features: ["22K Gold", "Geometric Engraving", "Adjustable", "Hallmarked"],
    },
    {
      name: "Floral Motif Choker",
      desc: "A delicate 22K gold choker adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.choker27, I.choker28, I.choker29],
      features: ["22K Gold", "Floral Engraving", "Adjustable", "BIS Certified"],
    },
    {
      name: "Sapphire-set Choker",
      desc: "A 22K gold choker set with deep blue sapphires — a regal statement piece.",
      imgs: [I.choker30, I.choker31, I.choker32],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Adjustable",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Choker",
      desc: "A 22K gold choker set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.choker33, I.choker34, I.choker35],
      features: [
        "22K Gold",
        "Emerald Gemstones",
        "Adjustable",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Choker",
      desc: "A 22K gold choker set with rich red rubies — a classic choice for elegance.",
      imgs: [I.choker36, I.choker37, I.choker38],
      features: ["22K Gold", "Ruby Gemstones", "Adjustable", "GIA Certified"],
    },
    {
      name: "Custom Engraved Choker",
      desc: "A 22K gold choker that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.choker39, I.choker40, I.choker41],
      features: ["22K Gold", "Custom Engraving", "Adjustable", "BIS Certified"],
    },
    {
      name: "Diamond-set Choker",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.choker42, I.choker43, I.choker44],
      features: ["18K Gold", "Diamond Channel", "Adjustable", "GIA Certified"],
    },
    {
      name: "Hammered Choker",
      desc: "A hammered texture on a solid 22K gold choker — rugged yet refined.",
      imgs: [I.choker45, I.choker46, I.choker47],
      features: ["22K Gold", "Hammered Texture", "Adjustable", "BIS Certified"],
    },
  ],
  "gold/womens/rani-haar": [
    {
      name: "Rani Haar — Classic",
      desc: "A long layered rani haar in 22K gold with ruby and meenakari pendant work.",
      imgs: [I.raanihar, I.raanihar2, I.raanihar3],
      features: [
        "22K Gold",
        "Ruby & Meenakari",
        "Multi-layer",
        "Bridal Weight",
      ],
    },
    {
      name: "Rani Haar — Pearls",
      desc: "Alternating 22K gold beads and South Sea pearls in a grand rani haar.",
      imgs: [I.raanihar4, I.raanihar5, I.raanihar6],
      features: [
        "22K Gold",
        "Pearl Accents",
        "Knotted Thread",
        "BIS Certified",
      ],
    },
    {
      name: "Rani Haar — Diamond-set",
      desc: "A rani haar in 18K gold with channel-set diamonds and a statement pendant.",
      imgs: [I.raanihar7, I.raanihar8, I.raanihar9],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Statement Pendant",
        "GIA Certified",
      ],
    },
    {
      name: "Rani Haar — Meenakari",
      desc: "A rani haar in 22K gold with vibrant meenakari enamel and traditional motifs.",
      imgs: [I.raanihar10, I.raanihar11, I.raanihar12],
      features: [
        "22K Gold",
        "Meenakari Enamel",
        "Traditional Motifs",
        "BIS Certified",
      ],
    },
    {
      name: "Rani Haar — Custom Engraved",
      desc: "A 22K gold rani haar that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.raanihar13, I.raanihar14, I.raanihar15],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Multi-layer",
        "BIS Certified",
      ],
    },
    {
      name: "Rani Haar — Hammered",
      desc: "A hammered texture on a solid 22K gold rani haar — rugged yet refined.",
      imgs: [I.raanihar16, I.raanihar17, I.raanihar18],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Multi-layer",
        "BIS Certified",
      ],
    },
    {
      name: "Rani Haar — Black Rhodium",
      desc: "A 22K gold rani haar plated with black rhodium for a bold, contemporary look.",
      imgs: [I.raanihar19, I.raanihar20, I.raanihar21],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Multi-layer",
        "Hallmarked",
      ],
    },
    {
      name: "Rani Haar — Two-tone",
      desc: "A 22K gold rani haar with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.raanihar22, I.raanihar23, I.raanihar24],
      features: ["22K Gold", "18K Gold Inlay", "Multi-layer", "BIS Certified"],
    },
    {
      name: "Rani Haar — Geometric Pattern",
      desc: "A 22K gold rani haar engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.raanihar25, I.raanihar26, I.raanihar27],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Multi-layer",
        "Hallmarked",
      ],
    },
    {
      name: "Rani Haar — Floral Motif",
      desc: "A delicate 22K gold rani haar adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.raanihar28, I.raanihar29, I.raanihar30],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Multi-layer",
        "BIS Certified",
      ],
    },
    {
      name: "Rani Haar — Sapphire-set",
      desc: "A 22K gold rani haar set with deep blue sapphires — a regal statement piece.",
      imgs: [I.raanihar31, I.raanihar32, I.raanihar33],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Multi-layer",
        "GIA Certified",
      ],
    },
    {
      name: "Rani Haar — Emerald-set",
      desc: "A 22K gold rani haar set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.raanihar34, I.raanihar35, I.raanihar36],
      features: [
        "22K Gold",
        "Emerald Gemstones",
        "Multi-layer",
        "GIA Certified",
      ],
    },
    {
      name: "Rani Haar — Ruby-set",
      desc: "A 22K gold rani haar set with rich red rubies — a classic choice for elegance.",
      imgs: [I.raanihar37, I.raanihar38, I.raanihar39],
      features: ["22K Gold", "Ruby Gemstones", "Multi-layer", "GIA Certified"],
    },
    {
      name: "Rani Haar — Custom Engraved",
      desc: "A 22K gold rani haar that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.raanihar40, I.raanihar41, I.raanihar42],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Multi-layer",
        "BIS Certified",
      ],
    },
    {
      name: "Rani Haar — Diamond-set",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.raanihar43, I.raanihar44, I.raanihar45],
      features: ["18K Gold", "Diamond Channel", "Multi-layer", "GIA Certified"],
    },
    {
      name: "Rani Haar — Hammered",
      desc: "A hammered texture on a solid 22K gold rani haar — rugged yet refined.",
      imgs: [I.raanihar46, I.raanihar47, I.raanihar48],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Multi-layer",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/chudi": [
    {
      name: "Gold Chudi Set of 8",
      desc: "Eight hand-carved 22K gold chudi with a repeating lotus motif.",
      imgs: [I.chudi, I.chudi3, I.chudi2],
      features: ["22K Gold", "Lotus Motif", "Set of 8", "Custom Weight"],
    },
    {
      name: "Slim Gold Bangles",
      desc: "Twelve slim 22K gold bangles stacked for everyday brilliance.",
      imgs: [I.chudi4, I.chudi5, I.chudi6],
      features: ["22K Gold", "Lightweight", "Set of 12", "Daily Wear"],
    },
    {
      name: "Diamond Chudi Set",
      desc: "A set of 6 18K gold chudi with channel-set diamonds for understated sparkle.",
      imgs: [I.chudi7, I.chudi8, I.chudi9],
      features: ["18K Gold", "Diamond Channel", "Set of 6", "GIA Certified"],
    },
    {
      name: "Meenakari Chudi Set",
      desc: "A set of 10 22K gold chudi with vibrant meenakari enamel in traditional motifs.",
      imgs: [I.chudi10, I.chudi11, I.chudi12],
      features: ["22K Gold", "Meenakari Enamel", "Set of 10", "BIS Certified"],
    },
    {
      name: "Custom Engraved Chudi",
      desc: "A 22K gold chudi that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.chudi13, I.chudi14, I.chudi15],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Single Piece",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Gold Chudi",
      desc: "A hammered texture on a solid 22K gold chudi — rugged yet refined.",
      imgs: [I.chudi16, I.chudi17, I.chudi18],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Single Piece",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Chudi",
      desc: "A 22K gold chudi plated with black rhodium for a bold, contemporary look.",
      imgs: [I.chudi19, I.chudi20, I.chudi21],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Single Piece",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Chudi",
      desc: "A 22K gold chudi with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.chudi22, I.chudi23, I.chudi24],
      features: ["22K Gold", "18K Gold Inlay", "Single Piece", "BIS Certified"],
    },
    {
      name: "Geometric Pattern Chudi",
      desc: "A 22K gold chudi engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.chudi25, I.chudi26, I.chudi27],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Single Piece",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Chudi",
      desc: "A delicate 22K gold chudi adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.chudi28, I.chudi29, I.chudi30],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Single Piece",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Chudi",
      desc: "A 22K gold chudi set with deep blue sapphires — a regal statement piece.",
      imgs: [I.chudi31, I.chudi32, I.chudi33],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Single Piece",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Chudi",
      desc: "A 22K gold chudi set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.chudi34, I.chudi35, I.chudi36],
      features: [
        "22K Gold",
        "Emerald Gemstones",
        "Single Piece",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Chudi",
      desc: "A 22K gold chudi set with rich red rubies — a classic choice for elegance.",
      imgs: [I.chudi37, I.chudi38, I.chudi39],
      features: ["22K Gold", "Ruby Gemstones", "Single Piece", "GIA Certified"],
    },
    {
      name: "Custom Engraved Chudi",
      desc: "A 22K gold chudi that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.chudi40, I.chudi41, I.chudi42],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Single Piece",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Chudi",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.chudi43, I.chudi44, I.chudi45],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Single Piece",
        "GIA Certified",
      ],
    },
    {
      name: "Hammered Chudi",
      desc: "A hammered texture on a solid 22K gold chudi — rugged yet refined.",
      imgs: [I.chudi46, I.chudi47, I.chudi48],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Single Piece",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/mangalsutra": [
    {
      name: "Classic Mangalsutra",
      desc: "Sacred 22K gold pendant with diamond on traditional black bead chain.",
      imgs: [I.mangalsutra, I.mangalsutra2, I.mangalsutra3],
      features: [
        "22K Gold",
        "Certified Diamond",
        "Black Bead",
        "Customisable Length",
      ],
    },
    {
      name: "Modern Mangalsutra",
      desc: "A contemporary single-strand mangalsutra in 18K gold with a sleek pendant.",
      imgs: [I.mangalsutra4, I.mangalsutra5, I.mangalsutra6],
      features: ["18K Gold", "Modern Design", "Lightweight", "BIS Certified"],
    },
    {
      name: "Diamond Mangalsutra",
      desc: "A 22K gold mangalsutra with channel-set diamonds and a statement pendant.",
      imgs: [I.mangalsutra7, I.mangalsutra8, I.mangalsutra9],
      features: [
        "22K Gold",
        "Diamond Channel",
        "Statement Pendant",
        "GIA Certified",
      ],
    },
    {
      name: "Meenakari Mangalsutra",
      desc: "A 22K gold mangalsutra with vibrant meenakari enamel and traditional motifs.",
      imgs: [I.mangalsutra10, I.mangalsutra11, I.mangalsutra12],
      features: [
        "22K Gold",
        "Meenakari Enamel",
        "Traditional Motifs",
        "BIS Certified",
      ],
    },
    {
      name: "Custom Engraved Mangalsutra",
      desc: "A 22K gold mangalsutra that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.mangalsutra13, I.mangalsutra14, I.mangalsutra15],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Pendant Style",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Gold Mangalsutra",
      desc: "A hammered texture on a solid 22K gold mangalsutra — rugged yet refined.",
      imgs: [I.mangalsutra16, I.mangalsutra17, I.mangalsutra18],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Pendant Style",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Mangalsutra",
      desc: "A 22K gold mangalsutra plated with black rhodium for a bold, contemporary look.",
      imgs: [I.mangalsutra19, I.mangalsutra20, I.mangalsutra21],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Pendant Style",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Mangalsutra",
      desc: "A 22K gold mangalsutra with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.mangalsutra22, I.mangalsutra23, I.mangalsutra24],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Pendant Style",
        "BIS Certified",
      ],
    },
    {
      name: "Geometric Pattern Mangalsutra",
      desc: "A 22K gold mangalsutra engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.mangalsutra25, I.mangalsutra26, I.mangalsutra27],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Pendant Style",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Mangalsutra",
      desc: "A delicate 22K gold mangalsutra adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.mangalsutra28, I.mangalsutra29, I.mangalsutra30],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Pendant Style",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Mangalsutra",
      desc: "A 22K gold mangalsutra set with deep blue sapphires — a regal statement piece.",
      imgs: [I.mangalsutra31, I.mangalsutra32, I.mangalsutra33],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Pendant Style",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Mangalsutra",
      desc: "A 22K gold mangalsutra set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.mangalsutra34, I.mangalsutra35, I.mangalsutra36],
      features: [
        "22K Gold",
        "Emerald Gemstones",
        "Pendant Style",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Mangalsutra",
      desc: "A 22K gold mangalsutra set with rich red rubies — a classic choice for elegance.",
      imgs: [I.mangalsutra37, I.mangalsutra38, I.mangalsutra39],
      features: [
        "22K Gold",
        "Ruby Gemstones",
        "Pendant Style",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Mangalsutra",
      desc: "A 22K gold mangalsutra that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.mangalsutra40, I.mangalsutra41, I.mangalsutra42],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Pendant Style",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Mangalsutra",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.mangalsutra43, I.mangalsutra44, I.mangalsutra45],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Pendant Style",
        "GIA Certified",
      ],
    },
    {
      name: "Hammered Mangalsutra",
      desc: "A hammered texture on a solid 22K gold mangalsutra — rugged yet refined.",
      imgs: [I.mangalsutra46, I.mangalsutra47, I.mangalsutra48],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Pendant Style",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/nath": [
    {
      name: "Bridal Nath — Large",
      desc: "A grand bridal nath in 22K gold with pearl and ruby drops, worn with a chain support.",
      imgs: [I.nath, I.nath2, I.nath3],
      features: [
        "22K Gold",
        "Pearl & Ruby",
        "Chain Support Included",
        "Bridal Piece",
      ],
    },
    {
      name: "Everyday Nath",
      desc: "A small, comfortable nath in 22K gold for daily wear.",
      imgs: [I.nath4, I.nath5, I.nath6],
      features: ["22K Gold", "Lightweight", "Easy Clasp", "BIS Certified"],
    },
    {
      name: "Diamond Nath",
      desc: "A 22K gold nath with channel-set diamonds and a delicate chain support.",
      imgs: [I.nath7, I.nath8, I.nath9],
      features: [
        "22K Gold",
        "Diamond Channel",
        "Chain Support Included",
        "GIA Certified",
      ],
    },
    {
      name: "Meenakari Nath",
      desc: "A 22K gold nath with vibrant meenakari enamel and traditional motifs.",
      imgs: [I.nath10, I.nath11, I.nath12],
      features: [
        "22K Gold",
        "Meenakari Enamel",
        "Traditional Motifs",
        "BIS Certified",
      ],
    },
    {
      name: "Custom Engraved Nath",
      desc: "A 22K gold nath that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.nath13, I.nath14, I.nath15],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Chain Support Included",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Gold Nath",
      desc: "A hammered texture on a solid 22K gold nath — rugged yet refined.",
      imgs: [I.nath16, I.nath17, I.nath18],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Chain Support Included",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Nath",
      desc: "A 22K gold nath plated with black rhodium for a bold, contemporary look.",
      imgs: [I.nath19, I.nath20, I.nath21],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Chain Support Included",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Nath",
      desc: "A 22K gold nath with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.nath22, I.nath23, I.nath24],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Chain Support Included",
        "BIS Certified",
      ],
    },
    {
      name: "Geometric Pattern Nath",
      desc: "A 22K gold nath engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.nath25, I.nath26, I.nath27],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Chain Support Included",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Nath",
      desc: "A delicate 22K gold nath adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.nath28, I.nath29, I.nath30],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Chain Support Included",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Nath",
      desc: "A 22K gold nath set with deep blue sapphires — a regal statement piece.",
      imgs: [I.nath31, I.nath32, I.nath33],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Chain Support Included",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Nath",
      desc: "A 22K gold nath set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.nath34, I.nath35, I.nath36],
      features: [
        "22K Gold",
        "Emerald Gemstones",
        "Chain Support Included",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Nath",
      desc: "A 22K gold nath set with rich red rubies — a classic choice for elegance.",
      imgs: [I.nath37, I.nath38, I.nath39],
      features: [
        "22K Gold",
        "Ruby Gemstones",
        "Chain Support Included",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Nath",
      desc: "A 22K gold nath that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.nath40, I.nath41, I.nath42],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Chain Support Included",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Nath",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.nath43, I.nath44, I.nath45],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Chain Support Included",
        "GIA Certified",
      ],
    },
    {
      name: "Hammered Nath",
      desc: "A hammered texture on a solid 22K gold nath — rugged yet refined.",
      imgs: [I.nath46, I.nath47, I.nath48],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Chain Support Included",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/nose-rings": [
    {
      name: "Diamond Nose Ring",
      desc: "A tiny brilliant-cut diamond set in an 18K gold nose ring.",
      imgs: [I.nosering, I.nosering2, I.nosering3],
      features: [
        "18K Gold",
        "Brilliant Diamond",
        "Twist-lock Closure",
        "GIA Certified",
      ],
    },
    {
      name: "Plain Gold Nose Ring",
      desc: "A simple 22K gold nose ring — minimal, refined, traditional.",
      imgs: [I.nosering4, I.nosering5, I.nosering6],
      features: [
        "22K Gold",
        "Plain Design",
        "Comfortable Fit",
        "BIS Certified",
      ],
    },
    {
      name: "Meenakari Nose Ring",
      desc: "A 22K gold nose ring with vibrant meenakari enamel in traditional motifs.",
      imgs: [I.nosering7, I.nosering8, I.nosering9],
      features: [
        "22K Gold",
        "Meenakari Enamel",
        "Traditional Motifs",
        "BIS Certified",
      ],
    },
    {
      name: "Ruby Nose Ring",
      desc: "A 22K gold nose ring set with a single Burmese ruby — a pop of color.",
      imgs: [I.nosering10, I.nosering11, I.nosering12],
      features: ["22K Gold", "Burmese Ruby", "Push-pin Back", "BIS Certified"],
    },
    {
      name: "Custom Engraved Nose Ring",
      desc: "A 22K gold nose ring that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.nosering13, I.nosering14, I.nosering15],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Gold Nose Ring",
      desc: "A hammered texture on a solid 22K gold nose ring — rugged yet refined.",
      imgs: [I.nosering16, I.nosering17, I.nosering18],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Nose Ring",
      desc: "A 22K gold nose ring plated with black rhodium for a bold, contemporary look.",
      imgs: [I.nosering19, I.nosering20, I.nosering21],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Push-pin Back",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Nose Ring",
      desc: "A 22K gold nose ring with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.nosering22, I.nosering23, I.nosering24],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Geometric Pattern Nose Ring",
      desc: "A 22K gold nose ring engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.nosering25, I.nosering26, I.nosering27],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Push-pin Back",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Nose Ring",
      desc: "A delicate 22K gold nose ring adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.nosering28, I.nosering29, I.nosering30],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Nose Ring",
      desc: "A 22K gold nose ring set with deep blue sapphires — a regal statement piece.",
      imgs: [I.nosering31, I.nosering32, I.nosering33],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Push-pin Back",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Nose Ring",
      desc: "A 22K gold nose ring set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.nosering34, I.nosering35, I.nosering36],
      features: [
        "22K Gold",
        "Emerald Gemstones",
        "Push-pin Back",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Nose Ring",
      desc: "A 22K gold nose ring set with rich red rubies — a classic choice for elegance.",
      imgs: [I.nosering37, I.nosering38, I.nosering39],
      features: [
        "22K Gold",
        "Ruby Gemstones",
        "Push-pin Back",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Nose Ring",
      desc: "A 22K gold nose ring that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.nosering40, I.nosering41, I.nosering42],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Nose Ring",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.nosering43, I.nosering44, I.nosering45],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Push-pin Back",
        "GIA Certified",
      ],
    },
    {
      name: "Hammered Nose Ring",
      desc: "A hammered texture on a solid 22K gold nose ring — rugged yet refined.",
      imgs: [I.nosering46, I.nosering47, I.nosering48],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/nose-pins": [
    {
      name: "Diamond Nose Pin",
      desc: "A single brilliant-cut diamond on an 18K gold nose pin — barely-there luxury.",
      imgs: [I.goldnosepin, I.goldnosepin2, I.goldnosepin3],
      features: [
        "18K Gold",
        "Brilliant Diamond",
        "Flat Pin Back",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby Nose Pin",
      desc: "A vivid Burmese ruby set in 22K gold on a classic push-pin back.",
      imgs: [I.goldnosepin5, I.goldnosepin6, I.goldnosepin7],
      features: ["22K Gold", "Burmese Ruby", "Push-pin Back", "BIS Certified"],
    },
    {
      name: "Meenakari Nose Pin",
      desc: "A 22K gold nose pin with vibrant meenakari enamel in traditional motifs.",
      imgs: [I.goldnosepin8, I.goldnosepin9, I.goldnosepin10],
      features: [
        "22K Gold",
        "Meenakari Enamel",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Custom Engraved Nose Pin",
      desc: "A 22K gold nose pin that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.goldnosepin11, I.goldnosepin12, I.goldnosepin13],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Gold Nose Pin",
      desc: "A hammered texture on a solid 22K gold nose pin — rugged yet refined.",
      imgs: [I.goldnosepin14, I.goldnosepin15, I.goldnosepin16],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Nose Pin",
      desc: "A 22K gold nose pin plated with black rhodium for a bold, contemporary look.",
      imgs: [I.goldnosepin17, I.goldnosepin18, I.goldnosepin19],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Push-pin Back",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Nose Pin",
      desc: "A 22K gold nose pin with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.goldnosepin20, I.goldnosepin21, I.goldnosepin22],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Geometric Pattern Nose Pin",
      desc: "A 22K gold nose pin engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.goldnosepin23, I.goldnosepin24, I.goldnosepin25],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Push-pin Back",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Nose Pin",
      desc: "A delicate 22K gold nose pin adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.goldnosepin26, I.goldnosepin27, I.goldnosepin28],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Nose Pin",
      desc: "A 22K gold nose pin set with deep blue sapphires — a regal statement piece.",
      imgs: [I.goldnosepin29, I.goldnosepin30, I.goldnosepin31],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Push-pin Back",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Nose Pin",
      desc: "A 22K gold nose pin set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.goldnosepin32, I.goldnosepin33, I.goldnosepin34],
      features: [
        "22K Gold",
        "Emerald Gemstones",
        "Push-pin Back",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Nose Pin",
      desc: "A 22K gold nose pin set with rich red rubies — a classic choice for elegance.",
      imgs: [I.goldnosepin35, I.goldnosepin36, I.goldnosepin37],
      features: [
        "22K Gold",
        "Ruby Gemstones",
        "Push-pin Back",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Nose Pin",
      desc: "A 22K gold nose pin that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.goldnosepin38, I.goldnosepin39, I.goldnosepin40],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Nose Pin",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.goldnosepin41, I.goldnosepin42, I.goldnosepin43],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Push-pin Back",
        "GIA Certified",
      ],
    },
    {
      name: "Hammered Nose Pin",
      desc: "A hammered texture on a solid 22K gold nose pin — rugged yet refined.",
      imgs: [I.goldnosepin44, I.goldnosepin45, I.goldnosepin46],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
    {
      name: "Lightweight Nose Pin",
      desc: "A 22K gold nose pin designed for comfort and daily wear.",
      imgs: [I.goldnosepin47, I.goldnosepin48, I.goldnosepin49],
      features: [
        "22K Gold",
        "Lightweight Design",
        "Push-pin Back",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/kundal": [
    {
      name: "Traditional Kundal",
      desc: "Large circular ear ornaments in 22K gold with traditional filigree work.",
      imgs: [I.goldkundal, I.goldkundal3, I.goldkundal2],
      features: [
        "22K Gold",
        "Filigree Work",
        "Traditional Design",
        "Hallmarked",
      ],
    },
    {
      name: "Meenakari Kundal",
      desc: "22K gold kundal adorned with vibrant meenakari enamel in traditional colours.",
      imgs: [I.goldkundal6, I.goldkundal5, I.goldkundal4],
      features: [
        "22K Gold",
        "Meenakari Enamel",
        "Hand-painted",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Kundal",
      desc: "A pair of 18K gold kundal with channel-set diamonds for understated sparkle.",
      imgs: [I.goldkundal9, I.goldkundal8, I.goldkundal7],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Contemporary Design",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Kundal",
      desc: "22K gold kundal that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.goldkundal12, I.goldkundal11, I.goldkundal10],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Traditional Design",
        "BIS Certified",
      ],
    },
    {
      name: "Hammered Gold Kundal",
      desc: "A hammered texture on a solid 22K gold kundal — rugged yet refined.",
      imgs: [I.goldkundal15, I.goldkundal14, I.goldkundal13],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Traditional Design",
        "BIS Certified",
      ],
    },
    {
      name: "Black Rhodium Kundal",
      desc: "22K gold kundal plated with black rhodium for a bold, contemporary look.",
      imgs: [I.goldkundal18, I.goldkundal17, I.goldkundal16],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Contemporary Design",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Kundal",
      desc: "22K gold kundal with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.goldkundal21, I.goldkundal20, I.goldkundal19],
      features: [
        "22K Gold",
        "18K Gold Inlay",
        "Traditional Design",
        "BIS Certified",
      ],
    },
    {
      name: "Geometric Pattern Kundal",
      desc: "22K gold kundal engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.goldkundal24, I.goldkundal23, I.goldkundal22],
      features: [
        "22K Gold",
        "Geometric Engraving",
        "Contemporary Design",
        "Hallmarked",
      ],
    },
    {
      name: "Floral Motif Kundal",
      desc: "Delicate 22K gold kundal adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.goldkundal27, I.goldkundal26, I.goldkundal25],
      features: [
        "22K Gold",
        "Floral Engraving",
        "Traditional Design",
        "BIS Certified",
      ],
    },
    {
      name: "Sapphire-set Kundal",
      desc: "22K gold kundal set with deep blue sapphires — a regal statement piece.",
      imgs: [I.goldkundal30, I.goldkundal29, I.goldkundal28],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Contemporary Design",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Kundal",
      desc: "22K gold kundal set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.goldkundal33, I.goldkundal32, I.goldkundal31],
      features: [
        "22K Gold",
        "Emerald Gemstones",
        "Traditional Design",
        "GIA Certified",
      ],
    },
    {
      name: "Ruby-set Kundal",
      desc: "22K gold kundal set with rich red rubies — a classic choice for elegance.",
      imgs: [I.goldkundal36, I.goldkundal35, I.goldkundal34],
      features: [
        "22K Gold",
        "Ruby Gemstones",
        "Contemporary Design",
        "GIA Certified",
      ],
    },
    {
      name: "Custom Engraved Kundal",
      desc: "22K gold kundal that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.goldkundal39, I.goldkundal38, I.goldkundal37],
      features: [
        "22K Gold",
        "Custom Engraving",
        "Traditional Design",
        "BIS Certified",
      ],
    },
    {
      name: "Diamond-set Kundal",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.goldkundal42, I.goldkundal41, I.goldkundal40],
      features: [
        "18K Gold",
        "Diamond Channel",
        "Contemporary Design",
        "GIA Certified",
      ],
    },
    {
      name: "Hammered Kundal",
      desc: "A hammered texture on a solid 22K gold kundal — rugged yet refined.",
      imgs: [I.goldkundal45, I.goldkundal44, I.goldkundal43],
      features: [
        "22K Gold",
        "Hammered Texture",
        "Traditional Design",
        "BIS Certified",
      ],
    },
    {
      name: "Lightweight Kundal",
      desc: "22K gold kundal designed for comfort and daily wear.",
      imgs: [I.goldkundal48, I.goldkundal47, I.goldkundal46],
      features: [
        "22K Gold",
        "Lightweight Design",
        "Contemporary Design",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/jhumki": [
    {
      name: "Traditional Gold Jhumki",
      desc: "Hand-engraved jhumkis with meenakari work — India's finest earring tradition.",
      imgs: [I.goldJhumki, I.goldJhumki3, I.goldJhumki2],
      features: ["22K Gold", "Meenakari Work", "Ruby & Emerald", "Traditional"],
    },
    {
      name: "Light Jhumki",
      desc: "A smaller, everyday jhumki in 22K gold — easy to wear from morning to evening.",
      imgs: [I.goldJhumki4],
      features: ["22K Gold", "Lightweight", "Hook Back", "Daily Wear"],
    },
    {
      name: "Diamond Jhumki",
      desc: "A pair of 18K gold jhumkis with channel-set diamonds — understated sparkle.",
      imgs: [I.goldJhumki7],
      features: ["18K Gold", "Diamond Channel", "Push-back", "GIA Certified"],
    },
    {
      name: "Custom Engraved Jhumki",
      desc: "22K gold jhumkis that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.goldJhumki10],
      features: ["22K Gold", "Custom Engraving", "Hook Back", "BIS Certified"],
    },
    {
      name: "Hammered Gold Jhumki",
      desc: "A hammered texture on a solid 22K gold jhumki — rugged yet refined.",
      imgs: [I.goldJhumki13],
      features: ["22K Gold", "Hammered Texture", "Hook Back", "BIS Certified"],
    },
    {
      name: "Black Rhodium Jhumki",
      desc: "22K gold jhumkis plated with black rhodium for a bold, contemporary look.",
      imgs: [I.goldJhumki16],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Hook Back",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Jhumki",
      desc: "22K gold jhumkis with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.goldJhumki19],
      features: ["22K Gold", "18K Gold Inlay", "Hook Back", "BIS Certified"],
    },
    {
      name: "Geometric Pattern Jhumki",
      desc: "22K gold jhumkis engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.goldJhumki22],
      features: ["22K Gold", "Geometric Engraving", "Hook Back", "Hallmarked"],
    },
    {
      name: "Floral Motif Jhumki",
      desc: "Delicate 22K gold jhumkis adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.goldJhumki25],
      features: ["22K Gold", "Floral Engraving", "Hook Back", "BIS Certified"],
    },
    {
      name: "Sapphire-set Jhumki",
      desc: "22K gold jhumkis set with deep blue sapphires — a regal statement piece.",
      imgs: [I.goldJhumki28],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Hook Back",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Jhumki",
      desc: "22K gold jhumkis set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.goldJhumki31],
      features: ["22K Gold", "Emerald Gemstones", "Hook Back", "GIA Certified"],
    },
    {
      name: "Ruby-set Jhumki",
      desc: "22K gold jhumkis set with rich red rubies — a classic choice for elegance.",
      imgs: [I.goldJhumki34],
      features: ["22K Gold", "Ruby Gemstones", "Hook Back", "GIA Certified"],
    },
    {
      name: "Custom Engraved Jhumki",
      desc: "22K gold jhumkis that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.goldJhumki37],
      features: ["22K Gold", "Custom Engraving", "Hook Back", "BIS Certified"],
    },
    {
      name: "Diamond-set Jhumki",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.goldJhumki40],
      features: ["18K Gold", "Diamond Channel", "Hook Back", "GIA Certified"],
    },
    {
      name: "Hammered Jhumki",
      desc: "A hammered texture on a solid 22K gold jhumki — rugged yet refined.",
      imgs: [I.goldJhumki43],
      features: ["22K Gold", "Hammered Texture", "Hook Back", "BIS Certified"],
    },
    {
      name: "Lightweight Jhumki",
      desc: "22K gold jhumkis designed for comfort and daily wear.",
      imgs: [I.goldJhumki46],
      features: [
        "22K Gold",
        "Lightweight Design",
        "Hook Back",
        "BIS Certified",
      ],
    },
  ],
  "gold/womens/tops": [
    {
      name: "Diamond Tops",
      desc: "Brilliant-cut diamond studs in a four-claw 18K gold setting.",
      imgs: [I.goldtops2, I.goldtops3, I.goldtops],
      features: [
        "18K Gold",
        "Brilliant Diamond",
        "Four-claw",
        "Certificate Included",
      ],
    },
    {
      name: "Pearl Tops",
      desc: "A perfectly round Akoya pearl set in 22K gold — a timeless stud.",
      imgs: [I.goldtops4, I.goldtops5, I.goldtops6],
      features: ["22K Gold", "Akoya Pearl", "Push-back", "Luxury Box"],
    },
    {
      name: "Ruby Tops",
      desc: "A single Burmese ruby in a 22K gold bezel setting — a pop of color.",
      imgs: [I.goldtops7, I.goldtops8, I.goldtops9],
      features: ["22K Gold", "Burmese Ruby", "Bezel Setting", "BIS Certified"],
    },
    {
      name: "Sapphire Tops",
      desc: "A deep blue sapphire in a 22K gold prong setting — understated elegance.",
      imgs: [I.goldtops10, I.goldtops11, I.goldtops12],
      features: ["22K Gold", "Blue Sapphire", "Prong Setting", "GIA Certified"],
    },
    {
      name: "Emerald Tops",
      desc: "A vibrant green emerald in a 22K gold halo setting — a statement stud.",
      imgs: [I.goldtops13, I.goldtops14, I.goldtops15],
      features: ["22K Gold", "Green Emerald", "Halo Setting", "GIA Certified"],
    },
    {
      name: "Custom Engraved Tops",
      desc: "22K gold tops that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.goldtops16, I.goldtops17, I.goldtops18],
      features: ["22K Gold", "Custom Engraving", "Push-back", "BIS Certified"],
    },
    {
      name: "Hammered Gold Tops",
      desc: "A hammered texture on a solid 22K gold stud — rugged yet refined.",
      imgs: [I.goldtops19, I.goldtops20, I.goldtops21],
      features: ["22K Gold", "Hammered Texture", "Push-back", "BIS Certified"],
    },
    {
      name: "Black Rhodium Tops",
      desc: "22K gold tops plated with black rhodium for a bold, contemporary look.",
      imgs: [I.goldtops22, I.goldtops23, I.goldtops24],
      features: [
        "22K Gold",
        "Black Rhodium Plating",
        "Push-back",
        "Hallmarked",
      ],
    },
    {
      name: "Two-tone Gold Tops",
      desc: "22K gold tops with a contrasting 18K gold inlay — a striking two-tone effect.",
      imgs: [I.goldtops25, I.goldtops26, I.goldtops27],
      features: ["22K Gold", "18K Gold Inlay", "Push-back", "BIS Certified"],
    },
    {
      name: "Geometric Pattern Tops",
      desc: "22K gold tops engraved with geometric patterns for a modern aesthetic.",
      imgs: [I.goldtops28, I.goldtops29, I.goldtops30],
      features: ["22K Gold", "Geometric Engraving", "Push-back", "Hallmarked"],
    },
    {
      name: "Floral Motif Tops",
      desc: "Delicate 22K gold tops adorned with engraved floral motifs — feminine elegance.",
      imgs: [I.goldtops31, I.goldtops32, I.goldtops33],
      features: ["22K Gold", "Floral Engraving", "Push-back", "BIS Certified"],
    },
    {
      name: "Sapphire-set Tops",
      desc: "22K gold tops set with deep blue sapphires — a regal statement piece.",
      imgs: [I.goldtops34, I.goldtops35, I.goldtops36],
      features: [
        "22K Gold",
        "Sapphire Gemstones",
        "Push-back",
        "GIA Certified",
      ],
    },
    {
      name: "Emerald-set Tops",
      desc: "22K gold tops set with vibrant green emeralds — a touch of luxury and color.",
      imgs: [I.goldtops37, I.goldtops38, I.goldtops39],
      features: ["22K Gold", "Emerald Gemstones", "Push-back", "GIA Certified"],
    },
    {
      name: "Ruby-set Tops",
      desc: "22K gold tops set with rich red rubies — a classic choice for elegance.",
      imgs: [I.goldtops40, I.goldtops41, I.goldtops42],
      features: ["22K Gold", "Ruby Gemstones", "Push-back", "GIA Certified"],
    },
    {
      name: "Custom Engraved Tops",
      desc: "22K gold tops that can be personalized with your own engraving — a truly unique piece.",
      imgs: [I.goldtops43, I.goldtops44, I.goldtops45],
      features: ["22K Gold", "Custom Engraving", "Push-back", "BIS Certified"],
    },
    {
      name: "Diamond-set Tops",
      desc: "A channel of brilliant diamonds set in 18K gold — understated sparkle.",
      imgs: [I.goldtops46, I.goldtops47, I.goldtops48],
      features: ["18K Gold", "Diamond Channel", "Push-back", "GIA Certified"],
    },
  ],
  "gold/womens/temple": [
    {
      name: "Temple Necklace",
      desc: "Lakshmi and lotus motif panels in 22K gold — sacred artistry for festive occasions.",
      imgs: [I.goldwtn],
      features: [
        "22K Gold",
        "Temple Motif",
        "Hand-finished",
        "South Indian Style",
      ],
    },
    {
      name: "Temple Earrings",
      desc: "Traditional deity-motif earrings in 22K gold with meenakari accents.",
      imgs: [I.goldwtn2],
      features: [
        "22K Gold",
        "Deity Motif",
        "Meenakari Accents",
        "Festive Wear",
      ],
    },
    {
      name: "Temple Pendant",
      desc: "A 22K gold pendant featuring a goddess motif, perfect for auspicious gifting.",
      imgs: [I.goldwtn3],
      features: [
        "22K Gold",
        "Goddess Motif",
        "Polished Finish",
        "Gift Box Included",
      ],
    },
    {
      name: "Temple Bracelet",
      desc: "A 22K gold bracelet with engraved temple motifs and intricate detailing.",
      imgs: [I.goldwtn4],
      features: [
        "22K Gold",
        "Temple Engraving",
        "Adjustable Fit",
        "BIS Certified",
      ],
    },
    {
      name: "Temple Ring",
      desc: "A 22K gold ring with a miniature temple design — a statement piece for devotees.",
      imgs: [I.goldwtn5],
      features: [
        "22K Gold",
        "Temple Design",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Temple Hairpin",
      desc: "A 22K gold hairpin with deity motifs — perfect for traditional hairstyles.",
      imgs: [I.goldwtn6],
      features: ["22K Gold", "Deity Motifs", "Secure Grip", "Festive Wear"],
    },
    {
      name: "Temple Anklet",
      desc: "A 22K gold anklet with engraved temple motifs and tiny bells for a melodic jingle.",
      imgs: [I.goldwtn7],
      features: [
        "22K Gold",
        "Temple Engraving",
        "Adjustable Length",
        "BIS Certified",
      ],
    },
    {
      name: "Temple Brooch",
      desc: "A 22K gold brooch with intricate temple carvings — a unique accessory for sarees.",
      imgs: [I.goldwtn8],
      features: ["22K Gold", "Temple Carvings", "Pin Back", "BIS Certified"],
    },
    {
      name: "Temple Cufflinks",
      desc: "22K gold cufflinks with miniature temple motifs — a divine touch to formal wear.",
      imgs: [I.goldwtn9],
      features: ["22K Gold", "Temple Motifs", "T-bar Closure", "BIS Certified"],
    },
    {
      name: "Temple Hair Chain",
      desc: "A 22K gold hair chain with deity motifs and delicate links — perfect for bridal hairstyles.",
      imgs: [I.goldwtn10],
      features: [
        "22K Gold",
        "Deity Motifs",
        "Delicate Links",
        "Bridal Accessory",
      ],
    },
    {
      name: "Temple Waist Belt",
      desc: "A 22K gold waist belt with engraved temple motifs — traditional elegance for festive wear.",
      imgs: [I.goldwtn11],
      features: [
        "22K Gold",
        "Temple Engraving",
        "Adjustable Fit",
        "BIS Certified",
      ],
    },
    {
      name: "Temple Hair Comb",
      desc: "A 22K gold hair comb with deity motifs and intricate detailing — perfect for traditional hairstyles.",
      imgs: [I.goldwtn12],
      features: ["22K Gold", "Deity Motifs", "Secure Grip", "Festive Wear"],
    },
    {
      name: "Temple Nose Pin",
      desc: "A 22K gold nose pin with a miniature temple design — auspicious and elegant.",
      imgs: [I.goldwtn13],
      features: ["22K Gold", "Temple Design", "Push-pin Back", "BIS Certified"],
    },
    {
      name: "Temple Hair Ornament",
      desc: "A 22K gold hair ornament with deity motifs and intricate filigree work — perfect for bridal hairstyles.",
      imgs: [I.goldwtn14],
      features: [
        "22K Gold",
        "Deity Motifs",
        "Filigree Work",
        "Bridal Accessory",
      ],
    },
    {
      name: "Temple Toe Ring",
      desc: "A 22K gold toe ring with engraved temple motifs — a traditional accessory for married women.",
      imgs: [I.goldwtn15],
      features: [
        "22K Gold",
        "Temple Engraving",
        "Adjustable Fit",
        "BIS Certified",
      ],
    },
    {
      name: "Temple Hair Stick",
      desc: "A 22K gold hair stick with deity motifs and delicate engravings — perfect for traditional hairstyles.",
      imgs: [I.goldwtn16],
      features: [
        "22K Gold",
        "Deity Motifs",
        "Delicate Engravings",
        "Festive Wear",
      ],
    },
  ],
  "gold/bridal": [
    {
      name: "Royal Bridal Set",
      desc: "A complete 7-piece bridal set in 22K gold — necklace, maang tikka, earrings, bangles, nath, payal, mangalsutra.",
      imgs: [I.goldbride, I.goldbride2, I.goldbride3],
      features: ["22K Gold", "7-Piece Set", "Polki & Ruby", "Bespoke Fitting"],
    },
    {
      name: "Bridal Choker Set",
      desc: "Grand choker with matching earrings and tikka in 22K gold, set with diamonds.",
      imgs: [I.goldchoker, I.goldchoker2, I.goldchoker3],
      features: ["22K Gold", "Diamond-set", "Matching Set", "Bridal Weight"],
    },
    {
      name: "Rani Haar Bridal Set",
      desc: "A sweeping rani haar with matching earrings and bangles for the modern bride.",
      imgs: [I.goldHaar, I.goldHaar2, I.goldHaar3],
      features: ["22K Gold", "Multi-layer", "Pearl Accents", "Complete Set"],
    },
    {
      name: "Bridal Nath",
      desc: "A large statement nath in 22K gold with pearl, ruby and emerald drops.",
      imgs: [I.goldNath, I.goldNath2, I.goldNath3],
      features: ["22K Gold", "Pearl & Ruby", "Chain Support", "Bridal Only"],
    },
    {
      name: "Bridal Bangles Set",
      desc: "A set of 12 slim 22K gold bangles with diamond accents for the bride.",
      imgs: [I.goldbangle, I.goldbangle2, I.goldbangle3],
      features: ["22K Gold", "Diamond Accents", "Set of 12", "BIS Certified"],
    },
    {
      name: "Bridal Payal",
      desc: "A pair of 22K gold anklets with intricate temple motifs and tiny bells.",
      imgs: [I.goldpayal],
      features: [
        "22K Gold",
        "Temple Motifs",
        "Adjustable Length",
        "BIS Certified",
      ],
    },
    {
      name: "Bridal Mangalsutra",
      desc: "A traditional 22K gold mangalsutra with black beads and diamond pendant.",
      imgs: [I.goldmangalsutra],
      features: ["22K Gold", "Black Beads", "Diamond Pendant", "BIS Certified"],
    },
    {
      name: "Bridal Maang Tikka",
      desc: "A 22K gold maang tikka with polki diamonds and pearl drops for the bride.",
      imgs: [I.goldmaangtikka],
      features: ["22K Gold", "Polki Diamonds", "Pearl Drops", "BIS Certified"],
    },
    {
      name: "Bridal Earrings",
      desc: "A pair of 22K gold earrings with intricate filigree and gemstone accents.",
      imgs: [I.goldbridale],
      features: [
        "22K Gold",
        "Filigree Work",
        "Gemstone Accents",
        "BIS Certified",
      ],
    },
    {
      name: "Bridal Ring",
      desc: "A 22K gold ring with a large central gemstone and intricate detailing for the bride.",
      imgs: [I.goldbridalr],
      features: [
        "22K Gold",
        "Gemstone Centerpiece",
        "Intricate Detailing",
        "BIS Certified",
      ],
    },
    {
      name: "Bridal Hair Accessories",
      desc: "A set of 22K gold hairpins and clips with floral motifs for bridal hairstyles.",
      imgs: [I.goldbridalh],
      features: ["22K Gold", "Floral Motifs", "Set of 5", "BIS Certified"],
    },
    {
      name: "Bridal Waist Belt",
      desc: "A 22K gold kamarbandh with intricate temple motifs and adjustable fit for bridal wear.",
      imgs: [I.goldbridalw],
      features: [
        "22K Gold",
        "Temple Motifs",
        "Adjustable Fit",
        "BIS Certified",
      ],
    },
  ],
  "gold/kids": [
    {
      name: "Kids Ring",
      desc: "A tiny 18K gold ring with a heart motif — a keepsake for life.",
      imgs: [I.goldKi2, I.goldKi3, I.goldKi],
      features: ["18K Gold", "Heart Motif", "Safe Design", "BIS Certified"],
    },
    {
      name: "Kids Bracelet",
      desc: "A delicate 18K gold chain bracelet with a star charm for little wrists.",
      imgs: [I.goldkbr3, I.goldkbr, I.goldkbr2],
      features: ["18K Gold", "Star Charm", "Safety Clasp", "Adjustable"],
    },
    {
      name: "Kids Chain",
      desc: "A lightweight 18K gold chain designed for comfortable daily wear.",
      imgs: [I.goldkch, I.goldkch2, I.goldkch3],
      features: ["18K Gold", "Lightweight", "Secure Clasp", "BIS Certified"],
    },
    {
      name: "Kids Earrings",
      desc: "Tiny butterfly studs in 18K gold with a comfortable push-back setting.",
      imgs: [I.goldker, I.goldker1, I.goldker2],
      features: ["18K Gold", "Butterfly Design", "Push-back", "Hypoallergenic"],
    },
    {
      name: "Kids Anklet",
      desc: "A small 18K gold anklet with bell charms — jingling joy for little feet.",
      imgs: [I.goldkan],
      features: [
        "18K Gold",
        "Bell Charms",
        "Adjustable Length",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Nose Pin",
      desc: "A petite 18K gold nose pin with a floral motif — delicate and safe for children.",
      imgs: [I.goldknp],
      features: ["18K Gold", "Floral Motif", "Push-pin Back", "BIS Certified"],
    },
    {
      name: "Kids Pendant",
      desc: "A charming 18K gold pendant in the shape of a teddy bear — a gift to treasure.",
      imgs: [I.goldkpe],
      features: [
        "18K Gold",
        "Teddy Bear Shape",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Hairpin",
      desc: "A small 18K gold hairpin with a star design — perfect for little girls' hairstyles.",
      imgs: [I.goldkhp],
      features: ["18K Gold", "Star Design", "Secure Grip", "BIS Certified"],
    },
    {
      name: "Kids Toe Ring",
      desc: "A tiny 18K gold toe ring with a heart motif — a keepsake for little feet.",
      imgs: [I.goldkto],
      features: ["18K Gold", "Heart Motif", "Adjustable Fit", "BIS Certified"],
    },
    {
      name: "Kids Hair Clip",
      desc: "A small 18K gold hair clip with a butterfly design — delicate and secure.",
      imgs: [I.goldkhc],
      features: [
        "18K Gold",
        "Butterfly Design",
        "Secure Grip",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Cuff Bracelet",
      desc: "A tiny 18K gold cuff bracelet with a star motif — adjustable and safe for children.",
      imgs: [I.goldkcu],
      features: ["18K Gold", "Star Motif", "Adjustable Fit", "BIS Certified"],
    },
    {
      name: "Kids Charm Necklace",
      desc: "A delicate 18K gold necklace with a heart-shaped charm — a keepsake for little ones.",
      imgs: [I.goldkchm],
      features: [
        "18K Gold",
        "Heart-shaped Charm",
        "Adjustable Length",
        "BIS Certified",
      ],
    },
  ],
  "gold/coins": [
    {
      name: "1 Gram Gold Coin",
      desc: "Certified 24K pure gold coin — a timeless investment and auspicious gift.",
      imgs: [I.goldCoins, I.goldCoins3, I.goldCoins2],
      features: [
        "24K Pure Gold",
        "BIS Certified",
        "1 Gram",
        "Gift Box Included",
      ],
    },
    {
      name: "5 Gram Gold Coin",
      desc: "A 24K gold coin with Lakshmi motif — prosperity in your hands.",
      imgs: [I.goldCoins5, I.goldCoins4, I.goldCoins6],
      features: [
        "24K Pure Gold",
        "Lakshmi Motif",
        "5 Gram",
        "Certificate Included",
      ],
    },
    {
      name: "10 Gram Gold Coin",
      desc: "An investment-grade 24K gold coin in a premium tamper-proof capsule.",
      imgs: [I.goldCoins7, I.goldCoins8, I.goldCoins9],
      features: [
        "24K Pure Gold",
        "10 Gram",
        "Tamper-proof Capsule",
        "BIS Certified",
      ],
    },
    {
      name: "20 Gram Gold Coin",
      desc: "A 24K gold coin with intricate engraving — a valuable addition to your portfolio.",
      imgs: [I.goldCoins10, I.goldCoins11, I.goldCoins12],
      features: [
        "24K Pure Gold",
        "20 Gram",
        "Intricate Engraving",
        "Certificate Included",
      ],
    },
    {
      name: "50 Gram Gold Coin",
      desc: "A large 24K gold coin with auspicious motifs — a prestigious gift for special occasions.",
      imgs: [I.goldCoins13, I.goldCoins14, I.goldCoins15],
      features: [
        "24K Pure Gold",
        "50 Gram",
        "Auspicious Motifs",
        "BIS Certified",
      ],
    },
    {
      name: "100 Gram Gold Coin",
      desc: "A premium 24K gold coin with a high-relief design — a collector's delight.",
      imgs: [I.goldCoins16, I.goldCoins17, I.goldCoins18],
      features: [
        "24K Pure Gold",
        "100 Gram",
        "High-relief Design",
        "Certificate Included",
      ],
    },
    {
      name: "Custom Gold Coin",
      desc: "A 24K gold coin that can be personalized with your own design or engraving.",
      imgs: [I.goldCoins19, I.goldCoins20, I.goldCoins21],
      features: [
        "24K Pure Gold",
        "Custom Design",
        "Engraving Option",
        "BIS Certified",
      ],
    },
    {
      name: "Commemorative Gold Coin",
      desc: "A limited edition 24K gold coin celebrating a special event or milestone.",
      imgs: [I.goldCoins22, I.goldCoins23, I.goldCoins24],
      features: [
        "24K Pure Gold",
        "Limited Edition",
        "Commemorative Design",
        "Certificate Included",
      ],
    },
    {
      name: "Gold Coin with Gemstones",
      desc: "A 24K gold coin adorned with precious gemstones — a luxurious keepsake.",
      imgs: [I.goldCoins25, I.goldCoins26, I.goldCoins27],
      features: [
        "24K Pure Gold",
        "Gemstone Accents",
        "Luxury Keepsake",
        "BIS Certified",
      ],
    },
    {
      name: "Gold Coin with Religious Motif",
      desc: "A 24K gold coin featuring a sacred religious motif — a blessing in your hands.",
      imgs: [I.goldCoins28, I.goldCoins29, I.goldCoins30],
      features: [
        "24K Pure Gold",
        "Religious Motif",
        "Blessing Coin",
        "Certificate Included",
      ],
    },
    {
      name: "Gold Coin with Custom Message",
      desc: "A 24K gold coin that can be engraved with a personal message or dedication.",
      imgs: [I.goldCoins31, I.goldCoins32, I.goldCoins33],
      features: [
        "24K Pure Gold",
        "Custom Engraving",
        "Personal Dedication",
        "BIS Certified",
      ],
    },
    {
      name: "Gold Coin with Zodiac Sign",
      desc: "A 24K gold coin featuring your zodiac sign — a personalized astrological gift.",
      imgs: [I.goldCoins34, I.goldCoins35, I.goldCoins36],
      features: [
        "24K Pure Gold",
        "Zodiac Sign",
        "Astrological Gift",
        "Certificate Included",
      ],
    },
    {
      name: "Gold Coin with National Emblem",
      desc: "A 24K gold coin featuring the national emblem — a patriotic keepsake.",
      imgs: [I.goldCoins37, I.goldCoins38, I.goldCoins39],
      features: [
        "24K Pure Gold",
        "National Emblem",
        "Patriotic Keepsake",
        "BIS Certified",
      ],
    },
    {
      name: "Gold Coin with Custom Shape",
      desc: "A 24K gold coin that can be minted in a unique shape of your choice.",
      imgs: [I.goldCoins40, I.goldCoins41, I.goldCoins42],
      features: [
        "24K Pure Gold",
        "Custom Shape",
        "Unique Design",
        "Certificate Included",
      ],
    },
    {
      name: "Gold Coin with Family Crest",
      desc: "A 24K gold coin featuring your family crest or emblem — a heritage keepsake.",
      imgs: [I.goldCoins43, I.goldCoins44, I.goldCoins45],
      features: [
        "24K Pure Gold",
        "Family Crest",
        "Heritage Keepsake",
        "BIS Certified",
      ],
    },
    {
      name: "Gold Coin with Custom Artwork",
      desc: "A 24K gold coin that can be engraved with your own artwork or illustration.",
      imgs: [I.goldCoins46, I.goldCoins47, I.goldCoins48],
      features: [
        "24K Pure Gold",
        "Custom Artwork",
        "Engraving Option",
        "Certificate Included",
      ],
    },
  ],
  "silver/mens/rings": [
    {
      name: "Oxidised Silver Band",
      desc: "A wide oxidised band with tribal texture — contemporary style with deep roots.",
      imgs: [I.silvermrings, I.silvermrings2, I.silvermrings3],
      features: [
        "92.5 Silver",
        "Hand-oxidised",
        "Tribal Pattern",
        "Unisex Design",
      ],
    },
    {
      name: "Plain Silver Band",
      desc: "A simple polished silver band — the understated choice of the discerning man.",
      imgs: [I.silvermrings4, I.silvermrings5, I.silvermrings6],
      features: [
        "92.5 Silver",
        "High-polish",
        "BIS Certified",
        "Comfortable Fit",
      ],
    },
    {
      name: "Silver Signet Ring",
      desc: "A classic signet ring in sterling silver — ready for engraving your personal crest.",
      imgs: [I.silvermrings7, I.silvermrings8, I.silvermrings9],
      features: [
        "92.5 Silver",
        "Signet Style",
        "Engravable Surface",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Spinner Ring",
      desc: "A sterling silver spinner ring with a smooth inner band — stress relief in style.",
      imgs: [I.silvermrings10, I.silvermrings11, I.silvermrings12],
      features: [
        "92.5 Silver",
        "Spinner Design",
        "Comfort Fit",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Celtic Ring",
      desc: "A sterling silver ring with intricate Celtic knotwork — a symbol of eternity.",
      imgs: [I.silvermrings13, I.silvermrings14, I.silvermrings15],
      features: [
        "92.5 Silver",
        "Celtic Knotwork",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Skull Ring",
      desc: "A bold sterling silver ring featuring a detailed skull motif — edgy and daring.",
      imgs: [I.silvermrings16, I.silvermrings17, I.silvermrings18],
      features: [
        "92.5 Silver",
        "Skull Motif",
        "Oxidised Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Geometric Ring",
      desc: "A modern sterling silver ring with geometric cutouts — sleek and contemporary.",
      imgs: [I.silvermrings19, I.silvermrings20, I.silvermrings21],
      features: [
        "92.5 Silver",
        "Geometric Cutouts",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Hammered Ring",
      desc: "A sterling silver ring with a hammered texture — rugged yet refined.",
      imgs: [I.silvermrings22, I.silvermrings23, I.silvermrings24],
      features: [
        "92.5 Silver",
        "Hammered Texture",
        "Comfort Fit",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Infinity Ring",
      desc: "A sterling silver ring with an infinity symbol design — timeless and meaningful.",
      imgs: [I.silvermrings25, I.silvermrings26, I.silvermrings27],
      features: [
        "92.5 Silver",
        "Infinity Symbol",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Tribal Ring",
      desc: "A sterling silver ring with tribal-inspired engravings — bold and distinctive.",
      imgs: [I.silvermrings28, I.silvermrings29, I.silvermrings30],
      features: [
        "92.5 Silver",
        "Tribal Engravings",
        "Oxidised Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Wave Ring",
      desc: "A sterling silver ring with a wave pattern — fluid design for the modern man.",
      imgs: [I.silvermrings31, I.silvermrings32, I.silvermrings33],
      features: [
        "92.5 Silver",
        "Wave Pattern",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Arrow Ring",
      desc: "A sterling silver ring with an arrow motif — symbolizing direction and purpose.",
      imgs: [I.silvermrings34, I.silvermrings35, I.silvermrings36],
      features: [
        "92.5 Silver",
        "Arrow Motif",
        "Oxidised Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Shield Ring",
      desc: "A sterling silver ring with a shield design — strength and protection in style.",
      imgs: [I.silvermrings37, I.silvermrings38, I.silvermrings39],
      features: [
        "92.5 Silver",
        "Shield Design",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Anchor Ring",
      desc: "A sterling silver ring with an anchor motif — stability and hope for the modern man.",
      imgs: [I.silvermrings40, I.silvermrings41, I.silvermrings42],
      features: [
        "92.5 Silver",
        "Anchor Motif",
        "Oxidised Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Compass Ring",
      desc: "A sterling silver ring with a compass design — guiding the wearer through life's journey.",
      imgs: [I.silvermrings43, I.silvermrings44, I.silvermrings45],
      features: [
        "92.5 Silver",
        "Compass Design",
        "Polished Finish",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Feather Ring",
      desc: "A sterling silver ring with a feather motif — lightness and freedom in design.",
      imgs: [I.silvermrings46, I.silvermrings47, I.silvermrings48],
      features: [
        "92.5 Silver",
        "Feather Motif",
        "Oxidised Finish",
        "BIS Certified",
      ],
    },
  ],
  "silver/mens/chains": [
    {
      name: "Silver Curb Chain",
      desc: "A sturdy curb-link silver chain — the masculine choice for everyday wear.",
      imgs: [I.silvermch, I.silvermch2, I.silvermch3],
      features: ["92.5 Silver", "Curb Link", "Lobster Clasp", "BIS Certified"],
    },
    {
      name: "Silver Rope Chain",
      desc: 'Twisted rope weave in sterling silver, available in 18" and 22".',
      imgs: [I.silvermch4, I.silvermch5, I.silvermch6],
      features: ["92.5 Silver", "Rope Weave", "2 Lengths", "Hallmarked"],
    },
    {
      name: "Silver Box Chain",
      desc: "A sleek box-link silver chain — versatile and durable for daily wear.",
      imgs: [I.silvermch7, I.silvermch8, I.silvermch9],
      features: ["92.5 Silver", "Box Link", "Lobster Clasp", "BIS Certified"],
    },
    {
      name: "Silver Figaro Chain",
      desc: "Alternating link pattern in sterling silver — a classic chain style.",
      imgs: [I.silvermch10, I.silvermch11, I.silvermch12],
      features: [
        "92.5 Silver",
        "Figaro Pattern",
        "Lobster Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Snake Chain",
      desc: "Smooth and flexible sterling silver chain with a snake-like appearance.",
      imgs: [I.silvermch13, I.silvermch14, I.silvermch15],
      features: [
        "92.5 Silver",
        "Snake Design",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Ball Chain",
      desc: "Tiny silver spheres strung together — a minimalist chain for pendants.",
      imgs: [I.silvermch16, I.silvermch17, I.silvermch18],
      features: ["92.5 Silver", "Ball Link", "Lobster Clasp", "Hallmarked"],
    },
    {
      name: "Silver Anchor Chain",
      desc: "Sterling silver chain with anchor-shaped links — nautical style.",
      imgs: [I.silvermch19, I.silvermch20, I.silvermch21],
      features: [
        "92.5 Silver",
        "Anchor Links",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Wheat Chain",
      desc: "Interwoven links in sterling silver — a textured chain for a refined look.",
      imgs: [I.silvermch22, I.silvermch23, I.silvermch24],
      features: ["92.5 Silver", "Wheat Pattern", "Lobster Clasp", "Hallmarked"],
    },
    {
      name: "Silver Herringbone Chain",
      desc: "Flat, slanted links in sterling silver — a smooth and elegant chain.",
      imgs: [I.silvermch25, I.silvermch26, I.silvermch27],
      features: [
        "92.5 Silver",
        "Herringbone Design",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Mariner Chain",
      desc: "Sterling silver chain with oval links and a bar in the center — a nautical-inspired design.",
      imgs: [I.silvermch28, I.silvermch29, I.silvermch30],
      features: ["92.5 Silver", "Mariner Style", "Lobster Clasp", "Hallmarked"],
    },
    {
      name: "Silver Rope Twist Chain",
      desc: "Twisted rope design in sterling silver — a classic and versatile chain.",
      imgs: [I.silvermch31, I.silvermch32, I.silvermch33],
      features: ["92.5 Silver", "Rope Twist", "Lobster Clasp", "BIS Certified"],
    },
    {
      name: "Silver Venetian Chain",
      desc: "Flat, square links in sterling silver — a sleek and modern chain.",
      imgs: [I.silvermch34, I.silvermch35, I.silvermch36],
      features: [
        "92.5 Silver",
        "Venetian Design",
        "Lobster Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Belcher Chain",
      desc: "Uniform round links in sterling silver — a simple and classic chain.",
      imgs: [I.silvermch37, I.silvermch38, I.silvermch39],
      features: [
        "92.5 Silver",
        "Belcher Style",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Singapore Chain",
      desc: "Twisted and textured sterling silver chain — a sparkling effect for everyday wear.",
      imgs: [I.silvermch40, I.silvermch41, I.silvermch42],
      features: [
        "92.5 Silver",
        "Singapore Design",
        "Lobster Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Cable Chain",
      desc: "Interlocking oval links in sterling silver — a versatile and durable chain.",
      imgs: [I.silvermch43, I.silvermch44, I.silvermch45],
      features: [
        "92.5 Silver",
        "Cable Style",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Rolo Chain",
      desc: "Round links in sterling silver — a classic chain style for pendants.",
      imgs: [I.silvermch46, I.silvermch47, I.silvermch48],
      features: ["92.5 Silver", "Rolo Design", "Lobster Clasp", "Hallmarked"],
    },
  ],
  "silver/mens/kada": [
    {
      name: "Men's Silver Kada",
      desc: "Solid 92.5 silver kada with rope-edge — tradition worn with authority.",
      imgs: [I.silvermka, I.silvermka2, I.silvermka3],
      features: ["92.5 Silver", "Rope Edge", "Open Cuff", "BIS Hallmarked"],
    },
    {
      name: "Plain Silver Kada",
      desc: "A smooth, heavy silver kada — minimal design, maximum presence.",
      imgs: [I.silvermka4, I.silvermka5, I.silvermka6],
      features: ["92.5 Silver", "Plain Finish", "Heavy Gauge", "BIS Certified"],
    },
    {
      name: "Oxidised Silver Kada",
      desc: "A bold oxidised silver kada with tribal etching — statement piece for the modern man.",
      imgs: [I.silvermka7, I.silvermka8, I.silvermka9],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Tribal Etching",
        "BIS Certified",
      ],
    },
    {
      name: "Engraved Silver Kada",
      desc: "A sterling silver kada engraved with a geometric pattern — contemporary and stylish.",
      imgs: [I.silvermka10, I.silvermka11, I.silvermka12],
      features: [
        "92.5 Silver",
        "Geometric Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Cuff Kada",
      desc: "A wide sterling silver cuff kada with a brushed finish — bold and masculine.",
      imgs: [I.silvermka13, I.silvermka14, I.silvermka15],
      features: ["92.5 Silver", "Brushed Finish", "Wide Cuff", "BIS Certified"],
    },
    {
      name: "Silver Tribal Kada",
      desc: "A sterling silver kada with tribal-inspired motifs — edgy and distinctive.",
      imgs: [I.silvermka16, I.silvermka17, I.silvermka18],
      features: [
        "92.5 Silver",
        "Tribal Motifs",
        "Oxidised Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Hammered Kada",
      desc: "A sterling silver kada with a hammered texture — rugged yet refined.",
      imgs: [I.silvermka19, I.silvermka20, I.silvermka21],
      features: [
        "92.5 Silver",
        "Hammered Texture",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Rope Edge Kada",
      desc: "A sterling silver kada with a rope-edge design — classic and timeless.",
      imgs: [I.silvermka22, I.silvermka23, I.silvermka24],
      features: [
        "92.5 Silver",
        "Rope Edge",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Oxidised Kada",
      desc: "A sterling silver kada with an oxidised finish and engraved detailing — bold and contemporary.",
      imgs: [I.silvermka25, I.silvermka26, I.silvermka27],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Engraved Detailing",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Twist Kada",
      desc: "A twisted sterling silver kada with a polished finish — timeless craftsmanship for everyday wear.",
      imgs: [I.silvermka28, I.silvermka29, I.silvermka30],
      features: [
        "92.5 Silver",
        "Twist Design",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Textured Kada",
      desc: "Sterling silver kada featuring a finely textured surface for a rugged yet elegant appearance.",
      imgs: [I.silvermka31, I.silvermka32, I.silvermka33],
      features: ["92.5 Silver", "Textured Finish", "Comfort Fit", "Hallmarked"],
    },
    {
      name: "Silver Dual Tone Kada",
      desc: "Contemporary dual-tone silver kada with contrasting finishes for a distinctive style.",
      imgs: [I.silvermka34, I.silvermka35, I.silvermka36],
      features: [
        "92.5 Silver",
        "Dual Tone Finish",
        "Open Cuff",
        "BIS Certified",
      ],
    },
    // {
    //   name: "Silver Greek Pattern Kada",
    //   desc: "Premium sterling silver kada adorned with a classic Greek key pattern for a refined look.",
    //   imgs: [I.silvermka37, I.silvermka38, I.silvermka39],
    //   features: [
    //     "92.5 Silver",
    //     "Greek Pattern",
    //     "Polished Finish",
    //     "Hallmarked",
    //   ],
    // },
    // {
    //   name: "Silver Matte Finish Kada",
    //   desc: "Minimalist silver kada with a smooth matte finish that blends elegance with durability.",
    //   imgs: [I.silvermka40, I.silvermka41, I.silvermka42],
    //   features: ["92.5 Silver", "Matte Finish", "Heavy Gauge", "BIS Certified"],
    // },
    // {
    //   name: "Silver Ridged Kada",
    //   desc: "Sterling silver kada featuring raised ridges for a bold and masculine appearance.",
    //   imgs: [I.silvermka43, I.silvermka44, I.silvermka45],
    //   features: ["92.5 Silver", "Ridged Design", "Comfort Fit", "Hallmarked"],
    // },
    // {
    //   name: "Silver Heritage Kada",
    //   desc: "Traditional handcrafted sterling silver kada inspired by heritage motifs and timeless design.",
    //   imgs: [I.silvermka46, I.silvermka47, I.silvermka48],
    //   features: [
    //     "92.5 Silver",
    //     "Heritage Design",
    //     "Handcrafted Finish",
    //     "BIS Certified",
    //   ],
    // },
  ],
  "silver/mens/bracelets": [
    {
      name: "Silver Curb Bracelet",
      desc: "Curb-link silver bracelet with a box clasp — bold and enduring.",
      imgs: [I.silvermbra, I.silvermbra2, I.silvermbra3],
      features: ["92.5 Silver", "Curb Link", "Box Clasp", "BIS Certified"],
    },
    {
      name: "Silver ID Bracelet",
      desc: "Flat-plate silver ID bracelet with an engravable surface.",
      imgs: [I.silvermbra4, I.silvermbra5, I.silvermbra6],
      features: [
        "92.5 Silver",
        "Engravable Plate",
        "Lobster Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Rope Bracelet",
      desc: "Twisted rope silver bracelet with a secure clasp — classic and versatile.",
      imgs: [I.silvermbra7, I.silvermbra8, I.silvermbra9],
      features: [
        "92.5 Silver",
        "Rope Design",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Box Bracelet",
      desc: "Box-link silver bracelet with a polished finish — sleek and modern.",
      imgs: [I.silvermbra10, I.silvermbra11, I.silvermbra12],
      features: ["92.5 Silver", "Box Link", "Lobster Clasp", "Hallmarked"],
    },
    {
      name: "Silver Figaro Bracelet",
      desc: "Figaro-link silver bracelet with alternating link sizes — stylish and contemporary.",
      imgs: [I.silvermbra13, I.silvermbra14, I.silvermbra15],
      features: [
        "92.5 Silver",
        "Figaro Pattern",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Snake Bracelet",
      desc: "Smooth snake-link silver bracelet with a secure clasp — elegant and understated.",
      imgs: [I.silvermbra16, I.silvermbra17, I.silvermbra18],
      features: ["92.5 Silver", "Snake Design", "Lobster Clasp", "Hallmarked"],
    },
    {
      name: "Silver Ball Bracelet",
      desc: "Tiny silver spheres strung into a delicate bracelet — minimalist and versatile.",
      imgs: [I.silvermbra19, I.silvermbra20, I.silvermbra21],
      features: ["92.5 Silver", "Ball Link", "Lobster Clasp", "BIS Certified"],
    },
    {
      name: "Silver Anchor Bracelet",
      desc: "Sterling silver bracelet with anchor-shaped links — nautical style.",
      imgs: [I.silvermbra22, I.silvermbra23, I.silvermbra24],
      features: ["92.5 Silver", "Anchor Links", "Lobster Clasp", "Hallmarked"],
    },
    {
      name: "Silver Wheat Bracelet",
      desc: "Interwoven links in sterling silver — a textured bracelet for a refined look.",
      imgs: [I.silvermbra25, I.silvermbra26, I.silvermbra27],
      features: [
        "92.5 Silver",
        "Wheat Pattern",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Herringbone Bracelet",
      desc: "Flat, slanted links in sterling silver — a smooth and elegant bracelet.",
      imgs: [I.silvermbra28, I.silvermbra29, I.silvermbra30],
      features: [
        "92.5 Silver",
        "Herringbone Design",
        "Lobster Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Mariner Bracelet",
      desc: "Sterling silver bracelet with oval links and a bar in the center — a nautical-inspired design.",
      imgs: [I.silvermbra31, I.silvermbra32, I.silvermbra33],
      features: [
        "92.5 Silver",
        "Mariner Style",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Rope Twist Bracelet",
      desc: "Twisted rope design in sterling silver — a classic and versatile bracelet.",
      imgs: [I.silvermbra34, I.silvermbra35, I.silvermbra36],
      features: ["92.5 Silver", "Rope Twist", "Lobster Clasp", "Hallmarked"],
    },
    // {
    //   name: "Silver Venetian Bracelet",
    //   desc: "Flat, square links in sterling silver — a sleek and modern bracelet.",
    //   imgs: [I.silvermbra37, I.silvermbra38, I.silvermbra39],
    //   features: [
    //     "92.5 Silver",
    //     "Venetian Design",
    //     "Lobster Clasp",
    //     "BIS Certified",
    //   ],
    // },
    // {
    //   name: "Silver Belcher Bracelet",
    //   desc: "Uniform round links in sterling silver — a simple and classic bracelet.",
    //   imgs: [I.silvermbra40, I.silvermbra41, I.silvermbra42],
    //   features: ["92.5 Silver", "Belcher Style", "Lobster Clasp", "Hallmarked"],
    // },
    // {
    //   name: "Silver Singapore Bracelet",
    //   desc: "Twisted and textured sterling silver bracelet — a sparkling effect for everyday wear.",
    //   imgs: [I.silvermbra43, I.silvermbra44, I.silvermbra45],
    //   features: [
    //     "92.5 Silver",
    //     "Singapore Design",
    //     "Lobster Clasp",
    //     "BIS Certified",
    //   ],
    // },
    // {
    //   name: "Silver Cable Bracelet",
    //   desc: "Interlocking oval links in sterling silver — a versatile and durable bracelet.",
    //   imgs: [I.silvermbra46, I.silvermbra47, I.silvermbra48],
    //   features: ["92.5 Silver", "Cable Style", "Lobster Clasp", "Hallmarked"],
    // },
  ],

  "silver/womens/rings": [
    {
      name: "Filigree Silver Ring",
      desc: "Gossamer-thin silver wire woven into a delicate filigree ring.",
      imgs: [I.silverwri],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Handcrafted",
        "Lightweight",
      ],
    },
    {
      name: "Stone-set Silver Ring",
      desc: "A 92.5 silver ring set with a cushion-cut amethyst — colour and craft.",
      imgs: [I.silverwri6],
      features: [
        "92.5 Silver",
        "Amethyst Stone",
        "Prong Setting",
        "BIS Certified",
      ],
    },
    {
      name: "Oxidised Silver Ring",
      desc: "A bold oxidised silver ring with tribal etching — statement piece for the modern woman.",
      imgs: [I.silverwri7],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Tribal Etching",
        "BIS Certified",
      ],
    },
    {
      name: "Engraved Silver Ring",
      desc: "A sterling silver ring engraved with a geometric pattern — contemporary and stylish.",
      imgs: [I.silverwri10],
      features: [
        "92.5 Silver",
        "Geometric Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Cuff Ring",
      desc: "A wide sterling silver cuff ring with a brushed finish — bold and feminine.",
      imgs: [I.silverwri13],
      features: ["92.5 Silver", "Brushed Finish", "Wide Cuff", "BIS Certified"],
    },
    {
      name: "Silver Tribal Ring",
      desc: "A sterling silver ring with tribal-inspired motifs — edgy and distinctive.",
      imgs: [I.silverwri16],
      features: [
        "92.5 Silver",
        "Tribal Motifs",
        "Oxidised Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Hammered Ring",
      desc: "A sterling silver ring with a hammered texture — rugged yet refined.",
      imgs: [I.silverwri19],
      features: [
        "92.5 Silver",
        "Hammered Texture",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Rope Edge Ring",
      desc: "A sterling silver ring with a rope-edge design — classic and timeless.",
      imgs: [I.silverwri22],
      features: [
        "92.5 Silver",
        "Rope Edge",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Oxidised Ring",
      desc: "A sterling silver ring with an oxidised finish and engraved detailing — bold and contemporary.",
      imgs: [I.silverwri25],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Engraved Detailing",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Cuff Ring",
      desc: "A wide sterling silver cuff ring with a brushed finish — bold and feminine.",
      imgs: [I.silverwri28],
      features: ["92.5 Silver", "Brushed Finish", "Wide Cuff", "BIS Certified"],
    },
    {
      name: "Silver Tribal Ring",
      desc: "A sterling silver ring with tribal-inspired motifs — edgy and distinctive.",
      imgs: [I.silverwri31],
      features: [
        "92.5 Silver",
        "Tribal Motifs",
        "Oxidised Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Hammered Ring",
      desc: "A sterling silver ring with a hammered texture — rugged yet refined.",
      imgs: [I.silverwri34],
      features: [
        "92.5 Silver",
        "Hammered Texture",
        "Polished Finish",
        "BIS Certified",
      ],
    },
  ],
  "silver/womens/chains": [
    {
      name: "Silver Box Chain",
      desc: "A fine silver box chain for layering or wearing alone with a pendant.",
      imgs: [I.silverwch, I.silverwch2, I.silverwch3],
      features: ["92.5 Silver", "Box Link", '16" Length', "BIS Certified"],
    },
    {
      name: "Silver Ball Chain",
      desc: "Tiny silver spheres strung into a delicate ball chain necklace.",
      imgs: [I.silverwch4, I.silverwch5, I.silverwch6],
      features: ["92.5 Silver", "Ball Link", "Lightweight", "Hallmarked"],
    },
    {
      name: "Silver Rope Chain",
      desc: 'Twisted rope weave in sterling silver, available in 18" and 22".',
      imgs: [I.silverwch7, I.silverwch8, I.silverwch9],
      features: ["92.5 Silver", "Rope Weave", "2 Lengths", "BIS Certified"],
    },
    {
      name: "Silver Snake Chain",
      desc: "Smooth and flexible sterling silver chain with a snake-like appearance.",
      imgs: [I.silverwch10, I.silverwch11, I.silverwch12],
      features: ["92.5 Silver", "Snake Design", '16" Length', "Hallmarked"],
    },
    {
      name: "Silver Curb Chain",
      desc: "A sturdy curb-link silver chain — the versatile choice for everyday wear.",
      imgs: [I.silverwch13, I.silverwch14, I.silverwch15],
      features: ["92.5 Silver", "Curb Link", '18" Length', "BIS Certified"],
    },
    {
      name: "Silver Figaro Chain",
      desc: "Alternating link pattern in sterling silver — a classic chain style.",
      imgs: [I.silverwch16, I.silverwch17, I.silverwch18],
      features: ["92.5 Silver", "Figaro Pattern", '20" Length', "Hallmarked"],
    },
    {
      name: "Silver Herringbone Chain",
      desc: "Flat, slanted links in sterling silver — a smooth and elegant chain.",
      imgs: [I.silverwch19, I.silverwch20, I.silverwch21],
      features: [
        "92.5 Silver",
        "Herringbone Design",
        '16" Length',
        "BIS Certified",
      ],
    },
    {
      name: "Silver Mariner Chain",
      desc: "Sterling silver chain with oval links and a bar in the center — a nautical-inspired design.",
      imgs: [I.silverwch22, I.silverwch23, I.silverwch24],
      features: ["92.5 Silver", "Mariner Style", '18" Length', "Hallmarked"],
    },
    {
      name: "Silver Rope Twist Chain",
      desc: "Twisted rope design in sterling silver — a classic and versatile chain.",
      imgs: [I.silverwch25, I.silverwch26, I.silverwch27],
      features: ["92.5 Silver", "Rope Twist", '20" Length', "BIS Certified"],
    },
    {
      name: "Silver Venetian Chain",
      desc: "Flat, square links in sterling silver — a sleek and modern chain.",
      imgs: [I.silverwch28, I.silverwch29, I.silverwch30],
      features: ["92.5 Silver", "Venetian Design", '16" Length', "Hallmarked"],
    },
    {
      name: "Silver Belcher Chain",
      desc: "Uniform round links in sterling silver — a simple and classic chain.",
      imgs: [I.silverwch31, I.silverwch32, I.silverwch33],
      features: ["92.5 Silver", "Belcher Style", '18" Length', "BIS Certified"],
    },
    {
      name: "Silver Singapore Chain",
      desc: "Twisted and textured sterling silver chain — a sparkling effect for everyday wear.",
      imgs: [I.silverwch34, I.silverwch35, I.silverwch36],
      features: ["92.5 Silver", "Singapore Design", '20" Length', "Hallmarked"],
    },
    {
      name: "Silver Cable Chain",
      desc: "Interlocking oval links in sterling silver — a versatile and durable chain.",
      imgs: [I.silverwch37, I.silverwch38, I.silverwch39],
      features: ["92.5 Silver", "Cable Style", '16" Length', "BIS Certified"],
    },
    {
      name: "Silver Rolo Chain",
      desc: "Round links in sterling silver — a classic chain style for pendants.",
      imgs: [I.silverwch40, I.silverwch41, I.silverwch42],
      features: ["92.5 Silver", "Rolo Design", '18" Length', "Hallmarked"],
    },
    {
      name: "Silver Anchor Chain",
      desc: "Sterling silver chain with anchor-shaped links — nautical style.",
      imgs: [I.silverwch43, I.silverwch44, I.silverwch45],
      features: ["92.5 Silver", "Anchor Links", '20" Length', "BIS Certified"],
    },
    {
      name: "Silver Wheat Chain",
      desc: "Interwoven links in sterling silver — a textured chain for a refined look.",
      imgs: [I.silverwch46, I.silverwch47, I.silverwch48],
      features: ["92.5 Silver", "Wheat Pattern", '16" Length', "Hallmarked"],
    },
  ],
  "silver/womens/earrings": [
    {
      name: "Oxidised Silver Drops",
      desc: "Long oxidised silver drops with geometric patterning — bold and contemporary.",
      imgs: [I.silverwerr3, I.silverwerr1, I.silverwerr2],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Hook Back",
        "Statement Piece",
      ],
    },
    {
      name: "Silver Stud",
      desc: "A simple polished silver stud — the silver wardrobe essential.",
      imgs: [I.silverwerr4, I.silverwerr5, I.silverwerr6],
      features: ["92.5 Silver", "High-polish", "Push-back", "Hypoallergenic"],
    },
    {
      name: "Filigree Silver Earrings",
      desc: "Delicate Cuttack filigree silver earrings — lightweight, intricate, and timeless.",
      imgs: [I.silverwerr7, I.silverwerr8, I.silverwerr9],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Hoop Earrings",
      desc: "Classic sterling silver hoops — versatile, elegant, and enduring.",
      imgs: [I.silverwerr10, I.silverwerr11, I.silverwerr12],
      features: ["92.5 Silver", "Hoop Design", "Hinged Back", "Hallmarked"],
    },
    {
      name: "Silver Chandbali Earrings",
      desc: "Traditional silver chandbali earrings with intricate detailing — a festive favourite.",
      imgs: [I.silverwerr13, I.silverwerr14, I.silverwerr15],
      features: [
        "92.5 Silver",
        "Chandbali Design",
        "Hook Back",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Jhumka Earrings",
      desc: "Classic silver jhumka earrings with bell-shaped design — timeless and elegant.",
      imgs: [I.silverwerr16, I.silverwerr17, I.silverwerr18],
      features: ["92.5 Silver", "Jhumka Design", "Hook Back", "Hallmarked"],
    },
    {
      name: "Silver Drop Earrings",
      desc: "Elegant silver drop earrings with a minimalist design — perfect for everyday wear.",
      imgs: [I.silverwerr19, I.silverwerr20, I.silverwerr21],
      features: ["92.5 Silver", "Drop Design", "Hook Back", "BIS Certified"],
    },
    {
      name: "Silver Ear Cuffs",
      desc: "Trendy silver ear cuffs with intricate patterns — no piercings needed.",
      imgs: [I.silverwerr22, I.silverwerr23, I.silverwerr24],
      features: [
        "92.5 Silver",
        "Ear Cuff Design",
        "Adjustable Fit",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Threader Earrings",
      desc: "Delicate silver threader earrings with a sleek design — lightweight and versatile.",
      imgs: [I.silverwerr25, I.silverwerr26, I.silverwerr27],
      features: [
        "92.5 Silver",
        "Threader Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Huggie Earrings",
      desc: "Small silver huggie hoops that hug the earlobe — subtle and stylish.",
      imgs: [I.silverwerr28, I.silverwerr29, I.silverwerr30],
      features: ["92.5 Silver", "Huggie Design", "Hinged Back", "Hallmarked"],
    },
    {
      name: "Silver Tassel Earrings",
      desc: "Sterling silver tassel earrings with a playful design — perfect for parties.",
      imgs: [I.silverwerr31, I.silverwerr32, I.silverwerr33],
      features: ["92.5 Silver", "Tassel Design", "Hook Back", "BIS Certified"],
    },
    {
      name: "Silver Geometric Earrings",
      desc: "Modern silver earrings with geometric shapes — contemporary and chic.",
      imgs: [I.silverwerr34, I.silverwerr35, I.silverwerr36],
      features: ["92.5 Silver", "Geometric Design", "Hook Back", "Hallmarked"],
    },
  ],
  "silver/womens/jhumke": [
    {
      name: "Oxidised Silver Jhumke",
      desc: "Large oxidised jhumke with beaded drops — bold, beautiful, unmistakably Indian.",
      imgs: [I.silverwj, I.silverwj2, I.silverwj3],
      features: [
        "92.5 Silver",
        "Hand Oxidised",
        "Beaded Drops",
        "Lever-back Hook",
      ],
    },
    {
      name: "Plain Silver Jhumke",
      desc: "Classic jhumke in polished silver — the heritage earring for everyday wear.",
      imgs: [I.silverwj4, I.silverwj5, I.silverwj6],
      features: [
        "92.5 Silver",
        "Plain Finish",
        "Comfortable Fit",
        "BIS Certified",
      ],
    },
    {
      name: "Filigree Silver Jhumke",
      desc: "Cuttack filigree jhumke in sterling silver — intricate, lightweight, and timeless.",
      imgs: [I.silverwj7, I.silverwj8, I.silverwj9],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Pearl Jhumke",
      desc: "Elegant jhumke with freshwater pearls in sterling silver — classic and feminine.",
      imgs: [I.silverwj10, I.silverwj11, I.silverwj12],
      features: [
        "92.5 Silver",
        "Freshwater Pearls",
        "Lever-back Hook",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Beaded Jhumke",
      desc: "Sterling silver jhumke with tiny beads — playful, traditional, and versatile.",
      imgs: [I.silverwj13, I.silverwj14, I.silverwj15],
      features: [
        "92.5 Silver",
        "Beaded Design",
        "Lever-back Hook",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Oxidised Jhumke",
      desc: "Bold oxidised silver jhumke with tribal motifs — statement earrings for the modern woman.",
      imgs: [I.silverwj16, I.silverwj17, I.silverwj18],
      features: [
        "92.5 Silver",
        "Hand Oxidised",
        "Tribal Motifs",
        "Lever-back Hook",
      ],
    },
    {
      name: "Silver Filigree Jhumke",
      desc: "Intricate Cuttack filigree jhumke in sterling silver — lightweight and elegant.",
      imgs: [I.silverwj19, I.silverwj20, I.silverwj21],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Pearl Drop Jhumke",
      desc: "Sterling silver jhumke with dangling freshwater pearls — graceful and timeless.",
      imgs: [I.silverwj22, I.silverwj23, I.silverwj24],
      features: [
        "92.5 Silver",
        "Freshwater Pearls",
        "Lever-back Hook",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Beaded Drop Jhumke",
      desc: "Delicate jhumke with tiny silver beads and drops — playful and traditional.",
      imgs: [I.silverwj25, I.silverwj26, I.silverwj27],
      features: [
        "92.5 Silver",
        "Beaded Design",
        "Lever-back Hook",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Oxidised Drop Jhumke",
      desc: "Bold oxidised silver jhumke with dangling drops — statement earrings for the modern woman.",
      imgs: [I.silverwj28, I.silverwj29, I.silverwj30],
      features: [
        "92.5 Silver",
        "Hand Oxidised",
        "Dangling Drops",
        "Lever-back Hook",
      ],
    },
    {
      name: "Silver Filigree Drop Jhumke",
      desc: "Intricate Cuttack filigree jhumke with dangling drops — lightweight and elegant.",
      imgs: [I.silverwj31, I.silverwj32, I.silverwj33],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Dangling Drops",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Pearl Cluster Jhumke",
      desc: "Sterling silver jhumke with clustered freshwater pearls — feminine and timeless.",
      imgs: [I.silverwj34, I.silverwj35, I.silverwj36],
      features: [
        "92.5 Silver",
        "Freshwater Pearls",
        "Cluster Design",
        "Hallmarked",
      ],
    },
  ],

  "silver/womens/payal": [
    {
      name: "Designer Payal",
      desc: "Sterling silver anklets with a ghungroo pattern — the music of tradition.",
      imgs: [I.silverp, I.silverp3, I.silverp2],
      features: [
        "92.5 Silver",
        "Ghungroo Bells",
        "Lobster Clasp",
        "Sold as Pair",
      ],
    },
    {
      name: "Plain Payal",
      desc: "A simple polished silver payal — minimal and comfortable for daily wear.",
      imgs: [I.silverp4, I.silverp5, I.silverp6],
      features: ["92.5 Silver", "Plain Design", "Adjustable", "BIS Certified"],
    },
    {
      name: "Oxidised Payal",
      desc: "An oxidised silver payal with tribal motifs — bold, beautiful, and unmistakably Indian.",
      imgs: [I.silverp7, I.silverp8, I.silverp9],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Tribal Motifs",
        "BIS Certified",
      ],
    },
    {
      name: "Filigree Payal",
      desc: "Cuttack filigree silver payal — intricate, lightweight, and timeless.",
      imgs: [I.silverp10, I.silverp11, I.silverp12],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Beaded Payal",
      desc: "Sterling silver payal with tiny beads — playful, traditional, and versatile.",
      imgs: [I.silverp13, I.silverp14, I.silverp15],
      features: ["92.5 Silver", "Beaded Design", "Adjustable", "BIS Certified"],
    },
    {
      name: "Oxidised Beaded Payal",
      desc: "Bold oxidised silver payal with beaded drops — statement anklet for the modern woman.",
      imgs: [I.silverp16, I.silverp17, I.silverp18],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Beaded Design",
        "Lever-back Hook",
      ],
    },
    {
      name: "Filigree Beaded Payal",
      desc: "Intricate Cuttack filigree silver payal with beaded drops — lightweight and elegant.",
      imgs: [I.silverp19, I.silverp20, I.silverp21],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Beaded Design",
        "BIS Certified",
      ],
    },
    {
      name: "Pearl Payal",
      desc: "Sterling silver payal with dangling freshwater pearls — graceful and timeless.",
      imgs: [I.silverp22, I.silverp23, I.silverp24],
      features: [
        "92.5 Silver",
        "Freshwater Pearls",
        "Dangling Design",
        "Hallmarked",
      ],
    },
    {
      name: "Beaded Pearl Payal",
      desc: "Delicate payal with tiny silver beads and dangling freshwater pearls — playful and traditional.",
      imgs: [I.silverp25, I.silverp26, I.silverp27],
      features: [
        "92.5 Silver",
        "Beaded Design",
        "Freshwater Pearls",
        "BIS Certified",
      ],
    },
    {
      name: "Oxidised Pearl Payal",
      desc: "Bold oxidised silver payal with dangling freshwater pearls — statement anklet for the modern woman.",
      imgs: [I.silverp28, I.silverp29, I.silverp30],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Freshwater Pearls",
        "Lever-back Hook",
      ],
    },
    {
      name: "Filigree Pearl Payal",
      desc: "Intricate Cuttack filigree silver payal with dangling freshwater pearls — lightweight and elegant.",
      imgs: [I.silverp31, I.silverp32, I.silverp33],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Freshwater Pearls",
        "BIS Certified",
      ],
    },
    {
      name: "Tassel Payal",
      desc: "Sterling silver payal with dangling tassels — playful, traditional, and versatile.",
      imgs: [I.silverp34, I.silverp35, I.silverp36],
      features: ["92.5 Silver", "Tassel Design", "Adjustable", "Hallmarked"],
    },
    {
      name: "Beaded Tassel Payal",
      desc: "Delicate payal with tiny silver beads and dangling tassels — playful and traditional.",
      imgs: [I.silverp37, I.silverp38, I.silverp39],
      features: [
        "92.5 Silver",
        "Beaded Design",
        "Tassel Drops",
        "BIS Certified",
      ],
    },
    {
      name: "Oxidised Tassel Payal",
      desc: "Bold oxidised silver payal with dangling tassels — statement anklet for the modern woman.",
      imgs: [I.silverp40, I.silverp41, I.silverp42],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Tassel Design",
        "Lever-back Hook",
      ],
    },
    {
      name: "Filigree Tassel Payal",
      desc: "Intricate Cuttack filigree silver payal with dangling tassels — lightweight and elegant.",
      imgs: [I.silverp43, I.silverp44, I.silverp45],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Tassel Drops",
        "BIS Certified",
      ],
    },
    {
      name: "Pearl Tassel Payal",
      desc: "Sterling silver payal with dangling freshwater pearl tassels — graceful and timeless.",
      imgs: [I.silverp46, I.silverp47, I.silverp48],
      features: [
        "92.5 Silver",
        "Freshwater Pearls",
        "Tassel Design",
        "Hallmarked",
      ],
    },
  ],

  "silver/womens/toe-rings": [
    {
      name: "Floral Toe Ring",
      desc: "A tiny floral silver toe ring — delicate, traditional, auspicious.",
      imgs: [I.silvertr5, I.silvertr, I.silvertr3],
      features: ["92.5 Silver", "Floral Motif", "Open Band", "Adjustable"],
    },
    {
      name: "Plain Silver Toe Ring",
      desc: "A smooth plain silver toe ring — the enduring symbol of married grace.",
      imgs: [I.silvertr2, I.silvertr4, I.silvertr6],
      features: ["92.5 Silver", "Plain Band", "Open Design", "Lightweight"],
    },
    {
      name: "Oxidised Toe Ring",
      desc: "A bold oxidised silver toe ring with tribal etching — statement piece for the modern woman.",
      imgs: [I.silvertr7, I.silvertr8, I.silvertr9],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Tribal Etching",
        "Lever-back Hook",
      ],
    },
    {
      name: "Engraved Toe Ring",
      desc: "A sterling silver toe ring engraved with a geometric pattern — contemporary and stylish.",
      imgs: [I.silvertr10, I.silvertr11, I.silvertr12],
      features: [
        "92.5 Silver",
        "Geometric Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Toe Ring with Gemstone",
      desc: "A sterling silver toe ring set with a small gemstone — subtle sparkle for everyday wear.",
      imgs: [I.silvertr13, I.silvertr14, I.silvertr15],
      features: ["92.5 Silver", "Gemstone Accent", "Open Band", "Adjustable"],
    },
    {
      name: "Silver Toe Ring with Beads",
      desc: "A sterling silver toe ring adorned with tiny beads — playful and traditional.",
      imgs: [I.silvertr16, I.silvertr17, I.silvertr18],
      features: ["92.5 Silver", "Beaded Design", "Open Band", "Adjustable"],
    },
    {
      name: "Silver Toe Ring with Filigree",
      desc: "A delicate Cuttack filigree silver toe ring — intricate, lightweight, and timeless.",
      imgs: [I.silvertr19, I.silvertr20, I.silvertr21],
      features: ["92.5 Silver", "Cuttack Filigree", "Open Band", "Lightweight"],
    },
    {
      name: "Silver Toe Ring with Pearl",
      desc: "A sterling silver toe ring with a small freshwater pearl — classic and feminine.",
      imgs: [I.silvertr22, I.silvertr23, I.silvertr24],
      features: ["92.5 Silver", "Freshwater Pearl", "Open Band", "Adjustable"],
    },
    {
      name: "Silver Toe Ring with Tassel",
      desc: "A sterling silver toe ring with a tiny tassel — playful and unique.",
      imgs: [I.silvertr25, I.silvertr26, I.silvertr27],
      features: ["92.5 Silver", "Tassel Accent", "Open Band", "Adjustable"],
    },
    {
      name: "Silver Toe Ring with Leaf Motif",
      desc: "A sterling silver toe ring with a leaf motif — nature-inspired elegance.",
      imgs: [I.silvertr28, I.silvertr29, I.silvertr30],
      features: ["92.5 Silver", "Leaf Motif", "Open Band", "Adjustable"],
    },
    {
      name: "Silver Toe Ring with Geometric Design",
      desc: "A sterling silver toe ring with a geometric pattern — contemporary and stylish.",
      imgs: [I.silvertr31, I.silvertr32, I.silvertr33],
      features: ["92.5 Silver", "Geometric Design", "Open Band", "Adjustable"],
    },
    {
      name: "Silver Toe Ring with Tribal Etching",
      desc: "A sterling silver toe ring with tribal etching — bold and distinctive.",
      imgs: [I.silvertr34, I.silvertr35, I.silvertr36],
      features: ["92.5 Silver", "Tribal Etching", "Open Band", "Adjustable"],
    },
  ],
  "silver/womens/bracelets": [
    {
      name: "Filigree Silver Bracelet",
      desc: "Gossamer silver filigree bracelet — ultra-lightweight, exquisite craft.",
      imgs: [I.silverwb, I.silverwb2, I.silverwb3],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Toggle Clasp",
        "Ultra Lightweight",
      ],
    },
    {
      name: "Silver Charm Bracelet",
      desc: "A fine silver chain bracelet with five traditional charm drops.",
      imgs: [I.silverwb4, I.silverwb5, I.silverwb6],
      features: ["92.5 Silver", "5 Charms", "Lobster Clasp", "Customisable"],
    },
    {
      name: "Oxidised Silver Bracelet",
      desc: "A bold oxidised silver bracelet with tribal motifs — statement piece for the modern woman.",
      imgs: [I.silverwb7],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Tribal Motifs",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Bangle Set",
      desc: "A set of three polished silver bangles — classic, versatile, and timeless.",
      imgs: [I.silverwb10],
      features: [
        "92.5 Silver",
        "3-piece Set",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Cuff Bracelet",
      desc: "A wide sterling silver cuff bracelet with a brushed finish — bold and feminine.",
      imgs: [I.silverwb13],
      features: ["92.5 Silver", "Brushed Finish", "Wide Cuff", "BIS Certified"],
    },
    {
      name: "Silver Beaded Bracelet",
      desc: "A delicate silver bracelet adorned with tiny beads — playful and traditional.",
      imgs: [I.silverwb16],
      features: [
        "92.5 Silver",
        "Beaded Design",
        "Lobster Clasp",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Pearl Bracelet",
      desc: "An elegant silver bracelet with freshwater pearls — classic and feminine.",
      imgs: [I.silverwb19],
      features: [
        "92.5 Silver",
        "Freshwater Pearls",
        "Lobster Clasp",
        "Hallmarked",
      ],
    },
    {
      name: "Silver Filigree Bracelet",
      desc: "Intricate Cuttack filigree silver bracelet — lightweight and elegant.",
      imgs: [I.silverwb22],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Toggle Clasp",
        "Ultra Lightweight",
      ],
    },
    {
      name: "Silver Charm Bracelet",
      desc: "A fine silver chain bracelet with five traditional charm drops.",
      imgs: [I.silverwb25],
      features: ["92.5 Silver", "5 Charms", "Lobster Clasp", "Customisable"],
    },
    {
      name: "Oxidised Silver Bracelet",
      desc: "A bold oxidised silver bracelet with tribal motifs — statement piece for the modern  woman.",
      imgs: [I.silverwb28],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Tribal Motifs",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Bangle Set",
      desc: "A set of three polished silver bangles — classic, versatile, and timeless.",
      imgs: [I.silverwb31],
      features: [
        "92.5 Silver",
        "3-piece Set",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Cuff Bracelet",
      desc: "A wide sterling silver cuff bracelet with a brushed finish — bold and feminine.",
      imgs: [I.silverwb34],
      features: ["92.5 Silver", "Brushed Finish", "Wide Cuff", "BIS Certified"],
    },
  ],

  "silver/womens/kada": [
    {
      name: "Floral Silver Kada",
      desc: "A lightweight silver kada with hand-carved floral motifs — feminine tradition.",
      imgs: [I.silverwka, I.silverwka2, I.silverwka3],
      features: ["92.5 Silver", "Floral Motif", "Open Cuff", "Lightweight"],
    },
    {
      name: "Filigree Kada",
      desc: "A wide silver kada in Cuttack filigree — the finest Indian silverwork tradition.",
      imgs: [I.silverwka4, I.silverwka5, I.silverwka6],
      features: [
        "92.5 Silver",
        "Cuttack Filigree",
        "Handcrafted",
        "BIS Certified",
      ],
    },
    {
      name: "Oxidised Silver Kada",
      desc: "A bold oxidised silver kada with tribal etching — statement piece for the modern woman.",
      imgs: [I.silverwka7],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Tribal Etching",
        "BIS Certified",
      ],
    },
    {
      name: "Engraved Silver Kada",
      desc: "A sterling silver kada engraved with geometric patterns — contemporary and stylish.",
      imgs: [I.silverwka10],
      features: [
        "92.5 Silver",
        "Geometric Engraving",
        "Polished Finish",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Kada with Gemstone",
      desc: "A sterling silver kada set with a small gemstone — subtle sparkle for everyday wear.",
      imgs: [I.silverwka13],
      features: ["92.5 Silver", "Gemstone Accent", "Open Cuff", "Adjustable"],
    },
    {
      name: "Silver Kada with Beads",
      desc: "A delicate silver kada adorned with tiny beads — playful and traditional.",
      imgs: [I.silverwka16],
      features: ["92.5 Silver", "Beaded Design", "Open Cuff", "Adjustable"],
    },
    {
      name: "Silver Kada with Filigree",
      desc: "A delicate Cuttack filigree silver kada — intricate, lightweight, and timeless.",
      imgs: [I.silverwka19],
      features: ["92.5 Silver", "Cuttack Filigree", "Open Cuff", "Lightweight"],
    },
    {
      name: "Silver Kada with Pearl",
      desc: "A sterling silver kada with a small freshwater pearl — classic and feminine.",
      imgs: [I.silverwka22],
      features: ["92.5 Silver", "Freshwater Pearl", "Open Cuff", "Adjustable"],
    },
    {
      name: "Silver Kada with Tassel",
      desc: "A sterling silver kada with a tiny tassel — playful and unique.",
      imgs: [I.silverwka25],
      features: ["92.5 Silver", "Tassel Accent", "Open Cuff", "Adjustable"],
    },
    {
      name: "Silver Kada with Leaf Motif",
      desc: "A sterling silver kada with a leaf motif — nature-inspired elegance.",
      imgs: [I.silverwka28],
      features: ["92.5 Silver", "Leaf Motif", "Open Cuff", "Adjustable"],
    },
    {
      name: "Silver Kada with Geometric Design",
      desc: "A sterling silver kada with a geometric pattern — contemporary and stylish.",
      imgs: [I.silverwka31],
      features: ["92.5 Silver", "Geometric Design", "Open Cuff", "Adjustable"],
    },
    {
      name: "Silver Kada with Tribal Etching",
      desc: "A sterling silver kada with tribal etching — bold and distinctive.",
      imgs: [I.silverwka34],
      features: ["92.5 Silver", "Tribal Etching", "Open Cuff", "Adjustable"],
    },
  ],

  "silver/womens/pendants": [
    {
      name: "Silver Om Pendant",
      desc: "A minimal Om pendant in 92.5 silver — sacred geometry in a modern silhouette.",
      imgs: [I.silverwpe, I.silverwpe2, I.silverwpe3],
      features: [
        "92.5 Silver",
        "High-polish",
        "Universal Bail",
        "Hypoallergenic",
      ],
    },
    {
      name: "Hamsa Pendant",
      desc: "A Hand of Fatima (Hamsa) in oxidised silver — protection and elegance.",
      imgs: [I.silverwpe4, I.silverwpe5, I.silverwpe6],
      features: [
        "92.5 Silver",
        "Oxidised Finish",
        "Hamsa Design",
        "BIS Certified",
      ],
    },
    {
      name: "Silver Tree of Life Pendant",
      desc: "A sterling silver pendant with a tree of life motif — growth, strength, and beauty.",
      imgs: [I.silverwpe7, I.silverwpe8, I.silverwpe9],
      features: [
        "92.5 Silver",
        "Tree of Life Motif",
        "High-polish",
        "Hypoallergenic",
      ],
    },
    {
      name: "Silver Lotus Pendant",
      desc: "A lotus flower pendant in polished silver — purity and enlightenment.",
      imgs: [I.silverwpe10, I.silverwpe11, I.silverwpe12],
      features: ["92.5 Silver", "Lotus Motif", "High-polish", "Hypoallergenic"],
    },
    {
      name: "Silver Mandala Pendant",
      desc: "A mandala-inspired pendant in sterling silver — intricate, balanced, and harmonious.",
      imgs: [I.silverwpe13, I.silverwpe14, I.silverwpe15],
      features: [
        "92.5 Silver",
        "Mandala Design",
        "High-polish",
        "Hypoallergenic",
      ],
    },
    {
      name: "Silver Feather Pendant",
      desc: "A delicate feather pendant in 92.5 silver — light, airy, and symbolic.",
      imgs: [I.silverwpe16, I.silverwpe17, I.silverwpe18],
      features: [
        "92.5 Silver",
        "Feather Motif",
        "High-polish",
        "Hypoallergenic",
      ],
    },
    {
      name: "Silver Infinity Pendant",
      desc: "An infinity symbol pendant in sterling silver — timeless, elegant, and meaningful.",
      imgs: [I.silverwpe19, I.silverwpe20, I.silverwpe21],
      features: [
        "92.5 Silver",
        "Infinity Symbol",
        "High-polish",
        "Hypoallergenic",
      ],
    },
    {
      name: "Silver Heart Pendant",
      desc: "A classic heart-shaped pendant in polished silver — love, affection, and elegance.",
      imgs: [I.silverwpe22, I.silverwpe23, I.silverwpe24],
      features: ["92.5 Silver", "Heart Shape", "High-polish", "Hypoallergenic"],
    },
  ],

  "silver/kids": [
    {
      name: "Baby Chanda Suraj Set",
      desc: "Chanda and Suraj motif set in 92.5 silver — a sacred gift for newborns.",
      imgs: [I.silverk1],
      features: [
        "92.5 Silver",
        "Chanda Suraj Motif",
        "Gift Box",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Kada",
      desc: "A small 92.5 silver kada for children — safe, light and beautifully crafted.",
      imgs: [I.silverk4],
      features: [
        "92.5 Silver",
        "Child-safe Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Bracelet",
      desc: "A delicate 92.5 silver bracelet for children — adjustable and charming.",
      imgs: [I.silverk7],
      features: [
        "92.5 Silver",
        "Adjustable Design",
        "Child-safe",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Necklace",
      desc: "A small 92.5 silver necklace for children — safe, light and beautifully crafted.",
      imgs: [I.silverk10],
      features: [
        "92.5 Silver",
        "Child-safe Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Earrings",
      desc: "A pair of 92.5 silver earrings for children — safe, light and beautifully crafted.",
      imgs: [I.silverk13],
      features: [
        "92.5 Silver",
        "Child-safe Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Anklet",
      desc: "A small 92.5 silver anklet for children — safe, light and beautifully crafted.",
      imgs: [I.silverk16],
      features: [
        "92.5 Silver",
        "Child-safe Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Ring",
      desc: "A small 92.5 silver ring for children — safe, light and beautifully crafted.",
      imgs: [I.silverk19],
      features: [
        "92.5 Silver",
        "Child-safe Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Toe Ring",
      desc: "A small 92.5 silver toe ring for children — safe, light and beautifully crafted.",
      imgs: [I.silverk22],
      features: [
        "92.5 Silver",
        "Child-safe Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Pendant",
      desc: "A small 92.5 silver pendant for children — safe, light and beautifully crafted.",
      imgs: [I.silverk25],
      features: [
        "92.5 Silver",
        "Child-safe Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Nose Pin",
      desc: "A small 92.5 silver nose pin for children — safe, light and beautifully crafted.",
      imgs: [I.silverk28],
      features: [
        "92.5 Silver",
        "Child-safe Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Hair Accessory",
      desc: "A small 92.5 silver hair accessory for children — safe, light and beautifully crafted.",
      imgs: [I.silverk31],
      features: [
        "92.5 Silver",
        "Child-safe Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
    {
      name: "Kids Silver Anklet with Charms",
      desc: "A small 92.5 silver anklet with charms for children — safe, light and beautifully crafted.",
      imgs: [I.silverk34],
      features: [
        "92.5 Silver",
        "Child-safe Design",
        "Lightweight",
        "BIS Certified",
      ],
    },
  ],

  "silver/coins": [
    {
      name: "5 Gram Silver Coin",
      desc: "999 pure silver coin with Lakshmi motif — an auspicious gifting tradition.",
      imgs: [I.silverc1],
      features: ["999 Pure Silver", "Lakshmi Motif", "5 Gram", "Gift Box"],
    },
    {
      name: "10 Gram Silver Coin",
      desc: "A 999 pure silver coin in a tamper-proof capsule with BIS certification.",
      imgs: [I.silverc4],
      features: ["999 Pure Silver", "10 Gram", "Tamper-proof", "BIS Certified"],
    },
    {
      name: "25 Gram Silver Coin",
      desc: "A 999 pure silver coin with a traditional Indian motif — perfect for gifting.",
      imgs: [I.silverc7],
      features: ["999 Pure Silver", "25 Gram", "Traditional Motif", "Gift Box"],
    },
    {
      name: "50 Gram Silver Coin",
      desc: "A 999 pure silver coin with a contemporary design — a modern take on a classic tradition.",
      imgs: [I.silverc10],
      features: [
        "999 Pure Silver",
        "50 Gram",
        "Contemporary Design",
        "Gift Box",
      ],
    },
    {
      name: "100 Gram Silver Coin",
      desc: "A 999 pure silver coin with a commemorative design — a collector's delight.",
      imgs: [I.silverc13],
      features: [
        "999 Pure Silver",
        "100 Gram",
        "Commemorative Design",
        "Collector's Item",
      ],
    },
    {
      name: "Silver Coin Set",
      desc: "A set of three 999 pure silver coins with auspicious motifs — a perfect gift for any occasion.",
      imgs: [I.silverc16],
      features: [
        "999 Pure Silver",
        "3-piece Set",
        "Auspicious Motifs",
        "Gift Box",
      ],
    },
    {
      name: "20 Gram Silver Coin",
      desc: "A 999 pure silver coin crafted with an elegant floral design, perfect for festive gifting and investment.",
      imgs: [I.silverc19],
      features: ["999 Pure Silver", "20 Gram", "Floral Design", "Gift Box"],
    },

    {
      name: "30 Gram Silver Coin",
      desc: "Premium 999 pure silver coin featuring a beautifully engraved Om symbol for auspicious occasions.",
      imgs: [I.silverc22],
      features: ["999 Pure Silver", "30 Gram", "Om Design", "Premium Finish"],
    },

    {
      name: "Lakshmi Ganesh Silver Coin",
      desc: "Traditional 999 pure silver coin with Lakshmi and Ganesh engraving, ideal for Diwali gifting.",
      imgs: [I.silverc25],
      features: [
        "999 Pure Silver",
        "Lakshmi Ganesh",
        "Religious Design",
        "Gift Box",
      ],
    },

    {
      name: "Ganesh Silver Coin",
      desc: "Beautifully engraved Lord Ganesh silver coin made from 999 pure silver with a premium finish.",
      imgs: [I.silverc28],
      features: [
        "999 Pure Silver",
        "Ganesh Motif",
        "Premium Finish",
        "BIS Certified",
      ],
    },

    {
      name: "Om Silver Coin",
      desc: "A sacred Om engraved silver coin crafted in 999 pure silver for gifting and worship.",
      imgs: [I.silverc31],
      features: ["999 Pure Silver", "Om Symbol", "Elegant Design", "Gift Box"],
    },

    {
      name: "Shree Silver Coin",
      desc: "999 pure silver coin featuring the auspicious Shree symbol with a mirror-polished finish.",
      imgs: [I.silverc34],
      features: [
        "999 Pure Silver",
        "Shree Symbol",
        "Mirror Finish",
        "Premium Quality",
      ],
    },
  ],

  "silver/gifts": [
    {
      name: "Silver Gift Set — Pooja",
      desc: "A curated pooja gift set in 92.5 silver — diya, spoon, and bowl with box.",
      imgs: [I.silverg],
      features: ["92.5 Silver", "3-piece Set", "Pooja Items", "Gift Wrapped"],
    },
    {
      name: "Silver Showpiece",
      desc: "A handcrafted silver showpiece depicting a traditional Indian motif.",
      imgs: [I.silverg4],
      features: ["92.5 Silver", "Handcrafted", "Display Stand", "Gift Box"],
    },
    {
      name: "Silver Baby Gift Set",
      desc: "A premium 92.5 silver baby gift set including a bowl, spoon, and glass, beautifully packed for special occasions.",
      imgs: [I.silverg7],
      features: ["92.5 Silver", "Baby Gift", "3-piece Set", "Gift Box"],
    },
    {
      name: "Silver Bowl Set",
      desc: "Elegant handcrafted silver bowls ideal for serving sweets or gifting during festivals.",
      imgs: [I.silverg10],
      features: ["92.5 Silver", "Handcrafted", "Premium Finish", "Gift Box"],
    },
    {
      name: "Silver Diya Set",
      desc: "Traditional silver diya set designed for pooja ceremonies and festive celebrations.",
      imgs: [I.silverg13],
      features: [
        "92.5 Silver",
        "Pair of Diyas",
        "Traditional Design",
        "Gift Box",
      ],
    },
    {
      name: "Silver Glass",
      desc: "Pure silver drinking glass crafted with a polished finish for everyday elegance.",
      imgs: [I.silverg16],
      features: [
        "92.5 Silver",
        "Polished Finish",
        "Classic Design",
        "Premium Quality",
      ],
    },
    {
      name: "Silver Spoon Set",
      desc: "A beautifully crafted silver spoon set perfect for gifting and everyday use.",
      imgs: [I.silverg19],
      features: ["92.5 Silver", "Set of 6", "Elegant Design", "Gift Box"],
    },
    {
      name: "Silver Plate",
      desc: "Premium silver plate with intricate craftsmanship, suitable for pooja and gifting.",
      imgs: [I.silverg22],
      features: [
        "92.5 Silver",
        "Traditional Design",
        "Mirror Finish",
        "Gift Box",
      ],
    },
    {
      name: "Silver Kalash",
      desc: "Traditional silver kalash handcrafted for pooja rituals and auspicious occasions.",
      imgs: [I.silverg25],
      features: [
        "92.5 Silver",
        "Traditional Design",
        "Religious Use",
        "Premium Finish",
      ],
    },
    {
      name: "Silver Dry Fruit Box",
      desc: "Luxury silver dry fruit box featuring elegant craftsmanship for festive gifting.",
      imgs: [I.silverg28],
      features: ["92.5 Silver", "Luxury Box", "Festival Gift", "Handcrafted"],
    },
    {
      name: "Silver Photo Frame",
      desc: "Beautiful silver-plated photo frame designed to preserve your cherished memories.",
      imgs: [I.silverg31],
      features: [
        "Silver Finish",
        "Premium Frame",
        "Gift Ready",
        "Elegant Design",
      ],
    },
    {
      name: "Silver Idol — Lakshmi",
      desc: "Handcrafted silver Lakshmi idol for worship and festive gifting.",
      imgs: [I.silverg34],
      features: ["92.5 Silver", "Lakshmi Idol", "Handcrafted", "Gift Box"],
    },
  ],
};

/* ── Generate product objects from templates ──────── */
function makeProducts(categorySlug, catMeta) {
  const templates = PRODUCT_TEMPLATES[categorySlug] || [];
  return templates.map((t, idx) => {
    const id = categorySlug.replace(/\//g, "-") + "-" + (idx + 1);
    const slug = (t.name || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const detailPath = `/shop/${categorySlug}/${slug}`;
    return {
      id,
      slug,
      detailPath,
      categorySlug,
      name: t.name,
      gender: catMeta?.gender || "unisex",
      category: catMeta?.label || categorySlug,
      metal: catMeta?.metal || "gold",
      collections: [],
      images: t.imgs,
      shortDescription: t.desc,
      fullDescription:
        t.desc +
        " Each piece is crafted by master artisans with decades of experience, using only the finest materials. Available for bespoke customisation — contact us for details.",
      features: t.features,
      tags: [catMeta?.metal, catMeta?.gender].filter(Boolean),
    };
  });
}

/* ── Build full product catalogue ─────────────────── */
const _productsByCategory = {};
CATEGORIES.forEach((cat) => {
  const key = cat.slug;
  _productsByCategory[key] = makeProducts(key, cat);
});

export function getProductsByCategory(slug) {
  return _productsByCategory[slug] || [];
}

export function getProductByPath(categorySlug, productSlug) {
  const list = _productsByCategory[categorySlug] || [];
  return list.find((p) => p.slug === productSlug) || null;
}

export function getRelatedProducts(categorySlug, currentSlug, limit = 4) {
  const list = _productsByCategory[categorySlug] || [];
  const others = list.filter((p) => p.slug !== currentSlug);
  // Also pull from same metal/gender
  const cat = getCategoryBySlug(categorySlug);
  let extras = [];
  if (cat) {
    CATEGORIES.filter(
      (c) =>
        c.metal === cat.metal &&
        c.gender === cat.gender &&
        c.slug !== categorySlug,
    )
      .slice(0, 2)
      .forEach((c) => {
        extras = extras.concat((_productsByCategory[c.slug] || []).slice(0, 1));
      });
  }
  return [...others, ...extras].slice(0, limit);
}

export function getCollectionProducts(collectionSlug, limit = 8) {
  const col = getCollectionBySlug(collectionSlug);
  if (!col) return [];
  const gender = col.gender;
  let list = [];
  CATEGORIES.filter((c) =>
    gender === "kids" ? c.gender === "kids" : c.gender === gender,
  ).forEach((c) => {
    list = list.concat((_productsByCategory[c.slug] || []).slice(0, 1));
  });
  return list.slice(0, limit);
}

/* ── WhatsApp helper ─────────────────────────────── */
export function getWhatsAppUrl(product) {
  const msg = [
    "Hello,",
    "I am interested in this jewellery item.",
    "",
    `*Product Name:* ${product.name}`,
    `*Category:* ${product.category}`,
    `*Material:* ${product.metal.charAt(0).toUpperCase() + product.metal.slice(1)}`,
    `*Gender:* ${(product.gender || "").charAt(0).toUpperCase() + (product.gender || "").slice(1)}`,
    "",
    "Please share more details.",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
