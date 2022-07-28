import SearchBar from '../Components/SearchBar'
import Coinlist from '../Components/Coinlist'
import Layout from '../Components/SearchBar/Layout'
import { useState } from 'react'
export default function Home({ filtercoins }) {
  const [search, setSearch] = useState('');
  const allCoins = filtercoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className='coin_app' >
        <SearchBar type='text' placeholder='Search' onChange={handleChange} />
        <Coinlist filtercoins={allCoins} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const filtercoins = await res.json()
  return {
    props: {
      filtercoins
    }
  }
}
