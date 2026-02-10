import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/posts").then((res) => {
            setPosts(res.data.posts)
        })
    }, [])

    return (
        <section className="feed-section">
            <h1 className="feed-title">Feed</h1>

            {posts.length > 0 ? (
                <div className="feed-grid">
                    {posts.map(post => (
                        <div className="feed-card" key={post._id}>
                            <div className="feed-image">
                                <img src={post.image} alt={post.caption} />
                            </div>
                            <div className="feed-content">
                                <p>{post.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-posts">No posts</p>
            )}
        </section>
    )
}

export default Feed
