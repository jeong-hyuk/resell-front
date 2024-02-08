import { db } from "@/firebase";

const AllProducts = () => {
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

export default AllProducts;
