import React from 'react';

const RandomBackground = ({ children }) => {
  const backgroundImages = [
    'https://images.pexels.com/photos/1998438/pexels-photo-1998438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', //sri lanka
    'https://images.pexels.com/photos/46790/leopard-wildcat-big-cat-botswana-46790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', //africa
    'https://images.pexels.com/photos/65567/pexels-photo-65567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', //german
    'https://images.pexels.com/photos/547494/pexels-photo-547494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', //europe
    'https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',  //london
    'https://images.pexels.com/photos/2915957/pexels-photo-2915957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', //china
    'https://www.pexels.com/photo/photo-of-pagodas-during-daytime-2797526/', //thailand
    'https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', //russia
    'https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', //amreica
    'https://www.pexels.com/photo/photo-of-pagodas-during-daytime-2797526/', //thailand
    'https://www.pexels.com/photo/photo-of-pagodas-during-daytime-2797526/', //thailand
  ];

  const selectedImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  return (
    <div 
      style={{
        minWidth: '100%',
        backgroundImage: `url(${selectedImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '10px',
      }}
    >
      {children}
    </div>
  );
};

export default RandomBackground;
