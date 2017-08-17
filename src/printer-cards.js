import React, { Component } from 'react';
import PrinterCard from './printer-card';

export default class PrinterCards extends Component {

  render() {
    let printers = [
      {
        name: '101Hero',
        description: '3D Printing for work, home and play. 101Hero gives everyone simple, affordable, and dependable 3D printing.',
        link: 'http://www.101hero.com/',
        image: 'https://ksr-ugc.imgix.net/assets/012/448/495/76b683af750992235b6b21e9bea30409_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1463761646&auto=format&q=92&s=614afeba75c9f295fdf0bc3c940adaa1',
        alt: '101hero',
        definition: '101Hero.def.json'
      },
      {
        name: 'Abax PRi3',
        description: '',
        link: 'https://www.abax3dtech.com/product-page/abax-pri3-comprar',
        image: 'https://static.wixstatic.com/media/03277e_a399ae54e6744e368c60c51499923b01~mv2.jpg_srz_1034_482_85_22_0.50_1.20_0.00_jpg_srz',
        alt: 'abax-pri3',
        definition: 'abax_pri3.def.json'
      },
      {
        name: 'Abax PRi5',
        description: 'Abax PRi5, personalizable, fiable, precisa, facil de usar y XXL',
        link: 'https://www.abax3dtech.com/abax-pri5',
        image: 'https://static.wixstatic.com/media/03277e_2ac7cd530c4b4bff9494d06bc3d3cf78~mv2.jpg_srz_406_398_85_22_0.50_1.20_0.00_jpg_srz',
        alt: 'abax-pri5',
        definition: 'abax_pri5.def.json'
      },
      {
        name: 'Abax Titan',
        description: 'Titán, concebida para los más exigentes.',
        link: 'https://www.abax3dtech.com/titan',
        image: 'https://static.wixstatic.com/media/03277e_1d0e685c4f194c6ebc01d4ce8e44164d~mv2.jpg_srz_560_549_85_22_0.50_1.20_0.00_jpg_srz',
        alt: 'abax-titan',
        definition: 'abax_titan.def.json'
      },
      {
        name: 'BFB-3000',
        description: 'The BFB-3000 either comes with a transparent acrylic print bed or a black composite print bed.',
        link: 'https://www.3dsystems.com/shop/support/legacy/manuals?redirectFrom=cubify',
        image: 'https://static.squarespace.com/static/509c281de4b0cd18c7335aab/52f58444e4b0cdc9d87888d0/52f58448e4b0cdc9d878ac8e/1304198033043/1000w/bfb3000%20out%20of%20box.jpg',
        alt: 'bfb-3000',
        definition: 'bfb.def.json'
      },
      {
        name: 'BQ Hephestos',
        description: 'Hephestos is an evolution of the Prusa i3, the most popular 3D printer in the RepRap community. It incorporates significant improvements and a more practical and intuitive DIY (Do it yourself) assembly kit.',
        link: 'https://www.bq.com/en/hephestos-prusa',
        image: 'http://reprap.org/mediawiki/images/thumb/6/68/Hephestos_3_Colores_1024x683.jpg/800px-Hephestos_3_Colores_1024x683.jpg',
        alt: 'bq-hephestos',
        definition: 'bq_hephestos.def.json'
      },
      {
        name: 'BQ Hephestos 2',
        description: 'Hephestos 2 is our second DIY (Do it yourself) printer. Hephestos is based on the Prusa i3, one of the most popular models in the RepRap community.',
        link: 'https://www.bq.com/en/hephestos-2',
        image: 'http://3.bp.blogspot.com/-UtqnSWZyPAk/Vp6WYEnCXeI/AAAAAAAAH3g/rY9PSy0r6hM/w1200-h630-p-k-no-nu/3D%2BPrinter%2BBQ%2BHephestos%2B2.jpeg',
        alt: 'bq-hephestos-2',
        definition: 'bq_hephestos_2.def.json'
      },
      {
        name: 'BQ Hephestos XL',
        description: 'Hephestos is an evolution of the Prusa i3, the most popular 3D printer in the RepRap community. It incorporates significant improvements and a more practical and intuitive DIY (Do it yourself) assembly kit.',
        link: 'https://www.bq.com/en/hephestos-prusa',
        image: 'http://reprap.org/mediawiki/images/thumb/6/68/Hephestos_3_Colores_1024x683.jpg/800px-Hephestos_3_Colores_1024x683.jpg',
        alt: 'bq-hephestos-xl',
        definition: 'bq_hephestos_xl.def.json'
      },
      {
        name: 'BQ Witbox',
        description: 'This Spanish 3D printer has a reinforced chassis, which allows for stacking multiple printers on top of each other. It features a build volume of 29.7 x 21 x 20 cm. and ships with an enclosed build platform for increased temperature control. Its maximum printing resolution is 50 microns.',
        link: 'https://www.3dhubs.com/3d-printers/witbox',
        image: 'https://www.3dhubs.com/s3fs-public/talk/attachments/witbox.jpg',
        alt: 'bq-witbox',
        definition: 'bq_witbox.def.json'
      },
      {
        name: 'BQ Witbox 2',
        description: 'To achieve flawless results, the extruder must always work at a specific distance from the bed The Witbox 2 includes a new inductive sensor that measures this distance with utmost precision.',
        link: 'https://www.bq.com/en/witbox-2',
        image: 'https://www.allthat3d.com/wp-content/uploads/2016/08/maxresdefault.jpg',
        alt: 'bq-witbox-2',
        definition: 'bq_witbox_2.def.json'
      },
      {
        name: 'Cartesio',
        description: 'Its primary function is 3D printing with as many materials as you like. We value "safety first" and include a fume extraction and filtration unit with all machines.',
        link: 'http://www.mauk.cc/webshop/',
        image: 'http://www.3ders.org/images2015/cartesio-and-bofa-develop-printpro-fume-extraction-8.jpg',
        alt: 'cartesio',
        definition: 'cartesio.def.json'
      },
      {
        name: 'CREATABLE D3',
        description: '초보자, 교육용, 전문가용으로 가장 완벽한 3D 프린터',
        link: 'https://creatablelabs.com/',
        image: 'https://creatablelabs.com/wp-content/uploads/2016/09/d3_market_bottom.png',
        alt: 'creatable-d3',
        definition: 'creatable_d3.def.json'
      },
      {
        name: 'Custom',
        description: '',
        link: '',
        image: 'http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/earth_0.jpg?itok=AuyUY6cZ',
        alt: 'custom',
        definition: 'custom.def.json'
      },
      {
        name: 'Delta Go',
        description: 'The Delta Go features anodized aluminum and powder coated steel construction with numerous improvements to produce amazing prints. The printer ships pre-assembled and tested from our facility.',
        link: 'http://deltaprintr.com/shop/3d-printers/delta-go/',
        image: 'https://23re3128oij2wuxh2nd3ndfi-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/Red-light.png',
        alt: 'delta-go',
        definition: 'delta_go.def.json'
      },
      {
        name: 'Deltabot',
        description: '',
        link: '',
        image: 'https://i.ytimg.com/vi/v9H7BSD6tKg/maxresdefault.jpg',
        alt: 'deltabot',
        definition: 'deltabot.def.json'
      },
      {
        name: 'FDM Extruder',
        description: '',
        link: '',
        image: 'http://2.bp.blogspot.com/-ssnrsjAxBlM/UZS1ghQaQqI/AAAAAAAABC4/jxPwPjfdU6M/s1600/IMG_0034_Filling.JPG',
        alt: 'fdmextruder',
        definition: 'fdmextruder.def.json'
      },
      {
        name: 'FDM Printer',
        description: '',
        link: '',
        image: 'http://www.newstatesman.com/sites/default/files/styles/nodeimage/public/blogs_2016/05/hubble_image.jpg?itok=6eE2neX3',
        alt: 'fdmprinter',
        definition: 'fdmprinter.def.json'
      },
      {
        name: 'Folgertech FT-5',
        description: 'The Folger Technologies FT-5 is a great kit combining the simplicity of an erector set with the power of a much more expensive desktop printer. The kit comes with everything you need to assemble the machine with the use of a few simple tools and a little bit of time you too can get started 3D printing the worlds next big idea.',
        link: 'https://folgertech.com/products/folger-tech-ft-5-large-scale-3d-printer-kit',
        image: 'https://cdn.shopify.com/s/files/1/0586/8617/products/Folger-Web-6_original_large.jpg?v=1463494619',
        alt: 'folgertech-ft-5',
        definition: 'folgertech_FT-5.def.json'
      },
      {
        name: 'German RepRap Neo',
        description: 'Its simple and easy to create 3D models with the NEO 3D-printer. Small and compact, the NEO is perfect for the home user – just unpack, set it up and start printing. Use your creativity and generate real items based on your ideas.',
        link: 'https://www.germanreprap.com/en/products/3d-printer/neo-3d-printer/',
        image: 'https://i.ytimg.com/vi/bW5U3hgmyyA/maxresdefault.jpg',
        alt: 'grr-eno',
        definition: 'grr_neo.def.json'
      },
      {
        name: 'HelloBee Prusa',
        description: 'Full Metal Dual Extruder, able to print in a wide range of materials. Open Source project with Brand and Community support at the BEEVERYCREATIVE Forum. Engineered by BEEVERYCREATIVE and Hello 3D Printing World.',
        link: 'https://beeverycreative.com/hellobeeprusa-3d-printer/',
        image: 'https://i.ytimg.com/vi/Qv7a9iDf7pQ/maxresdefault.jpg',
        alt: 'hellobee-prusa',
        definition: 'helloBEEprusa.def.json'
      },
      {
        name: 'Innovo Inventor',
        description: 'They say that "in the maximum expression of simplicity, the highest level of complexity is found". This is maybe the verbatim that personifies the Inventor . This is a mini factory on your desktop. Ideal for small replacement parts, injection moulds, prototyping, dental impressions, among many other uses.',
        link: 'https://www.innovo3d.co/page/printer',
        image: 'https://i.ytimg.com/vi/bpcHRkMKmyk/maxresdefault.jpg',
        alt: 'innovo-inventor',
        definition: 'innovo_inventor.def.json'
      },
      {
        name: 'Jellybox',
        description: 'The idea behind IMADE3D was simple: focus on 3D printers foremost as a learning experience. There is no better way to learn 3D printing in depth than to build your own machine! Since the 3D printer kits on market didnt satisfy our high demands on ease of build, use, and print quality, we created the JellyBox. Its great for parents with kids, teachers, students, teenager, boys and girls.',
        link: 'https://www.imade3d.com/jellybox/',
        image: 'http://www.youthquestfoundation.org/wp-content/uploads/2016/01/TableJellyBoxWide820.jpg',
        alt: 'jellybox',
        definition: 'jellybox.def.json'
      },
      {
        name: 'Julia',
        description: 'With extensive research and development, Fracktal Works brings Julia+ a reliable printer for all your complex prints. Julia+ helps perform difficult prints of all shapes and sizes when you need it.',
        link: 'http://www.fracktal.in/julia/',
        image: 'http://www.aniwaa.com/wp-content/uploads/2015/07/3D-printer-fracktal-julia-v2-on-desk.jpg',
        alt: 'julia',
        definition: 'julia.def.json'
      },
      {
        name: 'Kossel Mini',
        description: 'This machine originates from a RepRap project and uses a Delta construction to 3D print. It is the small version of the original Kossel, with reduced footprint and build volume. It ships with an auto-leveling build platform and prints at a resolution of 30 microns. The project is open source and many custom upgrades can be found online.',
        link: 'https://www.3dhubs.com/3d-printers/kossel-mini',
        image: 'https://i.ytimg.com/vi/IJor2vb2o-w/maxresdefault.jpg',
        alt: 'kossel-mini',
        definition: 'kossel_mini.def.json'
      },
      {
        name: 'Kossel Pro',
        description: 'We strive to make the Kossel Pro and the OpenBeam Kossel Reprap to be as straightforward and easy to build as possible. All our cables pre-crimped with polarity keyed locking connectors, and use laser cut spacers to assist with loading the nuts into the proper position.',
        link: 'https://ztautomations.dozuki.com/c/Kossel_Pro_3D_Printer',
        image: 'https://i.ytimg.com/vi/kIFJQ3zeb30/maxresdefault.jpg',
        alt: 'kossel-pro',
        definition: 'kossel_pro.def.json'
      },
      {
        name: 'Kupido',
        description: 'Baskı sırasında yaşanan müdahaleleri ve kazaları önleyen korumalı yapı.',
        link: 'http://kupido3d.com/',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgfOgEydPRaxcwSVL2f9uel0JBlz2ClJBawv8hN2vEkyk2y9k',
        alt: 'kupido',
        definition: 'kupido.def.json'
      },
      {
        name: 'M180',
        description: 'It is a dual head metal framed printer with removable heated bed, looks really good, build area is bit smaller than normal at 230x150x165h but 230mm is fairly good especially with Dual heads.',
        link: 'http://malyansys.com/en/',
        image: 'https://ae01.alicdn.com/kf/HTB15qvYJFXXXXcOXpXXq6xXFXXXr/Malyan-metal-3D-printer-M180.jpg',
        alt: 'm180',
        definition: 'm180.def.json'
      },
      {
        name: '3DMaker Starter',
        description: 'This 3D-printer model is designed in industrial, modern and elegant shape to target the use of individuals and families. 3DMAKER STARTER enables users to print the model up to the volume of 200mm x 180mm x 200mm. It will be the great power to implement you ideas in practice.',
        link: 'http://www.3dmaker.vn/3d-printer-3dmaker-starter/?lang=en',
        image: 'http://www.3dmaker.vn/wp-content/uploads/bfi_thumb/4-m74ulsamut06xheb50tzwdhgztyou8e9o1k9io2hqa.jpg',
        alt: 'maker-starter',
        definition: 'maker_starter.def.json'
      },
      {
        name: 'Makerbot Replicator',
        description: 'To ensure easy, accessible 3D printing, the MakerBot Replicator+ comes with the Smart Extruder+ and all the standard features of its predecessor. A few of those features include an LCD display, an on-board camera, as well as USB, Wi-Fi, and Ethernet connectivity.',
        link: 'http://www.3dmaker.vn/3d-printer-3dmaker-starter/?lang=en',
        image: 'http://makerbot-blog-old.s3.amazonaws.com/wp-content/uploads/2012/09/MakerBot_Replicator2_Front_View-700x466.jpg',
        alt: 'makerbotreplicator',
        definition: 'makerbotreplicator.def.json'
      },
      {
        name: 'Mankati Fullscale XT Plus',
        description: 'To ensure easy, accessible 3D printing, the MakerBot Replicator+ comes with the Smart Extruder+ and all the standard features of its predecessor. A few of those features include an LCD display, an on-board camera, as well as USB, Wi-Fi, and Ethernet connectivity.',
        link: 'http://www.mankati.com/fullscale-xt-plus/',
        image: 'https://ae01.alicdn.com/kf/HTB1h0hzIpXXXXcDXXXXq6xXFXXX6/Professional-Prototype-Mankati-Fullscale-XT-Plus-3D-printer.jpg',
        alt: 'mankati-fullscale-xt-plus',
        definition: 'mankati_fullscale_xt_plus.def.json'
      },
      {
        name: 'Mendel90',
        description: 'The Mendel90 is the improved version of the RepRap based Mendel Prusa. It is an open source printer and is available as a kit. It features a heated bed and prints various materials amongst PLA and ABS. The build volume is 20 x 20 x 20 cm. and it can print at a resolution of 50 microns.',
        link: 'http://reprap.org/wiki/Mendel90',
        image: 'http://i.imgur.com/FqNNt.jpg',
        alt: 'mendel90',
        definition: 'mendel90.def.json'
      },
      {
        name: 'RoVa3D',
        description: 'The ORD Bot is a version of the Printrbot design built around Makerslide: structural aluminum extrusion with bearing surfaces molded into each side. This improves frame stiffness, mechanical reliability and print speed in exchange for an increase in cost.',
        link: 'https://www.ordsolutions.com/rova3d-single-extruder-3d-printer-sold-out/',
        image: 'http://www.robotshop.com/media/files/images2/rova3d-single-extruder-3d-printer-desc1.jpg',
        alt: 'ord',
        definition: 'ord.def.json'
      },
      {
        name: 'Printrbot Play',
        description: 'Introducing our most affordable 3D printer yet – the Printrbot Play. Now you can afford to own a 3D printer for work. ..or play. The Play features a 4 x 4 x 5 inches build area, metal construction, and a cover over the hot end to protect curious hands from getting burned. Its a smart choice for the home or classroom.',
        link: 'http://printrbot.com/printrbot-play/',
        image: 'https://all3dp.com/app/uploads/2015/11/printrbot_play_hero.jpg',
        alt: 'printrbot-play',
        definition: 'printrbot_play.def.json'
      },
      {
        name: 'Printrbot Play Heated',
        description: 'Introducing our most affordable 3D printer yet – the Printrbot Play. Now you can afford to own a 3D printer for work. ..or play. The Play features a 4 x 4 x 5 inches build area, metal construction, and a cover over the hot end to protect curious hands from getting burned. Its a smart choice for the home or classroom.',
        link: 'http://printrbot.com/printrbot-play/',
        image: 'https://all3dp.com/app/uploads/2015/11/printrbot_play_design-1024x576.jpg',
        alt: 'printrbot-play-heated',
        definition: 'printrbot_play_heated.def.json'
      },
      {
        name: 'Printrbot Simple',
        description: 'Introducing our most affordable 3D printer yet – the Printrbot Play. Now you can afford to own a 3D printer for work. ..or play. The Play features a 4 x 4 x 5 inches build area, metal construction, and a cover over the hot end to protect curious hands from getting burned. Its a smart choice for the home or classroom.',
        link: 'https://printrbot.com/shop/simple-v2/',
        image: 'https://cdn.instructables.com/F5J/I1M3/HQ1E9BEZ/F5JI1M3HQ1E9BEZ.MEDIUM.jpg',
        alt: 'printrbot-simple',
        definition: 'printrbot_simple.def.json'
      },
      {
        name: 'Printrbot Simple Extended',
        description: 'Introducing our most affordable 3D printer yet – the Printrbot Play. Now you can afford to own a 3D printer for work. ..or play. The Play features a 4 x 4 x 5 inches build area, metal construction, and a cover over the hot end to protect curious hands from getting burned. Its a smart choice for the home or classroom.',
        link: 'https://www.indiegogo.com/projects/printrbot-simple-xl-extended-heated-bed#/',
        image: 'https://i.ytimg.com/vi/jknl5ULOzJw/maxresdefault.jpg',
        alt: 'printrbot-simple-extended',
        definition: 'printrbot_simple_extended.def.json'
      },
      {
        name: 'Prusa i3',
        description: 'Prusa i3 (i3 stands for third iteration of the design) is the latest design by me. There are countless variations of the design and it became a staple of 3D printing with tens, if not hundreds, of thousands units world wide. You can build simple one for couple hundred dollars or you can chip in more and get the state of the art 3D printer, its all up to you.',
        link: 'http://www.prusaprinters.org/prusa-i3/',
        image: 'https://3dprinting4u.files.wordpress.com/2013/04/dscn8567.jpg',
        alt: 'prusa-i3',
        definition: 'prusa_i3.def.json'
      },
      {
        name: 'Prusa i3 MK2',
        description: 'Prusa i3 is a proven design with tens of thousands users all around the planet. Now you have a great opportunity to buy one directly from the author Josef Průša and support its further development. All parts of this 3D printer are Open Source and are part of the RepRap project.',
        link: 'http://shop.prusa3d.com/en/3d-printers/59-original-prusa-i3-mk2-kit.html?gclid=EAIaIQobChMIo-bKkOfd1QIVjgMqCh1q5gbjEAAYASAAEgIULfD_BwE',
        image: 'https://all3dp.com/app/uploads/2016/09/prusaheroii.jpg',
        alt: 'prusa-i3-mk2',
        definition: 'prusa_i3_mk2.def.json'
      },
      {
        name: 'Prusa i3 XL',
        description: 'Prusa i3 is a proven design with tens of thousands users all around the planet. Now you have a great opportunity to buy one directly from the author Josef Průša and support its further development. All parts of this 3D printer are Open Source and are part of the RepRap project.',
        link: 'http://shop.prusa3d.com/forum/prusa-i3-kit-building-calibrating-first-print-main-f6/prusa-i3-xl-t4373.html',
        image: 'http://centrumdruku3d.pl/wp-content/uploads/2015/07/Jelwek.jpg',
        alt: 'prusa-i3-xl',
        definition: 'prusa_i3_xl.def.json'
      },
      {
        name: 'Punchtec Connect XL',
        description: '',
        link: 'http://3dprintingdatabase.org/en/3dprinter/connect-xl',
        image: 'https://i.ytimg.com/vi/nZQDIemPNDg/maxresdefault.jpg',
        alt: 'punchtec-connect-xl',
        definition: 'punchtec_connect_xl.def.json'
      },
      {
        name: 'Renkforce RF100',
        description: 'The RF 100 is shipped as a completely assembled unit with everything you need to get started included in delivery. The RF100 offers the flexibility to be controlled with the included software by your PC or using the integrated LCD display. Printing can be done with a PC/Laptop connected to the unit or simply direct from the SD card without any cables needed.',
        link: 'http://www.conrad.com/ce/en/product/1507428/Renkforce-RF100-3D-printer-incl-filament',
        image: 'https://i.ytimg.com/vi/mPojYyv3K9I/maxresdefault.jpg',
        alt: 'renkforce-rf-100',
        definition: 'renkforce_rf100.def.json'
      },
      {
        name: 'Rigid3D',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://i.ytimg.com/vi/mq9X1s7QLdQ/maxresdefault.jpg',
        alt: 'rigid3d',
        definition: 'rigid3d.def.json'
      },
      {
        name: 'Rigid3D 3rd Gen',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://i.ytimg.com/vi/mq9X1s7QLdQ/maxresdefault.jpg',
        alt: 'rigid3d-3rdgen',
        definition: 'rigid3d_3rdgen.def.json'
      },
      {
        name: 'Rigid3D Hobby',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://i.ytimg.com/vi/mq9X1s7QLdQ/maxresdefault.jpg',
        alt: 'rigid3d-hobby',
        definition: 'rigid3d_hobby.def.json'
      },
      {
        name: 'Rigid3D Zero',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://i.ytimg.com/vi/mq9X1s7QLdQ/maxresdefault.jpg',
        alt: 'rigid3d-zero',
        definition: 'rigid3d_zero.def.json'
      },
      {
        name: 'Rigidbot',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'http://i.imgur.com/qmUP2zg.jpg',
        alt: 'rigidbot',
        definition: 'rigidbot.def.json'
      },
      {
        name: 'Rigidbot Big',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://thingiverse-production-new.s3.amazonaws.com/renders/4f/89/9c/e3/7e/20150417_021826343_iOS_preview_featured.jpg',
        alt: 'rigidbot-big',
        definition: 'rigidbot_big.def.json'
      },
      {
        name: 'Robo3D R1',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://robo3d.com/wp-content/uploads/2015/12/14-08-07_Robo3D_Product_shots.jpg',
        alt: 'robo-3d-r1',
        definition: 'robo_3d_r1.def.json'
      },
      {
        name: 'Ultimaker',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://www.dream3d.co.uk/wp-content/uploads/2014/10/Dual-Extrusion-2.png',
        alt: 'ultimaker',
        definition: 'ultimaker.def.json'
      },
      {
        name: 'Ultimaker Original',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://d3v5bfco3dani2.cloudfront.net/photo/image/1300x0/570fbd94873d9/1My-little-workshop-175-umo-neotko05.jpg',
        alt: 'ultimaker-original',
        definition: 'ultimaker_original.def.json'
      },
      {
        name: 'Ultimaker Original Plus',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://static.webshopapp.com/shops/024440/files/015229105/800x600x2/ultimaker-original-diy-kit.jpg',
        alt: 'ultimaker-original-plus',
        definition: 'ultimaker_original_plus.def.json'
      },
      {
        name: 'Ultimaker Original Dual',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://s3.amazonaws.com/app-cdn.ultimaker.com/videos/Images/UM2Go/Unboxing-4.jpg',
        alt: 'ultimaker_original_dual',
        definition: 'ultimaker_original_dual.def.json'
      },
      {
        name: 'Ultimaker 2',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://i.ytimg.com/vi/mq9X1s7QLdQ/maxresdefault.jpg',
        alt: 'ultimaker-2',
        definition: 'ultimaker2.def.json'
      },
      {
        name: 'Ultimaker 2 Go',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://d3v5bfco3dani2.cloudfront.net/img/ultimaker_2go/videos/Ultimaker-2-Go-colorful-3D-prints@2x.jpg',
        alt: 'ultimaker-2-go',
        definition: 'ultimaker2_go.def.json'
      },
      {
        name: 'Ultimaker 2 Plus',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://ultimaker.com/photo/topic/0x0/561f7f5b6327a/ultimaker-2-3d-printer-family-release.jpg',
        alt: 'ultimaker-2-plus',
        definition: 'ultimaker2_plus.def.json'
      },
      {
        name: 'Ultimaker 2 Extended',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'http://pic.pimg.tw/printer3d/1420618705-684779646.png',
        alt: 'ultimaker-2-extended',
        definition: 'ultimaker2_extended.def.json'
      },
      {
        name: 'Ultimaker 2 Extended Plus',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://i.ytimg.com/vi/Sz77Tq9xzpM/hqdefault.jpg',
        alt: 'ultimaker-2-extended-plus',
        definition: 'ultimaker2_extended_plus.def.json'
      },
      {
        name: 'Ultimaker 3',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://d3v5bfco3dani2.cloudfront.net/photo/topic/1920x1080/5804d6818123d/Ultimaker_3_Release.jpg',
        alt: 'ultimaker-3',
        definition: 'ultimaker3.def.json'
      },
      {
        name: 'Ultimaker 3 Extended',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://i.ytimg.com/vi/mq9X1s7QLdQ/maxresdefault.jpg',
        alt: 'ultimaker-3-extended',
        definition: 'ultimaker3_extended.def.json'
      },
      {
        name: 'Uniqbot One',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://static1.squarespace.com/static/509c281de4b0cd18c7335aab/t/568899541c1210fead03c563/1451792725399/',
        alt: 'uniqbot-one',
        definition: 'uniqbot_one.def.json'
      },
      {
        name: 'Vertex K8400',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://algorithmicart.files.wordpress.com/2014/11/2014-09-09-15-10-50nikon-corporation-nikon-d3000-3872x2592.jpeg',
        alt: 'vertex-k8400',
        definition: 'vertex_k8400.def.json'
      },
      {
        name: 'Vertex K8400 Dual',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'https://www.gotronic.fr/ori-imprimante-3d-en-kit-vertex-k8400-21928_2801.jpg',
        alt: 'vertex-k8400-dual',
        definition: 'vertex_k8400_dual.def.json'
      },
      {
        name: 'Zone3D',
        description: '',
        link: 'http://www.rigid3d.com/',
        image: 'http://remotely-interested.com/wp-content/uploads/2014/03/ces3d-print.jpg',
        alt: 'zone3d',
        definition: 'zone3d_printer.def.json'
      }
    ];

    return (
      <div className="row">
        {printers.map(function(printer, i) {
          return <PrinterCard
            name={printer.name}
            description={printer.description || 'No description available yet.'}
            link={printer.link}
            image={printer.image}
            alt={printer.alt}
            definition={printer.definition}
            key={i} />;
        })}
      </div>
    );
  }

}
