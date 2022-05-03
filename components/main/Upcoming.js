import ExpositionsUpcoming  from '../Expositions';
import contentData from '../../content.json';
const Upcoming = () => {
    return (
        <main>
            <section id="section-upcomingExpo">
                <h1 className="display-3">Upcoming Expositions 2022</h1>
                <ExpositionsUpcoming amount={contentData.upcoming.length} data={contentData.upcoming}/>
            </section>
        </main>
    );
}
export default Upcoming;