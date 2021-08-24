import classes from "./Prices.module.css";
import { useState, useCallback } from "react";
import { readPrices } from "../../api/prices";

const Hostel = (props) => {
  const [hostelPrice, setHostelPrice] = useState(props.price);
  const [isLoading, setIsLoading] = useState(false);

  const getPrice = useCallback(() => {
    setIsLoading(true);
    readPrices().then((response) => {
      setHostelPrice(
        response
          .filter((item) => item.type === "hostel")
          .map((item) => item.price)
      );
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={classes.item} onClick={getPrice}>
      <div className={classes.hostelImage}>
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9436 6.37358H10.945C11.0692 6.3743 11.1912 6.35048 11.302 6.30468C11.4128 6.2589 11.5082 6.19286 11.5826 6.11318C11.6564 6.03391 11.7072 5.94326 11.7339 5.84864C11.7605 5.75407 11.7629 5.65599 11.7411 5.5608L11.741 5.56027L11.599 4.93415L11.5986 4.93221L11.5986 4.93221C11.5657 4.78158 11.4733 4.63909 11.3287 4.53301C11.1836 4.42664 10.9973 4.3657 10.8014 4.36531C10.8013 4.36531 10.8012 4.36531 10.8011 4.36531L10.8016 4.11531L10.9436 6.37358ZM10.9436 6.37358L8.02202 6.37358L8.02154 6.37358C7.89771 6.37382 7.77616 6.34967 7.66589 6.30371C7.55565 6.25777 7.46069 6.19172 7.38663 6.11215C7.31267 6.0327 7.26144 5.94188 7.23425 5.84702C7.20718 5.75258 7.20402 5.65462 7.22478 5.55936C7.22484 5.55909 7.2249 5.55882 7.22496 5.55855L7.36657 4.93415L7.3668 4.93312C7.40041 4.78196 7.49356 4.63915 7.63898 4.53295C7.78481 4.42646 7.97184 4.36557 8.16839 4.36531M10.9436 6.37358L8.16839 4.36531M8.16839 4.36531C8.16846 4.36531 8.16852 4.36531 8.16859 4.36531L8.16839 4.36531ZM6.47037 6.84694L6.4699 6.84644C6.30862 6.67139 6.18566 6.4694 6.10848 6.25128H5.24629L2.70225 10.7487H16.2931L13.7452 6.25128H12.8592C12.7802 6.46874 12.6569 6.6703 12.4963 6.84581L12.496 6.84607C12.305 7.05416 12.0659 7.21949 11.7975 7.33183C11.5293 7.44408 11.2374 7.50115 10.9429 7.4997M6.47037 6.84694L8.02632 7.2497M6.47037 6.84694C6.66251 7.05433 6.90229 7.21912 7.17107 7.33127C7.43969 7.44334 7.73185 7.5006 8.02668 7.4997M6.47037 6.84694L8.02632 7.2497M10.9429 7.4997C10.9427 7.4997 10.9425 7.49969 10.9422 7.49969L10.9436 7.2497V7.4997H10.9429ZM10.9429 7.4997H8.02668M8.02668 7.4997C8.02683 7.4997 8.02698 7.4997 8.02713 7.4997L8.02632 7.2497M8.02668 7.4997H8.02632V7.2497M3.37554 15.6869V15.0016H15.6245V15.6869H15.6244L15.6245 15.6903C15.6266 15.8497 15.6996 15.9947 15.8158 16.0965C15.931 16.1975 16.0807 16.25 16.2316 16.25C16.2316 16.25 16.2316 16.25 16.2316 16.25H17.6472C17.798 16.25 17.9479 16.1971 18.0626 16.0953C18.1783 15.9927 18.25 15.8466 18.25 15.6869V11.9379H18.2501L18.2499 11.9321C18.2458 11.7543 18.198 11.5807 18.1115 11.4238C18.0439 11.3013 17.9544 11.1918 17.8479 11.0989L17.8447 11.0842L17.826 11.0512L14.7089 5.546L14.7089 1.93918L14.7089 1.93804C14.7074 1.61222 14.5603 1.30722 14.3116 1.08751C14.064 0.868647 13.7344 0.749998 13.3961 0.75H5.58669C5.24842 0.749998 4.91883 0.868647 4.67117 1.08751C4.42254 1.30722 4.27541 1.61222 4.27392 1.93804H4.27392V1.93918V5.546L1.15679 11.0512L1.12791 11.1022L1.12741 11.1113C1.02623 11.2034 0.94157 11.3111 0.878094 11.4309L1.09861 11.5478L0.878094 11.4309C0.794946 11.5878 0.750698 11.7606 0.75 11.9369V11.9379V15.6869H0.749977L0.750023 15.6903C0.752187 15.8497 0.825175 15.9947 0.941313 16.0965C1.05651 16.1975 1.20628 16.25 1.35713 16.25C1.35713 16.25 1.35714 16.25 1.35714 16.25H2.77272C2.92359 16.25 3.07341 16.1971 3.18812 16.0953C3.30381 15.9927 3.37554 15.8466 3.37554 15.6869ZM10.8155 3.25065H10.8145L8.17692 3.25065L8.17544 3.25066C7.7198 3.25335 7.27575 3.39482 6.91797 3.65593C6.55976 3.91735 6.30759 4.2849 6.21217 4.70078L6.11474 5.12516H5.50781L5.48387 1.93918C5.48387 1.93904 5.48387 1.9389 5.48387 1.93875C5.48399 1.93219 5.48684 1.91926 5.50313 1.90481C5.52075 1.88918 5.55041 1.87612 5.58669 1.87612H13.3789C13.4152 1.87612 13.4448 1.88918 13.4625 1.90481C13.4791 1.91958 13.4817 1.93276 13.4817 1.93918V5.12516H12.8767L12.7794 4.70132C12.7793 4.70124 12.7793 4.70116 12.7793 4.70108C12.6847 4.28473 12.4327 3.91666 12.0742 3.65507C11.7161 3.39374 11.2715 3.25255 10.8155 3.25065ZM16.9028 11.8748H16.9028C16.9399 11.8748 16.9705 11.8881 16.989 11.9043C17.0063 11.9195 17.0098 11.9334 17.01 11.941C17.01 11.9411 17.01 11.9412 17.01 11.9413L17.0252 13.8755H1.94274V11.9379C1.94274 11.9315 1.94535 11.9183 1.962 11.9035C1.97962 11.8879 2.00928 11.8748 2.04556 11.8748H16.9028ZM1.94274 15.1239V15.0016H2.15269V15.1239H1.94274ZM17.0271 15.1239H16.8172V15.0016H17.0271V15.1239Z"
            fill="#787878"
            stroke="#787878"
            strokeWidth="0.5"
          />
        </svg>
        <div className={classes.hostelTitle}>место в хостеле</div>
      </div>
      {isLoading ? (
        <div className={classes.gif}></div>
      ) : (
        <div className={classes.price}>{hostelPrice} USD</div>
      )}
    </div>
  );
};

export default Hostel;