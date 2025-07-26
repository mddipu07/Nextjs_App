"use client"
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";


export default async function MealSearchInput() {

// const [meals, setMeals] = useState([]);
const [search, setSearch] = useState("");
const router = useRouter()
const pathname = usePathname();
     
    useEffect(() => {
     const searchQuery = {search}
     const urlQueryparam = new URLSearchParams(searchQuery)
     const url = `${pathname}?${urlQueryparam}`
     router.push(url)
  }, [search]);

  return (
    <div> 
        
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        
        
    </div>
  )
}
