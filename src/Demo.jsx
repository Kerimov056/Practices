// import React, { useState } from 'react';
// import html2canvas from 'html2canvas';

// const ScreenCapture = () => {
//   const [screenshotDataUrl, setScreenshotDataUrl] = useState(null);

//   const captureScreen = () => {
//     const element = document.documentElement;
//     const width = element.clientWidth;
//     const height = element.clientHeight;

//     html2canvas(element, { width, height }).then(canvas => {
//       const dataUrl = canvas.toDataURL();
//       setScreenshotDataUrl(dataUrl);
//       console.log('Screen captured:', dataUrl);
//     });
//   };

//   return (
//     <div>
//       <h1>Ekran Kaydı Örneği</h1>
//       <p>Bu bir örnek bileşendir.</p>
//       {screenshotDataUrl && <img src={screenshotDataUrl} alt="Ekran Görüntüsü" />}
//       <button onClick={captureScreen}>Ekranı Kaydet</button>
//     </div>
//   );
// };

// export default ScreenCapture;
