// "use client";
// import { useEffect, useState } from "react";

// export function useDesktop() {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth > 768) {
//         setIsDesktop(true);
//       } else {
//         setIsDesktop(false);
//       }
//     }
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [window.innerWidth]);

//   return { isDesktop };
// }
