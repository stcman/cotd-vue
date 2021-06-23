import StorePicker from './components/StorePicker';
import StorePage from './components/StorePage';

export default [
    {path: '/', component: StorePicker},
    {path: '/store/:name', component: StorePage}
]