import React from 'react'
import ImageList from './components/ImageList'
import ContainerList from './components/ContainerList'

export const routes= [
    {
        title:"Home",
        path:'/',
        exact:true,
        Component:()=><h2>Home</h2>
    },
    {
        title:"Containers",
        path:'/container',
        Component:ContainerList
    },
    {
        title:"Images",
         path:'/images',
         Component:ImageList
     }
]