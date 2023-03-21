import { useEffect } from 'react';
import axios from 'axios';

const useGetBlogs = () => {
    const fetchBlogs = async () => {
        try {
            const { data } = await axios("http://localhost:8000/api/blogs");
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
        
    useEffect(() => {
        fetchBlogs()
    }, [])
}

export default useGetBlogs