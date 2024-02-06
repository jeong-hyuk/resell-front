import { db } from "@/firebase";

const AllProduct = () => {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "resell"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      });
    };
    fetchData();
  }, []);
  return <></>;
};

// export default AllProduct;
// import React, { useEffect } from "react";
// import { collection, getDocs } from "@firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { db } from "@/firebase";

// const AllProduct = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const querySnapshot = await getDocs(collection(db, "resell"));
//       querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
//       });
//     };

//     fetchData();
//   }, []);

//   return <></>;
// };

export default AllProduct;
// AllProducts.jsx
// import React, { useState, useEffect } from "react";
// import { db } from "@/firebase";

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Firestore에서 상품을 가져와 최신순으로 정렬합니다.
//     const fetchData = async () => {
//       try {
//         const productsCollection = await getDocs(collection(db, "resell"));
//         const productsData = productsCollection.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         const sortedProducts = productsData.sort((a, b) => b.createdAt - a.createdAt);
//         setProducts(sortedProducts);
//       } catch (error) {
//         console.error("상품을 불러오는 도중 오류 발생", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>전체 상품</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <img src={product.imageUrl} alt={product.title} />
//             {/* 필요에 따라 더 많은 세부 정보를 추가하세요 */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AllProducts;
