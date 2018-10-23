import React from 'react'
import ImagesList from './components/ImagesList'
export const routes= [
    {
        title:"Home",
        path:'/',
        exact:true,
        Component:()=><h2>Home</h2>
    },
    {
       title:"Images",
        path:'/images',
        Component:ImagesList
    }
]