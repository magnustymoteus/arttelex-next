import CustomPagination from '../CustomPagination';
import ExpoGrid from '../ExpoGrid';

const Archived = (props) => {
    return (
        <main>
            <section id="section-archived">
            <h1 className="display-4 text-center my-5">Archived Expositions</h1>
            <ExpoGrid amount={props.amount} />
            <CustomPagination amount={props.amount}/>
            </section>
        </main>
    );
}
export default Archived;