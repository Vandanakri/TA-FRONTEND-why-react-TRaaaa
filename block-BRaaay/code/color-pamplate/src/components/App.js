import data from  '../data/data.json';
import Colors from './Colors';

function App (){
    var keys = Object.keys(data);
    return keys.map(key => {
        return <Colors key={key} shade={key} />
    });
}

export default App;