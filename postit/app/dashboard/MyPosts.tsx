'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchAuthPosts = async () => {
    const response = await axios.get('/api/posts/authPosts')
}