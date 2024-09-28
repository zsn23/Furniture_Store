import React from 'react';
const Location = () => {
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0297658694585!2d74.26507947407814!3d31.46836734971222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f42631839b%3A0xa9b16b5224799919!2sHouse%20of%20Professionals!5e0!3m2!1sen!2s!4v1727383205449!5m2!1sen!2s';
  return (
    <div className="container-fluid">
      <p className='text-center mt-2'><strong>Our Location</strong></p>
      <iframe
        title="Google Maps"
        src={mapUrl}
        width="100%"
        height="450"
        style={{
          border: '1px solid black',
          borderRadius: '8px',
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;