import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.components';

const Home = () => {

  const categories = [
    {
      id: 1,
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      title: 'Hats',
      subtitle: 'Shop Now'
    },
    {
      id: 2,
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      title: 'Jackets',
      subtitle: 'Shop Now'
    },
    {
      id: 3,
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      title: 'Sneakers',
      subtitle: 'Shop Now'
    },
    {
      id: 4,
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      title: 'Womens',
      subtitle: 'Shop Now'
    },
    {
      id: 5,
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      title: 'Mens',
      subtitle: 'Shop Now'
    }
  ]

  return (
      <div>
         <Directory categories={categories}/>
         <Outlet / >
      </div>
  );
}

export default Home;
