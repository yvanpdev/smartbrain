import React from 'react';

const FaceRecoginition = ({ imageURL }) => {
  return (
    <div className="center ma">
      <div className='absolute mt2'>
        <img id='inputimage' src={imageURL} alt='' width='500px' height='auto' />
      </div>
    </div>
  );
}

export default FaceRecoginition;