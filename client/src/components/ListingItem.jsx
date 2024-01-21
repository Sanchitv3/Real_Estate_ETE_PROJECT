import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white  hover:translate-y-1 shadow-2xl hover:shadow-slate-800 hover:opacity-90 hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700 font-mono  text-center  rounded-full'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-green-700 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            {listing.description}
          </p>
          <p className='text-red-500 mt-2 font-semibold '>
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className='text-slate-700 flex gap-4'>
            
            <div className='font-bold text-xs'>
            <i class="fa fa-bed" aria-hidden="true"></i>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className='font-bold text-xs'>
            <i class="fa fa-bath" aria-hidden="true"></i>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
