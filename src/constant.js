import Home from '../src/assets/image/home.svg'
import Contact from '../src/assets/image/user.svg'
import File from '../src/assets/image/files.svg'
import Timer from '../src/assets/image/repeat.svg'
import Data from '../src/assets/image/server-storage.svg'
import Calender from '../src/assets/image/calendar.svg'
import Setting from '../src/assets/image/settings.svg'

const navigationList = [
    {
        name: 'home',
        link: '/',
        icon: Home,
    },
    {
        name: 'Contact',
        link: '/contact',
        icon: Contact,
    },
    {
        name: 'Files',
        link: '/files',
        icon: File,
    },
    {
        name: 'Time',
        link: '/timer',
        icon: Timer,
    },
    {
        name: 'Data',
        link: '/datamanagement',
        icon: Data,
    },
    {
        name: 'Calender',
        link: '/period',
        icon: Calender,
    },
    {
        name: 'Setting',
        link: '/setting',
        icon: Setting,
    }
]

export default navigationList;