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
