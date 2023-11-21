import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BatikData } from "../Provider/Batik";
import { AuthContext } from "../Provider/Auth";

export default function Detail() {
    const { Batik } = useContext(BatikData);
    const {isLoggedIn} = useContext(AuthContext);
    const { id } = useParams();
    const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      const filtered = Batik.filter(item => item.id == id);
      filtered.map((item) => {
        setFilteredData(item);
      })
    }, [Batik, id]);

    useEffect(() => {
        if(!isLoggedIn){
            navigate("/login")
        }
    }, [isLoggedIn])
    useEffect(() => {
      console.log(filteredData);
    }, [filteredData]);

    return(
        <>
        {
        }
        <div className="flex flex-col gap-4">
            <img class="object-cover h-96 rounded-xl" style={{width: '80rem'}} src={filteredData.gambar} alt="Modern building architecture"/>
            <h1 className="uppercase tracking-wide text-5xl text-white font-bold text-left">{filteredData.nama}</h1>
            <h1 className="uppercase tracking-wide text-2xl text-gray-400 font-regular text-left">{filteredData.asal}</h1>
            <div className="border border-gray-300 rounded-xl p-4 text-justify">
                <p>{filteredData.makna}</p>
            </div>
            {
                
            }
            <a href="/" className="border border-gray-300 rounded-xl p-4 w-24 hover:bg-gray-300 cursor-pointer hover:text-black">
                <p className="text-center">Kembali</p>
            </a>
        </div>
        </>
    )
}