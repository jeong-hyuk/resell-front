import React, { useEffect } from "react";
import { db } from "@/firebase";
import { collection, getDocs } from "@firebase/firestore";

const AllProducts = () => {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "resell"));
      const resell = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        const data = {
          id: doc.id,
          ...doc.data(),
        };
        console.log("data", data);
        resell.push(data);
      });
    };
    fetchData();
  }, []);

  return <></>;
};

export default AllProducts;
