import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GiftExpertApp = () => {

    
    const [categories, setCategories] = useState(['Ultimas busquedas']);


  return <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = {setCategories} />
      <hr />
       <ol>
           {
               categories.map( category => 
               <GifGrid 
                    category = { category } 
                    key = { category }
                    
                /> )
           }
       </ol>

  </div>;
};
