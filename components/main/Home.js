import React from 'react';
import ExhibitionsUpcoming from '../Expositions';
import Location from '../Location';
import contentData from '../../content.json';

import Image from 'next/image';

const Home = () => {
    return (
      <main>
    <section id="section-intro">
      <Image src='https://via.placeholder.com/1750x400/cccccc/808080/?text=Gevel Foto' alt="gevel-foto" id="gevel-foto" width="1750px" height="400px"/>
      <ExhibitionsUpcoming amount={contentData.upcoming.length} data={contentData.upcoming}/>
    </section>

    <section id="section-info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
          <Location />
          </div>
          <div className="col-lg-6 text-start">
            <h4>De iconische partiturenwinkel Musictelex is vandaag kunstgalerij ArtTelex</h4>
            <p>
            De geschiedenis van de ruimte: nu nog in zijn oorspronkelijke staat. In de iconische partiturenwinkel Musictelex in de Oude Beurs 39-41, opgericht door Lex Hagen, komt een kunstgalerij. Wat meer dan 40 jaar een begrip was in Antwerpen en ver daarbuiten wordt een ruimte voor visuele kunsten: Arttelex. Deze galerij biedt onderdak aan jonge kunstenaars. Al de beeldende kunstvormen zullen er aan bod komen. De overvolle winkel van weleer is leeggehaald. Maar verder is alles nog in zijn oorspronkelijke staat. In elke ruimte hangt de sfeer van weleer. Voor de verbouwingswerken aanvatten, worden er al “soft openingen” georganiseerd. Bij de ‘soft’ opening, op 17 december 2020, van zowel de ruimte Arttelex als de tentoonstelling ging Wilfried Van Hasselt (°1967), leraar aan het Stedelijk Lyceum Eilandje, beeldend in dialoog gaan met drie van zijn oud-leerlingen en jonge kunstenaars. Deze eerste tentoonstelling opende op donderdag 17 december ’20.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="section-openingsuren">
      <h2>Oude Beurs 39 - 41, 2000 Antwerpen</h2>
      <h3>OPEN Wednesday — Saturday</h3>
      <h3>14:00 — 18:00</h3>
    </section>
      </main>

    );
}
export default Home;