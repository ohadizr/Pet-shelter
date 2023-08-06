import React from 'react'
import catBannerAdopt from '../../assets/Photos/cat_orange_background.webp';
import dogBannerAdopt from "../../assets/Photos/dog_green_background.jpg";
export default function Banners() {
  return (
    <div>
            <div className="bannerContainer">
        <div className="BannerAdopt">
          <img src={catBannerAdopt} alt="cat" className="BannerAdoptImg" />
          <button className="standardButton catAdoptButton">Adopt</button>
          <h5 className="catAdoptText">Cats are the purr-fect addition to any family.</h5>
        </div>
        <div className="BannerAdopt">
          <img src={dogBannerAdopt} alt="dog" className="BannerAdoptImg" />
          <button className="standardButton dogAdoptButton">Adopt</button>
          <h5 className="dogAdoptText">Your new best friend is waiting for you!</h5>
        </div>
        </div>

    </div>
  )
}
