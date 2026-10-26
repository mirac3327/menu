/**
 * Hançerlioğlu menu catalog.
 *
 * Prices load from the published Google Sheet (SHEET_CSV in app.js).
 * Existing columns stay the same: Anahtar, Ürün, Fiyat.
 * Optional columns are read when present and ignored when empty:
 *   Tükendi   evet / hayır
 *   Rozet     popüler | şef | yeni | hafif | yerel | tükendi
 *
 * badge, soldOut, tags, pairings, allergens and portions are optional.
 * Badges below are editorial defaults — change them here or from the sheet.
 */
const MENU = {
  featured: ['klasik-katmer', 'soguk-baklava', 'fistikzade-kunefe-24', 'klasik-kunefe-tek'],
  pairs: {
    katmer: ['kaymak', 'turk-kahvesi', 'cay'],
    kunefe: ['sade-dilim-dondurma', 'cay', 'turk-kahvesi'],
    kadayif: ['kaymak', 'turk-kahvesi', 'cay'],
    baklava: ['turk-kahvesi', 'cay', 'sade-dilim-dondurma'],
    kerebic: ['kaymak', 'turk-kahvesi', 'cay'],
    dondurma: ['klasik-kunefe-tek', 'soguk-baklava', 'cay'],
    kaymak: ['klasik-katmer', 'fistikli-baklava', 'fistikli-kerebic'],
    icecek: ['klasik-katmer', 'klasik-kunefe-tek', 'fistikli-baklava']
  },
  categories: [
    { id: 'katmer', tr: 'Katmer', en: 'Katmer' },
    { id: 'kunefe', tr: 'Künefe', en: 'Kunefe' },
    { id: 'kadayif', tr: 'Kadayıf', en: 'Kadaif' },
    { id: 'baklava', tr: 'Baklava', en: 'Baklava' },
    { id: 'kerebic', tr: 'Kerebiç', en: 'Kerebic' },
    { id: 'dondurma', tr: 'Dondurma', en: 'Ice Cream' },
    { id: 'kaymak', tr: 'Kaymak', en: 'Kaymak' },
    { id: 'icecek', tr: 'İçecek', en: 'Drinks' }
  ],
  items: [
    {
      id: 'klasik-katmer',
      cat: 'katmer',
      tr: 'Klasik Katmer',
      en: 'Classic Katmer',
      image: 'images/klasikatmer.jpeg',
      badge: 'popular',
      tags: ['pistachio'],
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, Antep fıstığı, kaymak', en: 'Pastry, Antep pistachio, clotted cream' },
      desc: {
        tr: 'İncecik açılmış hamur, taze Antep fıstığı ve kaymakla dengelenmiş klasik tat. Kıtır doku, hafif final.',
        en: 'Paper-thin pastry balanced with fresh pistachios and clotted cream. Crisp texture with a clean finish.'
      }
    },
    {
      id: 'muska-kaymakli',
      cat: 'katmer',
      tr: 'Kaymaklı Muska Katmer',
      en: 'Muska Katmer with Clotted Cream',
      image: 'images/muska.jpeg',
      badge: 'popular',
      tags: ['pistachio'],
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, kaymak, Antep fıstığı', en: 'Pastry, clotted cream, Antep pistachio' },
      desc: {
        tr: 'Üçgen formda, bol kaymaklı ve çıtır katmanlı; ağızda dağılan yumuşak bir lezzet.',
        en: 'Triangular layers packed with clotted cream; crisp outside, melt-in-the-mouth inside.'
      }
    },
    {
      id: 'muska-cikolatali',
      cat: 'katmer',
      tr: 'Çikolatalı Muska Katmer',
      en: 'Muska Katmer with Chocolate',
      image: 'images/muskac.jpeg',
      tags: ['chocolate'],
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, çikolata', en: 'Pastry, chocolate' },
      desc: {
        tr: 'Klasik muskanın içine akışkan çikolata dokunuşu; kıtır hamurla kakaonun buluşması.',
        en: 'A molten chocolate twist on the classic muska; cocoa richness meets a crisp shell.'
      }
    },
    {
      id: 'muska-cikolatali-kaymakli',
      cat: 'katmer',
      tr: 'Çikolatalı Kaymaklı Muska Katmer',
      en: 'Muska Katmer with Chocolate & Clotted Cream',
      image: 'images/muskac.jpeg',
      tags: ['chocolate'],
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, çikolata, kaymak', en: 'Pastry, chocolate, clotted cream' },
      desc: {
        tr: 'Kaymağın ipeksi dokusu ile çikolatanın aroması aynı lokmada; dengeli, tatmin edici.',
        en: 'Silky cream and rich chocolate in one bite; balanced and satisfying.'
      }
    },
    {
      id: 'belcika-muska-cikolatali',
      cat: 'katmer',
      tr: 'Belçika Çikolatalı Muska Katmer',
      en: 'Belgian Chocolate Muska Katmer',
      image: 'images/Belcikamuska.jpeg',
      tags: ['chocolate'],
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, Belçika çikolatası', en: 'Pastry, Belgian chocolate' },
      desc: {
        tr: 'Muska katmerin içine Belçika çikolatası. Kıtır kabuk, yoğun kakao.',
        en: 'Muska katmer filled with Belgian chocolate. A crisp shell and deep cocoa.'
      }
    },
    {
      id: 'beyaz-cikolatali-muska',
      cat: 'katmer',
      tr: 'Beyaz Çikolatalı Muska Katmer',
      en: 'White Chocolate Muska Katmer',
      image: 'images/Beyazmuska.jpeg',
      tags: ['chocolate'],
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, beyaz çikolata', en: 'Pastry, white chocolate' },
      desc: {
        tr: 'Beyaz çikolata dolgulu muska. Tatlı, kremsi ve çıtır.',
        en: 'Muska filled with white chocolate. Sweet, creamy and crisp.'
      }
    },
    {
      id: 'tepsi-katmer',
      cat: 'katmer',
      tr: 'Tepsi Katmer',
      en: 'Tray Katmer',
      image: 'images/tepsi.jpeg',
      tags: ['pistachio'],
      note: { tr: 'Tek porsiyon', en: 'Single portion' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, Antep fıstığı, kaymak', en: 'Pastry, Antep pistachio, clotted cream' },
      desc: {
        tr: 'Tepside pişen klasik katmer, tek porsiyon olarak servis edilir.',
        en: 'Classic katmer baked in a tray and served as a single portion.'
      }
    },
    {
      id: 'burma-kaymakli',
      cat: 'katmer',
      tr: 'Burma Katmer – Kaymaklı',
      en: 'Burma Katmer with Clotted Cream',
      image: 'images/burma1.jpeg',
      tags: ['pistachio'],
      note: { tr: 'Tek veya üç kişilik', en: 'Single or for three' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, Antep fıstığı, kaymak', en: 'Pastry, Antep pistachio, clotted cream' },
      portions: [
        {
          id: 'burma-kaymakli-tek',
          tr: 'Tek kişilik',
          en: 'Single',
          short: { tr: 'Tek', en: '1' },
          image: 'images/burma1.jpeg',
          desc: {
            tr: 'Bol fıstıklı ve kaymaklı, tek kişilik özel porsiyon.',
            en: 'Single portion with plenty of pistachio and clotted cream.'
          }
        },
        {
          id: 'burma-kaymakli-uc',
          tr: 'Üç kişilik',
          en: 'For three',
          short: { tr: 'Üç', en: '3' },
          image: 'images/burma3.jpeg',
          tags: ['sharing'],
          desc: {
            tr: 'Kalabalık sofralar için üç kişilik lezzet şöleni.',
            en: 'A three-person portion for a full table.'
          }
        }
      ]
    },
    {
      id: 'burma-cikolatali',
      cat: 'katmer',
      tr: 'Burma Katmer – Çikolatalı',
      en: 'Burma Katmer with Chocolate',
      image: 'images/burmac.jpeg',
      tags: ['chocolate'],
      note: { tr: 'Tek veya üç kişilik', en: 'Single or for three' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, çikolata', en: 'Pastry, chocolate' },
      portions: [
        {
          id: 'burma-cikolatali-tek',
          tr: 'Tek kişilik',
          en: 'Single',
          short: { tr: 'Tek', en: '1' },
          image: 'images/burmac.jpeg',
          desc: {
            tr: 'Burma formunda çikolata dolgusu; ılık servisle aroması belirginleşir.',
            en: 'Chocolate-filled burma; served warm to bring out the aroma.'
          }
        },
        {
          id: 'burma-cikolatali-uc',
          tr: 'Üç kişilik',
          en: 'For three',
          short: { tr: 'Üç', en: '3' },
          image: 'images/burmac3.jpeg',
          tags: ['sharing'],
          desc: {
            tr: 'Kalabalık sofralar için üç kişilik çikolatalı burma.',
            en: 'A three-person chocolate burma for sharing.'
          }
        }
      ]
    },
    {
      id: 'burma-cikolatali-kaymakli',
      cat: 'katmer',
      tr: 'Burma Katmer – Çikolatalı Kaymaklı',
      en: 'Burma Katmer with Chocolate & Clotted Cream',
      image: 'images/burmac3.jpeg',
      tags: ['chocolate', 'sharing'],
      note: { tr: 'Üç kişilik', en: 'For three' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, çikolata, kaymak', en: 'Pastry, chocolate, clotted cream' },
      desc: {
        tr: 'Çikolata ve kaymak bir arada; burmanın kıtır katmanlarıyla zengin bir denge.',
        en: 'Chocolate meets cream inside crisp burma layers, rich and rounded.'
      }
    },
    {
      id: 'cubuk-katmer',
      cat: 'katmer',
      tr: 'Çubuk Katmer',
      en: 'Cubuk Katmer',
      image: 'images/cubukatmer.jpeg',
      badge: 'chef',
      tags: ['pistachio', 'chocolate'],
      note: { tr: 'Tek porsiyon', en: 'Single portion' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, Antep fıstığı, kaymak, Belçika çikolatası, beyaz çikolata', en: 'Pastry, Antep pistachio, clotted cream, Belgian chocolate, white chocolate' },
      desc: {
        tr: 'Antep fıstıklı, kaymaklı çıtır lezzet. Belçika çikolatası ve beyaz çikolata eşliğinde servis edilir.',
        en: 'Crisp katmer with Antep pistachio and clotted cream, served with Belgian chocolate and white chocolate.'
      }
    },
    {
      id: 'simit-cikolatali',
      cat: 'katmer',
      tr: 'Çikolatalı Simit Katmer',
      en: 'Simit Katmer with Chocolate',
      image: 'images/simit2.jpeg',
      tags: ['chocolate', 'sharing'],
      note: { tr: 'Üç kişilik', en: 'For three' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, çikolata', en: 'Pastry, chocolate' },
      desc: {
        tr: 'Simit formunda katmer; dışı kıtır, içi çikolatalı. Paylaşması keyifli.',
        en: 'Ring-shaped katmer with a chocolate core; crisp outside, made for sharing.'
      }
    },
    {
      id: 'simit-kaymakli',
      cat: 'katmer',
      tr: 'Kaymaklı Simit Katmer',
      en: 'Simit Katmer with Clotted Cream',
      image: 'images/simit.jpeg',
      tags: ['pistachio', 'sharing'],
      note: { tr: 'Üç kişilik', en: 'For three' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hamur, kaymak, Antep fıstığı', en: 'Pastry, clotted cream, Antep pistachio' },
      desc: {
        tr: 'Simit biçimli katmerde bol kaymak ve fıstık bir arada.',
        en: 'Ring-shaped katmer layered with clotted cream and pistachio.'
      }
    },
    {
      id: 'klasik-kunefe-tek',
      cat: 'kunefe',
      tr: 'Klasik Künefe',
      en: 'Classic Kunefe',
      image: 'images/klasik.jpeg',
      badge: 'popular',
      note: { tr: 'Tek kişilik', en: 'Single serving' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Tel kadayıf, peynir, şerbet', en: 'Shredded kadaif, cheese, syrup' },
      desc: {
        tr: 'Tel kadayıf, peynir ve taze şerbet üçlüsü; sıcak servisle uzayan peynir keyfi.',
        en: 'Shredded kadaif with cheese and fresh syrup; served hot for that signature cheese stretch.'
      }
    },
    {
      id: 'hasir-kunefe-tek',
      cat: 'kunefe',
      tr: 'Hasır Künefe',
      en: 'Hasir Kunefe',
      image: 'images/hasır.jpeg',
      note: { tr: 'Tek kişilik', en: 'Single serving' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hasır tel kadayıf, peynir, şerbet', en: 'Woven kadaif, cheese, syrup' },
      desc: {
        tr: 'Tel kadayıfın hasır örgü formu sayesinde ekstra kıtır doku; peynir ve taze şerbetle dengeli tat.',
        en: 'Woven-style kadaif for extra crunch; balanced with cheese and fresh syrup.'
      }
    },
    {
      id: 'stevia-kunefe-tek',
      cat: 'kunefe',
      tr: 'Stevia Künefe',
      en: 'Stevia Kunefe',
      image: 'images/klasik.jpeg',
      badge: 'light',
      tags: ['light'],
      note: { tr: 'Düşük kalorili · tek kişilik', en: 'Lower calorie · single serving' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Tel kadayıf, peynir, stevia', en: 'Shredded kadaif, cheese, stevia' },
      desc: {
        tr: 'Stevia ile tatlandırılmış klasik künefe. Daha düşük kalorili, lezzeti yerinde.',
        en: 'Classic kunefe sweetened with stevia. Lower in calories, with the same cheese pull.'
      }
    },
    {
      id: 'klasik-kunefe-24',
      cat: 'kunefe',
      tr: 'Klasik Künefe',
      en: 'Classic Kunefe',
      image: 'images/klasik2.jpeg',
      priceMode: 'ladder',
      tags: ['sharing'],
      note: { tr: '2 / 3 / 4 kişilik', en: 'For 2 / 3 / 4' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Tel kadayıf, peynir, şerbet', en: 'Shredded kadaif, cheese, syrup' },
      desc: {
        tr: 'Klasik tarifin paylaşmalık boyu: uzayan peynir, taze şerbet ve nar gibi kızarmış tel kadayıf.',
        en: 'The classic in a sharing size: stretchy cheese, fresh syrup, and golden-baked kadaif.'
      }
    },
    {
      id: 'hasir-kunefe-24',
      cat: 'kunefe',
      tr: 'Hasır Künefe',
      en: 'Hasir Kunefe',
      image: 'images/hasır.jpeg',
      priceMode: 'ladder',
      tags: ['sharing'],
      note: { tr: '2 / 3 / 4 kişilik', en: 'For 2 / 3 / 4' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Hasır tel kadayıf, peynir, şerbet', en: 'Woven kadaif, cheese, syrup' },
      desc: {
        tr: 'Hasır örgü kadayıfın daha belirgin kıtırlığı; paylaşımlık sunumda dengeli şerbet ve peynir.',
        en: 'Woven kadaif with a pronounced crunch; balanced syrup and cheese in a sharing format.'
      }
    },
    {
      id: 'pasa-kunefe-24',
      cat: 'kunefe',
      tr: 'Paşa Künefe',
      en: 'Pasha Kunefe',
      image: 'images/pasa.jpeg',
      priceMode: 'ladder',
      tags: ['sharing', 'pistachio'],
      note: { tr: '2 / 3 / 4 kişilik', en: 'For 2 / 3 / 4' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Tel kadayıf, peynir, kaymak, Antep fıstığı, şerbet', en: 'Kadaif, cheese, clotted cream, Antep pistachio, syrup' },
      desc: {
        tr: 'Orta katmanda kaymak dokunuşu, üstte nar gibi kızarmış tel kadayıf ve fıstıkla zenginleşen lezzet.',
        en: 'Clotted cream in the middle, golden kadaif on top, enriched with pistachios.'
      }
    },
    {
      id: 'billuriye-24',
      cat: 'kunefe',
      tr: 'Billuriye',
      en: 'Billuriye',
      image: 'images/billuriye.jpeg',
      priceMode: 'ladder',
      tags: ['sharing', 'pistachio'],
      note: { tr: '2 / 3 / 4 kişilik', en: 'For 2 / 3 / 4' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Tel kadayıf, ince çekilmiş Antep fıstığı, şerbet', en: 'Kadaif, finely ground Antep pistachio, syrup' },
      desc: {
        tr: 'İnce öğütülmüş fıstık ve hafif şerbetle daha ferah bir damak; çıtır dış, yumuşak iç.',
        en: 'Finely ground pistachios and a lighter syrup; crisp outside, soft inside.'
      }
    },
    {
      id: 'billurzade-24',
      cat: 'kunefe',
      tr: 'Billurzade',
      en: 'Billurzade',
      image: 'images/billurzade.jpeg',
      priceMode: 'ladder',
      tags: ['sharing', 'pistachio'],
      note: { tr: '2 / 3 / 4 kişilik', en: 'For 2 / 3 / 4' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Tel kadayıf, Antep fıstığı, şerbet', en: 'Kadaif, Antep pistachio, syrup' },
      desc: {
        tr: 'Fıstık oranı yükseltilmiş, yoğun aromalı ve zengin sunumlu özel yorum.',
        en: 'Pistachio-forward, intensely aromatic, and richly presented.'
      }
    },
    {
      id: 'fistikzade-kunefe-24',
      cat: 'kunefe',
      tr: 'Fıstıkzade Künefe',
      en: 'Fistikzade Kunefe',
      image: 'images/fistikzade.jpeg',
      badge: 'chef',
      priceMode: 'ladder',
      tags: ['sharing', 'pistachio'],
      note: { tr: '2 / 3 / 4 kişilik', en: 'For 2 / 3 / 4' },
      pairings: ['fistikli-dilim-dondurma', 'cay', 'turk-kahvesi'],
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Tel kadayıf, peynir, Antep fıstığı, şerbet', en: 'Kadaif, cheese, Antep pistachio, syrup' },
      desc: {
        tr: 'Fıstık lezzetinin öne çıktığı, dengeli şerbet ve uzayan peynirle tamamlanan paylaşmalık künefe.',
        en: 'Pistachio-led flavor, balanced syrup, and stretchy cheese, made for sharing.'
      }
    },
    {
      id: 'yarim-fistikzade-hasir-24',
      cat: 'kunefe',
      tr: 'Yarım Fıstıkzade & Yarım Hasır',
      en: 'Half Fistikzade & Half Hasir',
      image: 'images/hasirfistik.jpeg',
      priceMode: 'ladder',
      tags: ['sharing', 'pistachio'],
      note: { tr: '2 / 3 / 4 kişilik', en: 'For 2 / 3 / 4' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Fıstıkzade künefe, hasır künefe', en: 'Fistikzade kunefe, hasir kunefe' },
      desc: {
        tr: 'Yarım Fıstıkzade ve yarım Hasır: iki üslubu tek tepside deneyimleyin.',
        en: 'Half Fistikzade and half Hasir: two styles on one tray.'
      }
    },
    {
      id: 'burger-kunefe-2kisi',
      cat: 'kunefe',
      tr: 'Burger Künefe',
      en: 'Burger Kunefe',
      tags: ['sharing'],
      note: { tr: 'İki kişilik', en: 'For two' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Tel kadayıf, peynir, şerbet', en: 'Kadaif, cheese, syrup' },
      desc: {
        tr: 'Kat kat istiflenmiş sunum; dışı kıtır, içi uzayan peynir. İki kişi için ideal.',
        en: 'Stacked presentation; crisp shell, stretchy cheese. Made for two.'
      }
    },
    {
      id: 'fistikli-tel-kadayif-klasik',
      cat: 'kadayif',
      tr: 'Fıstıklı Tel Kadayıf – Klasik',
      en: 'Pistachio Tel Kadaif – Classic',
      image: 'images/kadaif.jpeg',
      tags: ['pistachio'],
      note: { tr: 'Porsiyon', en: 'A portion' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Tel kadayıf, Antep fıstığı, şerbet', en: 'Shredded kadaif, Antep pistachio, syrup' },
      desc: {
        tr: 'Tel kadayıf, Antep fıstığı ve şerbet. Sade, klasik porsiyon.',
        en: 'Shredded kadaif with Antep pistachio and syrup. A straightforward classic portion.'
      }
    },
    {
      id: 'billuriye-kadayif',
      cat: 'kadayif',
      tr: 'Billuriye Kadayıf',
      en: 'Billuriye Kadaif',
      image: 'images/billuriyekadaif.jpeg',
      tags: ['pistachio'],
      note: { tr: 'Porsiyon', en: 'A portion' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Kadayıf, ince çekilmiş Antep fıstığı, şerbet', en: 'Kadaif, finely ground Antep pistachio, syrup' },
      desc: {
        tr: 'İnce fıstıkla hazırlanan billuriye, kadayıf porsiyonu olarak.',
        en: 'Billuriye with fine pistachio, served as a kadaif portion.'
      }
    },
    {
      id: 'fistikzade-kadayif',
      cat: 'kadayif',
      tr: 'Fıstıkzade Kadayıf',
      en: 'Fistikzade Kadaif',
      image: 'images/fistikzadekadaif.jpeg',
      tags: ['pistachio'],
      note: { tr: 'Porsiyon', en: 'A portion' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Kadayıf, Antep fıstığı, şerbet', en: 'Kadaif, Antep pistachio, syrup' },
      desc: {
        tr: 'Fıstığın öne çıktığı kadayıf porsiyonu.',
        en: 'A kadaif portion led by pistachio.'
      }
    },
    {
      id: 'fistikli-baklava',
      cat: 'baklava',
      tr: 'Fıstıklı Baklava',
      en: 'Pistachio Baklava',
      image: 'images/baklavaki.jpeg',
      badge: 'popular',
      tags: ['pistachio'],
      note: { tr: 'Porsiyon', en: 'A portion' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Yufka, Antep fıstığı, şerbet', en: 'Pastry, Antep pistachio, syrup' },
      desc: {
        tr: 'Kat kat yufka, Antep fıstığı ve şerbet.',
        en: 'Layered pastry with Antep pistachio and syrup.'
      }
    },
    {
      id: 'fistikli-ozel-baklava',
      cat: 'baklava',
      tr: 'Fıstıklı Özel Dilim Baklava',
      en: 'Special Pistachio Baklava Slice',
      image: 'images/baklava.jpeg',
      tags: ['pistachio'],
      note: { tr: 'Porsiyon', en: 'A portion' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Yufka, Antep fıstığı, şerbet', en: 'Pastry, Antep pistachio, syrup' },
      desc: {
        tr: 'Dilim kesilmiş özel fıstıklı baklava.',
        en: 'A cut slice of the house special pistachio baklava.'
      }
    },
    {
      id: 'soguk-baklava',
      cat: 'baklava',
      tr: 'Soğuk Baklava',
      en: 'Cold Baklava',
      image: 'images/sogukbaklava.jpeg',
      tags: ['pistachio', 'cold'],
      note: { tr: 'Porsiyon', en: 'A portion' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Baklava, sütlü sos, Antep fıstığı', en: 'Baklava, milky sauce, Antep pistachio' },
      desc: {
        tr: 'Soğuk servis edilen baklava. Sütlü sos ve Antep fıstığıyla.',
        en: 'Baklava served cold, with a milky sauce and Antep pistachio.'
      }
    },
    {
      id: 'fistikli-kerebic',
      cat: 'kerebic',
      tr: 'Fıstıklı Kerebiç',
      en: 'Pistachio Kerebic',
      tags: ['pistachio'],
      note: { tr: 'Porsiyon', en: 'A portion' },
      allergens: ['gluten', 'dairy', 'nuts'],
      ingredients: { tr: 'Kerebiç hamuru, Antep fıstığı', en: 'Kerebic dough, Antep pistachio' },
      desc: {
        tr: 'Fıstık içli geleneksel kerebiç. Porsiyon olarak servis edilir.',
        en: 'Traditional kerebic filled with pistachio, served by the portion.'
      }
    },
    {
      id: 'sade-dilim-dondurma',
      cat: 'dondurma',
      tr: 'Sade Dilim Dondurma',
      en: 'Plain Slice Ice Cream',
      image: 'images/dondurma.png',
      tags: ['cold'],
      note: { tr: 'Dilim', en: 'A slice' },
      allergens: ['dairy'],
      ingredients: { tr: 'Süt, şeker', en: 'Milk, sugar' },
      desc: {
        tr: 'Sade dilim dondurma. Künefenin yanında da, tek başına da.',
        en: 'A plain slice of ice cream. Beside kunefe, or on its own.'
      }
    },
    {
      id: 'fistikli-dilim-dondurma',
      cat: 'dondurma',
      tr: 'Fıstık Ezmeli Dilim Dondurma',
      en: 'Pistachio Slice Ice Cream',
      image: 'images/fistiklidondurma.png',
      tags: ['cold', 'pistachio'],
      note: { tr: 'Dilim', en: 'A slice' },
      allergens: ['dairy', 'nuts'],
      ingredients: { tr: 'Süt, Antep fıstığı, şeker', en: 'Milk, Antep pistachio, sugar' },
      desc: {
        tr: 'Fıstık ezmesiyle hazırlanan dilim dondurma.',
        en: 'Slice ice cream made with pistachio paste.'
      }
    },
    {
      id: 'sade-baton-500gr',
      cat: 'dondurma',
      tr: 'Sade Baton Dondurma (500 gr)',
      en: 'Plain Baton Ice Cream (500 g)',
      image: 'images/dondurma.png',
      tags: ['cold'],
      note: { tr: 'Masaya servis yoktur', en: 'Not served at the table' },
      warn: { tr: 'Masaya servisimiz yoktur.', en: 'This one is not served at the table.' },
      allergens: ['dairy'],
      ingredients: { tr: 'Süt, şeker', en: 'Milk, sugar' },
      desc: {
        tr: '500 gramlık sade baton dondurma. Paket olarak alınır.',
        en: 'A 500 g plain baton, sold to take away.'
      }
    },
    {
      id: 'sade-cilekli-baton',
      cat: 'dondurma',
      tr: 'Sade–Çilekli Baton Dondurma',
      en: 'Plain–Strawberry Baton Ice Cream',
      image: 'images/dondurma.png',
      tags: ['cold'],
      allergens: ['dairy'],
      ingredients: { tr: 'Süt, çilek, şeker', en: 'Milk, strawberry, sugar' },
      desc: {
        tr: 'Sade ve çilekli baton dondurma.',
        en: 'Baton ice cream, half plain and half strawberry.'
      }
    },
    {
      id: 'sade-cikolatali-baton',
      cat: 'dondurma',
      tr: 'Sade–Çikolatalı Baton Dondurma',
      en: 'Plain–Chocolate Baton Ice Cream',
      image: 'images/dondurma.png',
      tags: ['cold', 'chocolate'],
      allergens: ['dairy'],
      ingredients: { tr: 'Süt, çikolata, şeker', en: 'Milk, chocolate, sugar' },
      desc: {
        tr: 'Sade ve çikolatalı baton dondurma.',
        en: 'Baton ice cream, half plain and half chocolate.'
      }
    },
    {
      id: 'fistikli-baton',
      cat: 'dondurma',
      tr: 'Fıstıklı Baton Dondurma',
      en: 'Pistachio Baton Ice Cream',
      image: 'images/fistiklidondurma.png',
      tags: ['cold', 'pistachio'],
      allergens: ['dairy', 'nuts'],
      ingredients: { tr: 'Süt, Antep fıstığı, şeker', en: 'Milk, Antep pistachio, sugar' },
      desc: {
        tr: 'Antep fıstıklı baton dondurma.',
        en: 'Baton ice cream with Antep pistachio.'
      }
    },
    {
      id: 'kol-dondurma-1kg',
      cat: 'dondurma',
      tr: 'Kol Dondurma (1 kg)',
      en: 'Tub Ice Cream (1 kg)',
      image: 'images/dondurma.png',
      tags: ['cold'],
      note: { tr: 'Masaya servis yoktur', en: 'Not served at the table' },
      warn: { tr: 'Masaya servisimiz yoktur.', en: 'This one is not served at the table.' },
      allergens: ['dairy'],
      ingredients: { tr: 'Süt, şeker', en: 'Milk, sugar' },
      desc: {
        tr: '1 kilogramlık kol dondurma. Paket olarak alınır.',
        en: 'A 1 kg tub, sold to take away.'
      }
    },
    {
      id: 'kaymak',
      cat: 'kaymak',
      tr: 'Süt Kaymak',
      en: 'Clotted Cream',
      image: 'images/Kaymak.png',
      allergens: ['dairy'],
      ingredients: { tr: 'Süt kaymağı', en: 'Milk clotted cream' },
      desc: {
        tr: 'Taze süt kaymağı. Katmer, kadayıf ve kerebiçin yanında ayrı servis edilir.',
        en: 'Fresh milk clotted cream, served on the side of katmer, kadaif and kerebic.'
      }
    },
    {
      id: 'coca-cola',
      cat: 'icecek',
      tr: 'Coca-Cola',
      en: 'Coca-Cola',
      image: 'images/cola.png',
      tags: ['cold'],
      note: { tr: 'Soğuk', en: 'Cold' },
      allergens: ['caffeine'],
      desc: { tr: 'Soğuk servis.', en: 'Served cold.' }
    },
    {
      id: 'fanta',
      cat: 'icecek',
      tr: 'Fanta',
      en: 'Fanta',
      image: 'images/fanta.png',
      tags: ['cold'],
      note: { tr: 'Soğuk', en: 'Cold' },
      allergens: [],
      desc: { tr: 'Soğuk servis.', en: 'Served cold.' }
    },
    {
      id: 'sprite',
      cat: 'icecek',
      tr: 'Sprite',
      en: 'Sprite',
      image: 'images/sprite.png',
      tags: ['cold'],
      note: { tr: 'Soğuk', en: 'Cold' },
      allergens: [],
      desc: { tr: 'Soğuk servis.', en: 'Served cold.' }
    },
    {
      id: 'soda',
      cat: 'icecek',
      tr: 'Soda',
      en: 'Soda',
      image: 'images/soda.png',
      tags: ['cold'],
      note: { tr: 'Soğuk', en: 'Cold' },
      allergens: [],
      desc: { tr: 'Soğuk soda.', en: 'Cold soda.' }
    },
    {
      id: 'su',
      cat: 'icecek',
      tr: 'Su',
      en: 'Water',
      image: 'images/su.png',
      tags: ['cold'],
      note: { tr: 'Soğuk', en: 'Cold' },
      allergens: [],
      desc: { tr: 'Soğuk su.', en: 'Cold water.' }
    },
    {
      id: 'turk-kahvesi',
      cat: 'icecek',
      tr: 'Türk Kahvesi',
      en: 'Turkish Coffee',
      image: 'images/kahve.png',
      note: { tr: 'Sıcak', en: 'Hot' },
      allergens: ['caffeine'],
      ingredients: { tr: 'Türk kahvesi', en: 'Turkish coffee' },
      desc: {
        tr: 'Klasik cezve kahvesi. Baklava ve katmerin yanında.',
        en: 'Coffee brewed the classic way. The usual partner for baklava and katmer.'
      }
    },
    {
      id: 'cay',
      cat: 'icecek',
      tr: 'Çay',
      en: 'Tea',
      image: 'images/cay.png',
      complimentary: true,
      note: { tr: 'Sıcak', en: 'Hot' },
      allergens: ['caffeine'],
      ingredients: { tr: 'Demleme çay', en: 'Brewed tea' },
      desc: {
        tr: 'Demleme çay. Menüyle birlikte ikramımız.',
        en: 'Brewed tea, on the house with the menu.'
      }
    }
  ]
};
