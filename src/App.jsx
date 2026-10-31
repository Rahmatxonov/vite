
// import { useState } from "react";

// function App() {
//   const [fontSize, setFontSize] = useState(20);

//   return (
//     <div>
//       <h2>Matn o'lchamini o'zgartirish</h2>
//       <p style={{fontSize: `${fontSize}px`}}>Hello World</p>


//       <button onClick={() => setFontSize(fontSize + 5)}>Kattalashtirish</button>
//       <button onClick={() => setFontSize(fontSize - 5)}>Kichiklashtirish</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const images = ["https://www.kbb.com/wp-content/uploads/2025/02/2025-chevrolet-corvette-zr1-coupe-front-right.jpg?quality=75&strip=all", "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/TNC_PC2021_ff7243452d79a81025caff0db0eb286doriginal_JPG.jpg?crop=0%2C0%2C2500%2C1661&wid=710&hei=472&scl=3.5211267605633805", "https://media.wired.com/photos/593261cab8eb31692072f129/3:2/w_2560%2Cc_limit/85120553.jpg"];

//   const [imageIndex, setImageIndex] = useState(0);

//   function swiper () {
//     if(imageIndex < images.length - 1) {
//       setImageIndex(imageIndex + 1)
//     }
//     else {
//       setImageIndex(0)
//     }
//   }

//   return (
//     <div>
//       <h2>Rasmlar almashishi</h2>
//        <img src={images[imageIndex]} alt="err" style={{width: "400px", height: "400px", objectFit: "contain"}} />
//       <button onClick={swiper}>Keyingi rasm</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const emoji = ["😀", "😎", "🥳", "😍"];
//   const [emojiIndex, setEmojiIndex] = useState(0);

//   function emojiGenerator() {
//     if(emojiIndex < emoji.length - 1) {
//       setEmojiIndex(emojiIndex + 1)
//     }
//     else {
//       setEmojiIndex(0)
//     }
//   }

//   return (
//     <div>
//      <h2>Emoji almashtirish</h2>

//      <p>
//       {emoji[emojiIndex]}
//      </p>
//      <button onClick={emojiGenerator}>Keyingisi</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [volume, setVolume] = useState(50);

// function inc () {
//   if(volume < 100 ) {
//     setVolume(volume + 10)
//   }
// }

// function dec () {
//   if (volume > 0) {
//     setVolume(volume - 10)
//   }
// }

//   return (
//     <div>
//       <h2>Telefon ovozini boshqaring</h2>

//       <h3>Ovozi: {volume}</h3>

//       <button onClick={() => setVolume(0)}>Mute</button>
//       <button onClick={inc}>+</button>
//       <button onClick={dec}>-</button>
//     </div>
//   );
// }

// export default App;


import bmw from './assets/bmw.avif';
import tesla from './assets/tesla.jpg';
import toyota from './assets/toyota.jpg';


const App = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center gap-2 flex flex-wrap">
        <div className="w-[300px] border-2 border-black rounded-xl p-3">
          <img className='h-[200px] object-cover' src={bmw} alt="error" />
          <h2 className='text-red-500 text-center text-3xl sm:text-blue-500 md:text-yellow-500'>BMW</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat praesentium quasi saepe libero quod iste debitis at suscipit pariatur facilis?</p>
          <button>CLICK</button>
        </div>
        <div className="w-[300px] border-2 border-black rounded-xl p-3">
          <img className='h-[200px] object-cover' src={tesla} alt="error" />
          <h2 className='text-red-500 text-center text-3xl sm:text-blue-500 md:text-yellow-500'>TESLA</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat praesentium quasi saepe libero quod iste debitis at suscipit pariatur facilis?</p>
          <button>CLICK</button>
        </div>
        <div className="w-[300px] border-2 border-black rounded-xl p-3">
          <img className='h-[200px] object-cover' src={toyota} alt="error" />
          <h2 className='text-red-500 text-center text-3xl sm:text-blue-500 md:text-yellow-500'>TOYOTA</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat praesentium quasi saepe libero quod iste debitis at suscipit pariatur facilis?</p>
          <button>CLICK</button>
        </div>

      </div>
    </div>
  );
};

export default App;

