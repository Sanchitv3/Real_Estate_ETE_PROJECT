import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div className=' bg-slate-900'>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto text-center'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl animate__animated animate__fadeIn animate__slower'>
        Find Your <span className='text-slate-500'> Space in the</span>
          <br />
          City of Dreams.
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm animate__animated animate__fadeIn animate__delay-1s animate__slow animate__infinite'>
          Welcome to Dream Estate !!
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className=' text-2xl p-4 shadow-2xl shadow-slate-200 text-blue-800 font-bold hover:translate-y-2 duration-500 bg-white rounded-full w-fit mx-auto'
        >
          Explore Now 
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 bg-slate-200 rounded-xl shadow-2xl mb-0'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-black font-mono'>Recent offers</h2>
              <Link className='text-blue-200  bg-slate-700 p-1 rounded-lg' to={'/search?offer=true'}><i class="fa fa-filter" aria-hidden="true"></i> Filter</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-black font-mono'>Recent places for rent</h2>
              <Link className='text-blue-200  bg-slate-700 p-1 rounded-lg' to={'/search?type=rent'}><i class="fa fa-filter" aria-hidden="true"></i> Filter</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-black font-mono'>Recent places for sale</h2>
              <Link className=' text-blue-200  bg-slate-700 p-1 rounded-lg' to={'/search?type=sale'}><i class="fa fa-filter" aria-hidden="true"></i> Filter</Link>
            </div>
            <div className='flex flex-wrap gap-4 '>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}
