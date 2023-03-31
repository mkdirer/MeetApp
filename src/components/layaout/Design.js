import designClasses from './Design.module.css';
import MainNavigation from './MainNavigation';

function Design(props) {
    return <div>
    <MainNavigation />
    <main className={designClasses.main}>
    {props.children}
    </main>
    </div>
}

export default Design;